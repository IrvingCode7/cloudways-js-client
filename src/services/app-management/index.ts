import { apiCall } from "../core";
import { HttpMethod } from "../core/types";
import { getAndWaitForOperationStatusCompleted } from "../operation";
import type { OperationStatus } from "../operation/types";
import type {
  AppBackupStatusResponse,
  AppCredentialsResponse,
  SSHAccessStatusResponse,
  ApplicationAccessStateResponse,
  CronListResponse,
  FpmSettingsResponse,
  VarnishSettingsResponse,
  getAppSettingResponse,
  UpdateGeoIpHeaderResponse,
  UpdateAppXMLRPCHeaderResponse,
} from "./types";

/**
 * Change the access state of an application on a server.
 * @param {number} serverId - The ID of the server.
 * @param {number} appId - The ID of the application.
 * @param {string} state - The new state to set for the application.
 * @returns {Promise<void[]>} - Promise resolving to an empty array upon successful state change.
 * @example
 * []
 */
export function changeAppAccessState(
  serverId: number,
  appId: number,
  state: string
): Promise<void[]> {
  const data = {
    server_id: serverId,
    app_id: appId,
    state: state,
  };
  return apiCall("/app/state", HttpMethod.POST, data);
}

/**
 * Retrieve the backup status of an application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<OperationStatus>} - Promise resolving to an object containing the backup status.
 * The backup status object includes a boolean indicating the status and an operation ID
 * And it could sometimes return additional properties
 * @example
 * {
 *   "status": true,
 *   "operation_id": 123456
 * }
 * Operation polling will return backup_dates (An array of restore points available for  the app)
 * and local_backup_exists (a local backup created before restorinig the app)
 */
export async function getAppBackupStatus(
  serverId: number,
  appId: number
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  const req = await apiCall("/app/manage/backup", HttpMethod.GET, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Create new application credentials.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} username - The new username.
 * @param {string} password - The new password.
 * @returns {Promise<{app_cred_id: number}>} - Promise resolving to an object containing the ID of the created app credential.
 * @example
 * {
 *    "app_cred_id": 12345
 * }
 */
export function createAppCredentials(
  serverId: number,
  appId: number,
  username: string,
  password: string
): Promise<{ app_cred_id: number }> {
  const data = {
    server_id: serverId,
    app_id: appId,
    username: username,
    password: password,
  };
  return apiCall("/app/creds", HttpMethod.POST, data).then((response) => ({
    app_cred_id: response.app_cred_id,
  }));
}

/**
 * Delete an application credential.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {number} appCredId - The numeric ID of the application credential to delete.
 * @returns {Promise<void[]>} - Promise indicating the success of the operation.
 * @example
 * []
 * The response is an empty array.
 */
export function deleteAppCredential(
  serverId: number,
  appId: number,
  appCredId: number
): Promise<void[]> {
  const data = {
    server_id: serverId,
    appId: appId,
  };
  return apiCall(`/app/creds/${appCredId}`, HttpMethod.DELETE, data);
}

/**
 * Delete CNAME records associated with an application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<OperationStatus>} - Promise resolving to an object containing the operation ID.
 * The operation ID indicates the status of the delete operation.
 * @example
 * {
 *   "operation_id": 123456
 * }
 */
export async function deleteCname(
  serverId: number,
  appId: number
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  const req = await apiCall("/app/manage/cname", HttpMethod.DELETE, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Delete a local backup associated with an application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<OperationStatus>} - Promise resolving to an object containing the operation ID.
 * The operation ID indicates the status of the delete operation.
 * @example
 * {
 *   "operation_id": 123456
 * }
 */
export async function deleteLocalBackup(
  serverId: number,
  appId: number
): Promise<OperationStatus>  {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  const req = await apiCall("/app/manage/backup", HttpMethod.DELETE, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Retrieve all available App Credentials.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<AppCredentialsResponse>} - Promise resolving to an object containing information about App Credentials.
 * @example
 * {
 *   "app_creds" : [ {
 *     "id" : "12345",
 *     "sys_password" : "12345678",
 *     "sys_user" : "abc12345",
 *     "ssh_keys" : [ {
 *       "label" : "new ssh key",
 *       "ssh_key_id" : "111"
 *     } ]
 *   } ]
 * }
 */
export function getAppCredentials(
  serverId: number,
  appId: number
): Promise<AppCredentialsResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/creds", HttpMethod.GET, data).then(
    (response) => response as AppCredentialsResponse
  );
}

/**
 * Get the SSH access status for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<SSHAccessStatusResponse>} - Promise resolving to an object containing the SSH access status.
 * @example
 * {
 *   response: {
 *     ssh_status: {
 *       "abcdefgh": true
 *     }
 *   }
 * }
 */
export function getApplicationSshAccessStatus(
  serverId: number,
  appId: number
): Promise<SSHAccessStatusResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/getAppSshPerms", HttpMethod.GET, data).then(
    (response) => response as SSHAccessStatusResponse
  );
}

