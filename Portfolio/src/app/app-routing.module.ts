import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

//Registering for different components in routes array.
const routes: Routes = [
{
path:'',redirectTo:'home',pathMatch:'full'
},
{
path:'about',component:AboutComponent
},
{
path:'project',component:ProjectComponent
},
{
path:'contact',component:ContactComponent
},
{
path:'home',component:HomeComponent
},
{
path:'**',redirectTo:'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
