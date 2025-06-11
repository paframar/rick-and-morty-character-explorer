import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Test básico para verificar que Jest funciona
describe("Basic Test", () => {
  test("should work correctly", () => {
    expect(1 + 1).toBe(2);
  });

  test("should render a div element", () => {
    render(<div data-testid="test-div">Hello World</div>);
    const divElement = screen.getByTestId("test-div");
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveTextContent("Hello World");
  });
});
