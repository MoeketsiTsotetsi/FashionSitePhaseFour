export class Product {
    _id: number;
    name: string;
    price :number;
    quantity: number;
    image: string;
    created_at: string;
    constructor() {
        this._id = 0;
        this.price = 0;
        this.name = "";
        this.quantity = 0;
        this.image = "";
        this.created_at = ""
    }
}
