import { Component } from '@angular/core';
import { SidebarItem } from '../sidebar-item/sidebar-item';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarItem],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  sidebarItems = [
  { icon: 'pi pi-home', label: 'Home', route: '/home' },
  { icon: 'pi pi-search', label: 'Cerca Utenti', route: '/cerca-utenti' },
  { icon: 'pi pi-compass', label: 'Esplora', route: '/esplora' },
  { icon: 'pi pi-send', label: 'Chat', route: '/chat' },
  { icon: 'pi pi-user', label: 'Profilo', route: '/profilo' },

  
];

}
