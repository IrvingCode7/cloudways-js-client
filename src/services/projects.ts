import axios, { AxiosResponse } from "axios";

import {
  CreateProjectParameters,
  CreateProjectResponse,
  DeleteProjectParameters,
  DeleteProjectResponse,
  GetProjectListResponse,
  UpdateProjectParameters,
  UpdateProjectResponse,
} from "../types/projects.js";
const baseURL = "https://api.cloudways.com/api/v1";

const projects = {
  createProject: async (
    params: CreateProjectParameters
  ): Promise<CreateProjectResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/project`,
      params
    );
    return response.data;
  },

  deleteProject: async (
    params: DeleteProjectParameters
  ): Promise<DeleteProjectResponse> => {
    const { id } = params;
    const response: AxiosResponse = await axios.delete(
      `${baseURL}/project/${id}`
    );
    return response.data;
  },

  getProjectList: async (): Promise<GetProjectListResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/project`);
    return response.data;
  },

  updateProject: async (
    params: UpdateProjectParameters
  ): Promise<UpdateProjectResponse> => {
    const { id, name, app_ids } = params;
    const response: AxiosResponse = await axios.put(
      `${baseURL}/project/${id}`,
      {
        name,
        app_ids,
      }
    );
    return response.data;
  },
};

export default projects;
