const CONTACTS_KEY = 'CONTACTS';
class Store{
    static save(contact){
        return this.getAll().then(array =>{
            return new Promise((resolve) => {
                setTimeout(() => {
                    array.push(contact);
                    this.updateLocalStorage(array);
                    resolve();
                },500);
            });
        });
    }

    static remove(index){
        return this.getAll().then(array => {
            return new Promise(resolve => {
                setTimeout(() =>{
                    array.splice(index,1);
                    if(array.length === 0){
                        localStorage.removeItem(CONTACTS_KEY);
                    }else{
                        this.updateLocalStorage(array);
                    }
                    resolve();

                }, 500);
            });
        });
    }

    static getAll(){
        return new Promise((resolve)=>{
         setTimeout(()=>{
            let str = localStorage.getItem(CONTACTS_KEY);
            if(!str){
                resolve([]);
            }else{
            const contacts = str.split('&');
            resolve(contacts.map(Contact.of));
            }
         }, 2500);        
        })
        
    }

    static updateLocalStorage(contacts){
        const str = contacts.map((cnt)=>cnt.serialization()).join('&');
        localStorage.setItem(CONTACTS_KEY, str);
    }   
}

//CONTACTS : John,Doe,1235,john@mail.com&John,Doe,1235,john@mail.com
//[{John...},{John...}]