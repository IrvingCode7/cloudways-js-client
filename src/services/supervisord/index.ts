import { apiCall } from "../core";
import { HttpMethod } from "../core/types";

import type {
  createSupervisordResponse,
  deleteSupervisordQueues,
  getSupervisordQueueStatus,
  getSupervisordQueuesResponse,
} from "./types";

/**
 * Creates a new supervisord queue for the specified application on the server.
 * @param {number} serverId - Numeric id of the server.
 * @param {number} appId - Numeric id of the application.
 * @param {string} queues_list_connection - The connection type for the queue.
 * @param {number} queues_list_procs - The number of processes for the queue.
 * @param {number} queues_list_sleep - The time to sleep between processes.
 * @param {string} queues_list_artisan_path - The artisan path for the queue.
 * @param {number} queues_list_timeout - The timeout for the queue.
 * @param {string} queues_list_queue - The queue name.
 * @param {number} queues_list_tries - The number of tries for the queue.
 * @param {string} queues_list_env - The environment for the queue.
 * @returns {Promise<createSupervisordResponse>} - Promise resolving with the response from the API.
 * @example
 * {
  "queues_list" : [ {
    "id" : "19",
    "timeout" : "60",
    "sleep" : "3",
    "queue" : "default",
    "tries" : "0",
    "env" : "",
    "connection" : "redis",
    "procs" : "1",
    "queue_id" : "abcdefghij_1",
    "artisan_path" : "public_html/artisan"
  } ],
  "status" : true
}
 */
export function createSupervisordQueue(
  serverId: number,
  appId: number,
  queues_list_connection: string,
  queues_list_procs: number,
  queues_list_sleep: number,
  queues_list_artisan_path: string,
  queues_list_timeout: number,
  queues_list_queue: string,
  queues_list_tries: number,
  queues_list_env: string
): Promise<createSupervisordResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
    queues_list_connection: queues_list_connection,
    queues_list_procs: queues_list_procs,
    queues_list_sleep: queues_list_sleep,
    queues_list_artisan_path: queues_list_artisan_path,
    queues_list_timeout: queues_list_timeout,
    queues_list_queue: queues_list_queue,
    queues_list_tries: queues_list_tries,
    queues_list_env: queues_list_env,
  };
  return apiCall("/app/supervisor", HttpMethod.POST, data).then(
    (response) => response as createSupervisordResponse
  );
}

/**
 * Deletes a supervisord queue for the specified application on the server.
 * @param {number} serverId - Numeric id of the server.
 * @param {number} appId - Numeric id of the application.
 * @param {number} id - Numeric id of the supervisord queue.
 * @returns {Promise<deleteSupervisordQueues>} - Promise resolving with the response from the API.
 * @example
 * {
  "queues_list" : [ {
    "id" : "11",
    "timeout" : "60",
    "sleep" : "3",
    "queue" : "default",
    "tries" : "0",
    "env" : "dev",
    "connection" : "redis",
    "procs" : "1",
    "queue_id" : "abcdefghij_2",
    "artisan_path" : "public_html/artisan"
  } ],
  "status" : true
}
 */
export function deleteSupervisordQueue(
  serverId: number,
  appId: number,
  id: number
): Promise<deleteSupervisordQueues> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall(`/app/supervisor/${id}`, HttpMethod.DELETE, data).then(
    (response) => response as deleteSupervisordQueues
  );
}

/**
 * Retrieves the status of supervisord queues for the specified application on the server.
 * @param {number} serverId - Numeric id of the server.
 * @param {number} appId - Numeric id of the application.
 * @returns {Promise<getSupervisordQueueStatus>} - Promise resolving with the status of supervisord queues.
 * @example
 * {
  "response" : [ {
    "details" : "pid 2679, uptime 3:31:07",
    "queue_id" : "xpsahsdas_003_00",
    "state" : "RUNNING"
  } ],
  "status" : true
}
 */
export function getupervisordQueueStatus(
  serverId: number,
  appId: number
): Promise<getSupervisordQueueStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/supervisor/queue/status", HttpMethod.GET, data).then(
    (response) => response as getSupervisordQueueStatus
  );
}

/**
 * Retrieves the list of supervisord queues for the specified application on the server.
 * @param {number} serverId - Numeric id of the server.
 * @param {number} appId - Numeric id of the application.
 * @returns {Promise<getSupervisordQueuesResponse>} - Promise resolving with the list of supervisord queues.
 * @example
 * {
  "status" : true,
  "is_enabled" : true,
  "queues_list" : [ {
    "id" : "19",
    "timeout" : "60",
    "sleep" : "3",
    "queue" : "default",
    "tries" : "0",
    "env" : "",
    "connection" : "redis",
    "procs" : "1",
    "queue_id" : "abcdefghij_1",
    "artisan_path" : "public_html/artisan"
  } ]
}
 */
export function getupervisordQueues(
  serverId: number,
  appId: number
): Promise<getSupervisordQueuesResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/supervisor", HttpMethod.GET, data).then(
    (response) => response as getSupervisordQueuesResponse
  );
}

/**
 * Restarts a supervisord queue for the specified application on the server.
 * @param {number} serverId - Numeric id of the server.
 * @param {number} appId - Numeric id of the application.
 * @param {number} queueId - Numeric id of the supervisord queue.
 * @returns {Promise<{ response: string; status: boolean }>} - Promise resolving with the restart response and status.
 * @example
 * {
  "response" : "",
  "status" : true
}
 */
export function restartSupervisordQueue(
  serverId: number,
  appId: number,
  queueId: number
): Promise<{ response: string; status: boolean }> {
  const data = {
    server_id: serverId,
    app_id: appId,
    queue_id: queueId,
  };
  return apiCall("/supervisor/queue/restart", HttpMethod.POST, data).then(
    (response) => ({
      response: response.response,
      status: response.status,
    })
  );
}


