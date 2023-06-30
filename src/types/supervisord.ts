export interface CreateSupervisorQueueParameters {
  server_id: number;
  app_id: number;
  queues_list: {
    connection: string;
    procs: number;
    sleep: number;
    artisan_path: string;
    timeout: number;
    queue: string;
    tries: number;
    env: string;
  }[];
}

export interface CreateSupervisorQueueResponse {
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

export interface DeleteSupervisorQueueParameters {
  server_id: number;
  app_id: number;
  id: number;
}

export interface DeleteSupervisorQueueResponse {
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

export interface GetSupervisorQueueStatusParameters {
  server_id: number;
  app_id: number;
}

export interface GetSupervisorQueueStatusResponse {
  response: {
    details: string;
    queue_id: string;
    state: string;
  }[];
  status: boolean;
}

export interface GetSupervisorQueuesParameters {
  server_id: number;
  app_id: number;
}

export interface GetSupervisorQueuesResponse {
  status: boolean;
  is_enabled: boolean;
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
}

export interface RestartSupervisorQueueParameters {
  server_id: number;
  app_id: number;
  queue_id: number;
}

export interface RestartSupervisorQueueResponse {
  response: string;
  status: boolean;
}
