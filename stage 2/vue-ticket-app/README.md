# Vue.js Ticket Management App

A modern ticket management application built with Vue.js 3, featuring authentication, real-time statistics, and complete CRUD operations for ticket management.

## Project Structure

\`\`\`
├── src/                         # Vue.js implementation
│   ├── App.vue                  # Root component
│   ├── main.js                  # Vue entry point
│   ├── style.css                # Global styles
│   ├── views/                   # Page components
│   │   ├── Home.vue            # Landing page
│   │   ├── Login.vue           # Login page
│   │   ├── Signup.vue          # Signup page
│   │   └── Dashboard.vue       # Dashboard with ticket management
│   └── components/              # Reusable components
│       ├── Navigation.vue       # Navigation bar
│       ├── HeroSection.vue      # Hero section
│       ├── CreateTicketDialog.vue # Create ticket modal
│       └── EditTicketDialog.vue   # Edit ticket modal
└── public/                      # Static assets
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
- localStorage-based session management
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
- **Update**: Edit existing tickets with modal dialog
- **Delete**: Remove tickets with confirmation
- All changes persist in localStorage

### Design System
- **Color Scheme**: Purple primary (#7c3aed), with gray neutrals
- **Typography**: System fonts for optimal performance
- **Spacing**: Consistent 4px grid system
- **Responsive**: Mobile-first design with breakpoints at 640px, 768px, 1024px

## Getting Started

### Installation

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

Visit the provided local URL to see the app running.

## Testing the App

1. **Sign Up**: Create a new account with email and password
2. **Login**: Use your credentials to access the dashboard
3. **Create Ticket**: Click "New Ticket" and fill in the form
4. **Edit Ticket**: Click "Edit" on any ticket to modify it
5. **Delete Ticket**: Click "Delete" to remove a ticket
6. **View Stats**: Monitor real-time statistics on the dashboard

## Technical Details

### Vue.js Implementation
- **Framework**: Vue 3 with Composition API
- **Routing**: Vue Router for client-side navigation
- **Styling**: Tailwind CSS v4 for utility-first styling
- **State Management**: Vue ref() and computed() for reactive state
- **Storage**: localStorage API for data persistence
- **Build Tool**: Vite for fast development and optimized builds

## Form Validation

The app includes comprehensive form validation:
- Email format validation
- Password length requirements (minimum 6 characters)
- Password confirmation matching
- Real-time error messages
- Visual feedback with error states

## Accessibility

- Semantic HTML elements
- ARIA attributes for form validation
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Deployment

Deploy to Vercel or any static hosting platform:

\`\`\`bash
npm run build
# Deploy the dist/ folder to your hosting provider
\`\`\`

### Deploy to Vercel

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Future Enhancements

- Backend API integration
- Database persistence
- User profiles and teams
- Ticket filtering and search
- Advanced analytics
- Real-time collaboration
- Email notifications

## License

MIT
