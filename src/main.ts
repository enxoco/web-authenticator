import "./style.css";

import { tokenList } from "./tokenList";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${tokenList()}
`;

// setupTokenList(document.querySelector<HTMLDivElement>("#tokens")!);
