//Novinky
//Ovlivněte stránku JavaScriptem.

//Vytvořte si repozitář ze šablony cviceni-novinky. V repozitáři je připravena webová stránka, která zobrazuje několik zajímavých zpráv. Zobrazte stránku v prohlížeči a veškeré úkoly z tohoto cvičení proveďte v JavaScriptovém souboru index.js.

//1. úkol
//Pomocí document.querySelector vyberte element body a uložte si jej do proměnné bodyElement. Pomocí této proměnné nastavte barvu pozadí elementu na hodnotu #e9e9e9.
const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = '#e9e9e9';

//2. úkol
// Do jiné proměnné vyberte element s třídou news a nastavte mu barvu pozadí na bílou a maximální šířku na 60rem.
const bodyNews = document.querySelector('.news');
bodyNews.style.backgroundColor = "white";
bodyNews.style.maxWidth = '60rem';

//3. úkol
// Vyberte element h1 a nastavte mu (v JavaScriptu) třídu na news__title. Nadpis by měl změnit styl. Nastavte také obsah nadpisu na text Aktuální novinky.
const h1Element = document.querySelector('h1');
h1Element.classList.add("news__title");
h1Element.textContent = "Aktuální novinky";

//4. úkol
//Pomocí atributu id vyberte element obsahující první zprávu. Přidejte do jeho atributu class třídu post--main. První zpráva by tak měla mírně změnit svůj styl.

const prvniZprava = document.querySelector('#zprava1'); // nebo document.getElementById('zprava1');
prvniZprava.classList.add("post--main");


//5. úkol
// Pomocí CSS selektoru vyberte obrázek ve třetí zprávě (id zprávy je zprava3) a změňte jeho atribut src na obrázek images/zprava3-novy.jpg.

const tretiZprava = document.querySelector('#zprava3 img');
tretiZprava.src = 'images/zprava3-novy.jpg';