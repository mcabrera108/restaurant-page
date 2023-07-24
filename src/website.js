//Module that renders deafault Webpage Content
//Header, Default Webpage Content (Home.js), and Footer
import { displayHome } from "./home";
import {displayMenu} from "./menu";
import { displayContact } from "./contact";

let indexLoad = 0;

const loadHeader = () => {

    const header = document.createElement('div');
    header.id = "header";

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-title');
    restaurantName.textContent = 'Su-shi!';

    const headerNav = document.createElement('nav');
    headerNav.id = "navigation-bar";

    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');

    homeButton.classList.add('nav-button');
    menuButton.classList.add('nav-button');
    contactButton.classList.add('nav-button');

    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    contactButton.textContent = "Contact";

    homeButton.addEventListener('click', function() {
        indexLoad = 0;
        removeContent();
        loadPage();
    });
    menuButton.addEventListener('click', function() {
        indexLoad = 1;
        removeContent();
        loadPage();
    });
    contactButton.addEventListener('click', function() {
        indexLoad = 2;
        removeContent();
        loadPage();
    });

    headerNav.appendChild(homeButton);
    headerNav.appendChild(menuButton);
    headerNav.appendChild(contactButton);

    

    header.appendChild(restaurantName);
    header.appendChild(headerNav);


    return header;

}
const removeContent = () => {
    const content = document.getElementById('content');
    while(content.firstChild)
    {
        content.removeChild(content.firstChild);
    }

}
const loadMain = (pageIndex = 0) => { //Loads Main Section Page with associated Index and returns value to be appended into content div
    if(pageIndex === 0)
    {
        return displayHome();
    }
    else if(pageIndex === 1)
    {
        return displayMenu();
    }
    else if(pageIndex === 2)
    {
        return displayContact();
    }
}
const loadFooter = () => {
    const footer = document.createElement('div');
    footer.id = "footer";
    footer.textContent = "Copyright@mcabrera.github.io"

    return footer;
}

const loadPage = () => {
    const content = document.getElementById('content');

    content.appendChild(loadHeader());
    content.appendChild(loadMain(indexLoad));
    content.appendChild(loadFooter());
    
}
export {loadPage};