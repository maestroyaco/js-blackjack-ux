import { 
  
  putCards,     
  askForCard,
  cardsInPossession,
  accumulatePoints,
  playersPoints,    

} from '../index';


export const putCardsMachine = (machineIndex) => {
    
    // Asi indicamos que es el ultimo indice de cualquier array      
    // Toma la ultima carta del deck
    const card = askForCard();
    // Toma el valor de esa carta y la imprime en el div      
    putCards(card, machineIndex);   
    // Acumula los puntos de la maquina    
    accumulatePoints(card, machineIndex );    
    // Actualizar el contador de cartas de la máquina    
    cardsInPossession(machineIndex);
    
  };