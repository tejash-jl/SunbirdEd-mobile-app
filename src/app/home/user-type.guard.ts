import { Inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PreferenceKey, RouterLinks } from '../../app/app.constant';
import { AppGlobalService } from '../../services/app-global-service.service';
import { ProfileType, SharedPreferences } from '@project-sunbird/sunbird-sdk';

@Injectable()
export class UserTypeGuard implements CanActivate {
    constructor(
        @Inject('SHARED_PREFERENCES') private sharedPreferences: SharedPreferences,
        private router: Router,
        public appGlobalService: AppGlobalService,
    ) {
    }
    async canActivate(): Promise<boolean> {
        if (this.appGlobalService.isUserLoggedIn()) {
            await this.router.navigate([`/${RouterLinks.HOME_TAB}/user`]);
            return true;
        } else {
            await this.router.navigate([`/${RouterLinks.SIGN_IN}`]);
            return false;
        }
    }
}
