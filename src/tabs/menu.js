import { component, createContainer, createTitle } from "../index.js";
import durumsBlade from '../pics/durumsblade.png';
import durumsRing from '../pics/durumsring.png';

export { menu };

const createMeal = (mealTitle, mealPic, mealDescription) => {
    
    const meal = component(mealTitle, 'div');
    meal.innerText = mealDescription;
    //adds pic
    const picture = component("picture", 'div');
    const pic = new Image();
    pic.src = mealPic;
    picture.appendChild(pic);
    meal.appendChild(picture);

    
    return meal;
}

const menu = () => {
    //clear container
    createContainer.container.innerHTML = "";

    createTitle("Foretter");
    createContainer.container.appendChild(createMeal("forret", durumsBlade, "Durums' Blade 59,-"));
    createContainer.container.appendChild(createMeal("forret", durumsRing, "Durums' Ring 59,-"));
    
    
};