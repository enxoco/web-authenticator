import "./style.css";

import { tokenList } from "./tokenList";
import rootDiv from "./utils/root";

rootDiv!.innerHTML = `
  ${tokenList()}
`;
