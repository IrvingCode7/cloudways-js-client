import { apiCall, HttpMethod } from "../auth";
/**
 * @typedef AttachBlockStoragePayload
 *
 * Interface for the payload required to attach block storage to a server.
 * Note: This feature is only available for DO servers.
 *
 * @property {number} server_id - Numeric ID of the server to which the storage will be attached.
 * @property {number} server_storage - Size of the block storage to be attached.
 */
interface AttachBlockStoragePayload {
  server_id: number;
  server_storage: number;
}

/**
 * @typedef AttachBlockStorageResponse
 *
 * Interface for the response when block storage is successfully attached.
 *
 * @property {number} operation_id - Numeric ID of the operation, used for tracking the attach storage process.
 */
interface AttachBlockStorageResponse {
  operation_id: number;
}

/**
 * @typedef CloneServerPayload
 *
 * Interface for the payload required to clone a server.
 *
 * @property {number} source_server_id - Numeric ID of the server to be cloned.
 * @property {string} cloud - Cloud provider (e.g., do, amazon, vultr, gce, or linode).
 * @property {string} region - Cloud region where the clone will reside (e.g., nyc3, ams2).
 * @property {string} instance_type - Type of instance for the new server (e.g., 512MB, Small).
 * @property {string} app_label - Label for the app on the new server.
 * @property {number} [application_id] - Optional. Numeric ID of a single app if you want to clone only one app on the new server.
 * @property {number} db_volume_size - Size of the DB volume on the new server.
 * @property {number} data_volume_size - Size of the data volume on the new server.
 * @property {number} [server_storage] - Optional. Block storage size, only available for DO servers.
 * @property {boolean} advance_clone - Whether to use the advanced clone feature.
 * @property {boolean} [server_settings] - Optional. Whether to copy the server's settings.
 * @property {boolean} [app_domains] - Optional. Whether to copy app domains and SSL certificates.
 * @property {boolean} [app_crons] - Optional. Whether to copy scheduled cron jobs for all applications.
 * @property {boolean} [app_supervisor_jobs] - Optional. Whether to copy supervisord cron jobs for all applications.
 * @property {boolean} [app_settings] - Optional. Whether to copy application settings.
 * @property {boolean} [app_credentials] - Optional. Whether to copy application credentials.
 * @property {boolean} [team_access] - Optional. Whether to copy team access settings.
 */
interface CloneServerPayload {
  source_server_id: number;
  cloud: string;
  region: string;
  instance_type: string;
  app_label: string;
  application_id?: number;
  db_volume_size: number;
  data_volume_size: number;
  server_storage?: number;
  advance_clone: boolean;
  server_settings?: boolean;
  app_domains?: boolean;
  app_crons?: boolean;
  app_supervisor_jobs?: boolean;
  app_settings?: boolean;
  app_credentials?: boolean;
  team_access?: boolean;
}

/**
 * @typedef CloneServerResponse
 *
 * Interface for the response when a server is successfully cloned.
 *
 * @property {number} operation_id - Numeric ID of the operation, used for tracking the cloning process.
 */
interface CloneServerResponse {
  operation_id: number;
}

/**
 * @typedef CreateServerPayload
 *
 * Interface for the payload required to create a new server.
 *
 * @property {string} cloud - Cloud provider (e.g., do, amazon, vultr, gce, or linode).
 * @property {string} region - Cloud region where the new server will reside (e.g., nyc3, ams2).
 * @property {string} instance_type - Type of instance for the new server (e.g., 512MB, Small).
 * @property {string} application - Type of application to be installed (e.g., wordpress, joomla).
 * @property {string} app_version - Version of the app to be installed.
 * @property {string} server_label - Label for the new server.
 * @property {string} app_label - Label for the app on the new server.
 * @property {string} project_name - Project name if you want to tag this newly created app with a project.
 * @property {number} [db_volume_size] - Optional. Size of the DB volume on the new server, required only for Amazon and GCE.
 * @property {number} [data_volume_size] - Optional. Size of the data volume on the new server, required only for Amazon and GCE.
 */
