//no decorators like @Model are needed- recipe model can be created as a simple class 
export class Recipe{
    public name: string;
    public description: string;
    public imagePath:string; //url
    constructor(name:String, description:string,imagePath:string){
        this.name=name;
        this.description=description;
        this.imagePath=imagePath;

    }
}