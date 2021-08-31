export class User {
    _id :number;
    name: String;
    email:String;
    type:String;
    username:String;
    password:String;
    created_at : String;
    constructor(){
        this._id = 0;
        this.name = "";
        this.email = "";
        this.username = "";
        this.type = "";
        this.password = "";
        this.created_at = "";
    }

}
