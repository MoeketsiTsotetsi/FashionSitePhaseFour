export class User {
    _id :number | undefined;
    name: String;
    email:String;
    type:String;
    username:String;
    password:String;
    constructor(){
        
        this.name = "";
        this.email = "";
        this.username = "";
        this.type = "";
        this.password = ""; 
    }

}
