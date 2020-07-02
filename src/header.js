// Creates the header
/*
<header>
    <h1>Matsu Sando</h1>
    <img src="./assets/logo.jpg" alt="">
    <div class="tabs">
        <a href="#" class="tab" id="tab0">Home</a>
        <a href="#" class="tab" id="tab1">Menu</a>
        <a href="#" class="tab" id="tab2">Contact</a>
    </div>
</header> 
*/

import { renderHome } from './home'
import { renderMenu } from './menu'


function renderHeader() {
    const content = document.querySelector('#content');
    const header = document.createElement('header');

    const title = document.createElement('h1');
    title.textContent = 'Matsu Sando'

    const logo = document.createElement('img');
    logo.src = "./assets/logo.jpg";
    logo.alt = "";

    const tabs = document.createElement('div');
    tabs.classList.add('tabs');

    const tabsText = ['Home', 'Menu', 'Contact'];
    tabsText.forEach(text => {
        let tab = document.createElement('a');

        tab.href = '#';
        tab.classList.add('tab');
        tab.id = 'tab' + tabsText.indexOf(text);
        tab.textContent = text;
        tab.addEventListener('click', handleTab);

        tabs.appendChild(tab);
    });
    
    header.appendChild(title);
    header.appendChild(logo);
    header.appendChild(tabs);
    content.appendChild(header);
}


// Event listener for the navbar
function handleTab(e) {
    const content = document.querySelector('#content');
    const tabContent = document.querySelector('.tabContent');
    if (tabContent) content.removeChild(tabContent)

    switch (e.target.textContent) {
        case 'Home':
            document.querySelector('#tab0').classList.add('active');
            document.querySelector('#tab1').classList.remove('active');
            document.querySelector('#tab2').classList.remove('active');

            renderHome();
            break;
        case 'Menu':
            document.querySelector('#tab1').classList.add('active');
            document.querySelector('#tab0').classList.remove('active');
            document.querySelector('#tab2').classList.remove('active');

            renderMenu();
            break;
        case 'Contact':
            document.querySelector('#tab2').classList.add('active');
            document.querySelector('#tab0').classList.remove('active');
            document.querySelector('#tab1').classList.remove('active');
            break;
        default:
            console.warn('Something went wrong.');
    }
}


export { renderHeader }