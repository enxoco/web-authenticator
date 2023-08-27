import { displayToken } from "./token";
var secondsSinceEpoch: number;
var secondsSinceStart: number;
var secondsRemaining: number;
secondsSinceStart = 0;
secondsRemaining = 30;
const period = 30;
var token;

export function displayTokenListItem(
  account: string,
  secret: string,
  element: HTMLDivElement
) {
  function countdown() {
    secondsSinceEpoch = Math.ceil(Date.now() / 1000) - 1;
    secondsSinceStart = 0 + (secondsSinceEpoch % period);
    secondsRemaining = period - (secondsSinceEpoch % period);
    const timerDiv = document.getElementById(`timer-${account}`);
    const tokenDiv = document.getElementById(`secret-${account}`)
    if (timerDiv && tokenDiv) {
      timerDiv.innerHTML = secondsRemaining.toString();
      timerDiv.style.background = `conic-gradient(transparent ${
        (100 / 30) * secondsSinceStart
      }%, ${secondsRemaining < 10 ? "salmon" : "gainsboro"} 0)`;
      token = displayToken(secret)
      tokenDiv.innerHTML = token;
    }

  }
  setInterval(() => {
    countdown();
  }, 1000);
  return (element.innerHTML = `<div class="fieldset-wrapper">
    <fieldset>
      <label>Account</label>
        <p data-test-id="account">${account}</p>
    </fieldset>
    <fieldset>
      <label>Code</label>
      <p id="secret-${account}"></p>
    </fieldset>
    <fieldset>
    <label></label>
    <p><div class="timer" id="timer-${account}">
    </div></p>
    </div>`);
}
