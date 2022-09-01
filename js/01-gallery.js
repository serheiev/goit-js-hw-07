import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

const addGallary = (galleryItems) => {
  const allImages = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt='${description}'
        />
      </a>
    </div>`;
    })
    .join("");
  galleryBox.insertAdjacentHTML("beforeend", allImages);
};

addGallary(galleryItems);
let instance;

galleryBox.addEventListener("click", increaseImage);

function increaseImage(e) {
  e.preventDefault();
  if (e.target.tagName === "IMG") {
    instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
    instance.show();
  }
  galleryBox.addEventListener("keydown", decreaseImage);
}

function decreaseImage(e) {
  if (e.code === "Escape") {
    instance.close();
    galleryBox.removeEventListener("keydown", decreaseImage);
    console.log("dsfsd");
  }
}
