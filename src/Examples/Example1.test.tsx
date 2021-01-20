import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Example1 } from "./Example1";

test("list has 3 tasks", () => {
  // render(<Example1 />);
  // const listElement = screen.getByRole("list");
  // const listElements = screen.getAllByRole("listitem");
  // expect(listElement).toBeInTheDocument();
  // expect(listElements.length).toEqual(3);
});

test("added task appears on a list", () => {
  // render(<Example1 />);
  // const inputElement = screen.getByAltText("task input");
  // const submitButton = screen.getByRole("button", { name: "Submit" });
  // fireEvent.change(inputElement, { target: { value: "Make dinner" } });
  // fireEvent.click(submitButton);
  // const listElements = screen.getAllByRole("listitem");
  // expect(listElements.length).toEqual(4);
});
