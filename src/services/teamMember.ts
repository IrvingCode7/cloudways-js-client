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
const baseURL = "https://api.cloudways.com/api/v1";

const teamMember = {
  getAllTeamMembers: async (): Promise<GetAllTeamMembersResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/member`);
    return response.data;
  },

  addTeamMember: async (
    params: AddTeamMemberParameters
  ): Promise<AddTeamMemberResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/member`,
      params
    );
    return response.data;
  },

  updateTeamMember: async (
    params: UpdateTeamMemberParameters
  ): Promise<UpdateTeamMemberResponse> => {
    const { memberId, body } = params;
    const response: AxiosResponse = await axios.put(
      `${baseURL}/member/${memberId}`,
      body
    );
    return response.data;
  },

  deleteTeamMember: async (
    params: DeleteTeamMemberParameters
  ): Promise<DeleteTeamMemberResponse> => {
    const { memberId } = params;
    const response: AxiosResponse = await axios.delete(
      `${baseURL}/delete/${memberId}`
    );
    return response.data;
  },
};

export default teamMember;
