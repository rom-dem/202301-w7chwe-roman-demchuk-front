import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the title 'Register' in a heading", () => {
      const expectedText = "Register";
      render(<App />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
