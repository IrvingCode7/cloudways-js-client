import axios, { AxiosResponse } from "axios";

import {
  ChangeServiceStateParameters,
  ChangeServiceStateResponse,
  GetServicesStatusParameters,
  GetServicesStatusResponse,
  GetAppVarnishStateParameters,
  GetAppVarnishStateResponse,
  UpdateServerVarnishStateParameters,
  UpdateServerVarnishStateResponse,
  UpdateAppVarnishStateParameters,
  UpdateAppVarnishStateResponse,
} from "../types/service";
const baseURL = "https://api.cloudways.com/api/v1";

const service = {
  changeServiceState: async (
    params: ChangeServiceStateParameters
  ): Promise<ChangeServiceStateResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/service/state`,
      params
    );
    return response.data;
  },

  getServicesStatus: async (
    params: GetServicesStatusParameters
  ): Promise<GetServicesStatusResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/service`, {
      params,
    });
    return response.data;
  },

  getAppVarnishState: async (
    params: GetAppVarnishStateParameters
  ): Promise<GetAppVarnishStateResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/service/appVarnish`,
      { params }
    );
    return response.data;
  },

  updateServerVarnishState: async (
    params: UpdateServerVarnishStateParameters
  ): Promise<UpdateServerVarnishStateResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/service/varnish`,
      params
    );
    return response.data;
  },

  updateAppVarnishState: async (
    params: UpdateAppVarnishStateParameters
  ): Promise<UpdateAppVarnishStateResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/service/appVarnish`,
      params
    );
    return response.data;
  },
};

export default service;
