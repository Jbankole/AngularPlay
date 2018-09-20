export class Video {
    id:number;
    title:string;
    videoCode:string;
    desc:string;
    embed:string;


    constructor(id:number,title:string,videoCode:string,desc:string, embed:string){
        this.id = id;
        this.title = title;
        this.videoCode = videoCode;
        this.desc = desc;
        this.embed = embed;
    }
}