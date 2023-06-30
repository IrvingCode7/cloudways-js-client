import axios, { AxiosResponse } from "axios";

import {
  ServerMonitorSummary,
  ServerUsageResponse,
  ServerMonitoringGraphParameters,
  ApplicationDiskUsageSummary,
  ApplicationDiskUsageDetail,
  ApplicationMonitoringGraphParameters,
  TrafficParameters,
  TrafficDetailParameters,
  PHPAnalyticsParameters,
  MySQLAnalyticsParameters,
  RunningCronParameters,
  AnalyticsResponse,
} from "../types/monitorAnalytic";
const baseURL = "https://api.cloudways.com/api/v1";

const monitorAnalytic = {
  // Existing functions...

  getServerMonitorSummary: async (
    serverId: number
  ): Promise<ServerMonitorSummary> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/server/monitor/summary`,
      {
        params: {
          server_id: serverId,
        },
      }
    );
    return response.data;
  },

  getServerUsage: async (serverId: number): Promise<ServerUsageResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/server/analytics/serverUsage`,
      {
        params: {
          server_id: serverId,
        },
      }
    );
    return response.data;
  },

  getServerMonitoringGraph: async (
    params: ServerMonitoringGraphParameters
  ): Promise<AxiosResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/server/monitor/detail`,
      {
        params,
      }
    );
    return response.data;
  },

  getApplicationDiskUsageSummary: async (
    serverId: number,
    appId: number
  ): Promise<ApplicationDiskUsageSummary> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/monitor/summary`,
      {
        params: {
          server_id: serverId,
          app_id: appId,
          type: "summary",
        },
      }
    );
    return response.data;
  },

  getApplicationDiskUsageDetail: async (
    serverId: number,
    appId: number
  ): Promise<ApplicationDiskUsageDetail> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/monitor/summary`,
      {
        params: {
          server_id: serverId,
          app_id: appId,
          type: "disk",
        },
      }
    );
    return response.data;
  },

  getApplicationMonitoringGraph: async (
    params: ApplicationMonitoringGraphParameters
  ): Promise<AxiosResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/monitor/detail`,
      {
        params,
      }
    );
    return response.data;
  },

  getApplicationTraffic: async (
    params: TrafficParameters
  ): Promise<AnalyticsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/analytics/traffic`,
      {
        params,
      }
    );
    return response.data;
  },

  getApplicationTrafficDetail: async (
    params: TrafficDetailParameters
  ): Promise<AnalyticsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/analytics/trafficDetail`,
      {
        params,
      }
    );
    return response.data;
  },

  getPHPAnalytics: async (
    params: PHPAnalyticsParameters
  ): Promise<AnalyticsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/analytics/php`,
      {
        params,
      }
    );
    return response.data;
  },

  getMySQLAnalytics: async (
    params: MySQLAnalyticsParameters
  ): Promise<AnalyticsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/analytics/mysql`,
      {
        params,
      }
    );
    return response.data;
  },

  getRunningCron: async (
    params: RunningCronParameters
  ): Promise<AnalyticsResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/app/analytics/cron`,
      {
        params,
      }
    );
    return response.data;
  },
};

export default monitorAnalytic;
