// Sélectionne toutes les cartes interactives
const conteneurs = document.querySelectorAll('.carte-conteneur');

// Ajoute un écouteur de clic sur chaque carte
conteneurs.forEach(conteneur => {
  conteneur.addEventListener('click', () => {
    conteneur.classList.toggle('retournee');
  });
});
