import { Injectable } from '@angular/core';

import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, user } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false

  constructor(public auth: Auth,
    public firestore: Firestore, private router: Router) { }

  login(email, password) {
    signInWithEmailAndPassword(this.auth, email, password).then((response) => {
      // alert('Loggin successfully');
      this.loggedIn = true
      this.router.navigate(['/posts'])
      console.log('login');

    }).catch(err => {
      alert(err)
    })
  }

  // createUser(email, password) {
  //   createUserWithEmailAndPassword(this.auth, email, password).then((response) => {
  //     alert('Loggin successfully');
  //   }).catch(err => {
  //     alert(err)
  //   })
  // }
}
