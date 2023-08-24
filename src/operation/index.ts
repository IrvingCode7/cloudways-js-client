import { apiCall, HttpMethod } from "../auth";

/**
 * @typedef GetOperationStatusRequest
 * Interface for the parameters required to get operation status.
 * @property {number} id - Numeric ID of the operation.
 */
interface GetOperationStatusRequest {
  id: number;
}

/**
 * @typedef OperationStatus
 * Interface for the operation status.
 * @property {string} id - ID of the operation.
 * @property {string} type - Type of operation (e.g., "restarting_server").
 * @property {string} server_id - Server ID associated with the operation.
 * @property {string} estimated_time_remaining - Estimated time remaining for the operation.
 * @property {string} frontend_step_number - Step number shown in frontend.
 * @property {string} status - Status of the operation.
 * @property {string} is_completed - Whether the operation is completed ("1" for completed, "0" for not completed).
 * @property {string} message - Message associated with the operation.
 * @property {string} app_id - App ID associated with the operation, if applicable.
 */
interface OperationStatus {
  id: string;
  type: string;
  server_id: string;
  estimated_time_remaining: string;
  frontend_step_number: string;
  status: string;
  is_completed: string;
  message: string;
  app_id: string;
}

/**
 * @typedef GetOperationStatusResponse
 * Interface for the response received when getting operation status.
 * @property {OperationStatus} operation - The operation status details.
 */
interface GetOperationStatusResponse {
  operation: OperationStatus;
}

/**
 * Get the status of an operation running in the background.
 *
 * @param {GetOperationStatusRequest} payload - An object containing the operation ID.
 * @returns {Promise<GetOperationStatusResponse>} A promise that resolves to the operation status response.
 */
export async function getOperationStatus(
  payload: GetOperationStatusRequest
): Promise<GetOperationStatusResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/operation/${payload.id}`;
  return apiCall(endpoint, HttpMethod.GET);
}
