// Simple toggle for mobile menu or future interactions
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});