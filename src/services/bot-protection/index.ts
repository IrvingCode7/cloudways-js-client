import { apiCall } from "../core";
import { HttpMethod } from "../core/types";
import { getAndWaitForOperationStatusCompleted } from "../operation";
import type { OperationStatus } from "../operation/types";
import type {
  BotProtectionTrafficResponse,
  BotProtectionTrafficSummaryResponse,
  BotProtectionLoginTrafficResponse,
  BotProtectionLoginTrafficSummaryResponse,
  BotProtectionBadBotsListResponse,
} from "./types";

/**
 * Retrieves the status of bot protection for the application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<{ enable: boolean }>} - A Promise resolving to an object indicating whether bot protection is enabled.
 * @example
 * {
  "enabled": true
}
 */
export function BotProtectionStatus(
  serverId: number,
  appId: number
): Promise<{ enable: boolean }> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/malcare", HttpMethod.GET, data).then((response) => ({
    enable: response.enable,
  }));
}

/**
   * Retrieves traffic information related to bot protection.
   * @param {number} serverId - The ID of the server to retrieve traffic information from.
   * @param {number} appId - The ID of the application associated with the server.
   * @returns {Promise<BotProtectionTrafficResponse>} - A promise that resolves with the server response containing traffic information.
   * @example
   * {
      "logs": [
          {
              "ip": "127.0.0.1",
              "status": "ALLOWED",
              "time": 1603947151,
              "method": "POST",
              "path": "/wp-cron.php",
              "user_agent": "WordPress/5.4.2; https://woocommerce-18694-398768.cloudwaysstagingapps.com",
              "resp_code": 200,
              "country_name": "-",
              "id": "20201029-5f9a4b17b304643f85e2942e"
          },
   */
export function BotProtectionTraffic(
  serverId: number,
  appId: number
): Promise<BotProtectionTrafficResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/malcare/traffic", HttpMethod.GET, data).then(
    (response) => response as BotProtectionTrafficResponse
  );
}

/**
   * Retrieves a summary of bot protection traffic for a specific server and application.
   * @param {number} serverId - The ID of the server.
   * @param {number} appId - The ID of the application.
   * @returns {Promise<BotProtectionTrafficSummaryResponse>} A promise that resolves with the summary of bot protection traffic.
   * @example
   * {
        "sinceLastDays": 2,
        "blocked": 0,
        "total": 6,
        "summary": [
            {
                "day": "23-Oct",
                "total": 0,
                "allowed": 0,
                "blocked": 0
            },
   */
export function BotProtectionTrafficSummary(
  serverId: number,
  appId: number
): Promise<BotProtectionTrafficSummaryResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/malcare/traffic/summary", HttpMethod.GET, data).then(
    (response) => response as BotProtectionTrafficSummaryResponse
  );
}

/**
   * Retrieves the bot protection login traffic logs for a specific server and application.
   * @param {number} serverId - The numeric ID of the server.
   * @param {number} appId - The numeric ID of the application.
   * @returns {Promise<BotProtectionLoginTrafficResponse>} A Promise that resolves with the bot protection login traffic logs.
   * @example
   * {
      "logs": [
          {
              "ip": "198.245.49.62",
              "status": "FAILED" or "BLOCKED"
              "time": 1603944210,
              "message": "invalid_username",
              "username": "ahsan",
              "country_name": "Canada",
              "id": "20201029-5f9a3ff0a9f54720f098ea8f"
          },
   */
export function BotProtectionLoginTraffic(
  serverId: number,
  appId: number
): Promise<BotProtectionLoginTrafficResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/malcare/logins", HttpMethod.GET, data).then(
    (response) => response as BotProtectionLoginTrafficResponse
  );
}

/**
   * Retrieves the summary of bot protection login traffic for a specific server and application.
   * @param {number} serverId - The numeric ID of the server.
   * @param {number} appId - The numeric ID of the application.
   * @returns {Promise<BotProtectionLoginTrafficSummaryResponse>} A Promise that resolves with the summary of bot protection login traffic.
   * @example
   * {
    "sinceLastDays": 3,
    "blocked": 1,
    "total": 63,
    "summary": [
        {
            "day": "23-Oct",
            "total": 0,
            "succeeded": 0,
            "blocked": 0,
            "failed": 0
        },
   */
export function BotProtectionLoginTrafficSummary(
  serverId: number,
  appId: number
): Promise<BotProtectionLoginTrafficSummaryResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/malcare/logins/summary", HttpMethod.GET, data).then(
    (response) => response as BotProtectionLoginTrafficSummaryResponse
  );
}

/**
   * Retrieves a list of bad bots for a specific server and application.
   * @param {number} serverId - The ID of the server.
   * @param {number} appId - The ID of the application.
   * @param {number} limit - The maximum number of bad bots to retrieve.
   * @returns {Promise<BotProtectionBadBotsListResponse>} A promise that resolves with the list of bad bots.
   * @example
   * {
    "blocked": 1,
    "logs": [
        {
            "botName": "ApacheBench (ab)",
            "visits": 5233,
            "allowed": 5233,
            "blocked": 0
        }
    ]
  }
   */
