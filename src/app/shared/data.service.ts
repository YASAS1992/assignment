import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs :AngularFirestore) { }

  createUser(user:User){
    return this.afs.collection('/User').add(user);
  }
}
