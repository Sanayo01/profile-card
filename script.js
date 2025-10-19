function updateTime() {
  const el = document.querySelector('[data-testid="test-user-time"]');
  if (el) el.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);
