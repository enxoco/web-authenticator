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

const baseUrl = 'https://api.akeyless.io'
async function fetchAkeylessAuthToken(): Promise<TokenResponse> {

    const options = {
        method: 'POST',
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        body: JSON.stringify({
          'access-type': 'access_key',
          'gcp-audience': 'akeyless.io',
          json: false,
          'access-id': import.meta.env.VITE_AKEYLESS_ACCESS_ID,
          'access-key': import.meta.env.VITE_AKEYLESS_ACCESS_KEY
        })
      };
      const token = await fetch(`${baseUrl}/auth`, options)
      return await token.json()

}

async function encryptTokensWithAkeyless(encryptionKeyName: string): Promise<GenericAPIResponse>{
    const options = {
        method: 'POST',
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        body: JSON.stringify({
          json: false,
          'key-name': encryptionKeyName,
          plaintext: JSON.stringify(tokens),
          token: (await fetchAkeylessAuthToken()).token
        })
      };
      
      const response = await fetch(`${baseUrl}/encrypt`, options)
      return await response.json()
}

async function decryptTokensWithAkeyless(encryptionKeyName: string): Promise<Token[]>{
    const options = {
        method: 'POST',
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        body: JSON.stringify({
          json: false,
          'key-name': encryptionKeyName,
          ciphertext: tokens,
          token: (await fetchAkeylessAuthToken()).token
        })
      };
      
      const response = await fetch(`${baseUrl}/decrypt`, options)
      const decodedTokens = await response.json()
      return JSON.parse(decodedTokens.result)
}
export {fetchAkeylessAuthToken, encryptTokensWithAkeyless, decryptTokensWithAkeyless}