import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Component } from '@angular/core';
import { Login } from './login/login';
import { Register } from './register/register';
import { Balto } from './balto/balto';


export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: Home},
    {path: 'login', component:Login},
    {path: 'register', component:Register},
    {path: 'balto', component:Balto}
];
