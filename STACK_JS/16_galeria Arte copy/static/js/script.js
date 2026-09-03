const galleryImg = document.getElementById("gallery-img");
const galleryCaption = document.getElementById("gallery-caption");

const originalImageSrc = "static/images/vangoimagen2.jpg";
const hoverImageSrc = "static/images/vangoimagen.jfif";

const originalCaption = "Campo de trigo con cipreses, Vincent van Gogh (1889)";
const hoverCaption = "Autorretrato (Van Gogh; 1887)";

galleryImg.addEventListener("mouseover", () => {
  galleryImg.src = hoverImageSrc;
  galleryCaption.textContent = hoverCaption;
});

galleryImg.addEventListener("mouseout", () => {
  galleryImg.src = originalImageSrc;
  galleryCaption.textContent = originalCaption;  });