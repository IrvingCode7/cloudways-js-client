import { apiCall, HttpMethod } from "../auth";

/**
 * @interface ChangeAppStatePayload
 * @description Payload to change application access state.
 */
interface ChangeAppStatePayload {
  server_id: number;
  app_id: number;
  state: string;
}

/**
 * Change application access state.
 * @param {ChangeAppStatePayload} payload - The payload for changing the application access state.
 * @returns {Promise<void>} A promise that resolves when the state is changed.
 */

/**
 * @interface GetAppBackupStatusResponse
 * @description Response for getting application backup status.
 */
interface GetAppBackupStatusResponse {
  status: boolean;
  operation_id: number;
}

/**
 * Get application backup status.
 * @param {number} server_id - The server ID.
 * @param {number} app_id - The application ID.
 * @returns {Promise<GetAppBackupStatusResponse>} A promise that resolves to the backup status.
 */

/**
 * @interface CreateAppCredentialsPayload
 * @description Payload to create new application credentials.
 */
interface CreateAppCredentialsPayload {
  server_id: number;
  app_id: number;
  username: string;
  password: string;
}

/**
 * @interface CreateAppCredentialsResponse
 * @description Response for creating new application credentials.
 */
interface CreateAppCredentialsResponse {
  app_cred_id: number;
}

/**
 * Create new application credentials.
 * @param {CreateAppCredentialsPayload} payload - The payload for creating new credentials.
 * @returns {Promise<CreateAppCredentialsResponse>} A promise that resolves to the new credentials.
 */

/**
 * @interface DeleteAppCredentialPayload
 * @description Payload for deleting an app credential.
 */
interface DeleteAppCredentialPayload {
  server_id: number;
  app_id: number;
  app_cred_id: number;
}

/**
 * Delete an app credential.
 * @param {DeleteAppCredentialPayload} payload - Payload for deleting an app credential.
 * @returns {Promise<void>} A promise that resolves when the credential is deleted.
 */

/**
 * @interface DeleteCnamePayload
 * @description Payload for deleting a Cname.
 */
interface DeleteCnamePayload {
  server_id: number;
  app_id: number;
}

/**
 * @interface DeleteCnameResponse
 * @description Response for deleting a Cname.
 */
interface DeleteCnameResponse {
  operation_id: number;
}

/**
 * Delete a Cname.
 * @param {DeleteCnamePayload} payload - Payload for deleting a Cname.
 * @returns {Promise<DeleteCnameResponse>} A promise that resolves when the Cname is deleted.
 */

/**
 * @interface DeleteLocalBackupPayload
 * @description Payload for deleting a local backup.
 */
interface DeleteLocalBackupPayload {
  server_id: number;
  app_id: number;
}

/**
 * @interface DeleteLocalBackupResponse
 * @description Response for deleting a local backup.
 */
interface DeleteLocalBackupResponse {
  operation_id: number;
}

/**
 * Delete a local backup.
 * @param {DeleteLocalBackupPayload} payload - Payload for deleting a local backup.
 * @returns {Promise<DeleteLocalBackupResponse>} A promise that resolves when the local backup is deleted.
 */

/**
 * @interface GetAppCredentialsResponse
 * @description Response for getting all available app credentials.
 */
interface GetAppCredentialsResponse {
  app_creds: {
    id: string;
    sys_password: string;
    sys_user: string;
    ssh_keys: {
      label: string;
      ssh_key_id: string;
    }[];
  }[];
}

/**
 * Get all available app credentials.
 * @param {number} server_id - Server ID.
 * @param {number} app_id - App ID.
 * @returns {Promise<GetAppCredentialsResponse>} A promise that resolves to the app credentials.
 */

/**
 * @interface GetAppSshAccessStatusResponse
 * @description Response for getting the application SSH access status.
 */
interface GetAppSshAccessStatusResponse {
  response: {
    ssh_status: Record<string, boolean>;
  };
}

