import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
    selector:'sandbox',
    template:`<h1>Hello {{ name }}</h1>`
})

export class SandboxComponent{
   customer:Customer
   customers:Customer[];

   constructor(){
       this.customer = {
           id:1,
           name:'John Doe',
           email:'john@gmail.com'
       }

       this.customers = [
           {
              id:1,
              name:'John Doe',
              email:'john@gmail.com'
           },
           {
              id:2,
              name:'Joe Bob',
              email:'joe@gmail.com'
           },
           {
              id:3,
              name:'Arthur Lee',
              email:'arthur@gmail.com'
           },
           {
              id:4,
              name:'Max Duncan',
              email:'max@gmail.com'
           }
       ];
   }
        
}

