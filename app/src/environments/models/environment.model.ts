import { ApiConfig } from './api-config.model';
import * as sp from './services-paths.model';

export interface Environment {
  production: boolean;
  environment: string;
  logger: boolean;

  apiStd: any;
}
