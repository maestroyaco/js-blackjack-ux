// minimumPoints es el argumento enviado por
// turnedMachine( pointsPlayer); que reprecenta los puntos del jugador

export const allMenssageSyntem = (minimumPoints,pointsMachine)=>{

  const menssage = document.querySelector("#menssage");
    
if (minimumPoints === pointsMachine) {

    
    if (minimumPoints === 21) {
        // Ambos tienen 21
        epicTie21Message(menssage)
    } else if (minimumPoints > 21) {
        // Ambos superaron 21
        theySurPassedMessage(menssage);
    } else {
        // Empate genérico (ambos tienen los mismos puntos, pero no 21)
        tieSin21Message(menssage);
    }
} else if (minimumPoints === 21) {
        // El jugador tiene exactamente 21
         playerBeat21Message(menssage);
} else if (pointsMachine === 21) {
        // La máquina tiene exactamente 21
         machineBeat21Message(menssage);
} else if (minimumPoints > 21) {
        // El jugador supera 21
        playerSurPassedMessage(menssage);
} else if (pointsMachine > 21) {
        // La máquina supera 21
        machineSurPassedMessage(menssage);
} else if (minimumPoints > pointsMachine) {
        // El jugador tiene más puntos que la máquina (sin pasarse de 21)
         playerMorePointMessage(menssage);
} else {
        // La máquina tiene más puntos que el jugador (sin pasarse de 21)
        manocheMorePointMessage(menssage);
    }    
 }

 //Mensajes de los resultados

// Ambos tienen 21
const epicTie21Message = (menssage) =>{
    menssage.className = 'menssagewin';            
    menssage.textContent = 'Epic Blackjack x2! Both got 21.';
  };
  
   // Ambos superaron 21
   const theySurPassedMessage = (menssage) =>{
    menssage.className = 'menssagewin' ;            
    menssage.textContent = 'They both exceeded 21. It\'s a draw!';
  };
  
  // Empate genérico (ambos tienen los mismos puntos, pero no 21)
    const tieSin21Message = (menssage) =>{
    menssage.className = 'menssagedefeat';            
    menssage.textContent = 'It\'s a draw! Sin 21';
  };
  
  // El jugador tiene exactamente 21
  const playerBeat21Message = (menssage) =>{
    menssage.className = 'menssagewin';            
    menssage.textContent = 'Blackjack! You beat the machine!';
  };
  
   // La máquina tiene exactamente 21
  const machineBeat21Message = (menssage) =>{
    menssage.className = 'menssagedefeat';            
    menssage.textContent = 'The machine got Blackjack and beat you.';
  };
  
  // El jugador supera 21
  const playerSurPassedMessage = (menssage) =>{
    menssage.className = 'menssagedefeat';            
    menssage.textContent = 'You exceeded 21. You lose.';
  };
  
   // La máquina supera 21
   const machineSurPassedMessage = (menssage) =>{
    menssage.className = 'menssagewin';            
    menssage.textContent = 'The machine exceeded 21. You win!';
  };
  
  // El jugador tiene más puntos que la máquina (sin pasarse de 21)
  const playerMorePointMessage = (menssage) =>{
    menssage.className = 'menssagewin';            
    menssage.textContent = 'You win! Your points are higher.';
  };
  
   // La máquina tiene más puntos que el jugador (sin pasarse de 21)
   const manocheMorePointMessage = (menssage) =>{
    menssage.className = 'menssagedefeat';            
    menssage.textContent = 'The machine wins! Better luck next time.';
  };