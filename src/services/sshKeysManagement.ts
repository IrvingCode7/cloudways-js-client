import axios, { AxiosResponse } from "axios";

import {
  CreateSSHKeyParameters,
  CreateSSHKeyResponse,
  DeleteSSHKeyParameters,
  DeleteSSHKeyResponse,
  UpdateSSHKeyParameters,
  UpdateSSHKeyResponse,
} from "../types/sshKeysManagement.js";
const baseURL = "https://api.cloudways.com/api/v1";

const sshKey = {
  createSSHKey: async (
    params: CreateSSHKeyParameters
  ): Promise<CreateSSHKeyResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/ssh_key`,
      params
    );
    return response.data;
  },

  deleteSSHKey: async (
    params: DeleteSSHKeyParameters
  ): Promise<DeleteSSHKeyResponse> => {
    const { server_id, ssh_key_id } = params;
    const response: AxiosResponse = await axios.delete(
      `${baseURL}/ssh_key/${ssh_key_id}`,
      { params: { server_id } }
    );
    return response.data;
  },

  updateSSHKey: async (
    params: UpdateSSHKeyParameters
  ): Promise<UpdateSSHKeyResponse> => {
    const { server_id, ssh_key_name, ssh_key_id } = params;
    const response: AxiosResponse = await axios.put(
      `${baseURL}/ssh_key/${ssh_key_id}`,
      { server_id, ssh_key_name }
    );
    return response.data;
  },
};

export default sshKey;
