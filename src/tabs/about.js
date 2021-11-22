import { component, createContainer, createTitle } from "../index.js";
import directions from '../pics/directions.png';
export { about };

const about = () => {
    createContainer.container.innerHTML = "";
    createTitle("Find epic gamer food palace");

    const pic = new Image();
    pic.src = directions;
    createContainer.container.appendChild(pic);
    pic.classList.add("img");
    const picDescription = component("description", "p");
    picDescription.innerText = "Som det ses på billedet går du bare hen af vejen så er du ved EPIC GAMER FOOD PALACE";
    createContainer.container.appendChild(picDescription);
}