const launchConfetti = () => {
  const duration = 5 * 500;
  const end = Date.now() + duration;
  const colors = ['#ff0', '#ff6347', '#7fff00', '#00bfff', '#ff1493'];

  (function frame() {
    confetti({
      particleCount: 7,
      angle: Math.random() * 360,
      spread: 60,
      gravity: 1,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      },
      colors: [colors[Math.floor(Math.random() * colors.length)]]
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

window.onload = launchConfetti;
