import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  imports: [],
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.css',
})
export class SidebarItem {
  @Input() icon!: string; //pipi
  @Input() label!: string; //home
  @Input() route!: string; //rotta

  constructor(private router: Router){}

  goTo(){
     this.router.navigate([this.route]);
  }
}
