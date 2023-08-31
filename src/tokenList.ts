import { displayTokenListItem } from "./tokenListItem";
import { Token, decryptTokensWithAkeyless } from "./utils/api";

export async function tokenList() {
  const decryptedTokens = (await decryptTokensWithAkeyless(import.meta.env.VITE_AKEYLESS_KEY_PATH))
  return `<form id="tokens">${decryptedTokens.map((token: Token) =>
    displayTokenListItem(token.account, token.secret)
  )}</form>`;
}
