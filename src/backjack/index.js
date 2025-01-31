import {   
  btnNewGame, 
  btnNextCard, 
  btnSeeCard,
  buttonActions,  
  startGame,  
  preloadImages,
  cardPaths,
  turnePlayersPutCards,
  seeAllCards,
  getCurrentPoints,
  gameState,
  H1HtmlPoints,
  theDisplay,

} from './usecases/';

// Precarga las imgCards antes de iniciar el juego
preloadImages(cardPaths);

const myModule = (() => {
  "use strict";

btnNewGame.addEventListener("click", () => {
    startGame();
  });

  btnNextCard.addEventListener("click", () => {

    // Activo el display para ver los puntosH1HtmlPoints,
    theDisplay.block(H1HtmlPoints);
    
    // habilito el boton ver cartas al pedir la primer carta
    buttonActions.enable(btnSeeCard);
    //Cambiamos el texto del boton First card a next card
    buttonActions.changeText(btnNextCard, "Next Card");
    // Eliminamos el style pulse del boton Next Card
    buttonActions.removeStylePulse(btnNextCard);

    // llamos la funcion de turnos de jugadores
    turnePlayersPutCards();
  });

btnSeeCard.addEventListener("click", () => {
    // Primero cambiamos el gameState a seeCards
    gameState.PlayerSeeCard = true;
    // Para poder llamar todas las cartas
    seeAllCards(true);   
  });
    
})();
