import { 
          
  seeAllCards,
  gameState,   
  getCurrentPoints,

} from './index';


// Función que verifica si alguien ha ganado o perdido
export const checkEndGame = () => {
  // Si es el player, regresa un true, sino es false (Machine)
     let indexCheckEnd = gameState.turn === 'Player'; 

  console.log(` CheckEnd: {${gameState.turn}} A-Points: [${getCurrentPoints()}]`)
    if (getCurrentPoints() >= 21) {
      console.log(`Fin game | true Player | false Machine | ::: (${indexCheckEnd})`);
      gameState.turn = 'End';
      seeAllCards(indexCheckEnd);
      return true;  // Indica que el juego ha terminado
    }
    console.log(' >= No cumple, continua')    
    return false;
  };

