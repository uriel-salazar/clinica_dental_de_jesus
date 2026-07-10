// === INTRO ANIMATION ===
;(function initIntro() {
  var overlay = document.getElementById('intro-overlay')
  var logoWrap = document.getElementById('intro-logo-wrapper')
  if (!overlay) return

  var safetyTimer = setTimeout(function () {
    if (overlay) overlay.style.display = 'none'
    if (logoWrap) logoWrap.style.display = 'none'
  }, 5000)

  if (typeof gsap === 'undefined') return

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  var alreadyPlayed = sessionStorage.getItem('dentalIntroPlayed')

  function skipIntro() {
    clearTimeout(safetyTimer)
    overlay.style.display = 'none'
    if (logoWrap) logoWrap.style.display = 'none'
  }

  if (prefersReducedMotion || alreadyPlayed) {
    skipIntro()
    return
  }

  function startAnimation() {
    clearTimeout(safetyTimer)

    gsap.set('.navbar-section', { yPercent: -100, opacity: 0, willChange: 'transform' })
    gsap.set('.hero-text h1', { opacity: 0, y: 40, filter: 'blur(8px)', willChange: 'transform, filter' })
    gsap.set('.hero-image img', { opacity: 0, scale: 1.05 })
    gsap.set('.hero-text p', { opacity: 0, y: 20 })
    gsap.set('.hero-btn-link', { opacity: 0, y: 10 })
    gsap.set('#intro-logo', { scale: 0.85 })

    var reveal = { pct: 0 }

    var tl = gsap.timeline({
      onComplete: function () {
        overlay.style.webkitMaskImage = ''
        overlay.style.maskImage = ''
        if (overlay) overlay.remove()
        if (logoWrap) logoWrap.remove()
        sessionStorage.setItem('dentalIntroPlayed', 'true')
        var nav = document.querySelector('.navbar-section')
        if (nav) nav.style.transform = ''
        var heroImg = document.querySelector('.hero-image img')
        if (heroImg) heroImg.style.transform = ''
      }
    })

    tl.to('#intro-logo', { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' }, 0)
      .to('#intro-logo', { opacity: 0, duration: 0.25, ease: 'power2.in' }, 0.35)
      .to(reveal, {
        pct: 141,
        duration: 0.7,
        ease: 'power2.inOut',
        onUpdate: function () {
          var p = reveal.pct + '%'
          overlay.style.webkitMaskImage = 'radial-gradient(circle at center, transparent ' + p + ', white ' + p + ')'
          overlay.style.maskImage = 'radial-gradient(circle at center, transparent ' + p + ', white ' + p + ')'
        }
      }, 0.35)
      .to('.navbar-section', { yPercent: 0, opacity: 1, duration: 0.5, ease: 'power3.out', clearProps: 'willChange' }, 1.1)
      .to('.hero-text h1', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out', clearProps: 'willChange' }, 1.25)
      .to('.hero-image img', { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out', clearProps: 'willChange' }, 1.4)
      .to('.hero-text p', { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', clearProps: 'willChange' }, 1.55)
      .to('.hero-btn-link', { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', clearProps: 'willChange' }, 1.65)
  }

  if (document.readyState === 'complete') {
    startAnimation()
  } else {
    window.addEventListener('load', startAnimation)
  }
})()

const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.navbar-menu');
hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener(
    "click",() => {
        hamburguer.classList.remove("active");
        navMenu.classList.remove("active");

    }
))

// Toggle description text on service card click
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});

// Horizontal scroll on vertical scroll for services section
function initHorizontalScroll() {
  const section = document.querySelector('.services-section');
  const cards = document.querySelector('.cards');
  if (!section || !cards) return;

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function setSectionHeight() {
    if (isMobile()) {
      section.style.height = '';
      cards.style.transform = '';
      return;
    }

    const cardsWidth = cards.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = cardsWidth - viewportWidth + 40;

    if (scrollDistance > 0) {
      const sectionHeight = window.innerHeight + scrollDistance;
      section.style.height = sectionHeight + 'px';
    } else {
      section.style.height = '100vh';
      cards.style.transform = '';
    }
  }

  function updateScroll() {
    if (isMobile()) {
      cards.style.transform = '';
      return;
    }

    const rect = section.getBoundingClientRect();
    const cardsWidth = cards.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = cardsWidth - viewportWidth + 40;

    if (scrollDistance <= 0) {
      cards.style.transform = '';
      return;
    }

    const sectionScrollHeight = section.clientHeight - window.innerHeight;
    if (sectionScrollHeight <= 0) return;

    const progress = Math.max(0, Math.min(1, (-rect.top) / sectionScrollHeight));
    cards.style.transform = 'translateX(-' + (progress * scrollDistance) + 'px)';
  }

  function handleResize() {
    setSectionHeight();
    updateScroll();
  }

  setSectionHeight();

  window.addEventListener('load', handleResize);
  window.addEventListener('scroll', updateScroll, { passive: true });
  window.addEventListener('resize', handleResize);
}

initHorizontalScroll();

// Scroll reveal animation
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Toggle team card content on click (mobile friendly)
document.querySelectorAll(".card-member").forEach(card => {
    card.addEventListener("click", function(e) {
        if (e.target.closest(".btn-whatsapp-card")) return;
        this.classList.toggle("active");
    });
});

// FAQ accordion toggle
document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        const isActive = item.classList.contains("active");
        document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
        if (!isActive) item.classList.add("active");
    });
});