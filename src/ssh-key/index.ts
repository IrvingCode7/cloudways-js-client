import { apiCall, HttpMethod } from "../auth";
/**
 * @typedef CreateSSHKeyPayload
 *
 * Interface for the payload to create a new SSH key.
 *
 * @property {number} server_id - Numeric ID of the server where the SSH key will be created.
 * @property {string} ssh_key_name - The label for the SSH key. Used to identify the SSH key.
 * @property {string} ssh_key - The actual SSH key value.
 * @property {number} app_creds_id - Numeric ID of the App Credentials, required for app-level SSH keys.
 */
interface CreateSSHKeyPayload {
  server_id: number;
  ssh_key_name: string;
  ssh_key: string;
  app_creds_id: number;
}

/**
 * @typedef CreateSSHKeyResponse
 *
 * Interface for the response when an SSH key is successfully created.
 *
 * @property {number} id - The numeric ID of the newly created SSH key.
 */
interface CreateSSHKeyResponse {
  id: number;
}

/**
 * @typedef DeleteSSHKeyPayload
 *
 * Interface for the payload to delete an existing SSH key.
 *
 * @property {number} server_id - Numeric ID of the server where the SSH key exists.
 * @property {number} ssh_key_id - Numeric ID of the SSH key to be deleted.
 */
interface DeleteSSHKeyPayload {
  server_id: number;
  ssh_key_id: number;
}

/**
 * @typedef UpdateSSHKeyPayload
 *
 * Interface for the payload to update an existing SSH key.
 *
 * @property {number} server_id - Numeric ID of the server where the SSH key exists.
 * @property {string} ssh_key_name - The new label for the SSH key.
 * @property {number} ssh_key_id - Numeric ID of the SSH key to be updated.
 */
interface UpdateSSHKeyPayload {
  server_id: number;
  ssh_key_name: string;
  ssh_key_id: number;
}

/**
 * Create a new SSH key.
 *
 * @param {CreateSSHKeyPayload} payload - An object containing the server ID, SSH key label, SSH key, and App Credentials ID.
 * @returns {Promise<CreateSSHKeyResponse>} A promise that resolves to an object representing the created SSH key.
 */
export async function createSSHKey(
  payload: CreateSSHKeyPayload
): Promise<CreateSSHKeyResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/ssh_key";
  return apiCall(endpoint, HttpMethod.POST, payload);
}

/**
 * Delete an SSH key.
 *
 * @param {DeleteSSHKeyPayload} payload - An object containing the server ID and SSH key ID.
 * @returns {Promise<void>} A promise that resolves when the SSH key is deleted.
 */
export async function deleteSSHKey(
  payload: DeleteSSHKeyPayload
): Promise<void> {
  const endpoint = `https://api.cloudways.com/api/v1/ssh_key/${payload.ssh_key_id}`;
  await apiCall(endpoint, HttpMethod.DELETE, { server_id: payload.server_id });
}

/**
 * Update an SSH key.
 *
 * @param {UpdateSSHKeyPayload} payload - An object containing the server ID, new SSH key label, and SSH key ID.
 * @returns {Promise<void>} A promise that resolves when the SSH key is updated.
 */
export async function updateSSHKey(
  payload: UpdateSSHKeyPayload
): Promise<void> {
  const endpoint = `https://api.cloudways.com/api/v1/ssh_key/${payload.ssh_key_id}`;
  await apiCall(endpoint, HttpMethod.PUT, {
    server_id: payload.server_id,
    ssh_key_name: payload.ssh_key_name,
  });
}
