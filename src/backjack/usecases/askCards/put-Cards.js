import { 
  
  divCardsPlayers,   

} from '../index';

export const putCards = (card, turn) => {
    const loadImgCard = document.createElement("img");
    loadImgCard.src = `assets/cards/${card}.png`;
    loadImgCard.classList.add("card");
    divCardsPlayers[turn].append(loadImgCard);
    // divCardMachine.append( loadImgCard );
  };