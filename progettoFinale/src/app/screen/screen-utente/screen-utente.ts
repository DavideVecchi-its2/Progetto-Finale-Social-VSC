import { Component } from '@angular/core';
import { HeaderSocial } from "../../components/header-social/header-social";
import { Post } from "../../components/post/post";
import { Suggeriti } from "../../components/suggeriti/suggeriti";
import { Sidebar } from "../../components/sidebar/sidebar";

@Component({
  selector: 'app-screen-utente',
  standalone: true,
  imports: [HeaderSocial, Post, Suggeriti, Sidebar],
  templateUrl: './screen-utente.html',
  styleUrl: './screen-utente.css',
})
export class ScreenUtente {

}
