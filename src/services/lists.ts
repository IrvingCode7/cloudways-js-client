import axios, { AxiosResponse } from "axios";
import {
  GetBackupFrequenciesResponse,
  GetCountriesListResponse,
  GetMonitorDurationsResponse,
  GetMonitorTargetsResponse,
  GetPackageListResponse,
  GetProviderListResponse,
  GetRegionListResponse,
  GetServerSizesListResponse,
  GetSettingsListResponse,
} from "../types/lists";
import { GetAppSettingValueResponse } from "../types/appManagement.js";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function getApps(): Promise<GetAppSettingValueResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/apps`);
  return response.data;
}

export async function getBackupFrequencies(): Promise<GetBackupFrequenciesResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/backup-frequencies`
  );
  return response.data;
}

export async function getCountries(): Promise<GetCountriesListResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/countries`);
  return response.data;
}

export async function getMonitorDurations(): Promise<GetMonitorDurationsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/monitor_durations`
  );
  return response.data;
}

export async function getMonitorTargets(): Promise<GetMonitorTargetsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/monitor_targets`);
  return response.data;
}

export async function getPackages(): Promise<GetPackageListResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/packages`);
  return response.data;
}

export async function getProviders(): Promise<GetProviderListResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/providers`);
  return response.data;
}

export async function getRegions(): Promise<GetRegionListResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/regions`);
  return response.data;
}

export async function getServerSizes(): Promise<GetServerSizesListResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/server_sizes`);
  return response.data;
}

export async function getSettingsList(): Promise<GetSettingsListResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/settings`);
  return response.data;
}
