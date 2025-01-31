import {    
     
  getCurrentPlayerIndex,
  getCurrentPoints,
  putCardsPlayer,
  changeTurn,
  gameState,
  playersPoints,

} from '../index';

export const playerShift = () => {  
    
  // Evitar que el jugador juegue en turno de la máquina
    if (gameState.turn !== 'Player') return;    

    // Pedimos una carta que nos regresa el valor y lo usamos para las condiciones
    const playerIndex = getCurrentPlayerIndex()

    //Enviamos el indice cuando pedimos la carta del jugador
    putCardsPlayer(playerIndex);

    
    console.log(` the {${gameState.turn}} AskCard | accumulerPoints: [${getCurrentPoints()}]`)
    
   

}