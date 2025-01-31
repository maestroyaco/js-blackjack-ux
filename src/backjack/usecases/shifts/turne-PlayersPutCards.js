import { 
          
    seeAllCards,
    gameState,    
    getCurrentPoints,
    playerShift,
    machineIaShift,
    changeTurn,
    checkEndGame, 
    startGame,
    playersPoints
  
  } from '../index';


export const turnePlayersPutCards = () => {
  console.log(':::Inicio Ciclo Turnos:::') 
     // Validamos que   
     if (checkEndGame()) return;
       
     // Turno del jugador    
        playerShift();   

     // Si el juego termina     

     if (checkEndGame()) return;

    // Cambiamos al turno al de la máquina
       changeTurn();
      
      /* Llamamos a la iA de la Machine para que tome deciones segun los
        playersPoints <= 20 o el nuermo de cartas en numberOfCards[indexmachine]
     */
      machineIaShift();   
      console.log(':::Fin Ciclo Turnos:::') 
      console.log(`Quien tiene el turno final: ${gameState.turn}`);
  };
