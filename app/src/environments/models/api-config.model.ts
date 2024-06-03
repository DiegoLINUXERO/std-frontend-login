// Estructura base de configuración de servicios

export interface ApiConfig<T> {
  baseUrl: string;
  servicePath: T;
}
