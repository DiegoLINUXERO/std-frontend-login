export interface ILoginUserRequest {
  seed: string;
  username: string;
  password: string[];
  rememberUser: boolean;
  recaptcha: string;
}