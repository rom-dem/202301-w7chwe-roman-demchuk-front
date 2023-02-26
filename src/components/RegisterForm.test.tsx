import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When rendered", () => {
    test("Then it should show a Submit button", () => {
      const expectedButtonText = "Submit";
      render(<RegisterForm />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
