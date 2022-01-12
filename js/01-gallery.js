import { galleryItems } from './gallery-items.js';
// Change code below this line

const pictureGallery = document.querySelector('.gallery');

const pictureMarkup = createPictureMarkup(galleryItems);

pictureGallery.insertAdjacentHTML('beforeend', pictureMarkup);

pictureGallery.addEventListener('click', onPictureGalleryClick);

function createPictureMarkup(pics) {
  return pics
    .map(({ preview, original, description }) => {
        return `
      <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>      
    `;
    })
    .join('');
}

function onPictureGalleryClick(evt) {
    evt.preventDefault();
    
    if (evt.target.nodeName !== 'IMG') {
    return;
    }
      
const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" 
    width="800" height="600"
    >
`)
instance.show()
}

console.log(galleryItems);


