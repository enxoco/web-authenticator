import { displayTokenListItem } from "./tokenListItem";
import { tokens } from "./tokens";
import { Token } from "./utils/types";
console.log('tokens', tokens)
export async function tokenList() {
  return `<form id="tokens">${tokens.map((token: Token) =>
    displayTokenListItem(token.account, token.secret)
  )}</form>`;
}
