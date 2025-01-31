// Mi firt obj in funcion <3
export const buttonActions = {
  //Desabilitar o habilitar el boton
  disable: (button) => {
    button.disabled = true;
    button.classList.add("btn-disabled");
  },
  enable: (button) => {
    button.disabled = false;
    button.classList.remove("btn-disabled");
  },
  //Agregar o quitar style pulse al boton
  addStylePulse: (button) => {
    button.classList.add("pulse");
  },
  removeStylePulse: (button) => {
    button.classList.remove("pulse");
  },
  //Cambiar el texto tel boton pide (Namebutton, 'Otro text')
  changeText: (button, text) => {
    button.textContent = text;
  },
};

// Elimina las classes del H1 y el texto - Evita que se vea el background-color
export const reloadH1Menssage = (menssage) => {
  menssage.innerHTML = "";
  menssage.classList.remove("menssagewin");
  menssage.classList.remove("menssagedefeat");
  menssage.classList.remove("menssageSeeCards");
};
// export { buttonActions, reloadH1Menssage };

// Activar display del h1 none a block :: display: none;
export const theDisplay = {
  block: (elements) => {
    if (elements) {
      elements.forEach(element => {
        if (element) {
          element.style.display = "flex"; // O "block" si prefieres
        } else {
          console.error("Elemento no encontrado.");
        }
      });
    }
  },
  none: (elements) => {
    if (elements) {
      elements.forEach(element => {
        if (element) {
          element.style.display = "none";
        } else {
          console.error("Elemento no encontrado.");
        }
      });
    }
  },
};