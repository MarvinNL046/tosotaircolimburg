# CLAUDE.md - StayCool Airco Limburg Project

This file provides guidance to Claude Code (claude.ai/code) when working with the StayCool Airco Limburg website.

## Project Overview

This is a lead generation website for StayCool Airco, built with:
- Vite + React + TypeScript
- Tailwind CSS
- React Router
- React Hook Form + Zod for form validation
- EmailJS for email notifications
- GoHighLevel webhook integration for CRM

## Key Features

### Dual Submission System
The contact forms use a dual submission system that sends data to both:
1. **EmailJS** - Primary email service for notifications
2. **GoHighLevel webhook** - CRM integration for lead management

This ensures redundancy - if one service fails, the lead is still captured.

### Form Components
- Main contact form: `/src/components/sections/contact-form.tsx`
- Email utility: `/src/utils/email.ts`
- Test page: `/contact-webhook-test` (for testing webhook only)

### Environment Variables
Required environment variables:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The GHL webhook URL is hardcoded in `/src/utils/email.ts` but could be made an environment variable if needed.

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
2. **Test webhook only**: Navigate to `/contact-webhook-test`
3. **Debug mode**: Set `DEBUG_MODE = true` in `/src/utils/email.ts` to see console logs

## Important Notes

- The webhook URL is visible in client-side code (this is acceptable for GHL webhooks)
- Form submissions show a success toast and redirect to `/tot-snel` thank you page
- The test page has noindex meta tag to prevent search engine indexing
- All form data is validated using Zod schemas before submission

## Deployment

The site is deployed on Netlify. Environment variables must be set in:
Site settings > Environment variables