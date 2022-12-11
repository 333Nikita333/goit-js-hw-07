"use strict"

import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
addGallery(galleryItemsMarkup);
galleryEl.addEventListener('click', onSelectImg);

function createGalleryItemsMarkup(items) {
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
  galleryEl.innerHTML = markup;
}

function onSelectImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const selectedImage = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${selectedImage}" width="800" height="600">`,
  );
  instance.show();

  gallery.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      instance.close();
    }
  });
}
