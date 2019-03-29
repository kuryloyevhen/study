import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule,
         MatButtonModule,
         MatExpansionModule,
         MatListModule,
         MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { DialogComponent } from './components/admin/dialog.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { Interceptor } from './services/interceptor';
import { UserGuardService } from './services/user-guard.service';
import { AdminGuardService } from './services/admin-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,
    DialogComponent,
    NavComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
     DialogComponent,
     AuthComponent
  ],
  providers: [
     AuthService,
     UserService,
     UserGuardService,
     AdminGuardService,
     {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
