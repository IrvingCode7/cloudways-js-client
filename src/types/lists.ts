export interface GetAppListResponse {
  [appName: string]: {
    label: string;
    versions: {
      app_version: string;
      application: string;
    }[];
  };
}

export interface GetBackupFrequenciesResponse {
  id: string;
  label: string;
}

export interface GetCountriesListResponse {
  // No response body available
}

export type MonitorDuration =
  | "1 Hour"
  | "12 Hours"
  | "1 Day"
  | "7 Days"
  | "1 Month"
  | "6 Months";

export interface GetMonitorDurationsResponse extends Array<MonitorDuration> {}

export interface MonitorTarget {
  amazon?: string[];
  do?: string[];
  gce?: string[];
  vultr?: string[];
  linode?: string[];
}

export interface GetMonitorTargetsResponse extends MonitorTarget {}

export interface GetPackageListResponse {
  packages: {
    php: {
      [key: string]: {
        [version: string]: string;
      };
    };
    mysql: {
      [key: string]: string;
    };
    redis: {
      Install: string;
      Uninstall: string;
    };
    elasticsearch: {
      Install: string;
      Uninstall: string;
    };
    fpm: {
      Install: string;
    };
  };
}

export interface Provider {
  id: string;
  name: string;
}

export interface GetProviderListResponse {
  providers: Provider[];
}

export interface Region {
  id: string;
  name: string;
}

export interface GetRegionListResponse {
  regions: {
    [provider: string]: Region[];
  };
}

export interface ServerSize {
  [provider: string]: string[];
}

export interface GetServerSizesListResponse {
  sizes: ServerSize;
}

export interface SettingValue {
  [value: string]: string;
}

export interface Setting {
  [key: string]: SettingValue;
}

export interface GetSettingsListResponse {
  settings: Setting;
}
