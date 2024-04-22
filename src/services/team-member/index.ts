import { apiCall } from "../core";
import { HttpMethod } from "../core/types";

import type {getAllTeamMemberResponse} from "./types"


/**
 * Retrieves all team members.
 * @returns {Promise<getAllTeamMemberResponse>} - Promise resolving with the response containing all team members.
 * @example
 * {
            "contents": {
              "members": {
                "26740": {
                  "id": "26740",
                  "member_mapping_id": "19",
                  "name": "Team Member",
                  "email": "teamMember@gmail.com",
                  "status": "1",
                  "image": "https://s3.amazonaws.com/cng-console-content/user_pics/5d0ce92114630.png",
                  "added_on": "2019-06-21 16:26:40",
                  "role": "Project Manager",
                  "account_disabled": "0",
                  "acc_cancellation_date": null,
                  "permissions": {
                    "is_full": true
                  }
                }
              }
            }
          }
 */
export function getAllTeamMember():Promise<getAllTeamMemberResponse>{
    return apiCall("/member", HttpMethod.GET).then(
        (response) => response as getAllTeamMemberResponse
    )
}

/**
 * Adds a new team member with the specified details.
 * @param {Object} memberDetails - Details of the new team member.
 * @param {string} memberDetails.name - Name of the new member.
 * @param {string} memberDetails.email - Email of the new member.
 * @param {number} memberDetails.status - Status of the new member (1 for active, 0 for inactive).
 * @param {string} memberDetails.role - Role of the new member.
 * @param {Object} memberDetails.account - Account access details.
 * @param {string[]} memberDetails.account.sections - Sections of the account that the new member has access to.
 * @param {boolean} memberDetails.account.is_full - Indicates whether the new member has full account access.
 * @param {Object} memberDetails.servers - Server access details.
 * @param {Object} memberDetails.servers.<serverId> - Access details for a specific server.
 * @param {string[]} memberDetails.servers.<serverId>.sections - Sections of the server that the new member has access to.
 * @param {boolean} memberDetails.servers.<serverId>.is_full - Indicates whether the new member has full server access.
 * @param {string[]} memberDetails.apps - IDs of the applications that the new member has access to.
 * @returns {Promise<getAllTeamMemberResponse>} - Promise resolving with the server response.
 * @example
 *  {
                  "contents": {
                    "members": {
                      "26740": {
                        "id": "26740",
                        "member_mapping_id": "19",
                        "name": "Team Member",
                        "email": "teamMember@gmail.com",
                        "status": "1",
                        "image": "https://s3.amazonaws.com/cng-console-content/user_pics/5d0ce92114630.png",
                        "added_on": "2019-06-21 16:26:40",
                        "role": "Project Manager",
                        "account_disabled": "0",
                        "acc_cancellation_date": null,
                        "permissions": {
                          "is_full": true
                        }
                      }
                    }
                  }
                }
 */
export function addTeamMember(memberDetails: any): Promise<getAllTeamMemberResponse> {
    const data = {
      body: JSON.stringify(memberDetails)
    };
    return apiCall("/member", HttpMethod.POST, data).then(
      (response) => response as getAllTeamMemberResponse
    );
  }

/**
 * Updates the details of a specific team member.
 * @param {number} memberId - The ID of the member to update.
 * @param {Object} memberDetails - Updated details of the team member.
 * @param {string} memberDetails.name - Updated name of the member.
 * @param {string} memberDetails.email - Updated email of the member.
 * @param {number} memberDetails.status - Updated status of the member (1 for active, 0 for inactive).
 * @param {string} memberDetails.role - Updated role of the member.
 * @param {Object} memberDetails.account - Updated account access details.
 * @param {string[]} memberDetails.account.sections - Updated sections of the account that the member has access to.
 * @param {boolean} memberDetails.account.is_full - Indicates whether the member has full account access.
 * @param {Object} memberDetails.servers - Updated server access details.
 * @param {Object} memberDetails.servers.<serverId> - Updated access details for a specific server.
 * @param {string[]} memberDetails.servers.<serverId>.sections - Updated sections of the server that the member has access to.
 * @param {boolean} memberDetails.servers.<serverId>.is_full - Indicates whether the member has full server access.
 * @param {string[]} memberDetails.apps - Updated IDs of the applications that the member has access to.
 * @returns {Promise<getAllTeamMemberResponse>} - Promise resolving with the server response.
 * @example 
 * {
          {
            "contents": {
              "members": {
                "26740": {
                  "id": "26740",
                  "member_mapping_id": "19",
                  "name": "Team Member",
                  "email": "teamMember@gmail.com",
                  "status": "1",
                  "image": "https://s3.amazonaws.com/cng-console-content/user_pics/5d0ce92114630.png",
                  "added_on": "2019-06-21 16:26:40",
                  "role": "Project Manager",
                  "account_disabled": "0",
                  "acc_cancellation_date": null,
                  "permissions": {
                    "is_full": true
                  }
                }
              }
            }
          }
  
}
 */
export function updateTeamMember(
    memberId: number, 
    memberDetails: any
): Promise<getAllTeamMemberResponse> {
    const data = {
      body: JSON.stringify(memberDetails)
    };
    return apiCall(`/member/${memberId}`, HttpMethod.PUT, data).then(
      (response) => response as getAllTeamMemberResponse
    );
  }

  /**
 * Deletes a team member from the specified member ID.
 * @param {number} memberId - The ID of the member to delete.
 * @param {number} id - The ID of the member to delete (redundant, can be removed).
 * @returns {Promise<void>} - Promise resolving once the member is deleted.
 */
export function deleteTeamMember(
    memberId: number, 
    id: number
): Promise<void> {
    const data = {
      id : id 
    };
    return apiCall(`/member/${memberId}`, HttpMethod.DELETE, data);
  }