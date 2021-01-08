import React from "react";
import { render, screen } from "@testing-library/react";
import { Main } from "./Main";

const testIfButtonExists = (name: string): void => {
  const button1 = screen.getByRole("button", { name });
  expect(button1).toBeInTheDocument();
};

test("renders three example buttons", () => {
  render(<Main />);

  testIfButtonExists("Example 1");
  testIfButtonExists("Example 2");
});
