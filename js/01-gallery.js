import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

const addGallary = (galleryItems) => {
  const allImages = galleryItems
    .map(({ preview, original, description }) => {
      const imagePattern = `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt='${description}'
      />
    </a>
  </div>`;

      return imagePattern;
    })
    .join("");
  galleryBox.insertAdjacentHTML("beforeend", allImages);
};

addGallary(galleryItems);

galleryBox.addEventListener("click", (e) => {
  e.preventDefault();
  console.dir(e);
  if (e.target.tagName === "IMG") {
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

    instance.show();
    galleryBox.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        instance.close();
      }
    });
  }
});
