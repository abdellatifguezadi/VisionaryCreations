// const container = document.querySelector(".btn");
// const overlay = document.querySelector(".vd-overlay");

// container.addEventListener("click", () => {
//   overlay.classList.add("open");
//   overlay.classList.remove("none");
// });

// overlay.addEventListener("click", () => {
//     // console.log(overlay);

//   overlay.classList.remove('open');
//   overlay.classList.add("none");
  
// });

function openOverlay() {
  const overlay = document.getElementById('videoOverlay');
  const iframe = overlay.querySelector('iframe');
  
  // Set the actual video URL when opening
  iframe.src = iframe.dataset.src;
  
  // Add active class with a slight delay for animation
  setTimeout(() => {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }, 10);
}

function closeOverlay() {
  const overlay = document.getElementById('videoOverlay');
  const iframe = overlay.querySelector('iframe');
  
  // Remove active class
  overlay.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
  
  // Reset iframe src after animation
  setTimeout(() => {
      iframe.src = 'about:blank';
  }, 300);
}

// Close overlay when clicking outside the video
document.getElementById('videoOverlay').addEventListener('click', function(e) {
  if (e.target === this) {
      closeOverlay();
  }
});

// Close overlay with escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && document.getElementById('videoOverlay').classList.contains('active')) {
      closeOverlay();
  }
});


