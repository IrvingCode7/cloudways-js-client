import { sleep } from "../../utils";
import { apiCall } from "../core";
import { HttpMethod } from "../core/types";
import type { GetOperationStatusResponse, OperationStatus } from "./types";

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
export function getOperationStatus(id: string): Promise<OperationStatus> {
  return apiCall(`/operation/${id}`, HttpMethod.GET).then(
    (response: GetOperationStatusResponse) => response.operation
  );
}

export async function getAndWaitForOperationStatusCompleted(
  operationId: string
) {
  let operationStatus = await getOperationStatus(operationId);
  while (operationStatus.is_completed !== "1") {
    const waitTime = operationStatus.estimated_time_remaining
      ? parseInt(operationStatus.estimated_time_remaining) * 60000
      : 5000;
    await sleep(waitTime);
    operationStatus = await getOperationStatus(operationId);
  }
  return operationStatus;
}
