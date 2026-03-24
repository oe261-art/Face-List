const hoverEyes = document.getElementById('hover-eyes');
const hoverLips = document.getElementById('hover-lips');
const eyesSection = document.getElementById('eyes');
const lipsSection = document.getElementById('lips');

hoverEyes.addEventListener('mouseenter', () => {
  eyesSection.style.display = 'block';
});
hoverEyes.addEventListener('mouseleave', () => {
  eyesSection.style.display = 'none';
});

hoverLips.addEventListener('mouseenter', () => {
  lipsSection.style.display = 'block';
});
hoverLips.addEventListener('mouseleave', () => {
  lipsSection.style.display = 'none';
});