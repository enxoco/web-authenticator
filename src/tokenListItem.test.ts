// @vitest-environment jsdom

import { expect, test } from "vitest";
import { displayTokenListItem } from "./tokenListItem";

test("displays correct account name", () => {
  const div: HTMLDivElement = document.createElement("div");
  displayTokenListItem("Github", "ABCDEFGHIJKLMNOP", div);
  expect(div.innerHTML).toContain("Github");
});

test("displays multiple list items", () => {
  const div: HTMLDivElement = document.createElement("div");
  displayTokenListItem("Github", "ABCDEFGHIJKLMNOP", div);
  displayTokenListItem("Gmail", "ABCDEFGHIJKLMNOP", div);
  const tokens = [
    { account: "Github", secret: "blahblahblah" },
    { account: "Gmail", secret: "blahblahblah" },
  ];
  tokens.map((token) => displayTokenListItem(token.account, token.secret, div));
  console.log("dv", div.innerHTML);
  expect(div.innerHTML).toContain("Github");
  expect(div.innerHTML).toContain("Gmail");
});
