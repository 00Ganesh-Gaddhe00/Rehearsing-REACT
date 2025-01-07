import { render, screen, waitFor } from "@testing-library/react";
import Banner from "../banner";
import '@testing-library/jest-dom';
import axios from "axios";

jest.mock("axios");


// test("renders loading state initially", () => {
//   render(<Banner />);
//   const loadingElement = screen.getByText(/loading.../i);
//   expect(loadingElement).toBeInTheDocument();
// });



test("renders movie title and background image after API call", async () => {
  const mockMovie = {
    title: "Mock Movie",
    backdrop_path: "/mock-backdrop.jpg",
  };

  const mockResponse = {
    data: {
      results: Array(20).fill(mockMovie),
    },
  };

  axios.get.mockResolvedValueOnce(mockResponse);

  render(<Banner />);

  // Check for loading state initially
  const loadingElement = screen.getByText(/loading.../i);
  expect(loadingElement).toBeInTheDocument();


  // Wait for the API call to resolve
  await waitFor(() => expect(screen.getByText("Mock Movie")).toBeInTheDocument());

  // Check if the background image is set correctly
  const divElement = screen.getByTestId("banner");
  expect(divElement).toHaveStyle(
    "background-image: url(https://image.tmdb.org/t/p/original/mock-backdrop.jpg)"
  );
});