/**
 * Get application SSH access status.
 * @param {number} server_id - Server ID.
 * @param {number} app_id - App ID.
 * @returns {Promise<GetAppSshAccessStatusResponse>} A promise that resolves to the SSH access status.
 */

/**
 * @interface GetApplicationAccessStateResponse
 * @description Response for getting the application access state.
 */
interface GetApplicationAccessStateResponse {
  response: {
    app_status: Record<string, boolean>;
  };
  status: boolean;
}

/**
 * Get the application access state.
 * @param {number} server_id - Numeric ID of the server.
 * @param {number} app_id - Numeric ID of the application.
 * @returns {Promise<GetApplicationAccessStateResponse>} A promise that resolves to the application access state.
 */

/**
 * @interface CronJob
 * @description Basic structure of a cron job.
 */
interface CronJob {
  cmd_type: string;
  command: string;
  days: string;
  hours: string;
  minutes: string;
  months: string;
  weekdays: string;
}

/**
 * @interface GetCronListResponse
 * @description Response for getting the cron list.
 */
interface GetCronListResponse {
  basic: CronJob[];
  script: string;
}

/**
 * Get the cron list for the server.
 * @param {number} server_id - Numeric ID of the server.
 * @param {number} app_id - Numeric ID of the application.
 * @returns {Promise<GetCronListResponse>} A promise that resolves to the cron list.
 */

/**
 * @interface GetFPMSettingsResponse
 * @description Response for getting the FPM settings.
 */
interface GetFPMSettingsResponse {
  response: {
    fpm_enabled: boolean;
    settings: string;
  };
}

/**
 * Get the FPM settings for your application.
 * @param {number} server_id - Numeric ID of the server.
 * @param {number} app_id - Numeric ID of the application.
 * @returns {Promise<GetFPMSettingsResponse>} A promise that resolves to the FPM settings.
 */

/**
 * @interface VCLListItem
 * @description Configuration list items for Varnish.
 */
interface VCLListItem {
  method: string;
  type: string;
  value: string;
}

/**
 * @interface GetVarnishSettingsResponse
 * @description Response interface for getting Varnish settings.
 */
interface GetVarnishSettingsResponse {
  response: {
    varnish_app_enabled: boolean;
    varnish_enabled: boolean;
    vcl_list: VCLListItem[];
  };
}

/**
 * Get the Varnish settings for an application.
 * @param {number} server_id - Numeric ID of the server.
 * @param {number} app_id - Numeric ID of the application.
 * @returns {Promise<GetVarnishSettingsResponse>} A promise that resolves to the Varnish settings.
 */

/**
 * Reset file permissions for an application.
 * @param {number} server_id - Numeric ID of the server.
 * @param {number} app_id - Numeric ID of the application.
 * @param {string} ownership - Type of ownership (master_user, sys_user).
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */

/**
 * @interface RestoreAppResponse
 * @description Response interface for restoring an app.
 */
interface RestoreAppResponse {
  operation_id: number;
}

/**
 * Restore an app to a previous version.
 * @param {number} server_id - Numeric ID of the server.
 * @param {number} app_id - Numeric ID of the application.
 * @param {string} time - Timestamp of restore point.
 * @param {string} type - Type of restore (complete, web, database).
 * @returns {Promise<RestoreAppResponse>} A promise that resolves to the operation ID.
 */

/**
 * @interface RollbackRestoreResponse
 * @description Response interface for rollback of a restore action.
 */
interface RollbackRestoreResponse {
  operation_id: number;
}

/**
 * Rollback the last restore action for an app.
 * @param {number} server_id - Numeric ID of the server.
 * @param {number} app_id - Numeric ID of the application.
 * @returns {Promise<RollbackRestoreResponse>} A promise that resolves to the operation ID.
 */

/**
 * @interface BackupResponse
 * @description Response interface for taking a backup of an app.
 */
