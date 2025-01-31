export let deck = [];
export let playersPoints = [];
export const numberOfCards = [];

export const gameState = {
  // Valor inicial
  turn: 'Player',
  PlayerSeeCard:  false,
  MachineSeeCard: false,
};

  // Div cards
export const divCardsPlayers = document.querySelectorAll(".divcards");


// Nodelist de los H1 de Points players y Machine
export const H1HtmlPoints = document.querySelectorAll(".H1Points");

// Small con puntos y
export const incrementSmalls = document.querySelectorAll("small");

  // Referencias HTML Botones
export const btnNewGame = document.querySelector("#btnnewgame");
export const btnNextCard = document.querySelector("#btnnextcard");
export const btnSeeCard = document.querySelector("#btnseecard");



