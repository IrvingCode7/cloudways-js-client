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
} from "../types/git.js";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";
// replace this with your actual access token
const accessToken = getAccessToken();

axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

const git = {
  generateGitSSH: async (
    params: GenerateGitSSHParameters
  ): Promise<GenerateGitSSHResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/git/generateKey`,
      params
    );
    return response.data;
  },

  getBranchNames: async (
    params: GetBranchNamesParameters
  ): Promise<GetBranchNamesResponse> => {
    const response: AxiosResponse = await axios.get(
      `${baseURL}/git/branchNames`,
      { params }
    );
    return response.data;
  },

  getGitDeploymentHistory: async (
    params: GetGitDeploymentHistoryParameters
  ): Promise<GetGitDeploymentHistoryResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/git/history`, {
      params,
    });
    return response.data;
  },

  getGitSSH: async (
    params: GetGitSSHParameters
  ): Promise<GetGitSSHResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/git/key`, {
      params,
    });
    return response.data;
  },

  startGitClone: async (
    params: StartGitCloneParameters
  ): Promise<StartGitCloneResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/git/clone`,
      params
    );
    return response.data;
  },

  startGitPull: async (
    params: StartGitPullParameters
  ): Promise<StartGitPullResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/git/pull`,
      params
    );
    return response.data;
  },
};

module.exports = git;
