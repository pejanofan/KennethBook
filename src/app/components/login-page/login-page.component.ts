import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  showpasswordIcon: Boolean = false;
  inputtype = 'password';
  passwordIcon: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.inputtype = 'password';
  }

  passwordChange(password: string) {
    if (password.length > 0) {
      this.showpasswordIcon = true;
    } else if (password.length === 0) {
      this.showpasswordIcon = false;
      this.passwordIcon = false;
      this.inputtype = 'password';
    }
  }

  handleChange(e: any) {
    const isChecked = e.checked;
    if (isChecked) {
      this.inputtype = 'text';
    } else {
      this.inputtype = 'password';
    }
  }

}
