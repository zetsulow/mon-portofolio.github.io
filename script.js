console.log("Le script JavaScript est bien chargé !");
// Activer le retournement de la carte au clic
const carteConteneur = document.querySelector('.carte-conteneur');

if (carteConteneur) {
  carteConteneur.addEventListener('click', () => {
    carteConteneur.classList.toggle('retournee');
  });
}
