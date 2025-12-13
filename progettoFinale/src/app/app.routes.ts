import { Routes } from '@angular/router';
import { Home } from './screen/home/home';
import { Component } from '@angular/core';
import { Login } from './screen/login/login';
import { Register } from './screen/register/register';
import { Balto } from './screen/balto/balto';
import { ScreenUtente } from './screen/screen-utente/screen-utente';
import { Header } from 'primeng/api';
import { HeaderSocial } from './components/header-social/header-social';


export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: Home},
    {path: 'login', component:Login},
    {path: 'register', component:Register},
    {path: 'balto', component:Balto},
    {path: 'screen', component:ScreenUtente},
        {path: 'header', component:HeaderSocial}
];
