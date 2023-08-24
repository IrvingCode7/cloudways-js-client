import { apiCall, HttpMethod } from "../auth";

/**
 * @interface Project
 * @description Interface defining the structure for a Project entity.
 * @property {string} id - Unique identifier for the project.
 * @property {string} name - The name of the project.
 * @property {string} user_id - The unique identifier for the user to whom the project belongs.
 * @property {string} is_default - Flag indicating whether the project is set as default for the user. Usually "0" for false, "1" for true.
 * @property {string} created_at - The date and time when the project was created, typically in ISO 8601 format.
 * @property {string} updated_at - The date and time when the project was last updated, typically in ISO 8601 format.
 * @property {string | null} image - URL to an image representing the project, or `null` if there is no image.
 */
interface Project {
  id: string;
  name: string;
  user_id: string;
  is_default: string;
  created_at: string;
  updated_at: string;
  image: string | null;
}

/**
 * @interface ProjectResponse
 * @description Interface defining the structure of the API response when querying for a single project.
 * @property {Project} project - The project entity returned from the API.
 */
interface ProjectResponse {
  project: Project;
}

/**
 * @interface ProjectsResponse
 * @description Interface defining the structure of the API response when querying for multiple projects.
 * @property {Project[]} projects - An array of project entities returned from the API.
 */
interface ProjectsResponse {
  projects: Project[];
}

/**
 * Create a new project.
 * @param {string} name - The name of the project.
 * @param {string} appIds - Comma separated list of app IDs to be attached to this project.
 * @returns {Promise<ProjectResponse>} - The project details.
 */
export async function createProject(
  name: string,
  appIds: string
): Promise<ProjectResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/project";
  const data = { name, app_ids: appIds };

  return apiCall(endpoint, HttpMethod.POST, data);
}

/**
 * Delete a project by ID.
 * @param {number} id - The ID of the project to delete.
 * @returns {Promise<void>}
 */
export async function deleteProject(id: number): Promise<void> {
  const endpoint = `https://api.cloudways.com/api/v1/project/${id}`;

  return apiCall(endpoint, HttpMethod.DELETE);
}

/**
 * Get the list of all projects.
 * @returns {Promise<ProjectsResponse>} - An array of project details.
 */
export async function getProjects(): Promise<ProjectsResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/project";

  const response = await apiCall(endpoint, HttpMethod.GET);
  return response;
}

/**
 * Update an existing project.
 * @param {number} id - The ID of the project to update.
 * @param {string} name - The new name for the project.
 * @param {string} appIds - Comma separated list of new app IDs to be attached to this project.
 * @returns {Promise<ProjectResponse>} - The updated project details.
 */
export async function updateProject(
  id: number,
  name: string,
  appIds: string
): Promise<ProjectResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/project/${id}`;
  const data = { name, app_ids: appIds };

  return apiCall(endpoint, HttpMethod.PUT, data);
}
