import axios, { AxiosResponse } from "axios";

import {
  CancelServerTransferParameters,
  CancelServerTransferResponse,
  GetServerTransferStatusParameters,
  GetServerTransferStatusResponse,
  RequestServerTransferParameters,
  RequestServerTransferResponse,
} from "../types/transferServer";

import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function cancelServerTransfer(
  params: CancelServerTransferParameters
): Promise<CancelServerTransferResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/server_transfer/cancel`,
    params
  );
  return response.data;
}

export async function getServerTransferStatus(
  params: GetServerTransferStatusParameters
): Promise<GetServerTransferStatusResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/server_transfer/status`,
    params
  );
  return response.data;
}

export async function requestServerTransfer(
  params: RequestServerTransferParameters
): Promise<RequestServerTransferResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/server_transfer/request`,
    params
  );
  return response.data;
}
