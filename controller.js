// Mettre en place nos méthodes
var Json = {

  /**
   * Function qui permet de créer les chats
   * pour chaque paramètre renvoyé dans le main.js on associe les valeurs correspondantes
   */
  setCat: function (nom, avatar, counterH, counterW) {
    this.nom = nom;
    this.avatar = avatar;
    this.counterH = counterH;
    this.counterW = counterW;
  },

  /**
   * Function qui permet de créer les images des chats sur le plateau
   */
  createImage: function () {
    this.image = document.createElement("img");
    this.image.setAttribute("src", this.avatar);
    this.image.setAttribute("alt", this.nom);
    this.image.setAttribute("title", this.nom);
    this.image.style.width = "3%";
    this.image.style.position = "absolute";
    this.image.style.top = "8%";
    this.image.style.left = "17%";
    document.querySelector("body main section div:first-of-type").appendChild(this.image);
  },

  /**
   * Function qui permet de créer les boutons radios
   * Le paramètre id correspond à la valeur i dans la boucle du main.js
   */
  createRadio: function (id) {
    this.radio = document.createElement("input");
    this.radio.setAttribute("type", "radio");
    this.radio.setAttribute("name", "cat");
    this.radio.setAttribute("value", id);
    this.radio.setAttribute("id","chat-"+id);
    // <input type="radio" id="chat-0" name="cat" value="0" />
    document.querySelector("body main aside div:first-of-type").appendChild(this.radio);
  },

  /**
   * Function qui permet de créer les labels pour chaque radios en les associant au bouton radio correspondant
   * Le paramatre id permet de les associé à l'id des radios générés dynamiquement
   */
  createLabel: function (id) {
    this.label = document.createElement("label");
    this.label.setAttribute("for","chat-"+id);
    this.label.innerHTML = this.nom;
    document.querySelector("body main aside div:first-of-type").appendChild(this.label);
  },

  /**
   * Function qui permet de définir l'image de profil dans le aside
   * (juste du design quoi)
   */
  createProfileImage: function () {
    this.profileImage = document.createElement("img");
    this.profileImage.setAttribute("src", this.avatar);
    this.profileImage.style.height = "50px";
    this.profileImage.style.width = "50px";
    document.querySelector("body main aside div:first-of-type").appendChild(this.profileImage);
  },

  /**
  * function qui permet de déplacer les chats vers la gauche
  * la value correspond au paramètre donnée dans le main.js
  */
  moveToLeft: function (value,counterW) {
    this.image.style.marginLeft = `${counterW * value}px`;
    // console.log(counterW * value);
  },

  /**
   * function qui permet de déplacer les chats vers la droite
   * la value correspond au paramètre donnée dans le main.js
   */
  moveToRight: function (value, counterW) {
    this.image.style.marginLeft = `${counterW * value}px`;
    // console.log(counterW * value);
  },

  /**
   * function qui permet de déplacer les chats vers le haut
   * la value correspond au paramètre donnée dans le main.js
   */
  moveToTop: function (value, counterH) {
    this.image.style.marginTop = `${counterH * value}px`;
  },

/**
 * function qui permet de déplacer les chats vers le bas
 * la value correspond au paramètre donnée dans le main.js
 */
  moveToBot: function (value, counterH) {
    this.image.style.marginTop = `${counterH * value}px`;
  },
};
