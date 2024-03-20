import { apiCall } from "../core";
import { HttpMethod } from "../core/types";

/**
 * Start the process of adding an app to a server.
 * @param {number} serverId Numeric id of the server.
 * @param {string} application App to be installed (e.g., "wordpress", "joomla").
 * @param {string} appLabel Name of the app.
 * @param {string} projectName (Optional) Name of the project to tag the newly created app with.
 * @returns {Promise< number >} A promise resolving with the operation id.
 * @example
 * ```
 *
 * 12345
 *
 * ```
 */
export function startAddAppProcess(
  serverId: number,
  application: string,
  appLabel: string,
  projectName?: string
): Promise<number> {
  const data = {
    server_id: serverId,
    application: application,
    app_label: appLabel,
    project_name: projectName || "",
  };
  return apiCall("/app", HttpMethod.POST, data).then(
    (response) => response.operation_id
  );
}

/**
 * Clone an app to the same server.
 * @param {number} serverId Numeric id of the server.
 * @param {number} appId Numeric id of the application.
 * @param {string} appLabel Name of the app.
 * @returns {Promise<{ appId: number, operationId: number }>} A promise resolving with the cloned app's id and operation id.
 * @example
 * ```
 * {
 *   "appId": 1111,
 *   "operationId": 12345
 * }
 * ```
 */
export function cloneApp(
  serverId: number,
  appId: number,
  appLabel: string
): Promise<{ appId: number; operationId: number }> {
  const data = {
    server_id: serverId,
    app_id: appId,
    app_label: appLabel,
  };
  return apiCall("/app/clone", HttpMethod.POST, data).then((response) => ({
    appId: response.app_id,
    operationId: response.operation_id,
  }));
}

/**
 * Clone an app to another existing server.
 * @param {number} serverId Numeric id of the source server.
 * @param {number} appId Numeric id of the application.
 * @param {number} destinationServerId Numeric id of the destination server.
 * @returns {Promise<{ sourceOperationId: number, destinationOperationId: number, appId: number }>} A promise resolving with the source and destination operation ids along with the cloned app's id.
 * @example
 * ```
 * {
 *   "sourceOperationId": 12345,
 *   "destinationOperationId": 12346,
 *   "appId": 1111
 * }
 * ```
 */
export function cloneAppToOtherServer(
  serverId: number,
  appId: number,
  destinationServerId: number
): Promise<{
  sourceOperationId: number;
  destinationOperationId: number;
  appId: number;
}> {
  const data = {
    server_id: serverId,
    app_id: appId,
    destination_server_id: destinationServerId,
  };
  return apiCall("/app/cloneToOtherServer", HttpMethod.POST, data).then(
    (response) => ({
      sourceOperationId: response.source_operation_id,
      destinationOperationId: response.destination_operation_id,
      appId: response.app_id,
    })
  );
}

/**
 * Clone a staging app to the same server.
 * @param {number} serverId Numeric id of the server.
 * @param {number} appId Numeric id of the staging application.
 * @returns {Promise<{ appId: number, operationId: number }>} A promise resolving with the cloned staging app's id and operation id.
 * @example
 * ```
 * {
 *   "appId": 1111,
 *   "operationId": 12345
 * }
 * ```
 */
export function cloneStagingApp(
  serverId: number,
  appId: number
): Promise<{ appId: number; operationId: number }> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/staging/app/cloneApp", HttpMethod.POST, data).then(
    (response) => ({
      appId: response.app_id,
      operationId: response.operation_id,
    })
  );
}

/**
 * Clone a staging app to another existing server.
 * @param {number} serverId Numeric id of the source server.
 * @param {number} appId Numeric id of the staging application.
 * @param {number} destinationServerId Numeric id of the destination server.
 * @returns {Promise<{ sourceOperationId: number, destinationOperationId: number, appId: number }>} A promise resolving with the operation ids and the cloned staging app's id.
 * @example
 * ```
 * {
 *   "sourceOperationId": 12345,
 *   "destinationOperationId": 12346,
 *   "appId": 1111
 * }
 * ```
 */
export function cloneStagingAppToOtherServer(
  serverId: number,
  appId: number,
  destinationServerId: number
): Promise<{
  sourceOperationId: number;
  destinationOperationId: number;
  appId: number;
}> {
  const data = {
    server_id: serverId,
    app_id: appId,
    destination_server_id: destinationServerId,
  };
  return apiCall("/staging/app/cloneToOtherServer", HttpMethod.POST, data).then(
    (response) => ({
      sourceOperationId: response.source_operation_id,
      destinationOperationId: response.destination_operation_id,
      appId: response.app_id,
    })
  );
}

/**
 * Start the process of removing an app.
 * @param {number} serverId Numeric id of the server.
 * @param {number} appId Numeric id of the application.
 * @returns {Promise<number>} A promise resolving with the operation id.
 * @example
 * ```
 * 12345
 * ```
 */
export function startRemoveAppProcess(
  serverId: number,
  appId: number
): Promise<number> {
  return apiCall(`/app/${appId}`, HttpMethod.DELETE, {
    server_id: serverId,
  }).then((response) => response.operation_id);
}

/**
 * Update the label of an application.
 * @param {number} appId Numeric id of the application.
 * @param {number} serverId Numeric id of the server.
 * @param {string} label New label of the application.
 * @returns {Promise<boolean>} A promise resolving with a boolean indicating the update status.
 * @example
 * ```
 * true
 * ```
 */
export function updateAppLabel(
  appId: number,
  serverId: number,
  label: string
): Promise<boolean> {
  const data = {
    server_id: serverId,
    label: label,
  };
  return apiCall(`/app/${appId}`, HttpMethod.PUT, data).then(
    (response) => response.status
  );
}
