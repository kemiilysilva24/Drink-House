const drinks = [
  {
    name: "Mojito",
    categories: ["refrescante", "classico"],
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=85",
    description: "Rum, hortela e limao em um classico cubano leve, aromatico e vibrante.",
    difficulty: "Facil",
    time: "7 min",
    alcohol: "12% aprox.",
    origin: "Cuba",
    ingredients: ["50 ml de rum branco", "25 ml de suco de limao", "2 colheres de cha de acucar", "Hortela fresca", "Agua com gas", "Gelo"],
    steps: ["Macere hortela, acucar e limao com delicadeza.", "Adicione rum e gelo.", "Complete com agua com gas e misture de baixo para cima."],
    curiosity: "O Mojito ficou associado a Havana e se tornou simbolo de frescor por preservar o perfume da hortela sem amargar."
  },
  {
    name: "Margarita",
    categories: ["refrescante", "classico", "forte"],
    image: "https://images.unsplash.com/photo-1615887023544-7c0a0a2f6b2c?auto=format&fit=crop&w=900&q=85",
    description: "Tequila, limao e licor de laranja com borda de sal e final citrico.",
    difficulty: "Media",
    time: "6 min",
    alcohol: "18% aprox.",
    origin: "Mexico",
    ingredients: ["50 ml de tequila", "25 ml de licor de laranja", "25 ml de suco de limao", "Sal para a borda", "Gelo"],
    steps: ["Prepare a borda da taca com limao e sal.", "Bata tequila, licor, limao e gelo.", "Coe para a taca resfriada."],
    curiosity: "A borda de sal realca a acidez e suaviza a percepcao alcoolica da tequila."
  },
  {
    name: "Negroni",
    categories: ["forte", "classico"],
    image: "https://images.unsplash.com/photo-1614630624528-81f03d92369d?auto=format&fit=crop&w=900&q=85",
    description: "Gin, vermute rosso e bitter em partes iguais, intenso e elegante.",
    difficulty: "Facil",
    time: "5 min",
    alcohol: "24% aprox.",
    origin: "Italia",
    ingredients: ["30 ml de gin", "30 ml de vermute rosso", "30 ml de bitter", "Casca de laranja", "Gelo grande"],
    steps: ["Coloque os ingredientes no mixing glass com gelo.", "Mexa ate resfriar e diluir levemente.", "Sirva sobre gelo grande e finalize com laranja."],
    curiosity: "A receita em partes iguais e uma das formulas mais reconheciveis da coquetelaria classica."
  },
  {
    name: "Cosmopolitan",
    categories: ["doce", "classico"],
    image: "https://images.unsplash.com/photo-1578664182352-2f2b8bde9c1c?auto=format&fit=crop&w=900&q=85",
    description: "Vodka, cranberry e limao em uma taca sofisticada, acida e frutada.",
    difficulty: "Media",
    time: "6 min",
    alcohol: "16% aprox.",
    origin: "Estados Unidos",
    ingredients: ["45 ml de vodka citrus", "20 ml de licor de laranja", "30 ml de cranberry", "15 ml de limao", "Gelo"],
    steps: ["Adicione todos os ingredientes na coqueteleira.", "Bata com gelo ate gelar bem.", "Coe duplamente para uma taca coupe."],
    curiosity: "Virou icone pop nos anos 1990, mas sua estrutura e uma variacao moderna de drinks sour."
  },
  {
    name: "Dry Martini",
    categories: ["forte", "classico"],
    image: "https://images.unsplash.com/photo-1587223962930-cb7f31384c19?auto=format&fit=crop&w=900&q=85",
    description: "Gin e vermute seco com final cristalino, seco e profundamente aromatico.",
    difficulty: "Dificil",
    time: "5 min",
    alcohol: "28% aprox.",
    origin: "Estados Unidos",
    ingredients: ["60 ml de gin", "10 ml de vermute seco", "Azeitona ou twist de limao", "Gelo"],
    steps: ["Resfrie a taca.", "Mexa gin e vermute com gelo no mixing glass.", "Coe e finalize com a guarnicao escolhida."],
    curiosity: "Pequenas mudancas na proporcao de vermute alteram drasticamente o perfil do drink."
  },
  {
    name: "Old Fashioned",
    categories: ["forte", "classico"],
    image: "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?auto=format&fit=crop&w=900&q=85",
    description: "Whisky, bitters e acucar em uma receita minimalista, densa e elegante.",
    difficulty: "Media",
    time: "8 min",
    alcohol: "30% aprox.",
    origin: "Estados Unidos",
    ingredients: ["60 ml de bourbon ou rye", "1 cubo de acucar", "2 dashes de Angostura", "Casca de laranja", "Gelo grande"],
    steps: ["Dissolva acucar com bitters.", "Adicione whisky e gelo grande.", "Mexa no copo e perfume com casca de laranja."],
    curiosity: "E uma das formas mais antigas de definir um coquetel: destilado, acucar, agua e bitters."
  },
  {
    name: "Moscow Mule",
    categories: ["refrescante", "doce"],
    image: "https://images.unsplash.com/photo-1563223771-375783ee91ad?auto=format&fit=crop&w=900&q=85",
    description: "Vodka, limao e ginger beer em uma caneca gelada, picante e refrescante.",
    difficulty: "Facil",
    time: "4 min",
    alcohol: "10% aprox.",
    origin: "Estados Unidos",
    ingredients: ["50 ml de vodka", "20 ml de limao", "120 ml de ginger beer", "Gelo", "Hortela"],
    steps: ["Encha a caneca com gelo.", "Adicione vodka e limao.", "Complete com ginger beer e mexa levemente."],
    curiosity: "A caneca de cobre ajudou a transformar o drink em um objeto de desejo visual."
  },
  {
    name: "Pina Colada",
    categories: ["doce", "tropical"],
    image: "https://images.unsplash.com/photo-1626201850127-9f8a95be8f3e?auto=format&fit=crop&w=900&q=85",
    description: "Rum, abacaxi e coco em textura cremosa de ferias tropicais.",
    difficulty: "Facil",
    time: "7 min",
    alcohol: "9% aprox.",
    origin: "Porto Rico",
    ingredients: ["50 ml de rum branco", "90 ml de suco de abacaxi", "30 ml de creme de coco", "Gelo", "Abacaxi para decorar"],
    steps: ["Bata todos os ingredientes com gelo.", "Sirva em copo alto ou taca hurricane.", "Finalize com abacaxi e aroma citrico."],
    curiosity: "Foi declarada bebida oficial de Porto Rico em 1978."
  },
  {
    name: "Virgin Berry Fizz",
    categories: ["sem-alcool", "doce", "refrescante"],
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
    description: "Frutas vermelhas, limao e agua com gas com visual intenso e zero alcool.",
    difficulty: "Facil",
    time: "5 min",
    alcohol: "0%",
    origin: "Contemporaneo",
    ingredients: ["60 ml de pure de frutas vermelhas", "20 ml de limao", "15 ml de xarope simples", "Agua com gas", "Gelo"],
    steps: ["Misture frutas, limao e xarope.", "Sirva sobre gelo.", "Complete com agua com gas e mexa delicadamente."],
    curiosity: "Mocktails bem construidos usam acidez e aroma para entregar complexidade sem alcool."
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1563223771-375783ee91ad?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1587223962930-cb7f31384c19?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1626201850127-9f8a95be8f3e?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1614630624528-81f03d92369d?auto=format&fit=crop&w=900&q=85"
];

const grid = document.querySelector("#drinksGrid");
const modal = document.querySelector("#recipeModal");
const modalContent = modal.querySelector(".modal__content");
let lastFocusedElement = null;

function createDrinkCard(drink, index) {
  const card = document.createElement("article");
  card.className = "drink-card reveal";
  card.dataset.categories = drink.categories.join(" ");
  card.style.transitionDelay = `${Math.min(index * 55, 280)}ms`;
  card.innerHTML = `
    <img src="${drink.image}" alt="${drink.name}">
    <div class="drink-card__body">
      <h3>${drink.name}</h3>
      <p>${drink.description}</p>
      <div class="drink-card__tags">
        <span>${drink.difficulty}</span>
        <span>${drink.time}</span>
      </div>
      <button class="btn btn--ghost" type="button" data-recipe="${drink.name}">Ver Receita</button>
    </div>
  `;
  return card;
}

function renderDrinks() {
  grid.innerHTML = "";
  drinks.forEach((drink, index) => grid.appendChild(createDrinkCard(drink, index)));
  observeReveals();
}

function filterDrinks(filter) {
  document.querySelectorAll(".drink-card").forEach((card) => {
    card.classList.add("is-filtering");
    window.setTimeout(() => {
      const show = filter === "todos" || card.dataset.categories.includes(filter);
      card.classList.toggle("is-hidden", !show);
      card.classList.remove("is-filtering");
    }, 160);
  });
}

document.querySelector(".filter-bar").addEventListener("click", (event) => {
  const button = event.target.closest(".filter-btn");
  if (!button) return;
  document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("is-active"));
  button.classList.add("is-active");
  filterDrinks(button.dataset.filter);
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-recipe]");
  if (!button) return;
  const drink = drinks.find((item) => item.name === button.dataset.recipe);
  openModal(drink, button);
});

