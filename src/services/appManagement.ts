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
} from "../types/appManagement";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function changeApplicationAccessState(
  requestData: ChangeApplicationAccessStateRequest
): Promise<ChangeApplicationAccessStateResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/state`,
    requestData
  );
  return response.data;
}

export async function getApplicationBackupStatus(
  requestData: GetApplicationBackupStatusRequest
): Promise<GetApplicationBackupStatusResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/manage/backup`,
    {
      params: requestData,
    }
  );
  return response.data;
}

export async function createAppCredentials(
  requestData: CreateAppCredentialsRequest
): Promise<CreateAppCredentialsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/creds`,
    requestData
  );
  return response.data;
}

export async function deleteAppCredential(
  requestData: DeleteAppCredentialRequest
): Promise<DeleteAppCredentialResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.delete(
    `${baseURL}/app/creds/${requestData.app_cred_id}`,
    { data: requestData }
  );
  return response.data;
}
export async function deleteCname(
  params: DeleteCnameParameters
): Promise<DeleteCnameResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.delete(
    `${baseURL}/app/manage/cname`,
    { params }
  );
  return response.data;
}

export async function deleteLocalBackup(
  params: DeleteLocalBackupParameters
): Promise<DeleteLocalBackupResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.delete(
    `${baseURL}/app/manage/backup`,
    { params }
  );
  return response.data;
}

export async function getAppCredentials(
  params: GetAppCredentialsParameters
): Promise<GetAppCredentialsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/app/creds`, {
    params,
  });
  return response.data;
}

export async function getApplicationSSHAccessStatus(
  params: GetApplicationSSHAccessStatusParameters
): Promise<GetApplicationSSHAccessStatusResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/getAppSshPerms`,
    { params }
  );
  return response.data;
}

export async function getApplicationAccessState(
  params: GetApplicationAccessStateParameters
): Promise<GetApplicationAccessStateResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/getApplicationAccess`,
    { params }
  );
  return response.data;
}

export async function getCronList(
  params: GetCronListParameters
): Promise<GetCronListResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/manage/cronList`,
    { params }
  );
  return response.data;
}

export async function getFPMSettings(
  params: GetFPMSettingsParameters
): Promise<GetFPMSettingsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/manage/fpm_setting`,
    { params }
  );
  return response.data;
}

export async function getVarnishSettings(
  params: GetVarnishSettingsParameters
): Promise<GetVarnishSettingsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/manage/varnish_setting`,
    { params }
  );
  return response.data;
}

export async function resetFilePermissions(
  params: ResetFilePermissionsParameters
): Promise<ResetFilePermissionsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/manage/reset_permissions`,
    params
  );
  return response.data;
}

export async function restoreApp(
  params: RestoreAppParameters
): Promise<RestoreAppResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/manage/restore`,
    params
  );
  return response.data;
}

export async function rollbackRestore(
  params: RollbackRestoreParameters
): Promise<RollbackRestoreResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/manage/rollback`,
    params
  );
  return response.data;
}

export async function backup(
  params: BackupParameters
): Promise<BackupResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/manage/takeBackup`,
    params
  );
  return response.data;
}

export async function updateAppAliases(
  params: UpdateAppAliasesParameters
): Promise<UpdateAppAliasesResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/manage/aliases`,
    params
  );
  return response.data;
}

export async function updateAppCname(
  params: UpdateAppCnameParameters
): Promise<UpdateAppCnameResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/manage/cname`,
    params
  );
  return response.data;
}

export async function updateAppCredential(
  params: UpdateAppCredentialParameters
): Promise<UpdateAppCredentialResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.put(
    `${baseURL}/app/creds/${params.app_cred_id}`,
    params
  );
  return response.data;
}
export async function updateApplicationSSHAccess(
  params: UpdateApplicationSSHAccessParameters
): Promise<UpdateApplicationSSHAccessResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/updateAppSshPerms`,
    params
  );
  return response.data;
}

export async function updateCronList(
  params: UpdateCronListParameters
): Promise<UpdateCronListResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/manage/cronList`,
    params
  );
  return response.data;
}

export async function updateDBPassword(
  params: UpdateDBPasswordParameters
): Promise<UpdateDBPasswordResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/manage/dbPassword`,
    params
  );
  return response.data;
}

export async function updateFPMSettings(
  params: UpdateFPMSettingsParameters
): Promise<UpdateFPMSettingsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/manage/fpm_setting`,
    params
  );
  return response.data;
}

export async function updateSymlink(
  params: UpdateSymlinkParameters
): Promise<UpdateSymlinkResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/manage/symlink`,
    params
  );
  return response.data;
}

export async function updateVarnishSettings(
  params: UpdateVarnishSettingsParameters
): Promise<UpdateVarnishSettingsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/manage/varnish_setting`,
    params
  );
  return response.data;
}

export async function updateWebroot(
  params: UpdateWebrootParameters
): Promise<UpdateWebrootResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/manage/webroot`,
    params
  );
  return response.data;
}

export async function updateCorsHeaders(
  params: UpdateCorsHeadersParameters
): Promise<UpdateCorsHeadersResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/cors_header`,
    params
  );
  return response.data;
}

export async function getApplicationWebPRedirectionStatus(
  params: GetApplicationWebPRedirectionStatusParameters
): Promise<GetApplicationWebPRedirectionStatusResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/manage/webP`,
    { params }
  );
  return response.data;
}

