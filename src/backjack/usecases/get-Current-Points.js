import { 
    playersPoints,
    getCurrentPlayerIndex    
  
  } from './index';

export const getCurrentPoints = () => {
    const playerIndex = getCurrentPlayerIndex(); // Obtener el índice
    return playersPoints[playerIndex]; // Usar el índice para obtener los puntos
};
