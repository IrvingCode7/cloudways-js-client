import axios, { AxiosResponse } from "axios";

import {
  CreateSSHKeyParameters,
  CreateSSHKeyResponse,
  DeleteSSHKeyParameters,
  DeleteSSHKeyResponse,
  UpdateSSHKeyParameters,
  UpdateSSHKeyResponse,
} from "../types/sshKeysManagement";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function createSSHKey(
  params: CreateSSHKeyParameters
): Promise<CreateSSHKeyResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/ssh_key`,
    params
  );
  return response.data;
}

export async function deleteSSHKey(
  params: DeleteSSHKeyParameters
): Promise<DeleteSSHKeyResponse> {
  const { server_id, ssh_key_id } = params;
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.delete(
    `${baseURL}/ssh_key/${ssh_key_id}`,
    { params: { server_id } }
  );
  return response.data;
}

export async function updateSSHKey(
  params: UpdateSSHKeyParameters
): Promise<UpdateSSHKeyResponse> {
  const { server_id, ssh_key_name, ssh_key_id } = params;
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.put(
    `${baseURL}/ssh_key/${ssh_key_id}`,
    { server_id, ssh_key_name }
  );
  return response.data;
}
