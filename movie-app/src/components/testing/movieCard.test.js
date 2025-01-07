import { render, screen, fireEvent } from "@testing-library/react";
import Moviecard from "../moviecard";
import { Moviecontext } from "../moviecontext";
import "@testing-library/jest-dom";


describe("Moviecard Component", () => {
  const mockHandleAddWL = jest.fn();
  const mockHandleRemoveWL = jest.fn();

  const movieObj = { id: 1, title: "Test Movie", posterpath: "/test.jpg" };

  const renderComponent = (watchList = []) => {
    render(
      <Moviecontext.Provider
        value={{
          WatchList: watchList,
          handleaddWL: mockHandleAddWL,
          handleremoveWL: mockHandleRemoveWL,
        }}
      >
        <Moviecard
          movieObj={movieObj}
          title={movieObj.title}
          posterpath={movieObj.posterpath}
        />
      </Moviecontext.Provider>
    );
  };

  test("renders Moviecard with title and background image", () => {
    renderComponent();

    expect(screen.getByText(/Test Movie/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    const card = screen.getByText(/Test Movie/i).parentElement;
    expect(card).toHaveStyle(
      `background-image: url(https://image.tmdb.org/t/p/original${movieObj.posterpath})`
    );
  });

  test("displays add button when movie is not in watchlist", () => {
    renderComponent([]);

    const addButton = screen.getByText("😍");
    expect(addButton).toBeInTheDocument();
  });

  test("calls handleaddWL when add button is clicked", () => {
    renderComponent([]);

    const addButton = screen.getByText("😍");
    fireEvent.click(addButton);

    expect(mockHandleAddWL).toHaveBeenCalledTimes(1);
    expect(mockHandleAddWL).toHaveBeenCalledWith(movieObj);
  });

  test("displays remove button when movie is in watchlist", () => {
    renderComponent([movieObj]);

    const removeButton = screen.getByText("❌");
    expect(removeButton).toBeInTheDocument();
  });

  test("calls handleremoveWL when remove button is clicked", () => {
    renderComponent([movieObj]);

    const removeButton = screen.getByText("❌");
    fireEvent.click(removeButton);

    expect(mockHandleRemoveWL).toHaveBeenCalledTimes(1);
    expect(mockHandleRemoveWL).toHaveBeenCalledWith(movieObj);
  });
});
