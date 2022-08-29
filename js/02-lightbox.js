import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

const addGallary = (galleryItems) => {
  const allImages = galleryItems
    .map(({ preview, original, description }) => {
      const imagePattern = `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;

      return imagePattern;
    })
    .join("");
  galleryBox.insertAdjacentHTML("beforeend", allImages);
};
addGallary(galleryItems);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {});
