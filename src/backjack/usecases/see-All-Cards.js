import { 
    
    btnNewGame, 
    btnNextCard, 
    btnSeeCard,
    buttonActions,
    playersPoints,
    allMenssageSyntem,    
    machineIaShift,
    getCurrentPoints,
    changeTurn,   
    gameState,
    cheackSeeAllCards,
  
  } from './index';

  export const seeAllCards = (calledByPlayer) => {
    
    const pointsPlayer = playersPoints[0];
    let pointsMachine = playersPoints[playersPoints.length - 1];  

    console.log('>>>>>Inicio SeeCards<<<<');
    // console.log(`Quien tiene el turno: ${gameState.turn}`);
    // console.log(`Valor Argumento: ${calledByPlayer}`);
    console.log(`Quien tiene el turno: ${gameState.turn} (tipo: ${typeof gameState.turn})`);
    console.log(`Player ver cartas: ${gameState.PlayerSeeCard} (tipo: ${typeof gameState.PlayerSeeCard})`);
    console.log(`Machine ver cartas: ${gameState.MachineSeeCard} (tipo: ${typeof gameState.MachineSeeCard})`);    
   // Lógica de botones segun quien llamo la funcion seeAllCards
   
   //Validamos si player y machine activaron ver cartas, para dar los resultados
    if (cheackSeeAllCards())return;


// True por jugador
if (calledByPlayer && gameState.PlayerSeeCard) { 
      // Deshabilitar botones si el jugador llama seeAllCards
      buttonActions.disable(btnNextCard); 
      buttonActions.disable(btnSeeCard);
      
      // Y permitimos que la maquina juegue si tiene <=15 puntos
      if (pointsMachine <= 17){
          // Llamamos a la ia de machine para que tome desiciones
          console.log('>>> Jugador uso seeAllCard>')
       
          
          // Cambiamos al turno al de la máquina
          changeTurn();
          
          // Llamamos a la logica de la Ia
           machineIaShift()         
    
        
         }
          
  } 
  /* Em false cuando la machine activo el seeAllCard
     Permitiendo pedir mas cartas al jugador.
  */
  else if( !calledByPlayer  && gameState.MachineSeeCard && !gameState.PlayerSeeCard) {

    console.log('>>> Machine uso seeAllcard>')
    // Notificamos que la maquina se Bajo
    const menssage = document.querySelector("#menssage");

    // Verifica si se encontró el elemento antes de intentar modificarlo
    if (menssage) {
      menssage.className = 'menssageSeeCards'; // Establece la clase CSS
      menssage.textContent = 'The machine indicated see cards'; // Establece el texto
    } else {
      console.error("No se encontró el elemento #menssage"); // Muestra un error si no se encuentra el elemento
    }

    console.log(` the {${gameState.turn}} accumulerPoints: [${getCurrentPoints()}]`)  
    if (pointsPlayer < 21 ) { 
      // Cambiamos al turno del jugador, para que pueda jugar  
      console.log('>>> ENABLE BUTTON>')     
      //Habilitamos los botones pedir carta o ver cartas tambien (seeAllcards)
      buttonActions.enable(btnNextCard);
      buttonActions.enable(btnSeeCard);
      
      /* Este return es importante, para poder permitir regresar al flujo de 
         turnePlayersPutCards, y que el player pueda pedir otra carta si lo desea*/
      return;
     

    } else {
      // //Si la maquina uso seeAllcards y el jugador tiene >= 21
      
      // //Desabilitamos los tones
      // buttonActions.disable(btnNextCard);
      // buttonActions.disable(btnSeeCard);
      // Por usar el else.
    }
  }


  // Condiciones del ganador del juego y sus mensajes
  if ( gameState.turn === 'End' ) {

    console.log('//// Resultados activados END////')       
    
    // LLamamos a los resultados si alguno saco >= 21
    allMenssageSyntem();

    //Desabilitamos los tones pues ya finalizo el turno
    buttonActions.disable(btnNextCard);
    buttonActions.disable(btnSeeCard);
    
    // Agregamos el estilo pulse al boton New Game
     setTimeout(() => {
     buttonActions.addStylePulse(btnNewGame);
     }, 300);

  }


  
  };