interface BackupResponse {
  operation_id: number;
}

/**
 * Take a backup of an application.
 * @param {number} server_id - Numeric ID of the server.
 * @param {number} app_id - Numeric ID of the application.
 * @returns {Promise<BackupResponse>} A promise that resolves to the operation ID.
 */

/**
 * Update aliases (secondary domains) for an application.
 * @param {number} server_id - Numeric ID of the server.
 * @param {number} app_id - Numeric ID of the application.
 * @param {string[]} aliases - List of domains.
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */

/**
 * Interface for UpdateAppCName Request Parameters
 * @interface
 */
interface UpdateAppCNameParams {
  server_id: number;
  app_id: number;
  cname: string;
}

/**
 * Interface for UpdateAppCName Response
 * @interface
 */
interface UpdateAppCNameResponse {
  operation_id: number;
}

/**
 * Updates the CName of the application.
 *
 * @param {UpdateAppCNameParams} params - Request parameters containing server_id, app_id and cname
 * @returns {Promise<UpdateAppCNameResponse>} - Response containing operation_id
 * @throws {Error} Throws error if something goes wrong
 */

/**
 * Interface for UpdateAppCredential Request Parameters
 * @interface
 */
interface UpdateAppCredentialParams {
  server_id: number;
  app_id: number;
  username: string;
  password: string;
  app_cred_id: number;
}

/**
 * Interface for UpdateAppCredential Response
 * @interface
 */
interface UpdateAppCredentialResponse {}

/**
 * Updates the credential of the application.
 *
 * @param {UpdateAppCredentialParams} params - Request parameters containing server_id, app_id, username, password, and app_cred_id
 * @returns {Promise<UpdateAppCredentialResponse>} - Empty Response
 * @throws {Error} Throws error if something goes wrong
 */

/**
 * Interface for UpdateAppSSHAccessStatus Request Parameters
 * @interface
 */
interface UpdateAppSSHAccessStatusParams {
  server_id: number;
  app_id: number;
  update_perms_action: string;
}

/**
 * Interface for UpdateAppSSHAccessStatus Response
 * @interface
 */
interface UpdateAppSSHAccessStatusResponse {
  status: boolean;
  confirmation: boolean;
}

/**
 * Updates the SSH Access status of the application.
 *
 * @param {UpdateAppSSHAccessStatusParams} params - Request parameters containing server_id, app_id and update_perms_action
 * @returns {Promise<UpdateAppSSHAccessStatusResponse>} - Response containing status and confirmation
 * @throws {Error} Throws error if something goes wrong
 */




export async function changeAppState(
  payload: ChangeAppStatePayload
): Promise<void> {
  const endpoint = "https://api.cloudways.com/api/v1/app/state";
  const method = HttpMethod.POST;
  const response = await apiCall(endpoint, method, payload);
 return response as void;
}

export async function getAppBackupStatus(
  server_id: number,
  app_id: number
): Promise<GetAppBackupStatusResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/app/manage/backup?server_id=${server_id}&app_id=${app_id}`;
  const method = HttpMethod.GET;
  const response = await apiCall(endpoint, method);
  return response as GetAppBackupStatusResponse;
}

export async function createAppCredentials(
  payload: CreateAppCredentialsPayload
): Promise<CreateAppCredentialsResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/app/creds";
  const method = HttpMethod.POST;
  const response = await apiCall(endpoint, method, payload);
  return response as CreateAppCredentialsResponse;
}

export async function deleteAppCredential(
  payload: DeleteAppCredentialPayload
): Promise<void> {
  const endpoint = `https://api.cloudways.com/api/v1/app/creds/${payload.app_cred_id}`;
  const method = HttpMethod.DELETE;
  await apiCall(endpoint, method, payload);
}

export async function deleteCname(
  payload: DeleteCnamePayload
): Promise<DeleteCnameResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/app/manage/cname";
  const method = HttpMethod.DELETE;
  const response = await apiCall(endpoint, method, payload);
  return response as DeleteCnameResponse;
}

