import { describe, expect, it } from "vitest";
import * as content from "../src/content/content";

// Guard: nothing unapproved or placeholder-looking may be published.
describe("published content", () => {
  const text = JSON.stringify(content);
  it("has no placeholder text", () => {
    expect(text).not.toMatch(/lorem|TBD|TODO/i);
  });
  it("shows no scoring weights in the rubric", () => {
    expect(JSON.stringify(content.rubric)).not.toMatch(/%|points?\b/i);
  });
  it("keeps the event start in IST", () => {
    expect(Date.parse(content.event.startsAt)).toBe(Date.UTC(2026, 10, 1, 18, 30));
  });
});