interface CreateServerPayload {
  cloud: string;
  region: string;
  instance_type: string;
  application: string;
  app_version: string;
  server_label: string;
  app_label: string;
  project_name: string;
  db_volume_size?: number;
  data_volume_size?: number;
}

/**
 * @interface DeleteServerPayload
 * @description Interface for the payload used to delete a server.
 * @property {number} serverId - The numeric identifier for the server you wish to delete.
 */
interface DeleteServerPayload {
  serverId: number;
}

/**
 * @interface GetDiskUsagePayload
 * @description Interface for the payload used to initiate fetching of disk usage for a server.
 * @property {number} server_id - The numeric identifier for the server whose disk usage you wish to fetch.
 */
interface GetDiskUsagePayload {
  server_id: number;
}

/**
 * @typedef OperationInfo
 *
 * Interface for the operations that can be related to a server.
 *
 * @property {number} id - Numeric ID of the operation.
 * @property {string} type - Type of the operation (e.g., "add_server").
 * @property {string} server_id - Numeric ID of the server related to this operation.
 * @property {number} estimated_time_remaining - Estimated time remaining for the operation to complete.
 * @property {number} frontend_step_number - Frontend step number related to the operation.
 * @property {string} status - Status of the operation (e.g., "Process is initiated").
 * @property {string} is_completed - Whether the operation is completed or not.
 * @property {string} message - Message related to the operation's status.
 */
interface OperationInfo {
  id: number;
  type: string;
  server_id: string;
  estimated_time_remaining: number;
  frontend_step_number: number;
  status: string;
  is_completed: string;
  message: string;
}

/**
 * @typedef CreateServerResponse
 *
 * Interface for the response received when a new server is successfully created.
 *
 * @property {object} server - Detailed information about the newly created server.
 * @property {string} server.id - Numeric ID of the created server.
 * @property {string} server.label - Label/name of the created server.
 * @property {string} server.status - Status of the server.
 * @property {string} server.tenant_id - Tenant ID related to the server.
 * @property {string} server.backup_frequency - Backup frequency setting for the server.
 * @property {string} server.local_backups - Whether local backups are enabled or not.
 * @property {string} server.is_terminated - Whether the server is terminated or not.
 * @property {string} server.created_at - Creation date and time of the server.
 * @property {string} server.updated_at - Last updated date and time of the server.
 * @property {string} server.cloud - Cloud provider for the server (e.g., "do").
 * @property {string} server.region - Cloud region where the server resides (e.g., "lon1").
 * @property {string | null} server.zone - Zone of the cloud region, can be null.
 * @property {string} server.instance_type - Type of instance for the server (e.g., "512MB").
 * @property {string | null} server.db_volume_size - Size of the DB volume, can be null.
 * @property {string | null} server.data_volume_size - Size of the data volume, can be null.
 * @property {string} server.server_fqdn - Fully Qualified Domain Name of the server.
 * @property {string} server.public_ip - Public IP address of the server.
 * @property {string} server.volume_size - Size of the server's main storage volume.
 * @property {string} server.master_user - Master user name for the server.
 * @property {string} server.master_password - Master password for the server.
 * @property {string} server.platform - Server's operating system (e.g., "debian8").
 * @property {Array<string>} server.ssh_keys - List of SSH keys associated with the server.
 * @property {Array<string>} server.addons - List of addons installed on the server.
 * @property {Array<OperationInfo>} server.operations - List of operations related to the server.
 */
interface CreateServerResponse {
  server: {
    id: string;
    label: string;
    status: string;
    tenant_id: string;
    backup_frequency: string;
    local_backups: string;
    is_terminated: string;
    created_at: string;
    updated_at: string;
    cloud: string;
    region: string;
    zone: string | null;
    instance_type: string;
    db_volume_size: string | null;
    data_volume_size: string | null;
    server_fqdn: string;
    public_ip: string;
    volume_size: string;
    master_user: string;
    master_password: string;
    platform: string;
    ssh_keys: Array<string>;
    addons: Array<string>;
    operations: Array<OperationInfo>;
  };
}

