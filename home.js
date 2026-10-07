document.addEventListener("DOMContentLoaded", function () {
  const podcastModal = document.getElementById("podcastModal");

  const podcastIframe = document.getElementById("podcastIframe");

  if (!podcastModal || !podcastIframe) {
    return;
  }

  podcastModal.addEventListener("shown.bs.modal", function () {
    podcastIframe.src =
      "https://www.youtube.com/embed/D4sAGa_rSJ8?rel=0&playsinline=1";
  });

  podcastModal.addEventListener("hidden.bs.modal", function () {
    podcastIframe.src = "";
  });

  // =========================================
  // HERO VOICE NOTE WAVEFORM INTERACTION
  // =========================================
  const heroWaveform = document.getElementById("heroWaveform");
  if (heroWaveform) {
    heroWaveform.addEventListener("click", function () {
      this.classList.toggle("is-playing");

      const playIcon = this.querySelector(".play-icon");
      const pauseIcon = this.querySelector(".pause-icon");

      if (this.classList.contains("is-playing")) {
        if (playIcon) playIcon.classList.add("d-none");
        if (pauseIcon) pauseIcon.classList.remove("d-none");
      } else {
        if (playIcon) playIcon.classList.remove("d-none");
        if (pauseIcon) pauseIcon.classList.add("d-none");
      }
    });
  }
});

const heroVoiceToggle = document.getElementById("heroVoiceToggle");

if (heroVoiceToggle) {
  heroVoiceToggle.addEventListener("change", function () {
    const icon = this.nextElementSibling.querySelector(".waveform-play-icon");

    if (icon) {
      if (this.checked) {
        // Play icon -> Pause icon
        icon.classList.remove("ri-play-circle-line");
        icon.classList.add("ri-pause-circle-line");
      } else {
        // Pause icon -> Play icon
        icon.classList.remove("ri-pause-circle-line");
        icon.classList.add("ri-play-circle-line");
      }
    }
  });
}