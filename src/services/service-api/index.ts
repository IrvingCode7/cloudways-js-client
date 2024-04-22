import { apiCall } from "../core";
import { HttpMethod } from "../core/types";

import type { getServiceStatusResponse } from "./types";

/**
 * Changes the state of a service on the specified server.
 * @param {number} serverId - Numeric id of the server.
 * @param {string} service - Name of the service.
 * @param {string} state - Desired state of the service.
 * @returns {Promise<{ service_status: { status: string } }>} - Promise resolving with the status of the service.
 * @example
 * {
  "service_status" : {
    "status" : "running"
  }
}
 */
export function changeServiceState(
  serverId: number,
  service: string,
  state: string
): Promise<{ service_status: { status: string } }> {
  const data = {
    server_id: serverId,
    service: service,
    state: state,
  };
  return apiCall("/service/state", HttpMethod.POST, data).then((response) => ({
    service_status: {
      status: response.service_status.status,
    },
  }));
}

/**
 * Retrieves the status of services on the specified server.
 * @param {number} serverId - Numeric id of the server.
 * @returns {Promise<getServiceStatusResponse>} - Promise resolving with the status of services.
 * @example
 *
 */
export function getServiceStatus(
  serverId: number
): Promise<getServiceStatusResponse> {
  const data = {
    server_id: serverId,
  };
  return apiCall("/service", HttpMethod.GET, data).then(
    (response) => response as getServiceStatusResponse
  );
}

/**
 * Retrieves the Varnish state at the application level for the specified server and application.
 * @param {number} serverId - Numeric id of the server.
 * @param {number} appId - Numeric id of the application.
 * @returns {Promise<void>} - Promise resolving with the Varnish state.
 */
export function getVarnishStateAppLevel(
  serverId: number,
  appId: number
): Promise<void> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/service/appVarnish", HttpMethod.GET, data);
}

/**
 * Updates the Varnish state for the specified server.
 * @param {number} serverId - Numeric id of the server.
 * @param {string} action - Action to perform on Varnish (e.g., "start", "stop").
 * @returns {Promise<void>} - Promise indicating the success of the operation.
 */
export function updateServerVarnishState(
  serverId: number,
  action: string
): Promise<void> {
  const data = {
    server_id: serverId,
    action: action,
  };
  return apiCall("/service/varnish", HttpMethod.POST, data);
}


/**
 * Updates the Varnish state at the application level for the specified server.
 * @param {number} serverId - Numeric id of the server.
 * @param {number} appId - Numeric id of the application.
 * @param {string} action - Action to perform on Varnish (e.g., "start", "stop").
 * @returns {Promise<void>} - Promise indicating the success of the operation.
 */
export function updateVarnishStateAppLevel(
  serverId: number,
  appId: number,
  action: string
): Promise<void> {
  const data = {
    server_id: serverId,
    app_id: appId,
    action: action,
  };
  return apiCall("/service/appVarnish", HttpMethod.POST, data);
}



