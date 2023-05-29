import { render } from "@testing-library/react";
import App from "./App";
import { describe, expect, it } from "vitest";

describe("Render App", () => {
  it("renders without crashing", async () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeDefined();
  });
});
