const hoverEyes = document.querySelector('.eyes');
const hoverLips = document.querySelector('lips');
const hoverComplexion = document.querySelector('complexion');
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
  complexionSection.style.display = 'block';
});
hoverComplexion.addEventListener('mouseleave', () => {
  complexionSection.style.display = 'none';
});