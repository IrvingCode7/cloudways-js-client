import { apiCall } from "../core";
import type { DiskUsageResponse, Server } from "./types";
import { HttpMethod } from "../core/types";
import { getAndWaitForOperationStatusCompleted } from "../operation";
import type { OperationStatus } from "../operation/types";


/**
 * Attaches block storage to a server.
 * @param {number} serverId The numeric id of the server.
 * @param {number} storageSize The size of the block storage to attach.
 * @returns {Promise<OperationStatus>} A promise resolving with an object containing the operation id.
 * @example
 * ```
 *
 *  12345
 *
 * ```
 */
export async function attachBlockStorage(
  serverId: number,
  storageSize: number
): Promise<OperationStatus> {
  const requestData = {
    server_id: serverId,
    server_storage: storageSize,
  };
  const req = await apiCall("/server/attachStorage", HttpMethod.POST, requestData);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Clones a server.
 * @param {number} sourceServerId The ID of the server to be cloned.
 * @param {string} cloud Cloud provider (do, amazon, vultr, gce, or linode).
 * @param {string} region Cloud region (nyc3, ams2, ...).
 * @param {string} instanceType Instance type (512MB, Small, ...).
 * @param {string} appLabel Name of the app.
 * @param {number} applicationId ID of the application if you want to clone only a single app in the new server.
 * @param {number} dbVolumeSize DB volume size on the server.
 * @param {number} dataVolumeSize Data volume size on the server.
 * @param {number} serverStorage Block storage size (only available for DO servers).
 * @param {boolean} advanceClone Whether to clone server through the advance clone feature.
 * @param {boolean} serverSettings Whether to copy the server's basic and advanced settings, disk optimization settings, security settings, and SMTP settings.
 * @param {boolean} appDomains Whether to copy domain(s) of the application(s) along with the SSL certificate(s) from the source server.
 * @param {boolean} appCrons Whether to copy the scheduled cron jobs for all application(s) from the source server to the new server.
 * @param {boolean} appSupervisorJobs Whether to copy the supervisord cron jobs for all application(s) from the source server to the new server.
 * @param {boolean} appSettings Whether to copy each application's general, php-fpm, varnish, and git configuration settings.
 * @param {boolean} appCredentials Whether to copy the application credentials of each application(s) from the source server to the new server (if exist).
 * @param {boolean} teamAccess Whether to copy the team access settings to the new server.
 * @returns {Promise<OperationStatus>} A promise resolving with an object containing the operation id.
 * @example
 * ```
 *
 *   12345
 *
 * ```
 */
export async function cloneServer(
  sourceServerId: number,
  cloud: string,
  region: string,
  instanceType: string,
  appLabel: string,
  applicationId: number,
  dbVolumeSize: number,
  dataVolumeSize: number,
  serverStorage: number,
  advanceClone: boolean,
  serverSettings: boolean,
  appDomains: boolean,
  appCrons: boolean,
  appSupervisorJobs: boolean,
  appSettings: boolean,
  appCredentials: boolean,
  teamAccess: boolean
): Promise<OperationStatus> {
  const requestData = {
    source_server_id: sourceServerId,
    cloud: cloud,
    region: region,
    instance_type: instanceType,
    app_label: appLabel,
    application_id: applicationId,
    db_volume_size: dbVolumeSize,
    data_volume_size: dataVolumeSize,
    server_storage: serverStorage,
    advance_clone: advanceClone,
    server_settings: serverSettings,
    app_domains: appDomains,
    app_crons: appCrons,
    app_supervisor_jobs: appSupervisorJobs,
    app_settings: appSettings,
    app_credentials: appCredentials,
    team_access: teamAccess,
  };
  const req = await apiCall("/server/cloneServer", HttpMethod.POST, requestData);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Starts the process to create a server.
 * @param {string} cloud Cloud provider (do, amazon, vultr, gce, or linode).
 * @param {string} region Cloud region (nyc3, ams2, ...).
 * @param {string} instanceType Instance type (512MB, Small, ...).
 * @param {string} application App to be installed (wordpress, joomla, ...).
 * @param {string} appVersion Version of the app to be installed.
 * @param {string} serverLabel Name of the server.
 * @param {string} appLabel Name of the app.
 * @param {string} projectName Add this parameter when you want to create a project and tag this newly created app with it.
 * @param {number} dbVolumeSize DB volume size on server (Only required for Amazon and GCE).
 * @param {number} dataVolumeSize Data volume size on server (Only required for Amazon and GCE).
 * @returns {Promise<Server>} A promise resolving with the server object.
 * @example
 * ```
 * {
 *     "id" : "50710",
 *     "label" : "sadf",
 *     "status" : "",
 *     "tenant_id" : "1",
 *     "backup_frequency" : "1",
 *     "local_backups" : "no",
 *     "is_terminated" : "0",
 *     "created_at" : "2016-07-13 15:19:25",
 *     "updated_at" : "2016-07-13 15:19:25",
 *     "cloud" : "do",
 *     "region" : "lon1",
 *     "zone" : null,
 *     "instance_type" : "512MB",
 *     "db_volume_size" : null,
 *     "data_volume_size" : null,
 *     "server_fqdn" : "12847-50710.cloudwaysapps.com",
 *     "public_ip" : "",
 *     "volume_size" : "20",
 *     "master_user" : "asdfasdf",
 *     "master_password" : "asdfasdf",
 *     "platform" : "debian8",
 *     "ssh_keys" : [ ],
 *     "addons" : [ ],
 *     "operations" : [ {
 *       "id" : "596406",
 *       "type" : "add_server",
 *       "server_id" : "50710",
 *       "estimated_time_remaining" : "7",
 *       "frontend_step_number" : "1",
 *       "status" : "Process is initiated",
 *       "is_completed" : "0",
 *       "message" : "Process is initiated"
 *     } ]
 *   }
 * ```
 */

export function createServer(
  cloud: string,
  region: string,
  instanceType: string,
  application: string,
  appVersion: string,
  serverLabel: string,
  appLabel: string,
  projectName: string,
  dbVolumeSize: number,
  dataVolumeSize: number
): Promise<Server> {
  const requestData = {
    cloud: cloud,
    region: region,
    instance_type: instanceType,
    application: application,
    app_version: appVersion,
    server_label: serverLabel,
    app_label: appLabel,
    project_name: projectName,
    db_volume_size: dbVolumeSize,
    data_volume_size: dataVolumeSize,
  };
  return apiCall("/server", HttpMethod.POST, requestData).then(
    (response) => response.server
  );
}

/**
 * Starts the process to remove a server.
 * @param {number} serverId Numeric id of the server to be removed.
 * @returns {Promise<OperationStatus>} A promise resolving with the operation id.
 * @example
 * ```
 *
 *   12345
 *
 * ```
 */
export async function deleteServer(serverId: number): Promise<OperationStatus>{
  const req = await apiCall(`/server/${serverId}`, HttpMethod.DELETE);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Initiates a fetch disk usage operation for a server.
 * @param {number} serverId Numeric id of the server.
 * @returns {Promise<OperationStatus>} A promise resolving with the operation id.
 * @example
 * ```
 * {
 *   "status": true,
 *   "operation_id": "ec7a2d1a-0a3d-4ed9-9523-315875618f54"
 * }
 * ```
 */
export async function getDiskUsage(serverId: number): Promise<OperationStatus> {
  const req = await apiCall(`/server/${serverId}/diskUsage`);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Gets the list of servers.
 * @returns {Promise<Server[]>} A promise resolving with an array of server entries.
 * @example
 * ```
 * [
 *   {
 *     id: "50482",
 *     label: "My Live Server",
 *     status: "running",
 *     tenant_id: "1",
 *     backup_frequency: "1",
 *     local_backups: false,
 *     is_terminated: "0",
 *     created_at: "2016-07-11 11:41:31",
 *     updated_at: "2016-07-13 14:07:47",
 *     platform: "debian8",
 *     cloud: "do",
 *     region: "lon1",
 *     zone: null,
 *     instance_type: "512MB",
 *     db_volume_size: null,
 *     data_volume_size: null,
 *     server_fqdn: "11111-50482.cloudwaysapps.com",
 *     public_ip: "11.62.111.11",
 *     volume_size: "20",
 *     master_user: "master_username",
 *     master_password: "password",
 *     snapshot_frequency: null,
 *     apps: [
 *       {
 *         id: "131933",
 *         label: "dsf",
 *         application: "wordpressmu",
 *         app_version: "4.5.2",
 *         app_fqdn: "wordpressmu-1442-50482-131933.cloudwaysapps.com",
 *         app_user: "user@domain.com",
 *         app_password: "asdfasdf",
 *         sys_user: "sys-user",
 *         sys_password: "password",
 *         cname: "",
 *         mysql_db_name: "password",
 *         mysql_user: "password",
 *         mysql_password: "password",
 *         aliases: [],
 *         symlink: null,
 *         server_id: "50482",
 *         project_id: "1574",
 *         created_at: "2016-07-11 11:41:31",
 *         webroot: null,
 *         is_csr_available: true,
 *         lets_encrypt: null,
 *         app_version_id: "545",
 *         cms_app_id: "23"
 *       }
 *     ]
 *   }
 * ]
 * ```
 */
export function getServersList(): Promise<Server[]> {
  return apiCall("/server").then((response) => response.servers);
}

/**
 * Restarts the server.
 * @param {number} serverId Numeric id of the server to be restarted.
 * @returns {Promise<OperationStatus>} A promise resolving with the operation id.
 * @example
 * ```
 *
 *   12345
 *
 * ```
 */
export async function restartServer(serverId: number): Promise<OperationStatus>  {
  const req = await apiCall("/server/restart", HttpMethod.POST, {
    server_id: serverId,
  });
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Scales block storage for a DigitalOcean server.
 * @param {number} serverId Numeric id of the server.
 * @param {number} storageSize New block storage size.
 * @returns {Promise<number>} A promise resolving with the operation id.
 * @example
 * ```
 *
 *   12345
 *
 * ```
 */
export async function scaleBlockStorage(
  serverId: number,
  storageSize: number
): Promise<OperationStatus> {
  const req = await apiCall("/server/scaleStorage", HttpMethod.POST, {
    server_id: serverId,
    server_storage: storageSize,
  });
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Scales volume size for Amazon and GCE servers.
 * @param {number} serverId Numeric id of the server.
 * @param {number} volumeSize New volume size.
 * @param {string} volumeType Volume type.
 * @returns {Promise<OperationStatus>} A promise resolving with the operation id.
 * @example
 * ```
 *
 *    12345
 *
 * ```
 */
export async function scaleVolumeSize(
  serverId: number,
  volumeSize: number,
  volumeType: string
): Promise<OperationStatus> {
  const req = await apiCall("/server/scaleVolume", HttpMethod.POST, {
    server_id: serverId,
    volume_size: volumeSize,
    volume_type: volumeType,
  });
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Starts the server.
 * @param {number} serverId Numeric id of the server.
 * @returns {Promise<OperationStatus>} A promise resolving with the operation id.
 * @example
 * ```
 *
 *  12345
 *
 * ```
 */
export async function startServer(serverId: number): Promise<OperationStatus> {
  const req = await apiCall("/server/start", HttpMethod.POST, {
    server_id: serverId,
  });
  return await getAndWaitForOperationStatusCompleted(req.operation_id);

}

/**
 * Stops the server.
 * @param {number} serverId Numeric id of the server.
 * @returns {Promise<OperationStatus>} A promise resolving with the operation id.
 * @example
 * ```
 *
 *  12345
 *
 * ```
 */
export async function stopServer(serverId: number): Promise<OperationStatus>  {
  const req = await apiCall("/server/stop", HttpMethod.POST, { server_id: serverId }).then(
    (response) => response.operation_id
  );
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Update server label.
 * @param {number} serverId Numeric id of the server.
 * @param {string} label New label of the server.
 * @returns {Promise<{ status: boolean }>} A promise resolving with the status indicating success.
 * @example
 * ```
 * {
 *     "status": true
 * }
 * ```
 */
export function updateServerLabel(
  serverId: number,
  label: string
): Promise<{ status: boolean }> {
  return apiCall(`/server/${serverId}`, HttpMethod.PUT, { label: label });
}

/**
 * Upgrade server instance type.
 * @param {number} serverId Numeric id of the server.
 * @param {string} instanceType New instance type (e.g., "512MB", "Small").
 * @returns {Promise<OperationStatus>} A promise resolving with the operation id.
 * @example
 * ```
 *
 *  12345
 *
 * ```
 */
export async function upgradeServer(
  serverId: number,
  instanceType: string
): Promise<OperationStatus> {
  const req = await apiCall(`/server/scaleServer`, HttpMethod.POST, {
    server_id: serverId,
    instance_type: instanceType,
  });
  return await getAndWaitForOperationStatusCompleted(req.operation_id);

}
