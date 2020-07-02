/*
<div class="tabContent" id="contentTab0">
    <div class="welcome">
        <img src="./assets/transparent.png" alt="">
        <h1>traditional japanese pork cutlet sandwich</h1>
    </div>

    <div class="intro">
        <h1>who are we?</h1>
        <p>
            <strong>Matsu Sando</strong>
            is a small restaurant focused in preparing and delivering the best katsu sando in brazil. Handmade and full of flavor, this traditional japanese sandwich is beloved by all.
            <strong>Call us, taste it!</strong>
        </p>

        <h1>what is it?</h1>
        <p>Katsu Sando is Japanese style
            <strong>fried pork sandwich</strong>
            and originated in Japan in the 19th century. Pork cutlet deep fried with panko bread crumbs then covered with sweet and fruity
            <strong>Tonkatsu sauce</strong>
            and ketchup mixture. Sandwiched with slices of fluffy and pillowy Japanese milk bread called Shokupan with thinly shredded cabbage.</p>

        <h1>where can i get it?</h1>
        <p>Well, mind you that this website is a programming exercise from
            <a href="https://github.com/pklepa">@pklepa</a>
            and is not directly affiliated to Matsu Sando. But, it is a real place! If you happen to be around
            <strong>Londrina - Brasil</strong>, definitely check them out
            <a href="https://www.instagram.com/matsu.sando/">@matsu.sando</a>
        </p>
    </div>

</div>
*/

function renderHome() {
    const content = document.querySelector('#content');

    const tabContent = document.createElement('div');
    tabContent.classList.add('tabContent');
    tabContent.id = 'contentTab0';


    const tabHTML = `
        <div class="welcome">
            <img src="./assets/katsu_prato.png" alt="">
            <h1>traditional japanese pork cutlet sandwich</h1>
        </div>

        <div class="intro">
            <h1>who are we?</h1>
            <p>
                <strong>Matsu Sando</strong>
                is a small restaurant focused in preparing and delivering the best katsu sando in brazil. Handmade and full of flavor, this traditional japanese sandwich is beloved by all.
                <strong>Call us, taste it!</strong>
            </p>

            <h1>what is it?</h1>
            <p>Katsu Sando is Japanese style
                <strong>fried pork sandwich</strong>
                and originated in Japan in the 19th century. Pork cutlet deep fried with panko bread crumbs then covered with sweet and fruity
                <strong>Tonkatsu sauce</strong>
                and ketchup mixture. Sandwiched with slices of fluffy and pillowy Japanese milk bread called Shokupan with thinly shredded cabbage.</p>

            <h1>where can i get it?</h1>
            <p>Well, mind you that this website is a programming exercise from
                <a href="https://github.com/pklepa">@pklepa</a>
                and is not directly affiliated to Matsu Sando. But, it is a real place! If you happen to be around
                <strong>Londrina - Brasil</strong>, definitely check them out
                <a href="https://www.instagram.com/matsu.sando/">@matsu.sando</a>
            </p>
        </div>
    `;

    tabContent.insertAdjacentHTML('beforeend', tabHTML);
    content.appendChild(tabContent);
}


export { renderHome }