grid.addEventListener("mousemove", (event) => {
  const card = event.target.closest(".drink-card");
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const rotateY = ((x / rect.width) - 0.5) * 10;
  const rotateX = ((y / rect.height) - 0.5) * -10;
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
});

grid.addEventListener("mouseleave", () => {
  document.querySelectorAll(".drink-card").forEach((card) => {
    card.style.transform = "";
  });
});

function openModal(drink, trigger) {
  lastFocusedElement = trigger;
  document.querySelector("#modalImage").src = drink.image;
  document.querySelector("#modalImage").alt = drink.name;
  document.querySelector("#modalTitle").textContent = drink.name;
  document.querySelector("#modalDescription").textContent = drink.description;
  document.querySelector("#modalOrigin").textContent = `Origem: ${drink.origin}`;
  document.querySelector("#modalAlcohol").textContent = `Graduacao: ${drink.alcohol}`;
  document.querySelector("#modalDifficulty").textContent = `Nivel: ${drink.difficulty}`;
  document.querySelector("#modalTime").textContent = `Tempo: ${drink.time}`;
  document.querySelector("#modalCuriosity").textContent = drink.curiosity;
  document.querySelector("#modalIngredients").innerHTML = drink.ingredients.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#modalSteps").innerHTML = drink.steps.map((item) => `<li>${item}</li>`).join("");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalContent.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    closeLightbox();
  }
});

