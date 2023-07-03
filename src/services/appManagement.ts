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
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

const appManagement = {
  // Existing functions...
  changeApplicationAccessState: async (
    requestData: ChangeApplicationAccessStateRequest
  ): Promise<ChangeApplicationAccessStateResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/state`,
      requestData
    );
    return response.data;
  },

  getApplicationBackupStatus: async (
    requestData: GetApplicationBackupStatusRequest
  ): Promise<GetApplicationBackupStatusResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
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
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/creds`,
      requestData
    );
    return response.data;
  },

  deleteAppCredential: async (
    requestData: DeleteAppCredentialRequest
  ): Promise<DeleteAppCredentialResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.delete(
      `${baseURL}/app/creds/${requestData.app_cred_id}`,
      { data: requestData }
    );
    return response.data;
  },
  deleteCname: async (
    params: DeleteCnameParameters
  ): Promise<DeleteCnameResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.delete(
      `${baseURL}/app/manage/cname`,
      { params }
    );
    return response.data;
  },

  deleteLocalBackup: async (
    params: DeleteLocalBackupParameters
  ): Promise<DeleteLocalBackupResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.delete(
      `${baseURL}/app/manage/backup`,
      { params }
    );
    return response.data;
  },

  getAppCredentials: async (
    params: GetAppCredentialsParameters
  ): Promise<GetAppCredentialsResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(`${baseURL}/app/creds`, {
      params,
    });
    return response.data;
  },

  getApplicationSSHAccessStatus: async (
    params: GetApplicationSSHAccessStatusParameters
  ): Promise<GetApplicationSSHAccessStatusResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/getAppSshPerms`,
      { params }
    );
    return response.data;
  },

  getApplicationAccessState: async (
    params: GetApplicationAccessStateParameters
  ): Promise<GetApplicationAccessStateResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/getApplicationAccess`,
      { params }
    );
    return response.data;
  },

  getCronList: async (
    params: GetCronListParameters
  ): Promise<GetCronListResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/cronList`,
      { params }
    );
    return response.data;
  },

  getFPMSettings: async (
    params: GetFPMSettingsParameters
  ): Promise<GetFPMSettingsResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/fpm_setting`,
      { params }
    );
    return response.data;
  },

  getVarnishSettings: async (
    params: GetVarnishSettingsParameters
  ): Promise<GetVarnishSettingsResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/varnish_setting`,
      { params }
    );
    return response.data;
  },

  resetFilePermissions: async (
    params: ResetFilePermissionsParameters
  ): Promise<ResetFilePermissionsResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/reset_permissions`,
      params
    );
    return response.data;
  },

  restoreApp: async (
    params: RestoreAppParameters
  ): Promise<RestoreAppResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/restore`,
      params
    );
    return response.data;
  },

  rollbackRestore: async (
    params: RollbackRestoreParameters
  ): Promise<RollbackRestoreResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/rollback`,
      params
    );
    return response.data;
  },

  backup: async (params: BackupParameters): Promise<BackupResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/takeBackup`,
      params
    );
    return response.data;
  },

  updateAppAliases: async (
    params: UpdateAppAliasesParameters
  ): Promise<UpdateAppAliasesResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/aliases`,
      params
    );
    return response.data;
  },

  updateAppCname: async (
    params: UpdateAppCnameParameters
  ): Promise<UpdateAppCnameResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/cname`,
      params
    );
    return response.data;
  },

  updateAppCredential: async (
    params: UpdateAppCredentialParameters
  ): Promise<UpdateAppCredentialResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.put(
      `${baseURL}/app/creds/${params.app_cred_id}`,
      params
    );
    return response.data;
  },
  updateApplicationSSHAccess: async (
    params: UpdateApplicationSSHAccessParameters
  ): Promise<UpdateApplicationSSHAccessResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/updateAppSshPerms`,
      params
    );
    return response.data;
  },

  updateCronList: async (
    params: UpdateCronListParameters
  ): Promise<UpdateCronListResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/cronList`,
      params
    );
    return response.data;
  },

  updateDBPassword: async (
    params: UpdateDBPasswordParameters
  ): Promise<UpdateDBPasswordResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/dbPassword`,
      params
    );
    return response.data;
  },

  updateFPMSettings: async (
    params: UpdateFPMSettingsParameters
  ): Promise<UpdateFPMSettingsResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/fpm_setting`,
      params
    );
    return response.data;
  },

  updateSymlink: async (
    params: UpdateSymlinkParameters
  ): Promise<UpdateSymlinkResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/symlink`,
      params
    );
    return response.data;
  },

  updateVarnishSettings: async (
    params: UpdateVarnishSettingsParameters
  ): Promise<UpdateVarnishSettingsResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/varnish_setting`,
      params
    );
    return response.data;
  },

  updateWebroot: async (
    params: UpdateWebrootParameters
  ): Promise<UpdateWebrootResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/webroot`,
      params
    );
    return response.data;
  },

  updateCorsHeaders: async (
    params: UpdateCorsHeadersParameters
  ): Promise<UpdateCorsHeadersResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/cors_header`,
      params
    );
    return response.data;
  },

  getApplicationWebPRedirectionStatus: async (
    params: GetApplicationWebPRedirectionStatusParameters
  ): Promise<GetApplicationWebPRedirectionStatusResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/webP`,
      { params }
    );
    return response.data;
  },

  enforceHTTPS: async (
    params: EnforceHTTPSParameters
  ): Promise<EnforceHTTPSResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/enforce_https`,
      params
    );
    return response.data;
  },

  getAppSettingValue: async (
    params: GetAppSettingValueParameters
  ): Promise<GetAppSettingValueResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/get_settings_value`,
      { params }
    );
    return response.data;
  },

  updateTLSSettings: async (): Promise<UpdateTLSSettingsResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/manage/update_tls`
    );
    return response.data;
  },

  getApplicationGEOIPHeaderStatus: async (
    params: GetApplicationGEOIPHeaderStatusParameters
  ): Promise<GetApplicationGEOIPHeaderStatusResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/geo_ip_header`,
      { params }
    );
    return response.data;
  },

  getApplicationXMLRPCHeaderStatus: async (
    params: GetApplicationXMLRPCHeaderStatusParameters
  ): Promise<GetApplicationXMLRPCHeaderStatusResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/xmlrpc`,
      { params }
    );
    return response.data;
  },

  updateDirectPHPExecutionStatus: async (
    params: UpdateDirectPHPExecutionStatusParameters
  ): Promise<UpdateDirectPHPExecutionStatusResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/manage/php_direct_execution`,
      { params }
    );
    return response.data;
  },

  updateApplicationAdminPasswordStatus: async (
    params: UpdateApplicationAdminPasswordStatusParameters
  ): Promise<UpdateApplicationAdminPasswordStatusResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/creds/changeAdminCredentials`,
      params
    );
    return response.data;
  },

  synchronizeApplication: async (): Promise<SynchronizeApplicationResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(`${baseURL}/app/sync`);
    return response.data;
  },

  getApplicationTable: async (
    params: GetApplicationTableParameters
  ): Promise<GetApplicationTableResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/staging/app/tables`,
      params
    );
    return response.data;
  },

  synchronizeApp: async (
    params: SynchronizeApplicationParameters
  ): Promise<SynchronizeApplicationResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/sync/app`,
      params
    );
    return response.data;
  },
  htaccessAuthStatus: async (
    params: HtaccessAuthStatusParameters
  ): Promise<HtaccessAuthStatusResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/staging/auth/status`,
      params
    );
    return response.data;
  },

  htaccessUpdateCredentials: async (
    params: HtaccessUpdateCredentialsParameters
  ): Promise<HtaccessUpdateCredentialsResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/staging/htaccessUpdate`,
      params
    );
    return response.data;
  },

  stagingApplicationDeploymentLogs: async (
    params: StagingApplicationDeploymentLogsParameters
  ): Promise<StagingApplicationDeploymentLogsResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/staging/app/logs`,
      params
    );
    return response.data;
  },

  stagingDeleteLocalBackup: async (
    params: StagingDeleteLocalBackupParameters
  ): Promise<StagingDeleteLocalBackupResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.post(
      `${baseURL}/staging/app/deleteBackup`,
      params
    );
    return response.data;
  },

  botProtectionStatus: async (
    params: BotProtectionStatusParameters
  ): Promise<BotProtectionStatusResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(`${baseURL}/app/malcare`, {
      params,
    });
    return response.data;
  },

  botProtectionTraffic: async (
    params: BotProtectionTrafficParameters
  ): Promise<BotProtectionTrafficResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/malcare/traffic`,
      { params }
    );
    return response.data;
  },

  botProtectionTrafficSummary: async (
    params: BotProtectionTrafficSummaryParameters
  ): Promise<BotProtectionTrafficSummaryResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/malcare/traffic/summary`,
      { params }
    );
    return response.data;
  },
  getBotProtectionLoginTraffic: async (
    params: GetBotProtectionLoginTrafficParameters
  ): Promise<GetBotProtectionLoginTrafficResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/malcare/logins`,
      { params }
    );
    return response.data;
  },

  getBotProtectionLoginTrafficSummary: async (
    params: GetBotProtectionLoginTrafficSummaryParameters
  ): Promise<GetBotProtectionLoginTrafficSummaryResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/malcare/logins/summary`,
      { params }
    );
    return response.data;
  },

  getBotProtectionBadBotsList: async (
    params: GetBotProtectionBadBotsListParameters
  ): Promise<GetBotProtectionBadBotsListResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/malcare/bots/bad`,
      { params }
    );
    return response.data;
  },

  getBotProtectionWhitelistedIPs: async (
    params: GetBotProtectionWhitelistedIPsParameters
  ): Promise<GetBotProtectionWhitelistedIPsResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/malcare/whitelisted_ips`,
      { params }
    );
    return response.data;
  },

  getBotProtectionWhitelistedBots: async (
    params: GetBotProtectionWhitelistedBotsParameters
  ): Promise<GetBotProtectionWhitelistedBotsResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/malcare/whitelisted_bots`,
      { params }
    );
    return response.data;
  },

  activateBotProtection: async (
    params: ActivateBotProtectionParameters
  ): Promise<ActivateBotProtectionResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.put(
      `${baseURL}/app/malcare/enable`,
      params
    );
    return response.data;
  },

  deactivateBotProtection: async (
    params: DeactivateBotProtectionParameters
  ): Promise<DeactivateBotProtectionResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.put(
      `${baseURL}/app/malcare/disable`,
      params
    );
    return response.data;
  },

  botProtectionIPWhitelisting: async (
    params: BotProtectionIPWhitelistingParameters
  ): Promise<BotProtectionIPWhitelistingResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.put(
      `${baseURL}/app/malcare/whitelist_ip`,
      params
    );
    return response.data;
  },

  botProtectionBadBotsWhitelisting: async (
    params: BotProtectionBadBotsWhitelistingParameters
  ): Promise<BotProtectionBadBotsWhitelistingResponse> => {
    const accessToken = await getAccessToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const response: AxiosResponse = await axios.put(
      `${baseURL}/app/malcare/whitelist_bot`,
      params
    );
    return response.data;
  },
};

module.exports = appManagement;
