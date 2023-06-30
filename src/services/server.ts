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
} from "../types/server.js";
import { getAccessToken } from "./authentication.js";
const baseURL = "https://api.cloudways.com/api/v1";
// replace this with your actual access token
const accessToken = getAccessToken();

axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
const server = {
  attachStorage: async (
    params: AttachStorageParameters
  ): Promise<AttachStorageResponse> => {
    const response: AxiosResponse<AttachStorageResponse> = await axios.post(
      `${baseURL}/attachStorage`,
      params
    );
    return response.data;
  },

  cloneServer: async (
    params: CloneServerParameters
  ): Promise<CloneServerResponse> => {
    const response: AxiosResponse<CloneServerResponse> = await axios.post(
      `${baseURL}/cloneServer`,
      params
    );
    return response.data;
  },

  createServer: async (
    params: CreateServerParameters
  ): Promise<CreateServerResponse> => {
    const response: AxiosResponse<CreateServerResponse> = await axios.post(
      `${baseURL}`,
      params
    );
    return response.data;
  },

  deleteServer: async (
    params: DeleteServerParameters
  ): Promise<DeleteServerResponse> => {
    const response: AxiosResponse<DeleteServerResponse> = await axios.delete(
      `${baseURL}/${params.serverId}`
    );
    return response.data;
  },

  getDiskUsage: async (server_id: number): Promise<DiskUsageResponse> => {
    const response: AxiosResponse<DiskUsageResponse> = await axios.get(
      `${baseURL}/${server_id}/diskUsage`
    );
    return response.data;
  },

  getServersList: async (): Promise<GetServersListResponse> => {
    const response: AxiosResponse<GetServersListResponse> = await axios.get(
      `${baseURL}`
    );
    return response.data;
  },

  restartServer: async (
    params: RestartServerParameters
  ): Promise<RestartServerResponse> => {
    const response: AxiosResponse<RestartServerResponse> = await axios.post(
      `${baseURL}/restart`,
      params
    );
    return response.data;
  },

  scaleStorage: async (
    params: ScaleStorageParameters
  ): Promise<ScaleStorageResponse> => {
    const response: AxiosResponse<ScaleStorageResponse> = await axios.post(
      `${baseURL}/scaleStorage`,
      params
    );
    return response.data;
  },

  scaleVolumeSize: async (
    params: ScaleVolumeSizeParameters
  ): Promise<ScaleVolumeSizeResponse> => {
    const response: AxiosResponse<ScaleVolumeSizeResponse> = await axios.post(
      `${baseURL}/scaleVolume`,
      params
    );
    return response.data;
  },

  setAutoscalePolicy: async (
    params: SetAutoscalePolicyParameters
  ): Promise<void> => {
    await axios.post(`${baseURL}/autoScalePolicy`, params);
  },

  startServer: async (
    params: StartServerParameters
  ): Promise<StartServerResponse> => {
    const response: AxiosResponse<StartServerResponse> = await axios.post(
      `${baseURL}/start`,
      params
    );
    return response.data;
  },

  stopServer: async (
    params: StopServerParameters
  ): Promise<StopServerResponse> => {
    const response: AxiosResponse<StopServerResponse> = await axios.post(
      `${baseURL}/stop`,
      params
    );
    return response.data;
  },

  updateServerLabel: async (
    params: UpdateServerLabelParameters
  ): Promise<UpdateServerLabelResponse> => {
    const response: AxiosResponse<UpdateServerLabelResponse> = await axios.put(
      `${baseURL}/${params.serverId}`,
      { label: params.label }
    );
    return response.data;
  },

  upgradeServer: async (
    params: UpgradeServerParameters
  ): Promise<UpgradeServerResponse> => {
    const response: AxiosResponse<UpgradeServerResponse> = await axios.post(
      `${baseURL}/scaleServer`,
      params
    );
    return response.data;
  },
};

export default server;
