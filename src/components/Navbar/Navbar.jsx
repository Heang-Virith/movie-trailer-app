import './Navbar.scss';
import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef, createContext } from "react";
import axios from "axios";
import Search from "../../Pages/Search/Search";
export const moviesContext = createContext();
export default function Navbar() {
  const genres = [
    "Adventure",
    "Horror",
    "Mystery",
    "Action",
    "Sci-Fi",
    "Sport",
    "Family",
    "Short",
    "Musical",
    "TV Show",
    "Drama",
    "Crime",
    "Animation",
    "Reality tv",
    "Costume",
    "Mythological",
    "Biology",
    "Thriller",
    "Comedy",
    "History",
    "Fantasy",
    "Documentary",
    "Music",
    "Western",
    "News",
    "War",
    "Romance",
    "Kungfu",
  ];
  const countries = [
    "United States",
    "Spain",
    "Germany",
    "Nigeria",
    "West Germany",
    "Japan",
    "Australia",
    "Senegal",
    "Philippines",
    "Russia",
    "Finland",
    "Indonesia",
    "Iceland",
    "Soviet Union",
    "Libya",
    "Slovenia",
    "Potugal",
    "Morrocco",
    "Thailand",
    "Cambodia",
    "Vietnam",
    "Laos",
    "Chile",
    "Denmark",
    "Argentina",
    "Brazil",
    "Singapore",
    "China",
    "Korea",
  ];
  const [searchKey, setSearchKey] = useState("");
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(false);
  const onSubmit = useRef();
  const logIn = useRef();
  
  //#3
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(process.env.REACT_APP_API_URL + `${type}/movie`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        query: searchKey,
      },
    });
    setMovies(results);
  };
  // #2
  useEffect(() => {
    fetchMovies();
  }, []);
  function OnSubmitHandler() {
    onSubmit.current.click();
  }
  //when search for movies #1
  const searchMovies = (event) => {
    event.preventDefault();
    setSearch(true);
    fetchMovies(searchKey);
    OnSubmitHandler();
  };
  const afterSearch = () => {
    searchKey(false);
  };
  const LogIn = () => {
    logIn.current.click();
  }
  return search ? (
    <moviesContext.Provider value={movies}>
      <nav className="navbar">
        <div className="navbar-container container">
          {/* Logo */}
          <div className="logo-container">
            <NavLink to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Movies_123movies.png"
                alt="logo"
                onClick={afterSearch}
              />
            </NavLink>
          </div>
          {/* Menus */}
          <ul className="link-container">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "active" : undefined)}
                onClick={afterSearch}
              >
                HOME
              </NavLink>
            </li>
            <li className="dropdown">
              <NavLink to="#" className="dropdown-btn">
                GENRE
              </NavLink>
              <ul className="dropdown-content">
                {genres.map((genre, index) => {
                  return (
                    <li className="item" key={index}>
                      <NavLink to="#">{genre}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="dropdown">
              <NavLink to="#" className="dropdown-btn">
                COUNTRY
              </NavLink>
              <ul className="dropdown-content">
                {countries.map((country, index) => {
                  return (
                    <li className="item" key={index}>
                      <NavLink to="#">{country}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <NavLink
                to="/tv-series"
                className={({ isActive }) => (isActive ? "active" : undefined)}
                onClick={afterSearch}
              >
                TV-SERIES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/top-imdb"
                className={({ isActive }) => (isActive ? "active" : undefined)}
                onClick={afterSearch}
              >
                TOP IMDb
              </NavLink>
            </li>
          </ul>
          {/* Action */}
          <div className="navbar-action">
            <form id="search-big-container" onSubmit={searchMovies}>
              <NavLink
                style={{ display: "none" }}
                to="/search"
                ref={onSubmit}
              ></NavLink>
              <div className="search-container">
                <input
                  className="search"
                  type="text"
                  placeholder="Searching..."
                  onChange={(event) => {setSearchKey(event.target.value);}}
                />

                <button className="submit" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9s-9-4.032-9-9s4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7c0-3.868-3.133-7-7-7c-3.868 0-7 3.132-7 7c0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828l-1.415 1.415l-2.828-2.829l1.414-1.414z"
                    />
                  </svg>
                </button>
                <button className="login" type="button" onClick={LogIn}>
                  <NavLink to='/login' ref={logIn} onClick={afterSearch}>LOGIN</NavLink>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <Search />
    </moviesContext.Provider>
  ) : (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Logo */}
        <div className="logo-container">
          <NavLink to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Movies_123movies.png"
              alt="logo"
            />
          </NavLink>
        </div>
        {/* Menus */}
        <ul className="link-container">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              HOME
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="#" className="dropdown-btn">
              GENRE
            </NavLink>
            <ul className="dropdown-content">
              {genres.map((genre, index) => {
                return (
                  <li className="item" key={index}>
                    <NavLink to="#">{genre}</NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="dropdown">
            <NavLink to="#" className="dropdown-btn">
              COUNTRY
            </NavLink>
            <ul className="dropdown-content">
              {countries.map((country, index) => {
                return (
                  <li className="item" key={index}>
                    <NavLink to="#">{country}</NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <NavLink
              to="/tv-series"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              TV-SERIES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/top-imdb"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              TOP IMDb
            </NavLink>
          </li>
        </ul>
        {/* Action */}
        <div className="navbar-action">
          <form id="search-big-container" onSubmit={searchMovies}>
            <NavLink
              style={{ display: "none" }}
              to="/search"
              ref={onSubmit}
            ></NavLink>
            <div className="search-container">
              <input
                className="search"
                type="text"
                placeholder="Searching..."
                onChange={(event) => setSearchKey(event.target.value)}
              />

              <button className="submit" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9s-9-4.032-9-9s4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7c0-3.868-3.133-7-7-7c-3.868 0-7 3.132-7 7c0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828l-1.415 1.415l-2.828-2.829l1.414-1.414z"
                  />
                </svg>
              </button>
              <button className="login" type="button" onClick={LogIn}>
                <NavLink to='/login' ref={logIn}>LOGIN</NavLink>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