/**
 * @typedef DeleteServerResponse
 *
 * Interface for the response received when a server is successfully deleted.
 *
 * @property {number} operation_id - Numeric ID for tracking the deletion operation.
 */
interface DeleteServerResponse {
  operation_id: number;
}

/**
 * @typedef GetDiskUsageResponse
 *
 * Interface for the response received when initiating a disk usage fetch operation.
 *
 * @property {boolean} status - Indicates whether the operation was successful.
 * @property {string} operation_id - UUID for tracking the disk usage fetch operation.
 */
interface GetDiskUsageResponse {
  status: boolean;
  operation_id: string;
}

/**
 * @typedef AppInfo
 * Detailed interface for information about each application installed on a server.
 * @property {string} id - Unique identifier of the application.
 * @property {string} label - Label or name of the application.
 * @property {string} application - Type of the application (e.g., wordpress, joomla).
 * @property {string} app_version - Version of the application.
 * @property {string} app_fqdn - Fully qualified domain name of the application.
 * @property {string} app_user - User email associated with the application.
 * @property {string} app_password - Password associated with the application.
 * @property {string} sys_user - System user for the application.
 * @property {string} sys_password - System password for the application.
 * @property {string} cname - The CNAME record for the application.
 * @property {string} mysql_db_name - MySQL database name.
 * @property {string} mysql_user - MySQL user.
 * @property {string} mysql_password - MySQL password.
 * @property {string[]} aliases - List of domain aliases.
 * @property {string | null} symlink - Symbolic link if available.
 * @property {string} server_id - Identifier of the server where the app resides.
 * @property {string} project_id - Identifier of the project associated with the app.
 * @property {string} created_at - Creation timestamp of the application.
 * @property {string | null} webroot - Web root directory if available.
 * @property {boolean} is_csr_available - Indicates if CSR is available for the app.
 * @property {string | null} lets_encrypt - Indicates the Let's Encrypt status.
 * @property {string} app_version_id - App version identifier.
 * @property {string} cms_app_id - CMS application identifier.
 */
interface AppInfo {
  id: string;
  label: string;
  application: string;
  app_version: string;
  app_fqdn: string;
  app_user: string;
  app_password: string;
  sys_user: string;
  sys_password: string;
  cname: string;
  mysql_db_name: string;
  mysql_user: string;
  mysql_password: string;
  aliases: string[];
  symlink: string | null;
  server_id: string;
  project_id: string;
  created_at: string;
  webroot: string | null;
  is_csr_available: boolean;
  lets_encrypt: string | null;
  app_version_id: string;
  cms_app_id: string;
}

/**
 * @typedef ServerInfo
 * Detailed interface for information about each server.
 * @property {string} id - Unique identifier of the server.
 * @property {string} label - Label or name of the server.
 * @property {string} status - Current status of the server (e.g., running, stopped).
 * @property {string} tenant_id - Tenant ID associated with the server.
 * @property {string} backup_frequency - Backup frequency settings.
 * @property {boolean} local_backups - Indicates if local backups are enabled.
 * @property {string} is_terminated - Indicates if the server is terminated.
 * @property {string} created_at - Creation timestamp of the server.
 * @property {string} updated_at - Last updated timestamp of the server.
 * @property {string} platform - Platform type (e.g., debian8).
 * @property {string} cloud - Cloud provider (e.g., do, amazon).
 * @property {string} region - Cloud region where the server is deployed.
 * @property {string | null} zone - Cloud zone where the server is deployed.
 * @property {string} instance_type - Type of instance (e.g., 512MB).
 * @property {string | null} db_volume_size - Size of the DB volume.
 * @property {string | null} data_volume_size - Size of the data volume.
 * @property {string} server_fqdn - Fully qualified domain name of the server.
 * @property {string} public_ip - Public IP address of the server.
 * @property {string} volume_size - Size of the server storage volume.
 * @property {string} master_user - Master username for the server.
 * @property {string} master_password - Master password for the server.
 * @property {string | null} snapshot_frequency - Snapshot frequency if available.
 * @property {AppInfo[]} apps - List of applications installed on the server.
 */
