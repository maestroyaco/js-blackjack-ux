// Precargar las imágenes

export const preloadImages = (imagePaths) => {
    imagePaths.forEach(path => {
        const img = new Image();
        img.src = path; // Esto fuerza al navegador a cargar la imagen
        // img.onload = () => console.log(`Imagen cargada: ${path}`);
        // img.onerror = () => console.error(`Error al cargar: ${path}`);
    });
};

// Lista de rutas de las cartas
export const cardPaths = [
    'assets/cards/2C.png',
    'assets/cards/2D.png',
    'assets/cards/2H.png',
    'assets/cards/2S.png',
    'assets/cards/3C.png',
    'assets/cards/3D.png',
    'assets/cards/3H.png',
    'assets/cards/3S.png',
    'assets/cards/4C.png',
    'assets/cards/4D.png',
    'assets/cards/4H.png',
    'assets/cards/4S.png',
    'assets/cards/5C.png',
    'assets/cards/5D.png',
    'assets/cards/5H.png',
    'assets/cards/5S.png',
    'assets/cards/6C.png',
    'assets/cards/6D.png',
    'assets/cards/6H.png',
    'assets/cards/6S.png',
    'assets/cards/7C.png',
    'assets/cards/7D.png',
    'assets/cards/7H.png',
    'assets/cards/7S.png',
    'assets/cards/8C.png',
    'assets/cards/8D.png',
    'assets/cards/8H.png',
    'assets/cards/8S.png',
    'assets/cards/9C.png',
    'assets/cards/9D.png',
    'assets/cards/9H.png',
    'assets/cards/9S.png',
    'assets/cards/10C.png',
    'assets/cards/10D.png',
    'assets/cards/10H.png',
    'assets/cards/10S.png',
    'assets/cards/AC.png',
    'assets/cards/AD.png',
    'assets/cards/AH.png',
    'assets/cards/AS.png',
    'assets/cards/JC.png',
    'assets/cards/JD.png',
    'assets/cards/JH.png',
    'assets/cards/JS.png',
    'assets/cards/KC.png',
    'assets/cards/KD.png',
    'assets/cards/KH.png',
    'assets/cards/KS.png',
    'assets/cards/QC.png',
    'assets/cards/QD.png',
    'assets/cards/QH.png',
    'assets/cards/QS.png'
];

