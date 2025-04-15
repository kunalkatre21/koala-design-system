/// <reference types="vitest" />
import React from "react";
import { render, screen } from "@testing-library/react";
import { Card, CardProps } from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders all variants", () => {
    const variants: CardProps["variant"][] = ["elevated", "filled", "outlined"];
    variants.forEach((variant) => {
      render(<Card variant={variant}>V</Card>);
      expect(screen.getByText("V")).toBeInTheDocument();
    });
  });

  it("applies correct variant classes", () => {
    render(<Card variant="elevated">A</Card>);
    expect(screen.getByText("A").parentElement).toHaveClass("shadow-elevation-1");
    render(<Card variant="filled">B</Card>);
    expect(screen.getByText("B").parentElement).toHaveClass("bg-surface");
    render(<Card variant="outlined">C</Card>);
    expect(screen.getByText("C").parentElement).toHaveClass("border");
  });

  it("applies interactive state layer and accessibility props", () => {
    render(<Card interactive>Interactive</Card>);
    const card = screen.getByText("Interactive").parentElement;
    expect(card).toHaveAttribute("role", "button");
    expect(card).toHaveAttribute("tabindex", "0");
    expect(card?.className).toMatch(/hover:after:bg-on-surface/);
  });

  it("applies non-interactive accessibility props", () => {
    render(<Card>Group</Card>);
    const card = screen.getByText("Group").parentElement;
    expect(card).toHaveAttribute("role", "group");
    expect(card).not.toHaveAttribute("tabindex");
  });

  it("applies custom className", () => {
    render(<Card className="custom-class">Custom</Card>);
    expect(screen.getByText("Custom").parentElement).toHaveClass("custom-class");
  });

  it("forwards other div props", () => {
    render(<Card data-testid="card">Test</Card>);
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});