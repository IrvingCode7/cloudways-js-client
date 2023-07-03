import axios, { AxiosResponse } from "axios";
import { GetOperationStatusResponse } from "../types/operation";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";
// replace this with your actual access token

export async function getOperationStatus(
  operationId: string
): Promise<GetOperationStatusResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/operation/${operationId}`
  );
  return response.data;
}
