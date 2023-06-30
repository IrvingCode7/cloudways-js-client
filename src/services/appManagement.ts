import axios, { AxiosResponse } from "axios";
import {
  ChangeApplicationAccessStateRequest,
  ChangeApplicationAccessStateResponse,
  GetApplicationBackupStatusRequest,
  GetApplicationBackupStatusResponse,
  CreateAppCredentialsRequest,
  CreateAppCredentialsResponse,
  DeleteAppCredentialRequest,
  DeleteAppCredentialResponse,
  DeleteCnameParameters,
  DeleteCnameResponse,
  DeleteLocalBackupParameters,
  DeleteLocalBackupResponse,
  GetAppCredentialsParameters,
  GetAppCredentialsResponse,
  GetApplicationSSHAccessStatusParameters,
  GetApplicationSSHAccessStatusResponse,
  GetApplicationAccessStateParameters,
  GetApplicationAccessStateResponse,
  GetCronListParameters,
  GetCronListResponse,
  GetFPMSettingsParameters,
  GetFPMSettingsResponse,
  GetVarnishSettingsParameters,
  GetVarnishSettingsResponse,
  ResetFilePermissionsParameters,
  ResetFilePermissionsResponse,
  RestoreAppParameters,
  RestoreAppResponse,
  RollbackRestoreParameters,
  RollbackRestoreResponse,
  BackupParameters,
  BackupResponse,
  UpdateAppAliasesParameters,
  UpdateAppAliasesResponse,
  UpdateAppCnameParameters,
  UpdateAppCnameResponse,
  UpdateAppCredentialParameters,
  UpdateAppCredentialResponse,
  UpdateApplicationSSHAccessParameters,
  UpdateApplicationSSHAccessResponse,
  UpdateCronListParameters,
  UpdateCronListResponse,
  UpdateDBPasswordParameters,
  UpdateDBPasswordResponse,
  UpdateFPMSettingsParameters,
  UpdateFPMSettingsResponse,
  UpdateSymlinkParameters,
  UpdateSymlinkResponse,
  UpdateVarnishSettingsParameters,
  UpdateVarnishSettingsResponse,
  UpdateWebrootParameters,
  UpdateWebrootResponse,
  UpdateCorsHeadersParameters,
  UpdateCorsHeadersResponse,
  GetApplicationWebPRedirectionStatusParameters,
  GetApplicationWebPRedirectionStatusResponse,
  EnforceHTTPSParameters,
  EnforceHTTPSResponse,
  GetAppSettingValueParameters,
  GetAppSettingValueResponse,
  UpdateTLSSettingsResponse,
  GetApplicationGEOIPHeaderStatusParameters,
  GetApplicationGEOIPHeaderStatusResponse,
  GetApplicationXMLRPCHeaderStatusParameters,
  GetApplicationXMLRPCHeaderStatusResponse,
  UpdateDirectPHPExecutionStatusParameters,
  UpdateDirectPHPExecutionStatusResponse,
  UpdateApplicationAdminPasswordStatusParameters,
  UpdateApplicationAdminPasswordStatusResponse,
  SynchronizeApplicationResponse,
  GetApplicationTableParameters,
  GetApplicationTableResponse,
  SynchronizeApplicationParameters,
  HtaccessAuthStatusParameters,
  HtaccessAuthStatusResponse,
  HtaccessUpdateCredentialsParameters,
  HtaccessUpdateCredentialsResponse,
  StagingApplicationDeploymentLogsParameters,
  StagingApplicationDeploymentLogsResponse,
  StagingDeleteLocalBackupParameters,
  StagingDeleteLocalBackupResponse,
  BotProtectionStatusParameters,
  BotProtectionStatusResponse,
  BotProtectionTrafficParameters,
  BotProtectionTrafficResponse,
  BotProtectionTrafficSummaryParameters,
  BotProtectionTrafficSummaryResponse,
  GetBotProtectionLoginTrafficParameters,
  GetBotProtectionLoginTrafficResponse,
  GetBotProtectionLoginTrafficSummaryParameters,
  GetBotProtectionLoginTrafficSummaryResponse,
  GetBotProtectionBadBotsListParameters,
  GetBotProtectionBadBotsListResponse,
  GetBotProtectionWhitelistedIPsParameters,
  GetBotProtectionWhitelistedIPsResponse,
  GetBotProtectionWhitelistedBotsParameters,
  GetBotProtectionWhitelistedBotsResponse,
  ActivateBotProtectionParameters,
  ActivateBotProtectionResponse,
  DeactivateBotProtectionParameters,
  DeactivateBotProtectionResponse,
  BotProtectionIPWhitelistingParameters,
  BotProtectionIPWhitelistingResponse,
  BotProtectionBadBotsWhitelistingParameters,
  BotProtectionBadBotsWhitelistingResponse,
} from "../types/appManagement.js";

