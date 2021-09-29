import { Constants } from "@/constants/constants";
export class HeaderService {
  createBasicHeaders(): RequestInit {
    return {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };
  }

  createAuthHeaders(): RequestInit {
    return {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem(Constants.TOKEN),
        // eslint-disable-next-line @typescript-eslint/camelcase
        user_identity: sessionStorage.getItem(Constants.USER) || "",
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };
  }

  /*createFileDownloadAuthorizationHeader(): RequestInit {
    return {
      headers: {
        "Content-Type": "application/json",
        Authentication: "bearer " + authService.getToken()?.accessToken,
        idenId: authService.getUserIdentity()
      },
      responseType: "blob"
    };
  }*/
}
