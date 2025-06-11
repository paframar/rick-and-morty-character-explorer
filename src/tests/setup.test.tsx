import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Testing Library Setup", () => {
  it("should render a simple component", () => {
    const TestComponent = () => (
      <div data-testid="test-element">Hello Testing Library!</div>
    );

    render(<TestComponent />);

    const element = screen.getByTestId("test-element");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Hello Testing Library!");
  });

  it("should handle basic DOM queries", () => {
    const TestComponent = () => (
      <div>
        <h1>Welcome</h1>
        <button>Click me</button>
      </div>
    );

    render(<TestComponent />);

    expect(screen.getByRole("heading")).toHaveTextContent("Welcome");
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
