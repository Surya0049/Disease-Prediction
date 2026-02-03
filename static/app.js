const loginBackgrounds = [
  'linear-gradient(120deg, #f6d365, #fda085)',
  'linear-gradient(120deg, #a1c4fd, #c2e9fb)',
  'linear-gradient(120deg, #d4fc79, #96e6a1)',
  'linear-gradient(120deg, #fbc2eb, #a6c1ee)'
];
let loginBackgroundIndex = 0;

function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString();
  const live = document.getElementById('live-datetime');
  if (live) {
    live.textContent = formatted;
  }
  const loginLive = document.getElementById('login-datetime');
  if (loginLive) {
    loginLive.textContent = formatted;
  }
}

function cycleLoginBackground() {
  loginBackgroundIndex = (loginBackgroundIndex + 1) % loginBackgrounds.length;
  document.body.style.background = loginBackgrounds[loginBackgroundIndex];
}

function applyPreset(preset) {
  const input = document.querySelector('input[name="background_css"]');
  if (input) {
    input.value = preset;
  }
}

function applyColor(color) {
  const input = document.querySelector('input[name="background_css"]');
  if (input) {
    input.value = color;
  }
}

function searchMedicine() {
  const input = document.getElementById('medicine-search');
  if (!input) {
    return;
  }
  const query = encodeURIComponent(input.value.trim());
  if (query) {
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  }
}

function printPage() {
  window.print();
}

setInterval(updateDateTime, 1000);
window.addEventListener('DOMContentLoaded', updateDateTime);
