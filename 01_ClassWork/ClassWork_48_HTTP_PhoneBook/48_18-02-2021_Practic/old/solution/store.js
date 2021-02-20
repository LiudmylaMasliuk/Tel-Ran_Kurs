
/* users = {
    "john@mail.com": "123456",    -> {john@mail.com: 123456 ,
                                      jack@mail.com : 457568  }
    "jack@mail.com":"457568",

} */

/* users = [
   {email:'john@mail.com, password: 123456,}
   {email:'jack@mail.com, password:457568,}
    
] */

class Store{
    static login({email, password}){   //user{email:'john@mail.com, password: 123456,}
        const json = localStorage.getItem('users');
        if(json !== null){
            const users = JSON.parse(json);
            for(let key in users){
                if(key === email && users[key] === password){
                    localStorage.setItem('currentUser', email);
                     return true;
                }        
        }
    }  
        throw new Error('Wrong email or password');
    } 

    static registration({email, password}){
        const json = localStorage.getItem('users');
        let users = {};
        if(json !==null){
            users = JSON.parse(json);
            for(let key in users){
                if(key === email){
                    throw new Error(`Users with ${email} already exists!`);
                }
            }
        }
        users[email] = password;
        localStorage.setItem('users', JSON.stringify(users)); 
        localStorage.setItem('currentUser', email);
        return true;
    }

    static getCurrentUser(){
        return localStorage.getItem('currentUser');
    }

    static logout(){
        localStorage.removeItem('currentUser');
    }

    static addContact(email, contact){
        const json = localStorage.getItem(email); //[{name,},{name}]
        let contacts = [];
        if(json !== null){
            contacts = JSON.parse(json);
        }
        contacts[contacts.length] = contact;  // contacts.push(contact);
        localStorage.setItem(email, JSON.stringify(contacts));
        return true;      
        }
        

    static deleteContact(email, index){
        const json = localStorage.getItem(email);
        if(!json){
            throw new Error("Contact does nor exists");
        }
        const contacts = JSON.parse(json);
        if(contacts.length < index){
            throw new Error("Contact does nor exists");
        }
        contacts.splice(index,1);
        localStorage.setItem(email, JSON.stringify(contacts));
    }

    static getAllContacts(email){
        let json = localStorage.getItem(email);
        if(!json){
            return[];
        }

        return JSON.parse(json); 
    }

    static getContactByIndex(email, index){
        const contacts = this.getAllContacts(email);
        if(contacts.length ===0 || contacts.length < index){
            throw new Error('Contact does not exists');
        }
        return contacts[index];
    }


}
