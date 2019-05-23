import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  forma:FormGroup;  

  constructor( private router:Router ) {
    this.forma = new FormGroup({
      'login': new FormControl('Anderson'),
      'password': new FormControl()      
    })
  }

  getAccess(){
    console.log('Do it submit');
    console.log(this.forma.value);
    this.router.navigate(['/home']);    
  }


}
