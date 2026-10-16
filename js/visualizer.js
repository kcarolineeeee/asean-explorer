// Spectrum Equalizer
const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');
const BARS = 18;
const barValues = new Array(BARS).fill(2);

function loopVisualizer() {
  ctx.fillStyle = '#060b0e';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const w = Math.floor(canvas.width / BARS) - 2;

  for (let i = 0; i < BARS; i++) {
    if (isPlaying) {
      barValues[i] = Math.max(2, barValues[i] - 0.9);
      if (Math.random() < 0.12) barValues[i] = Math.floor(Math.random() * 22) + 3;
    } else {
      barValues[i] = Math.max(2, barValues[i] - 0.5);
    }

    const h = barValues[i];
    const x = i * (w + 2) + 2;
    const segments = Math.floor(h / 3);

    for (let s = 0; s < segments; s++) {
      const y = canvas.height - (s * 3.5) - 2.5;
      ctx.fillStyle = (s > 4) ? '#ff3b3b' : (s > 2 ? '#ffca28' : '#22ff66');
      ctx.fillRect(x, y, w, 2.5);
    }
  }
  requestAnimationFrame(loopVisualizer);
}
requestAnimationFrame(loopVisualizer);