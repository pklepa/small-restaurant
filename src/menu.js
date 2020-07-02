function renderMenu() {
    const content = document.querySelector('#content');

    const tabContent = document.createElement('div');
    tabContent.classList.add('tabContent');
    tabContent.id = 'contentTab1';

    const tabHTML = `
        <div class="menu-item">
            <div class="item-header" id="katsu">
                <h2 class="item-name">Katsu Sando</h2>
                <div class="item-price">
                    <h3>r$</h3>
                    <h4>18</h4>
                </div>
            </div>
            <div class="item-description">
                <p>Handmade hokkaido bread, tonkatsu sauce,
                    <strong>pork cutlet (130g) deep fried w/ panko bread crumbs,</strong>
                    kewpie mayonnaise and pickled cucumber.</p>
            </div>
        </div>
        <div class="menu-item">
            <div class="item-header" id="karaage">
                <h2 class="item-name">Karaage Sando</h2>
                <div class="item-price">
                    <h3>r$</h3>
                    <h4>16</h4>
                </div>
            </div>
            <div class="item-description">
                <p>Handmade hokkaido bread, tonkatsu sauce,
                    <strong>chicken upperleg (130g) deep fried w/ panko bread crumbs,</strong>
                    kewpie mayonnaise and organic lettuce.</p>
            </div>
        </div>
        <div class="menu-item">
            <div class="item-header" id="kare">
                <h2 class="item-name">Kare-Pan</h2>
                <div class="item-price">
                    <h3>r$</h3>
                    <h4>16</h4>
                </div>
            </div>
            <div class="item-description">
                <p>Deep fried Hokkaido bread stuffed with
                    japanese curry, vegetables and mushrooms.
                    <strong>(4 pieces - approximately 200g)</strong>
                </p>
            </div>
        </div>
        <div class="menu-extra">
            <h2>Maionese / Molho Tonkatsu</h2>
            <h2>r$ 2,00</h2>
        </div>
    `;

    tabContent.insertAdjacentHTML('beforeend', tabHTML);
    content.appendChild(tabContent);
}

export { renderMenu }