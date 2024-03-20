import { apiCall } from "../core";
import { HttpMethod } from "../core/types";

// Define an interface for the operation status response
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

interface GetOperationStatusResponse {
  operation: OperationStatus;
}

/**
 * Gets the status of an operation that is running in the background.
 *
 * @param id - The numeric ID of the operation.
 * @returns {Promise<OperationStatus>} A promise resolving to the operation status details.
 * @example
 * ```
 * {
 *   "operation": {
 *     "id": "596283",
 *     "type": "restarting_server",
 *     "server_id": "50482",
 *     "estimated_time_remaining": "2",
 *     "frontend_step_number": "1",
 *     "status": "Process is initiated",
 *     "is_completed": "0",
 *     "message": "Process is initiated",
 *     "app_id": "0"
 *   }
 * }
 * ```
 */
export function getOperationStatus(id: number): Promise<OperationStatus> {
  return apiCall(`/operation/${id}`, HttpMethod.GET).then(
    (response: GetOperationStatusResponse) => response.operation
  );
}
