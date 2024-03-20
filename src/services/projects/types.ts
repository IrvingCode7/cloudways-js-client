/**
 * Represents the parameters required to create a new project.
 */
export interface CreateProjectParams {
  /**
   * Name of the project.
   */
  name: string;

  /**
   * Comma separated list of application IDs to be attached to this project.
   */
  app_ids: string;
}

/**
 * Represents the response structure for the create project API.
 */
export interface CreateProjectResponse {
  /**
   * The project object.
   */
  project: {
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
    image: string | null;
  };
}

/**
 * Represents the parameters required to delete a project.
 */
export interface DeleteProjectParams {
  /**
   * Numeric ID of the project to be deleted.
   */
  id: number;
}

/**
 * Represents a single project in the project list.
 */
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
   * Date and time when the project was created.
   */
  created_at: string;

  /**
   * URL of the project's image.
   */
  image: string;
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
 * Represents the parameters required to update a project.
 */
export interface UpdateProjectParams {
  /**
   * Numeric ID of the project to be updated.
   */
  id: number;

  /**
   * New name of the project.
   */
  name: string;

  /**
   * Comma separated list of application IDs to be attached to this project.
   */
  app_ids: string;
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
