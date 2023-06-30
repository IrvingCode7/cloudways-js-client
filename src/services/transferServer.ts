import axios, { AxiosResponse } from "axios";

import {
  CancelServerTransferParameters,
  CancelServerTransferResponse,
  GetServerTransferStatusParameters,
  GetServerTransferStatusResponse,
  RequestServerTransferParameters,
  RequestServerTransferResponse,
} from "../types/transferServer";

const baseURL = "https://api.cloudways.com/api/v1";

const transferServer = {
  cancelServerTransfer: async (
    params: CancelServerTransferParameters
  ): Promise<CancelServerTransferResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/server_transfer/cancel`,
      params
    );
    return response.data;
  },

  getServerTransferStatus: async (
    params: GetServerTransferStatusParameters
  ): Promise<GetServerTransferStatusResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/server_transfer/status`,
      params
    );
    return response.data;
  },

  requestServerTransfer: async (
    params: RequestServerTransferParameters
  ): Promise<RequestServerTransferResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/server_transfer/request`,
      params
    );
    return response.data;
  },
};

export default transferServer;
