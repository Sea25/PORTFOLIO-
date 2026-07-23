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
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        ticking = false;
      });
      ticking = true;
    }
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover Effect for interactive items
  const interactiveEls = document.querySelectorAll('a, button, .floppy, .plate, .flyer-tab, .stamp, .rotary-hole');
  interactiveEls.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '24px';
      cursor.style.height = '24px';
      cursor.style.backgroundColor = 'rgba(122, 38, 240, 0.15)';
      cursor.style.border = '1px solid #7a26f0';
      ring.style.width = '48px';
      ring.style.height = '48px';
      ring.style.borderColor = 'transparent';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      cursor.style.backgroundColor = '#7a26f0';
      cursor.style.border = 'none';
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'var(--purple)';
    });
  });
} else {
  // Hide custom cursor completely on mobile/touch
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (cursor) cursor.style.display = 'none';
  if (ring) ring.style.display = 'none';
}

// =========================================
// RESUME DOWNLOAD HANDLER
// =========================================
const resumeLink = document.getElementById('resumeLink');
if (resumeLink) {
  resumeLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('📄 Resume PDF is coming soon! Meanwhile, feel free to visit my LinkedIn profile.');
    window.open('https://www.linkedin.com/in/sonabr016/', '_blank');
  });
}

// =========================================
// ROTARY PHONE DIALER ANIMATION
// =========================================
const rotaryDial = document.getElementById('rotaryDial');
const rotaryHoles = document.querySelectorAll('.rotary-hole');

if (rotaryDial) {
  rotaryHoles.forEach((hole, idx) => {
    hole.addEventListener('click', () => {
      const degrees = (idx + 1) * 30 + 60;
      // Rotate dial
      rotaryDial.style.transform = `rotate(${degrees}deg)`;
      
      // Return dial back after rotation
      setTimeout(() => {
        rotaryDial.style.transform = 'rotate(0deg)';
      }, 700);
    });
  });
}

// =========================================
// "FIND THE PIXEL" GAME LOGIC
// =========================================
const pixelCanvas = document.getElementById('pixelCanvas');
const pixelTarget = document.getElementById('pixelTarget');
const startGameBtn = document.getElementById('startGame');
const scoreVal = document.getElementById('scoreVal');
const timerVal = document.getElementById('timerVal');

let score = 0;
let timeLeft = 10;
let gameInterval = null;
let gameActive = false;

function spawnPixel() {
  if (!pixelCanvas || !pixelTarget) return;
  const canvasWidth = pixelCanvas.clientWidth;
  const canvasHeight = pixelCanvas.clientHeight;
  
  // Random position within borders
  const randomX = Math.floor(Math.random() * (canvasWidth - 16)) + 5;
  const randomY = Math.floor(Math.random() * (canvasHeight - 16)) + 5;
  
  pixelTarget.style.left = randomX + 'px';
  pixelTarget.style.top = randomY + 'px';
  pixelTarget.style.display = 'block';
}

function resetGame() {
  clearInterval(gameInterval);
  gameActive = false;
  score = 0;
  timeLeft = 10;
  scoreVal.textContent = score;
  timerVal.textContent = timeLeft;
  pixelTarget.style.display = 'none';
  startGameBtn.textContent = "Start Game →";
  startGameBtn.style.opacity = '1';
}

if (startGameBtn) {
  startGameBtn.addEventListener('click', () => {
    if (gameActive) {
      resetGame();
      return;
    }
    
    gameActive = true;
    score = 0;
    timeLeft = 10;
    scoreVal.textContent = score;
    timerVal.textContent = timeLeft;
    spawnPixel();
    
    startGameBtn.textContent = "Reset Game";
    
    gameInterval = setInterval(() => {
      timeLeft--;
      timerVal.textContent = timeLeft;
      if (timeLeft <= 0) {
        alert(`🎮 Game Over! Your score: ${score}`);
        resetGame();
      }
    }, 1000);
  });
}

if (pixelTarget) {
  pixelTarget.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!gameActive) return;
    score++;
    scoreVal.textContent = score;
    // Add 1s as a reward
    timeLeft = Math.min(10, timeLeft + 1);
    timerVal.textContent = timeLeft;
    spawnPixel();
  });
}

// =========================================
// TEAR-OFF FLYER LOGIC
// =========================================
const flyerTabs = document.querySelectorAll('.flyer-tab');
const toastBox = document.getElementById('toastBox');
let toastTimeout = null;

flyerTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    if (tab.classList.contains('torn')) return;
    
    // Add class to animate tearing off
    tab.classList.add('torn');
    
    // Get text message
    const msg = tab.getAttribute('data-msg');
    
    // Display message in toast box
    showToast(msg);
  });
});

function showToast(text) {
  if (!toastBox) return;
  
  clearTimeout(toastTimeout);
  
  toastBox.textContent = text;
  toastBox.classList.add('show');
  
  toastTimeout = setTimeout(() => {
    toastBox.classList.remove('show');
  }, 4000);
}