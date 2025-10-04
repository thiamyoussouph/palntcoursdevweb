
const value = document.getElementById('value');
document.getElementById('inc').addEventListener('click', () => {
  value.textContent = Number(value.textContent) + 1;
});
document.getElementById('dec').addEventListener('click', () => {
  value.textContent = Number(value.textContent) - 1;
});
