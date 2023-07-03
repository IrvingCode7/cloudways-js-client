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
} from "../types/stagingManagement";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function synchronizeApplication(
  params: SynchronizeApplicationParameters
): Promise<SynchronizeApplicationResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/sync/app`,
    params
  );
  return response.data;
}

export async function htaccessAuthCredentials(
  params: HtaccessAuthCredentialsParameters
): Promise<HtaccessAuthCredentialsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/staging/auth/status`,
    params
  );
  return response.data;
}

export async function htaccessUpdateCredentials(
  params: HtaccessUpdateCredentialsParameters
): Promise<HtaccessUpdateCredentialsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/staging/htaccessUpdate`,
    params
  );
  return response.data;
}

export async function stagingApplicationDeploymentLogs(
  params: StagingApplicationDeploymentLogsParameters
): Promise<StagingApplicationDeploymentLogsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/staging/app/logs`,
    params
  );
  return response.data;
}

export async function stagingDeleteLocalBackup(
  params: StagingDeleteLocalBackupParameters
): Promise<StagingDeleteLocalBackupResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/staging/app/deleteBackup`,
    params
  );
  return response.data;
}