export async function enforceHTTPS(
  params: EnforceHTTPSParameters
): Promise<EnforceHTTPSResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/manage/enforce_https`,
    params
  );
  return response.data;
}

export async function getAppSettingValue(
  params: GetAppSettingValueParameters
): Promise<GetAppSettingValueResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/get_settings_value`,
    { params }
  );
  return response.data;
}

export async function updateTLSSettings(): Promise<UpdateTLSSettingsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/manage/update_tls`
  );
  return response.data;
}

export async function getApplicationGEOIPHeaderStatus(
  params: GetApplicationGEOIPHeaderStatusParameters
): Promise<GetApplicationGEOIPHeaderStatusResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/manage/geo_ip_header`,
    { params }
  );
  return response.data;
}

export async function getApplicationXMLRPCHeaderStatus(
  params: GetApplicationXMLRPCHeaderStatusParameters
): Promise<GetApplicationXMLRPCHeaderStatusResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/manage/xmlrpc`,
    { params }
  );
  return response.data;
}

export async function updateDirectPHPExecutionStatus(
  params: UpdateDirectPHPExecutionStatusParameters
): Promise<UpdateDirectPHPExecutionStatusResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/manage/php_direct_execution`,
    { params }
  );
  return response.data;
}

export async function updateApplicationAdminPasswordStatus(
  params: UpdateApplicationAdminPasswordStatusParameters
): Promise<UpdateApplicationAdminPasswordStatusResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/creds/changeAdminCredentials`,
    params
  );
  return response.data;
}

export async function synchronizeApplication(): Promise<SynchronizeApplicationResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(`${baseURL}/app/sync`);
  return response.data;
}

export async function getApplicationTable(
  params: GetApplicationTableParameters
): Promise<GetApplicationTableResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/staging/app/tables`,
    params
  );
  return response.data;
}

export async function synchronizeApp(
  params: SynchronizeApplicationParameters
): Promise<SynchronizeApplicationResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/sync/app`,
    params
  );
  return response.data;
}
export async function htaccessAuthStatus(
  params: HtaccessAuthStatusParameters
): Promise<HtaccessAuthStatusResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/staging/auth/status`,
    params
  );
  return response.data;
}

export async function htaccessUpdateCredentials(
  params: HtaccessUpdateCredentialsParameters
): Promise<HtaccessUpdateCredentialsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/staging/htaccessUpdate`,
    params
  );
  return response.data;
}

export async function stagingApplicationDeploymentLogs(
  params: StagingApplicationDeploymentLogsParameters
): Promise<StagingApplicationDeploymentLogsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/staging/app/logs`,
    params
  );
  return response.data;
}

export async function stagingDeleteLocalBackup(
  params: StagingDeleteLocalBackupParameters
): Promise<StagingDeleteLocalBackupResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/staging/app/deleteBackup`,
    params
  );
  return response.data;
}

export async function botProtectionStatus(
  params: BotProtectionStatusParameters
): Promise<BotProtectionStatusResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/app/malcare`, {
    params,
  });
  return response.data;
}

export async function botProtectionTraffic(
  params: BotProtectionTrafficParameters
): Promise<BotProtectionTrafficResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/malcare/traffic`,
    { params }
  );
  return response.data;
}

export async function botProtectionTrafficSummary(
  params: BotProtectionTrafficSummaryParameters
): Promise<BotProtectionTrafficSummaryResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/malcare/traffic/summary`,
    { params }
  );
  return response.data;
}
export async function getBotProtectionLoginTraffic(
  params: GetBotProtectionLoginTrafficParameters
): Promise<GetBotProtectionLoginTrafficResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/malcare/logins`,
    { params }
  );
  return response.data;
}

export async function getBotProtectionLoginTrafficSummary(
  params: GetBotProtectionLoginTrafficSummaryParameters
): Promise<GetBotProtectionLoginTrafficSummaryResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/malcare/logins/summary`,
    { params }
  );
  return response.data;
}

export async function getBotProtectionBadBotsList(
  params: GetBotProtectionBadBotsListParameters
): Promise<GetBotProtectionBadBotsListResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/malcare/bots/bad`,
    { params }
  );
  return response.data;
}

export async function getBotProtectionWhitelistedIPs(
  params: GetBotProtectionWhitelistedIPsParameters
): Promise<GetBotProtectionWhitelistedIPsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/malcare/whitelisted_ips`,
    { params }
  );
  return response.data;
}

export async function getBotProtectionWhitelistedBots(
  params: GetBotProtectionWhitelistedBotsParameters
): Promise<GetBotProtectionWhitelistedBotsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/malcare/whitelisted_bots`,
    { params }
  );
  return response.data;
}

export async function activateBotProtection(
  params: ActivateBotProtectionParameters
): Promise<ActivateBotProtectionResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.put(
    `${baseURL}/app/malcare/enable`,
    params
  );
  return response.data;
}

export async function deactivateBotProtection(
  params: DeactivateBotProtectionParameters
): Promise<DeactivateBotProtectionResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.put(
    `${baseURL}/app/malcare/disable`,
    params
  );
  return response.data;
}

export async function botProtectionIPWhitelisting(
  params: BotProtectionIPWhitelistingParameters
): Promise<BotProtectionIPWhitelistingResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.put(
    `${baseURL}/app/malcare/whitelist_ip`,
    params
  );
  return response.data;
}

export async function botProtectionBadBotsWhitelisting(
  params: BotProtectionBadBotsWhitelistingParameters
): Promise<BotProtectionBadBotsWhitelistingResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.put(
    `${baseURL}/app/malcare/whitelist_bot`,
    params
  );
  return response.data;
}
