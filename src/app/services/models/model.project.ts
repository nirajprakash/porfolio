export class ModelProject{
    public id: number;
    public name: string;
    public info: string;
    public detail: string[];
    public year: string;
    public link: string;
    public tab: string;
    
    constructor( id: number,
    name: string,
    info: string,
    detail: string[],
    year: string,
    link: string,
    tab: string) {
         this.id = id;
         this.name = name;
         this.info = info;
         this.detail = detail;
         this.year = year;
         this.link = link;
         this.tab = tab;
         // code...
    }

}