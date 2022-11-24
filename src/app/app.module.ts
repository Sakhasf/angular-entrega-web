import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersListComponent } from './servers-list/servers-list.component';
import { WebsListComponent } from './webs-list/webs-list.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { WebsComponent } from './webs/webs.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerCreateComponent } from './server-create/server-create.component';
import { WebCreateComponent } from './web-create/web-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersListComponent,
    WebsListComponent,
    ServersComponent,
    HomeComponent,
    WebsComponent,
    ContactComponent,
    ServerCreateComponent,
    WebCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ServersListComponent, WebsListComponent]
})
export class AppModule { }