const carouselTrack = document.querySelector("#carouselTrack");
const carouselDots = document.querySelector("#carouselDots");
const slides = drinks.slice(0, 5);
let activeSlide = 0;
let carouselTimer;

function renderCarousel() {
  carouselTrack.innerHTML = slides.map((drink, index) => `
    <article class="carousel__slide ${index === 0 ? "is-active" : ""}">
      <img src="${drink.image}" alt="${drink.name}">
      <div class="carousel__copy">
        <span class="eyebrow">${drink.origin}</span>
        <h3>${drink.name}</h3>
        <p>${drink.description}</p>
      </div>
    </article>
  `).join("");
  carouselDots.innerHTML = slides.map((_, index) => `
    <button type="button" class="${index === 0 ? "is-active" : ""}" aria-label="Ir para slide ${index + 1}" data-slide="${index}"></button>
  `).join("");
}

function setSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  document.querySelectorAll(".carousel__slide").forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
  });
  document.querySelectorAll(".carousel__dots button").forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeSlide);
  });
}

function startCarousel() {
  window.clearInterval(carouselTimer);
  carouselTimer = window.setInterval(() => setSlide(activeSlide + 1), 5000);
}

document.querySelector(".carousel__btn--prev").addEventListener("click", () => {
  setSlide(activeSlide - 1);
  startCarousel();
});

document.querySelector(".carousel__btn--next").addEventListener("click", () => {
  setSlide(activeSlide + 1);
  startCarousel();
});

