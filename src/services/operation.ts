import axios, { AxiosResponse } from "axios";
import { GetOperationStatusResponse } from "../types/operation.js";
import { getAccessToken } from "./authentication.js";
const baseURL = "https://api.cloudways.com/api/v1";
// replace this with your actual access token
const accessToken = getAccessToken();

axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

const appManagement = {
  // Existing functions...

  getOperationStatus: async (
    operationId: string
  ): Promise<GetOperationStatusResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/operation/${operationId}`
    );
    return response.data;
  },
};

export default appManagement;
