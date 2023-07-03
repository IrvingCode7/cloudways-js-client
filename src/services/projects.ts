import axios, { AxiosResponse } from "axios";

import {
  CreateProjectParameters,
  CreateProjectResponse,
  DeleteProjectParameters,
  DeleteProjectResponse,
  GetProjectListResponse,
  UpdateProjectParameters,
  UpdateProjectResponse,
} from "../types/projects";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function createProject(
  params: CreateProjectParameters
): Promise<CreateProjectResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/project`,
    params
  );
  return response.data;
}

export async function deleteProject(
  params: DeleteProjectParameters
): Promise<DeleteProjectResponse> {
  const { id } = params;
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.delete(
    `${baseURL}/project/${id}`
  );
  return response.data;
}

export async function getProjectList(): Promise<GetProjectListResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/project`);
  return response.data;
}

export async function updateProject(
  params: UpdateProjectParameters
): Promise<UpdateProjectResponse> {
  const { id, name, app_ids } = params;
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.put(`${baseURL}/project/${id}`, {
    name,
    app_ids,
  });
  return response.data;
}
