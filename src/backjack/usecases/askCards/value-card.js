 // Validar que sea Numero y darle el valor a las cartas de letras  * 1 convierte de string a number
 export const valueCards = (card) => {
    const valueC = card.substring(0, card.length - 1);
    return isNaN(valueC) ? (valueC === "A" ? 11 : 10) : valueC * 1;
  };