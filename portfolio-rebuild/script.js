const heroTitle = document.querySelector('.hero-title');
const heroTitleBase = document.querySelector('.hero-title-base');
const heroTitleOverlay = document.querySelector('.hero-title-overlay');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeButton = document.querySelector('.lightbox-close');
const prevButton = document.querySelector('.lightbox-prev');
const nextButton = document.querySelector('.lightbox-next');
const galleryButtons = document.querySelectorAll('.gallery-button');

if (menuToggle && siteNav) {
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    siteNav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  const openMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close navigation menu');
    siteNav.classList.add('is-open');
    document.body.classList.add('menu-open');
  };

  closeMenu();

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) closeMenu();
    else openMenu();
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  window.addEventListener('resize', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

if (heroTitle && heroTitleBase && heroTitleOverlay) {
  const titleText = heroTitle.getAttribute('data-title') || heroTitleBase.textContent || '';

  const buildHeroTitleOverlay = () => {
    const words = titleText.trim().split(/\s+/);
    const measure = document.createElement('span');
    measure.className = 'hero-title-measure';
    measure.setAttribute('aria-hidden', 'true');
    measure.style.width = `${heroTitleBase.getBoundingClientRect().width}px`;

    const wordSpans = words.map((word, index) => {
      const span = document.createElement('span');
      span.className = 'hero-title-measure-word';
      span.textContent = index === words.length - 1 ? word : `${word} `;
      measure.appendChild(span);
      return span;
    });

    heroTitle.appendChild(measure);

    const lines = [];
    let currentLine = [];
    let currentTop = null;
    let currentLineTop = null;

    wordSpans.forEach((span) => {
      const top = span.offsetTop;
      if (currentTop === null || Math.abs(top - currentTop) < 2) {
        currentLine.push(span.textContent || '');
        if (currentLineTop === null) currentLineTop = top;
        currentTop = top;
      } else {
        lines.push({ text: currentLine.join(''), top: currentLineTop });
        currentLine = [span.textContent || ''];
        currentLineTop = top;
        currentTop = top;
      }
    });

    if (currentLine.length) lines.push({ text: currentLine.join(''), top: currentLineTop });

    measure.remove();
    heroTitleOverlay.innerHTML = '';

    const lineDuration = 0.42;
    const lineGap = 0.14;
    const lineOffset = 0.12;
    const totalDuration = lines.length * lineDuration + Math.max(0, lines.length - 1) * lineGap;
    const cursor = document.createElement('span');
    cursor.className = 'hero-title-cursor';

    lines.forEach(({ text: lineText, top: lineTop }, index) => {
      const line = document.createElement('span');
      const lineInner = document.createElement('span');
      const trimmedLine = lineText.trimEnd();
      const delay = index * (lineDuration + lineGap);

      line.className = 'hero-title-line';
      line.style.top = `calc(${lineTop}px + ${lineOffset}em)`;
      line.style.animationDuration = `${lineDuration}s`;
      line.style.animationDelay = `${delay}s`;

      lineInner.className = 'hero-title-line-inner';
      lineInner.textContent = trimmedLine;

      line.appendChild(lineInner);
      heroTitleOverlay.appendChild(line);

      window.setTimeout(() => {
        cursor.remove();
        lineInner.appendChild(cursor);
      }, delay * 1000);

      window.setTimeout(() => {
        if (cursor.parentElement === lineInner) cursor.remove();
      }, (delay + lineDuration) * 1000);
    });

    heroTitleOverlay.style.setProperty('--hero-title-total-duration', `${totalDuration}s`);
    return totalDuration;
  };

  let animationTimeout;
  const startHeroTitleAnimation = () => {
    window.clearTimeout(animationTimeout);
    const totalDuration = buildHeroTitleOverlay();
    heroTitleOverlay.classList.remove('is-typing', 'is-complete');
    void heroTitleOverlay.offsetWidth;
    heroTitleOverlay.classList.add('is-typing');
    animationTimeout = window.setTimeout(() => {
      heroTitleOverlay.classList.remove('is-typing');
      heroTitleOverlay.classList.add('is-complete');
    }, totalDuration * 1000 + 80);
  };

  window.addEventListener('load', startHeroTitleAnimation);
  window.addEventListener('resize', startHeroTitleAnimation);
}

if (lightbox && lightboxImage && closeButton && prevButton && nextButton && galleryButtons.length) {
  const images = Array.from(galleryButtons).map((button) => {
    const img = button.querySelector('img');
    return {
      src: img ? img.getAttribute('src') || '' : '',
      alt: img ? img.getAttribute('alt') || 'Portfolio image' : 'Portfolio image',
    };
  });

  let currentIndex = 0;

  const showImage = (index) => {
    currentIndex = (index + images.length) % images.length;
    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;
  };

  const openLightbox = (index) => {
    showImage(index);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    lightboxImage.alt = '';
    document.body.style.overflow = '';
  };

  galleryButtons.forEach((button, index) => {
    button.addEventListener('click', () => openLightbox(index));
  });

  closeButton.addEventListener('click', closeLightbox);
  prevButton.addEventListener('click', () => showImage(currentIndex - 1));
  nextButton.addEventListener('click', () => showImage(currentIndex + 1));

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (event.key === 'ArrowRight') showImage(currentIndex + 1);
  });
}