/**
 * Get the application access state.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<ApplicationAccessStateResponse>} - Promise resolving to an object containing the application access status.
 * @example
 * {
 *   response: {
 *     app_status: {
 *       "abcdefg": true
 *     }
 *   },
 *   status: true
 * }
 */
export function getApplicationAccessState(
  serverId: number,
  appId: number
): Promise<ApplicationAccessStateResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/getApplicationAccess", HttpMethod.GET, data).then(
    (response) => response as ApplicationAccessStateResponse
  );
}

/**
 * Get the list of cron jobs for the server.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<CronListResponse>} - Promise resolving to an object containing the cron list.
 * @example
 * {
 *   basic: [
 *     {
 *       cmd_type: "php",
 *       command: "test.php",
 *       days: "1",
 *       hours: "0",
 *       minutes: "0",
 *       months: "1",
 *       weekdays: "*"
 *     },
 *     {
 *       cmd_type: "wget",
 *       command: "http://example.com",
 *       days: "1",
 *       hours: "0",
 *       minutes: "0",
 *       months: "1",
 *       weekdays: "*"
 *     }
 *   ],
 *   script: "0 0 1 1 * php test.php"
 * }
 */
export function getCronList(
  serverId: number,
  appId: number
): Promise<CronListResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/manage/cronList", HttpMethod.GET, data).then(
    (response) => response as CronListResponse
  );
}

/**
 * Get the FPM settings for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<FpmSettingsResponse>} - Promise resolving to an object containing the FPM settings.
 * @example
 * {
 *   response: {
 *     fpm_enabled: true,
 *     settings: ";php_admin_flag[log_errors] = on\n;php_admin_value[memory_limit] = 32M\n;php_flag[display_errors] = off\n"
 *   }
 * }
 */
export function getFpmSettings(
  serverId: number,
  appId: number
): Promise<FpmSettingsResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/manage/fpm_setting", HttpMethod.GET, data).then(
    (response) => response as FpmSettingsResponse
  );
}

/**
 * Get the Varnish settings for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<VarnishSettingsResponse>} - Promise resolving to an object containing the Varnish settings.
 * @example
 * {
 *   response: {
 *     varnish_app_enabled: true,
 *     varnish_enabled: true,
 *     vcl_list: [
 *       { method: "exclude", type: "url", value: "/index.php" },
 *       { method: "exclude", type: "cookie", value: "/dodo.php" }
 *     ]
 *   }
 * }
 */
export function getVarnishSettings(
  serverId: number,
  appId: number
): Promise<VarnishSettingsResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/manage/varnish_setting", HttpMethod.GET, data).then(
    (response) => response as VarnishSettingsResponse
  );
}

/**
 * Reset file permissions for the specified application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} ownership - The ownership value to set for the files.
 * @returns {Promise<void>} - Promise that resolves when the file permissions are reset successfully.
 */
export function resetFilePermissions(
  serverId: number,
  appId: number,
  ownership: string
): Promise<void> {
  const data = {
    server_id: serverId,
    app_id: appId,
    ownership: ownership,
  };
  return apiCall("/app/manage/reset_permissions", HttpMethod.POST, data);
}

