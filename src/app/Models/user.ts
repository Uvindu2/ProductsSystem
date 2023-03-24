export interface IUser {
    id?: string;
    name?:string;
    email?:string;
    password?:string;
    email_verified_at?:string;
    roles?:String;
    created_at?:Date;
    updated_at?:Date;
  }
  
  export class User implements IUser {
    constructor(
      public id?: string,
      public name?:string,
      public email?:string,
      public password?:string,
      public email_verified_at?:string,
      public roles?:String,
      public created_at?:Date,
      public updated_at?:Date,

    ) {}
  }
  