export interface GenerateGitSSHParameters {
  server_id: number;
  app_id: number;
}

export interface GenerateGitSSHResponse {
  // Define the response type if available
}

export interface GetBranchNamesParameters {
  server_id: number;
  app_id: number;
  git_url: string;
}

export interface GetBranchNamesResponse {
  branches: string[];
}

export interface GetGitDeploymentHistoryParameters {
  server_id: number;
  app_id: number;
}

export interface GitDeploymentLog {
  git_url: string;
  branch_name: string;
  customer_id: string;
  path: string | null;
  result: string;
  datetime: string;
  description: string;
}

export interface GetGitDeploymentHistoryResponse {
  logs: GitDeploymentLog[];
}

export interface GetGitSSHParameters {
  server_id: number;
  app_id: number;
}

export interface GetGitSSHResponse {
  key: string;
}

export interface StartGitCloneParameters {
  server_id: number;
  app_id: number;
  git_url: string;
  branch_name: string;
  deploy_path: string;
}

export interface StartGitCloneResponse {
  operation_id: number;
}

export interface StartGitPullParameters {
  server_id: number;
  app_id: number;
  branch_name: string;
  deploy_path: string;
}

export interface StartGitPullResponse {
  operation_id: number;
}
