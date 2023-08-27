import "./style.css";

import { tokenList } from "./tokenList";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${tokenList()}
`;
