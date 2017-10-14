import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name:string;
age:number;
email:string;
address:Address;
hobbies:string[];
hello:any;

  constructor() { }

  ngOnInit() {
    this.name="asdasd";
    this.age = 30;
    this.address = {
      street:'sztbka',
      city:'wro',
      state:'dolny slask'
    }
    this.hobbies = ['rower','lasert','koks'];
    this.hello = 'hello';

  }
  onClick(){
    this.name = "NOWE";
    this.hobbies.push('noje hobbi');
  }

  addHobby(hobby){

    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i=0; i < this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);
      }
    }
  }
  
}


interface Address{
  street:string,
  city:string,
  state:string
  
}