import { apiCall, HttpMethod } from "../auth";

/**
 * @interface Permissions
 * @description Interface for specifying user permissions within the system.
 * @property {boolean} is_full - Flag indicating if the user has full permissions. `true` means full permissions, `false` means restricted.
 */
interface Permissions {
  is_full: boolean;
}

/**
 * @interface Member
 * @description Interface for member details fetched from API.
 * @property {string} id - Unique identifier for the member.
 * @property {string} member_mapping_id - Mapping ID for the member within the organization.
 * @property {string} name - Name of the member.
 * @property {string} email - Email address of the member.
 * @property {string} status - Current status of the member (e.g., "active", "inactive").
 * @property {string} image - URL for the member's profile image.
 * @property {string} added_on - Date when the member was added (usually in ISO format).
 * @property {string} role - The role of the member within the organization.
 * @property {string} account_disabled - Flag indicating if the account is disabled.
 * @property {string | null} acc_cancellation_date - Account cancellation date if applicable, otherwise `null`.
 * @property {Permissions} permissions - Permissions assigned to the member.
 */
interface Member {
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
  permissions: Permissions;
}

/**
 * @interface MemberResponse
 * @description Interface for the response received from the member API.
 * @property {object} contents - The main content body.
 *  @property {Member[]} contents.members - An array of Member objects.
 */
interface MemberResponse {
  contents: {
    members: {
      [key: string]: Member;
    };
  };
}

/**
 * @interface AddMemberPayload
 * @description Interface for payload needed to add a new team member.
 * @property {string} name - The name of the team member.
 * @property {string} email - The email address of the team member.
 * @property {string} status - The activation status. "1" for active and "0" for inactive.
 * @property {string} role - The role to be assigned to the new team member (e.g., "Project Manager").
 * @property {object} account - Account related permissions.
 *  @property {string[]} account.sections - Array of sections the team member has access to (e.g., ["billing", "support"]).
 *  @property {boolean} account.is_full - Whether the team member has full account permissions or not.
 * @property {object} servers - Server specific permissions.
 *  @property {object} servers[serverId] - An object specifying server specific permissions.
 *    @property {boolean} servers[serverId].is_full - Whether the team member has full server permissions or not.
 *    @property {string[]} servers[serverId].sections - Array of server sections the team member has access to.
 *    @property {string[]} servers[serverId].apps - Array of application IDs the team member has access to.
 */
interface AddMemberPayload {
  name: string;
  email: string;
  status: string;
  role: string;
  account: {
    sections: string[];
    is_full: boolean;
  };
  servers: {
    [serverId: string]: {
      is_full: boolean;
      sections: string[];
      apps: string[];
    };
  };
}

/**
 * Fetch all team members
 * @returns {Promise<MemberResponse>} A promise that resolves to a MemberResponse object
 */
export async function getAllTeamMembers(): Promise<MemberResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/member";
  return apiCall(endpoint, HttpMethod.GET);
}

/**
 * Add a new team member
 * @param {AddMemberPayload} payload - The payload for adding a new member
 * @returns {Promise<MemberResponse>} A promise that resolves to a MemberResponse object
 */
export async function addTeamMember(
  payload: AddMemberPayload
): Promise<MemberResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/member";
  return apiCall(endpoint, HttpMethod.POST, payload);
}

/**
 * Update an existing team member
 * @param {number} memberId - The ID of the member to update
 * @param {AddMemberPayload} payload - The payload for updating the member
 * @returns {Promise<MemberResponse>} A promise that resolves to a MemberResponse object
 */
export async function updateTeamMember(
  memberId: number,
  payload: AddMemberPayload
): Promise<MemberResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/member${memberId}`;
  return apiCall(endpoint, HttpMethod.PUT, payload);
}

/**
 * Delete a team member
 * @param {number} memberId - The ID of the member to delete
 * @returns {Promise<void>} A promise that resolves when the member has been deleted
 */
export async function deleteTeamMember(memberId: number): Promise<void> {
  const endpoint = `https://api.cloudways.com/api/v1/member/${memberId}`;
  return apiCall(endpoint, HttpMethod.DELETE);
}
