import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private dialog: MatDialog,
              private service: AuthService,
              private router: Router) { }

  openDialog() {
   let dialogConfig = new MatDialogConfig();
   dialogConfig = {
      disableClose: true,
      autoFocus: true,
      width: '250px',
      height: '250px'
   };
   const dialogRef = this.dialog.open(AuthComponent, dialogConfig);
   dialogRef.afterClosed().subscribe();
}

logout() {
   this.service.logout().subscribe( res => {
      this.service.isLogin = '';
      this.service.userRole = '';
      this.router.navigate(['home']);
   });
}


}
