import { apiCall, HttpMethod } from "../auth";

/**
 * Interface for the parameters required to fetch server bandwidth usage or disk size per application
 *
 * @property {number} server_id - Numeric id of the server. Required.
 * @property {string} type - Type of data to fetch. Possible values: 'bw' for Bandwidth, 'db' for disk size. Required.
 */
interface GetServerMonitorSummaryParams {
  server_id: number;
  type: "bw" | "db";
}

/**
 * Interface for the response of the server monitor summary
 *
 * @property {string} name - Name of the metric ('bandwidthmonthly', 'rootused', etc.)
 * @property {any[]} datapoint - Array containing the metric value and timestamp
 * @property {string} type - Type of the metric ('process' or 'application')
 */
interface ServerMonitorSummaryResponse {
  content: Array<{
    name: string;
    datapoint: any[];
    type: string;
  }>;
}

/**
 * Interface for the parameters required to fetch server usage
 *
 * @property {number} server_id - Numeric id of the server. Required.
 */
interface GetServerUsageParams {
  server_id: number;
}

/**
 * Interface for the response of the server usage
 *
 * @property {boolean} status - Status of the operation
 * @property {string} operation_id - Id of the operation
 */
interface ServerUsageResponse {
  status: boolean;
  operation_id: string;
}

/**
 * Interface for the parameters required to fetch server monitoring graph
 *
 * @property {number} server_id - Numeric id of the server. Required.
 * @property {string} timezone - Timezone string. Required.
 * @property {number} target - Metric target. Required.
 * @property {number} duration - Duration for the graph. Required.
 * @property {boolean} storage - Include storage or not. Required.
 * @property {string} server_type - Server type like DO, GCE, AMAZON. Required.
 */
interface GetServerMonitoringGraphParams {
  server_id: number;
  timezone: string;
  target: number;
  duration: number;
  storage: boolean;
  server_type: string;
}

/**
 * Interface for the parameters required to fetch application disk usage
 *
 * @property {number} server_id - Numeric id of the server. Required.
 * @property {number} app_id - Numeric id of the application. Required.
 * @property {string} type - Type of data to fetch (summary, disk, db, etc). Required.
 */
interface GetAppDiskUsageParams {
  server_id: number;
  app_id: number;
  type: string;
}

/**
 * Interface for the response of the application disk usage
 *
 * @property {any} content - Disk usage details
 */
interface AppDiskUsageResponse {
  content: any;
}

/**
 * Interface for the parameters required to fetch application disk usage graph
 *
 * @property {number} server_id - Numeric id of the server. Required.
 * @property {string} app_id - Sys_user of the application. Required.
 * @property {string} timezone - Timezone string. Required.
 * @property {number} target - Metric target. Required.
 * @property {number} duration - Duration for the graph. Required.
 */
interface GetAppDiskUsageGraphParams {
  server_id: number;
  app_id: string;
  timezone: string;
  target: number;
  duration: number;
}

/**
 * Fetches server bandwidth usage or disk size per application.
 *
 * @param {GetServerMonitorSummaryParams} params - API parameters.
 * @returns {Promise<ServerMonitorSummaryResponse>} - API response.
 */
export async function getServerMonitorSummary(
  params: GetServerMonitorSummaryParams
): Promise<ServerMonitorSummaryResponse> {
  const url = "https://api.cloudways.com/api/v1/server/monitor/summary";
  return await apiCall(url, HttpMethod.GET, params);
}

/**
 * Fetches server usage.
 *
 * @param {GetServerUsageParams} params - API parameters.
 * @returns {Promise<ServerUsageResponse>} - API response.
 */
export async function getServerUsage(
  params: GetServerUsageParams
): Promise<ServerUsageResponse> {
  const url = "https://api.cloudways.com/api/v1/server/analytics/serverUsage";
  return await apiCall(url, HttpMethod.GET, params);
}

/**
 * Fetches server monitoring graph.
 *
 * @param {GetServerMonitoringGraphParams} params - API parameters.
 * @returns {Promise<any>} - API response.
 */
export async function getServerMonitoringGraph(
  params: GetServerMonitoringGraphParams
): Promise<any> {
  const url = "https://api.cloudways.com/api/v1/server/monitor/detail";
  return await apiCall(url, HttpMethod.GET, params);
}

/**
 * Fetches application disk usage.
 *
 * @param {GetAppDiskUsageParams} params - API parameters.
 * @returns {Promise<AppDiskUsageResponse>} - API response.
 */
export async function getAppDiskUsage(
  params: GetAppDiskUsageParams
): Promise<AppDiskUsageResponse> {
  const url = "https://api.cloudways.com/api/v1/app/monitor/summary";
  return await apiCall(url, HttpMethod.GET, params);
}

/**
 * Fetches application disk usage graph.
 *
 * @param {GetAppDiskUsageGraphParams} params - API parameters.
 * @returns {Promise<any>} - API response.
 */
export async function getAppDiskUsageGraph(
  params: GetAppDiskUsageGraphParams
): Promise<any> {
  const url = "https://api.cloudways.com/api/v1/app/monitor/detail";
  return await apiCall(url, HttpMethod.GET, params);
}
