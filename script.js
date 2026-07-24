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
  const interactiveEls = document.querySelectorAll('a, button, .floppy, .plate, .flyer-tab, .stamp, .rotary-hole, .now-playing');
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
// NOW PLAYING — AUDIO PLAYER
// =========================================
const audio       = document.getElementById('songAudio');
const playPauseBtn= document.getElementById('playPauseBtn');
const playIcon    = document.getElementById('playIcon');
const vinylDisc   = document.getElementById('vinylDisc');
const audioBars   = document.getElementById('audioBars');
const widget      = document.getElementById('nowPlayingWidget');

let isPlaying = false;

function setPlaying(playing) {
  isPlaying = playing;
  if (playing) {
    playIcon.textContent = '⏸';
    vinylDisc.classList.add('spinning');
    audioBars.classList.add('playing');
  } else {
    playIcon.textContent = '▶';
    vinylDisc.classList.remove('spinning');
    audioBars.classList.remove('playing');
  }
}

if (playPauseBtn && audio) {
  // Log any load/decoding errors as soon as they happen (not just on click)
  audio.addEventListener('error', () => {
    const err = audio.error;
    let reason = 'Unknown error';
    if (err) {
      switch (err.code) {
        case err.MEDIA_ERR_ABORTED: reason = 'Playback aborted'; break;
        case err.MEDIA_ERR_NETWORK: reason = 'Network error while loading audio'; break;
        case err.MEDIA_ERR_DECODE: reason = 'Audio file is corrupted or not a valid MP3'; break;
        case err.MEDIA_ERR_SRC_NOT_SUPPORTED: reason = 'Audio file not found or format not supported (check the file path!)'; break;
      }
    }
    console.error('🔴 Audio failed to load:', reason, audio.error);
  });

  playPauseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isPlaying) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => {
        setPlaying(true);
      }).catch((err) => {
        console.error('🔴 audio.play() rejected:', err.name, err.message);
        setPlaying(false);
        alert('Could not play audio: ' + err.message + '\n\nCheck the browser console (F12) for details.');
      });
    }
  });

  audio.addEventListener('ended', () => setPlaying(false));
  audio.addEventListener('pause', () => setPlaying(false));
  audio.addEventListener('play',  () => setPlaying(true));
}

// Clicking anywhere on the widget also toggles
if (widget) {
  widget.addEventListener('click', () => {
    if (!playPauseBtn) return;
    playPauseBtn.click();
  });
}

// =========================================
// FLOPPY ROW — DRAG TO SCROLL + ARROW BUTTONS
// =========================================
const floppyRow   = document.getElementById('floppyRow');
const floppyLeft  = document.getElementById('floppyLeft');
const floppyRight = document.getElementById('floppyRight');

if (floppyRow) {
  let isDragging = false;
  let startX = 0;
  let scrollStart = 0;

  floppyRow.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - floppyRow.offsetLeft;
    scrollStart = floppyRow.scrollLeft;
    floppyRow.classList.add('dragging');
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - floppyRow.offsetLeft;
    const walk = (x - startX) * 1.5;
    floppyRow.scrollLeft = scrollStart - walk;
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      floppyRow.classList.remove('dragging');
    }
  });

  // Touch drag
  floppyRow.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    scrollStart = floppyRow.scrollLeft;
  }, { passive: true });
  floppyRow.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    floppyRow.scrollLeft = scrollStart - (x - startX);
  }, { passive: true });
}

