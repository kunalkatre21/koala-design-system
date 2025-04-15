/// <reference types="vitest" />
import React, { createRef } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button, ButtonProps } from "./Button";

  it("throws if neither text nor icon is provided", () => {
    // @ts-expect-error: Intentionally testing forbidden usage
    expect(() => render(<Button />)).toThrow(/at least one of 'children', 'icon', or 'trailingIcon'/i);
  });

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole("button", { name: "Click me" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("bg-primary");
    expect(btn).toHaveClass("h-10");
    expect(btn).not.toBeDisabled();
  });

  it("renders all variants", () => {
    const variants: ButtonProps["variant"][] = [
      "filled",
      "outlined",
      "text",
      "elevated",
      "tonal",
    ];
    variants.forEach((variant) => {
      render(<Button variant={variant}>V</Button>);
      expect(screen.getByRole("button", { name: "V" })).toBeInTheDocument();
    });
  });

  it("renders all sizes", () => {
    const sizes: ButtonProps["size"][] = ["small", "medium", "large"];
    sizes.forEach((size) => {
      render(<Button size={size}>S</Button>);
      expect(screen.getByRole("button", { name: "S" })).toBeInTheDocument();
    });
  });

  it("renders with leading icon", () => {
    render(<Button icon={<span data-testid="icon">*</span>} iconAriaLabel="star">IconBtn</Button>);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "IconBtn" })).toBeInTheDocument();
  });

  it("renders with trailing icon", () => {
    render(<Button trailingIcon={<span data-testid="trailing">*</span>} trailingIconAriaLabel="arrow">Next</Button>);
    expect(screen.getByTestId("trailing")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
  });

  it("renders icon-only button with correct aria-label", () => {
    render(<Button icon={<span data-testid="icon">*</span>} iconAriaLabel="star" />);
    const btn = screen.getByRole("button", { name: "star" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute("aria-label", "star");
  });

  it("renders trailing icon-only button with correct aria-label", () => {
    render(<Button trailingIcon={<span data-testid="trailing">*</span>} trailingIconAriaLabel="arrow" />);
    const btn = screen.getByRole("button", { name: "arrow" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute("aria-label", "arrow");
  });

  it("applies disabled state and aria-disabled", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole("button", { name: "Disabled" });
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute("aria-disabled", "true");
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole("button", { name: "Custom" })).toHaveClass("custom-class");
  });

  it("forwards ref to button element", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>RefBtn</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("calls onClick handler", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole("button", { name: "Click" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("sets type prop", () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole("button", { name: "Submit" })).toHaveAttribute("type", "submit");
  });

  it("passes tabIndex", () => {
    render(<Button tabIndex={-1}>Tab</Button>);
    expect(screen.getByRole("button", { name: "Tab" })).toHaveAttribute("tabindex", "-1");
  });
});