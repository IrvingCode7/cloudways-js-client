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
} from "../types/cloudwaysBot";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function createAlertChannel(
  params: CreateAlertChannelParameters
): Promise<CreateAlertChannelResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/integrations`,
    params
  );
  return response.data;
}

export async function deleteAlertChannel(
  params: DeleteAlertChannelParameters
): Promise<DeleteAlertChannelResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.delete(
    `${baseURL}/integrations/${params.channel_id}`
  );
  return response.data;
}

export async function getAllAlerts(): Promise<GetAllAlertsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/alerts`);
  return response.data;
}

export async function getPaginatedAlerts(
  params: GetPaginatedAlertsParameters
): Promise<GetPaginatedAlertsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/alerts/${params.last_id}`
  );
  return response.data;
}

export async function getAllAlertChannels(): Promise<GetAllAlertChannelsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/integrations/create`
  );
  return response.data;
}

export async function getAlertChannels(): Promise<GetAlertChannelsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/integrations`);
  return response.data;
}

export async function markAllAlertsAsRead(): Promise<MarkAllAlertsAsReadResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/alert/markAllRead`
  );
  return response.data;
}

export async function markAlertAsRead(
  params: MarkAlertAsReadParameters
): Promise<MarkAlertAsReadResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/alert/markAsRead/${params.alert_id}`
  );
  return response.data;
}

export async function updateAlertChannel(
  params: UpdateAlertChannelParameters
): Promise<UpdateAlertChannelResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.put(
    `${baseURL}/integrations/${params.channel_id}`,
    params
  );
  return response.data;
}
