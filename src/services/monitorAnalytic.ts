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
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function getServerMonitorSummary(
  serverId: number
): Promise<ServerMonitorSummary> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/server/monitor/summary`,
    {
      params: {
        server_id: serverId,
      },
    }
  );
  return response.data;
}

export async function getServerUsage(
  serverId: number
): Promise<ServerUsageResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/server/analytics/serverUsage`,
    {
      params: {
        server_id: serverId,
      },
    }
  );
  return response.data;
}

export async function getServerMonitoringGraph(
  params: ServerMonitoringGraphParameters
): Promise<AxiosResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/server/monitor/detail`,
    {
      params,
    }
  );
  return response.data;
}

export async function getApplicationDiskUsageSummary(
  serverId: number,
  appId: number
): Promise<ApplicationDiskUsageSummary> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
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
}

export async function getApplicationDiskUsageDetail(
  serverId: number,
  appId: number
): Promise<ApplicationDiskUsageDetail> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
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
}

export async function getApplicationMonitoringGraph(
  params: ApplicationMonitoringGraphParameters
): Promise<AxiosResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/monitor/detail`,
    {
      params,
    }
  );
  return response.data;
}

export async function getApplicationTraffic(
  params: TrafficParameters
): Promise<AnalyticsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/analytics/traffic`,
    {
      params,
    }
  );
  return response.data;
}

export async function getApplicationTrafficDetail(
  params: TrafficDetailParameters
): Promise<AnalyticsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/analytics/trafficDetail`,
    {
      params,
    }
  );
  return response.data;
}

export async function getPHPAnalytics(
  params: PHPAnalyticsParameters
): Promise<AnalyticsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/analytics/php`,
    {
      params,
    }
  );
  return response.data;
}

export async function getMySQLAnalytics(
  params: MySQLAnalyticsParameters
): Promise<AnalyticsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/analytics/mysql`,
    {
      params,
    }
  );
  return response.data;
}

export async function getRunningCron(
  params: RunningCronParameters
): Promise<AnalyticsResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/analytics/cron`,
    {
      params,
    }
  );
  return response.data;
}
