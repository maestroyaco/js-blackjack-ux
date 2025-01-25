import { deck, playersPoints,numberOfCards, incrementSmalls, divCardsPlayers, btnNewGame, btnNextCard, btnSeeCard } from "./constants.js";
import { buttonActions, reloadH1Menssage } from "./ux.js";
import { newDeck } from "./new-deck.js";


// Iniciamos el juego con un nuevo deck
export const startGame = (numPlayers = 2) => {
    deck.length = 0; // Limpia el deck existente
    newDeck();       // Crea un nuevo deck
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
    // Eliminamos cartas
    divCardsPlayers.forEach((elem) => {
      elem.innerText = "";
    });
    // Habilitamos el Boton Next card
    buttonActions.enable(btnNextCard);

    //Cambiamos el texto del boton next a First
    buttonActions.changeText(btnNextCard, "First Card");

    //Damos la class pulse al boton Next Card
    buttonActions.addStylePulse(btnNextCard);

    //Desactivo el boton de ver cartas al inicio del juego
    buttonActions.disable(btnSeeCard);

    // Eliminamos el style pulse del boton New Game
    buttonActions.removeStylePulse(btnNewGame);

    //Reinicio del H1 para que no quede en pantalla
    reloadH1Menssage(menssage);
  };