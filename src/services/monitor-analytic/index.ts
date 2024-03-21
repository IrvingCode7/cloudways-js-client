import { apiCall } from "../core";
import { HttpMethod } from "../core/types";

/**
 * Get server bandwidth usage or disk size per application.
 * @param {number} serverId Numeric id of the server.
 * @param {string} type Possible values are "bw" for bandwidth usage of the server or "db" for application size on disk.
 * @returns {Promise<{ name: string, datapoint: [number, number][], type: string }[]>} A promise resolving with the bandwidth usage or disk size per application.
 */
export function getServerSummary(
  serverId: number,
  type: string
): Promise<{ name: string; datapoint: [number, number][]; type: string }[]> {
  const data = {
    server_id: serverId,
    type: type,
  };
  return apiCall("/server/monitor/summary", HttpMethod.GET, data).then(
    (response) => response.content
  );
}

/**
 * Get server usage.
 * @param {number} serverId Numeric id of the server.
 * @returns {Promise<{ status: boolean, operation_id: string }>} A promise resolving with the operation id.
 */
export function getServerUsage(
  serverId: number
): Promise<{ status: boolean; operation_id: string }> {
  const data = {
    server_id: serverId,
  };
  return apiCall("/server/analytics/serverUsage", HttpMethod.GET, data);
}

/**
 * Get application disk usage.
 * @param {number} serverId Numeric id of the server.
 * @param {number} appId Numeric id of the app.
 * @param {string} type String type (summary, disk, db, etc.).
 * @returns {Promise<any>} A promise resolving with the application disk usage data.
 */
export function getApplicationDiskUsage(
  serverId: number,
  appId: number,
  type: string
): Promise<any> {
  const data = {
    server_id: serverId,
    app_id: appId,
    type: type,
  };
  return apiCall("/app/monitor/summary", HttpMethod.GET, data);
}

/**
 * Get application disk usage graph (Deprecated).
 * @param {number} serverId Numeric id of the server.
 * @param {string} appId System user of the application.
 * @param {string} timezone String of the server timezone.
 * @param {number} target String of the target (cpuiddle, memory, etc.).
 * @param {number} duration Integer of the duration.
 * @returns {Promise<any>} A promise resolving with the application disk usage graph data.
 */
export function getApplicationDiskUsageGraph(
  serverId: number,
  appId: string,
  timezone: string,
  target: number,
  duration: number
): Promise<any> {
  const data = {
    server_id: serverId,
    app_id: appId,
    timezone: timezone,
    target: target,
    duration: duration,
  };
  return apiCall("/app/monitor/detail", HttpMethod.GET, data);
}

/**
 * Get application traffic analytics.
 * @param {number} serverId Numeric id of the server.
 * @param {number} appId Numeric id of the app.
 * @param {string} duration String duration (e.g., "15m", "30m", "1h", "1d").
 * @param {string} resource String type ("top_ips", "top_bots", "top_urls", "top_statuses").
 * @returns {Promise<any>} A promise resolving with the application traffic analytics data.
 */
export function getApplicationTrafficAnalytics(
  serverId: number,
  appId: number,
  duration: string,
  resource: string
): Promise<any> {
  const data = {
    server_id: serverId,
    app_id: appId,
    duration: duration,
    resource: resource,
  };
  return apiCall("/app/analytics/traffic", HttpMethod.GET, data);
}

/**
 * Get application traffic details.
 * @param {number} serverId Numeric id of the server.
 * @param {number} appId Numeric id of the app.
 * @param {string} from Start time in the format "DD/MM/YYYY HH:mm".
 * @param {string} until End time in the format "DD/MM/YYYY HH:mm".
 * @param {string[]} resourceList Array of resources returned from the traffic call (e.g., ["127.0.0.1", "192.168.1.1"]).
 * @returns {Promise<any>} A promise resolving with the application traffic details.
 */
export function getApplicationTrafficDetail(
  serverId: number,
  appId: number,
  from: string,
  until: string,
  resourceList: string[]
): Promise<any> {
  const data = {
    server_id: serverId,
    app_id: appId,
    from: from,
    until: until,
    resource_list: resourceList,
  };
  return apiCall("/app/analytics/trafficDetail", HttpMethod.GET, data);
}

/**
 * Get PHP information.
 * @param {number} serverId Numeric id of the server.
 * @param {number} appId Numeric id of the app.
 * @param {string} duration String duration (e.g., "15m", "30m", "1h", "1d").
 * @param {string} resource String type ("url_durations", "processes", "slow_pages").
 * @returns {Promise<any>} A promise resolving with the PHP information.
 */
export function getPHPInformation(
  serverId: number,
  appId: number,
  duration: string,
  resource: string
): Promise<any> {
  const data = {
    server_id: serverId,
    app_id: appId,
    duration: duration,
    resource: resource,
  };
  return apiCall("/app/analytics/php", HttpMethod.GET, data);
}

/**
 * Get MySQL information.
 * @param {number} serverId Numeric id of the server.
 * @param {number} appId Numeric id of the app.
 * @param {string} duration String duration (e.g., "15m", "30m", "1h", "1d").
 * @param {string} resource String resource ("running_queries", "slow_queries").
 * @returns {Promise<any>} A promise resolving with the MySQL information.
 */
export function getMySQLInformation(
  serverId: number,
  appId: number,
  duration: string,
  resource: string
): Promise<any> {
  const data = {
    server_id: serverId,
    app_id: appId,
    duration: duration,
    resource: resource,
  };
  return apiCall("/app/analytics/mysql", HttpMethod.GET, data);
}

/**
 * Get application cron information.
 * @param {number} serverId Numeric id of the server.
 * @param {number} appId Numeric id of the app.
 * @returns {Promise<any>} A promise resolving with the application cron information.
 */
export function getApplicationCron(
  serverId: number,
  appId: number
): Promise<any> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/analytics/cron", HttpMethod.GET, data);
}
