
/**
 * Interface to get server transfer status
 */
export interface getServerTransferResponse {
  share: null | any;
  transfer: {
    id: string;
    name: string;
    email: string;
  };
}
