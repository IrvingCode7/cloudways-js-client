import { apiCall } from "../core";
import { HttpMethod } from "../core/types";
import type { Project } from "./types";

/**
 * Creates a new project.
 *
 * @param name - The name of the new project.
 * @param appIds - Comma-separated list of app IDs to attach to the project.
 * @returns {Promise<Project>} A promise resolving to the details of the newly created project.
 * @example
 * ```
 * // Example of a successful response:
 * {
 *   "id": "1574",
 *   "name": "Project Name",
 *   "user_id": "12847",
 *   "is_default": "0",
 *   "created_at": "2016-07-13 13:28:58",
 *   "updated_at": "0000-00-00 00:00:00",
 *   "image": null
 * }
 * ```
 */
export async function createProject(
  name: string,
  appIds: string
): Promise<Project> {
  const data = {
    name,
    app_ids: appIds,
  };
  return apiCall("/project", HttpMethod.POST, data).then(
    (response) => response.project
  );
}

/**
 * Deletes a project by its ID.
 *
 * @param id - The numeric ID of the project to delete.
 * @returns A promise that resolves when the project is deleted.
 */
export async function deleteProject(id: number): Promise<void> {
  return apiCall(`/project/${id}`, HttpMethod.DELETE);
}

/**
 * Retrieves a list of all projects.
 *
 * @returns {Promise<Project[]>} A promise resolving to an array of project details.
 * @example
 * ```
 * // Example of a successful response:
 * [
 *   {
 *     "id": "1",
 *     "name": "Default project",
 *     "user_id": "123",
 *     "is_default": "1",
 *     "created_at": "2016-04-14 15:48:35",
 *     "image": "https://example.com/project_pic.png"
 *   }
 * ]
 * ```
 */
export async function getProjectList(): Promise<Project[]> {
  return apiCall("/project").then((response) => response.projects);
}

/**
 * Updates an existing project.
 *
 * @param id - The numeric ID of the project to update.
 * @param name - The new name of the project.
 * @param appIds - Comma-separated list of app IDs to attach to the project.
 * @returns {Promise<Project>} A promise resolving to the updated project details.
 * @example
 * ```
 * // Example of a successful response:
 * {
 *   "id": "1574",
 *   "name": "Updated Project Name",
 *   "user_id": "12847",
 *   "is_default": "0",
 *   "created_at": "2016-07-13 13:28:58",
 *   "updated_at": "2024-01-01 12:00:00",
 *   "image": null
 * }
 * ```
 */
export async function updateProject(
  id: number,
  name: string,
  appIds: string
): Promise<Project> {
  const data = {
    name,
    app_ids: appIds,
  };

  return apiCall(`/project/${id}`, HttpMethod.PUT, data).then(
    (response) => response.project
  );
}
