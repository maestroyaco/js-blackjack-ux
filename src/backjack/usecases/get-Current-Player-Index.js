import { 
    gameState,
    playersPoints    
  
  } from './index';

export const getCurrentPlayerIndex = () => {
  const playerIndex = gameState.turn === 'Player' ? 0 : playersPoints.length - 1; // Obtener el índice  
  
  return playerIndex;
};