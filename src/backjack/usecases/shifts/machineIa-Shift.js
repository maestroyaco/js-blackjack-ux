// Importamos de forma global los puntos y el nuermo de cartas
import {     
   
    numberOfCards,
    putCardsMachine,
    seeAllCards,
    gameState,
    getCurrentPlayerIndex,
    getCurrentPoints,
    playersPoints,
    changeTurn,
    checkEndGame,    
  
  } from '../index';


export const machineIaShift = () => {

  let pointsMachine = playersPoints[playersPoints.length - 1];
  const pointsPlayer = playersPoints[0];
 
  // La iA solo puede jugar en su turno
  if (gameState.turn !== 'Machine') return;   
  
  // Importamos los puntos globales de la machine
  const playerIndex = getCurrentPlayerIndex()

  
  
  /* Si el jugador indico ver cartas, la maquina saca cartas, hasta tener 18 o menos
       Luego activa ver cartas he invoca la funcion seeAllCards que valida todo.*/
       
  // Si el jugador ha indicado ver cartas, la máquina jugará hasta alcanzar 18 puntos o más
    
       if (gameState.PlayerSeeCard && pointsMachine <= 21) {
      while (pointsMachine < 18) {
          putCardsMachine(playerIndex);
          pointsMachine = getCurrentPoints(); // Actualizamos puntos después de pedir carta
          
          console.log(`::SEE CICLO : Machine pide carta | Puntos acumulados: [${pointsMachine}]`);
      }

      // Una vez que la IA alcanza 18 o más, activa ver cartas y cambia el turno
      gameState.MachineSeeCard = true;
      seeAllCards(false);
      return;
  }
  
  // Pide una carta si esta en rango de pedir <= 17 
  if (getCurrentPoints() <= 17) {
     
    // Pedimos carta y cargamos puntos al indice 
    putCardsMachine(playerIndex);   
   
    console.log(` the {${gameState.turn}} AskCard | accumulerPoints: [${playersPoints[playersPoints.length - 1]}]`)
   
    // Despues de pedir carta si tiene >= 21 fin del juego
     if (checkEndGame()) return;

    //Si después de pedir carta tiene 18 a 20, activa seeAllCards para bajarse.
    if (getCurrentPoints() >= 18 ) {
        console.log('::::::: Machine SeeAllCard last Cards');

        // Indicamos que la maquina activo ver cartas.
        gameState.MachineSeeCard = true;

        /* Y cambia el turno al jugador antes de bajarse. 
        Lo que nos permite jugar como jugador si aun no tenemos >=21 */
        changeTurn();
        
        seeAllCards(false);        
        return;
    }
} 

   // Cambiamos al turno a player, si solo pide carta.
    changeTurn();     

}