// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGallery({ preview, original, description }) {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

function addGallery(value) {
    const gallery = value.map(createGallery).join('');
    galleryContainer.innerHTML = gallery;

    makeNewGallery();
}

function makeNewGallery() {
    new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionsDelay: 250,
    });
}

addGallery(galleryItems);