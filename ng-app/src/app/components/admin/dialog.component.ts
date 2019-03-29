import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { User } from '../../user';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent {

   modalTitle = 'Update form';

   constructor(private fb: FormBuilder,
               private service: UserService,
               private dialog: MatDialog,
               @Inject(MAT_DIALOG_DATA) public data: any) {
                  // this.modalTitle = data.title;
               }

   users: User[];

   updateUserForm = this.fb.group({
      name: [''],
      password: [''],
      email: [''],
      priveleges: ['']
   });

   updateUser() {
      this.service.updateUser(this.updateUserForm.value)
         .subscribe( res => {
            this.service.users = res;
            this.dialog.closeAll();
      });
      this.updateUserForm.reset( { name: '', password: '', email: '', priveleges: [''] } );
   }


}
