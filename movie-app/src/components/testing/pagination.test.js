import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../pagination";
import { Moviecontext } from "../moviecontext"; 
import '@testing-library/jest-dom';


// Mock context values for the test
const mockContext = {
  pageNo: 1,
  setPageNo: jest.fn(),
};

describe("Pagination Component", () => {
  test("renders pagination component with initial page number", () => {
    render(
      <Moviecontext.Provider value={mockContext}>
        <Pagination />
      </Moviecontext.Provider>
    );

    // Check if the page number is rendered correctly
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("decreases the page number when the left arrow is clicked", () => {
    mockContext.pageNo = 2; // Set pageNo to a value greater than 1 to test decrement
    render(
      <Moviecontext.Provider value={mockContext}>
        <Pagination />
      </Moviecontext.Provider>
    );

    // Find the left arrow and simulate the click event
    fireEvent.click(screen.getByRole("button", { name: /left/i }));

    // Ensure setPageNo was called with the correct value
    expect(mockContext.setPageNo).toHaveBeenCalledWith(1);
  });

  test("does not decrease the page number if pageNo is 1", () => {
    mockContext.pageNo = 1;
    render(
      <Moviecontext.Provider value={mockContext}>
        <Pagination />
      </Moviecontext.Provider>
    );

    // Click the left arrow when pageNo is 1
    fireEvent.click(screen.getByRole("button", { name: /left/i }));

    // Ensure setPageNo is not called since pageNo cannot go below 1
    expect(mockContext.setPageNo).not.toHaveBeenCalled();
  });

  test("increases the page number when the right arrow is clicked", () => {
    mockContext.pageNo = 1
    render(
      <Moviecontext.Provider value={mockContext}>
        <Pagination />
      </Moviecontext.Provider>
    );

    // Click the right arrow to increment the page number
    fireEvent.click(screen.getByRole("button", { name: /right/i }));

    // Ensure setPageNo is called with the correct incremented value
    expect(mockContext.setPageNo).toHaveBeenCalledWith(2);
  });
});
