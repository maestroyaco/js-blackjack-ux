import _ from "underscore";
import { deck } from "./constants";

const NumCardstypes = ["C", "D", "H", "S"];
const lettersCards = ["A", "J", "Q", "K"];

export const newDeck = () => {
  deck.length = 0; // Limpia el deck existente sin cambiar su referencia  
  for (let i = 2; i <= 10; i++) {
    for (let NumCard of NumCardstypes) {
      deck.push(i + NumCard);
    }
  }

  for (let NumCard of NumCardstypes) {
    for (let lettersCard of lettersCards) {
      deck.push(lettersCard + NumCard);
    }
  }
 
   // Baraja el deck global actualizando su contenido
   const shuffledDeck = _.shuffle(deck);
   // Reemplaza el contenido del deck global con el resultado barajado
   deck.splice(0, deck.length, ...shuffledDeck); 
};
