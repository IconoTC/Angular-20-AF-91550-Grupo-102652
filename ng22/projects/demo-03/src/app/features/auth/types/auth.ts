export interface LoginResponse {
  error: string; // Mensaje de error en caso de fallo, si no cadena vacía
  token: string; // Token de autenticación en caso de éxito, si no cadena vacía
  info?: {
    id: number;
    email: string;
    loginDate: Date;
    rememberMe: boolean;
  } // Información adicional en caso de éxito, si no se incluye
} 

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}