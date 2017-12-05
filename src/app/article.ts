export class Article {
    public id = 0;
    public author: String = '';
    public date: number = Date.now();
    public title: String = '';
    public thumbnail: String = '';
    public body: String = '';

    /*constructor(id?: number, author?: String, date?: number, title?: String, thumbnail?: String, body?: String) {
        this.id = id || 0;
        this.author = author || '';
        this.date = date || Date.now();
        this.title = title || '';
        this.thumbnail = thumbnail || '';
        this.body = body || '';
    }*/
}
