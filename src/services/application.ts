import axios, { AxiosResponse } from "axios";
import {
  AddAppParameters,
  AddAppResponse,
  CloneAppParameters,
  CloneAppResponse,
  CloneAppToOtherServerParameters,
  CloneAppToOtherServerResponse,
  CloneStagingAppParameters,
  CloneStagingAppResponse,
  CloneStagingAppToOtherServerParameters,
  CloneStagingAppToOtherServerResponse,
  DeleteAppParameters,
  DeleteAppResponse,
  UpdateAppLabelParameters,
  UpdateAppLabelResponse,
} from "../types/application";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function addApp(
  params: AddAppParameters
): Promise<AddAppResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(`${baseURL}/app`, params);
  return response.data;
}

export async function cloneApp(
  params: CloneAppParameters
): Promise<CloneAppResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/clone`,
    params
  );
  return response.data;
}

export async function cloneAppToOtherServer(
  params: CloneAppToOtherServerParameters
): Promise<CloneAppToOtherServerResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/cloneToOtherServer`,
    params
  );
  return response.data;
}

export async function cloneStagingApp(
  params: CloneStagingAppParameters
): Promise<CloneStagingAppResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/staging/app/cloneApp`,
    params
  );
  return response.data;
}

export async function cloneStagingAppToOtherServer(
  params: CloneStagingAppToOtherServerParameters
): Promise<CloneStagingAppToOtherServerResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/staging/app/cloneToOtherServer`,
    params
  );
  return response.data;
}

export async function deleteApp(
  params: DeleteAppParameters
): Promise<DeleteAppResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.delete(
    `${baseURL}/app/${params.appId}`,
    { params }
  );
  return response.data;
}

export async function updateAppLabel(
  params: UpdateAppLabelParameters
): Promise<UpdateAppLabelResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.put(
    `${baseURL}/app/${params.appId}`,
    params
  );
  return response.data;
}
