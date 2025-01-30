// Get modal element
var modal = document.getElementById("eventModal");
var modalTitle = document.getElementById("modal-title");
var modalDescription = document.getElementById("modal-description");
var closeModal = document.getElementsByClassName("close")[0];

// Event data
const events = {
    abhivyakti: {
        title: "Abhivyakti - Paper Presentation",
        description: "A platform for participants to present groundbreaking research ideas. A chance to showcase your innovative research to industry professionals."
    },
    praklap: {
        title: "Praklap - Paper Presentation",
        description: "Showcasing practical and impactful research in technology with real-world applications."
    },
    battleblitz: {
        title: "Battle Blitz - Game",
        description: "A thrilling competitive game event where strategy meets excitement. Test your skills and compete for the championship."
    }
};

// Function to open modal with event details
function showEventDetails(eventName) {
    modal.style.display = "block";
    modalTitle.textContent = events[eventName].title;
    modalDescription.textContent = events[eventName].description;
}

// Close modal when user clicks 'x'
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add event listeners to 'See Details' buttons
document.getElementById("abhivyakti-btn").onclick = function() {
    showEventDetails('abhivyakti');
};

document.getElementById("praklap-btn").onclick = function() {
    showEventDetails('praklap');
};

document.getElementById("battleblitz-btn").onclick = function() {
    showEventDetails('battleblitz');
};
