import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery')
const gallaryList = makeGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', gallaryList)

function makeGalleryItems(items) {
    return items.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href='${original}'>
         <img
      class="gallery__image"
      src='${preview}' 
      data-source='${original}
      alt='${description}'
    />
  </a>
</div>`
    })
    .join('');
}
 
galleryContainer.addEventListener('click', openModal);

function openModal(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== 'IMG') {
        return
    }
    const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600" alt=${e.target.alt}>
`)
instance.show()
}

console.log(galleryItems);