const baseURL = "https://api.cloudways.com/api/v1";

const appManagement = {
  // Existing functions...
  changeApplicationAccessState: async (
    requestData: ChangeApplicationAccessStateRequest
  ): Promise<ChangeApplicationAccessStateResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/state`,
      requestData
    );
    return response.data;
  },

  getApplicationBackupStatus: async (
    requestData: GetApplicationBackupStatusRequest
  ): Promise<GetApplicationBackupStatusResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/backup`,
      {
        params: requestData,
      }
    );
    return response.data;
  },

  createAppCredentials: async (
    requestData: CreateAppCredentialsRequest
  ): Promise<CreateAppCredentialsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/creds`,
      requestData
    );
    return response.data;
  },

  deleteAppCredential: async (
    requestData: DeleteAppCredentialRequest
  ): Promise<DeleteAppCredentialResponse> => {
    const response: AxiosResponse = await axios.delete(
      `${baseURL}/app/creds/${requestData.app_cred_id}`,
      { data: requestData }
    );
    return response.data;
  },
  deleteCname: async (
    params: DeleteCnameParameters
  ): Promise<DeleteCnameResponse> => {
    const response: AxiosResponse = await axios.delete(
      `${baseURL}/app/manage/cname`,
      { params }
    );
    return response.data;
  },

  deleteLocalBackup: async (
    params: DeleteLocalBackupParameters
  ): Promise<DeleteLocalBackupResponse> => {
    const response: AxiosResponse = await axios.delete(
      `${baseURL}/app/manage/backup`,
      { params }
    );
    return response.data;
  },

  getAppCredentials: async (
    params: GetAppCredentialsParameters
  ): Promise<GetAppCredentialsResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/app/creds`, {
      params,
    });
    return response.data;
  },

  getApplicationSSHAccessStatus: async (
    params: GetApplicationSSHAccessStatusParameters
  ): Promise<GetApplicationSSHAccessStatusResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/getAppSshPerms`,
      { params }
    );
    return response.data;
  },

  getApplicationAccessState: async (
    params: GetApplicationAccessStateParameters
  ): Promise<GetApplicationAccessStateResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/getApplicationAccess`,
      { params }
    );
    return response.data;
  },

  getCronList: async (
    params: GetCronListParameters
  ): Promise<GetCronListResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/cronList`,
      { params }
    );
    return response.data;
  },

  getFPMSettings: async (
    params: GetFPMSettingsParameters
  ): Promise<GetFPMSettingsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/fpm_setting`,
      { params }
    );
    return response.data;
  },

  getVarnishSettings: async (
    params: GetVarnishSettingsParameters
  ): Promise<GetVarnishSettingsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/varnish_setting`,
      { params }
    );
    return response.data;
  },

  resetFilePermissions: async (
    params: ResetFilePermissionsParameters
  ): Promise<ResetFilePermissionsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/reset_permissions`,
      params
    );
    return response.data;
  },

  restoreApp: async (
    params: RestoreAppParameters
  ): Promise<RestoreAppResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/restore`,
      params
    );
    return response.data;
  },

  rollbackRestore: async (
    params: RollbackRestoreParameters
  ): Promise<RollbackRestoreResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/rollback`,
      params
    );
    return response.data;
  },

  backup: async (params: BackupParameters): Promise<BackupResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/takeBackup`,
      params
    );
    return response.data;
  },

  updateAppAliases: async (
    params: UpdateAppAliasesParameters
  ): Promise<UpdateAppAliasesResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/aliases`,
      params
    );
    return response.data;
  },

  updateAppCname: async (
    params: UpdateAppCnameParameters
  ): Promise<UpdateAppCnameResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/cname`,
      params
    );
    return response.data;
  },

  updateAppCredential: async (
    params: UpdateAppCredentialParameters
  ): Promise<UpdateAppCredentialResponse> => {
    const response: AxiosResponse = await axios.put(
      `${baseURL}/app/creds/${params.app_cred_id}`,
      params
    );
    return response.data;
  },
  updateApplicationSSHAccess: async (
    params: UpdateApplicationSSHAccessParameters
  ): Promise<UpdateApplicationSSHAccessResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/updateAppSshPerms`,
      params
    );
    return response.data;
  },

  updateCronList: async (
    params: UpdateCronListParameters
  ): Promise<UpdateCronListResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/cronList`,
      params
    );
    return response.data;
  },

  updateDBPassword: async (
    params: UpdateDBPasswordParameters
  ): Promise<UpdateDBPasswordResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/dbPassword`,
      params
    );
    return response.data;
  },

  updateFPMSettings: async (
    params: UpdateFPMSettingsParameters
  ): Promise<UpdateFPMSettingsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/fpm_setting`,
      params
    );
    return response.data;
  },

  updateSymlink: async (
    params: UpdateSymlinkParameters
  ): Promise<UpdateSymlinkResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/symlink`,
      params
    );
    return response.data;
  },

  updateVarnishSettings: async (
    params: UpdateVarnishSettingsParameters
  ): Promise<UpdateVarnishSettingsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/varnish_setting`,
      params
    );
    return response.data;
  },

  updateWebroot: async (
    params: UpdateWebrootParameters
  ): Promise<UpdateWebrootResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/webroot`,
      params
    );
    return response.data;
  },

  updateCorsHeaders: async (
    params: UpdateCorsHeadersParameters
  ): Promise<UpdateCorsHeadersResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/cors_header`,
      params
    );
    return response.data;
  },

  getApplicationWebPRedirectionStatus: async (
    params: GetApplicationWebPRedirectionStatusParameters
  ): Promise<GetApplicationWebPRedirectionStatusResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/webP`,
      { params }
    );
    return response.data;
  },

  enforceHTTPS: async (
    params: EnforceHTTPSParameters
  ): Promise<EnforceHTTPSResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/enforce_https`,
      params
    );
    return response.data;
  },

  getAppSettingValue: async (
    params: GetAppSettingValueParameters
  ): Promise<GetAppSettingValueResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/get_settings_value`,
      { params }
    );
    return response.data;
  },

  updateTLSSettings: async (): Promise<UpdateTLSSettingsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/update_tls`
    );
    return response.data;
  },

  getApplicationGEOIPHeaderStatus: async (
    params: GetApplicationGEOIPHeaderStatusParameters
  ): Promise<GetApplicationGEOIPHeaderStatusResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/geo_ip_header`,
      { params }
    );
    return response.data;
  },

  getApplicationXMLRPCHeaderStatus: async (
    params: GetApplicationXMLRPCHeaderStatusParameters
  ): Promise<GetApplicationXMLRPCHeaderStatusResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/xmlrpc`,
      { params }
    );
    return response.data;
  },

  updateDirectPHPExecutionStatus: async (
    params: UpdateDirectPHPExecutionStatusParameters
  ): Promise<UpdateDirectPHPExecutionStatusResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/php_direct_execution`,
      { params }
    );
    return response.data;
  },

  updateApplicationAdminPasswordStatus: async (
    params: UpdateApplicationAdminPasswordStatusParameters
  ): Promise<UpdateApplicationAdminPasswordStatusResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/creds/changeAdminCredentials`,
      params
    );
    return response.data;
  },

  synchronizeApplication: async (): Promise<SynchronizeApplicationResponse> => {
    const response: AxiosResponse = await axios.post(`${baseURL}/app/sync`);
    return response.data;
  },

  getApplicationTable: async (
    params: GetApplicationTableParameters
  ): Promise<GetApplicationTableResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/staging/app/tables`,
      params
    );
    return response.data;
  },

  synchronizeApp: async (
    params: SynchronizeApplicationParameters
  ): Promise<SynchronizeApplicationResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/sync/app`,
      params
    );
    return response.data;
  },
  htaccessAuthStatus: async (
    params: HtaccessAuthStatusParameters
  ): Promise<HtaccessAuthStatusResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/staging/auth/status`,
      params
    );
    return response.data;
  },

  htaccessUpdateCredentials: async (
    params: HtaccessUpdateCredentialsParameters
  ): Promise<HtaccessUpdateCredentialsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/staging/htaccessUpdate`,
      params
    );
    return response.data;
  },

  stagingApplicationDeploymentLogs: async (
    params: StagingApplicationDeploymentLogsParameters
  ): Promise<StagingApplicationDeploymentLogsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/staging/app/logs`,
      params
    );
    return response.data;
  },

  stagingDeleteLocalBackup: async (
    params: StagingDeleteLocalBackupParameters
  ): Promise<StagingDeleteLocalBackupResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/staging/app/deleteBackup`,
      params
    );
    return response.data;
  },

  botProtectionStatus: async (
    params: BotProtectionStatusParameters
  ): Promise<BotProtectionStatusResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/app/malcare`, {
      params,
    });
    return response.data;
  },

  botProtectionTraffic: async (
    params: BotProtectionTrafficParameters
  ): Promise<BotProtectionTrafficResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/malcare/traffic`,
      { params }
    );
    return response.data;
  },

  botProtectionTrafficSummary: async (
    params: BotProtectionTrafficSummaryParameters
  ): Promise<BotProtectionTrafficSummaryResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/malcare/traffic/summary`,
      { params }
    );
    return response.data;
  },
  getBotProtectionLoginTraffic: async (
    params: GetBotProtectionLoginTrafficParameters
  ): Promise<GetBotProtectionLoginTrafficResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/malcare/logins`,
      { params }
    );
    return response.data;
  },

  getBotProtectionLoginTrafficSummary: async (
    params: GetBotProtectionLoginTrafficSummaryParameters
  ): Promise<GetBotProtectionLoginTrafficSummaryResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/malcare/logins/summary`,
      { params }
    );
    return response.data;
  },

  getBotProtectionBadBotsList: async (
    params: GetBotProtectionBadBotsListParameters
  ): Promise<GetBotProtectionBadBotsListResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/malcare/bots/bad`,
      { params }
    );
    return response.data;
  },

  getBotProtectionWhitelistedIPs: async (
    params: GetBotProtectionWhitelistedIPsParameters
  ): Promise<GetBotProtectionWhitelistedIPsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/malcare/whitelisted_ips`,
      { params }
    );
    return response.data;
  },

  getBotProtectionWhitelistedBots: async (
    params: GetBotProtectionWhitelistedBotsParameters
  ): Promise<GetBotProtectionWhitelistedBotsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/malcare/whitelisted_bots`,
      { params }
    );
    return response.data;
  },

  activateBotProtection: async (
    params: ActivateBotProtectionParameters
  ): Promise<ActivateBotProtectionResponse> => {
    const response: AxiosResponse = await axios.put(
      `${baseURL}/app/malcare/enable`,
      params
    );
    return response.data;
  },

  deactivateBotProtection: async (
    params: DeactivateBotProtectionParameters
  ): Promise<DeactivateBotProtectionResponse> => {
    const response: AxiosResponse = await axios.put(
      `${baseURL}/app/malcare/disable`,
      params
    );
    return response.data;
  },

  botProtectionIPWhitelisting: async (
    params: BotProtectionIPWhitelistingParameters
  ): Promise<BotProtectionIPWhitelistingResponse> => {
    const response: AxiosResponse = await axios.put(
      `${baseURL}/app/malcare/whitelist_ip`,
      params
    );
    return response.data;
  },

  botProtectionBadBotsWhitelisting: async (
    params: BotProtectionBadBotsWhitelistingParameters
  ): Promise<BotProtectionBadBotsWhitelistingResponse> => {
    const response: AxiosResponse = await axios.put(
      `${baseURL}/app/malcare/whitelist_bot`,
      params
    );
    return response.data;
  },
};

export default appManagement;