/**
 * Restore app to a previous version from backup
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} time - The time to which the application will be restored.
 * @param {string} type - The type of restoration to perform.
 * @returns {Promise<OperationStatus>} - Promise resolving to an object containing the operation ID of the restoration process.
 * @example
 * {
 *   operation_id: 123456
 * }
 */
export async function restoreApp(
  serverId: number,
  appId: number,
  time: string,
  type: string
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
    time: time,
    type: type,
  };
  const req = await apiCall("/app/manage/restore", HttpMethod.POST, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Rollback last restore action
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<OperationStatus>} - Promise resolving to an object containing the operation ID of the rollback process.
 * @example
 * {
 *   operation_id: 123456
 * }
 */
export async function rollbackRestore(
  serverId: number,
  appId: number
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  const req = await apiCall("/app/manage/rollback", HttpMethod.POST, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Initiate a backup process for the specified application on the server.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<OperationStatus>} - Promise resolving to an object containing the operation ID of the backup process.
 * @example
 * {
 *   operation_id: 123456
 * }
 */
export async function aplicationBackup(
  serverId: number,
  appId: number
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  const req = await apiCall("/app/manage/takeBackup", HttpMethod.POST, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Update the aliases for an application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string[]} aliases - List of domains like my.example.com, console.example.com.
 * @returns {Promise<void>} - Promise indicating the success of the operation.
 */
export function updateAppAlias(
  serverId: number,
  appId: number,
  aliases: string[]
): Promise<void> {
  const data = {
    server_id: serverId,
    app_id: appId,
    aliases: aliases,
  };
  return apiCall("/app/manage/takeBackup", HttpMethod.POST, data);
}

/**
 * Update the CNAME for an application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} cname - The new CNAME to set for the application.
 * @returns {Promise<OperationStatus>} - Promise resolving to an object containing the operation ID.
 */
export async function updateAppCname(
  serverId: number,
  appId: number,
  cname: string
): Promise<OperationStatus>  {
  const data = {
    server_id: serverId,
    app_id: appId,
    cname: cname,
  };
  const req = await apiCall("/app/manage/cname", HttpMethod.POST, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);

}

/**
 * Update an application credential.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} username - The new username for the credential.
 * @param {string} password - The new password for the credential.
 * @param {number} app_cred_id - The numeric ID of the application credential to update.
 * @returns {Promise<void[]>} - Promise resolving to an empty array upon successful update.
 */
export function updateAppCredential(
  serverId: number,
  appId: number,
  username: string,
  password: string,
  app_cred_id: number
): Promise<void[]> {
  const data = {
    server_id: serverId,
    app_id: appId,
    username: username,
    password: password,
    app_cred_id: app_cred_id,
  };
  return apiCall(`/app/creds/${app_cred_id}`, HttpMethod.PUT, data);
}

/**
 * Update the SSH access status for an application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} update_perms_action - The action to update SSH access permissions.
 * @returns {Promise<{ status: boolean; confirmation: boolean }>} - Promise resolving to an object containing the status of the update and confirmation of the action.
 */
export function updateApplicationSshAccessStatus(
  serverId: number,
  appId: number,
  update_perms_action: string
): Promise<{ status: boolean; confirmation: boolean }> {
  const data = {
    server_id: serverId,
    app_id: appId,
    update_perms_action: update_perms_action,
  };
  return apiCall("/app/updateAppSshPerms", HttpMethod.POST, data).then(
    (response) => ({
      status: response.status,
      confirmation: response.confirmation,
    })
  );
}

/**
 * Update the cron list for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} crons - The cron schedule(s) to be updated.
 * @param {boolean} is_script - A flag indicating whether the provided cron(s) is a single script or an array of cron objects.
 * @returns {Promise<void>} - Promise indicating the success of the operation.
 */
export function updateCronList(
  serverId: number,
  appId: number,
  crons: string,
  is_script: boolean
): Promise<void> {
  const data = {
    server_id: serverId,
    app_id: appId,
    crons: crons,
    is_script: is_script,
  };
  return apiCall("/app/manage/cronList", HttpMethod.POST, data);
}

/**
 * Update the database password for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} password - The new password for the database.
 * @returns {Promise<void>} - Promise indicating the success of the operation.
 */
export function updateDBPassword(
  serverId: number,
  appId: number,
  password: string
): Promise<void> {
  const data = {
    server_id: serverId,
    app_id: appId,
    password: password,
  };
  return apiCall("/app/manage/dbPassword", HttpMethod.POST, data);
}

/**
 * Update the FPM settings for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} fpm_setting - The new FPM settings for the application.
 * @returns {Promise<void>} - Promise indicating the success of the operation.
 */
export function updateFPMsettings(
  serverId: number,
  appId: number,
  fpm_setting: string
): Promise<void> {
  const data = {
    server_id: serverId,
    app_id: appId,
    fpm_setting: fpm_setting,
  };
  return apiCall("/app/manage/fpm_setting", HttpMethod.POST, data);
}

/**
 * Update the symlink for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} symlink - The new symlink value.
 * @returns {Promise<void>} - Promise indicating the success of the operation.
 */
export function updateSymlink(
  serverId: number,
  appId: number,
  symlink: string
): Promise<void> {
  const data = {
    server_id: serverId,
    app_id: appId,
    symlink: symlink,
  };
  return apiCall("/app/manage/symlink", HttpMethod.POST, data);
}

/**
 * Update the Varnish settings for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} vcl_list - The Varnish configuration settings.
 * @returns {Promise<OperationStatus>} - Promise resolving to an object containing the operation ID.
 */
export async function updateVarnishSettings(
  serverId: number,
  appId: number,
  vcl_list: string
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
    vcl_list: vcl_list,
  };
  const req = await apiCall("/app/manage/varnish_setting", HttpMethod.POST, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Update the web root directory for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} webroot - The new web root directory path.
 * @returns {Promise<void>} - Promise indicating the success of the operation.
 */
export function updateWebroot(
  serverId: number,
  appId: number,
  webroot: string
): Promise<void> {
  const data = {
    server_id: serverId,
    app_id: appId,
    webroot: webroot,
  };
  return apiCall("/app/manage/webroot", HttpMethod.POST, data);
}

/**
 * Update the CORS (Cross-Origin Resource Sharing) headers for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} corsHeaders - The new CORS headers to be set.
 * @returns {Promise<OperationStatus>} - Promise resolving to an object indicating the status of the operation and the operation ID.
 */
export async function updateCorsHeaders(
  serverId: number,
  appId: number,
  corsHeaders: string
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
    corsHeaders: corsHeaders,
  };
  const req = await apiCall("/app/cors_header", HttpMethod.POST, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Get the WebP redirection status for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} status - The WebP redirection status. Possible values are "enable" or "disable".
 * @returns {Promise<OperationStatus>} - Promise resolving to an object with the "response" property containing the operation ID.
 * @example
 * {
 *   "response": {
 *     "operation_id": 37851
 *   }
 * }
 */
export async function getAplicacionWebPRedirectionStatus(
  serverId: number,
  appId: number,
  status: string
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
    status: status,
  };
  const req = await apiCall("/app/manage/webP", HttpMethod.GET, data);
  return await getAndWaitForOperationStatusCompleted(req.response.operation_id);
}

/**
 * Enable or disable forced HTTPS redirection.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} status - The status of forced HTTPS redirection. Possible values are "enable" or "disable".
 * @returns {Promise<OperationStatus>} - Promise resolving to an object with the "status" and "operation_id" properties.
 * @example
 * {
 *   "status": true,
 *   "operation_id": 12345
 * }
 */
export async function enforceHTTPS(
  serverId: number,
  appId: number,
  status: string
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
    status: status,
  };
  const req = await apiCall("/app/manage/enforce_https", HttpMethod.POST, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Retrieves the setting values for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<getAppSettingResponse>} - Promise resolving to an object containing the application setting values.
 * @example
 * {
 *   "status": true,
 *   "application_id": "1234",
 *   "from_address": null,
 *   "cors_header": 0,
 *   "enforce_https": 0
 * }
 */
export function getAppSettingValue(
  serverId: number,
  appId: number
): Promise<getAppSettingResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/get_settings_value", HttpMethod.GET, data).then(
    (response) => response as getAppSettingResponse
  );
}

