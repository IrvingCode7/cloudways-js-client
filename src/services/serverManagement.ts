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
} from "../types/serverManagement.js";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";
// replace this with your actual access token
const accessToken = getAccessToken();

axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

const serverManagement = {
  backupServer: async (
    params: BackupServerParameters
  ): Promise<BackupServerResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/server/manage/backup`,
      params
    );
    return response.data;
  },

  deleteLocalServerBackups: async (
    params: DeleteLocalServerBackupsParameters
  ): Promise<DeleteLocalServerBackupsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/server/manage/remove_local_backup`,
      { data: params }
    );
    return response.data;
  },

  getMonitoringGraph: async (
    params: GetMonitoringGraphParameters
  ): Promise<GetMonitoringGraphResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/server/monitor/detail`,
      { params }
    );
    return response.data;
  },

  getServerSettings: async (
    params: GetServerSettingsParameters
  ): Promise<GetServerSettingsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/server/manage/settings`,
      { params }
    );
    return response.data;
  },

  getServerMaintenanceWindowSettings: async (
    params: GetServerMaintenanceWindowSettingsParameters
  ): Promise<GetServerMaintenanceWindowSettingsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/server/manage/getMaintenanceWinSettings`,
      { params }
    );
    return response.data;
  },

  updateServerMaintenanceWindowSettings: async (
    params: UpdateServerMaintenanceWindowSettingsParameters
  ): Promise<UpdateServerMaintenanceWindowSettingsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/server/manage/postMaintenanceWinSettings`,
      params
    );
    return response.data;
  },

  updateBackupSettings: async (
    params: UpdateBackupSettingsParameters
  ): Promise<UpdateBackupSettingsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/server/manage/backupSettings`,
      params
    );
    return response.data;
  },

  updateMasterPassword: async (
    params: UpdateMasterPasswordParameters
  ): Promise<UpdateMasterPasswordResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/server/manage/masterPassword`,
      params
    );
    return response.data;
  },

  updateMasterUsername: async (
    params: UpdateMasterUsernameParameters
  ): Promise<UpdateMasterUsernameResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/server/manage/masterUsername`,
      params
    );
    return response.data;
  },

  updateServerPackage: async (
    params: UpdateServerPackageParameters
  ): Promise<UpdateServerPackageResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/server/manage/package`,
      params
    );
    return response.data;
  },

  updateServerSettings: async (
    params: UpdateServerSettingsParameters
  ): Promise<UpdateServerSettingsResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/server/manage/settings`,
      params
    );
    return response.data;
  },

  updateSnapshotFrequency: async (
    params: UpdateSnapshotFrequencyParameters
  ): Promise<UpdateSnapshotFrequencyResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/server/manage/snapshotFrequency`,
      params
    );
    return response.data;
  },

  getDiskCleanupSettings: async (
    params: GetDiskCleanupSettingsParameters
  ): Promise<GetDiskCleanupSettingsResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/server/disk`, {
      params,
    });
    return response.data;
  },

  updateDiskCleanupSettings: async (
    params: UpdateDiskCleanupSettingsParameters
  ): Promise<UpdateDiskCleanupSettingsResponse> => {
    const response: AxiosResponse = await axios.put(
      `${baseURL}/server/disk/{serverId}`,
      params
    );
    return response.data;
  },

  optimizeServerDisk: async (
    params: OptimizeServerDiskParameters
  ): Promise<OptimizeServerDiskResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/server/disk/cleanup`,
      params
    );
    return response.data;
  },

  // ...
};

module.exports = serverManagement;
