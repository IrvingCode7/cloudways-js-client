/**
 * interface to get git deployment history response
 */
export interface gitDeploymentHistoryResponse {
  logs: {
    git_url: string;
    branch_name: string;
    customer_id: string;
    path: null | string;
    result: string;
    datetime: string;
    description: string;
  }[];
}
