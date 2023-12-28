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
export interface App {
  label: string;
  versions: AppVersion[];
}

/**
 * Represents the response for getting a list of apps.
 */
export interface GetAppListResponse {
  [appName: string]: App;
}

/**
 * Represents the versions of a specific package.
 */
export interface PackageVersions {
  [version: string]: string;
}

/**
 * Represents a package type with its versions.
 */
export interface PackageType {
  [osVersion: string]: PackageVersions;
}

/**
 * Represents the response for getting a list of packages.
 */
export interface GetPackageListResponse {
  packages: {
    [packageName: string]: PackageType;
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
