import { Component } from '@angular/core';
import {GlobalConstants} from '../../../utils/GlobalConstants';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent {

  constructor() { }

  public static gapiSetup = false;
  public static error: string;
  public static user: gapi.auth2.GoogleUser;

  component = GoogleLoginComponent;


  static async initGoogleAuth(): Promise<void> {
    //  Create a new Promise where the resolve function is the callback
    // passed to gapi.load
    const pload = new Promise((resolve) => {
      gapi.load('auth2', resolve);
    });

    // When the first promise resolves, it means we have gapi loaded
    // and that we can call gapi.init
    return pload.then(async () => {
      await gapi.auth2
        .init({ client_id: environment.clientID,
                       cookie_policy: 'single_host_origin',
                       ux_mode: 'redirect',
                       redirect_uri: environment.redirect_uri
        })
        .then(auth => {
          this.gapiSetup = true;
          GlobalConstants.setAuthInstance(auth);
        });
    });
  }

  static async authenticate(): Promise<gapi.auth2.GoogleUser> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }
    // Resolve or reject signin Promise
    return new Promise(async () => {
      await GlobalConstants.authInstance.signIn().then(
        user => this.user = user,
        error => this.error = error);
    });
  }

  static async checkIfUserAuthenticated(): Promise<boolean> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    return GlobalConstants.getAuthInstance().isSignedIn.get();
  }

  static async getCurrentUser() {
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }
    return GlobalConstants.getAuthInstance().currentUser.get().getBasicProfile();
  }

  static async logout() {
    gapi.auth2.getAuthInstance().signOut().then(() => {
      console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  }

}
