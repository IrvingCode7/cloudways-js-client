import { apiCall } from "../core";
import { HttpMethod } from "../core/types";

/**
 * Create an SSH key for a server.
 * @param {number} serverId Numeric id of the server.
 * @param {string} sshKeyName Label for the SSH key.
 * @param {string} sshKey The SSH key.
 * @param {number} appCredsId Numeric id of the App Credentials (required for app level SSH keys).
 * @returns {Promise<number>} A promise resolving with the id of the created SSH key.
 * @example
 * ```
 * 1234
 * ```
 */
export function createSSHKey(
  serverId: number,
  sshKeyName: string,
  sshKey: string,
  appCredsId: number
): Promise<number> {
  const data = {
    server_id: serverId,
    ssh_key_name: sshKeyName,
    ssh_key: sshKey,
    app_creds_id: appCredsId,
  };
  return apiCall("/ssh_key", HttpMethod.POST, data).then(
    (response) => response.id
  );
}

/**
 * Delete an SSH key from a server.
 * @param {number} serverId Numeric id of the server.
 * @param {number} sshKeyId Numeric id of the SSH key to delete.
 * @returns {Promise<void>} A promise resolving when the SSH key is successfully deleted.
 */
export function deleteSSHKey(
  serverId: number,
  sshKeyId: number
): Promise<void> {
  const endpoint = `/ssh_key/${sshKeyId}`;
  const data = { server_id: serverId };
  return apiCall(endpoint, HttpMethod.DELETE, data);
}

/**
 * Update an SSH key on a server.
 * @param {number} serverId Numeric id of the server.
 * @param {number} sshKeyId Numeric id of the SSH key to update.
 * @param {string} sshKeyName New label for the SSH key.
 * @returns {Promise<void>} A promise resolving when the SSH key is successfully updated.
 */
export function updateSSHKey(
  serverId: number,
  sshKeyId: number,
  sshKeyName: string
): Promise<void> {
  const endpoint = `/ssh_key/${sshKeyId}`;
  const data = {
    server_id: serverId,
    ssh_key_name: sshKeyName,
  };
  return apiCall(endpoint, HttpMethod.PUT, data);
}
