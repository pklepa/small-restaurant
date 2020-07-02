function renderMenu() {
    const content = document.querySelector('#content');

    const tabContent = document.createElement('div');
    tabContent.classList.add('tabContent');
    tabContent.id = 'contentTab1';

    const tabHTML = `
        <div class="menu-item">
            <div class="item-header" id="katsu">
                <h2 class="item-name"><span>arrow_drop_up</span>Katsu Sando</h2>
                <div class="item-price">
                    <h3>r$</h3>
                    <h4>18</h4>
                </div>
            </div>
            <img class="menu-img img-katsu" src="./assets/katsusando.jpg" alt="">
            <div class="item-description">
                <p>Handmade hokkaido bread, tonkatsu sauce,
                    <strong>pork cutlet (130g) deep fried w/ panko bread crumbs,</strong>
                    kewpie mayonnaise and pickled cucumber.</p>
            </div>
        </div>
        <div class="menu-item">
            <div class="item-header" id="karaage">
                <h2 class="item-name"><span>arrow_drop_down</span>Karaage Sando</h2>
                <div class="item-price">
                    <h3>r$</h3>
                    <h4>16</h4>
                </div>
            </div>
            <img class="menu-img img-karaage hide" src="./assets/karaage-sando.png" alt="">
            <div class="item-description">
                <p>Handmade hokkaido bread, tonkatsu sauce,
                    <strong>chicken upperleg (130g) deep fried w/ panko bread crumbs,</strong>
                    kewpie mayonnaise and organic lettuce.</p>
            </div>
        </div>
        <div class="menu-item">
            <div class="item-header" id="kare">
                <h2 class="item-name"><span>arrow_drop_down</span>Kare-Pan</h2>
                <div class="item-price">
                    <h3>r$</h3>
                    <h4>16</h4>
                </div>
            </div>
            <img class="menu-img img-kare hide" src="./assets/karepan.jpg" alt="">
            <div class="item-description">
                <p>Deep fried Hokkaido bread stuffed with
                    japanese curry, vegetables and mushrooms.
                    <strong>(4 pieces - approximately 200g)</strong>
                </p>
            </div>
        </div>
        <div class="menu-extra">
            <h2>Mayonnaise / Tonkatsu Sauce</h2>
            <h2>r$ 2,00</h2>
        </div>
    `;

    tabContent.insertAdjacentHTML('beforeend', tabHTML);
    content.appendChild(tabContent);

    const headers = document.querySelectorAll('.item-name');
    headers.forEach(header => {
        header.addEventListener('click', toggleImg);
    });
}

function toggleImg(e){
    const itemHeader = e.target.tagName == 'SPAN' ? e.target.parentNode.parentNode : e.target.parentNode;
    const thisImg = document.querySelector(`.img-${itemHeader.id}`);

    thisImg.classList.toggle('hide');


    // This is a dumb way to get the <span> element, but it works so here it is
    const span = itemHeader.children[0].children[0];
    span.textContent = span.textContent == 'arrow_drop_down' ? 'arrow_drop_up' : 'arrow_drop_down';
}


export { renderMenu }