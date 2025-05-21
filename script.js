function startConfetti(duration = 5000, callback) {
  const end = Date.now() + duration;
  const interval = setInterval(() => {
    confetti({
      particleCount: 10,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 10,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
    if (Date.now() > end) {
      clearInterval(interval);
      if (typeof callback === "function") callback();
    }
  }, 200);
}

window.addEventListener("load", () => {
  const video = document.getElementById("birthdayVideo");

  startConfetti(5000, () => {
    video.style.display = "block";
    video.play().catch((err) => {
      console.warn("Video autoplay engellendi:", err);
    });
  });
});
