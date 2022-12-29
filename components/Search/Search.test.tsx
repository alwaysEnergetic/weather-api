import React from "react";
import { render } from "@testing-library/react";
import Search from "./Search";

describe("Search component", () => {
  it("should render the form tag", () => {
    const { getByLabelText } = render(<Search setIsLoading={false} />);
    expect(getByLabelText("form-search")).toBeTruthy();
  });
});
