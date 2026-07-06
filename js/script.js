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

// FAQ accordion toggle
document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        const isActive = item.classList.contains("active");
        document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
        if (!isActive) item.classList.add("active");
    });
});