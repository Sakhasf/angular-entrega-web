import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServerCreateComponent } from './server-create/server-create.component';
import { ServersComponent } from './servers/servers.component';
import { WebCreateComponent } from './web-create/web-create.component';
import { WebsComponent } from './webs/webs.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'servers', component: ServersComponent },
  { path: 'server-create', component: ServerCreateComponent},
  { path: 'webs', component: WebsComponent},
  { path: 'web-create', component: WebCreateComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
