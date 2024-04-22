export interface getAllTeamMemberResponse {
  contents: {
    members: {
      [key : string]: {
        id: string;
        member_mapping_id: string;
        name: string;
        email: string;
        status: string;
        image:string;
        added_on: string;
        role: string;
        account_disabled: string;
        acc_cancellation_date: null | string;
        permissions: {
          is_full: boolean;
        };
      };
    };
  };
}
