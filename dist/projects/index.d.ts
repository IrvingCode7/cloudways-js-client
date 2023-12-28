/**
 * Represents the parameters required to create a new project.
 */
interface CreateProjectParams {
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
interface CreateProjectResponse {
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
interface DeleteProjectParams {
    /**
     * Numeric ID of the project to be deleted.
     */
    id: number;
}
/**
 * Represents a single project in the project list.
 */
interface Project {
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
interface GetProjectListResponse {
    /**
     * Array of projects.
     */
    projects: Project[];
}
/**
 * Represents the parameters required to update a project.
 */
interface UpdateProjectParams {
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
interface UpdateProjectResponse {
    /**
     * The updated project object.
     */
    project: Project;
}

/**
 * Creates a new project by making a POST request to the specified API endpoint.
 *
 * @param {CreateProjectParams} params The parameters required for creating a new project, including the project name and associated application IDs.
 * @returns {Promise<CreateProjectResponse>} A promise that resolves to the response of the project creation process.
 * @throws {Error} Throws an error if the request fails.
 */
declare function createProject(params: CreateProjectParams): Promise<CreateProjectResponse>;
/**
 * Deletes a project by making a DELETE request to the specified API endpoint.
 *
 * @param {DeleteProjectParams} params The parameters required for deleting a project, including the numeric project ID.
 * @returns {Promise<void>} A promise that resolves when the project is successfully deleted.
 * @throws {Error} Throws an error if the request fails.
 */
declare function deleteProject(params: DeleteProjectParams): Promise<void>;
/**
 * Retrieves a list of projects by making a GET request to the specified API endpoint.
 *
 * @returns {Promise<GetProjectListResponse>} A promise that resolves to the response containing the list of projects.
 * @throws {Error} Throws an error if the request fails.
 */
declare function getProjectList(): Promise<GetProjectListResponse>;
/**
 * Updates a project by making a PUT request to the specified API endpoint.
 *
 * @param {UpdateProjectParams} params The parameters required for updating the project, including the project ID, new name, and associated application IDs.
 * @returns {Promise<UpdateProjectResponse>} A promise that resolves to the response of the project update process.
 * @throws {Error} Throws an error if the request fails.
 */
declare function updateProject(params: UpdateProjectParams): Promise<UpdateProjectResponse>;

export { createProject, deleteProject, getProjectList, updateProject };
