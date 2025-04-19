import {
  generateShortId,
  generateDeterministicShortId,
  generateTimeBasedShortId,
} from "../src";
import { expect, test } from "vitest";

test("generates short ID of correct length", () => {
  expect(generateShortId(8)).toHaveLength(8);
});

test("deterministic ID is consistent", () => {
  const a = generateDeterministicShortId("example");
  const b = generateDeterministicShortId("example");
  expect(a).toBe(b);
});

test("time-based ID includes user hint", () => {
  const id = generateTimeBasedShortId("bob");
  expect(id).toContain("Ym9i"); // base64url encoded "bob"
});
