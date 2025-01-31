import { deck, playersPoints,
  numberOfCards, 
  incrementSmalls, 
  divCardsPlayers, 
  btnNewGame, 
  btnNextCard, 
  btnSeeCard,
  buttonActions, 
  reloadH1Menssage,
  newDeck,
  gameState,
  H1HtmlPoints,
  theDisplay,
} from "./index";

// Iniciamos el juego con un nuevo deck
export const startGame = (numPlayers = 2) => {
    
    // Reinico game States 
    gameState.turn = 'Player';  
    gameState.MachineSeeCard = false;
    gameState.PlayerSeeCard = false;
    
    // Limpia el deck existente
    deck.length = 0;
    // Crea un nuevo deck 
    newDeck();

    // Reinicia los puntos a 0       
    playersPoints.length = 0;
    numberOfCards.length = 0;
    console.clear();
    
    for (let i = 0; i < numPlayers; i++) {
      playersPoints.push(0);
    }
    // Reiniciamos los contadores a 0
    incrementSmalls.forEach((elem) => {
      elem.innerText = 0;
    });
    // Limpiamos la mesa de cartas
    divCardsPlayers.forEach((elem) => {
      elem.innerText = "";
    });

   // Desactivo el display del H1 con los Points, se activa cuando piden la primera carta
    theDisplay.none(H1HtmlPoints);

    // Habilitamos el Boton Next card
    buttonActions.enable(btnNextCard);

    //Cambiamos el texto del boton next a First
    buttonActions.changeText(btnNextCard, "First Cards");

    //Damos la class pulse al boton Next Card
    buttonActions.addStylePulse(btnNextCard);

    /*Desactivo el boton de ver cartas, hasta que se pida la primera carta
      Por mejorar el sistema con el turne-PlayersPutCards
    */
    buttonActions.disable(btnSeeCard);

    // Eliminamos el style pulse del boton New Game
    buttonActions.removeStylePulse(btnNewGame);

    //Reinicio del H1 para que no quede en pantalla
    reloadH1Menssage(menssage);
  };