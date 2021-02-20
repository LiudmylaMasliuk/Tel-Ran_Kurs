
/* 
users = {
    "john@mail.com": "1234",
    "jack@mail.com": "5678",
} 

const str = JSON.stringify(users); 
// --> {"john@mail.com": "1234","jack@mail.com": "5678"}

const obj = JSON.parse(str); 
// --> {
    "john@mail.com": "1234",
    "jack@mail.com": "5678",
} 
*/

class Store{
    static login({email,password}){ 
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

    static registration({email,password}){
        const json = localStorage.getItem('users');
        let users = {};
        if(json !== null){
            users = JSON.parse(json);
            for( let key in users){
                if(key === email){
                    throw new Error(`User with the email ${email} already exists.`);
                }
            }
        }
        users[email] = password; // create new key and put into it password
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', email);
        return true;
    }

    static getCurrentUser(){
        return localStorage.getItem('currentUser');
    }

    static removeCurrentUser(){
        localStorage.removeItem('currentUser');
    }

    static addContact(email,contact){
        const json = localStorage.getItem(email); 
        let contacts = [];
        if(json !== null){
            contacts = JSON.parse(json); // --> [{},{}]
            let foundName = contacts.find(object => object.name === contact.name);
            if(!foundName){
                contacts[contacts.length] = contact; // --> [{},{}]
                // contacts.push(contact);
                localStorage.setItem(email, JSON.stringify(contacts));
                return true;
            }else{
                throw new Error(`Contact ${contact.name} already exists.`);
            }
        } 
    }
        

    static deleteContact(email,index){
        const json = localStorage.getItem(email);
        if(!json){
            throw new Error('Contact doesn`t exist.');
        }
        const contacts = JSON.parse(json);
        if(contacts.length < index){
            throw new Error('Contact doesn`t exist.');
        }
        contacts.splice(index,1);
        localStorage.setItem(email, JSON.stringify(contacts)); 
        // --> "[{},{},{}]"
        
    }

    static getAllContacts(email){
        let json = localStorage.getItem(email);
        if(!json){
            return [];
        }
        return JSON.parse(json); // --> [{},{},{}]
    }

    static getContactByIndex(email,index){
        const contacts = this.getAllContacts(email);
        if(contacts.length === null || contacts.length < index){
            throw new Error('Contact doesn`t exist.');
        }
        return contacts[index];
    }

 

}