interface ServerInfo {
  id: string;
  label: string;
  status: string;
  tenant_id: string;
  backup_frequency: string;
  local_backups: boolean;
  is_terminated: string;
  created_at: string;
  updated_at: string;
  platform: string;
  cloud: string;
  region: string;
  zone: string | null;
  instance_type: string;
  db_volume_size: string | null;
  data_volume_size: string | null;
  server_fqdn: string;
  public_ip: string;
  volume_size: string;
  master_user: string;
  master_password: string;
  snapshot_frequency: string | null;
  apps: AppInfo[];
}

/**
 * @typedef GetServersListResponse
 * Interface for the response received when fetching the list of servers.
 * @property {boolean} status - Indicates whether the operation was successful.
 * @property {ServerInfo[]} servers - List of servers with detailed information.
 */
interface GetServersListResponse {
  status: boolean;
  servers: ServerInfo[];
}

/**
 * @typedef RestartServerRequest
 * Interface for the parameters required to restart a server.
 * @property {number} server_id - Numeric id of the server to be restarted.
 */
interface RestartServerRequest {
  server_id: number;
}

/**
 * @typedef RestartServerResponse
 * Interface for the response received when restarting a server.
 * @property {number} operation_id - Operation identifier for the server restart operation.
 */
interface RestartServerResponse {
  operation_id: number;
}

/**
 * @typedef ScaleBlockStorageRequest
 * Interface for the parameters required to scale block storage.
 * @property {number} server_id - Numeric id of the server.
 * @property {number} server_storage - New size for the block storage.
 */
interface ScaleBlockStorageRequest {
  server_id: number;
  server_storage: number;
}

/**
 * @typedef ScaleBlockStorageResponse
 * Interface for the response received when scaling block storage.
 * @property {number} operation_id - Operation identifier for the storage scaling operation.
 */
interface ScaleBlockStorageResponse {
  operation_id: number;
}

/**
 * @typedef ScaleVolumeSizeRequest
 * Interface for the parameters required to change volume size.
 * @property {number} server_id - Numeric id of the server.
 * @property {number} volume_size - New size for the volume.
 * @property {string} volume_type - Type of the volume.
 */
interface ScaleVolumeSizeRequest {
  server_id: number;
  volume_size: number;
  volume_type: string;
}

/**
 * @typedef ScaleVolumeSizeResponse
 * Interface for the response received when changing volume size.
 * @property {number} operation_id - Operation identifier for the volume scaling operation.
 */
interface ScaleVolumeSizeResponse {
  operation_id: number;
}

/**
 * @typedef SetAutoscalePolicyRequest
 * Interface for the parameters required to set autoscale policy.
 * @property {number} server_id - Numeric id of the server.
 * @property {boolean} cpu - Enable/disable CPU Autoscale.
 * @property {number} cpu_max - Set Max CPU core limit.
 * @property {boolean} memory - Enable/disable Memory Autoscale.
 * @property {number} memory_max - Set Max Memory limit.
 * @property {boolean} is_cpu_downscale - Enable/disable CPU Auto Downscale.
 * @property {boolean} is_mem_downscale - Enable/disable Memory Auto Downscale.
 */
interface SetAutoscalePolicyRequest {
  server_id: number;
  cpu: boolean;
  cpu_max: number;
  memory: boolean;
  memory_max: number;
  is_cpu_downscale: boolean;
  is_mem_downscale: boolean;
}

/**
 * @typedef SetAutoscalePolicyResponse
 * Interface for the response received when setting autoscale policy.
 * An empty object indicates a successful operation.
 */
interface SetAutoscalePolicyResponse {
  // Intentionally left empty.
}

/**
 * @typedef StartServerRequest
 * Interface for the parameters required to start a server.
 * @property {number} server_id - Numeric ID of the server to be started.
 */
interface StartServerRequest {
  server_id: number;
}

/**
 * @typedef StartServerResponse
 * Interface for the response received when starting a server.
 * @property {number} operation_id - Operation identifier for the server start operation.
 */
interface StartServerResponse {
  operation_id: number;
}

/**
 * @typedef StopServerRequest
 * Interface for the parameters required to stop a server.
 * @property {number} server_id - Numeric ID of the server to be stopped.
 */
