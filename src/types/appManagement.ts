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

export interface DeleteCnameParameters {
  server_id: number;
  app_id: number;
}

export interface DeleteCnameResponse {
  operation_id: number;
}

export interface DeleteLocalBackupParameters {
  server_id: number;
  app_id: number;
}

export interface DeleteLocalBackupResponse {
  operation_id: number;
}

export interface AppCredential {
  id: string;
  sys_password: string;
  sys_user: string;
  ssh_keys: {
    label: string;
    ssh_key_id: string;
  }[];
}

export interface GetAppCredentialsParameters {
  server_id: number;
  app_id: number;
}

export interface GetAppCredentialsResponse {
  app_creds: AppCredential[];
}

export interface GetApplicationSSHAccessStatusParameters {
  server_id: number;
  app_id: number;
}

export interface GetApplicationSSHAccessStatusResponse {
  response: {
    ssh_status: Record<string, boolean>;
  };
}

export interface GetApplicationAccessStateParameters {
  server_id: number;
  app_id: number;
}

export interface GetApplicationAccessStateResponse {
  response: {
    app_status: Record<string, boolean>;
  };
  status: boolean;
}

export interface Cron {
  cmd_type: string;
  command: string;
  days: string;
  hours: string;
  minutes: string;
  months: string;
  weekdays: string;
}

export interface GetCronListParameters {
  server_id: number;
  app_id: number;
}

export interface GetCronListResponse {
  basic: Cron[];
  script: string;
}

export interface GetFPMSettingsParameters {
  server_id: number;
  app_id: number;
}

export interface GetFPMSettingsResponse {
  response: {
    fpm_enabled: boolean;
    settings: string;
  };
}

export interface GetVarnishSettingsParameters {
  server_id: number;
  app_id: number;
}

export interface VarnishRule {
  method: string;
  type: string;
  value: string;
}

export interface GetVarnishSettingsResponse {
  response: {
    varnish_app_enabled: boolean;
    varnish_enabled: boolean;
    vcl_list: VarnishRule[];
  };
}

export interface ResetFilePermissionsParameters {
  server_id: number;
  app_id: number;
  ownership: string;
}

export interface ResetFilePermissionsResponse {
  // Define the response type if available
}

export interface RestoreAppParameters {
  server_id: number;
  app_id: number;
  time: string;
  type: string;
}

export interface RestoreAppResponse {
  operation_id: number;
}

export interface RollbackRestoreParameters {
  server_id: number;
  app_id: number;
}

export interface RollbackRestoreResponse {
  operation_id: number;
}

export interface BackupParameters {
  server_id: number;
  app_id: number;
}

export interface BackupResponse {
  operation_id: number;
}

export interface UpdateAppAliasesParameters {
  server_id: number;
  app_id: number;
  aliases: string[];
}

export interface UpdateAppAliasesResponse {
  // Define the response type if available
}

export interface UpdateAppCnameParameters {
  server_id: number;
  app_id: number;
  cname: string;
}

export interface UpdateAppCnameResponse {
  operation_id: number;
}

export interface UpdateAppCredentialParameters {
  server_id: number;
  app_id: number;
  username: string;
  password: string;
  app_cred_id: number;
}

export interface UpdateAppCredentialResponse {
  // Define the response type if available
}

export interface UpdateApplicationSSHAccessParameters {
  server_id: number;
  app_id: number;
  update_perms_action: "enable" | "disable";
}

export interface UpdateApplicationSSHAccessResponse {
  status: boolean;
  confirmation: boolean;
}

export interface UpdateCronListParameters {
  server_id: number;
  app_id: number;
  crons: string;
  is_script: boolean;
}

export interface UpdateCronListResponse {
  // Specify the response type
}

export interface UpdateDBPasswordParameters {
  server_id: number;
  app_id: number;
  password: string;
}

export interface UpdateDBPasswordResponse {
  // Specify the response type
}

export interface UpdateFPMSettingsParameters {
  server_id: number;
  app_id: number;
  fpm_setting: string;
}

export interface UpdateFPMSettingsResponse {
  // Specify the response type
}

export interface UpdateSymlinkParameters {
  server_id: number;
  app_id: number;
  symlink: string;
}

export interface UpdateSymlinkResponse {
  // Specify the response type
}

export interface UpdateVarnishSettingsParameters {
  server_id: number;
  app_id: number;
  vcl_list: string;
}

export interface UpdateVarnishSettingsResponse {
  operation_id: number;
}

export interface UpdateWebrootParameters {
  server_id: number;
  app_id: number;
  webroot: string;
}

export interface UpdateWebrootResponse {
  // Specify the response type
}

export interface UpdateCorsHeadersParameters {
  server_id: number;
  app_id: number;
  corsHeader: "enable" | "disable";
}

export interface UpdateCorsHeadersResponse {
  status: boolean;
  operation_id: number;
}

export interface GetApplicationWebPRedirectionStatusParameters {
  server_id: number;
  app_id: number;
  status: "enable" | "disable";
}

export interface GetApplicationWebPRedirectionStatusResponse {
  response: {
    operation_id: number;
  };
}

export interface EnforceHTTPSParameters {
  server_id: number;
  app_id: number;
  status: "enable" | "disable";
}

export interface EnforceHTTPSResponse {
  status: boolean;
  operation_id: number;
}

export interface GetAppSettingValueParameters {
  server_id: number;
  app_id: number;
}

export interface GetAppSettingValueResponse {
  status: boolean;
  application_id: string;
  from_address: string | null;
  cors_header: number;
  enforce_https: number;
}

export interface UpdateTLSSettingsResponse {
  // Specify the response type
}

export interface GetApplicationGEOIPHeaderStatusParameters {
  server_id: number;
  app_id: number;
  status: "enable" | "disable";
}

