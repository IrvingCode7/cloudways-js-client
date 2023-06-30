import axios, { AxiosResponse } from "axios";

import {
  CreateAlertChannelParameters,
  CreateAlertChannelResponse,
  DeleteAlertChannelParameters,
  DeleteAlertChannelResponse,
  GetAllAlertsResponse,
  GetPaginatedAlertsParameters,
  GetPaginatedAlertsResponse,
  GetAllAlertChannelsResponse,
  GetAlertChannelsResponse,
  MarkAllAlertsAsReadResponse,
  MarkAlertAsReadParameters,
  MarkAlertAsReadResponse,
  UpdateAlertChannelParameters,
  UpdateAlertChannelResponse,
} from "../types/cloudwaysBot.js";
import { getAccessToken } from "./authentication.js";
const baseURL = "https://api.cloudways.com/api/v1";
// replace this with your actual access token
const accessToken = getAccessToken();

axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

const cloudwaysBot = {
  createAlertChannel: async (
    params: CreateAlertChannelParameters
  ): Promise<CreateAlertChannelResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/integrations`,
      params
    );
    return response.data;
  },

  deleteAlertChannel: async (
    params: DeleteAlertChannelParameters
  ): Promise<DeleteAlertChannelResponse> => {
    const response: AxiosResponse = await axios.delete(
      `${baseURL}/integrations/${params.channel_id}`
    );
    return response.data;
  },

  getAllAlerts: async (): Promise<GetAllAlertsResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/alerts`);
    return response.data;
  },

  getPaginatedAlerts: async (
    params: GetPaginatedAlertsParameters
  ): Promise<GetPaginatedAlertsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/alerts/${params.last_id}`
    );
    return response.data;
  },

  getAllAlertChannels: async (): Promise<GetAllAlertChannelsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/integrations/create`
    );
    return response.data;
  },

  getAlertChannels: async (): Promise<GetAlertChannelsResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/integrations`);
    return response.data;
  },

  markAllAlertsAsRead: async (): Promise<MarkAllAlertsAsReadResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/alert/markAllRead`
    );
    return response.data;
  },

  markAlertAsRead: async (
    params: MarkAlertAsReadParameters
  ): Promise<MarkAlertAsReadResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/alert/markAsRead/${params.alert_id}`
    );
    return response.data;
  },

  updateAlertChannel: async (
    params: UpdateAlertChannelParameters
  ): Promise<UpdateAlertChannelResponse> => {
    const response: AxiosResponse = await axios.put(
      `${baseURL}/integrations/${params.channel_id}`,
      params
    );
    return response.data;
  },
};

export default cloudwaysBot;
