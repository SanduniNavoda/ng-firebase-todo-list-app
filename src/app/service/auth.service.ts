import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  User} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private initialized = false;
  private user: User | null = null;
  constructor(private auth : Auth, routerService: Router) {//inject Auth
     /*listen to auth state*/
    authState(auth).subscribe((user: User | null) => {//authState is easier than onAuthStateChange
      //subscribe to authState, now anytime when the authState change, a notification goes to
      //this is the subscriber (this function)
      //if notification comes, update user ( with logged-in user or null)
      this.user = user;
      this.initialized = true;
      if(user){//if signed in (user is not null means logged in)
        routerService.navigateByUrl('/')
      }else{//if user is null
        routerService.navigateByUrl('/sign-in');
      }
    });

  }

  getPrincipal(){//to get the currently logged-in user, principal = currently log in user
    return this.user;
  }

  /*get current logged in user's email*/
  getPrincipalEmail(){
    return this.user?.email ?? /* if user email is null or undefined then do below */
      this.user?.providerData?.at(0)?.email;
  }

  signInWithGoogle(){
    /*popup*/
    signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  signInWithGitHub(){
    /*popup*/
    signInWithPopup(this.auth, new GithubAuthProvider());
  }
  signOut(){//sign out
    signOut(this.auth);
  }

  isInitialized(){ //return whether user is initialized
    return this.initialized;
  }
}
