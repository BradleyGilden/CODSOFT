// Function to hide an element
function hideElement(element) {
  gsap.set(element, { opacity: 0, display: 'none', ease: "power1.out"});
}

// Function to show an element
function showElement(element) {
  gsap.set(element, { opacity: 1, display: 'block', ease: "power1.out" });
}


document.addEventListener('DOMContentLoaded', () => {
// Initial setup
  const carouselCells = document.querySelectorAll('.carousel-cell');
  let currentIndex = 0; // Index of the initially visible element

  // Hide all elements except the one at the specified index
  carouselCells.forEach((cell, index) => {
    if (index !== currentIndex) {
      hideElement(cell);
    }
  });

  // Example of how to toggle visibility
  // Replace this with your actual logic for changing images in the carousel

  // Function to switch to a specific index
  function switchToIndex(index) {
    carouselCells.forEach((cell, i) => {
      if (i === index) {
        showElement(cell);
      } else {
        hideElement(cell);
      }
    });
  }

  // Example: Switch to the second image after a delay
  setInterval(() => {
    switchToIndex((currentIndex++) % 3);
  }, 3000);
})
