import {displayToken} from './token'
export function displayTokenListItem(account: string, secret: string, element: HTMLDivElement){

    return element.innerHTML = `<div class="fieldset-wrapper">
    <fieldset>
      <label>Account</label>
        <p data-test-id="account">${account}</p>
    </fieldset>
    <fieldset>
      <label>Code</label>
      <p data-test-id="secret">${displayToken(secret)}</p>
    </fieldset>
    </div>`;
}