carouselDots.addEventListener("click", (event) => {
  const dot = event.target.closest("[data-slide]");
  if (!dot) return;
  setSlide(Number(dot.dataset.slide));
  startCarousel();
});

function renderGallery() {
  const gallery = document.querySelector("#gallery");
  gallery.innerHTML = galleryImages.map((src, index) => `
    <button class="reveal" type="button" data-lightbox="${src}" aria-label="Abrir foto de drink ${index + 1}">
      <img src="${src}" alt="Drink premium em composicao visual ${index + 1}">
    </button>
  `).join("");
}

const lightbox = document.querySelector("#lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelector("#gallery").addEventListener("click", (event) => {
  const button = event.target.closest("[data-lightbox]");
  if (!button) return;
  lightboxImg.src = button.dataset.lightbox;
  lightboxImg.alt = button.querySelector("img").alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  lightbox.querySelector("button").focus();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox || event.target.tagName === "BUTTON") closeLightbox();
});

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

function observeReveals() {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((item) => revealObserver.observe(item));
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    animateCounter(entry.target);
    statObserver.unobserve(entry.target);
  });
}, { threshold: 0.5 });

function animateCounter(element) {
  const target = Number(element.dataset.count);
  const duration = 1500;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
    element.textContent = `${value.toLocaleString("pt-BR")}+`;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

document.querySelectorAll("[data-count]").forEach((item) => statObserver.observe(item));

const form = document.querySelector("#contactForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let valid = true;
  const fields = [...form.querySelectorAll("input, textarea")];
  fields.forEach((field) => {
    const error = field.parentElement.querySelector("small");
    error.textContent = "";
    if (!field.validity.valid) {
      valid = false;
      error.textContent = field.type === "email" ? "Informe um e-mail valido." : "Preencha este campo corretamente.";
    }
  });
  const status = form.querySelector(".form-status");
  if (!valid) {
    status.textContent = "";
    return;
  }
  status.textContent = "Mensagem validada com sucesso. Obrigado pelo contato.";
  form.reset();
});

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const backTop = document.querySelector(".back-top");
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

window.addEventListener("scroll", () => {
  backTop.classList.toggle("is-visible", window.scrollY > 600);
  const heroVisual = document.querySelector(".hero__visual");
  if (heroVisual) heroVisual.style.transform = `translateY(${window.scrollY * 0.035}px)`;
}, { passive: true });

const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");
let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.16;
  ringY += (mouseY - ringY) * 0.16;
  ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animateCursor);
}

document.addEventListener("mouseover", (event) => {
  if (event.target.closest("a, button, input, textarea")) ring.classList.add("is-active");
});

document.addEventListener("mouseout", (event) => {
  if (event.target.closest("a, button, input, textarea")) ring.classList.remove("is-active");
});

function initParticles() {
  const canvas = document.querySelector("#particles");
  const context = canvas.getContext("2d");
  const particles = [];
  const amount = 80;

  function resize() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }

  function createParticle() {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2 + 0.7,
      speedX: (Math.random() - 0.5) * 0.45,
      speedY: (Math.random() - 0.5) * 0.45,
      alpha: Math.random() * 0.5 + 0.18
    };
  }

  for (let index = 0; index < amount; index += 1) particles.push(createParticle());

  function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((particle, index) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      if (particle.x < 0 || particle.x > window.innerWidth) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > window.innerHeight) particle.speedY *= -1;

      const gradient = context.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius * 7);
      gradient.addColorStop(0, `rgba(168, 85, 247, ${particle.alpha})`);
      gradient.addColorStop(1, "rgba(168, 85, 247, 0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius * 7, 0, Math.PI * 2);
      context.fill();

      for (let next = index + 1; next < particles.length; next += 1) {
        const other = particles[next];
        const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (distance < 120) {
          context.strokeStyle = `rgba(168, 85, 247, ${0.12 * (1 - distance / 120)})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("is-hidden");
});

renderDrinks();
renderCarousel();
renderGallery();
observeReveals();
startCarousel();
animateCursor();
initParticles();
