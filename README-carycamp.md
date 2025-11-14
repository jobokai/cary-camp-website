# Cary Camp Website

A fully accessible, mobile-friendly website for Franklin L. Cary Camp featuring rustic styling and the motto "Your Backyard Wilderness".

## Features

- **Accessibility**: WCAG AA 2.1 compliant with proper semantic HTML, ARIA labels, keyboard navigation, and screen reader support
- **Mobile-First Design**: Responsive layout optimized for all screen sizes
- **Rustic Camp Theme**: Warm, woodsy colors and typography that reflect the camp's natural setting
- **Static Site Generation**: Templates rendered from Handlebars to static HTML

## Quick Start

### View the Site
```powershell
# Install a static file server
yarn global add serve

# Serve the generated site
serve -s public

# Open http://localhost:3000/carycamp/index.html
```

### Development

```powershell
# Install dependencies
yarn install

# Compile SCSS styles
yarn node scripts/compileSass.cjs

# Render Handlebars templates
yarn node scripts/renderTemplates.cjs
```

## Site Structure

- `src/templates/` - Handlebars templates
  - `layout.hbs` - Main layout with navigation and footer
  - `carycamp/` - Page templates for each section
- `src/styles/carycamp.scss` - Sass styles with variables, mixins, and responsive design
- `public/carycamp/` - Generated static HTML files
- `scripts/` - Build scripts for compilation and rendering

## Accessibility Features

- Skip navigation link for keyboard users
- Proper heading hierarchy (h1-h6)
- Alt text for all images
- High contrast color ratios (WCAG AA compliant)
- Focus indicators for keyboard navigation
- Screen reader friendly markup with ARIA labels
- Mobile-friendly touch targets
- Reduced motion support for users with vestibular disorders

## Pages Available

- Homepage with hero section and "Your Backyard Wilderness" motto
- About / Camp History
- Facilities overview and detailed pages
- Policies and contact information
- Activities (compass course, trails, recreation)
- Events and weddings
- Commemorative bricks program

## Next Steps

This static site can be integrated into your Vite + React project or deployed as-is. The templates can be extended or modified as needed.

## Content Attribution

Content adapted from carycamp.com with proper attribution in footer.