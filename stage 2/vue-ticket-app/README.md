# TicketHub - Vue.js Implementation

A modern ticket management web application built with Vue.js 3, featuring authentication, dashboard, and full CRUD operations for ticket management.

## Features

- **Landing Page**: Hero section with wavy background, decorative circles, and feature cards
- **Authentication**: Login and signup with form validation and error handling
- **Dashboard**: Statistics overview (total, open, resolved tickets)
- **Ticket Management**: Create, read, update, and delete tickets with status tracking
- **Responsive Design**: Mobile-first design that works on all devices
- **Session Management**: localStorage-based authentication with protected routes

## Tech Stack

- **Vue.js 3**: Progressive JavaScript framework
- **Vue Router 4**: Client-side routing
- **Tailwind CSS 4**: Utility-first CSS framework
- **Vite**: Next-generation frontend build tool

## Setup & Installation

### Prerequisites
- Node.js 16+ and npm

### Installation Steps

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

\`\`\`
src/
├── pages/
│   ├── Landing.vue       # Landing page with hero section
│   ├── Login.vue         # Login page
│   ├── Signup.vue        # Signup page
│   ├── Dashboard.vue     # Dashboard with statistics
│   └── Tickets.vue       # Ticket management (CRUD)
├── components/
│   └── Toast.vue         # Toast notification component
├── router.ts             # Vue Router configuration
├── app.vue               # Root component
├── main.ts               # Application entry point
├── globals.css           # Global styles and design tokens
└── package.json          # Dependencies
\`\`\`

## Authentication

### Demo Credentials
- **Email**: demo@example.com
- **Password**: demo123

### How It Works
- Authentication is simulated using localStorage with key `ticketapp_session`
- Session tokens are generated on successful login/signup
- Protected routes redirect to login if no valid session exists
- Logout clears the session and redirects to the landing page

## Ticket Management

### Status Values
- **open**: Green badge - New or unresolved tickets
- **in_progress**: Amber badge - Currently being worked on
- **closed**: Gray badge - Resolved tickets

### CRUD Operations
- **Create**: Click "New Ticket" button to open the form
- **Read**: View all tickets in the list
- **Update**: Click "Edit" on any ticket to modify it
- **Delete**: Click "Delete" with confirmation dialog

## Design System

### Color Palette
- **Primary**: #3b82f6 (Blue)
- **Success**: #10b981 (Green)
- **Warning**: #f59e0b (Amber)
- **Error**: #ef4444 (Red)
- **Neutral**: #6b7280 (Gray)

### Layout
- Max-width: 1440px (centered on large screens)
- Responsive grid system (1 column mobile, 2-3 columns desktop)
- Wavy SVG background on hero section
- Decorative circles for visual interest

## Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus states on interactive elements

## Known Issues & Limitations

- Authentication is simulated (no real backend)
- Data persists only in localStorage (lost on browser clear)
- No real-time updates between tabs
- Email validation is basic

## Future Enhancements

- Backend API integration
- Real user authentication
- Database persistence
- Real-time notifications
- Team collaboration features
- Advanced filtering and search

## License

MIT License - Feel free to use this project for learning and development.
