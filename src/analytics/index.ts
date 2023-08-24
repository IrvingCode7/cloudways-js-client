import { apiCall, HttpMethod } from "../auth";
/**
 * @interface GetAppTrafficParams
 * @description Interface for parameters needed to fetch Application Traffic analytics.
 * @property {number} server_id - Numeric ID of the server.
 * @property {number} app_id - Numeric ID of the app.
 * @property {string} duration - Duration of the data to fetch (e.g., "15m", "30m", "1h", "1d").
 * @property {string} resource - Type of resource for analytics (e.g., "top_ips", "top_bots").
 */
interface GetAppTrafficParams {
  server_id: number;
  app_id: number;
  duration: string;
  resource: string;
}

/**
 * @interface GetAppTrafficDetailParams
 * @description Interface for parameters needed to fetch detailed Application Traffic analytics.
 * @property {number} server_id - Numeric ID of the server.
 * @property {number} app_id - Numeric ID of the app.
 * @property {string} from - Start time for the data (e.g., "15/10/2019 10:42").
 * @property {string} until - End time for the data (e.g., "15/10/2019 10:57").
 * @property {string[]} resource_list - Array of resources to fetch details for.
 */
interface GetAppTrafficDetailParams {
  server_id: number;
  app_id: number;
  from: string;
  until: string;
  resource_list: string[];
}

/**
 * @interface GetPHPInfoParams
 * @description Interface for parameters needed to fetch PHP Information analytics.
 * @property {number} server_id - Numeric ID of the server.
 * @property {number} app_id - Numeric ID of the app.
 * @property {string} duration - Duration of the data to fetch (e.g., "15m", "30m", "1h", "1d").
 * @property {string} resource - Type of PHP analytics to fetch (e.g., "url_durations", "processes").
 */
interface GetPHPInfoParams {
  server_id: number;
  app_id: number;
  duration: string;
  resource: string;
}

/**
 * @interface GetMySQLInfoParams
 * @description Interface for parameters needed to fetch MySQL analytics.
 * @property {number} server_id - Numeric ID of the server.
 * @property {number} app_id - Numeric ID of the app.
 * @property {string} duration - Duration of the data to fetch (e.g., "15m", "30m", "1h", "1d").
 * @property {string} resource - Type of MySQL analytics to fetch (e.g., "running_queries", "slow_queries").
 */
interface GetMySQLInfoParams {
  server_id: number;
  app_id: number;
  duration: string;
  resource: string;
}

/**
 * @interface GetCronInfoParams
 * @description Interface for parameters needed to fetch Cron job analytics.
 * @property {number} server_id - Numeric ID of the server.
 * @property {number} app_id - Numeric ID of the app.
 */
interface GetCronInfoParams {
  server_id: number;
  app_id: number;
}

/**
 * @interface ApiResponse
 * @description Interface for a common API response.
 * @property {boolean} status - Indicates the status of the operation.
 * @property {string} operation_id - A unique identifier for the operation.
 */
interface ApiResponse {
  status: boolean;
  operation_id: string;
}

/**
 * Fetches application traffic analytics.
 *
 * @param {GetAppTrafficParams} params - API parameters.
 * @returns {Promise<ApiResponse>} - API response.
 */
export async function getAppTraffic(
  params: GetAppTrafficParams
): Promise<ApiResponse> {
  const url = "https://api.cloudways.com/api/v1/app/analytics/traffic";
  return await apiCall(url, HttpMethod.GET, params);
}

/**
 * Fetches detailed application traffic analytics.
 *
 * @param {GetAppTrafficDetailParams} params - API parameters.
 * @returns {Promise<ApiResponse>} - API response.
 */
export async function getAppTrafficDetail(
  params: GetAppTrafficDetailParams
): Promise<ApiResponse> {
  const url = "https://api.cloudways.com/api/v1/app/analytics/trafficDetail";
  return await apiCall(url, HttpMethod.GET, params);
}

/**
 * Fetches PHP analytics for an application.
 *
 * @param {GetPHPInfoParams} params - API parameters.
 * @returns {Promise<ApiResponse>} - API response.
 */
export async function getPHPInfo(
  params: GetPHPInfoParams
): Promise<ApiResponse> {
  const url = "https://api.cloudways.com/api/v1/app/analytics/php";
  return await apiCall(url, HttpMethod.GET, params);
}

/**
 * Fetches MySQL analytics for an application.
 *
 * @param {GetMySQLInfoParams} params - API parameters.
 * @returns {Promise<ApiResponse>} - API response.
 */
export async function getMySQLInfo(
  params: GetMySQLInfoParams
): Promise<ApiResponse> {
  const url = "https://api.cloudways.com/api/v1/app/analytics/mysql";
  return await apiCall(url, HttpMethod.GET, params);
}

/**
 * Fetches cron job analytics for an application.
 *
 * @param {GetCronInfoParams} params - API parameters.
 * @returns {Promise<ApiResponse>} - API response.
 */
export async function getCronInfo(
  params: GetCronInfoParams
): Promise<ApiResponse> {
  const url = "https://api.cloudways.com/api/v1/app/analytics/cron";
  return await apiCall(url, HttpMethod.GET, params);
}
