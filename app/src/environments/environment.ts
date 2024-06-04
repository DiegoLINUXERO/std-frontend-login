export const environment: any = {
  production: false,
  environment: 'local',
  logger: true,
  mockFront: true,
  mockBack: false,
  apiStd: {
    baseURLInfo: 'http://51.8.71.251:8093/',
    baseURLLogin: 'http://51.8.71.251:8093/',
    baseURLChangePassword: 'http://51.8.71.251:8093/',
    baseURLOTP:'http://51.8.71.251:8093/',
    servicePath: {
      infoLogin: 'api/mf/v1/login/info',
      loginUser: 'api/mf/v1/login/authentication',
      changePassword: 'api/mf/v1/login/update-password',
      otpUser: 'api/mf/v1/otp',
    },
  },
};

//http://51.8.71.251:8093/api/mf/v1/login/info
//http://51.8.71.251:8093/api/mf/v1/login/authentication
//http://51.8.71.251:8093/api/mf/v1/login/authentication
//http://51.8.71.251:8093/api/mf/v1/otp
//http://51.8.71.251:8093/api/mf/v1/login/update-password