document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  function updateTime() {
    timeElement.textContent = Date.now().toString();
  }
  updateTime();
  setInterval(updateTime, 1000);
});
