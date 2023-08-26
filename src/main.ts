import "./style.css";

import {setupTokenList} from './tokens'
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <form id="tokens">
    </form>
  </div>
`;

setupTokenList(document.querySelector<HTMLDivElement>("#tokens")!);
