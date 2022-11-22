import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersListComponent } from './servers-list/servers-list.component';
import { WebsListComponent } from './webs-list/webs-list.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { WebsComponent } from './webs/webs.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersListComponent,
    WebsListComponent,
    ServersComponent,
    HomeComponent,
    WebsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ServersListComponent, WebsListComponent]
})
export class AppModule { }
