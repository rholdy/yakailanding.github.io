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

**https://yakai.app**

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

## 💡 Development

**Test locally**: Open `index.html` directly in your browser

**Performance tips**:
- Optimize images (use WebP format when possible)
- Update meta tags in `<head>` section for SEO

---

Built with ❤️ for Yakai | © 2025 All rights reserved
