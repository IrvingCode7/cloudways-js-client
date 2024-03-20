/**
 * Represents the response structure for the create project API.
 */
export interface CreateProjectResponse {
  /**
   * The project object.
   */
  project: Project;
}

export interface Project {
  /**
   * Unique identifier of the project.
   */
  id: string;

  /**
   * Name of the project.
   */
  name: string;

  /**
   * User ID associated with the project.
   */
  user_id: string;

  /**
   * Indicates if this is the default project.
   */
  is_default: string;

  /**
   * Date and time when the project was created.
   */
  created_at: string;

  /**
   * Date and time when the project was last updated.
   */
  updated_at: string;

  /**
   * Image associated with the project, if any.
   */
  image?: string | null;
}

/**
 * Represents the response structure for the get project list API.
 */
export interface GetProjectListResponse {
  /**
   * Array of projects.
   */
  projects: Project[];
}

/**
 * Represents the response structure for the update project API.
 */
export interface UpdateProjectResponse {
  /**
   * The updated project object.
   */
  project: Project;
}
