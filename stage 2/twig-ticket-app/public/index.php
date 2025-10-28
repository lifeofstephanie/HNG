<?php
session_start();

// Simple router
$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$request_uri = str_replace('/public', '', $request_uri);
$request_method = $_SERVER['REQUEST_METHOD'];

// Load Twig
require_once __DIR__ . '/../vendor/autoload.php';
$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/../templates');
$twig = new \Twig\Environment($loader);

// Helper functions
function isLoggedIn() {
    return isset($_SESSION['user']);
}

function requireLogin() {
    if (!isLoggedIn()) {
        header('Location: /public/login');
        exit;
    }
}

function getTickets() {
    if (!isset($_SESSION['tickets'])) {
        $_SESSION['tickets'] = [];
    }
    return $_SESSION['tickets'];
}

function saveTickets($tickets) {
    $_SESSION['tickets'] = $tickets;
}

// Routes
if ($request_uri === '/' || $request_uri === '/public/') {
    echo $twig->render('home.html.twig');
} elseif ($request_uri === '/public/login') {
    if (isLoggedIn()) {
        header('Location: /public/dashboard');
        exit;
    }
    
    $error = '';
    if ($request_method === 'POST') {
        $email = $_POST['email'] ?? '';
        $password = $_POST['password'] ?? '';
        
        if (empty($email) || empty($password)) {
            $error = 'Email and password are required';
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error = 'Invalid email format';
        } else {
            // Simple authentication (in production, use proper password hashing)
            $_SESSION['user'] = ['email' => $email];
            header('Location: /public/dashboard');
            exit;
        }
    }
    
    echo $twig->render('login.html.twig', ['error' => $error]);
} elseif ($request_uri === '/public/signup') {
    if (isLoggedIn()) {
        header('Location: /public/dashboard');
        exit;
    }
    
    $error = '';
    if ($request_method === 'POST') {
        $email = $_POST['email'] ?? '';
        $password = $_POST['password'] ?? '';
        $confirmPassword = $_POST['confirmPassword'] ?? '';
        
        if (empty($email) || empty($password) || empty($confirmPassword)) {
            $error = 'All fields are required';
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error = 'Invalid email format';
        } elseif (strlen($password) < 6) {
            $error = 'Password must be at least 6 characters';
        } elseif ($password !== $confirmPassword) {
            $error = 'Passwords do not match';
        } else {
            $_SESSION['user'] = ['email' => $email];
            header('Location: /public/dashboard');
            exit;
        }
    }
    
    echo $twig->render('signup.html.twig', ['error' => $error]);
} elseif ($request_uri === '/public/dashboard') {
    requireLogin();
    
    $tickets = getTickets();
    $stats = [
        'total' => count($tickets),
        'open' => count(array_filter($tickets, fn($t) => $t['status'] === 'open')),
        'inProgress' => count(array_filter($tickets, fn($t) => $t['status'] === 'in-progress')),
        'closed' => count(array_filter($tickets, fn($t) => $t['status'] === 'closed')),
    ];
    
    echo $twig->render('dashboard.html.twig', [
        'user' => $_SESSION['user'],
        'tickets' => $tickets,
        'stats' => $stats
    ]);
} elseif ($request_uri === '/public/api/tickets' && $request_method === 'POST') {
    requireLogin();
    
    $data = json_decode(file_get_contents('php://input'), true);
    $tickets = getTickets();
    
    if ($data['action'] === 'create') {
        $ticket = [
            'id' => uniqid(),
            'title' => $data['title'],
            'description' => $data['description'],
            'status' => $data['status'],
            'priority' => $data['priority'],
            'createdAt' => date('Y-m-d H:i:s')
        ];
        $tickets[] = $ticket;
        saveTickets($tickets);
        echo json_encode(['success' => true, 'ticket' => $ticket]);
    } elseif ($data['action'] === 'update') {
        foreach ($tickets as &$ticket) {
            if ($ticket['id'] === $data['id']) {
                $ticket['title'] = $data['title'];
                $ticket['description'] = $data['description'];
                $ticket['status'] = $data['status'];
                $ticket['priority'] = $data['priority'];
                break;
            }
        }
        saveTickets($tickets);
        echo json_encode(['success' => true]);
    } elseif ($data['action'] === 'delete') {
        $tickets = array_filter($tickets, fn($t) => $t['id'] !== $data['id']);
        saveTickets(array_values($tickets));
        echo json_encode(['success' => true]);
    }
} elseif ($request_uri === '/public/logout') {
    session_destroy();
    header('Location: /public/');
    exit;
} else {
    http_response_code(404);
    echo $twig->render('404.html.twig');
}
?>
