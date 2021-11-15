import { component, createContainer } from "../index.js";
export { home };

const home = () => {
    createContainer.container.innerHTML = "";
    const title = component("title", "div");
    title.innerText = "Velkommen til epic gamer food palace";
    createContainer.container.appendChild(title);
};