export async function deleteLocalBackup(
  payload: DeleteLocalBackupPayload
): Promise<DeleteLocalBackupResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/app/manage/backup";
  const method = HttpMethod.DELETE;
  const response = await apiCall(endpoint, method, payload);
  return response as DeleteLocalBackupResponse;
}

export async function getAppCredentials(
  server_id: number,
  app_id: number
): Promise<GetAppCredentialsResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/app/creds?server_id=${server_id}&app_id=${app_id}`;
  const method = HttpMethod.GET;
  const response = await apiCall(endpoint, method);
  return response as GetAppCredentialsResponse;
}

export async function getAppSshAccessStatus(
  server_id: number,
  app_id: number
): Promise<GetAppSshAccessStatusResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/app/getAppSshPerms?server_id=${server_id}&app_id=${app_id}`;
  const method = HttpMethod.GET;
  const response = await apiCall(endpoint, method);
  return response as GetAppSshAccessStatusResponse;
}

export async function getApplicationAccessState(
  server_id: number,
  app_id: number
): Promise<GetApplicationAccessStateResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/app/getApplicationAccess?server_id=${server_id}&app_id=${app_id}`;
  const response = await apiCall(endpoint, HttpMethod.GET);
  return response as GetApplicationAccessStateResponse;
}

export async function getCronList(
  server_id: number,
  app_id: number
): Promise<GetCronListResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/app/manage/cronList?server_id=${server_id}&app_id=${app_id}`;
  const response = await apiCall(endpoint, HttpMethod.GET);
  return response as GetCronListResponse;
}

export async function getFPMSettings(
  server_id: number,
  app_id: number
): Promise<GetFPMSettingsResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/app/manage/fpm_setting?server_id=${server_id}&app_id=${app_id}`;
  const response = await apiCall(endpoint, HttpMethod.GET);
  return response as GetFPMSettingsResponse;
}

export async function getVarnishSettings(
  server_id: number,
  app_id: number
): Promise<GetVarnishSettingsResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/app/manage/varnish_setting?server_id=${server_id}&app_id=${app_id}`;
  const response = await apiCall(endpoint, HttpMethod.GET);
  return response as GetVarnishSettingsResponse;
}

export async function resetFilePermissions(
  server_id: number,
  app_id: number,
  ownership: string
): Promise<void> {
  const endpoint = `https://api.cloudways.com/api/v1/app/manage/reset_permissions`;
  const payload = { server_id, app_id, ownership };
  await apiCall(endpoint, HttpMethod.POST, payload);
}

export async function restoreApp(
  server_id: number,
  app_id: number,
  time: string,
  type: string
): Promise<RestoreAppResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/app/manage/restore`;
  const payload = { server_id, app_id, time, type };
  const response = await apiCall(endpoint, HttpMethod.POST, payload);
  return response as RestoreAppResponse;
}

export async function rollbackRestore(
  server_id: number,
  app_id: number
): Promise<RollbackRestoreResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/app/manage/rollback`;
  const payload = { server_id, app_id };
  const response = await apiCall(endpoint, HttpMethod.POST, payload);
  return response as RollbackRestoreResponse;
}

export async function takeBackup(
  server_id: number,
  app_id: number
): Promise<BackupResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/app/manage/takeBackup`;
  const payload = { server_id, app_id };
  const response = await apiCall(endpoint, HttpMethod.POST, payload);
  return response as BackupResponse;
}

export async function updateAppAliases(
  server_id: number,
  app_id: number,
  aliases: string[]
): Promise<void> {
  const endpoint = `https://api.cloudways.com/api/v1/app/manage/aliases`;
  const payload = { server_id, app_id, aliases };
  await apiCall(endpoint, HttpMethod.POST, payload);
}
