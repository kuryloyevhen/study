import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable()

export class AdminGuardService implements CanActivate {

   constructor(public router: Router,
               private auth: AuthService) {}

   canActivate(): boolean {
      if (this.auth.userRole === 'admin') {
         return true;
      }
      return false;

   }

}
