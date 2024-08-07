import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './user.model'
import { User_repository } from "./repository.model"
import { FormsModule, NgForm } from '@angular/forms'; // to work with Angular directive *ng

@Component({
  selector: 'user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  model:User_repository = new User_repository()
  newuser:User = new User()
  parsedJson:any
  parsedJsonName:any
  parsedJsonEmail:any
  userCounter:number = this.model.getuser().length
  
  get jsonUser() {
    return JSON.stringify(this.newuser)
  }

  adduser(u:User){
    console.log("New user is " + this.jsonUser)
    this.userCounter += 1
    this.model.adduser(new User(this.userCounter, this.parsedJsonName, this.parsedJsonEmail))
  }

  displaylog(model:any) {
    console.log("New User Model: ", model)
  }

  // formSubmit() property to set the validation rule
  formSubmit:boolean = false

  // submitForm() method to handle thre form data on submission
  submitForm(form:NgForm) {
    this.formSubmit = true
    if (form.valid ) {
      this.parsedJson = JSON.parse(JSON.stringify(this.newuser))
      this.parsedJsonName = this.parsedJson.name
      this.parsedJsonEmail = this.parsedJson.email
      this.adduser(this.newuser)

      this.newuser = new User()
      form.reset()
      this.formSubmit = false
    }
  }
}
