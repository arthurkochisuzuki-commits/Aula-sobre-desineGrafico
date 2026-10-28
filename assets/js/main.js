/**
 * ==========================================================================
 * SCRIPT PRINCIPAL DO PORTFÓLIO
 * ==========================================================================
 */

// 1. Configuração do Tailwind CSS (Suporte a transformações 3D personalizadas)
if (window.tailwind) {
  tailwind.config = {
    theme: {
      extend: {},
    },
    plugins: [
      function ({ addUtilities }) {
        const rotateXUtilities = {};
        const rotateYUtilities = {};
        const rotateZUtilities = {};
        const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];

        // Rotação no eixo X
        rotateValues.forEach((value) => {
          rotateXUtilities[`.rotate-x-${value}`] = {
            '--tw-rotate-x': `${value}deg`,
            transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\s+/g, ' ').trim(),
          };
          if (value !== 0) {
            rotateXUtilities[`.-rotate-x-${value}`] = {
              '--tw-rotate-x': `-${value}deg`,
              transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\s+/g, ' ').trim(),
            };
          }
        });

        // Rotação no eixo Y
        rotateValues.forEach((value) => {
          rotateYUtilities[`.rotate-y-${value}`] = {
            '--tw-rotate-y': `${value}deg`,
            transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\s+/g, ' ').trim(),
          };
          if (value !== 0) {
            rotateYUtilities[`.-rotate-y-${value}`] = {
              '--tw-rotate-y': `-${value}deg`,
              transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\s+/g, ' ').trim(),
            };
          }
        });

        // Rotação no eixo Z
        rotateValues.forEach((value) => {
          rotateZUtilities[`.rotate-z-${value}`] = {
            '--tw-rotate-z': `${value}deg`,
            transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\s+/g, ' ').trim(),
          };
          if (value !== 0) {
            rotateZUtilities[`.-rotate-z-${value}`] = {
              '--tw-rotate-z': `-${value}deg`,
              transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\s+/g, ' ').trim(),
            };
          }
        });

        // Perspectivas 3D
        const perspectiveUtilities = {
          '.perspective-none': { perspective: 'none' },
          '.perspective-dramatic': { perspective: '100px' },
          '.perspective-near': { perspective: '300px' },
          '.perspective-normal': { perspective: '500px' },
          '.perspective-midrange': { perspective: '800px' },
          '.perspective-distant': { perspective: '1200px' },
        };

        const transformStyleUtilities = {
          '.transform-style-preserve-3d': { 'transform-style': 'preserve-3d' },
          '.transform-style-flat': { 'transform-style': 'flat' },
        };

        addUtilities({
          ...rotateXUtilities,
          ...rotateYUtilities,
          ...rotateZUtilities,
          ...perspectiveUtilities,
          ...transformStyleUtilities,
        });
      },
    ],
  };
}

// 2. Animação ao rolar a página (IntersectionObserver)
(function () {
  const once = true;
  if (!window.__inViewIO) {
    window.__inViewIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (once) window.__inViewIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );
  }

  window.initInViewAnimations = function (selector = '.animate-on-scroll') {
    document.querySelectorAll(selector).forEach((el) => {
      window.__inViewIO.observe(el);
    });
  };

  document.addEventListener('DOMContentLoaded', () => initInViewAnimations());
})();

