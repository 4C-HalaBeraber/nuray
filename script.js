// Konfeti animasyonu
function startConfetti(duration = 5000) {
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// Doğum günü müziği çal (isteğe bağlı)
const birthdayAudio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
birthdayAudio.loop = true;

window.addEventListener("load", () => {
  // Videoyu otomatik başlat
  const video = document.getElementById("birthdayVideo");
  video.play().catch(() => {
    console.warn("Tarayıcı otomatik oynatmayı engelledi.");
  });

  // Konfeti ve müziği başlat
  setTimeout(() => {
    startConfetti(6000);
    birthdayAudio.play().catch(() => console.warn("Ses otomatik başlamadı."));
  }, 500);
});
