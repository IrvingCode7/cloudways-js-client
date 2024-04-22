import { apiCall } from "../core";
import { HttpMethod } from "../core/types";
import type { gitDeploymentHistoryResponse } from "./types";

/**
 * Generates a SSH key for Git on the specified server and application.
 *
 * @param {number} serverId - Numeric ID of the server.
 * @param {number} appId - Numeric ID of the application.
 * @returns {Promise<void>} A promise that resolves when the SSH key is generated.
 */
export function generateGitSsh(serverId: number, appId: number): Promise<void> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/git/generateKey", HttpMethod.POST, data);
}

/**
 * Retrieves the list of branch names from the Git repository associated with the specified server and application.
 * 
 * @param {number} serverId - Numeric ID of the server.
 * @param {number} appId - Numeric ID of the application.
 * @param {string} gitUrl - Git repository address.
 * @returns {Promise<{ branches : string[]}>} A promise that resolves with an array of branch names.
 * @example
 * {
  "branches" : [ "master", "staging" ]
}
 */
export function getBranchNames(
  serverId: number,
  appId: number,
  gitUrl: string
): Promise<{ branches: string[] }> {
  const data = {
    server_id: serverId,
    app_id: appId,
    git_url: gitUrl,
  };
  return apiCall("/git/branchNames", HttpMethod.GET, data).then((response) => ({
    branches: response.branches,
  }));
}

/**
 * Retrieves the recent deployment history for a Git repository.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<gitDeploymentHistoryResponse>} A Promise that resolves to an object containing the deployment history.
 * @example
 * {
  "logs" : [ {
    "git_url" : "git@bitbucket.org:user/difftest.git",
    "branch_name" : "master",
    "customer_id" : "5",
    "path" : null,
    "result" : "1",
    "datetime" : "05, 07, 2016 - 13:09",
    "description" : "running"
  } ]
}
 */
export function getGitDeploymentHistory(
  serverId: number,
  appId: number
): Promise<gitDeploymentHistoryResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/git/history", HttpMethod.GET, data).then(
    (response) => response as gitDeploymentHistoryResponse
  );
}

/**
 * Retrieves the SSH key for Git deployment.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @returns {Promise<{ key: string }>} A Promise that resolves to an object containing the SSH key.
 * @example
 * {
  "key" : "aeiou"
}
 */
export function getGitSsh(
  serverId: number,
  appId: number
): Promise<{ key: string }> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/git/key", HttpMethod.GET, data).then((response) => ({
    key: response.key,
  }));
}

/**
 * Initiates a Git clone operation.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} git_url - The Git repository URL.
 * @param {string} branch_name - The name of the branch to clone.
 * @param {string} deploy_path - The path where the repository will be deployed.
 * @returns {Promise<{ operation_id: number }>} A Promise that resolves to an object containing the operation ID.
 * @example
 * {
  "operation_id" : 12345
}
 */
export function startGitClone(
  serverId: number,
  appId: number,
  git_url: string,
  brach_name: string,
  deploy_path: string
): Promise<{ operation_id: number }> {
  const data = {
    server_id: serverId,
    app_id: appId,
    git_url: git_url,
    brach_name: brach_name,
    deploy_path: deploy_path,
  };
  return apiCall("/git/clone", HttpMethod.POST, data).then((response) => ({
    operation_id: response.operation_id,
  }));
}

/**
 * Initiates a Git pull operation.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {string} branch_name - The name of the branch to pull.
 * @param {string} deploy_path - The path where the repository will be deployed.
 * @returns {Promise<{ operation_id: number }>} A Promise that resolves to an object containing the operation ID.
 * @example
 * {
  "operation_id" : 12345
}
 */
export function startGitPull(
  serverId: number,
  appId: number,
  brach_name: string,
  deploy_path: string
): Promise<{ operation_id: number }> {
  const data = {
    server_id: serverId,
    app_id: appId,
    brach_name: brach_name,
    deploy_path: deploy_path,
  };
  return apiCall("/git/pull", HttpMethod.POST, data).then((response) => ({
    operation_id: response.operation_id,
  }));
}
