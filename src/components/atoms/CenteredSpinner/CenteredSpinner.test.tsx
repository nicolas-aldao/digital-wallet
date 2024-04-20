import { CenteredSpinner } from ".";
import { render, screen } from "@testing-library/react";

test("should render correctly", () => {
  render(<CenteredSpinner />);
  expect(screen.getByTestId("centered-spinner")).toBeDefined();
});