/**
 * Update the status of the GEO IP header for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} status - The status to set for the GEO IP header. Possible values are "enable" or "disable".
 * @returns {Promise<UpdateGeoIpHeaderResponse>} - Promise resolving to an object containing the updated status of the GEO IP header.
 * @example
 * {
  "response" : {
    "geo_ip" : {
      "abcdefg" : true
    }
  },
  "status" : true
}
 */
export function updateAppGeoIpHeaderStatus(
  serverId: number,
  appId: number,
  status: string
): Promise<UpdateGeoIpHeaderResponse> {
  const data = {
    server_ip: serverId,
    app_id: appId,
    status: status,
  };
  return apiCall("/app/manage/geo_ip_header", HttpMethod.POST, data).then(
    (response) => response as UpdateGeoIpHeaderResponse
  );
}

/**
 * Update the status of the XML-RPC header for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} status - The status to set for the XML-RPC header. Possible values are "enable" or "disable".
 * @returns {Promise<UpdateAppXMLRPCHeaderResponse>} - Promise resolving to an object containing the updated status of the XML-RPC header.
 * @example
 * {
  "response" : {
    "xml_rpc" : {
      "abcdefg" : true
    }
  },
  "status" : true
}
 */
export function updateAppXMLRCPheaderStatus(
  serverId: number,
  appId: number,
  status: string
): Promise<UpdateAppXMLRPCHeaderResponse> {
  const data = {
    server_ip: serverId,
    app_id: appId,
    status: status,
  };
  return apiCall("/app/manage/xmlrpc", HttpMethod.POST, data).then(
    (response) => response as UpdateAppXMLRPCHeaderResponse
  );
}

