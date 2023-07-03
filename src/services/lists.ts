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
} from "../types/lists.js";
import { GetAppSettingValueResponse } from "../types/appManagement.js";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";
// replace this with your actual access token
const accessToken = getAccessToken();

axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

const lists = {
  getApps: async (): Promise<GetAppSettingValueResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/apps`);
    return response.data;
  },

  getBackupFrequencies: async (): Promise<GetBackupFrequenciesResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/backup-frequencies`
    );
    return response.data;
  },

  getCountries: async (): Promise<GetCountriesListResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/countries`);
    return response.data;
  },

  getMonitorDurations: async (): Promise<GetMonitorDurationsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/monitor_durations`
    );
    return response.data;
  },

  getMonitorTargets: async (): Promise<GetMonitorTargetsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/monitor_targets`
    );
    return response.data;
  },

  getPackages: async (): Promise<GetPackageListResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/packages`);
    return response.data;
  },

  getProviders: async (): Promise<GetProviderListResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/providers`);
    return response.data;
  },

  getRegions: async (): Promise<GetRegionListResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/regions`);
    return response.data;
  },

  getServerSizes: async (): Promise<GetServerSizesListResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/server_sizes`);
    return response.data;
  },

  getSettingsList: async (): Promise<GetSettingsListResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/settings`);
    return response.data;
  },
};

module.exports = lists;
