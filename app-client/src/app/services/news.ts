export class News {
    public _id: number;
    public title: string;
    public description: string;
    public date: string;
    public content: string;
    public img: string;

    constructor(id, title, description, date, content, img) {
        this._id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.content = content;
        this.img = img;
    }
}