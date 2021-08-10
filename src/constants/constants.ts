export class Constants {
  static TOKEN = "access_token";
  static REFRESH_TOKEN = "refresh_token";
  static USER = "user_identity";
  static DICT = "dict";
  static CODE = {
    SUCCESS: 200,
    SERVER_FAIL: 500,
    INVALID_TOKEN: 403
  };
  static HOME_PAGE = "/main/workbench";
  static PERMITALL = ["/callback"];

  private static REDIRECT_URI = "http://localhost:4200/dcms/callback";
  static AUTHORIZE_CALLBACK_PARAMS = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    client_id: "pf-web",
    // eslint-disable-next-line @typescript-eslint/camelcase
    client_secret: "123456",
    // eslint-disable-next-line @typescript-eslint/camelcase
    redirect_uri: `${Constants.REDIRECT_URI}`
  };
  static AUTHORIZE_CODE_PARAMS = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    client_id: "pf-web",
    // eslint-disable-next-line @typescript-eslint/camelcase
    redirect_uri: `${Constants.REDIRECT_URI}`,
    // eslint-disable-next-line @typescript-eslint/camelcase
    response_type: "code"
  };
}