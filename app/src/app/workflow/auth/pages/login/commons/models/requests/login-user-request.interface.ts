export interface ILoginUserRequest {
  username: string;
  password: string;
  rememberUser: boolean;
  recaptcha: string;
}