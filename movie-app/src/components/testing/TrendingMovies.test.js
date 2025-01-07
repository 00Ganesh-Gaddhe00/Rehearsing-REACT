import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Trendingmovies from "../trendingMovies";
import { Moviecontext } from "../moviecontext";
import '@testing-library/jest-dom';

jest.mock("axios");

describe("Trendingmovies Component", () => {

  // Test that the loading message appears while movies are being fetched.
//   test("displays loading message while movies are being fetched", async () => {
//     axios.get.mockResolvedValueOnce({
//       data: { results: [] },
//     });

//     render(
//       <Moviecontext.Provider value={{ pageNo: 1 }}>
//         <Trendingmovies />
//       </Moviecontext.Provider>
//     );

//     expect(screen.getByText("...loading")).toBeInTheDocument();
//   });

  // Test that the movies are displayed after fetching data.
  test("displays movies after fetching data", async () => {
    const moviesData = {
      data: {
        results: [
          { id: 1, title: "Movie 1", poster_path: "/path/to/poster1.jpg" },
          { id: 2, title: "Movie 2", poster_path: "/path/to/poster2.jpg" },
        ],
      },
    };

    const WatchList = [{ id: 1, title: "Movie 1", poster_path: "/path/to/poster1.jpg" }];


    axios.get.mockResolvedValueOnce(moviesData);

    render(
      <Moviecontext.Provider value={{ pageNo: 1, WatchList }}>
        <Trendingmovies />
      </Moviecontext.Provider>
    );
       
      expect(screen.getByText("...loading")).toBeInTheDocument();

    // Wait for movies to be loaded and rendered
    await waitFor(() => expect(screen.getByLabelText("Movie 1") ).toBeInTheDocument());
    await waitFor(() => expect(screen.getByLabelText("Movie 2")).toBeInTheDocument());
  });

  //Test that the correct API endpoint is called based on pageNo.
//   test("calls the correct API endpoint based on pageNo", async() => {
//     const pageNo = 2;
//     const moviesData = {
//       data: {
//         results: [
//           { id: 1, title: "Movie 1", poster_path: "/path/to/poster1.jpg" },
//         ],
//       },
//     };

//     axios.get.mockResolvedValueOnce(moviesData);

//     render(
//       <Moviecontext.Provider value={{ pageNo }}>
//         <Trendingmovies />
//       </Moviecontext.Provider>
//     );
       
//     await waitFor(() => expect(screen.getByText("Movie 1")).toBeInTheDocument())

//     expect(axios.get).toHaveBeenCalledWith(
//       `https://api.themoviedb.org/3/trending/movie/day?api_key=e8f62da5e2126af5d78d9b0d4bc4d1ce&page=${pageNo}`
//     );
//   });

  // Test that the Pagination component is rendered.
  test("renders Pagination component", async () => {
    const moviesData = {
      data: {
        results: [
          { id: 1, title: "Movie 1", poster_path: "/path/to/poster1.jpg" },
        ],
      },
    };

    const WatchList = [{ id: 1, title: "Movie 1", poster_path: "/path/to/poster1.jpg" }];
    axios.get.mockResolvedValueOnce(moviesData);
    

    render(
      <Moviecontext.Provider value={{ pageNo: 1, WatchList}}>
        <Trendingmovies />
      </Moviecontext.Provider>
    );

    await waitFor(() => expect(screen.getByText("Movie 1")).toBeInTheDocument())

    // Check if the pagination buttons (left, right) are rendered
    expect(screen.getByRole("button", { name: /left/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /right/i })).toBeInTheDocument();
  });

//   // Test that pagination updates pageNo correctly when buttons are clicked.
//   test("pagination correctly increments and decrements the page number", async () => {
//     const pageNo = 1;
//     const setPageNo = jest.fn(); // Mock the setPageNo function
//     const moviesData = {
//       data: {
//         results: [
//           { id: 1, title: "Movie 1", poster_path: "/path/to/poster1.jpg" },
//         ],
//       },
//     };

//     axios.get.mockResolvedValueOnce(moviesData);

//     render(
//       <Moviecontext.Provider value={{ pageNo, setPageNo }}>
//         <Trendingmovies />
//       </Moviecontext.Provider>
//     );

//     fireEvent.click(screen.getByLabelText(/right/i));  // Click right button
//     expect(setPageNo).toHaveBeenCalledWith(pageNo + 1);

//     fireEvent.click(screen.getByLabelText(/left/i));  // Click left button
//     expect(setPageNo).toHaveBeenCalledWith(pageNo);
//   });

//   // Test that no movies are rendered if the API returns no results.
//   test("displays no movies if API returns no results", async () => {
//     const emptyMoviesData = {
//       data: {
//         results: [],
//       },
//     };

//     axios.get.mockResolvedValueOnce(emptyMoviesData);

//     render(
//       <Moviecontext.Provider value={{ pageNo: 1 }}>
//         <Trendingmovies />
//       </Moviecontext.Provider>
//     );

//     // Check if no movie cards are rendered
//     await waitFor(() => expect(screen.queryByTestId("movie-card-Movie 1")).not.toBeInTheDocument());
//   });

//   // Test that the loading message is hidden after movies are fetched.
//   test("hides loading message after movies are fetched", async () => {
//     const moviesData = {
//       data: {
//         results: [
//           { id: 1, title: "Movie 1", poster_path: "/path/to/poster1.jpg" },
//           { id: 2, title: "Movie 2", poster_path: "/path/to/poster2.jpg" },
//         ],
//       },
//     };

//     axios.get.mockResolvedValueOnce(moviesData);

//     render(
//       <Moviecontext.Provider value={{ pageNo: 1 }}>
//         <Trendingmovies />
//       </Moviecontext.Provider>
//     );

//     // Wait for the movies to load and ensure the loading message is removed
//     await waitFor(() => expect(screen.queryByText("...loading")).not.toBeInTheDocument());
//   });
});
