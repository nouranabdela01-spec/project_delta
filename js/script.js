/**
 * NOURAN SAAD - PERSONAL PORTFOLIO (BOOTSTRAP 5 VERSION)
 * Custom JavaScript for Bootstrap 5 components, theme toggling & interactions
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. THEME MANAGEMENT (DEFAULT: DARK MODE)
     -------------------------------------------------------------------------- */
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const THEME_KEY = 'nouran_portfolio_theme';

  function getSavedTheme() {
    return localStorage.getItem(THEME_KEY) || 'dark';
  }

  function setTheme(theme) {
    htmlElement.setAttribute('data-bs-theme', theme);
    htmlElement.setAttribute('data-theme', theme);
    if (themeToggle) {
      const isDark = theme === 'dark';
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      themeToggle.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    }
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      // Graceful fallback for privacy mode
    }
  }

  // Initialize theme
  setTheme(getSavedTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlElement.getAttribute('data-bs-theme') || 'dark';
      const target = current === 'dark' ? 'light' : 'dark';
      setTheme(target);
    });
  }

  /* --------------------------------------------------------------------------
     2. AUTO-CLOSE MOBILE NAVBAR ON LINK CLICK
     -------------------------------------------------------------------------- */
  const navCollapse = document.getElementById('navbarNav');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  if (navCollapse && window.bootstrap) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const bsCollapse = window.bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse && navCollapse.classList.contains('show')) {
          bsCollapse.hide();
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     3. PORTFOLIO CATEGORY FILTERING
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.btn-filter');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.classList.remove('is-hidden');
        } else {
          item.classList.add('is-hidden');
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     4. BOOTSTRAP MODAL DETAILS & MEDIA VIEWER
     -------------------------------------------------------------------------- */
  const projectMap = {
    'pizza-poster': {
      title: 'Pizza Restaurant Poster (EL KING PIZZA)',
      category: 'Graphic Design',
      desc: 'A promotional poster design for a pizza restaurant (EL KING PIZZA), highlighting the food concept with bold typography, flame lighting effects, discount offer (20% OFF بمناسبة الافتتاح), and contact information.',
      images: [
        { src: 'images/projects/pizza-poster/pizza-poster.jpg', caption: 'EL KING PIZZA - Promotional Poster' }
      ]
    },
    'presentations': {
      title: 'Presentations',
      category: 'Presentation Design',
      desc: 'A collection of presentation materials focused on organizing information and communicating ideas through clear visual structure. (Slide deck assets currently in preparation).',
      images: [    {
      src: 'images/projects/presentations/presentation-cover.jpg',
      caption: 'Presentation Design Cover'
    }]
    },
    'coffee-shop': {
      title: 'Coffee Shop Design (Nour aleishq)',
      category: 'Creative Design',
      desc: 'A promotional design concept for Nour aleishq Coffee Festival ("This is where coffee lovers gather - coffee time - Order Now!"), presenting warm coffee tones and elegant typographic hierarchy.',
      images: [
        { src: 'images/projects/coffee-shop/coffee-shop-design.jpg', caption: 'Nour aleishq - Coffee Festival Promotional Design' }
      ]
    },
    'clothing-store': {
      title: 'Clothing Store Design (MAWADA STORE)',
      category: 'Creative Design',
      desc: 'A brand identity and logo concept for MAWADA STORE emphasizing minimalist elegance, typographic balance with letter M, and a stylized hijab silhouette.',
      images: [
        { src: 'images/projects/clothing-store/clothing-store-design.jpg', caption: 'MAWADA STORE - Identity & Logo Design' }
      ]
    },
    'python-code': {
      title: 'Python Code Practice Exercises',
      category: 'Programming',
      desc: 'Hands-on programming practice by Nouran Saad covering data structures, lists, indexing, tuples, string manipulation, error handling analysis, and mathematical operations.',
      images: [
        { src: 'images/projects/python-code/python-sample-1.png', caption: 'Exercise 1: Data Structures, Lists, & String Checks' },
        { src: 'images/projects/python-code/python-sample-2.png', caption: 'Exercise 2: Type Casting, String Indexing & Logic' },
        { src: 'images/projects/python-code/python-sample-3.png', caption: 'Exercise 3: Lists, Tuples, Count, and Operations' }
      ]
    },
    'certificates': {
      title: 'Academic Honor & Professional Certificates',
      category: 'Academic Achievements',
      desc: 'Official verified academic achievements of Nouran Saad, including Delta Higher Institute Class Honor Board (Rank #1 / المركز الأول), Cumulative GPA 3.93 Transcript (Semester 4.0), and HR Training Specialist Certification (Grade: Excellent).',
      images: [
        { src: 'images/certificates/honor-board-delta.jpg', caption: 'Delta Higher Institute Honor Board - Rank #1 (المركز الأول)' },
        { src: 'images/certificates/academic-transcript.jpg', caption: 'Official Academic Transcript (CGPA: 3.93 / 4.00 - 99 Credit Hours)' },
        { src: 'images/certificates/hr-certificate.jpg', caption: 'How to be HR Certificate - Grade: Excellent' }
      ]
    }
  };

  const modalEl = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalDesc = document.getElementById('modalProjectDesc');
  const modalGuide = document.getElementById('modalGuide');
  const modalPlaceholder = document.querySelector('.modal-preview-placeholder');

  const modalTriggers = document.querySelectorAll('.trigger-project-modal');
  modalTriggers.forEach(button => {
    button.addEventListener('click', () => {
      const pId = button.getAttribute('data-project-id');
      const data = projectMap[pId];
      if (data && modalEl) {
        modalTitle.textContent = data.title;
        modalCategory.textContent = data.category;
        modalDesc.textContent = data.desc;

        if (data.images && data.images.length > 0) {
          modalGuide.innerHTML = `This project sawcases original work by <strong>Nouran Saad</strong>.`;
          
          let activeIdx = 0;
          function renderBsMedia() {
            const cur = data.images[activeIdx];
            let thumbs = '';
            if (data.images.length > 1) {
              thumbs = `<div class="modal-thumbs-row">` + data.images.map((im, i) => `
                <button type="button" class="modal-thumb-btn ${i === activeIdx ? 'active' : ''}" data-idx="${i}" title="${im.caption}">
                  <img src="${im.src}" alt="${im.caption}">
                </button>
              `).join('') + `</div>`;
            }

            modalPlaceholder.innerHTML = `
              <div class="modal-media-container">
                <img src="${cur.src}" alt="${cur.caption}" class="main-preview">
                <p class="small text-muted mb-0 mt-2">${cur.caption}</p>
                ${thumbs}
              </div>
            `;

            modalPlaceholder.querySelectorAll('.modal-thumb-btn').forEach(btn => {
              btn.addEventListener('click', (e) => {
                e.preventDefault();
                activeIdx = parseInt(btn.getAttribute('data-idx'), 10);
                renderBsMedia();
              });
            });
          }

        renderBsMedia();

    modalGuide.innerHTML = '';
        }

        if (window.bootstrap) {
          const bsModal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
          bsModal.show();
        }
      }
    });
  });

  /* --------------------------------------------------------------------------
     5. FORM VALIDATION & CLIENT-SIDE FEEDBACK
     -------------------------------------------------------------------------- */
  const bsForm = document.getElementById('bootstrap-contact-form');
  const formFeedback = document.getElementById('bs-form-feedback');

  if (bsForm && formFeedback) {
    bsForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!bsForm.checkValidity()) {
        e.stopPropagation();
        bsForm.classList.add('was-validated');
        formFeedback.className = 'alert alert-danger';
        formFeedback.textContent = 'Please fill out all required fields with valid information.';
        return;
      }

      bsForm.classList.add('was-validated');
      const nameInput = document.getElementById('bs-name');
      const senderName = nameInput ? nameInput.value.trim() : 'there';

      formFeedback.className = 'alert alert-success';
      formFeedback.innerHTML = `<strong>Thank you, ${escapeHtml(senderName)}!</strong> Form validation passed. As documented, this portfolio is operating in demonstration mode. To forward real emails to your inbox, link your Formspree endpoint in the form action attribute.`;

      bsForm.reset();
      bsForm.classList.remove('was-validated');
    });
  }

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  /* --------------------------------------------------------------------------
     6. BACK TO TOP BUTTON
     -------------------------------------------------------------------------- */
  const backToTop = document.getElementById('bs-back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     7. DYNAMIC YEAR
     -------------------------------------------------------------------------- */
  const yearSpan = document.getElementById('bs-current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
