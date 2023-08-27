import { displayToken } from "./token";

class Timer {
  constructor(public counter = 30, public element: HTMLDivElement, public account: string, public secret: string) {
  
      let intervalId = setInterval(() => {
          this.counter = this.counter - 1;
          console.log(this.counter)
          if(this.counter === 0) clearInterval(intervalId)
          element.innerHTML = `<div class="fieldset-wrapper">
    <fieldset>
      <label>Account</label>
        <p data-test-id="account">${account}</p>
    </fieldset>
    <fieldset>
      <label>Code</label>
      <p data-test-id="secret">${displayToken(secret)}</p>
    </fieldset>
    <fieldset>
    <label></label>
    <p>${this.counter}</p>
    </div>`
          return this.element

      }, 1000)
  }
}
export default Timer