// Arrow button scroll
const SCROLL_AMOUNT = 300;
if (floppyLeft)  floppyLeft.addEventListener('click',  () => { floppyRow.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' }); });
if (floppyRight) floppyRight.addEventListener('click', () => { floppyRow.scrollBy({ left:  SCROLL_AMOUNT, behavior: 'smooth' }); });

// =========================================
// SHOPPING BAG — HOVER SPLASH ANIMATION
// =========================================
const bagVisual = document.getElementById('bagVisual');
const tools     = document.querySelectorAll('.floating-tool');

function positionTools(active) {
  const count = tools.length;
  tools.forEach((tool, index) => {
    if (active) {
      // Evenly space tools in a full circle (0° = bottom, 180° = top)
      const angleDeg = -180 + (360 / count) * index;
      const angle    = angleDeg * (Math.PI / 180);
      const dist     = 155 + (index % 3) * 12;
      const tx       = dist * Math.sin(angle);
      const ty       = dist * Math.cos(angle);
      tool.style.setProperty('--tx', `${tx}px`);
      tool.style.setProperty('--ty', `${ty}px`);
    } else {
      tool.style.setProperty('--tx', '0px');
      tool.style.setProperty('--ty', '0px');
    }
  });
}

if (bagVisual) {
  positionTools(false);

  const activateBag = () => {
    positionTools(true);
    bagVisual.classList.add('bag-active');
  };
  const deactivateBag = () => {
    bagVisual.classList.remove('bag-active');
    positionTools(false);
  };

  const canHover = window.matchMedia('(hover: hover)').matches;

  if (canHover) {
    bagVisual.addEventListener('mouseenter', activateBag);
    bagVisual.addEventListener('mouseleave', deactivateBag);
  } else {
    bagVisual.addEventListener('click', () => {
      const isActive = bagVisual.classList.toggle('bag-active');
      positionTools(isActive);
    });
  }
}

// =========================================
// ROTARY PHONE DIALER ANIMATION
// =========================================
// Works for ANY number of letters — reads the hole count from the DOM
// instead of a hardcoded "10", so adding/removing letters just works.
const rotaryDial  = document.getElementById('rotaryDial');
const rotaryHoles = document.querySelectorAll('.rotary-hole');

if (rotaryDial && rotaryHoles.length) {
  const holeCount = rotaryHoles.length;
  const stepDeg   = 360 / holeCount;

  rotaryHoles.forEach((hole, idx) => {
    hole.addEventListener('click', () => {
      const letter  = hole.dataset.letter;
      // Rotate the dial so the clicked hole swings toward the finger-stop,
      // then springs back — same motion as a real rotary phone.
      const degrees = (idx + 1) * stepDeg + stepDeg;

      rotaryDial.style.transform = `rotate(${degrees}deg)`;

      setTimeout(() => {
        rotaryDial.style.transform = 'rotate(0deg)';
      }, 800);

      showToast(`📞 Dialling "${letter}"...`);
    });
  });
}

// =========================================
// "HUNT THE ORB" GAME — Upgraded
// =========================================
const pixelCanvas    = document.getElementById('pixelCanvas');
const pixelTarget    = document.getElementById('pixelTarget');
const startGameBtn   = document.getElementById('startGame');
const scoreEl        = document.getElementById('scoreVal');
const bestEl         = document.getElementById('bestVal');
const comboEl        = document.getElementById('comboVal');
const timerEl        = document.getElementById('timerVal');
const gameCountdown  = document.getElementById('gameCountdown');
const gameMessage    = document.getElementById('gameMessage');

// Orb colour palette
const ORB_COLOURS = [
  { core: '#ff6eb4', glow: 'rgba(255,110,180,VAL)' },
  { core: '#7a26f0', glow: 'rgba(122,38,240,VAL)' },
  { core: '#00e6b0', glow: 'rgba(0,230,176,VAL)' },
  { core: '#fbbf24', glow: 'rgba(251,191,36,VAL)' },
  { core: '#f87171', glow: 'rgba(248,113,113,VAL)' },
  { core: '#60a5fa', glow: 'rgba(96,165,250,VAL)' },
];

let score      = 0;
let bestScore  = parseInt(localStorage.getItem('orbBest') || '0');
let timeLeft   = 15;
let combo      = 1;
let lastHitTime= 0;
let gameInterval = null;
let gameActive = false;
let colourIdx  = 0;

if (bestEl) bestEl.textContent = bestScore;

function getOrbColour() {
  return ORB_COLOURS[colourIdx % ORB_COLOURS.length];
}

function spawnOrb() {
  if (!pixelCanvas || !pixelTarget) return;
  const w = pixelCanvas.clientWidth  - 32;
  const h = pixelCanvas.clientHeight - 32;
  const x = Math.floor(Math.random() * w) + 8;
  const y = Math.floor(Math.random() * h) + 8;

  colourIdx++;
  const c = getOrbColour();

  pixelTarget.style.left       = x + 'px';
  pixelTarget.style.top        = y + 'px';
  pixelTarget.style.display    = 'block';
  pixelTarget.style.background = c.core;
  pixelTarget.style.boxShadow  = `0 0 14px 4px ${c.glow.replace('VAL','0.7')}, 0 0 30px 8px ${c.glow.replace('VAL','0.3')}`;

  // Sync pseudo-element glow colour via CSS var
  pixelTarget.style.setProperty('--orb-glow', c.glow.replace('VAL','0.5'));
}

function spawnParticles(x, y) {
  const colours = ['#ff6eb4','#7a26f0','#00e6b0','#fbbf24','#f87171','#60a5fa'];
  for (let i = 0; i < 10; i++) {
    const p = document.createElement('div');
    p.className = 'game-particle';
    const angle = (Math.PI * 2 * i) / 10;
    const dist  = 30 + Math.random() * 40;
    const tx    = Math.cos(angle) * dist;
    const ty    = Math.sin(angle) * dist;
    p.style.left       = (x - 3) + 'px';
    p.style.top        = (y - 3) + 'px';
    p.style.background = colours[i % colours.length];
    p.style.setProperty('--tx', `translate(${tx}px, ${ty}px)`);
    pixelCanvas.appendChild(p);
    setTimeout(() => p.remove(), 700);
  }
}

function showComboLabel(x, y, comboNum) {
  const el = document.createElement('div');
  el.className    = 'combo-flash';
  el.textContent  = comboNum > 1 ? `x${comboNum} COMBO!` : '+1';
  el.style.left   = (x - 30) + 'px';
  el.style.top    = (y - 30) + 'px';
  el.style.color  = comboNum > 2 ? '#fbbf24' : '#fff';
  pixelCanvas.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

function resetGame() {
  clearInterval(gameInterval);
  gameActive = false;
  score = 0; timeLeft = 15; combo = 1;
  if (scoreEl)  scoreEl.textContent  = 0;
  if (timerEl)  timerEl.textContent  = 15;
  if (comboEl)  comboEl.textContent  = 'x1';
  if (pixelTarget) pixelTarget.style.display = 'none';
  if (startGameBtn) startGameBtn.textContent = "Let's go →";
  if (gameMessage) { gameMessage.textContent = '🎮 Press Start!'; gameMessage.style.display = 'flex'; }
}

function startCountdown(cb) {
  let count = 3;
  if (gameCountdown) { gameCountdown.textContent = count; gameCountdown.style.display = 'flex'; }
  if (gameMessage)   gameMessage.style.display = 'none';

  const cd = setInterval(() => {
    count--;
    if (count <= 0) {
      clearInterval(cd);
      if (gameCountdown) { gameCountdown.textContent = 'GO!'; }
      setTimeout(() => {
        if (gameCountdown) gameCountdown.style.display = 'none';
        cb();
      }, 400);
    } else {
      if (gameCountdown) gameCountdown.textContent = count;
    }
  }, 700);
}

if (startGameBtn) {
  startGameBtn.addEventListener('click', () => {
    if (gameActive) { resetGame(); return; }

    startGameBtn.textContent = 'Reset Game';
    score = 0; timeLeft = 15; combo = 1;
    if (scoreEl) scoreEl.textContent = 0;
    if (timerEl) timerEl.textContent = 15;
    if (comboEl) comboEl.textContent = 'x1';

    startCountdown(() => {
      gameActive = true;
      spawnOrb();

      gameInterval = setInterval(() => {
        timeLeft--;
        if (timerEl) timerEl.textContent = timeLeft;

        // Urgency — flash red when low
        if (timerEl) timerEl.style.color = timeLeft <= 5 ? '#f87171' : 'var(--purple)';

        if (timeLeft <= 0) {
          clearInterval(gameInterval);
          gameActive = false;
          pixelTarget.style.display = 'none';
          if (gameMessage) { gameMessage.style.display = 'flex'; }

          // Save best score
          if (score > bestScore) {
            bestScore = score;
            localStorage.setItem('orbBest', bestScore);
            if (bestEl) bestEl.textContent = bestScore;
            gameMessage.textContent = `🏆 NEW RECORD! Score: ${score}`;
          } else {
            gameMessage.textContent = `⏱ Time's up! Score: ${score}. Best: ${bestScore}`;
          }
          if (startGameBtn) startGameBtn.textContent = "Play Again →";
        }
      }, 1000);
    });
  });
}

if (pixelTarget) {
  pixelTarget.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!gameActive) return;

    const now  = Date.now();
    const rect = pixelTarget.getBoundingClientRect();
    const canvRect = pixelCanvas.getBoundingClientRect();
    const px = rect.left - canvRect.left + rect.width  / 2;
    const py = rect.top  - canvRect.top  + rect.height / 2;

    // Combo logic: <800ms between hits = combo
    if (now - lastHitTime < 800) {
      combo = Math.min(combo + 1, 8);
    } else {
      combo = 1;
    }
    lastHitTime = now;

    const pts = combo;
    score += pts;
    timeLeft = Math.min(15, timeLeft + 0.5);

    if (scoreEl) scoreEl.textContent = score;
    if (timerEl) timerEl.textContent = Math.ceil(timeLeft);
    if (comboEl) comboEl.textContent = `x${combo}`;

    // Spawn particles and label
    spawnParticles(px, py);
    showComboLabel(px, py, combo);

    spawnOrb();
  });
}

// =========================================
// TEAR-OFF FLYER LOGIC
// =========================================
const flyerTabs = document.querySelectorAll('.flyer-tab');
const toastBox  = document.getElementById('toastBox');
let toastTimeout = null;

flyerTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    if (tab.classList.contains('torn')) return;
    tab.classList.add('torn');
    const msg = tab.getAttribute('data-msg');
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