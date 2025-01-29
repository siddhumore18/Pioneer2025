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
// taggal button
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarTogglerDemo02");
    const navbarLinks = document.querySelectorAll("#navbarTogglerDemo02 a"); // Select all navbar links

    // Toggle the navbar on button click
    navbarToggler.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click event from bubbling up
        this.classList.toggle("active");
        navbarCollapse.classList.toggle("show");
    });

    // Close the navbar when clicking anywhere outside
    document.addEventListener("click", function (event) {
        const isClickInsideNavbar = navbarCollapse.contains(event.target);
        const isClickOnToggler = navbarToggler.contains(event.target);

        if (!isClickInsideNavbar && !isClickOnToggler) {
            navbarCollapse.classList.remove("show");
            navbarToggler.classList.remove("active");
        }
    });

    // Close the navbar when a link is clicked
    navbarLinks.forEach(link => {
        link.addEventListener("click", function () {
            navbarCollapse.classList.remove("show");
            navbarToggler.classList.remove("active");
        });
    });

    // Close the navbar when navigating to a new page
    window.addEventListener("pageshow", function () {
        navbarCollapse.classList.remove("show");
        navbarToggler.classList.remove("active");
    });
});



