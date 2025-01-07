import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; 
import Navbar from '../navbar';
import movieicon from "../movieicon9.png";
import '@testing-library/jest-dom';


describe("Navbar Component", () => {

  test("renders movie icon", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    
    const imageElement = screen.getByAltText("Film logo");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", movieicon);
  });

  test("renders Movies link", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const moviesLink = screen.getByText(/Movies/i);
    expect(moviesLink).toBeInTheDocument();
    expect(moviesLink).toHaveAttribute("href", "/");
  });

  test("renders WatchList link", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const watchlistLink = screen.getByText(/WatchList/i);
    expect(watchlistLink).toBeInTheDocument();
    expect(watchlistLink).toHaveAttribute("href", "/watchlist");
  });

  
});
