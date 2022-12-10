import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryImagesEl = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryMarkup(galleryItems);
addGallery(galleryItemsMarkup);

function createGalleryMarkup(items) {
  return items
    .map(
      item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
  </div>`,
    )
    .join('');
}
function addGallery(markup) {
  galleryImagesEl.innerHTML = markup;
}
