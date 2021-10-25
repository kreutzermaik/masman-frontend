export class GlobalConstants {

  public static authInstance: gapi.auth2.GoogleAuth;

  static getAuthInstance(): gapi.auth2.GoogleAuth {
    return this.authInstance;
  }

  static setAuthInstance(value: gapi.auth2.GoogleAuth) {
    this.authInstance = value;
  }
}
