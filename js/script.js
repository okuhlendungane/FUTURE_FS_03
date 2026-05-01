class Header extends HTMLElement {
    connectedCallback() {
        const homeLink= this.getAttribute("homeLink")
        const servicesLink= this.getAttribute("servicesLink")
        const aboutLink= this.getAttribute("aboutLink")
        const contactLink= this.getAttribute("contactLink")

        this.innerHTML = `
            <nav>
                <ul>
                    <li><a href=${homeLink}>Home</a></li>
                    <li><a href=${servicesLink}>Services</a></li>
                    <li><a href=${aboutLink}>About</a></li>
                    <li><a href=${contactLink}>Contact</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('main-header', Header);

//CARD section
class Card extends HTMLElement {
    connectedCallback() {
        const imgLink= this.getAttribute("imgLink")
        const itemName = this.getAttribute("itemName")

        this.innerHTML = `
            <div class="card-container">
                <div class="card-img">
                    <img width="300" height="500" src="${imgLink}" alt="${itemName}">
                </div>
                <div class="card-content">
                    <p>${itemName}</p>
                </div>
            </div>
           
        `;
    }
}

customElements.define('service-card', Card);


class Contact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer-container">
            <div class="footer-content">
                <h3>Gambu-Line Hiring Services.</h3>
                <p>Delivering in and around Mthatha</p>
                <p> EMAIL ME <br> mzolisindungane@gmail.com</p>
                <p>CALL ME <br>0833930574</p>
            </div>
        </div>
        `;
    }
}

customElements.define('main-footer', Contact);

class Card2 extends HTMLElement {
    connectedCallback() {
        const imgLink= this.getAttribute("imgLink")
        const itemName = this.getAttribute("itemName")
        const Feature_1 = this.getAttribute("Feature_1")
        const Feature_2 = this.getAttribute("Feature_2")
        const Feature_3 = this.getAttribute("Feature_3")
        const Feature_4 = this.getAttribute("Feature_4")

        this.innerHTML = `
            <div class="card-container-2">
               <h2>${itemName}</h2>
                <div class="card-img">
                    <img width="500" height="350" src="${imgLink}" alt="${itemName}">
                </div>
                <div class="card-content-2">
                    <ul>
                        <li>${Feature_1}</li>
                        <li>${Feature_2}</li>
                        <li>${Feature_3}</li>
                        <li>${Feature_4}</li>
                    </ul>
                    
                </div>
            </div>
           
        `;
    }
}

customElements.define('service-card-2', Card2);