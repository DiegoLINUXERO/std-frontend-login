import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StdHomeSidebarModule } from './commons/components/std-home-sidebar/std-home-sidebar.module';
import { StdHomeHeaderModule } from './commons/components/std-home-header/std-home-header.module';
import { StdHomeFooterModule } from './commons/components/std-home-footer/std-home-footer.module';
import { StdHomeSecurityModule } from './commons/components/std-home-security/std-home-security.module';

import { HomeComponent } from './home.component';
import { ROUTES } from './home.routes';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    StdHomeSidebarModule,
    StdHomeHeaderModule,
    StdHomeFooterModule,
    StdHomeSecurityModule,

    RouterModule.forChild(ROUTES)
  ]
})
export class HomeModule { }
