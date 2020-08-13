const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll("#gallery img");
const original = document.querySelector(".full-vid");
const imgText = document.querySelector(".caption");

const orderForm = document.querySelector("#orderForm");
const aboutUs = document.querySelector("#aboutUs");
const products = document.querySelector("#products");
const contactUs = document.querySelector("#contactUs");

const formLink = document.querySelector("#orderFormLink");
const aboutLink = document.querySelector("#aboutLink");
const productsLink = document.querySelector("#productsLink");
const contactUsLink = document.querySelector("#contactUsLink");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");

    const originalSrc = preview.getAttribute("data-original");
    console.log(originalSrc);
    original.src = `./media/${originalSrc}`;
    const altText = preview.alt;
    imgText.textContent = altText;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});

formLink.addEventListener("click", () => {
  orderForm.scrollIntoView({ behavior: "smooth" });
  navLinks.classList.toggle("open");
});

aboutLink.addEventListener("click", () => {
  aboutUs.scrollIntoView({ behavior: "smooth" });
  navLinks.classList.toggle("open");
});

productsLink.addEventListener("click", () => {
  products.scrollIntoView({ behavior: "smooth" });
  navLinks.classList.toggle("open");
});

contactUsLink.addEventListener("click", () => {
  contactUs.scrollIntoView({ behavior: "smooth" });
  navLinks.classList.toggle("open");
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
