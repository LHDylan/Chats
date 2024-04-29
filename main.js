// Lancer notre programme
window.onload = function () {
  var chat = [];
  /*
   * Appel des functions créées dans le fichier controller.js
   * Création des objets chatons
   * Implémentation des chatons avec le Json
   * Création des images
   * Création des boutons radios
   * Création des labels
   * Création des images de profil
   */
  for (var i = 0; i < chatons.length; i++) {
    chat[i] = Object.create(Json);
    chat[i].setCat(chatons[i].nom, chatons[i].avatar, chatons[i].counterH, chatons[i].counterW);
    chat[i].createImage();
    // console.log(chat[i]);
    chat[i].createRadio(i);
    chat[i].createLabel(i);
    chat[i].createProfileImage();
  }
  
  /**
   * Attribuer checked au premier input[type="radio"]
   * <input type="radio" id="chat-0" name="cat" value="0" checked="checked" />
   */
  document.querySelector("body main aside div:first-of-type input:first-of-type").setAttribute("checked", "checked");
  
  /**
   * Variable qui stocke la valeur de la value du chat selectionné
   * Variable déclarée ici de manière globale afin d'être utilisé dans toutes les functions qui suivent
   */
  var selectedCat;

  /**
   * Récupère toutes les balises avec le nom "cat" {
   *    Mise en écoute de chaque element de nom "cat" {
   *        A chaque changement (choix du chat) on renvoie la nouvelle valeur
   *    }
   * }
   */
  document.getElementsByName("cat").forEach((cat) => {
    cat.addEventListener("change", function (event) {
      selectedCat = event.currentTarget.value;
      // console.log(selectedCat);
    });
  });

  /**
   * Deplacer les chats vers la gauche
   */
  document.querySelector("table tr:nth-of-type(2) td:first-of-type button").addEventListener("click", function () {
    chat[selectedCat].counterW--;
    chat[selectedCat].moveToLeft(30, chat[selectedCat].counterW);
  });

  /**
   * Deplacer les chats vers la droite
   */
  document.querySelector("table tr:nth-of-type(2) td:last-of-type button").addEventListener("click", function () {
    chat[selectedCat].counterW++;
    chat[selectedCat].moveToRight(30, chat[selectedCat].counterW);
  });

  /**
   * Deplacer les chats vers le haut
   */
  document.querySelector("table tr:first-of-type td:nth-of-type(2) button").addEventListener("click", function () {
    chat[selectedCat].counterH--;
    chat[selectedCat].moveToTop(30, chat[selectedCat].counterH);
  });

  /**
   * Deplacer les chats vers le bas
   */
  document.querySelector("table tr:last-of-type td:nth-of-type(2) button").addEventListener("click", function () {
    chat[selectedCat].counterH++;
    chat[selectedCat].moveToBot(30, chat[selectedCat].counterH);
  });
};

/**
* function() : camelCase()
* id, class : kebab-case
* name : snake_case
* nom de fichiers, nom de classes : PascalCase
* exemple : import Scanner from 'java.util.Scanner'
*/