export interface GetApplicationGEOIPHeaderStatusResponse {
  response: {
    geo_ip: {
      [key: string]: boolean;
    };
  };
  status: boolean;
}

export interface GetApplicationXMLRPCHeaderStatusParameters {
  server_id: number;
  app_id: number;
  status: "enable" | "disable";
}

export interface GetApplicationXMLRPCHeaderStatusResponse {
  response: {
    xml_rpc: {
      [key: string]: boolean;
    };
  };
  status: boolean;
}

export interface UpdateDirectPHPExecutionStatusParameters {
  server_id: number;
  app_id: number;
  status: "enable" | "disable";
}

export interface UpdateDirectPHPExecutionStatusResponse {
  status: boolean;
  operation_id: number;
}

export interface UpdateApplicationAdminPasswordStatusParameters {
  server_id: number;
  app_id: number;
  password: string;
}

export interface UpdateApplicationAdminPasswordStatusResponse {
  response: {
    operation_id: number;
  };
}

export interface SynchronizeApplicationResponse {
  // Specify the response type
}

export interface GetApplicationTableParameters {
  server_id: number;
  app_id: number;
}

export interface GetApplicationTableResponse {
  // Specify the response type
}

export interface SynchronizeApplicationParameters {
  server_id: number;
  app_id: number;
  source_app_id: number;
  source_server_id: number;
  action: "push" | "pull";
  appFiles?: boolean;
  appFilesType?: string;
  excludePath?: string[];
  dbFiles?: boolean;
  backup?: boolean;
  table?: boolean;
  tableSelected?: string[];
}

export interface HtaccessAuthStatusParameters {
  server_id: number;
  app_id: number;
  action: "Enable" | "Disable";
}

export interface HtaccessAuthStatusResponse {
  // Define the response type if available
}

export interface HtaccessUpdateCredentialsParameters {
  server_id: number;
  app_id: number;
  Username: string;
  Password: string;
}

export interface HtaccessUpdateCredentialsResponse {
  // Define the response type if available
}

export interface StagingApplicationDeploymentLogsParameters {
  server_id: number;
  app_id: number;
}

export interface StagingApplicationDeploymentLogsResponse {
  // Define the response type if available
}

export interface StagingDeleteLocalBackupParameters {
  server_id: number;
  app_id: number;
}

export interface StagingDeleteLocalBackupResponse {
  // Define the response type if available
}

export interface BotProtectionStatusParameters {
  server_id: number;
  app_id: number;
}

export interface BotProtectionStatusResponse {
  enabled: boolean;
}

export interface BotProtectionTrafficParameters {
  server_id: number;
  app_id: number;
}

export interface BotProtectionTrafficLog {
  ip: string;
  status: string;
  time: number;
  method: string;
  path: string;
  user_agent: string;
  resp_code: number;
  country_name: string;
  id: string;
}

export interface BotProtectionTrafficResponse {
  logs: BotProtectionTrafficLog[];
}

export interface BotProtectionTrafficSummaryParameters {
  server_id: number;
  app_id: number;
}

export interface BotProtectionTrafficSummaryDay {
  day: string;
  total: number;
  allowed: number;
  blocked: number;
}

export interface BotProtectionTrafficSummaryResponse {
  sinceLastDays: number;
  blocked: number;
  total: number;
  summary: BotProtectionTrafficSummaryDay[];
}
export interface GetBotProtectionLoginTrafficParameters {
  server_id: number;
  app_id: number;
}

export interface BotLogin {
  ip: string;
  status: string;
  time: number;
  message: string;
  username: string;
  country_name: string;
  id: string;
}

export interface GetBotProtectionLoginTrafficResponse {
  logs: BotLogin[];
}

export interface GetBotProtectionLoginTrafficSummaryParameters {
  server_id: number;
  app_id: number;
}

export interface BotLoginSummary {
  day: string;
  total: number;
  succeeded: number;
  blocked: number;
  failed: number;
}

export interface GetBotProtectionLoginTrafficSummaryResponse {
  sinceLastDays: number;
  blocked: number;
  total: number;
  summary: BotLoginSummary[];
}

export interface GetBotProtectionBadBotsListParameters {
  server_id: number;
  app_id: number;
  limit?: number;
}

export interface Bot {
  botName: string;
  visits: number;
  allowed: number;
  blocked: number;
}

export interface GetBotProtectionBadBotsListResponse {
  blocked: number;
  logs: Bot[];
}

export interface GetBotProtectionWhitelistedIPsParameters {
  server_id: number;
  app_id: number;
}

export interface GetBotProtectionWhitelistedIPsResponse {
  whitelistedIps: string[];
}

export interface GetBotProtectionWhitelistedBotsParameters {
  server_id: number;
  app_id: number;
}

export interface GetBotProtectionWhitelistedBotsResponse {
  whitelistedBots: string[];
}

export interface ActivateBotProtectionParameters {
  server_id: number;
  app_id: number;
}

export interface ActivateBotProtectionResponse {
  operation_id: number;
}

export interface DeactivateBotProtectionParameters {
  server_id: number;
  app_id: number;
}

export interface DeactivateBotProtectionResponse {
  operation_id: number;
}

export interface BotProtectionIPWhitelistingParameters {
  server_id: number;
  app_id: number;
  ip: string;
  status: boolean;
}

export interface BotProtectionIPWhitelistingResponse {
  whitelistedIps: string[];
}

export interface BotProtectionBadBotsWhitelistingParameters {
  server_id: number;
  app_id: number;
  bot: string;
  status: boolean;
}

export interface BotProtectionBadBotsWhitelistingResponse {
  whitelistedBots: string[];
}
