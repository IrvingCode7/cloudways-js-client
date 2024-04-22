import { apiCall } from "../core";
import { HttpMethod } from "../core/types";

import type { getServerTransferResponse } from "./types";

/**
 * Cancels the ongoing server transfer process.
 * @param {number} serverId - Numeric id of the server.
 * @returns {Promise<{ status : boolean}>} - Promise resolving with the cancellation status.
 * @example
 * {
  "status" : true
}
 */
export function cancelServerTransferProcess(
  serverId: number
): Promise<{ status: boolean }> {
  const data = {
    server_id: serverId,
  };
  return apiCall("/server_transfer/cancel", HttpMethod.POST, data).then(
    (response) => ({
      status: response.status,
    })
  );
}

/**
 * Retrieves the status of the server transfer process.
 * @param {number} serverId - Numeric id of the server.
 * @returns {Promise<getServerTransferResponse>} - Promise resolving with the server transfer status.
 * @example
 * {
  "share" : null,
  "transfer" : {
    "id" : "123",
    "name" : "Cloudways user",
    "email" : "user@cloudways.com"
  }
}
 */
export function getServerTransferStatus(
    serverId : number
):Promise<getServerTransferResponse>{
    const data = {
        server_id : serverId
    };
    return apiCall("/server_transfer/status", HttpMethod.POST, data).then(
        (response) => response as getServerTransferResponse
    )
}



/**
 * Initiates a request for server transfer.
 * @param {number} serverId - Numeric id of the server.
 * @param {string} email - Email address to request server transfer.
 * @returns {Promise<{ status : boolean}>} - Promise resolving with the status of the server transfer request.
 * @example
 * {
  "status" : true
}
 */
export function requestForServerTransfer(
    serverId : number,
    email : string
):Promise<{ status : boolean}>{
    const data = {
        server_id : serverId,
        email : email
    };
    return apiCall("/server_transfer/request", HttpMethod.POST, data).then(
        (response) => ({
            status : response.status
        })
    )
}

