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
} from "../types/supervisord.js";
const baseURL = "https://api.cloudways.com/api/v1";

const supervisord = {
  // Existing functions...
  createSupervisorQueue: async (
    params: CreateSupervisorQueueParameters
  ): Promise<CreateSupervisorQueueResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/app/supervisor`,
      params
    );
    return response.data;
  },

  deleteSupervisorQueue: async (
    params: DeleteSupervisorQueueParameters
  ): Promise<DeleteSupervisorQueueResponse> => {
    const { server_id, app_id, id } = params;
    const response: AxiosResponse = await axios.delete(
      `${baseURL}/app/supervisor/${id}`,
      {
        params: { server_id, app_id },
      }
    );
    return response.data;
  },

  getSupervisorQueueStatus: async (
    params: GetSupervisorQueueStatusParameters
  ): Promise<GetSupervisorQueueStatusResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/supervisor/queue/status`,
      {
        params,
      }
    );
    return response.data;
  },

  getSupervisorQueues: async (
    params: GetSupervisorQueuesParameters
  ): Promise<GetSupervisorQueuesResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/supervisor`,
      { params }
    );
    return response.data;
  },

  restartSupervisorQueue: async (
    params: RestartSupervisorQueueParameters
  ): Promise<RestartSupervisorQueueResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/supervisor/queue/restart`,
      params
    );
    return response.data;
  },
};

export default supervisord;
