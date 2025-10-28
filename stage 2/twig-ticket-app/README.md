# Twig Ticket Management App

A modern ticket management application built with Twig templating engine and PHP, featuring authentication, real-time statistics, and complete CRUD operations for ticket management.

## Project Structure

\`\`\`
├── public/
│   └── index.php                # Main router and application logic
├── templates/                   # Twig template files
│   ├── base.html.twig          # Base template with layout
│   ├── home.html.twig          # Landing page
│   ├── login.html.twig         # Login page
│   ├── signup.html.twig        # Signup page
│   └── dashboard.html.twig     # Dashboard with ticket management
├── composer.json               # PHP dependencies
└── .htaccess                   # URL rewriting configuration
\`\`\`

## Features

### Landing Page
- Professional hero section with wavy SVG background
- Feature highlights showcasing key benefits
- Call-to-action buttons for signup and login
- Responsive design for all screen sizes

### Authentication
- User registration with email and password
- Login with form validation
- Session-based authentication
- Protected routes requiring authentication

### Dashboard
- Real-time statistics showing:
  - Total tickets
  - Open tickets (green)
  - In Progress tickets (amber)
  - Closed tickets (gray)
- Complete ticket list with status and priority badges
- Quick actions (Edit, Delete)

### Ticket Management
- **Create**: Add new tickets with title, description, status, and priority
- **Read**: View all tickets in a clean table format
- **Update**: Edit existing tickets
- **Delete**: Remove tickets with confirmation
- All changes persist in PHP sessions

### Design System
- **Color Scheme**: Purple primary (#7c3aed), with gray neutrals
- **Typography**: System fonts for optimal performance
- **Spacing**: Consistent spacing system
- **Responsive**: Mobile-first design with Tailwind CSS

## Getting Started

### Requirements
- PHP 7.4 or higher
- Composer

### Installation

\`\`\`bash
# Install dependencies
composer install

# Start PHP development server
php -S localhost:8000

# Visit http://localhost:8000 in your browser
\`\`\`

## Testing the App

1. **Sign Up**: Create a new account with email and password
2. **Login**: Use your credentials to access the dashboard
3. **Create Ticket**: Click "New Ticket" and fill in the form
4. **Edit Ticket**: Click "Edit" on any ticket to modify it
5. **Delete Ticket**: Click "Delete" to remove a ticket
6. **View Stats**: Monitor real-time statistics on the dashboard

## Technical Details

### Twig Implementation
- **Template Engine**: Twig for server-side rendering
- **Backend**: PHP with session-based state management
- **Styling**: Tailwind CSS for utility-first styling
- **Storage**: PHP sessions for data persistence
- **Routing**: Simple PHP router with URL rewriting

## Form Validation

The app includes comprehensive form validation:
- Email format validation
- Password length requirements (minimum 6 characters)
- Password confirmation matching
- Real-time error messages
- Visual feedback with error states

## Accessibility

- Semantic HTML elements
- Proper form labels and error messages
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Deployment

Deploy to any PHP hosting provider:

1. Upload files to your hosting server
2. Ensure PHP 7.4+ is installed
3. Run `composer install` on the server
4. Configure your web server to point to the `public/` directory
5. Access your app via your domain

### Popular Hosting Options
- Bluehost
- SiteGround
- HostGator
- Heroku (with buildpack)
- AWS Elastic Beanstalk

## Future Enhancements

- Database integration (MySQL/PostgreSQL)
- User profiles and teams
- Ticket filtering and search
- Advanced analytics
- Email notifications
- API endpoints

## License

MIT
