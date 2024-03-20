import type {
  CreateProjectParams,
  CreateProjectResponse,
  DeleteProjectParams,
  GetProjectListResponse,
  UpdateProjectParams,
  UpdateProjectResponse,
} from "./types";
import { apiCall } from "../core";
import { HttpMethod } from "../core/types";

/**
 * Creates a new project by making a POST request to the specified API endpoint.
 *
 * @param {CreateProjectParams} params The parameters required for creating a new project, including the project name and associated application IDs.
 * @returns {Promise<CreateProjectResponse>} A promise that resolves to the response of the project creation process.
 * @throws {Error} Throws an error if the request fails.
 */
export async function createProject(
  params: CreateProjectParams
): Promise<CreateProjectResponse> {
  return apiCall("/project", HttpMethod.POST, params);
}

/**
 * Deletes a project by making a DELETE request to the specified API endpoint.
 *
 * @param {DeleteProjectParams} params The parameters required for deleting a project, including the numeric project ID.
 * @returns {Promise<void>} A promise that resolves when the project is successfully deleted.
 * @throws {Error} Throws an error if the request fails.
 */
export async function deleteProject(
  params: DeleteProjectParams
): Promise<void> {
  return apiCall(`/project/${params.id}`, HttpMethod.DELETE);
}

/**
 * Retrieves a list of projects by making a GET request to the specified API endpoint.
 *
 * @returns {Promise<GetProjectListResponse>} A promise that resolves to the response containing the list of projects.
 * @throws {Error} Throws an error if the request fails.
 */
export async function getProjectList(): Promise<GetProjectListResponse> {
  return apiCall("/project");
}

/**
 * Updates a project by making a PUT request to the specified API endpoint.
 *
 * @param {UpdateProjectParams} params The parameters required for updating the project, including the project ID, new name, and associated application IDs.
 * @returns {Promise<UpdateProjectResponse>} A promise that resolves to the response of the project update process.
 * @throws {Error} Throws an error if the request fails.
 */
export async function updateProject(
  params: UpdateProjectParams
): Promise<UpdateProjectResponse> {
  return apiCall(`/project/${params.id}`, HttpMethod.PUT, params);
}
