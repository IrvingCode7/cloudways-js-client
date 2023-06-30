// types/projects.ts

export interface CreateProjectParameters {
  name: string;
  app_ids: string;
}

export interface CreateProjectResponse {
  project: {
    id: string;
    name: string;
    user_id: string;
    is_default: string;
    created_at: string;
    updated_at: string;
    image: string | null;
  };
}

export interface DeleteProjectParameters {
  id: number;
}

export interface DeleteProjectResponse {
  // Define the response type if available
}

export interface GetProjectListResponse {
  projects: {
    id: string;
    name: string;
    created_at: string;
    image: string;
  }[];
}

export interface UpdateProjectParameters {
  id: number;
  name: string;
  app_ids: string;
}

export interface UpdateProjectResponse {
  project: {
    id: string;
    name: string;
    user_id: string;
    is_default: string;
    created_at: string;
    updated_at: string;
    image: string | null;
  };
}
