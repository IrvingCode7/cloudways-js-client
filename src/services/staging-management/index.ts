import { apiCall } from "../core";
import { HttpMethod } from "../core/types";


/**
 * Retrieves application table information.
 * 
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<void>} - A Promise that resolves when the request is complete.
 */
//esta api en cloudways esta justo despues Update Application Admin Password en el modulo de app-managementAPI pero no se si pertece a este modulo
export function getAplicationTable( 
  serverId : number,
  appId : number
):Promise<void>{
  const data = {
    server_id : serverId,
    app_id : appId
  };
  return apiCall("/staging/app/tables", HttpMethod.POST, data);
}
//continuan las funciones que si ESTAN en el staging-management


/**
 * Synchronize application between servers.
 * 
 * @param {number} serverId - Numeric ID of the destination server.
 * @param {number} appId - Numeric ID of the destination application.
 * @param {number} sourceAppId - Numeric ID of the source application.
 * @param {number} sourceServerId - Numeric ID of the source server.
 * @param {string} action - Action to perform. Possible values are "Push" or "Pull".
 * @param {boolean} [appFiles=false] - Whether to include application files in the synchronization.
 * @param {string} [appFilesType] - Type of application files to deploy.
 * @param {string[]} [excludePath] - List of files or folders paths to exclude during synchronization.
 * @param {boolean} [dbFiles=false] - Whether to include database files in the synchronization.
 * @param {boolean} [backup=false] - Whether to backup application files before synchronization.
 * @param {boolean} [table=false] - Whether to backup tables before synchronization.
 * @param {string[]} [tableSelected] - List of tables to backup.
 * @returns {Promise<void>} - A Promise that resolves when the synchronization is complete.
 */
export function syncApp(
    serverId: number,
    appId: number,
    sourceAppId: number,
    sourceServerId: number,
    action: string,
    appFiles: boolean = false,
    appFilesType?: string,
    excludePath?: string[],
    dbFiles: boolean = false,
    backup: boolean = false,
    table: boolean = false,
    tableSelected?: string[]
  ): Promise<void> {
    const data = {
      server_id: serverId,
      app_id: appId,
      source_app_id: sourceAppId,
      source_server_id: sourceServerId,
      action: action,
      appFiles: appFiles,
      appFilesType: appFilesType,
      excludePath: excludePath,
      dbFiles: dbFiles,
      backup: backup,
      table: table,
      tableSelected: tableSelected
    };
    return apiCall("/sync/app", HttpMethod.POST, data);
  }
  
  
  
  /**
  
  Sends a request to update the status of the .htaccess authentication credentials.
  @param {number} serverId - The numeric ID of the server.
  @param {number} appId - The numeric ID of the application.
  @param {string} action - The action to perform. Possible values are 'enable' or 'disable'.
  @returns {Promise<void>} - A Promise that resolves when the request is complete.
  */
  export function HtaccessAuthCredentials(
    serverId: number,
    appId: number,
    action: string
  ): Promise<void> {
    const data = {
      server_id: serverId,
      app_id: appId,
      action: action,
    };
    return apiCall("/staging/auth/status", HttpMethod.POST, data);
  }
  
  
  /**
   * Updates the `.htaccess` authentication credentials.
   * @param {number} serverId - The numeric ID of the server.
   * @param {number} appId - The numeric ID of the application.
   * @param {string} username - The new username for authentication.
   * @param {string} password - The new password for authentication.
   * @returns {Promise<void>} - A Promise that resolves when the request is complete.
   */
  export function HtaccesUpdateCredentials(
    serverId: number,
    appId: number,
    username: string,
    password : string
  ): Promise<void> {
    const data = {
      server_id: serverId,
      app_id: appId,
      username: username,
      password : password
    };
    return apiCall("/staging/htaccessUpdate", HttpMethod.POST, data);
  }
  
  /**
   * Retrieves deployment logs for a staging application.
   * @param {number} serverId - The numeric ID of the server.
   * @param {number} appId - The numeric ID of the application.
   * @returns {Promise<void>} - A Promise that resolves when the logs are retrieved.
   */
  export function stagingApplicationDeploymentLogs(
    serverId: number,
    appId: number,
  ): Promise<void> {
    const data = {
      server_id: serverId,
      app_id: appId,
    };
    return apiCall("/staging/app/logs", HttpMethod.GET, data);
  }
  
