
export class Game{
    public _id: number;
    public title: string;
    public description: string;
    public price: number;
    public img: string;
    public edit: boolean;
    public index: number;

    constructor(id, title, description, price, img, edit, index) {
        this._id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.img = img;
        this.edit = edit;
        this.index = index;
    }
}

