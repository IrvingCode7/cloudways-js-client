import { apiCall, HttpMethod } from "../auth";

/**
 * @interface StartAddAppPayload
 * @description Interface for payload needed to start the add app process.
 * @property {number} server_id - Numeric ID of the server.
 * @property {string} application - Type of application to be installed (e.g., wordpress, joomla).
 * @property {string} app_label - Name of the app.
 * @property {string} project_name - Optional name of the project.
 */
interface StartAddAppPayload {
  server_id: number;
  application: string;
  app_label: string;
  project_name?: string;
}

/**
 * @interface StartAddAppResponse
 * @description Interface for the response when starting the add app process.
 * @property {number} operation_id - Operation ID.
 */
interface StartAddAppResponse {
  operation_id: number;
}

/**
 * Start the add app process.
 * @param {StartAddAppPayload} payload - The payload for starting the add app process.
 * @returns {Promise<StartAddAppResponse>} - A promise that resolves to an object containing the operation ID.
 */

/**
 * @interface CloneAppPayload
 * @description Interface for payload needed to clone an app.
 * @property {number} server_id - Numeric ID of the server.
 * @property {number} app_id - Numeric ID of the application.
 * @property {string} app_label - Name of the app.
 */
interface CloneAppPayload {
  server_id: number;
  app_id: number;
  app_label: string;
}

/**
 * @interface CloneAppResponse
 * @description Interface for the response when cloning an app.
 * @property {number} app_id - New App ID.
 * @property {number} operation_id - Operation ID.
 */
interface CloneAppResponse {
  app_id: number;
  operation_id: number;
}

/**
 * Clone an app to the same server.
 * @param {CloneAppPayload} payload - The payload for cloning an app.
 * @returns {Promise<CloneAppResponse>} - A promise that resolves to an object containing the new app ID and operation ID.
 */

/**
 * @interface CloneAppToOtherServerPayload
 * @description Interface for payload needed to clone an app to another server.
 * @property {number} server_id - Numeric ID of the server where the application exists.
 * @property {number} app_id - Numeric ID of the application to be cloned.
 * @property {number} destination_server_id - Numeric ID of the server where the application will be cloned.
 */
interface CloneAppToOtherServerPayload {
  server_id: number;
  app_id: number;
  destination_server_id: number;
}

/**
 * @interface CloneAppToOtherServerResponse
 * @description Interface for the response when cloning an app to another server.
 * @property {number} source_operation_id - Source Operation ID.
 * @property {number} destination_operation_id - Destination Operation ID.
 * @property {number} app_id - New App ID.
 */
interface CloneAppToOtherServerResponse {
  source_operation_id: number;
  destination_operation_id: number;
  app_id: number;
}

/**
 * Clone an app to another existing server.
 * @param {CloneAppToOtherServerPayload} payload - The payload for cloning an app to another server.
 * @returns {Promise<CloneAppToOtherServerResponse>} - A promise that resolves to an object containing the new app ID, source operation ID, and destination operation ID.
 */

// The payload and response interfaces would be similar to those used for `cloneApp`, you can reuse them.

/**
 * Clone a staging app to the same server.
 * @param {CloneAppPayload} payload - The payload for cloning a staging app.
 * @returns {Promise<CloneAppResponse>} - A promise that resolves to an object containing the new app ID and operation ID.
 */

// The payload and response interfaces would be similar to those used for `cloneAppToOtherServer`, you can reuse them.

/**
 * Clone a staging app to another existing server.
 * @param {CloneAppToOtherServerPayload} payload - The payload for cloning a staging app to another server.
 * @returns {Promise<CloneAppToOtherServerResponse>} - A promise that resolves to an object containing the new app ID, source operation ID, and destination operation ID.
 */

/**
 * @interface DeleteAppPayload
 * @description Interface for payload needed to start the remove app operation.
 * @property {number} server_id - Numeric ID of the server.
 * @property {number} appId - Numeric ID of the application to be removed.
 */
interface DeleteAppPayload {
  server_id: number;
  appId: number;
}

/**
 * @interface DeleteAppResponse
 * @description Interface for the response when starting the remove app operation.
 * @property {number} operation_id - Operation ID.
 */
interface DeleteAppResponse {
  operation_id: number;
}

/**
 * Start the remove app operation.
 * @param {DeleteAppPayload} payload - The payload for starting the remove app operation.
 * @returns {Promise<DeleteAppResponse>} - A promise that resolves to an object containing the operation ID.
 */

/**
 * @interface UpdateAppLabelPayload
 * @description Interface for payload needed to update application details (label).
 * @property {number} appId - Numeric ID of the application.
 * @property {number} server_id - Numeric ID of the server.
 * @property {string} label - New label of the application.
 */
interface UpdateAppLabelPayload {
  appId: number;
  server_id: number;
  label: string;
}

/**
 * @interface UpdateAppLabelResponse
 * @description Interface for the response when updating the app label.
 * @property {boolean} status - Operation status.
 */
interface UpdateAppLabelResponse {
  status: boolean;
}

/**
 * Update application details (label).
 * @param {UpdateAppLabelPayload} payload - The payload for updating the app label.
 * @returns {Promise<UpdateAppLabelResponse>} - A promise that resolves to an object containing the operation status.
 */

// Function to update App label
export async function updateAppLabel(
  payload: UpdateAppLabelPayload
): Promise<UpdateAppLabelResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/app/manage/updateLabel";
  const response = await apiCall(endpoint, HttpMethod.PUT, payload);
  return response as UpdateAppLabelResponse;
}

// Function to delete an app
export async function deleteApp(
  payload: DeleteAppPayload
): Promise<DeleteAppResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/app/${payload.appId}`;
  const response = await apiCall(endpoint, HttpMethod.DELETE, {
    server_id: payload.server_id,
  });
  return response as DeleteAppResponse;
}

// Function to clone a staging app to another server
export async function cloneStagingAppToOtherServer(
  payload: CloneAppToOtherServerPayload
): Promise<CloneAppToOtherServerResponse> {
  const endpoint =
    "https://api.cloudways.com/api/v1/staging/app/cloneToOtherServer";
  const response = await apiCall(endpoint, HttpMethod.POST, payload);
  return response as CloneAppToOtherServerResponse;
}

// Function to clone a staging app
export async function cloneStagingApp(
  payload: CloneAppPayload
): Promise<CloneAppResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/staging/app/cloneApp";
  const response = await apiCall(endpoint, HttpMethod.POST, payload);
  return response as CloneAppResponse;
}

// Function to clone an app to another server
export async function cloneAppToOtherServer(
  payload: CloneAppToOtherServerPayload
): Promise<CloneAppToOtherServerResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/app/cloneToOtherServer";
  const response = await apiCall(endpoint, HttpMethod.POST, payload);
  return response as CloneAppToOtherServerResponse;
}

// Function to clone an app
export async function cloneApp(
  payload: CloneAppPayload
): Promise<CloneAppResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/app/clone";
  const response = await apiCall(endpoint, HttpMethod.POST, payload);
  return response as CloneAppResponse;
}

// Function to start adding an app
export async function startAddApp(
  payload: StartAddAppPayload
): Promise<StartAddAppResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/app";
  const response = await apiCall(endpoint, HttpMethod.POST, payload);
  return response as StartAddAppResponse;
}
