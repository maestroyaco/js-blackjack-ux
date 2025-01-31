import { deck } from "../constants";
  // Tomar una carta
  
  export const askForCard = ( ) => {
    if (deck.length === 0) {
      throw " No Card in the deck";
    }
    return deck.pop();
  };