interface StopServerRequest {
  server_id: number;
}

/**
 * @typedef StopServerResponse
 * Interface for the response received when stopping a server.
 * @property {number} operation_id - Operation identifier for the server stop operation.
 */
interface StopServerResponse {
  operation_id: number;
}

/**
 * @typedef UpdateServerLabelRequest
 * Interface for the parameters required to update a server's label.
 * @property {number} serverId - Numeric ID of the server to be updated.
 * @property {string} label - New label for the server.
 */
interface UpdateServerLabelRequest {
  serverId: number;
  label: string;
}

/**
 * @typedef UpdateServerLabelResponse
 * Interface for the response received when updating a server's label.
 * @property {boolean} status - Indicates whether the operation was successful.
 */
interface UpdateServerLabelResponse {
  status: boolean;
}

/**
 * @typedef UpgradeServerRequest
 * Interface for the parameters required to upgrade a server.
 * @property {number} server_id - Numeric ID of the server to be upgraded.
 * @property {string} instance_type - New instance type for the server (e.g., 512MB, Small).
 */
interface UpgradeServerRequest {
  server_id: number;
  instance_type: string;
}

/**
 * @typedef UpgradeServerResponse
 * Interface for the response received when upgrading a server.
 * @property {number} operation_id - Operation identifier for the server upgrade operation.
 */
interface UpgradeServerResponse {
  operation_id: number;
}

/**
 * Attach block storage to a server.
 *
 * @param {AttachBlockStoragePayload} payload - An object containing the server ID and block storage size.
 * @returns {Promise<AttachBlockStorageResponse>} A promise that resolves to the operation_id for the attach operation.
 */
export async function attachBlockStorage(
  payload: AttachBlockStoragePayload
): Promise<AttachBlockStorageResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/server/attachStorage";
  return apiCall(endpoint, HttpMethod.POST, payload);
}

/**
 * Clone a server.
 *
 * @param {CloneServerPayload} payload - An object containing the server cloning parameters.
 * @returns {Promise<CloneServerResponse>} A promise that resolves to the operation_id for the clone operation.
 */
export async function cloneServer(
  payload: CloneServerPayload
): Promise<CloneServerResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/server/cloneServer";
  return apiCall(endpoint, HttpMethod.POST, payload);
}

/**
 * Start the Create Server process.
 *
 * @param {CreateServerPayload} payload - An object containing the server creation parameters.
 * @returns {Promise<CreateServerResponse>} A promise that resolves to the server creation response.
 */
export async function createServer(
  payload: CreateServerPayload
): Promise<CreateServerResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/server";
  return apiCall(endpoint, HttpMethod.POST, payload);
}

/**
 * Start the Remove server operation.
 *
 * @param {DeleteServerPayload} payload - An object containing the server ID.
 * @returns {Promise<DeleteServerResponse>} A promise that resolves to the operation_id for the delete operation.
 */
export async function deleteServer(
  payload: DeleteServerPayload
): Promise<DeleteServerResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/server/${payload.serverId}`;
  return apiCall(endpoint, HttpMethod.DELETE);
}

/**
 * Initiate fetching of disk usage.
 *
 * @param {GetDiskUsagePayload} payload - An object containing the server ID.
 * @returns {Promise<GetDiskUsageResponse>} A promise that resolves to the disk usage operation response.
 */
export async function getDiskUsage(
  payload: GetDiskUsagePayload
): Promise<GetDiskUsageResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/server/${payload.server_id}/diskUsage`;
  return apiCall(endpoint, HttpMethod.GET);
}

/**
 * @description Interface for the API response when getting the list of servers.
 * @property {boolean} status - Indicates the success or failure of the operation. True for success.
 * @property {Array<Object>} servers - An array of server objects.
 */
// You should define the actual properties for the server objects based on your requirements.

/**
 * Get the list of servers.
 *
 * @returns {Promise<GetServersListResponse>} A promise that resolves to an object representing the list of servers.
 */
export async function getServersList(): Promise<GetServersListResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/server";
  return apiCall(endpoint, HttpMethod.GET);
}

