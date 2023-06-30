export interface ServerMonitorSummary {
  content: {
    name: string;
    datapoint: [number, number];
    type: string;
  }[];
}

export interface ServerUsageResponse {
  status: boolean;
  operation_id: string;
}

export interface ServerMonitoringGraphParameters {
  server_id: number;
  timezone: string;
  target: string;
  duration: number;
  storage: boolean;
  server_type: string;
}

export interface ApplicationDiskUsageSummary {
  content: {
    app_home: number;
    app_mysql: number;
    total: number;
  };
}

export interface ApplicationDiskUsageDetail {
  content: {
    name: string;
    size: string;
  }[];
}

export interface ApplicationMonitorSummary {
  content: {
    name: string;
    datapoint: [number, number];
    type: string;
  }[];
}

export interface ApplicationMonitoringGraphParameters {
  server_id: number;
  app_id: string;
  timezone: string;
  target: string;
  duration: number;
}

export interface TrafficParameters {
  server_id: number;
  app_id: number;
  duration: string;
  resource: string;
}

export interface TrafficDetailParameters {
  server_id: number;
  app_id: number;
  from: string;
  until: string;
  resource_list: string[];
}

export interface PHPAnalyticsParameters {
  server_id: number;
  app_id: number;
  duration: string;
  resource: string;
}

export interface MySQLAnalyticsParameters {
  server_id: number;
  app_id: number;
  duration: string;
  resource: string;
}

export interface RunningCronParameters {
  server_id: number;
  app_id: number;
}

export interface AnalyticsResponse {
  status: boolean;
  operation_id: string;
}
