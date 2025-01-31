import { 
              
    gameState,
    allMenssageSyntem,
    buttonActions,
    btnNextCard,
    btnSeeCard,
    btnNewGame,

  
  } from './index';

export const cheackSeeAllCards = () =>{

    if ( gameState.PlayerSeeCard && gameState.MachineSeeCard){
   
   console.log('//// Los dos quieren ver cartas////')       
    
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

}