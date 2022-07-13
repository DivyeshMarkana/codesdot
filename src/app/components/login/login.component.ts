import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  isLoggin: boolean
  constructor(private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
  }

  login_form = new FormGroup({
    email: new FormControl('Mac@delight.co', [Validators.required, Validators.email]),
    password: new FormControl('qwerty007', Validators.required),
    TaC: new FormControl(true, Validators.required)
  })

  logIn() {
    let email = this.login_form.value.email
    let password = this.login_form.value.password

    this.auth.login(email, password)
  }

}
