import axios, { AxiosResponse } from "axios";

import {
  GetAllTeamMembersResponse,
  AddTeamMemberParameters,
  AddTeamMemberResponse,
  UpdateTeamMemberParameters,
  UpdateTeamMemberResponse,
  DeleteTeamMemberParameters,
  DeleteTeamMemberResponse,
} from "../types/teamMember";
import { getAccessToken } from "./authentication";
const baseURL = "https://api.cloudways.com/api/v1";

export async function getAllTeamMembers(): Promise<GetAllTeamMembersResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/member`);
  return response.data;
}

export async function addTeamMember(
  params: AddTeamMemberParameters
): Promise<AddTeamMemberResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.post(`${baseURL}/member`, params);
  return response.data;
}

export async function updateTeamMember(
  params: UpdateTeamMemberParameters
): Promise<UpdateTeamMemberResponse> {
  const { memberId, body } = params;
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.put(
    `${baseURL}/member/${memberId}`,
    body
  );
  return response.data;
}

export async function deleteTeamMember(
  params: DeleteTeamMemberParameters
): Promise<DeleteTeamMemberResponse> {
  const { memberId } = params;
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.delete(
    `${baseURL}/delete/${memberId}`
  );
  return response.data;
}
