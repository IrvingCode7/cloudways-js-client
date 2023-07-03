// api/server.ts

import axios, { AxiosResponse } from "axios";
import {
  BackupServerParameters,
  BackupServerResponse,
  DeleteLocalServerBackupsParameters,
  DeleteLocalServerBackupsResponse,
  GetMonitoringGraphParameters,
  GetMonitoringGraphResponse,
  GetServerSettingsParameters,
  GetServerSettingsResponse,
  GetServerMaintenanceWindowSettingsParameters,
  GetServerMaintenanceWindowSettingsResponse,
  UpdateServerMaintenanceWindowSettingsParameters,
  UpdateServerMaintenanceWindowSettingsResponse,
  UpdateBackupSettingsParameters,
  UpdateBackupSettingsResponse,
  UpdateMasterPasswordParameters,
  UpdateMasterPasswordResponse,
  UpdateMasterUsernameParameters,
  UpdateMasterUsernameResponse,
  UpdateServerPackageParameters,
  UpdateServerPackageResponse,
  UpdateServerSettingsParameters,
  UpdateServerSettingsResponse,
  UpdateSnapshotFrequencyParameters,
  UpdateSnapshotFrequencyResponse,
  GetDiskCleanupSettingsParameters,
  GetDiskCleanupSettingsResponse,
  UpdateDiskCleanupSettingsParameters,
  UpdateDiskCleanupSettingsResponse,
  OptimizeServerDiskParameters,
  OptimizeServerDiskResponse,
} from "../types/serverManagement";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function backupServer(
  params: BackupServerParameters
): Promise<BackupServerResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/server/manage/backup`,
    params
  );
  return response.data;
}

export async function deleteLocalServerBackups(
  params: DeleteLocalServerBackupsParameters
): Promise<DeleteLocalServerBackupsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/server/manage/remove_local_backup`,
    { data: params }
  );
  return response.data;
}

export async function getMonitoringGraph(
  params: GetMonitoringGraphParameters
): Promise<GetMonitoringGraphResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/server/monitor/detail`,
    { params }
  );
  return response.data;
}

export async function getServerSettings(
  params: GetServerSettingsParameters
): Promise<GetServerSettingsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/server/manage/settings`,
    { params }
  );
  return response.data;
}

export async function getServerMaintenanceWindowSettings(
  params: GetServerMaintenanceWindowSettingsParameters
): Promise<GetServerMaintenanceWindowSettingsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/server/manage/getMaintenanceWinSettings`,
    { params }
  );
  return response.data;
}

export async function updateServerMaintenanceWindowSettings(
  params: UpdateServerMaintenanceWindowSettingsParameters
): Promise<UpdateServerMaintenanceWindowSettingsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/server/manage/postMaintenanceWinSettings`,
    params
  );
  return response.data;
}

export async function updateBackupSettings(
  params: UpdateBackupSettingsParameters
): Promise<UpdateBackupSettingsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/server/manage/backupSettings`,
    params
  );
  return response.data;
}

export async function updateMasterPassword(
  params: UpdateMasterPasswordParameters
): Promise<UpdateMasterPasswordResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/server/manage/masterPassword`,
    params
  );
  return response.data;
}

export async function updateMasterUsername(
  params: UpdateMasterUsernameParameters
): Promise<UpdateMasterUsernameResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/server/manage/masterUsername`,
    params
  );
  return response.data;
}

export async function updateServerPackage(
  params: UpdateServerPackageParameters
): Promise<UpdateServerPackageResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/server/manage/package`,
    params
  );
  return response.data;
}

export async function updateServerSettings(
  params: UpdateServerSettingsParameters
): Promise<UpdateServerSettingsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/server/manage/settings`,
    params
  );
  return response.data;
}

export async function updateSnapshotFrequency(
  params: UpdateSnapshotFrequencyParameters
): Promise<UpdateSnapshotFrequencyResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/server/manage/snapshotFrequency`,
    params
  );
  return response.data;
}

export async function getDiskCleanupSettings(
  params: GetDiskCleanupSettingsParameters
): Promise<GetDiskCleanupSettingsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/server/disk`, {
    params,
  });
  return response.data;
}

export async function updateDiskCleanupSettings(
  params: UpdateDiskCleanupSettingsParameters
): Promise<UpdateDiskCleanupSettingsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.put(
    `${baseURL}/server/disk/{serverId}`,
    params
  );
  return response.data;
}

export async function optimizeServerDisk(
  params: OptimizeServerDiskParameters
): Promise<OptimizeServerDiskResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/server/disk/cleanup`,
    params
  );
  return response.data;
}
