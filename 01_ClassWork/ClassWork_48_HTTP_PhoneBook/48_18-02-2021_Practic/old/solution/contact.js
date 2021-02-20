class Contact{
    constructor(name, phoneNumber, email, address, description){
        this.name = name;
        this.phone = phoneNumber;
        this.email = email;
        this.address = address;
        this.description = description;
    }

    /* serialisation() {
        return JSON.stringify(this);  //
    } */

    /* static of(str){
        const contact = JSON.parse(str);
        return new Contact(contact.name, contact.phoneNumber, contact.email, contact.address, contact.description);
    } */

    /* renderContactView(){
        return `
        <h2>${this.name}</h2>
           <div class="contact-view-row">
             <img src="../img/technology.png" alt="" />
             <h3>${this.phone}</h3>
           </div>
           <div class="contact-view-row">
             <img src="../img/multimedia.png" alt="" />
             <h3>${this.email}</h3>
           </div>
           <div class="contact-view-row">
             <img src="../img/buildings.png" alt="" />
             <h3 ">${this.address}</h3>
           </div>
           <p>${this.desc}</p>
           
        `;

    }
    renderRowView(index){

        return `
        <li class = 'list-item' data-index = ${index}>
            <h2 class = 'title'>${this.name}</h2>
            <h3 class = 'sub-title'>${this.phone}</h3>
            <div class = 'delete'></div>
        </li>`;   
    } */
 
}

