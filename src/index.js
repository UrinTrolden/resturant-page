import durumsBlade from './pics/durumsblade.png'

console.log("hello there");

function component() {
    const element = document.createElement('div');

    element.innerHTML = "Welcome to the shop!";
    element.classList.add('title');

    // Add the image to our existing div.
    const durumsBladePic = new Image();
    durumsBladePic.src = durumsBlade;

    element.appendChild(durumsBladePic);

    return element;
 }

 document.body.appendChild(component());