export function BotProtectionBadBotsList(
  serverId: number,
  appId: number,
  limit: number
): Promise<BotProtectionBadBotsListResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
    limit: limit,
  };
  return apiCall("/app/malcare/bots/bad", HttpMethod.GET, data).then(
    (response) => response as BotProtectionBadBotsListResponse
  );
}

/**
 * Retrieves the whitelisted IP addresses for bot protection for a specific server and application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<{ whitelistedIps: string[] }>} A Promise that resolves with the array of whitelisted IP addresses.
 * @example
 * {
  "whitelistedIps": [
      "198.245.49.62"
  ]
}
 */
export function BotProtectionWhiteListedIps(
  serverId: number,
  appId: number
): Promise<{ whitelistedIps: string[] }> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/malcare/whitelisted_ips", HttpMethod.GET, data).then(
    (response) => ({
      whitelistedIps: response.whitelistedIps,
    })
  );
}

/**
 * Retrieves the whitelisted bots for bot protection for a specific server and application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<{ whitelistedBots: string[] }>} A Promise that resolves with the array of whitelisted bots.
 * @example
 * {
  "whitelistedBots": [
      "ApacheBench (ab)"
  ]
}
 */
export function BotProtectionWhiteListedBots(
  serverId: number,
  appId: number
): Promise<{ whitelistedBots: string[] }> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/malcare/whitelisted_bots", HttpMethod.GET, data).then(
    (response) => ({
      whitelistedBots: response.whitelistedBots,
    })
  );
}


/**
 * Activates bot protection for a specific server and application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<OperationStatus>} A Promise that resolves with the operation ID upon successful activation.
 * @example
 * {
  "operation_id": 12345
}
 */
export async function BotProtectionActivation(
  serverId: number,
  appId: number
): Promise<OperationStatus>{
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  const req = await apiCall("/app/malcare/enable", HttpMethod.PUT, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}


/**
 * Deactivates bot protection for a specific server and application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<OperationStatus>} A Promise that resolves with the operation ID upon successful deactivation.
 * @example
 * {
  "operation_id": 12345
}
 */
export async function BotProtectionDeactivation(
  serverId: number,
  appId: number
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  const req = await apiCall("/app/malcare/disable", HttpMethod.PUT, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Whitelists or removes an IP address from the bot protection whitelist for a specific server and application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} ip - The IP address to whitelist or remove from the whitelist.
 * @param {boolean} status - A boolean indicating whether to whitelist (true) or remove (false) the IP address.
 * @returns {Promise<{ whitelistedBots: string[] }>} A Promise that resolves with the updated list of whitelisted IP addresses.
 * @example
 * {
  "whitelistedIps": [
    "46.101.95.65"
  ]
}
 */
export function BotProtectionIpWhitelisting(
  serverId: number,
  appId: number,
  ip :string,
  status : boolean
): Promise<{ whitelistedIps: string[] }> {
  const data = {
    server_id: serverId,
    app_id: appId,
    ip : ip,
    status : status
  };
  return apiCall("/app/malcare/whitelist_ip", HttpMethod.PUT, data).then(
    (response) => ({
      whitelistedIps: response.whitelistedIps,
    })
  );
}


/**
 * Update the whitelist status of a bad bot for bot protection.
 * 
 * @param {number} serverId - Numeric ID of the server.
 * @param {number} appId - Numeric ID of the application.
 * @param {string} bot - The name or identifier of the bot to whitelist.
 * @param {boolean} status - The status indicating whether to whitelist or remove from whitelist.
 * @returns {Promise<{ whitelistedBots: string[] }>} A promise that resolves with an object containing the updated list of whitelisted bots.
 * @example 
 * {
  "whitelistedBots": [
    "ApacheBench (ab)"
  ]
}
 */
export function BotProtectionBadBotsWhitelisting(
  serverId: number,
  appId: number,
  bot :string,
  status : boolean
): Promise<{ whitelistedBots: string[] }> {
  const data = {
    server_id: serverId,
    app_id: appId,
    bot : bot,
    status : status
  };
  return apiCall("/app/malcare/whitelist_bot", HttpMethod.PUT, data).then(
    (response) => ({
      whitelistedBots: response.whitelistedBots,
    })
  );
}

/**
 * Clears the application cache.
 * 
 * @param {number} serverId - The numeric id of the server.
 * @param {number} appId - The numeric id of the application.
 * @returns {Promise<OperationStatus>} A promise that resolves to an object containing the status and operation id of the cache purge operation.
 * @example
 * {
  "status": true,
  "operation_id": 12345
}
 */
export async function ClearAppCache(
  serverId: number,
  appId: number
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  const req = await apiCall("/app/cache/purge", HttpMethod.POST, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}


