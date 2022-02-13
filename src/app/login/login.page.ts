import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from '../shared/data.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userObj : User = {
    id: '',
    name: '',
    nic: '',
    phone: '',
    email: '',
    password: ''
  };


  constructor(private router:Router,
    public ngFireAuth: AngularFireAuth,
    private data:DataService) { }

  ngOnInit() {
  }

  async register(){

    try {
      
      const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.userObj.email,this.userObj.password);
      console.log(user);

      if (user.user.email) {
        this.userObj.id = this.userObj.phone;
        const r = await this.data.createUser(this.userObj);
        console.log(r);
        this.router.navigate(['/home'])
      } else {
        alert('Registration Failed');
      }

    } catch (error) {
      alert('Registration Failed');
    }

  }

  login(){
    this.router.navigate(['/home'])
  }

}
