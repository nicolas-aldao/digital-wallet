import { Balance } from ".";
import { fireEvent, render, screen } from "@testing-library/react";

beforeEach(() => {
  const user = {
    _id: "1",
    firstname: "John",
    lastname: "Doe",
    balance: 100,
    contacts: [],
    profile_pic: "https://randomuser.me/api/portraits/men/54.jpg"
  };
  render(<Balance info={user} />);
});

test("should render correctly", () => {
  //   screen.debug();
  expect(screen.getByText(/100/)).toBeDefined();
});

test("should hide balance when eye icon is clicked", () => {
  //   screen.debug();
  const button = screen.getByTestId("eye-icon");
  fireEvent.click(button);
  //   screen.debug();
  expect(screen.getByText("$*******")).toBeDefined();
});
