// Configura aquí tu número de WhatsApp de Perú: 51 + número, sin + ni espacios.
const WHATSAPP_NUMBER = "51903376549";
document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  const message = "Hola, deseo información sobre los servicios de Sadith Chávez | Estudio Contable.";
  link.href = "https://wa.me/" + WHATSAPP_NUMBER.replace(/\\D/g, "") + "?text=" + encodeURIComponent(message);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.firstChild.textContent = open ? "✕ " : "☰ ";
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.firstChild.textContent = "☰ ";
}));
