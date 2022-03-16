import { moduleMetadata } from '@storybook/angular';
import { LoginPageComponent } from './login-page.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CommonModule } from '@angular/common';

export default {
  title: 'Form/Login',
  component: LoginPageComponent,
  decorators: [
    moduleMetadata({
      declarations: [LoginPageComponent],
      imports: [InputTextModule, ButtonModule, PasswordModule, FormsModule, ReactiveFormsModule, ToggleButtonModule, CommonModule],
    }),
  ],
};

export const Login = () => ({
  component: LoginPageComponent,
  props: {},
});
