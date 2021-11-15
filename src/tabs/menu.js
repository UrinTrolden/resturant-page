import { component, createContainer } from "../index.js";
import durumsBlade from '../pics/durumsblade.png';
export { menu };

const menu = () => {
    createContainer.container.innerHTML = "";
    const durumsB = component("durumblade", "div");
    durumsB.innerText = "Durums blade";
    const durumsBladePic = new Image();
    durumsBladePic.src = durumsBlade;
    durumsB.appendChild(durumsBladePic);
    createContainer.container.appendChild(durumsB);
};