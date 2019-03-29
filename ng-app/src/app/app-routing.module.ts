import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UserGuardService } from './services/user-guard.service';
import { AdminGuardService } from './services/admin-guard.service';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full'},
   { path: 'admin', component: AdminComponent, canActivate: [AdminGuardService] },
   { path: 'home', component: HomeComponent },
   { path: 'user', component: UserComponent, canActivate: [UserGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
