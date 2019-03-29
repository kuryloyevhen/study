import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { User } from '../../user';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {

   constructor(private fb: FormBuilder,
               private service: UserService,
               private dialog: MatDialog) {}

   users: User[];

   addUserForm = this.fb.group({
      id: [3],
      name: [''],
      password: [''],
      email: [''],
      priveleges: ['']
   });

   getUsers() {
      this.service.getUsers()
         .subscribe( res => this.users = res );
   }

   createUser() {
      this.service.createUser(this.addUserForm.value)
         .subscribe( res => this.users = res );
      this.addUserForm.reset( { name: '', password: '', email: '' } );
   }

   deleteUser(event, userName: string) {
      event.stopPropagation();
      this.service.deleteUser(userName)
         .subscribe( res => this.users = res );
   }

   openDialog(event, id) {
      event.stopPropagation();
      this.service.updatingId = id;
      let dialogConfig = new MatDialogConfig();
      dialogConfig = {
         disableClose: true,
         autoFocus: true,
         width: '300px',
         height: '350px'
      };
      const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe( () => {
         this.users = this.service.users;
      });
   }


}
