# Netlify Deployment Guide voor tosotaircolimburg.nl

## Environment Variables

Voeg deze environment variables toe in Netlify:
**Site settings → Environment variables**

```
VITE_EMAILJS_SERVICE_ID=service_1rruujp
VITE_EMAILJS_TEMPLATE_ID=template_rkcpzhg
VITE_EMAILJS_PUBLIC_KEY=sjJ8kK6U9wFjY0zX9
```

## Build Settings

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18.x or higher

## Deploy Settings

1. Connect je GitHub repository
2. Set de build settings zoals hierboven
3. Add environment variables
4. Deploy!

## Post-Deployment Checklist

- [ ] Test alle contact formulieren
- [ ] Check of EmailJS emails ontvangen worden
- [ ] Test responsive design op mobile
- [ ] Verify alle images laden correct
- [ ] Check de sitemap.xml
- [ ] Test alle interne links

## Domain Settings

Voor het koppelen van tosotaircolimburg.nl:
1. Ga naar Domain settings in Netlify
2. Add custom domain
3. Update DNS records bij je domain provider:
   - A record: Point naar Netlify's IP
   - CNAME: www naar je Netlify subdomain

## SSL Certificate

Netlify provides automatic SSL. Na domain setup:
1. Ga naar Domain settings → HTTPS
2. Verify SSL certificate is active
3. Force HTTPS redirect aanvinken