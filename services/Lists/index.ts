import { apiCall } from "../core";
import type {
  BackupFrequency,
  Country,
  GetAppListResponse,
  GetMonitorDurationsResponse,
  GetMonitorTargetsResponse,
  GetPackageListResponse,
  GetProviderListResponse,
  GetRegionListResponse,
  GetServerSizesListResponse,
  GetSettingsListResponse,
} from "./types";

/**
 * Gets a list of available cloud providers.
 * @returns Promise<GetProviderListResponse> - The response with cloud providers.
 */
export function getProviderList(): Promise<GetProviderListResponse> {
  return apiCall("/providers");
}

/**
 * Gets a list of regions.
 * @returns Promise<GetRegionListResponse> - The response with regions.
 */
export function getRegionList(): Promise<GetRegionListResponse> {
  return apiCall("/regions");
}

/**
 * Gets a list of server sizes available.
 * @returns Promise<GetServerSizesListResponse> - The response with server sizes.
 */
export function getServerSizesList(): Promise<GetServerSizesListResponse> {
  return apiCall("/server_sizes");
}

/**
 * Gets a list of available apps and their versions.
 * @returns Promise<GetAppListResponse> - The response with available apps and their versions.
 */
export function getAppList(): Promise<GetAppListResponse> {
  return apiCall("/app");
}

/**
 * Gets a list of available packages and versions.
 * @returns Promise<GetPackageListResponse> - The response with available packages and versions.
 */
export function getPackageList(): Promise<GetPackageListResponse> {
  return apiCall("/packages");
}

/**
 * Gets a list of available settings and corresponding values.
 * @returns Promise<GetSettingsListResponse> - The response with settings.
 */
export function getSettingsList(): Promise<GetSettingsListResponse> {
  return apiCall("/settings");
}

/**
 * Gets possible backup frequencies.
 * @returns Promise<GetBackupFrequenciesResponse> - The response with backup frequencies.
 */
export function getBackupFrequencies(): Promise<BackupFrequency[]> {
  return apiCall("/backup-frequencies");
}

/**
 * Gets the list of countries.
 * @returns Promise<GetCountriesListResponse> - The response with the list of countries.
 */
export function getCountriesList(): Promise<Country[]> {
  return apiCall("/countries");
}

/**
 * Gets possible monitoring durations.
 * @returns Promise<GetMonitorDurationsResponse> - The response with monitoring durations.
 */
export function getMonitorDurations(): Promise<GetMonitorDurationsResponse> {
  return apiCall("/monitor-durations");
}

/**
 * Gets a list of server monitoring graph types.
 * @returns Promise<GetMonitorTargetsResponse> - The response with monitoring targets.
 */
export function getMonitorTargets(): Promise<GetMonitorTargetsResponse> {
  return apiCall("/monitor-targets");
}
