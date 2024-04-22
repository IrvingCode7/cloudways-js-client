/**
 * Insterface to create a Supervisord queue
 */

export interface createSupervisordResponse {
  queues_list: {
    id: string;
    timeout: string;
    sleep: string;
    queue: string;
    tries: string;
    env: string;
    connection: string;
    procs: string;
    queue_id: string;
    artisan_path: string;
  }[];
  status: boolean;
}

/**
 * Interface to delete supervisord queue
 */
export interface deleteSupervisordQueues {
  queues_list: {
    id: string;
    timeout: string;
    sleep: string;
    queue: string;
    tries: string;
    env: string;
    connection: string;
    procs: string;
    queue_id: string;
    artisan_path: string;
  }[];
  status: boolean;
}

/**
 * Interface to get status of supervisord queue
 */
export interface getSupervisordQueueStatus {
  response: {
    details: string;
    queue_id: string;
    state: string;
  }[];
  status: boolean;
}

/**
 * Interface to get supervisord queuea
 */
export interface getSupervisordQueuesResponse {
  status: boolean;
  is_enabled: boolean;
  queues_list:
    {
      id: string;
      timeout: string;
      sleep: string;
      queue: string;
      tries: string;
      env: string;
      connection: string;
      procs: string;
      queue_id: string;
      artisan_path: string;
    }[];
}
