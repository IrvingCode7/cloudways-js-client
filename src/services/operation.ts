import axios, { AxiosResponse } from "axios";
import { GetOperationStatusResponse } from "../types/operation.js";
const baseURL = "https://api.cloudways.com/api/v1";

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
