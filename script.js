// =========================================
// CUSTOM CURSOR
// =========================================
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

// Move the dot instantly
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX - 5 + 'px';
  cursor.style.top  = mouseY - 5 + 'px';
});

// Smoothly lag the ring behind
function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX - 18 + 'px';
  ring.style.top  = ringY - 18 + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Scale cursor on hover over interactive elements
const interactiveEls = document.querySelectorAll(
  'a, button, .skill-tag, .about-card, .project-card'
);
interactiveEls.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    ring.style.transform   = 'scale(1.5)';
    ring.style.opacity     = '0.3';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    ring.style.transform   = 'scale(1)';
    ring.style.opacity     = '0.5';
  });
});


// =========================================
// SCROLL REVEAL
// =========================================
const revealEls = document.querySelectorAll(
  '.project-card, .about-card, .exp-item, .skill-category'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

revealEls.forEach((el) => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});


// =========================================
// ACTIVE NAV HIGHLIGHT ON SCROLL
// =========================================
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === '#' + current;
    link.style.color = isActive ? 'var(--accent)' : '';
  });
});


// =========================================
// CONTACT FORM (basic front-end handler)
// Replace this with your actual backend / EmailJS / Formspree
// =========================================
const sendBtn = document.querySelector('.contact-form .btn-primary');

if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name    = document.querySelector('.contact-form input[type="text"]').value.trim();
    const email   = document.querySelector('.contact-form input[type="email"]').value.trim();
    const message = document.querySelector('.contact-form textarea').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // TODO: wire up to EmailJS / Formspree / your own API
    // Example with Formspree:
    // fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, message })
    // });

    sendBtn.textContent = 'Sent ✓';
    sendBtn.style.background = '#00c9a0';
    setTimeout(() => {
      sendBtn.textContent = 'Send Message →';
      sendBtn.style.background = '';
    }, 3000);
  });
}