import { displayTokenListItem } from "./TokenListItem";
import { tokens } from "./tokens";

export function tokenList() {
  return `<form id="tokens">${tokens.map((token) =>
    displayTokenListItem(token.account, token.secret)
  )}</form>`;
}
