import axios, { AxiosResponse } from "axios";

import {
  GenerateGitSSHParameters,
  GenerateGitSSHResponse,
  GetBranchNamesParameters,
  GetBranchNamesResponse,
  GetGitDeploymentHistoryParameters,
  GetGitDeploymentHistoryResponse,
  GetGitSSHParameters,
  GetGitSSHResponse,
  StartGitCloneParameters,
  StartGitCloneResponse,
  StartGitPullParameters,
  StartGitPullResponse,
} from "../types/git";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function generateGitSSH(
  params: GenerateGitSSHParameters
): Promise<GenerateGitSSHResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/git/generateKey`,
    params
  );
  return response.data;
}

export async function getBranchNames(
  params: GetBranchNamesParameters
): Promise<GetBranchNamesResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(
    `${baseURL}/git/branchNames`,
    { params }
  );
  return response.data;
}

export async function getGitDeploymentHistory(
  params: GetGitDeploymentHistoryParameters
): Promise<GetGitDeploymentHistoryResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/git/history`, {
    params,
  });
  return response.data;
}

export async function getGitSSH(
  params: GetGitSSHParameters
): Promise<GetGitSSHResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/git/key`, {
    params,
  });
  return response.data;
}

export async function startGitClone(
  params: StartGitCloneParameters
): Promise<StartGitCloneResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/git/clone`,
    params
  );
  return response.data;
}

export async function startGitPull(
  params: StartGitPullParameters
): Promise<StartGitPullResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(
    `${baseURL}/git/pull`,
    params
  );
  return response.data;
}
