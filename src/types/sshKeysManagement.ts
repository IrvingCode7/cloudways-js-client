export interface CreateSSHKeyParameters {
  server_id: number;
  ssh_key_name: string;
  ssh_key: string;
  app_creds_id?: number;
}

export interface CreateSSHKeyResponse {
  id: number;
}

export interface DeleteSSHKeyParameters {
  server_id: number;
  ssh_key_id: number;
}

export interface DeleteSSHKeyResponse {
  // Define the response type if available
}

export interface UpdateSSHKeyParameters {
  server_id: number;
  ssh_key_name: string;
  ssh_key_id: number;
}

export interface UpdateSSHKeyResponse {
  // Define the response type if available
}
