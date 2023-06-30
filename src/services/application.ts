import axios, { AxiosResponse } from "axios";
import {
  ChangeApplicationAccessStateRequest,
  ChangeApplicationAccessStateResponse,
  GetApplicationBackupStatusRequest,
  GetApplicationBackupStatusResponse,
  CreateAppCredentialsRequest,
  CreateAppCredentialsResponse,
  DeleteAppCredentialRequest,
  DeleteAppCredentialResponse,
} from "../types/application";

const baseURL = "https://api.cloudways.com/api/v1";

export async function changeApplicationAccessState(
  requestData: ChangeApplicationAccessStateRequest
): Promise<ChangeApplicationAccessStateResponse> {
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/state`,
    requestData
  );
  return response.data;
}

export async function getApplicationBackupStatus(
  requestData: GetApplicationBackupStatusRequest
): Promise<GetApplicationBackupStatusResponse> {
  const response: AxiosResponse = await axios.get(
    `${baseURL}/app/manage/backup`,
    { params: requestData }
  );
  return response.data;
}

export async function createAppCredentials(
  requestData: CreateAppCredentialsRequest
): Promise<CreateAppCredentialsResponse> {
  const response: AxiosResponse = await axios.post(
    `${baseURL}/app/creds`,
    requestData
  );
  return response.data;
}

export async function deleteAppCredential(
  requestData: DeleteAppCredentialRequest
): Promise<DeleteAppCredentialResponse> {
  const response: AxiosResponse = await axios.delete(
    `${baseURL}/app/creds/${requestData.app_cred_id}`,
    { data: requestData }
  );
  return response.data;
}
