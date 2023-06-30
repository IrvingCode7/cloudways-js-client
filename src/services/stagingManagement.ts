import axios, { AxiosResponse } from "axios";

import {
  SynchronizeApplicationParameters,
  HtaccessAuthCredentialsParameters,
  HtaccessUpdateCredentialsParameters,
  StagingApplicationDeploymentLogsParameters,
  StagingDeleteLocalBackupParameters,
  SynchronizeApplicationResponse,
  HtaccessAuthCredentialsResponse,
  HtaccessUpdateCredentialsResponse,
  StagingApplicationDeploymentLogsResponse,
  StagingDeleteLocalBackupResponse,
} from "../types/stagingManagement.js";
const baseURL = "https://api.cloudways.com/api/v1";

const stagingManagement = {
  // Existing functions...

  synchronizeApplication: async (
    params: SynchronizeApplicationParameters
  ): Promise<SynchronizeApplicationResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/sync/app`,
      params
    );
    return response.data;
  },

  htaccessAuthCredentials: async (
    params: HtaccessAuthCredentialsParameters
  ): Promise<HtaccessAuthCredentialsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/staging/auth/status`,
      params
    );
    return response.data;
  },

  htaccessUpdateCredentials: async (
    params: HtaccessUpdateCredentialsParameters
  ): Promise<HtaccessUpdateCredentialsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/staging/htaccessUpdate`,
      params
    );
    return response.data;
  },

  stagingApplicationDeploymentLogs: async (
    params: StagingApplicationDeploymentLogsParameters
  ): Promise<StagingApplicationDeploymentLogsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/staging/app/logs`,
      params
    );
    return response.data;
  },

  stagingDeleteLocalBackup: async (
    params: StagingDeleteLocalBackupParameters
  ): Promise<StagingDeleteLocalBackupResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/staging/app/deleteBackup`,
      params
    );
    return response.data;
  },
};

export default stagingManagement;
