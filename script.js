// =========================================
// CUSTOM CURSOR (only on desktop)
// =========================================
const isTouch = window.matchMedia('(pointer: coarse)').matches;

if (!isTouch) {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let ticking = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (!ticking) {
      requestAnimationFrame(() => {
        cursor.style.left = mouseX - 5 + 'px';
        cursor.style.top = mouseY - 5 + 'px';
        ticking = false;
      });
      ticking = true;
    }
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX - 18 + 'px';
    ring.style.top = ringY - 18 + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const interactiveEls = document.querySelectorAll('a, button, .skill-tag, .about-card, .project-card');
  interactiveEls.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
      ring.style.transform = 'scale(1.5)';
      ring.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      ring.style.transform = 'scale(1)';
      ring.style.opacity = '0.5';
    });
  });
}

// =========================================
// SCROLL REVEAL (improved performance)
// =========================================
const revealEls = document.querySelectorAll('.project-card, .about-card, .exp-item, .skill-category');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target); // Stop observing after reveal
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
  revealObserver.observe(el);
});

// =========================================
// ACTIVE NAV HIGHLIGHT (fixed)
// =========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let current = '';
  const scrollPos = window.scrollY + 150;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    
    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute('href').substring(1);
    if (href === current) {
      link.style.color = 'var(--accent)';
    } else {
      link.style.color = '';
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);



// =========================================
// RESUME DOWNLOAD HANDLER
// =========================================
const resumeLink = document.getElementById('resumeLink');
if (resumeLink) {
  resumeLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('📄 Resume PDF coming soon! Meanwhile, feel free to connect on LinkedIn.');
    window.open('https://www.linkedin.com/in/sonabr016/', '_blank');
  });
}

// =========================================
// SMOOTH SCROLL FOR NAV LINKS
// =========================================
document.querySelectorAll('.nav-links a, .back-top').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId && targetId !== '#') {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// =========================================
// FIX TYPO IN POLLYTICS DESCRIPTION
// =========================================
// (Fix the HTML directly - find and replace "reated" with "Created")