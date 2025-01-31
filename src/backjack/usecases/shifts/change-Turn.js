import {       
    
    gameState,
  
  } from '../index';

// Función que cambia de turno
export const changeTurn = () => {
    gameState.turn = gameState.turn === 'Player' ? 'Machine' : 'Player';
  };