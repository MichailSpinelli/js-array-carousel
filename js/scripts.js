/*
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l'immagine attiva, che quindi verrà visualizzata al posto della precedente.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
Consigli del giorno:
1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"

*/

const img = [
    'consegna/img/01.webp',
    'consegna/img/02.webp',
    'consegna/img/03.webp',
    'consegna/img/04.webp',
    'consegna/img/05.webp',
];

let result = '';

for (let i = 0; i < img.length; i++) {

    result += `<img src="${img[i]}" alt="Immagine ${i + 1}">`;

  }

  console.log(result);

  const button = document.querySelector("input");

  button.addEventListener("click", function() {
    alert("Il pulsante è stato cliccato!");
    
    });

    let immagineCorrente = 0;
    const imgContainer = document.querySelector('.contenitore-img > img');
    const rightButton = document.querySelector('.bottone-nav-dx');
    const leftButton = document.querySelector('.bottone-nav-sx');

    function updateImage() {
        imgContainer.src = img[immagineCorrente];
    }
    
    rightButton.addEventListener('click', function () {
        immagineCorrente = (immagineCorrente + 1) % img.length;
        updateImage();
    });
    
    leftButton.addEventListener('click', function () {
        immagineCorrente = (immagineCorrente - 1 + img.length) % img.length;
        updateImage();
    });

    updateImage();