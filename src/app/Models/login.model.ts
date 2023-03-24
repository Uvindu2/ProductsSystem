export interface ILogin {
    id?: string;
    name?:string;
    email?:string;
    roles?:String;
    token?:String;
  }
  
  export class Login implements ILogin {
    constructor(
      public id?: string,
      public name?:string,
      public email?:string,
      public roles?:String,
      public token?:String,


    ) {}
  }
  