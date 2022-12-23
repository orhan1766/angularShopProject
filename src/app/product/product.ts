export class Product{
    private _id:number;
    private _name:string;
    private _price:number;
    private _categoryId:number;
    private _imageUrl:string;
    private _description:string;
    constructor(id:number,name:string,price:number,categoryId:number,imageUrl:string,description:string){
        this._id=id;
        this._name=name;
        this._price=price;
        this._categoryId=categoryId;
        this._imageUrl=imageUrl;
        this._description=description;
    }

    get id():number{
        return this._id;
    }
    set id(id:number) {
        this._id=id;
    }

    get name():string{
        return this._name;
    }
    set name(name:string) {
        this._name=name;
    }
    
    get price():number{
        return this._price;
    }
    set price(price:number) {
        this._price=price;
    }
    
    get categoryId():number{
        return this._categoryId;
    }
    set categoryId(categoryId:number) {
        this._categoryId=categoryId;
    }
    
    get imageUrl():string{
        return this._imageUrl;
    }
    set imageUrl(imageUrl:string) {
        this._imageUrl=imageUrl;
    }
    
    get description():string{
        return this._description;
    }
    set description(description:string) {
        this._description=description;
    }
}