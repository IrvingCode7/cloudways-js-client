// Define an interface for the operation status response
export interface OperationStatus {
  id: string;
  type: string;
  server_id: string;
  estimated_time_remaining: string;
  frontend_step_number: string;
  status: string;
  is_completed: string;
  parameters?: string;
  message: string;
  app_id: string;
}

export interface GetOperationStatusResponse {
  operation: OperationStatus;
}
