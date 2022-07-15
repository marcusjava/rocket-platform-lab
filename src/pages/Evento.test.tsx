import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Evento from "./Evento";

describe("Evento page test", () => {
  test("1 + 1", () => {
    render(<Evento />);
  });
});
