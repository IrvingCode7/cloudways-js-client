import axios, { AxiosResponse } from "axios";
import {
  CreateSupervisorQueueParameters,
  CreateSupervisorQueueResponse,
  DeleteSupervisorQueueParameters,
  DeleteSupervisorQueueResponse,
  GetSupervisorQueueStatusParameters,
  GetSupervisorQueueStatusResponse,
  GetSupervisorQueuesParameters,
  GetSupervisorQueuesResponse,
  RestartSupervisorQueueParameters,
  RestartSupervisorQueueResponse,
} from "../types/supervisord";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function createSupervisorQueue(
  params: CreateSupervisorQueueParameters
): Promise<CreateSupervisorQueueResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/supervisor`,
    params
  );
  return response.data;
}

export async function deleteSupervisorQueue(
  params: DeleteSupervisorQueueParameters
): Promise<DeleteSupervisorQueueResponse> {
  const { server_id, app_id, id } = params;
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.delete(
    `${baseURL}/app/supervisor/${id}`,
    {
      params: { server_id, app_id },
    }
  );
  return response.data;
}

export async function getSupervisorQueueStatus(
  params: GetSupervisorQueueStatusParameters
): Promise<GetSupervisorQueueStatusResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/supervisor/queue/status`,
    {
      params,
    }
  );
  return response.data;
}

export async function getSupervisorQueues(
  params: GetSupervisorQueuesParameters
): Promise<GetSupervisorQueuesResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/app/supervisor`, {
    params,
  });
  return response.data;
}

export async function restartSupervisorQueue(
  params: RestartSupervisorQueueParameters
): Promise<RestartSupervisorQueueResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/supervisor/queue/restart`,
    params
  );
  return response.data;
}
