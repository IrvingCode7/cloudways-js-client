export interface TeamMember {
  id: string;
  member_mapping_id: string;
  name: string;
  email: string;
  status: string;
  image: string;
  added_on: string;
  role: string;
  account_disabled: string;
  acc_cancellation_date: string | null;
  permissions: {
    is_full: boolean;
  };
}

export interface GetAllTeamMembersResponse {
  contents: {
    members: Record<string, TeamMember>;
  };
}

export interface AddTeamMemberParameters {
  body: {
    name: string;
    email: string;
    status: string;
    role: string;
    account: {
      sections: string[];
      is_full: boolean;
    };
    servers: Record<
      string,
      {
        sections: string[];
        is_full: boolean;
        apps: string[];
      }
    >;
    apps?: string[];
  };
}

export interface AddTeamMemberResponse {
  contents: {
    members: Record<string, TeamMember>;
  };
}

export interface UpdateTeamMemberParameters {
  memberId: number;
  body: {
    name: string;
    email: string;
    status: string;
    role: string;
    account: {
      sections: string[];
      is_full: boolean;
    };
    servers: Record<
      string,
      {
        sections: string[];
        is_full: boolean;
        apps: string[];
      }
    >;
    apps?: string[];
  };
}

export interface UpdateTeamMemberResponse {
  contents: {
    members: Record<string, TeamMember>;
  };
}

export interface DeleteTeamMemberParameters {
  memberId: number;
}

export interface DeleteTeamMemberResponse {
  // Define the response type if available
}
