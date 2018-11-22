export interface UserInfo {
  name: string;
  email: string;
  group: string;
}

export interface AuthLoginRequest {
  email: string;
  password: string;
}

export interface AuthLoginResponse {
  session: string;
  userInfo: UserInfo;
}
