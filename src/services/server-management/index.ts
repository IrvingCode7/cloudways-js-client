import { apiCall } from "../core";
import { HttpMethod } from "../core/types";
import type { getServerSettingsResponse,
    getDiskCleanupResponse
 } from "./types";
 import { getAndWaitForOperationStatusCompleted } from "../operation";
 import type { OperationStatus } from "../operation/types";


/**
 * Initiates a backup for the specified server.
 * @param {number} serverId - The numeric ID of the server.
 * @returns {Promise<OperationStatus> } A Promise that resolves to an object containing the operation ID.
 * @example
 * {
  "operation_id" : 12345
}
 */
export async function backupServer(
  serverId: number
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
  };
 const req = await apiCall("/server/manage/backup", HttpMethod.POST, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Deletes local backups for the specified server.
 * @param {number} serverId - The numeric ID of the server.
 * @returns {Promise<void>} A Promise that resolves once the local backups are deleted.
 */
export function deleteLocalServerBackups(serverId: number): Promise<void> {
  const data = {
    server_id: serverId,
  };
  return apiCall("/server/manage/remove_local_backup", HttpMethod.POST, data);
}

/**
 * Retrieves monitoring graph data for the specified server.
 * @param {number} serverId - The numeric ID of the server.
 * @param {string} target - The target for the monitoring graph.
 * @param {string} duration - The duration for which the data should be retrieved.
 * @param {string} timezone - The timezone for the data.
 * @param {string} output_format - The output format for the data.
 * @returns {Promise<{ contents: string }>} A Promise that resolves with the monitoring graph contents.
 * @example
 * {
  "contents" : ""
}
 */
export function getMonitoringGraph(
  serverId: number,
  target: string,
  duration: string,
  timezone: string,
  output_format: string
): Promise<{ contents: string }> {
  const data = {
    server_id: serverId,
    target: target,
    duration: duration,
    timezone: timezone,
    output_format: output_format,
  };
  return apiCall("/server/monitor/detail", HttpMethod.GET, data).then(
    (response) => ({
      contents: response.contents,
    })
  );
}

/**
 * Retrieves server settings and installed package versions.
 * @param {number} serverId - Numeric id of the server.
 * @returns {Promise<getServerSettingsResponse>} - Promise containing server settings response.
 * @example
 * {
  "settings" : {
    "character_set_server" : "ascii",
    "date.timezone" : "",
    "direct_access": "enable",
    "display_errors" : "Off",
    "error_reporting" : "E_ALL & ~E_DEPRECATED & ~E_STRICT",
    "execution_limit" : "60",
    "innodb_buffer_pool_size" : "",
    "innodb_lock_wait_timeout" : "",
    "max_connections" : "150",
    "max_input_time" : "60",
    "max_input_vars" : "2500",
    "memory_limit" : "128",
    "mod_xdebug": "disable",
    "package_versions" : {
      "fpm":"enable",
      "mariadb" : "",
      "mysql" : "5.5",
      "php" : "5.6",
      "redis" : ""
    },
    "short_open_tag": "Off",
    "ssl_protocols":"1.0,1.1,1.2,1.3",
    "static_cache_expiry" : "43200",
    "upload_size" : "10",
    "varnish_default_ttl": "4h",
    "wait_timeout" : ""
  }
}
 */
export function getServerSettings(
  serverId: number
): Promise<getServerSettingsResponse> {
  const data = {
    server_id: serverId,
  };
  return apiCall("/server/manage/settings", HttpMethod.GET, data).then(
    (response) => response as getServerSettingsResponse
  );
}

/**
 * Retrieves maintenance window settings for the specified server.
 * @param {number} serverId - Numeric id of the server.
 * @returns {Promise<{ maintenance_settings: { day: string, hour: number } }>} - Promise containing maintenance window settings.
 * @example
 * {
  "maintenance_settings": {
                      "day": 'Monday',
                      "hour": 2
                    }
}
 */
export function getServerMaintenanceWindowSettings(serverId: number): Promise<{
  maintenance_settings: {
    day: string;
    hour: number;
  };
}> {
  const data = {
    server_id: serverId,
  };
  return apiCall(
    "/server/manage/getMaintenanceWinSettings",
    HttpMethod.GET,
    data
  ).then((response) => ({
    maintenance_settings: {
      day: response.maintenance_settings.day,
      hour: response.maintenance_settings.hour,
    },
  }));
}

/**
 * Updates maintenance window settings for the specified server.
 * @param {number} serverId - Numeric id of the server.
 * @param {string} day - Maintenance day.
 * @param {number} hour - Maintenance hour.
 * @returns {Promise<{ message: string }>} - Promise containing a message indicating the success of the operation.
 * @exmaple
 * {
    "message": 'Maintenance Time Successfully Update',
 }
 */
export function updateServerMaintenanceWindowSettings(
    serverId: number,
    day : string,
    hour : number
): Promise<{ message : string}> {
  const data = {
    server_id: serverId,
    day : day,
    hour : hour
  };
  return apiCall("/server/manage/postMaintenanceWinSettings",HttpMethod.POST,data).then(
    (response) => ({
        message : response.message
     }));
}


/**
 * Updates backup settings for the specified server.
 * @param {number} serverId - Numeric id of the server.
 * @param {boolean} local_backups - Indicates whether local backups are enabled.
 * @param {string} backup_frequency - Frequency of backups.
 * @param {string} backup_retention - Retention policy for backups.
 * @param {string} backup_time - Time for backup execution.
 * @returns {Promise<void>} - Promise indicating the success of the operation.
 */
export function updateBackupSettings(
    serverId: number,
    local_backups : boolean,
    backup_frequency : string,
    backup_retention : string,
    backup_time : string    
): Promise<void> {
  const data = {
    server_id: serverId,
    local_backups : local_backups,
    backup_frequency : backup_frequency,
    backup_retention : backup_retention,
    backup_time : backup_time
  };
  return apiCall("/server/manage/backupSettings",HttpMethod.POST,data);
}

/**
 * Updates the master password for the specified server.
 * @param {number} serverId - Numeric id of the server.
 * @param {string} password - New master password for the server.
 * @returns {Promise<void>} - Promise indicating the success of the operation.
 */
export function updateMasterPassword(
    serverId: number,
    password : string   
): Promise<void> {
  const data = {
    server_id: serverId,
    password : password
  };
  return apiCall("/server/manage/masterPassword",HttpMethod.POST,data);
}

/**
 * Updates the master username for the specified server.
 * @param {number} serverId - Numeric id of the server.
 * @param {string} username - New master username for the server.
 * @returns {Promise<void>} - Promise indicating the success of the operation.
 */
export function updateMasterUsername(
    serverId: number,
    username : string   
): Promise<void> {
  const data = {
    server_id: serverId,
    username : username
  };
  return apiCall("/server/manage/masterUsername",HttpMethod.POST,data);
}

/**
 * Updates the package version for the specified server.
 * @param {number} serverId - Numeric id of the server.
 * @param {string} package_name - Name of the package to be updated.
 * @param {string} package_version - New version of the package.
 * @returns {Promise<OperationStatus>} - Promise containing the operation id.
 * @example
 * {
  "operation_id" : 12345
}
 */
export async function updateServerPackage(
    serverId: number,
    package_name : string,
    package_version : string 
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    package_name : package_name,
    package_version : package_version
  };
  const req = await apiCall("/server/manage/package",HttpMethod.POST,data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}


export function updateServerSettings(
    serverId: number,
    execution_limit : number,
    memory_limit : number,
    date_timezone : string,
    display_errors : string,
    upload_size : number,
    error_reporting : string,
    mysql_timezone : string,
    static_cache_expiry : number,
    character_set_server : string,
    max_connections : number,
    max_input_vars : number,
    max_input_time : number,
    tls_version : string,
    mod_zendguard : string,
    innodb_buffer_pool_size : number,
    innodb_lock_wait_timeout : number,
    wait_timeout : number,
    opcache_memory_size : number,
    mod_xdebug : string,
    nginx_http2 : string,
    new_default_app : string,
    sys_locale : string,
    varnish_default_ttl : string
): Promise<void> {
  const data = {
    server_id: serverId,
    execution_limit : execution_limit,
    memory_limit : memory_limit,
    date_timezone : date_timezone,
    display_errors : display_errors,
    upload_size : upload_size,
    error_reporting : error_reporting,
    mysql_timezone : mysql_timezone,
    static_cache_expiry : static_cache_expiry,
    character_set_server : character_set_server,
    max_connections : max_connections,
    max_input_vars : max_input_vars,
    max_input_time : max_input_time,
    tls_version : tls_version,
    mod_zendguard : mod_zendguard,
    innodb_buffer_pool_size : innodb_buffer_pool_size,
    innodb_lock_wait_timeout : innodb_lock_wait_timeout,
    wait_timeout : wait_timeout,
    opcache_memory_size : opcache_memory_size,
    mod_xdebug : mod_xdebug,
    nginx_http2 : nginx_http2,
    new_default_app : new_default_app,
    sys_locale : sys_locale,
    varnish_default_ttl : varnish_default_ttl
  };
  return apiCall("/server/manage/settings",HttpMethod.POST,data);
}

/**
 * Updates the snapshot frequency for the specified server.
 * @param {number} serverId - Numeric id of the server.
 * @param {number} snapshot_frecuency - New snapshot frequency value.
 * @returns {Promise<void>} - Promise indicating the success of the operation.
 */
export function updateSnapshotFrecuency(
    serverId : number,
    snapshot_frecuency : number
):Promise<void>{
    const data = {
        server_id : serverId,
        snapshot_frecuency : snapshot_frecuency,
    };
    return apiCall("/server/manage/snapshotFrequency", HttpMethod.POST, data);
}

/**
 * Retrieves the disk cleanup settings for the specified server.
 * @param {number} serverId - Numeric id of the server.
 * @returns {Promise<getDiskCleanupResponse>} - Promise resolving to the disk cleanup settings response.
 * @example
 * {
  "settings": {
    "automate_cleanup": "disabled",
    "remove_app_local_backup": "no",
    "remove_app_private_html": "no",
    "remove_app_tmp": "no",
    "rotate_app_log": "no",
    "rotate_system_log": "no"
  }
}
 */
export function getDiskCleanupSettings(
    serverId : number,
):Promise<getDiskCleanupResponse>{
    const data = {
        server_id : serverId,
    };
    return apiCall("/server/disk", HttpMethod.GET, data).then(
        (response) => response as getDiskCleanupResponse
    );
}

/**
 * Updates the disk cleanup settings for the specified server.
 * @param {number} serverId - Numeric id of the server.
 * @param {string} automate_cleanup - Setting to automate cleanup.
 * @param {string} remove_app_tmp - Setting to remove temporary app files.
 * @param {string} remove_app_private_html - Setting to remove private HTML files.
 * @param {string} rotate_system_log - Setting to rotate system logs.
 * @param {string} rotate_app_log - Setting to rotate app logs.
 * @param {string} remove_app_local_backup - Setting to remove local app backups.
 * @returns {Promise<void>} - Promise resolving when the settings are successfully updated.
 */
export function updateDiskCleanupSettings(
    serverId : number,
    automate_cleanup : string,
    remove_app_tmp : string,
    remove_app_private_html : string,
    rotate_system_log : string,
    rotate_app_log : string,
    remove_app_local_backup : string
):Promise<void>{
    const data = {
        server_id : serverId,
        automate_cleanup : automate_cleanup,
        remove_app_tmp : remove_app_tmp,
        remove_app_private_html : remove_app_private_html,
        rotate_system_log : rotate_system_log,
        rotate_app_log : rotate_app_log,
        remove_app_local_backup : remove_app_local_backup
    };
    return apiCall(`/server/disk/${serverId}`, HttpMethod.PUT, data);
}


/**
 * Optimizes the disk of the specified server by performing cleanup actions.
 * @param {number} serverId - Numeric id of the server.
 * @param {string} remove_app_tmp - Setting to remove temporary app files.
 * @param {string} remove_app_private_html - Setting to remove private HTML files.
 * @param {string} rotate_system_log - Setting to rotate system logs.
 * @param {string} rotate_app_log - Setting to rotate app logs.
 * @param {string} remove_app_local_backup - Setting to remove local app backups.
 * @returns {Promise<OperationStatus>} - Promise resolving with status and operation id.
 * @example
 * {
  "status": true,
  "operation_id": 3
}
 */
export async function optimizeServerDisk(
    serverId : number,
    remove_app_tmp : string,
    remove_app_private_html : string,
    rotate_system_log : string,
    rotate_app_log : string,
    remove_app_local_backup : string
):Promise<OperationStatus>{
    const data = {
        server_id : serverId,
        remove_app_tmp : remove_app_tmp,
        remove_app_private_html : remove_app_private_html,
        rotate_system_log : rotate_system_log,
        rotate_app_log : rotate_app_log,
        remove_app_local_backup : remove_app_local_backup
    };
    const req = await apiCall("/server/disk/cleanup", HttpMethod.POST, data);
    return await getAndWaitForOperationStatusCompleted(req.operation_id);
}