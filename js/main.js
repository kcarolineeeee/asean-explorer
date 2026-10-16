window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') resetToCenter();
  if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
    e.preventDefault();
    togglePlayPause();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  updateUI();
});