import { apiCall } from "../core";
import type {
  BackupFrequency,
  Country,
  App,
  Provider,
  Region,
  PackageList,
  ServerSize,
  Setting,
} from "./types";

/**
 * Gets a list of available apps and their versions.
 * @returns {Promise<App[]>} A promise resolving with an array of apps and their versions.
 * @example
 * ```
 * [
 *   {
 *     label: "WordPress",
 *     versions: [
 *       { app_version: "4.7", application: "wordpress" },
 *       ...
 *     ]
 *   },
 *   {
 *     label: "PHP Stack",
 *     versions: [
 *       { app_version: "5.4", application: "phpstack" },
 *       ...
 *     ]
 *   },
 *   ...
 * ]
 * ```
 */
export function getAppList(): Promise<App[]> {
  return apiCall("/apps");
}

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
  return apiCall("/backup-frequencies").then(
    (response) => response.frequencies
  );
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
  return apiCall("/monitor_durations");
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
  return apiCall("/monitor_targets");
}

/**
 * Gets a list of available packages and their versions.
 * @returns {Promise<PackageList>} A promise resolving with a list of packages and their versions.
 * @example
 * ```
 * {
 *   "php": {
 *     "debian10": {
 *       "7.0": "PHP 7.0",
 *       "7.1": "PHP 7.1",
 *       ...
 *     },
 *     ...
 *   },
 *   "phpConfig": {
 *     "debian10": {
 *       "7.4": ["7.4", "8.0", ...],
 *       ...
 *     },
 *     ...
 *   },
 *   "mysql": {
 *     "debian10": {
 *       "mysql,5.7": "MySQL 5.7",
 *       ...
 *     },
 *     ...
 *   },
 *   "redis": {
 *     "0": "Uninstall",
 *     "latest": "Install"
 *   },
 *   ...
 * }
 * ```
 */
export function getPackageList(): Promise<PackageList> {
  return apiCall("/packages");
}

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

/**
 * Gets a list of server sizes available.
 * @returns {Promise<ServerSize[]>} A promise resolving with an array of server sizes available for each provider.
 * @example
 * ```
 * [
 *   { provider: "Amazon", sizes: ["Small", "Medium", ...] },
 *   { provider: "DO", sizes: ["512MB", "1GB", ...] },
 *   { provider: "GCE", sizes: ["small", "n1-std-1", ...] },
 *   { provider: "Vultr", sizes: ["768MB", "1GB", ...] },
 *   { provider: "Kyup", sizes: ["1 Core", "2 Cores", ...] },
 *   { provider: "Linode", sizes: ["1GB", "2GB", ...] }
 * ]
 * ```
 */
export function getServerSizesList(): Promise<ServerSize[]> {
  return apiCall("/server_sizes").then((response) => {
    const serverSizesList: ServerSize[] = [];
    for (const provider in response.sizes) {
      serverSizesList.push({
        provider: provider,
        sizes: response.sizes[provider],
      });
    }
    return serverSizesList;
  });
}

/**
 * Gets a list of available settings and corresponding values.
 * @returns {Promise<Setting[]>} A promise resolving with an array of settings and their possible values.
 * @example
 * ```
 * [
 *   { setting: "timezone", values: ["Pacific/Midway", "Pacific/Samoa", ...] },
 *   { setting: "character_set", values: ["ascii", "greek", ...] },
 *   { setting: "status", values: [" ----", "Off", "On"] },
 *   { setting: "error_reporting", values: [" ----", "E_ALL & ~E_DEPRECATED & ~E_STRICT", ...] },
 *   { setting: "statuses", values: ["disabled", "enabled"] }
 * ]
 * ```
 */
export function getSettingsList(): Promise<Setting[]> {
  return apiCall("/settings").then((response) => {
    const settingsList: Setting[] = [];
    for (const setting in response.settings) {
      settingsList.push({
        setting: setting,
        values: Object.keys(response.settings[setting]),
      });
    }
    return settingsList;
  });
}
