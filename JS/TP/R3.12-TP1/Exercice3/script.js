/*
   Objectif de l'exercice :
   
   . Savoir créer dynamiquement des éléments du DOM
   . Savoir les configurer, définir leurs propriétés
   . Savoir définir un lien parent-enfant entre deux éléments du DOM
   . Savoir lier des éléments au DOM courant pour que le navigateur les fasse apparaître.
  
   En répondant correctement aux questions de cet exercice, vous devez obtenir un rendu analogue
   au visuel objectif.jpg disponible dans le répertoire asset.

   Comme d'habitude, interdiction d'éditez directement les fichiers index.html et style.css.
   Seul le fichier script.js doit être modifié.

*/


/* Q1

   Ecrire les instructions JS qui permettent d'obtenir la même page (et le même DOM)
   que ce que vous voyez sur objectif.jpg du répertoire asset.
   
   Notez bien que c'est la partie droite d'objectif.jpg qui vous donne les bonnes informations !
*/

let sec = document.querySelector("#main");

let figure = document.createElement("figure");
figure.className = "frame";
sec.appendChild(figure);

let image = document.createElement("img");
image.className = "marges size";
image.src = "asset/two-cats.jpg"
figure.appendChild(image);

let text = document.createElement("caption");
text.className = "subtitle marges";
text.textContent = "You shoudn't... They have not been cleaned since many months..."
figure.appendChild(text);