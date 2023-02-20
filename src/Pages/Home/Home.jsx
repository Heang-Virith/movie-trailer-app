import CardProduct from "../../components/CardProduct/CardProduct";
import CardNone from "../../components/Card-None/CardNone";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.scss";
import SwipeableTextMobileStepper from "../../components/Carousel/Carousel";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.REACT_APP_API_URL + "movie/top_rated", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          page: 1,
        },
      })
      .then((data) => {
        setData(data.data.results);
      });
    axios
      .get(process.env.REACT_APP_API_URL + "/movie/popular", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          page: 1,
        },
      })
      .then((data1) => {
        setData1(data1.data.results);
      });
    axios
      .get(process.env.REACT_APP_API_URL + "/movie/upcoming", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          page: 1,
        },
      })
      .then((data2) => {
        setData2(data2.data.results);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="home-container">
      <div className="container">
        {isLoading ? (
          // before loading data
          <CardNone></CardNone>
        ) : (
          //data loaded successfully
          <div className="card-container" style={{ margin: 0 }}>
            <div style={{ paddingTop: "2%" }} className="carousel">
              <SwipeableTextMobileStepper data={data} />
            </div>
            {/* Suggestion */}
            <div className="suggestion">
              <div className="suggestion-container">
                <div className="suggestion-category">SUGGESTION</div>

                <ul className="suggestion-link">
                  <li>
                    <NavLink to="#">Hot</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Top favorite</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Top rating</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Top IMDb</NavLink>
                  </li>
                </ul>
              </div>
              <div className="more">
                <NavLink to="#">
                  View more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="10"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5.7 6.71a.996.996 0 0 0 0 1.41L9.58 12L5.7 15.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L7.12 6.71c-.39-.39-1.03-.39-1.42 0z"
                    />
                    <path
                      fill="currentColor"
                      d="M12.29 6.71a.996.996 0 0 0 0 1.41L16.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L13.7 6.7c-.38-.38-1.02-.38-1.41.01z"
                    />
                  </svg>
                </NavLink>
              </div>
            </div>
            <div className="card-all-container">
              {data &&
                data.map((item, index) => {
                  return (
                    <div key={index} className="card-all">
                      <div className="shade"></div>
                      <div className="card-quality">HD</div>
                      <div className="card-play">
                        <svg
                          className="play-btn"
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 256 256"
                        >
                          <path
                            fill="currentColor"
                            d="M240 128a16.1 16.1 0 0 1-7.7 13.7l-144 87.9a15.5 15.5 0 0 1-16.1.3A15.8 15.8 0 0 1 64 216V40a15.8 15.8 0 0 1 8.2-13.9a15.5 15.5 0 0 1 16.1.3l144 87.9A16.1 16.1 0 0 1 240 128Z"
                          />
                        </svg>
                      </div>

                      <CardProduct
                        key={item.id}
                        name={item.title}
                        image={
                          process.env.REACT_APP_IMAGE_URL + item.poster_path
                        }
                      ></CardProduct>
                    </div>
                  );
                })}
            </div>
            {/* Latest movies */}
            <div className="suggestion">
              <div className="suggestion-container">
                <div className="suggestion-category">LATEST MOVIES</div>

                <ul className="suggestion-link">
                  <li>
                    <NavLink to="#">All</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Action</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Thriller</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Romance</NavLink>
                  </li>
                </ul>
              </div>
              <div className="more">
                <NavLink to="#">
                  View more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="10"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5.7 6.71a.996.996 0 0 0 0 1.41L9.58 12L5.7 15.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L7.12 6.71c-.39-.39-1.03-.39-1.42 0z"
                    />
                    <path
                      fill="currentColor"
                      d="M12.29 6.71a.996.996 0 0 0 0 1.41L16.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L13.7 6.7c-.38-.38-1.02-.38-1.41.01z"
                    />
                  </svg>
                </NavLink>
              </div>
            </div>
            <div className="card-all-container">
              {data1 &&
                data1.map((item, index) => {
                  return (
                    <div key={index} className="card-all">
                      <div className="shade"></div>
                      <div className="card-quality">HD</div>
                      <div className="card-play">
                        <svg
                          className="play-btn"
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 256 256"
                        >
                          <path
                            fill="currentColor"
                            d="M240 128a16.1 16.1 0 0 1-7.7 13.7l-144 87.9a15.5 15.5 0 0 1-16.1.3A15.8 15.8 0 0 1 64 216V40a15.8 15.8 0 0 1 8.2-13.9a15.5 15.5 0 0 1 16.1.3l144 87.9A16.1 16.1 0 0 1 240 128Z"
                          />
                        </svg>
                      </div>

                      <CardProduct
                        key={item.id}
                        name={item.title}
                        image={
                          process.env.REACT_APP_IMAGE_URL + item.poster_path
                        }
                      ></CardProduct>
                    </div>
                  );
                })}
            </div>
            <div className="suggestion">
              <div className="suggestion-container">
                <div className="suggestion-category">LATEST TV-SERIES</div>

                <ul className="suggestion-link">
                  <li>
                    <NavLink to="#">All</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">USA</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">UK</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">KH</NavLink>
                  </li>
                </ul>
              </div>
              <div className="more">
                <NavLink to="#">
                  View more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="10"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5.7 6.71a.996.996 0 0 0 0 1.41L9.58 12L5.7 15.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L7.12 6.71c-.39-.39-1.03-.39-1.42 0z"
                    />
                    <path
                      fill="currentColor"
                      d="M12.29 6.71a.996.996 0 0 0 0 1.41L16.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L13.7 6.7c-.38-.38-1.02-.38-1.41.01z"
                    />
                  </svg>
                </NavLink>
              </div>
            </div>
            <div className="card-all-container">
              {data2 &&
                data2.map((item, index) => {
                  return (
                    <div key={index} className="card-all">
                      <div className="shade"></div>
                      <div className="card-quality">HD</div>
                      <div className="card-play">
                        <svg
                          className="play-btn"
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 256 256"
                        >
                          <path
                            fill="currentColor"
                            d="M240 128a16.1 16.1 0 0 1-7.7 13.7l-144 87.9a15.5 15.5 0 0 1-16.1.3A15.8 15.8 0 0 1 64 216V40a15.8 15.8 0 0 1 8.2-13.9a15.5 15.5 0 0 1 16.1.3l144 87.9A16.1 16.1 0 0 1 240 128Z"
                          />
                        </svg>
                      </div>

                      <CardProduct
                        key={item.id}
                        name={item.title}
                        image={
                          process.env.REACT_APP_IMAGE_URL + item.poster_path
                        }
                      ></CardProduct>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
