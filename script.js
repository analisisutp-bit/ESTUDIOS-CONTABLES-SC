/*
 * CONFIGURACIÓN DEL ESTUDIO CONTABLE
 * Cambia el número de ejemplo por tu WhatsApp real.
 * Perú: código de país 51 + número, solo dígitos. Ejemplo ficticio: 51987654321
 */
const WHATSAPP_NUMBER = "51999999999";

document.getElementById("year").textContent = new Date().getFullYear();

function buildWhatsAppUrl(message = "Hola, deseo información sobre los servicios del Estudio Contable.") {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = buildWhatsAppUrl();
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  });
});
