// @vitest-environment jsdom

import { expect, test } from "vitest";
import { displayTokenListItem } from "./tokenListItem";

test("displays correct account name", () => {
  const div: HTMLDivElement = document.createElement("div");
  displayTokenListItem("Github", "ABCDEFGHIJKLMNOP", div);
  expect(div.innerHTML).toContain("Github");
});

