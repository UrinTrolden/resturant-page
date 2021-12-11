import { component, createContainer, createTitle } from "../index.js";
import durumsBlade from '../pics/durumsblade.png';
import durumsRing from '../pics/durumsring.png';
import durumsShield from '../pics/durumsshield.png';


export { menu };

const createMenuGroupHeading = (mealDescription) => {
    const meal = component("menu-group-heading", 'h2');
    meal.innerText = mealDescription;
    return meal;
}

const createMenuItem = (itemImage, itemName, itemPrice, itemDescription) => {
    let menuItemContainer = component("menu-item", "div");
    let menuItemImage = new Image();
    menuItemImage.src = itemImage;
    menuItemImage.classList = "menu-item-image";
    let menuItemText = component("menu-item-text", "div");
    let menuItemHeading = component("menu-item-heading", "h3");
    let menuItemName = component("menu-item-name", "span");
    let menuItemPrice = component("menu-item-price", "span");
    let menuItemDescription = component("menu-item-description", "p");

    menuItemName.innerText = itemName;
    menuItemPrice.innerText = itemPrice;
    menuItemDescription.innerText = itemDescription;    

    menuItemContainer.appendChild(menuItemImage);
    menuItemContainer.appendChild(menuItemText);
    menuItemText.appendChild(menuItemHeading);
    menuItemHeading.appendChild(menuItemName);
    menuItemHeading.appendChild(menuItemPrice);
    menuItemText.appendChild(menuItemDescription);
    return menuItemContainer;
}

const menu = () => {
    //clear container
    createContainer.container.innerHTML = "";
    let menuContainer = component("menu", "div");
    createContainer.container.appendChild(menuContainer);
    menuContainer.appendChild(createMenuGroupHeading("Durum"));

    let menuGroupContainer = component("menu-group", "div");
    menuContainer.appendChild(menuGroupContainer);
    
    let durumsBladeItem = createMenuItem(durumsBlade, "Durums' Blade", "39 kr.", "Prøv den udsøgte durums blade varmt anbefalet af madkritikere herunder den verdenskendte Doran.");
    let durumsRingItem = createMenuItem(durumsRing, "Durums' Ring", "39 kr.", "Prøv den udsøgte durums ring varmt anbefalet af madkritikere herunder den verdenskendte Doran.");
    let durumsShieldItem = createMenuItem(durumsShield, "Durums' Shield", "39 kr.", "Prøv den udsøgte durums shield varmt anbefalet af madkritikere herunder den verdenskendte Doran.");


    menuGroupContainer.appendChild(durumsBladeItem);
    menuGroupContainer.appendChild(durumsRingItem);
    menuGroupContainer.appendChild(durumsShieldItem);


    
    /*
    let durumOne = component("menu-item", "div");
    durumOne.innerText = "Durums Blade";
    menuGroupContainer.appendChild(durumOne);
    let durumTwo = component("menu-item", "div");
    durumTwo.innerText = "Durums Ring";
    menuGroupContainer.appendChild(durumTwo);
    let durumThree = component("menu-item", "div");
    durumThree.innerText = "Durums Shield";
    menuGroupContainer.appendChild(durumThree);
    */
    
    /*
    createTitle("Foretter");
    createContainer.container.appendChild(createMeal("forret", durumsBlade, "Durums' Blade 59,-"));
    createContainer.container.appendChild(createMeal("forret", durumsRing, "Durums' Ring 59,-"));
    */
    
};