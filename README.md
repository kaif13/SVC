# Swami Vivekanand College Website

A modern, responsive college website built with React and Tailwind CSS, featuring a comprehensive design inspired by academic institutions.

## Features

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI Components**: Clean, professional interface with smooth animations
- **Centralized Theme Colors**: Easy color customization through Tailwind config
- **Interactive Navigation**: Dropdown menus and smooth scrolling
- **Results Portal**: Student examination results with search and filtering
- **Application Modal**: Online admission application form
- **Gallery & News**: Campus photos and latest announcements
- **Contact Information**: Complete contact details and social links

## Pages & Sections

- **Home**: Hero banner, statistics, about section, courses, campus gallery, admissions CTA
- **About**: College history, mission, vision, and key information
- **Academics**: Course offerings and department information
- **Admissions**: Application process and requirements
- **Campus Life**: Facilities, events, news, and photo gallery
- **Results**: Student examination results with advanced filtering
- **Contact**: Complete contact information and social media links

## Technology Stack

- **React 19**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework with custom theme
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd svc
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5174](http://localhost:5174) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation with dropdowns
│   ├── Hero.jsx        # Hero section with banner
│   ├── Stats.jsx       # Statistics display
│   ├── AboutSection.jsx # About the college
│   ├── Courses.jsx     # Academic programs
│   ├── CampusGallery.jsx # Gallery and news
│   ├── CTASection.jsx  # Call-to-action for admissions
│   ├── ResultsPage.jsx # Results portal
│   └── ApplyModal.jsx  # Application form modal
├── data/
│   └── collegeData.js  # Dummy data for all content
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Customization

### Theme Colors

All colors are centralized in `tailwind.config.js`. To change the theme:

```javascript
// tailwind.config.js
colors: {
  primary: {
    50: '#eff6ff',   // Lightest blue
    // ... other shades
    950: '#172554',  // Darkest blue
  },
  secondary: {
    // Gray scale for text and backgrounds
  },
  accent: {
    // Orange accent color for buttons
  }
}
```

### Content

All dummy content is stored in `src/data/collegeData.js`. Update this file to change:

- College information
- Courses and departments
- Faculty details
- News and events
- Gallery images
- Contact information

### Images

The project uses Unsplash images for placeholders. Replace with your own images by updating the URLs in `collegeData.js`.

## Features Overview

### Results Portal

- Search by name or roll number
- Filter by course
- Responsive table with grade indicators
- Summary statistics

### Navigation

- Sticky header with smooth scrolling
- Mobile-responsive hamburger menu
- Dropdown menus for sub-navigation

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Optimized layouts for all screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. All content is fictional and created for demonstration.

## Demo

Visit [http://localhost:5174](http://localhost:5174) after running `npm run dev` to see the live website.
