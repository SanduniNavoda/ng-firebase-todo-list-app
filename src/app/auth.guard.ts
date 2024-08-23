import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./service/auth.service";



//from authGard we can return boolean or an url, But authGard also have 2 async versions, we can
//do this by wrap up with a promise or wrap up with an observable. This async version e use since
//there can be a delay (in user login), To check whether user s logged in or not there is a service
//passes to back end (through firebase authentication)
export const authGuard: CanActivateFn = (route, state) => {

  const routerService = inject(Router)
  const authService = inject(AuthService);//inject the AuthService that we created

  if(authService.getPrincipal()){//we get user from getPrincipal() method in auth service
    /*Allow to access to main if user is logged in*/
    return true;
  } else {
    /*redirect to sign in if user is not logged in*/
    return (routerService.parseUrl('/sign-in'))
  }
};
