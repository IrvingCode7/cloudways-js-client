export interface ChangeApplicationAccessStateRequest {
  server_id: number;
  app_id: number;
  state: "Enable" | "Disable";
}

export interface ChangeApplicationAccessStateResponse {}

export interface GetApplicationBackupStatusRequest {
  server_id: number;
  app_id: number;
}

export interface GetApplicationBackupStatusResponse {
  status: boolean;
  operation_id: number;
}

export interface CreateAppCredentialsRequest {
  server_id: number;
  app_id: number;
  username: string;
  password: string;
}

export interface CreateAppCredentialsResponse {
  app_cred_id: number;
}

export interface DeleteAppCredentialRequest {
  server_id: number;
  app_id: number;
  app_cred_id: number;
}

export interface DeleteAppCredentialResponse {}
