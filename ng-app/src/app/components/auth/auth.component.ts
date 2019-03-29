import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private fb: FormBuilder,
              private service: AuthService,
              private dialog: MatDialog) { }

  authForm = this.fb.group({
     name: [''],
     password: ['']
  });

  login() {
     this.service.login(this.authForm.value)
      .subscribe( res => {
         this.service.userRole = res.userRole;
         this.service.isLogin = res.isLogin;
         this.dialog.closeAll();
      });
     this.authForm.reset({ name: '', password: '' });
  }

}
