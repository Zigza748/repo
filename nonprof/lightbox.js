const lightbox = document.querySelector('.image-lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeButton = document.querySelector('.lightbox-close');
const imageButtons = document.querySelectorAll('.service-image-button');
let lastTrigger;

function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    if (lastTrigger) {
        lastTrigger.focus();
    }
}

imageButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const image = button.querySelector('img');
        lastTrigger = button;
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxCaption.textContent = image.alt;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
        closeButton.focus();
    });
});

closeButton.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (event) => {
    if (!lightbox.hidden && event.key === 'Escape') {
        closeLightbox();
    }
});
