import './styles.css';
import { about } from './tabs/about';
import { home } from './tabs/home';
import { menu } from './tabs/menu';
export {component, createContainer, createTitle}

const createTitle = (innerText) => {
    const title = component("title", "div");
    title.innerText = innerText;
    createContainer.container.appendChild(title);
};

function component(name, type) {
    const element = document.createElement(type);
    element.classList.add(name);
    return element;
}

const createContent = (() => {
    const contents = component("contents", "div");
    document.body.appendChild(contents);
    return {contents};
})();

const createButtons = (() => {
    const tabs = component("tabs", "div");
    const homeButton = component("tabbutton", "button");
    const menuButton = component("tabbutton", "button");
    const aboutButton = component("tabbutton", "button");
    homeButton.innerText = "home";
    menuButton.innerText = "menu";
    aboutButton.innerText = "about";
    tabs.appendChild(homeButton);
    tabs.appendChild(menuButton);
    tabs.appendChild(aboutButton);
    createContent.contents.appendChild(tabs);
    return {homeButton, menuButton, aboutButton};
})();

const createContainer = (() => {
    const container = component("container", "div");
    createContent.contents.appendChild(container);
    return {container};
})();



const tabSelector = (() => {
    createButtons.menuButton.onclick = () => {
        menu();
    };
    createButtons.homeButton.onclick = () => {
        home();
    };
    createButtons.aboutButton.onclick = () => {
        about();
    };
})();

const createFooter = (() => {
    const footer = component("footer", "footer");
    document.body.appendChild(footer);
    const footerText = component("footerText", "p");
    footerText.innerText = "Made by UrinTrolden";
    document.body.appendChild(footer);
    footer.appendChild(footerText);
})();