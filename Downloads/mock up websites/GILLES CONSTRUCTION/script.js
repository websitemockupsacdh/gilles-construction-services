const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    projectCards.forEach((card) => {
      const shouldShow = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

const setActiveLink = () => {
  let current = 'home';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 160;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${current}`;
    link.classList.toggle('active', isActive);
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
window.addEventListener('load', setActiveLink);

document.querySelector('.lead-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('.submit-btn');
  const originalText = button.textContent;

  button.textContent = 'Inquiry Sent';
  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    event.currentTarget.reset();
  }, 1800);
});
