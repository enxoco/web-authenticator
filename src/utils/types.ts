import { tokens } from "../tokens";

export interface TokenResponse {
    token: string;
    creds: null;
}

export interface Token {
    account: string;
    secret: string;
  }

export interface GenericAPIResponse {
    result: string;
}
