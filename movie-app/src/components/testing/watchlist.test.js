import { render, screen, fireEvent } from "@testing-library/react";
import Watchlist from "../watchlist";
import { Moviecontext } from "../moviecontext";
import '@testing-library/jest-dom';


const mockWatchList = [
  {
    id: 1,
    title: "Movie 1",
    poster_path: "/path1.jpg",
    vote_average: 8.5,
    popularity: 100,
    genre_ids: [28],
  },
  {
    id: 2,
    title: "Movie 2",
    poster_path: "/path2.jpg",
    vote_average: 7.2,
    popularity: 80,
    genre_ids: [35],
  },
];

const mockHandleremoveWL = jest.fn();
const mockSetWatchList = jest.fn();


describe("Watchlist Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = (contextValue) =>
    render(
      <Moviecontext.Provider value={contextValue}>
        <Watchlist />
      </Moviecontext.Provider>
    );

  test("renders genres and movies in the watchlist", () => {
    renderComponent({
      WatchList: mockWatchList,
      handleremoveWL: mockHandleremoveWL,
      setWatchList: mockSetWatchList,
    });

    // Check if genres are rendered
    expect(screen.getByText(/All Genres/i)).toBeInTheDocument();
    expect(screen.getByText(/Action/i,{ selector: "div" })).toBeInTheDocument();
    expect(screen.getByText(/Comedy/i,{ selector: "div" })).toBeInTheDocument();

    // Check if movies are rendered
    expect(screen.getByText(/Movie 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Movie 2/i)).toBeInTheDocument();
  });

  test("filters movies by genre", () => {

    renderComponent({
      WatchList: mockWatchList,
      handleremoveWL: mockHandleremoveWL,
      setWatchList: mockSetWatchList,
    });

    const actionGenre = screen.getByText(/Action/i,{ selector: "div" });
    fireEvent.click(actionGenre);

    // Check filtered movie
    expect(screen.getByText(/Movie 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/Movie 2/i)).not.toBeInTheDocument();
  });

  test("filters movies by search term", () => {
    renderComponent({
      WatchList: mockWatchList,
      handleremoveWL: mockHandleremoveWL,
      setWatchList: mockSetWatchList,
    });

    const searchInput = screen.getByPlaceholderText(/Search Movies/i);
    fireEvent.change(searchInput, { target: { value: "Movie 2" } });

    // Check filtered movie
    expect(screen.getByText(/Movie 2/i)).toBeInTheDocument();
    expect(screen.queryByText(/Movie 1/i)).not.toBeInTheDocument();
  });

  test("sorts movies by rating in ascending order", () => {
    renderComponent({
      WatchList: mockWatchList,
      handleremoveWL: mockHandleremoveWL,
      setWatchList: mockSetWatchList,
    });

    const sortAscButton = screen.getByRole("button", { name: /arrow-down/i });
    fireEvent.click(sortAscButton);

    expect(mockSetWatchList).toHaveBeenCalledWith([
      mockWatchList[0],
      mockWatchList[1],
    ]);
  });

  test("sorts movies by rating in descending order", () => {
    renderComponent({
      WatchList: mockWatchList,
      handleremoveWL: mockHandleremoveWL,
      setWatchList: mockSetWatchList,
    });

    const sortDescButton = screen.getByRole("button", { name: /arrow-up/i });
    fireEvent.click(sortDescButton);

    expect(mockSetWatchList).toHaveBeenCalledWith([
      mockWatchList[0],
      mockWatchList[1],
    ]);
  });

  test("removes a movie from the watchlist", () => {
    renderComponent({
      WatchList: mockWatchList,
      handleremoveWL: mockHandleremoveWL,
      setWatchList: mockSetWatchList,
    });

    const deleteButton = screen.getAllByRole("button", { name: /delete/i })[0];
    fireEvent.click(deleteButton);

    expect(mockHandleremoveWL).toHaveBeenCalledWith(mockWatchList[0]);
  });

  test("renders empty state when watchlist is empty", () => {
    renderComponent({
      WatchList: [],
      handleremoveWL: mockHandleremoveWL,
      setWatchList: mockSetWatchList,
    });

    expect(screen.queryByText(/All Genres/i)).toBeInTheDocument();
    expect(screen.queryByText(/No movies in watchlist/i)).not.toBeInTheDocument();
  });
});
