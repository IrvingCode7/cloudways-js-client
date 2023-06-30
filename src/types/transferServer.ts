export interface CancelServerTransferParameters {
  server_id: number;
}

export interface CancelServerTransferResponse {
  status: boolean;
}

export interface GetServerTransferStatusParameters {
  server_id: number;
}

export interface GetServerTransferStatusResponse {
  share: null;
  transfer: {
    id: string;
    name: string;
    email: string;
  };
}

export interface RequestServerTransferParameters {
  server_id: number;
  email: string;
}

export interface RequestServerTransferResponse {
  status: boolean;
}
