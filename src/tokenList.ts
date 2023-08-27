import { displayTokenListItem } from "./TokenListItem";
import { tokens } from "./tokens";

export function tokenList() {
  const element = document.createElement("div");
  element.classList.add("test");
  const div = document.createElement('div')
  div.append('<form id="tokens">')
  document.querySelector<HTMLDivElement>("#app")!.innerHTML += '<form id="tokens">'
  tokens.map(async (token) => {
    const el = await displayTokenListItem(token.account, token.secret, element)
    document.querySelector<HTMLDivElement>("#app")!.innerHTML += el
  })

}
