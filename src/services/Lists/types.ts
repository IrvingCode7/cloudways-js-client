/**
 * Represents a cloud provider.
 */
export interface Provider {
  id: string;
  name: string;
}

/**
 * Represents the response for getting a list of cloud providers.
 */
export interface GetProviderListResponse {
  providers: Provider[];
}

/**
 * Represents a region.
 */
export interface Region {
  id: string;
  name: string;
}

/**
 * Represents the response for getting a list of regions.
 */
export interface GetRegionListResponse {
  regions: {
    [provider: string]: Region[];
  };
}

/**
 * Represents the response for getting a list of server sizes.
 */
export interface GetServerSizesListResponse {
  sizes: {
    [provider: string]: string[];
  };
}

/**
 * Represents a single app version.
 */
export interface AppVersion {
  app_version: string;
  application: string;
}

/**
 * Represents an app with its versions.
 */
export interface AppInfo {
  label: string;
  versions: AppVersion[];
}

/**
 * Represents the response for getting a list of apps.
 */
export interface GetAppListResponse {
  [appName: string]: AppInfo;
}

/**
 * Represents a package with its versions.
 */
interface Package {
  [version: string]: string;
}

/**
 * Represents a list of available packages and versions.
 */
export interface PackageList {
  [packageName: string]: {
    [os: string]: Package;
  };
}

/**
 * Represents the settings options.
 */
export interface SettingsOptions {
  [option: string]: string;
}

/**
 * Represents the response for getting a list of settings.
 */
export interface GetSettingsListResponse {
  settings: {
    [setting: string]: SettingsOptions;
  };
}

/**
 * Represents a backup frequency option.
 */
export interface BackupFrequency {
  id: string;
  label: string;
}

/**
 * Represents a country with its ISO code and name.
 */
export interface Country {
  iso: string;
  name: string;
}

/**
 * Represents the response for getting monitoring durations.
 */
export interface GetMonitorDurationsResponse {
  durations: string[];
}

/**
 * Represents the response for getting monitor targets.
 */
export interface GetMonitorTargetsResponse {
  targets: {
    [provider: string]: string[];
  };
}

/**
 * Represents a server size entry for a provider.
 */
export interface ServerSize {
  provider: string;
  sizes: string[];
}

/**
 * Represents a setting entry and its possible values.
 */
export interface Setting {
  setting: string;
  values: string[];
}

/**
 * Represents a server monitoring target for a provider.
 */
export interface ServerMonitoringTarget {
  provider: string;
  targets: string[];
}
