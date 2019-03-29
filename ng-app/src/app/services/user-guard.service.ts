import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable()

export class UserGuardService implements CanActivate {

   constructor(public router: Router,
               private auth: AuthService) {}

   canActivate(): boolean {
      if (this.auth.isLogin === 'true') {
         return true;
      }
      return false;

   }

}
