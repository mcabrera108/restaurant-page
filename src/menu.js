const menuItems = () => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    const ramenContainer = document.createElement('img');
    ramenContainer.classList.add('ramen-menu-item');
    const ramen2Container = document.createElement('img');
    ramen2Container.classList.add('restaurant-menu-item');

    const menu = [
        {
            itemName: "Tonkotsu Ramen",
            itemPrice: 12.99,
            itemDescription: "Ramen served in hot broth",
            itemImage: ramenContainer
            
        },
        {
            itemName: "Dumpling",
            itemPrice: 8.99,
            itemDescription: "Dumplings come in Steamed or Fried",
            itemImage: ramen2Container
        },
        {
            itemName: "Sushi Roll",
            itemPrice: 10.99,
            itemDescription: "6 sushi rolls filled with salmon, avocado, and wrapped in seaweed and rice",
            itemImage: ramen2Container
        },
        {
            itemName: "Onigiri",
            itemPrice: 12.99,
            itemDescription: "3 Onigiri wrapped in Seaweeed and stuffed with your choice of filling",
            itemImage: ramen2Container
        }
    ];

    for(let i = 0; i < 4; i++)
    {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        const menuItemName = document.createElement('h2');
        menuItemName.classList.add('menu-card-description');
        menuItemName.textContent = menu[i].itemName + " " + menu[i].itemPrice;

        const menuItemDescription = document.createElement('div');
        menuItemDescription.classList.add('menu-card-description');
        menuItemDescription.textContent = menu[i].itemDescription;

        menuCard.appendChild(menuItemName);
        menuCard.appendChild(menuItemImage);
        menuCard.appendChild(menuItemDescription);
        
        menuContainer.appendChild(menuCard);
    }



    return menuContainer;
}

const displayMenu = () => {

    const menu = document.createElement('div');
    menu.classList.add('menu-page');
    menu.appendChild(menuItems());

    return menu;
}
export {displayMenu};