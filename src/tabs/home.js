import { component, createContainer, createTitle } from "../index.js";
import gamer from '../pics/gamer.png';
export { home };

const home = () => {
    createContainer.container.innerHTML = "";
    const quoteBox = component('quotebox', 'div');
    
    createTitle("Velkommen til epic gamer food palace");
    createContainer.container.appendChild(quoteBox);

    const pic = new Image();
    pic.src = gamer;

    const quote = component('quote', 'h3');
    quote.innerText = "'Jeg elsker mad' - Jehova";

    quoteBox.appendChild(pic);
    quoteBox.appendChild(quote);

};