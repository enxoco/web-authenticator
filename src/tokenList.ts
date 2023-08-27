import { displayTokenListItem } from "./TokenListItem";
import { tokens } from "./tokens";

export function tokenList() {
  const element = document.createElement("div");
  element.classList.add("test");
  return `<form id="tokens">${tokens.map((token) =>
    displayTokenListItem(token.account, token.secret, element)
  )}</form>`;
}
