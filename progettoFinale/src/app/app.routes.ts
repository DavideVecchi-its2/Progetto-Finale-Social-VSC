import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Component } from '@angular/core';
import { Login } from './login/login';


export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: Home},
    {path: 'login', component:Login}
];
