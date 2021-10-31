// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(SimpleLightbox);

const gallery = galleryItems;
console.log(gallery);
const ulGallery = document.querySelector('.gallery');
console.log(ulGallery);

const markup = gallery.map(({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join('');

ulGallery.insertAdjacentHTML('beforeend', markup);

const lighbox = new SimpleLightbox('.gallery a', { 'captionsData': 'alt', 'captionDelay': '250' });
lighbox.on('show.simplelightbox');
