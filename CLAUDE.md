# CLAUDE.md - StayCool Airco Limburg Project

This file provides guidance to Claude Code (claude.ai/code) when working with the StayCool Airco Limburg website.

## Project Overview

This is a lead generation website for StayCool Airco, built with:
- Vite + React + TypeScript
- Tailwind CSS
- React Router
- React Hook Form + Zod for form validation
- EmailJS for email notifications
- LeadFlow CRM integration for lead management

## Key Features

### Dual Submission System
The contact forms use a dual submission system that sends data to both:
1. **EmailJS** - Primary email service for notifications
2. **LeadFlow CRM** - CRM integration for lead management

This ensures redundancy - if one service fails, the lead is still captured.

### Form Components
- Main contact form: `/src/components/sections/contact-form.tsx`
- Email utility: `/src/utils/email.ts`

### Environment Variables
Required environment variables:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Run type checking
npm run typecheck
```

## Testing the Implementation

1. **Test full functionality**: Use the main contact form on the homepage
2. **Debug mode**: Set `DEBUG_MODE = true` in `/src/utils/email.ts` to see console logs

## Important Notes

- Form submissions show a success toast and redirect to `/tot-snel` thank you page
- All form data is validated using Zod schemas before submission

## Deployment

The site is deployed on Netlify. Environment variables must be set in:
Site settings > Environment variables
