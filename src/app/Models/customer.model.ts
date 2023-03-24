import { GenderType } from "./cus-gender";

export interface ICustomer {
    id?: string;
    firstName?:string;
    lastName?:string;
    address?:string;
    telephone?:string;
    postalCode?:string;
    nic?:string;
    email?:string;
    gender?:GenderType;
  }
  
  export class Customer implements ICustomer {
    constructor(
      public id?: string,
      public firstName?:string,
      public lastName?:string,
      public address?:string,
      public telephone?:string,
      public postalCode?:string,
      public nic?:string,
      public email?:string,
      public gender?:GenderType

    ) {}
  }
  