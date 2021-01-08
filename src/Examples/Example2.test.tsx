import React from "react";
import { rest } from "msw";
import { Example2 } from "./Example2";
import { server } from "mocks/server";
import { fireEvent, screen, waitFor, render } from "@testing-library/react";
import { User } from "types/user";

const mockedUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@somemail.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@somemail.com",
  },
];

const clickLoadButton = (): void => {
  const loadButton = screen.getByRole("button", { name: "Load users" });
  fireEvent.click(loadButton);
};

test("loads users from api", async () => {
  server.use(
    rest.get("/users", (req, res, ctx) => {
      return res.once(ctx.status(200), ctx.json(mockedUsers));
    })
  );

  render(<Example2 />);
  clickLoadButton();

  await waitFor(() =>
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  );

  await waitFor(() => {
    const listElement = screen.getByRole("list");
    const listElements = screen.getAllByRole("listitem");

    expect(listElement).toBeInTheDocument();
    expect(listElements.length).toEqual(2);
  });

  await waitFor(() => expect(screen.getByText("Loaded")).toBeInTheDocument());
});

test("handles error when loading users from api", async () => {
  server.use(
    rest.get("/users", (req, res, ctx) => {
      return res.once(
        ctx.status(500),
        ctx.json({ errorMessage: "Server error" })
      );
    })
  );

  render(<Example2 />);
  clickLoadButton();

  await waitFor(() =>
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  );

  await waitFor(() =>
    expect(screen.getByText("Server error")).toBeInTheDocument()
  );
});
