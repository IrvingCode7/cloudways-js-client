import { apiCall, HttpMethod } from "../auth";

/**
 * @interface CancelServerTransferPayload
 * @description Interface for the payload used to cancel a server transfer.
 * @property {number} server_id - The numeric identifier for the server whose transfer you wish to cancel.
 */
interface CancelServerTransferPayload {
  server_id: number;
}

/**
 * @interface CancelServerTransferResponse
 * @description Interface for the API response when canceling a server transfer.
 * @property {boolean} status - Indicates the success or failure of the cancel operation. True for success.
 */
interface CancelServerTransferResponse {
  status: boolean;
}

/**
 * @interface GetServerTransferStatusPayload
 * @description Interface for the payload used to get the status of a server transfer.
 * @property {number} server_id - The numeric identifier for the server whose transfer status you wish to query.
 */
interface GetServerTransferStatusPayload {
  server_id: number;
}

/**
 * @interface GetServerTransferStatusResponse
 * @description Interface for the API response when getting server transfer status.
 * @property {null | object} share - Reserved for future use, currently null.
 * @property {object} transfer - The current transfer status.
 *   @property {string} transfer.id - The unique identifier for the server transfer.
 *   @property {string} transfer.name - The name of the Cloudways user.
 *   @property {string} transfer.email - The email of the Cloudways user.
 */
interface GetServerTransferStatusResponse {
  share: null;
  transfer: {
    id: string;
    name: string;
    email: string;
  };
}

/**
 * @interface RequestServerTransferPayload
 * @description Interface for the payload used to request a server transfer.
 * @property {number} server_id - The numeric identifier for the server you wish to transfer.
 * @property {string} email - The email ID of the primary and upgraded user of Cloudways to whom the server will be transferred.
 */
interface RequestServerTransferPayload {
  server_id: number;
  email: string;
}

/**
 * @interface RequestServerTransferResponse
 * @description Interface for the API response when requesting a server transfer.
 * @property {boolean} status - Indicates the success or failure of the request operation. True for success.
 */
interface RequestServerTransferResponse {
  status: boolean;
}

/**
 * Cancel a server transfer process.
 *
 * @param {CancelServerTransferPayload} payload - An object containing the server ID.
 * @returns {Promise<CancelServerTransferResponse>} A promise that resolves to an object representing the server transfer cancellation response.
 */
export async function cancelServerTransfer(
  payload: CancelServerTransferPayload
): Promise<CancelServerTransferResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/server_transfer/cancel";
  return apiCall(endpoint, HttpMethod.POST, payload);
}

/**
 * Get the status of a server transfer process.
 *
 * @param {GetServerTransferStatusPayload} payload - An object containing the server ID.
 * @returns {Promise<GetServerTransferStatusResponse>} A promise that resolves to an object representing the server transfer status.
 */
export async function getServerTransferStatus(
  payload: GetServerTransferStatusPayload
): Promise<GetServerTransferStatusResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/server_transfer/status";
  return apiCall(endpoint, HttpMethod.POST, payload);
}

/**
 * Request for a server to be transferred.
 *
 * @param {RequestServerTransferPayload} payload - An object containing the server ID and the email ID of the primary and upgraded user of Cloudways.
 * @returns {Promise<RequestServerTransferResponse>} A promise that resolves to an object representing the server transfer request response.
 */
export async function requestServerTransfer(
  payload: RequestServerTransferPayload
): Promise<RequestServerTransferResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/server_transfer/request";
  return apiCall(endpoint, HttpMethod.POST, payload);
}
