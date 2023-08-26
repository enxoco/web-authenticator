import { tokens } from "./tokens";

let tokenListHtml: HTMLDivElement = document.createElement("div");
function displayTokenListItem(account: string, secret: string) {
  tokenListHtml.innerHTML += `<div class="fieldset-wrapper">
  <fieldset>
    <label>Account</label>
      <p>${account}</p>
  </fieldset>
  <fieldset>
    <label>Code</label>
    <p>${secret}</p>
  </fieldset>
  </div>`;
}
tokens.map((token) => {
  displayTokenListItem(token.account, token.secret);
});
export function setupTokenList(element: HTMLDivElement) {
  element.innerHTML = `<div class="fieldset-wrapper">`;
  element.appendChild(tokenListHtml);
  element.append("</div>");
}
