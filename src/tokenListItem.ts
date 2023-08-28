import { toast } from "./toast";
import { displayToken } from "./token";
import rootDiv from "./utils/root"
let secondsSinceEpoch: number;
let secondsSinceStart: number = 0;
let secondsRemaining: number = 30;
const period: 30 | 60 = 30;
let token: string;

export function displayTokenListItem(
  account: string,
  secret: string,
) {
  function countdown() {
    secondsSinceEpoch = Math.ceil(Date.now() / 1000) - 1;
    secondsSinceStart = 0 + (secondsSinceEpoch % period);
    secondsRemaining = period - (secondsSinceEpoch % period);
    const timerDiv = document.getElementById(`timer-${account}`);
    const tokenDiv = document.getElementById(`secret-${account}`);

    if (timerDiv && tokenDiv && rootDiv) {
      timerDiv.innerHTML = secondsRemaining.toString();
      timerDiv.style.background = `conic-gradient(transparent ${
        (100 / 30) * secondsSinceStart
      }%, ${secondsRemaining < 10 ? "salmon" : "lightgreen"} 0)`;
      token = displayToken(secret);
      tokenDiv.innerHTML = token;
      tokenDiv.addEventListener("click", () => {
        navigator.clipboard.writeText(tokenDiv.innerHTML);
        toast(rootDiv!, `${tokenDiv.innerHTML} Copied successfully`)
      });
    }
  }
  setInterval(() => {
    countdown();
  }, 1000);
  return (`<div class="fieldset-wrapper">
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
