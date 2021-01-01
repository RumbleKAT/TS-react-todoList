import todoListItem from '../Interfaces/todoListInterface';

module StorageService {
    export interface IStorageItem{
        key : string;
        value : any;
    }
    
    export class StorageItem{
        key : string;
        value : any;
        constructor(data : IStorageItem){
            this.key = data.key;
            this.value = data.value;
        }
    }
    
    export class StorageService{
        localStorageSupported : boolean;
    
        constructor(){
            this.localStorageSupported = typeof window['localStorage'] != "undefined" && window['localStorage'] != null;
        }
    
        //add value to storage
        add(key: string, item: string){
            if(this.localStorageSupported){
                localStorage.setItem(key,item);
            }
        }
    
        //get all values from storage (all items)
        getAllItems() : Array<StorageItem>{
            let list = new Array<StorageItem>();
            
            for(let i = 0;i<localStorage.length;i++){
                const key = localStorage.key(i);
                
                if(key != null){
                    const value = localStorage.getItem(key);
                    list.push(new StorageItem({
                        key : key,
                        value : value
                    }));   
                }
            }
        
            return list;
        }
    
        //get one item by key from storage
        get(key : string) : string{
            if(this.localStorageSupported){
                var item = localStorage.getItem(key);
                if(item != null) return item;
            }
            return "";
        }
    
        //remove value from storage
        remove(key : string){
            if(this.localStorageSupported){
                localStorage.removeItem(key);
            }
        }
    
        clear (){
            if(this.localStorageSupported){
                localStorage.clear();
            }
        }
    }

    export class RepositoryService{
        todoList = new Array<todoListItem>();
        storageService = new StorageService();

        constructor(){
            let tmpData = this.getDatas('todoList');

            if(tmpData != null){
                this.todoList = JSON.parse(tmpData);
            }
        }

        getDatas(param : string){
            return this.storageService.get(param);
        }        

        // //return specific type data
        // getData(param : string, type : string) : Array<todoListItem>{
            
        // }
    }
    
    
}
