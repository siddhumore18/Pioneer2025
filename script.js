const wrapper = document.querySelector('.gallery-wrapper');
const images = document.querySelectorAll('.gallery-image');
const prevButton = document.querySelector('.gallery-control.prev');
const nextButton = document.querySelector('.gallery-control.next');

let currentIndex = 0;

// Move to the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
}

// Move to the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery();
}

// Update the gallery position (Fix: Move images individually)
function updateGallery() {
  const offset = -currentIndex * 100; // Shift by 100% per image
  wrapper.style.transform = `translateX(${offset}%)`;
}

// Event listeners for manual controls
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Automatic scrolling
let autoScroll = setInterval(nextImage, 3000);

// Pause auto-scrolling on hover
document.querySelector('.gallery-container').addEventListener('mouseover', () => {
  clearInterval(autoScroll);
});

document.querySelector('.gallery-container').addEventListener('mouseout', () => {
  autoScroll = setInterval(nextImage, 3000);
});
// image poster

  document.querySelector('.poster img').addEventListener('click', function () {
      window.open(this.src, '_blank');
  });

