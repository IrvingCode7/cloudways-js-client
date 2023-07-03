import axios, { AxiosResponse } from "axios";

import {
  ChangeServiceStateParameters,
  ChangeServiceStateResponse,
  GetServicesStatusParameters,
  GetServicesStatusResponse,
  GetAppVarnishStateParameters,
  GetAppVarnishStateResponse,
  UpdateServerVarnishStateParameters,
  UpdateServerVarnishStateResponse,
  UpdateAppVarnishStateParameters,
  UpdateAppVarnishStateResponse,
} from "../types/service";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";
// replace this with your actual access token
const accessToken = getAccessToken();

axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

export async function changeServiceState(
  params: ChangeServiceStateParameters
): Promise<ChangeServiceStateResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/service/state`,
    params
  );
  return response.data;
}

export async function getServicesStatus(
  params: GetServicesStatusParameters
): Promise<GetServicesStatusResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/service`, {
    params,
  });
  return response.data;
}

export async function getAppVarnishState(
  params: GetAppVarnishStateParameters
): Promise<GetAppVarnishStateResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/service/appVarnish`,
    { params }
  );
  return response.data;
}

export async function updateServerVarnishState(
  params: UpdateServerVarnishStateParameters
): Promise<UpdateServerVarnishStateResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/service/varnish`,
    params
  );
  return response.data;
}

export async function updateAppVarnishState(
  params: UpdateAppVarnishStateParameters
): Promise<UpdateAppVarnishStateResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/service/appVarnish`,
    params
  );
  return response.data;
}
