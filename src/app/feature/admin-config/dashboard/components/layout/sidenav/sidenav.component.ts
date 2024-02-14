import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  sidebarMenus: Array<any> = new Array<any>(
    {
      name: 'Dashboard',
      icon: 'dashboard',
      url: '/admin/dashboard',
    },
    {
      name: 'Documents',
      icon: 'photo',
      url: '/admin/dashboard/documents',
    },
    {
      name: 'Analytics',
      icon: 'photo',
      url: '/admin/dashboard/analytics',
    },
    {
      name: 'Wallets',
      icon: 'photo',
      url: '/admin/dashboard/wallets',
    },
    {
      name: 'Settings',
      icon: 'settings',
      url: '/admin/dashboard/settings',
    }
  );
}
