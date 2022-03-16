import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { ButtonModule } from 'primeng/button';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { InputtextComponent } from './components/inputtext/inputtext.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ChartComponent } from './components/chart/chart.component';
import { ColorComponent } from './components/color/color.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ButtonComponent,
    ButtonsComponent,
    InputtextComponent,
    CheckboxComponent,
    RadioButtonComponent,
    ChartComponent,
    ColorComponent,
    LoginPageComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    ChartModule,
    CheckboxModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
