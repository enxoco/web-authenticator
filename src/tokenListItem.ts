import {displayToken} from './token'
import Timer from './tokenTimer';
import totp from 'totp-generator'
const period = 30
const digits = 6
let token = ''
async function generateTOTP(secret: string): Promise<{secondsSinceStart: number, secondsRemaining: number}>{
  const token = totp(secret.replace(/ /, '').trim(), {
    digits,
    period,
  })

  const secondsSinceEpoch = Math.ceil(Date.now() / 1000) - 1
  const secondsSinceStart = 0 + (secondsSinceEpoch % period)
  const secondsRemaining = period - (secondsSinceEpoch % period)
  return {
    secondsSinceStart,
    secondsRemaining
  }
}
export async function displayTokenListItem(account: string, secret: string, element: HTMLDivElement){
  const period = 30
  const digits = 6
  const {secondsRemaining, secondsSinceStart} = await generateTOTP(secret)
  const token = await displayToken(secret)
    return element.innerHTML = `<div class="fieldset-wrapper">
    <fieldset>
      <label>Account</label>
        <p data-test-id="account">${account}</p>
    </fieldset>
    <fieldset>
      <label>Code</label>
      <p data-test-id="secret">${await displayToken(secret)}</p>
    </fieldset>
    <fieldset>
    <label></label>
    <p>${await Timer(secondsSinceStart, secondsRemaining)}</p>
    </div>`;
}