// types/application.ts

export interface SynchronizeApplicationParameters {
  server_id: number;
  app_id: number;
  source_app_id: number;
  source_server_id: number;
  action: "Push" | "Pull";
  appFiles?: boolean;
  appFilesType?: string;
  excludePath?: string[];
  dbFiles?: boolean;
  backup?: boolean;
  table?: boolean;
  tableSelected?: string[];
}

export interface HtaccessAuthCredentialsParameters {
  server_id: number;
  app_id: number;
  action: "Enable" | "Disable";
}

export interface HtaccessUpdateCredentialsParameters {
  server_id: number;
  app_id: number;
  Username: string;
  Password: string;
}

export interface StagingApplicationDeploymentLogsParameters {
  server_id: number;
  app_id: number;
}

export interface StagingDeleteLocalBackupParameters {
  server_id: number;
  app_id: number;
}

export interface SynchronizeApplicationResponse {
  // Define the response type if available
}

export interface HtaccessAuthCredentialsResponse {
  // Define the response type if available
}

export interface HtaccessUpdateCredentialsResponse {
  // Define the response type if available
}

export interface StagingApplicationDeploymentLogsResponse {
  // Define the response type if available
}

export interface StagingDeleteLocalBackupResponse {
  // Define the response type if available
}
