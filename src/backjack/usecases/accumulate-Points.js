import { 
  
  playersPoints, 
  numberOfCards, 
  incrementSmalls,  
  valueCards,  

} from './index';

// 0 = First player and the last the machine
export const accumulatePoints = (card, turn) => {
    playersPoints[turn] = playersPoints[turn] + valueCards(card);
    incrementSmalls[turn].innerText = playersPoints[turn];

    return playersPoints[turn];
  };

export  const cardsInPossession = (turn) => {
    // Si el índice del jugador aún no existe en el array, lo inicializamos en 0
    
     if (numberOfCards[turn] === undefined) {
       numberOfCards[turn] = 0;
     }
    // Se asigna 1+ carta segun el turno
      numberOfCards[turn]++;
      return numberOfCards[turn];    
        
     
  };