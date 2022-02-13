import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Login } from '../model/login';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loginObj : Login = {
    username: '',
    password: ''
  }

  constructor(private router:Router,
    public ngFireAuth: AngularFireAuth) {}


    async login(){

      try {
        
        const user = await this.ngFireAuth.signInWithEmailAndPassword(this.loginObj.username,this.loginObj.password);
        console.log(user);
        if (user.user.email) {
          this.router.navigate(['/app-home']);
        } else {
          alert('Login Failed');
        }
      } catch (error) {
        alert('Login Failed');
      }
    
      
  
    }

    singup(){
      this.router.navigate(['/login'])
    }

}
