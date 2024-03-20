import { apiCall } from "../core";
import type {
  BackupFrequency,
  Country,
  App,
  Provider,
  Region,
  PackageType,
} from "./types";

/**
 * Gets a list of available cloud providers.
 * @returns {Promise<Provider[]>} A promise resolving with an array of cloud providers.
 * @example
 * ```
 * [
 *   { "id": "do", "name": "DigitalOcean" },
 *   { "id": "vultr", "name": "Vultr" },
 *   ...
 * ]
 * ```
 */
export function getProviderList(): Promise<Provider[]> {
  return apiCall("/providers").then((response) => response.providers);
}

/**
 * Gets a list of regions.
 * @returns {Promise<Region[]>} A promise resolving with an array of regions.
 * @example
 * ```
 * [
 *   { "id": "us-east-1", "name": "US N.Virginia" },
 *   { "id": "us-west-1", "name": "California" },
 *   ...
 * ]
 * ```
 */
export function getRegionList(): Promise<Region[]> {
  return apiCall("/regions").then((response) => {
    const regionsArray = Object.values(response.regions).flat();
    return regionsArray as Region[]; // Type assertion to Region[]
  });
}

// Similar updates for getServerSizesList, getAppList, getPackageList, getSettingsList

/**
 * Gets possible backup frequencies.
 * @returns {Promise<BackupFrequency[]>} A promise resolving with an array of backup frequencies.
 * @example
 * ```
 * [
 *   { "id": "1h", "label": "1 Hour" },
 *   { "id": "3h", "label": "3 Hours" },
 *   ...
 * ]
 * ```
 */
export function getBackupFrequencies(): Promise<BackupFrequency[]> {
  return apiCall("/backup-frequencies");
}

/**
 * Gets the list of countries.
 * @returns {Promise<Country[]>} A promise resolving with the list of countries.
 * @example
 * ```
 * // The API response is an empty object "{}" for countries.
 * []
 * ```
 */
export function getCountriesList(): Promise<Country[]> {
  return apiCall("/countries").then((response) => response); // Assuming the response is an array of countries
}

/**
 * Gets possible monitoring durations.
 * @returns {Promise<string[]>} A promise resolving with monitoring durations.
 * @example
 * ```
 * ["1 Hour", "12 Hours", "1 Day", "7 Days", "1 Month", "6 Months"]
 * ```
 */
export function getMonitorDurations(): Promise<string[]> {
  return apiCall("/monitor-durations");
}

/**
 * Gets a list of server monitoring graph types.
 * @returns {Promise<string[]>} A promise resolving with monitoring targets.
 * @example
 * ```
 * {
 *   "amazon": ["Idle CPU", "Free Disk (DB)", ...],
 *   "do": ["Idle CPU", "Free Disk", ...],
 *   ...
 * }
 * ```
 */
export function getMonitorTargets(): Promise<{ [provider: string]: string[] }> {
  return apiCall("/monitor-targets");
}

// ... and similarly for other functions
