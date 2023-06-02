import React from "react";
import LoginForm from "../Login";
import { render, screen, fireEvent } from "@testing-library/react";


test("testing library trường hợp không nhập username", () => {
  render(<LoginForm />);
  fireEvent.click(screen.getByText("Login"));

  expect(screen.getByText("Vui lòng nhập username")).toBeInTheDocument();
});


test("trường hợp không nhập password", () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "admin" },
  });
  fireEvent.click(screen.getByText("Login"));

  expect(screen.getByText("Vui lòng nhập mật khẩu")).toBeInTheDocument();
});

test("trường hợp nhập username và password ko đúng", () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "incorrect" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "incorrect" },
  });
  fireEvent.click(screen.getByText("Login"));

  expect(
    screen.getByText("Thông tin đăng nhập không đúng")
  ).toBeInTheDocument();
});

test("Display welcome message when username and password are correct", () => {
  render(<LoginForm />);
  
  test("Display welcome message when username and password are correct", () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "admin" },
    });
    
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "admin" },
    });
    
    fireEvent.click(screen.getByText("Login"));
    
    expect(screen.getByText("Xin chào Admin")).toBeInTheDocument();
  });
});