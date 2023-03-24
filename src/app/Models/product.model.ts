export interface IProduct{
    id?: string;
    productName?:string;
    prodctCategory?:string;
    quantity?:Number;
    unitPrice?:number;
    description?:string;
    model?:string;
    colour?:string;
    imageUrl?:string;
    cartStatus?:boolean;

}

export class Product implements IProduct {
    constructor(
      public id?: string,
      public productName?:string,
      public prodctCategory?:string,
      public quantity?:Number,
      public unitPrice?:number,
      public description?:string,
      public model?:string,
      public colour?:string,
      public imageUrl?:string,
      public cartStatus?:boolean,


    ) {}
}