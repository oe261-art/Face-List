const hoverEyes = document.getElementById('hover-eyes');
const hoverLips = document.getElementById('hover-lips');
const hoverComplexion = document.getElementById('hover-complexion');
const eyesSection = document.getElementById('eyes');
const lipsSection = document.getElementById('lips');
const complexionSection = document.getElementById('complexion');

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

hoverComplexion.addEventListener('mouseenter', () => {
  lipsSection.style.display = 'block';
});
hoverComplexion.addEventListener('mouseleave', () => {
  lipsSection.style.display = 'none';
});