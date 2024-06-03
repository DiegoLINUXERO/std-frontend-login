export const environment: any = {
  production: false,
  environment: 'local',
  logger: true,
  mockFront: true,
  mockBack: false,
  apiStd: {
    baseURLInfo: 'http://172.171.86.221:8090/',
    baseURLLogin: 'http://172.171.86.221:8090/',
    servicePath: {
      infoLogin: 'api/mf/v1/login/info',
      loginUser: 'authenticate-login',
    },
  },
};