// 3. Filtro da Seção de Projetos
function updateMissionFilter(category) {
  const btnAll = document.getElementById('filter-all');
  const btnDeep = document.getElementById('filter-deep-space');
  const btnOrb = document.getElementById('filter-orbital');

  const cardAres = document.getElementById('card-ares');
  const cardGateway = document.getElementById('card-gateway');
  const cardTitan = document.getElementById('card-titan');
  const stackRight = document.getElementById('stack-right');

  if (!btnAll || !btnDeep || !btnOrb) return;

  const btns = [btnAll, btnDeep, btnOrb];
  btns.forEach((b) => {
    b.className =
      'filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 text-white/50 hover:text-white hover:bg-white/5';
  });

  const activeClass =
    'filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-white text-neutral-950 shadow-lg shadow-white/5 scale-105';

  if (category === 'all') {
    btnAll.className = activeClass;
    if (cardAres) cardAres.style.display = 'block';
    if (stackRight) stackRight.style.display = 'flex';
    if (cardGateway) cardGateway.style.display = 'block';
    if (cardTitan) cardTitan.style.display = 'block';

    setTimeout(() => {
      if (cardAres) cardAres.classList.remove('opacity-0', 'scale-95', 'hidden');
      if (stackRight) {
        stackRight.classList.remove('opacity-0', 'scale-95', 'hidden');
        stackRight.classList.remove('md:col-span-12');
        stackRight.classList.add('md:col-span-4');
      }
      if (cardGateway) {
        cardGateway.classList.remove('opacity-0', 'flex-[0]');
        cardGateway.classList.add('flex-1');
      }
      if (cardTitan) {
        cardTitan.classList.remove('opacity-0', 'flex-[0]');
        cardTitan.classList.add('flex-1');
      }
    }, 50);
  } else if (category === 'deep-space') {
    btnDeep.className = activeClass;
    if (cardAres) cardAres.style.display = 'block';
    if (stackRight) stackRight.style.display = 'flex';
    if (cardTitan) cardTitan.style.display = 'block';

    if (cardGateway) {
      cardGateway.classList.add('opacity-0', 'flex-[0]');
      setTimeout(() => {
        cardGateway.style.display = 'none';
      }, 300);
    }

    if (cardAres) cardAres.classList.remove('opacity-0', 'scale-95', 'hidden');
    if (stackRight) {
      stackRight.classList.remove('opacity-0', 'scale-95', 'hidden');
      stackRight.classList.remove('md:col-span-12');
      stackRight.classList.add('md:col-span-4');
    }
    if (cardTitan) {
      cardTitan.classList.remove('opacity-0', 'flex-[0]');
      cardTitan.classList.add('flex-1');
    }
  } else if (category === 'orbital') {
    btnOrb.className = activeClass;
    if (cardGateway) cardGateway.style.display = 'block';
    if (stackRight) stackRight.style.display = 'flex';

    if (cardAres) cardAres.classList.add('opacity-0', 'scale-95');
    if (cardTitan) cardTitan.classList.add('opacity-0', 'flex-[0]');

    setTimeout(() => {
      if (cardAres) cardAres.style.display = 'none';
      if (cardTitan) cardTitan.style.display = 'none';
    }, 300);

    if (stackRight) {
      stackRight.classList.remove('opacity-0', 'scale-95', 'hidden');
      stackRight.classList.remove('md:col-span-4');
      stackRight.classList.add('md:col-span-12');
    }
    if (cardGateway) {
      cardGateway.classList.remove('opacity-0', 'flex-[0]');
      cardGateway.classList.add('flex-1');
    }
  }
}


// 4. Filtro da Seção de Certificados
function filterCerts(category) {
  const buttons = document.querySelectorAll('.cert-filter-btn');
  const cards = document.querySelectorAll('.cert-card');

  // Atualizar visual dos botões
  buttons.forEach((btn) => {
    btn.className =
      'cert-filter-btn px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 text-white/60 hover:text-white hover:bg-white/5';
  });

  const activeBtn = document.getElementById(`cert-btn-${category}`);
  if (activeBtn) {
    activeBtn.className =
      'cert-filter-btn px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 bg-white text-neutral-950 shadow-md';
  }

  // Filtrar os cards
  cards.forEach((card) => {
    const cardCat = card.getAttribute('data-category') || '';
    const categories = cardCat.split(/\s+/);
    if (category === 'all' || categories.includes(category)) {
      card.style.display = 'flex';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 30);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 250);
    }
  });
}

// 5. Modal / Lightbox de Certificados
function openCertModal(imageSrc, title, subtitle) {
  const modal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('cert-modal-img');
  const modalTitle = document.getElementById('cert-modal-title');
  const modalSub = document.getElementById('cert-modal-subtitle');

  if (!modal || !modalImg) return;

  modalImg.src = imageSrc;
  if (modalTitle) modalTitle.textContent = title;
  if (modalSub) modalSub.textContent = subtitle;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.classList.add('opacity-100');
  }, 10);
}

function closeCertModal(event) {
  const modal = document.getElementById('cert-modal');
  if (!modal) return;

  modal.classList.remove('opacity-100');
  modal.classList.add('opacity-0');

  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 250);
}

// Fechar modal ao pressionar ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCertModal();
  }
});
