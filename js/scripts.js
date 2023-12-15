/*
Riprendete l'esercizio del carosello e aggiungete la funzionalità di autoplay:
Quando si carica la pagina, le slide iniziano a scorrere da sole ogni 3 secondi
BONUS
Aggiungere il "ciclo infinito" sul carosello (cioè dall'ultima slide passo alla prima e viceversa)
Aggiungere un pulsante per fermare l'avanzamento automatico
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

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

    setInterval(myFunction, 3000);

    function myFunction(){
        immagineCorrente = (immagineCorrente + 1) % img.length;
        updateImage();
    }