/**
 * Update the device detection status for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} status - The status to set for device detection. Possible values are "enable" or "disable".
 * @returns {Promise<OperationStatus>} - Promise resolving to an object containing the status of the operation.
 * @example
 * {
  "status" : true,
  "operation_id" : 12345
}
 */
export async function updateDeviceDetentionStatus(
  serverId: number,
  appId: number,
  status: string
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
    status: status,
  };
  const req = await apiCall("/app/device/detection", HttpMethod.GET, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Update the ignore query string status for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} status - The status to set for ignoring query strings. Possible values are "enable" or "disable".
 * @returns {Promise<OperationStatus>} - Promise resolving to an object containing the status of the operation.
 * @example
 * {
  "status" : true,
  "operation_id" : 12345
}
 */
export async function updateIgnoreQueryStringStatus(
  serverId: number,
  appId: number,
  status: string
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
    status: status,
  };
  const req = await apiCall("/app/ignore/query_string", HttpMethod.GET, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Update the direct PHP execution status for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} status - The status to set for direct PHP execution. Possible values are "enable" or "disable".
 * @returns {Promise<OperationStatus>} - Promise resolving to an object containing the status of the operation.
 * @example
 * {
  "status" : true,
  "operation_id" : 12345
}
 */
export async function updateDirectPHPExecutionStatus(
  serverId: number,
  appId: number,
  status: string
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
    status: status,
  };
  const req = await apiCall("/app/manage/php_direct_execution", HttpMethod.GET, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Update the cron optimizer status for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} status - The status to set for the cron optimizer. Possible values are "enable" or "disable".
 * @returns {Promise<OperationStatus>} - Promise resolving to an object containing the status of the operation.
 * @example
 * {
  "status" : true,
  "operation_id" : 12345
}
 */
export async function updateCronOptimizerStatus(
  serverId: number,
  appId: number,
  status: string
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
    status: status,
  };
  const req = await apiCall("/app/manage/cron_setting", HttpMethod.GET, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Update the admin password for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} password - The new password for the application admin.
 * @returns {Promise<OperationStatus>} - Promise resolving to an object containing the operation ID.
 * @example
 * {"response" : { operation_id: 18591 }}
 */
export async function updateAppAdminPassword(
  serverId: number,
  appId: number,
  password: string
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
    password: password,
  };
  const req = await apiCall("/app/creds/changeAdminCredentials",HttpMethod.POST,data);
  return await getAndWaitForOperationStatusCompleted(req.response.operation_id);

}


