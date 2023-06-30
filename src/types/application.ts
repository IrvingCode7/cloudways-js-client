export interface AddAppParameters {
  server_id: number;
  application: string;
  app_label: string;
  project_name?: string;
}

export interface AddAppResponse {
  operation_id: number;
}

export interface CloneAppParameters {
  server_id: number;
  app_id: number;
  app_label: string;
}

export interface CloneAppResponse {
  app_id: number;
  operation_id: number;
}

export interface CloneAppToOtherServerParameters {
  server_id: number;
  app_id: number;
  destination_server_id: number;
}

export interface CloneAppToOtherServerResponse {
  source_operation_id: number;
  destination_operation_id: number;
  app_id: number;
}

export interface CloneStagingAppParameters {
  server_id: number;
  app_id: number;
}

export interface CloneStagingAppResponse {
  app_id: number;
  operation_id: number;
}

export interface CloneStagingAppToOtherServerParameters {
  server_id: number;
  app_id: number;
  destination_server_id: number;
}

export interface CloneStagingAppToOtherServerResponse {
  source_operation_id: number;
  destination_operation_id: number;
  app_id: number;
}

export interface DeleteAppParameters {
  server_id: number;
  appId: number;
}

export interface DeleteAppResponse {
  operation_id: number;
}

export interface UpdateAppLabelParameters {
  appId: number;
  server_id: number;
  label: string;
}

export interface UpdateAppLabelResponse {
  status: boolean;
}
