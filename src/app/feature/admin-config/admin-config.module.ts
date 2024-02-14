import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminConfigRoutingModule } from './admin-config-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/components/layout/header/header.component';
import { SidenavComponent } from './dashboard/components/layout/sidenav/sidenav.component';
import { AnalyticsComponent } from './dashboard/components/pages/analytics/analytics.component';
import { DocumentsComponent } from './dashboard/components/pages/documents/documents.component';
import { WalletsComponent } from './dashboard/components/pages/wallets/wallets.component';
import { SettingsComponent } from './dashboard/components/pages/settings/settings.component';
import { LoginComponent } from './dashboard/components/pages/login/login.component';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SidenavComponent, AnalyticsComponent, DocumentsComponent, WalletsComponent, SettingsComponent, LoginComponent],
  imports: [CommonModule, AdminConfigRoutingModule],
})
export class AdminConfigModule {}
