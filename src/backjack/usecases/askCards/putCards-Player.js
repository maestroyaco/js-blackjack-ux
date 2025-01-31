import { 
     
    putCards,     
    askForCard,
    cardsInPossession,
    accumulatePoints,      
  
  } from '../index';


export const putCardsPlayer = (playerIndex) => {
    // Toma la ultima carta del deck
    const card = askForCard();
    // Toma el valor de esa carta y la imprime en el div
    putCards(card, playerIndex);
    // Acumula los puntos del jugador
    accumulatePoints(card, playerIndex);
    // Actualizar el contador de cartas de la máquina
    cardsInPossession(playerIndex); 
    
  };