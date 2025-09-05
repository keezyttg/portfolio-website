// Toggle mobile menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links li a");

// Throttle scroll event for performance
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateActiveNav();
      ticking = false;
    });
    ticking = true;
  }
});

function updateActiveNav() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current)
      link.classList.add("active");
  });
}
//

const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(
      (entry) => entry.isIntersecting && entry.target.classList.add("show")
    );
  },
  { threshold: 0.2 }
);
faders.forEach((fader) => observer.observe(fader));

// Typing effect
const text = "Computer Science Student & Developer";
let i = 0;
const type = () => {
  if (i < text.length) {
    document.querySelector(".section__text__p2").textContent += text[i];
    i++;
    setTimeout(type, 100);
  }
};
type();
//well see
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.dataset.target;
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

const arrows = document.querySelectorAll(".icon.arrow");
arrows.forEach((arrow) => observer.observe(arrow));