/**
 * @description Interface for the API response when restarting a server.
 * @property {number} operation_id - The operation identifier.
 */

/**
 * Restart the server.
 *
 * @param {number} server_id - Numeric id of the server.
 * @returns {Promise<RestartServerResponse>} A promise that resolves to an object representing the server restart response.
 */
export async function restartServer(
  server_id: number
): Promise<RestartServerResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/server/restart";
  return apiCall(endpoint, HttpMethod.POST, { server_id });
}

/**
 * @description Interface for the API response when scaling block storage.
 * @property {number} operation_id - The operation identifier.
 */

/**
 * Scale the block storage of the server.
 *
 * @param {number} server_id - Numeric id of the server.
 * @param {number} server_storage - Block Storage size.
 * @returns {Promise<ScaleBlockStorageResponse>} A promise that resolves to an object representing the block storage scaling response.
 */
export async function scaleBlockStorage(
  server_id: number,
  server_storage: number
): Promise<ScaleBlockStorageResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/server/scaleStorage";
  return apiCall(endpoint, HttpMethod.POST, { server_id, server_storage });
}

/**
 * @description Interface for the API response when scaling the volume size.
 * @property {number} operation_id - The operation identifier.
 */

/**
 * Scale the volume size of the server.
 *
 * @param {number} server_id - Numeric id of the server.
 * @param {number} volume_size - New volume size.
 * @param {string} volume_type - Volume type.
 * @returns {Promise<ScaleVolumeSizeResponse>} A promise that resolves to an object representing the volume size scaling response.
 */
export async function scaleVolumeSize(
  server_id: number,
  volume_size: number,
  volume_type: string
): Promise<ScaleVolumeSizeResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/server/scaleVolume";
  return apiCall(endpoint, HttpMethod.POST, {
    server_id,
    volume_size,
    volume_type,
  });
}

/**
 * Set Autoscale Policy for a server.
 *
 * @param {SetAutoscalePolicyRequest} payload - An object containing the server autoscale policy parameters.
 * @returns {Promise<SetAutoscalePolicyResponse>} A promise that resolves to an empty object on a successful operation.
 */
export async function setAutoscalePolicy(
  payload: SetAutoscalePolicyRequest
): Promise<SetAutoscalePolicyResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/server/autoScalePolicy";
  return apiCall(endpoint, HttpMethod.POST, payload);
}

/**
 * Start a server.
 *
 * @param {StartServerRequest} payload - An object containing the server ID.
 * @returns {Promise<StartServerResponse>} A promise that resolves to the operation_id for the start operation.
 */
export async function startServer(
  payload: StartServerRequest
): Promise<StartServerResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/server/start";
  return apiCall(endpoint, HttpMethod.POST, payload);
}

/**
 * Stop a server.
 *
 * @param {StopServerRequest} payload - An object containing the server ID.
 * @returns {Promise<StopServerResponse>} A promise that resolves to the operation_id for the stop operation.
 */
export async function stopServer(
  payload: StopServerRequest
): Promise<StopServerResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/server/stop";
  return apiCall(endpoint, HttpMethod.POST, payload);
}

/**
 * Update server details (label).
 *
 * @param {UpdateServerLabelRequest} payload - An object containing the server ID and new label.
 * @returns {Promise<UpdateServerLabelResponse>} A promise that resolves to a status object indicating success or failure.
 */
export async function updateServerLabel(
  payload: UpdateServerLabelRequest
): Promise<UpdateServerLabelResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/server/${payload.serverId}`;
  return apiCall(endpoint, HttpMethod.PUT, payload);
}

/**
 * Upgrade a server.
 *
 * @param {UpgradeServerRequest} payload - An object containing the server ID and instance type.
 * @returns {Promise<UpgradeServerResponse>} A promise that resolves to the operation_id for the upgrade operation.
 */
export async function upgradeServer(
  payload: UpgradeServerRequest
): Promise<UpgradeServerResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/server/scaleServer";
  return apiCall(endpoint, HttpMethod.POST, payload);
}
