export interface ILoginUserResponse {
  credentialOwner: {
    isFirstLogin: boolean;
    retry: number;
    success: boolean;
  };
  sessionToken: {
    auth: string;
    refresh: string;
  };
}

export interface ILoginUserResponseError {
  error: {
    error: {
      code: string;
      message: string;
      level: string;
      description: string;
    };
  };
}
