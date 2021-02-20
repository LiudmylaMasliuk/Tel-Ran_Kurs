class Contact{
    constructor(name, phoneNumber, email, address, description, parentSelector = '#root'){
        this.name = name;
        this.phone = phoneNumber;
        this.email = email;
        this.address = address;
        this.description = description;
        this.parent = document.querySelector(parentSelector);
    }

    renderContactView(){
        const contactView = this.parent.querySelector('.contact-view');
       contactView.innerHTML = `
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
          <div class="close-btn">×</div>
       `;
    }

    renderLiView(index){
        return`
        <li class = 'list-item' data-index = ${index}>
            <h2 class = 'title'>${this.name}</h2>
            <h3 class = 'sub-title'>${this.phone}</h3>
            <div class = 'delete'></div>
        </li>`
    }
}

class ContactsList{
    constructor(parentSelector, contacts=[]){
        this.list = contacts;
        this.parent = parentSelector;
    }

    addContact(contact){
        const tmp = this.list.find(function(c){  
            return c.name === contact.name;
        });
        if(!tmp){
            this.list.push(contact);
            return true;
        }
        return false;
    }

    deleteContact(index){
        this.list.splice(index,1);
    }

    renderContactsList(){
        const root = document.querySelector(this.parent);
        root.className = 'contacts';
        root.innerHTML = '';
        root.innerHTML += '<div class = "contact-view">No selected contact</div>';
        const contactsListView = document.createElement('ul');
        contactsListView.className = 'list';
        
        const temp = this;

        contactsListView.onclick = function(e){
            let li = e.target;
            if(li.classList.contains('delete')){
                 li.classList.remove('item-active');
                 temp.deleteContact(li.dataset.index);
                 temp.renderContactsList();
            }else{
                if(li.tagName !== 'LI'){
                    li = e.target.parentNode;
                    search.value = '';
                }

                root.querySelectorAll('li').forEach((item)=>item.classList.remove('item-active'));
                const contact = temp.list[li.dataset.index];
                contact.renderContactView();
                li.classList.add('item-active');
            }
        }
        temp.list.forEach(function(item, index){
            contactsListView.innerHTML += item.renderLiView(index);
        });
        root.prepend(contactsListView);
        
    }

}