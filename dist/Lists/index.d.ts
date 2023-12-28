/**
 * Represents a cloud provider.
 */
interface Provider {
    id: string;
    name: string;
}
/**
 * Represents the response for getting a list of cloud providers.
 */
interface GetProviderListResponse {
    providers: Provider[];
}
/**
 * Represents a region.
 */
interface Region {
    id: string;
    name: string;
}
/**
 * Represents the response for getting a list of regions.
 */
interface GetRegionListResponse {
    regions: {
        [provider: string]: Region[];
    };
}
/**
 * Represents the response for getting a list of server sizes.
 */
interface GetServerSizesListResponse {
    sizes: {
        [provider: string]: string[];
    };
}
/**
 * Represents a single app version.
 */
interface AppVersion {
    app_version: string;
    application: string;
}
/**
 * Represents an app with its versions.
 */
interface App {
    label: string;
    versions: AppVersion[];
}
/**
 * Represents the response for getting a list of apps.
 */
interface GetAppListResponse {
    [appName: string]: App;
}
/**
 * Represents the versions of a specific package.
 */
interface PackageVersions {
    [version: string]: string;
}
/**
 * Represents a package type with its versions.
 */
interface PackageType {
    [osVersion: string]: PackageVersions;
}
/**
 * Represents the response for getting a list of packages.
 */
interface GetPackageListResponse {
    packages: {
        [packageName: string]: PackageType;
    };
}
/**
 * Represents the settings options.
 */
interface SettingsOptions {
    [option: string]: string;
}
/**
 * Represents the response for getting a list of settings.
 */
interface GetSettingsListResponse {
    settings: {
        [setting: string]: SettingsOptions;
    };
}
/**
 * Represents a backup frequency option.
 */
interface BackupFrequency {
    id: string;
    label: string;
}
/**
 * Represents a country with its ISO code and name.
 */
interface Country {
    iso: string;
    name: string;
}
/**
 * Represents the response for getting monitoring durations.
 */
interface GetMonitorDurationsResponse {
    durations: string[];
}
/**
 * Represents the response for getting monitor targets.
 */
interface GetMonitorTargetsResponse {
    targets: {
        [provider: string]: string[];
    };
}

/**
 * Gets a list of available cloud providers.
 * @returns Promise<GetProviderListResponse> - The response with cloud providers.
 */
declare function getProviderList(): Promise<GetProviderListResponse>;
/**
 * Gets a list of regions.
 * @returns Promise<GetRegionListResponse> - The response with regions.
 */
declare function getRegionList(): Promise<GetRegionListResponse>;
/**
 * Gets a list of server sizes available.
 * @returns Promise<GetServerSizesListResponse> - The response with server sizes.
 */
declare function getServerSizesList(): Promise<GetServerSizesListResponse>;
/**
 * Gets a list of available apps and their versions.
 * @returns Promise<GetAppListResponse> - The response with available apps and their versions.
 */
declare function getAppList(): Promise<GetAppListResponse>;
/**
 * Gets a list of available packages and versions.
 * @returns Promise<GetPackageListResponse> - The response with available packages and versions.
 */
declare function getPackageList(): Promise<GetPackageListResponse>;
/**
 * Gets a list of available settings and corresponding values.
 * @returns Promise<GetSettingsListResponse> - The response with settings.
 */
declare function getSettingsList(): Promise<GetSettingsListResponse>;
/**
 * Gets possible backup frequencies.
 * @returns Promise<GetBackupFrequenciesResponse> - The response with backup frequencies.
 */
declare function getBackupFrequencies(): Promise<BackupFrequency[]>;
/**
 * Gets the list of countries.
 * @returns Promise<GetCountriesListResponse> - The response with the list of countries.
 */
declare function getCountriesList(): Promise<Country[]>;
/**
 * Gets possible monitoring durations.
 * @returns Promise<GetMonitorDurationsResponse> - The response with monitoring durations.
 */
declare function getMonitorDurations(): Promise<GetMonitorDurationsResponse>;
/**
 * Gets a list of server monitoring graph types.
 * @returns Promise<GetMonitorTargetsResponse> - The response with monitoring targets.
 */
declare function getMonitorTargets(): Promise<GetMonitorTargetsResponse>;

export { getAppList, getBackupFrequencies, getCountriesList, getMonitorDurations, getMonitorTargets, getPackageList, getProviderList, getRegionList, getServerSizesList, getSettingsList };
