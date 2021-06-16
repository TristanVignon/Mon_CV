const setBg = () => {
	// On recupére tous les bdges de la page et on les met dans un tableau
	const badges = Array.from(document.getElementsByClassName('badge'));

	// Sur chaque badge on va appliquer une fonction
	badges.forEach(badge => {
		// On genere un nombre entier au hasard et on le transforme en texte
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		// On applique la couleur au format hexagonal pour chaque badge
		badge.style.backgroundColor = "#" + randomColor;
	});
}
// On appelle la fonction a chaque fois que la page est chargée
setBg();