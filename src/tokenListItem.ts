
export function tokenListitem(account: string, secret: string, element: HTMLDivElement){

    element.innerHTML += `<div class="fieldset-wrapper">
    <fieldset>
      <label>Account</label>
        <p data-test-id="account">${account}</p>
    </fieldset>
    <fieldset>
      <label>Code</label>
      <p data-test-id="secret">${token}</p>
    </fieldset>
    </div>`;
}