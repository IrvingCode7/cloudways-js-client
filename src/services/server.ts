import axios, { AxiosResponse } from "axios";
import {
  AttachStorageParameters,
  AttachStorageResponse,
  CloneServerParameters,
  CloneServerResponse,
  CreateServerParameters,
  CreateServerResponse,
  DeleteServerParameters,
  DeleteServerResponse,
  DiskUsageResponse,
  GetServersListResponse,
  RestartServerParameters,
  RestartServerResponse,
  ScaleStorageParameters,
  ScaleStorageResponse,
  ScaleVolumeSizeParameters,
  ScaleVolumeSizeResponse,
  SetAutoscalePolicyParameters,
  StartServerParameters,
  StartServerResponse,
  StopServerParameters,
  StopServerResponse,
  UpdateServerLabelParameters,
  UpdateServerLabelResponse,
  UpgradeServerParameters,
  UpgradeServerResponse,
} from "../types/server";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1/server";

export async function attachStorage(
  params: AttachStorageParameters
): Promise<AttachStorageResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse<AttachStorageResponse> = await axios.post(
    `${baseURL}/attachStorage`,
    params
  );
  return response.data;
}

export async function cloneServer(
  params: CloneServerParameters
): Promise<CloneServerResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse<CloneServerResponse> = await axios.post(
    `${baseURL}/cloneServer`,
    params
  );
  return response.data;
}

export async function createServer(
  params: CreateServerParameters
): Promise<CreateServerResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse<CreateServerResponse> = await axios.post(
    `${baseURL}`,
    params
  );
  return response.data;
}

export async function deleteServer(
  params: DeleteServerParameters
): Promise<DeleteServerResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse<DeleteServerResponse> = await axios.delete(
    `${baseURL}/${params.serverId}`
  );
  return response.data;
}

export async function getDiskUsage(
  server_id: number
): Promise<DiskUsageResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse<DiskUsageResponse> = await axios.get(
    `${baseURL}/${server_id}/diskUsage`
  );
  return response.data;
}

export async function getServersList(): Promise<GetServersListResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse<GetServersListResponse> = await axios.get(
    `${baseURL}`
  );
  return response.data;
}

export async function restartServer(
  params: RestartServerParameters
): Promise<RestartServerResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse<RestartServerResponse> = await axios.post(
    `${baseURL}/restart`,
    params
  );
  return response.data;
}

export async function scaleStorage(
  params: ScaleStorageParameters
): Promise<ScaleStorageResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse<ScaleStorageResponse> = await axios.post(
    `${baseURL}/scaleStorage`,
    params
  );
  return response.data;
}

export async function scaleVolumeSize(
  params: ScaleVolumeSizeParameters
): Promise<ScaleVolumeSizeResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse<ScaleVolumeSizeResponse> = await axios.post(
    `${baseURL}/scaleVolume`,
    params
  );
  return response.data;
}

export async function setAutoscalePolicy(
  params: SetAutoscalePolicyParameters
): Promise<void> {
  await axios.post(`${baseURL}/autoScalePolicy`, params);
}

export async function startServer(
  params: StartServerParameters
): Promise<StartServerResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse<StartServerResponse> = await axios.post(
    `${baseURL}/start`,
    params
  );
  return response.data;
}

export async function stopServer(
  params: StopServerParameters
): Promise<StopServerResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse<StopServerResponse> = await axios.post(
    `${baseURL}/stop`,
    params
  );
  return response.data;
}

export async function updateServerLabel(
  params: UpdateServerLabelParameters
): Promise<UpdateServerLabelResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse<UpdateServerLabelResponse> = await axios.put(
    `${baseURL}/${params.serverId}`,
    { label: params.label }
  );
  return response.data;
}

export async function upgradeServer(
  params: UpgradeServerParameters
): Promise<UpgradeServerResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse<UpgradeServerResponse> = await axios.post(
    `${baseURL}/scaleServer`,
    params
  );
  return response.data;
}
