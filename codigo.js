function aparecerTexto(variable) {
    let entrada = document.getElementById('entr').value;
    var texto = document.getElementById('texto');
    var elem = document.getElementById('textual');
    var salida = "Holaa :3 espero que te guste el regalo Señorita " + entrada + " se que parece algo sencillo \n pero la realidad tardó bastante. Pero quiero que sepas \n que valió la pena porque es para ti. Esto lo hice con mucho cariño y \n sabes que me gustan consentirte con detalles así me quite todo el fin de semana, \n espero te lo tomes de la mejor manera. Deseo con muchas ansias que lo regocijes \n en tu corazón y lo tomes como un regalo muy especial. Me agrada hacer estas \n cosas porque demuestro mi cariño hacia a ti y me gustaría que siempre sea así y nos podamos \n llevar bien. E ir conociendo la parte mas especial de cada uno de nosotros. Pues nada esta página es tuya y guardala de recuerdo. " ;
    texto.textContent = salida;
    elem.style.visibility = variable;
let music = new Audio('stitches.mp3');
music.play();
music.loop =true;
}
