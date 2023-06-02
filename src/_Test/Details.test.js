import React from "react";
import { render, screen } from "@testing-library/react";
import UserDetails from "../Details";
const userInfo = {
  userName: "PMD",
  email: "pmd@gmail.com",
  phone: "111111111",
};
test("test", () => {
  render(<UserDetails info={userInfo} />);

  expect(screen.getByText("User Details")).toBeInTheDocument();
  expect(
    screen.getByText(`Username: ${userInfo.userName}`)
  ).toBeInTheDocument();
  expect(screen.getByText(`Email: ${userInfo.email}`)).toBeInTheDocument();
  expect(screen.getByText(`Phone: ${userInfo.phone}`)).toBeInTheDocument();
});