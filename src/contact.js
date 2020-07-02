function renderContact() {
    const content = document.querySelector('#content');

    const tabContent = document.createElement('div');
    tabContent.classList.add('tabContent');
    tabContent.id = 'contentTab2';

    let tabHTML = `
           <div class="text-container">
             <h1>Delivery and pickup<br>
               <strong>only on saturdays</strong><br>
               from 7 PM to 9 PM</h1>
           </div>

           <div class="text-container contact-info">
             <h1>
               Place your order via<br>
               <em>Whatsapp</em><br>
               <a href="#">+55 (43) 91234-5678</a><br>
               <em>or Instagram<br></em>
               <a href="https://www.instagram.com/matsu.sando/">@matsu.sando</a>
               </h1>
           </div>

           <div class="text-container">
             <h1>Order placing from<br>
               <strong>tuesday 'til saturday 3 PM</strong>
             </h1>
           </div>

           <img src="./assets/logo_horizontal.png" alt="Matsu Sando">
    `;

    tabContent.insertAdjacentHTML('beforeend', tabHTML);
    content.appendChild(tabContent);

}

export { renderContact }