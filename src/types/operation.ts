export interface GetOperationStatusResponse {
  operation: {
    id: string;
    type: string;
    server_id: string;
    estimated_time_remaining: string;
    frontend_step_number: string;
    status: string;
    is_completed: string;
    message: string;
    app_id: string;
  };
}
