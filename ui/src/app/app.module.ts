import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

// import { P404Component } from './views/error/404.component';
// import { P500Component } from './views/error/500.component';
// import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './containers/modules/login/login.component';

// Import 3rd party components
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { TabsModule } from 'ngx-bootstrap/tabs';
// import { ChartsModule } from 'ng2-charts';
// import { FeaturesModule } from './containers/modules/features/features.module';
// import { AdminModule } from './containers/modules/admin/admin.module';
// import { LoginModule } from './containers/modules/login/login.module';
// import { UserLoginComponent } from './dump/user-login/user-login.component';
// import { UserRoleComponent } from './dump/user-role/user-role.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // AppAsideModule,
    // AppBreadcrumbModule.forRoot(),
    // AppFooterModule,
    // AppHeaderModule,
    // AppSidebarModule,
    // PerfectScrollbarModule,
    // BsDropdownModule.forRoot(),
    // TabsModule.forRoot(),
    // ChartsModule,
    // LoginModule,
    // FeaturesModule,
    // AdminModule
  ],
  declarations: [
    AppComponent,
    // ...APP_CONTAINERS,
    // P404Component,
    // P500Component,
    LoginComponent,
    // RegisterComponent,
    // UserLoginComponent,
    // UserRoleComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
