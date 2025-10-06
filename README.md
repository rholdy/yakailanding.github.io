# 🦬 Yakai Landing Page

A beautiful, modern landing page for Yakai - the all-in-one solution for brands to manage licensing from product submission to royalty reporting.

## 🎨 Features

- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Warm Color Scheme**: Gold, orange, brown, and teal palette
- **Email Capture**: Integrated waitlist form with Formspree
- **Smooth Animations**: Fade-ins, parallax effects, and hover interactions
- **Interactive Elements**: Confetti animation, ripple effects, and more
- **Accessibility**: ARIA labels, keyboard navigation, reduced motion support

## 🚀 Live Site

Your site is now live at: **https://rholdy.github.io/yakailanding.github.io/**

Once you configure your custom domain, it will be available at: **https://yakai.app**

## 📋 Setup Instructions

### 1. Configure Email Form (Formspree)

To enable the email capture form:

1. Go to [Formspree](https://formspree.io/) and create a free account
2. Create a new form and get your form endpoint
3. Open `index.html` and replace `YOUR_FORM_ID` on line 50 with your Formspree form ID:
   ```html
   <form id="waitlist-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### 2. Connect Your GoDaddy Domain

#### On GitHub:

1. Go to your repository: https://github.com/rholdy/yakailanding.github.io
2. Click **Settings** → **Pages**
3. Under "Custom domain", enter: `yakai.app`
4. Click **Save**
5. Wait for DNS check to complete (the CNAME file has already been created)

#### On GoDaddy:

1. Log into your GoDaddy account
2. Go to **My Products** → **Domains**
3. Click on **yakai.app** → **Manage DNS**
4. Add/update the following DNS records:

   **For root domain (yakai.app):**
   - Type: `A`
   - Name: `@`
   - Value: `185.199.108.153`
   - TTL: `600` (or default)

   Add three more A records with the same settings but different values:
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

   **For www subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `rholdy.github.io`
   - TTL: `600` (or default)

5. Save all records
6. Wait 10-30 minutes for DNS propagation

#### Enable HTTPS (Recommended):

1. Once DNS is verified on GitHub, check **Enforce HTTPS** in Settings → Pages
2. Wait for the SSL certificate to be issued (can take a few minutes)

## 🛠️ Customization Guide

### Update Content

Edit `index.html` to customize:
- Hero title and subtitle
- Feature cards descriptions
- Footer links
- Meta tags for SEO

### Change Colors

Edit `css/style.css` at the top of the file:
```css
:root {
    --gold: #D4A574;
    --orange: #E97451;
    --brown: #8B5A3C;
    --teal: #4A9B9B;
}
```

### Add Images

1. Place images in the `images/` folder
2. Reference them in HTML: `<img src="images/your-image.png" alt="Description">`

For a yak mascot logo:
```html
<div class="logo">
    <img src="images/yak-logo.png" alt="Yakai Logo">
    <h1>Yakai</h1>
</div>
```

### Modify JavaScript

Edit `js/script.js` to:
- Change animation timing
- Add new interactions
- Customize form behavior

## 📁 File Structure

```
/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Styles and animations
├── js/
│   └── script.js      # Interactive functionality
├── images/            # Image assets (add your own)
├── CNAME              # Custom domain configuration
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## 🔄 Making Updates

After making changes to your site:

```bash
git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically rebuild your site within a few minutes.

## 🎯 Next Steps

1. **Configure Formspree** for email collection
2. **Set up GoDaddy DNS** to connect your domain
3. **Add yak mascot images** to the `images/` folder
4. **Customize content** in `index.html`
5. **Update social links** in the footer
6. **Test on mobile devices** to ensure responsive design works perfectly
7. **Add Google Analytics** (optional) for tracking visitors

## 💡 Tips

- **Test locally**: Open `index.html` directly in your browser
- **Mobile testing**: Use browser dev tools or actual devices
- **Performance**: Images should be optimized (use WebP format when possible)
- **SEO**: Update meta tags in `<head>` section

## 🐛 Troubleshooting

**Domain not working?**
- Check DNS records are correct
- Wait up to 48 hours for full DNS propagation
- Verify CNAME file contains only your domain

**Form not submitting?**
- Ensure Formspree form ID is correctly added
- Check browser console for errors
- Verify Formspree account is active

**Animations not working?**
- Clear browser cache
- Check JavaScript console for errors
- Ensure `script.js` is loading correctly

## 📧 Support

Questions? Reach out at careers@yakai.app

---

Built with ❤️ for Yakai | © 2025 All rights reserved
