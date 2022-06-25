import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CookingsComponent } from './components/cookings/cookings.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "cookings", component: CookingsComponent},
  {path: "aboutus", component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
