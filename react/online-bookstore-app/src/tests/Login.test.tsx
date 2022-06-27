import { render, screen } from "@testing-library/react";
import LogIn from "../components/common/loginForm/LoginForm";

test("renders login component", () => {
  render(<LogIn />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
