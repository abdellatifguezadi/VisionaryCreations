

function openOverlay() {
  const overlay = document.getElementById('videoOverlay');
  const iframe = overlay.querySelector('iframe');
  

  iframe.src = iframe.dataset.src;
  

  setTimeout(() => {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden'; scrolling
  }, 10);
}

function closeOverlay() {
  const overlay = document.getElementById('videoOverlay');
  const iframe = overlay.querySelector('iframe');
  

  overlay.classList.remove('active');
  document.body.style.overflow = '';

  setTimeout(() => {
      iframe.src = 'about:blank';
  }, 300);
}


document.getElementById('videoOverlay').addEventListener('click', function(e) {
  if (e.target === this) {
      closeOverlay();
  }
});


document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && document.getElementById('videoOverlay').classList.contains('active')) {
      closeOverlay();
  }
});


