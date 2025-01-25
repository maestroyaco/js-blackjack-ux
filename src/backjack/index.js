import { 
  deck, 
  playersPoints, 
  numberOfCards, 
  incrementSmalls, 
  divCardsPlayers, 
  btnNewGame, 
  btnNextCard, 
  btnSeeCard,
  buttonActions,
  allMenssageSyntem,
  startGame,
  askForCard,
  valueCards,
  preloadImages,
  cardPaths

} from './usecases/';

// Precarga las imgCards antes de iniciar el juego
preloadImages(cardPaths);

const myModule = (() => {
  "use strict";
   
  // Turne Players example for 2

  const turnePlayersPutCards = () => {
    //Imprimimos las cartas y acumulamos los puntos
    
    const pointsPlayer = putCardsPlayer();    

    const pointsMachine = putCardsMachine();   
    

    if (pointsPlayer >= 21 || pointsMachine >= 21) {
      seeAllCards();
    }
  };

  const putCards = (card, turn) => {
    const loadImgCard = document.createElement("img");
    loadImgCard.src = `assets/cards/${card}.png`;
    loadImgCard.classList.add("card");
    divCardsPlayers[turn].append(loadImgCard);
    // divCardMachine.append( loadImgCard );
  };
  const putCardsPlayer = () => {
    // Toma la ultima carta del deck
    const card = askForCard();
    // Toma el valor de esa carta y la imprime en el div
    putCards(card, 0);
    // Acumula los puntos del jugador
    const pointsPlayer = accumulatePoints(card, 0);
    // Actualizar el contador de cartas de la máquina
    cardInPossession(0);

    return pointsPlayer;
  };

  const putCardsMachine = () => {
    // Toma la ultima carta del deck
    const card = askForCard( deck);
    // Toma el valor de esa carta y la imprime en el div
    setTimeout(() => {
      putCards(card, playersPoints.length - 1);
    }, 170);
    // Acumula los puntos de la maquina
    const pointsMachine = accumulatePoints(card, playersPoints.length - 1);
    // Suponiendo que la máquina es siempre el último jugador
    const lastPlayerIndex = numberOfCards.length - 1;
    cardInPossession(lastPlayerIndex);

    return pointsMachine;
  };

  // 0 = First player and the last the machine
  const accumulatePoints = (card, turn) => {
    playersPoints[turn] = playersPoints[turn] + valueCards(card);
    incrementSmalls[turn].innerText = playersPoints[turn];

    return playersPoints[turn];
  };

  const cardInPossession = (turn) => {
    // Si el índice del jugador aún no existe en el array, lo inicializamos en 0
    if (!numberOfCards[turn]) {
      numberOfCards[turn] = 0;
    }

    numberOfCards[turn]++;
    return numberOfCards[turn];
  };

  // Ver todas las cartas
  const seeAllCards = () => {
    const pointsPlayer = playersPoints[0];
    const pointsMachine = playersPoints[playersPoints.length - 1];

    //Condiciones del juego y sus mensajes
    allMenssageSyntem(pointsPlayer, pointsMachine);

    // Desactivamos los botones Next y Ver Card
    buttonActions.disable(btnNextCard);
    buttonActions.disable(btnSeeCard);

    // Agregamos el estilo pulse al boton New Game
    setTimeout(() => {
      buttonActions.addStylePulse(btnNewGame);
    }, 300);
  };

  // Eventos Button Click

    btnNextCard.addEventListener("click", () => {
    // habilito el boton ver cartas al pedir la primer carta
    buttonActions.enable(btnSeeCard);
    //Cambiamos el texto del boton First card a next card
    buttonActions.changeText(btnNextCard, "Next Card");
    // Eliminamos el style pulse del boton Nenxt Card
    buttonActions.removeStylePulse(btnNextCard);

    turnePlayersPutCards();
  });

  btnSeeCard.addEventListener("click", () => {
    // llamamos la funcion ver todas las cartas
    seeAllCards();
  });

  btnNewGame.addEventListener("click", () => {
    startGame();
  });

  
})();
