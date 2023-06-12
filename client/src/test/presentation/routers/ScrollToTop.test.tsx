import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ScrollToTop from "application/routers/ScrollToTop";

describe("ScrollToTop", () => {
  it("should scroll to top when location changes", () => {
    // Simulate the behavior of window.scrollTo
    window.scrollTo = jest.fn();

    // Render the ScrollToTop component within MemoryRouter
    render(
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <ScrollToTop />
      </MemoryRouter>
    );

    // Simulate a change in location
    const newLocation = { pathname: "/new-page" };
    render(
      <MemoryRouter initialEntries={[newLocation]} initialIndex={0}>
        <ScrollToTop />
      </MemoryRouter>
    );

    // Verify that window.scrollTo was called with the correct arguments
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
