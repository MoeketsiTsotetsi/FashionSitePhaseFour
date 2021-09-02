export class Product {
    _id: number | undefined;
    name: string;
    price :number;
    quantity: number;
    image: string;
    created_at: string;
    constructor() {
    
        this.price = 0;
        this.name = "";
        this.quantity = 0;
        this.image = "";
        this.created_at = ""
    }
}
