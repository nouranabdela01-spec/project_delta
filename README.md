# Nouran Saad — Personal Portfolio (Bootstrap 5 Version)

A modern, responsive, high-performance personal portfolio website for **Nouran Saad** built using **Bootstrap 5.3**, custom CSS3 branding tokens, and vanilla JavaScript.

---

## 🌐 External Dependencies & Internet Requirement

This version references official, stable CDN resources:
- **Bootstrap 5.3.3 CSS & JS Bundle**: Hosted via `cdn.jsdelivr.net`.
- **Bootstrap Icons 1.11.3**: Hosted via `cdn.jsdelivr.net`.
- **Google Fonts (Inter & JetBrains Mono)**: Hosted via `fonts.googleapis.com`.

> **Note:** An active internet connection is required when previewing or running this version to load Bootstrap and Google Fonts from their CDNs. If offline viewing is required, the Simple Version (`simple-version/`) is completely self-contained.

---

## 📁 File Structure

```text
bootstrap-version/
│
├── index.html                  # Semantic HTML5 document with Bootstrap 5 components
├── css/
│   └── style.css               # Custom theme variables, dark mode styling & overrides
├── js/
│   └── script.js               # Bootstrap modal controller, theme persistence, filters
├── images/
│   ├── projects/
│   │   ├── pizza-poster/       # Folder for actual pizza restaurant poster
│   │   ├── presentations/      # Folder for actual presentation deck previews
│   │   ├── coffee-shop/        # Folder for actual coffee shop design files
│   │   ├── clothing-store/     # Folder for actual clothing store design files
│   │   └── python-code/        # Folder for actual Python code screenshots/scripts
│   ├── certificates/           # Folder for genuine academic certificates
│   └── recognition-videos/     # Folder for genuine recognition video clips
└── README.md                   # This documentation guide
```

---

## 🚀 How to Open the Website Locally

1. **Direct Browser Launch**:
   - Double-click `index.html` or right-click and choose your web browser.
2. **Local Web Server (Optional)**:
   - Run in terminal:
     ```bash
     python -m http.server 8000
     ```
     Open `http://localhost:8000/bootstrap-version/` in your browser.

---

## 🎨 Theme System (Dark Mode Default)

The portfolio defaults to dark mode using Bootstrap's native `data-bs-theme="dark"` attribute combined with custom CSS custom properties in `css/style.css`:

```css
:root, [data-bs-theme="dark"] {
  --brand-bg: #0b0f19;
  --brand-bg-alt: #111827;
  --brand-card: #151d30;
  --accent-primary: #6366f1;
}

[data-bs-theme="light"] {
  --brand-bg: #f8fafc;
  --brand-bg-alt: #f1f5f9;
  --brand-card: #ffffff;
  --accent-primary: #4f46e5;
}
```

The theme switcher automatically synchronizes Bootstrap components (cards, navbar, modals, form controls) between light and dark modes and remembers the choice in `localStorage`.

---

## 🖼️ How to Replace Project Placeholders with Genuine Assets

In keeping with strict portfolio integrity, **no fake images, screenshots, or mock credentials are used**. Polished placeholder panels are in place until you add your real files:

1. **Pizza Restaurant Poster**:
   - Save your poster image (e.g. `pizza-poster.jpg`) into `images/projects/pizza-poster/`.
   - In `index.html`, find `data-category="graphic-design"`.
   - Replace the `.project-thumb-box` container's placeholder with:
     ```html
     <div class="project-thumb-box">
       <img src="images/projects/pizza-poster/pizza-poster.jpg" alt="Pizza Restaurant Poster Design by Nouran Saad" class="img-fluid object-fit-cover w-100 h-100">
     </div>
     ```
2. **Presentations, Coffee Shop, Clothing Store, Python, Certificates**:
   - Drop your genuine files into the respective subdirectories inside `images/`.
   - Update the placeholder boxes in `index.html`.

---

## ✉️ Configuring Contact Information

### Email
1. Open `index.html` and locate `contact-email-val`.
2. Replace the comment/placeholder with your actual link:
   ```html
   <a href="mailto:your-real-email@example.com" class="text-decoration-none fw-semibold">your-real-email@example.com</a>
   ```

### Social Profiles
1. Locate `Social & Professional Profiles` in `index.html`.
2. Uncomment the social links block and add your genuine profile URLs.

### Contact Form Backend
To enable live email delivery:
1. Obtain a free form endpoint at [Formspree](https://formspree.io).
2. Set `<form id="bootstrap-contact-form" action="https://formspree.io/f/YOUR_ENDPOINT_ID" method="POST">`.

---

## 📱 Testing Responsiveness

Test responsive rendering across viewports in Developer Tools (`F12`):
- **320px** / **375px** (Mobile)
- **768px** (Tablet)
- **1024px** (Laptop)
- **1440px** (Desktop)

---

## 🌐 Static Deployment

Deploy to GitHub Pages, Netlify, or Vercel:
- **Netlify**: Drag and drop the `bootstrap-version` folder onto [Netlify Drop](https://app.netlify.com/drop).
- **GitHub Pages**: Push this repository and activate Pages under Settings.
