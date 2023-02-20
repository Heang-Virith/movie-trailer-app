import CardProduct from "../../components/CardProduct/CardProduct";
import { useContext, useRef, useState } from "react";
import { moviesContext } from "../../components/Navbar/Navbar";
import YouTube from "react-youtube";
import axios from "axios";
export default function Search() {
  const movies = useContext(moviesContext);
  const [selectedMovieID, setSelectedMovieID] = useState(0);
  const [key, setKey] = useState("");
  const goToMovie = useRef();
  const goToMovie2 = useRef();
  const fetchMovie = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + `movie/${selectedMovieID}`,
      {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          append_to_response: "videos",
        },
      }
    );
    return data;
  };
  const renderTrailer = async () => {
    const data = await fetchMovie();
    const trailer = data.videos.results.find(
      (vid) => vid.name === "Official Trailer"
    );
    const key = (await trailer) ? trailer.key : data.videos.results[0];
    return key;
  };

  const renderMovie = async () => {
    let key = await renderTrailer();
    setKey(key);
  };
  const PlayMovie = () => {
    renderMovie();
    return (
      <div className="home-container">
        <div className="container">
          <div className="card-container" style={{ margin: 0 }}>
            <div style={{ paddingTop: "2%", marginBottom: "3%" }}>
              <div className="youtube-container">
                <YouTube
                  videoId={`${key}`}
                  className="youtube-container"
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="home-container">
      <div className="home-container" ref={goToMovie}>
        <div className="container">
          <div className="card-container" style={{ margin: 0 }}>
            <div className="card-all-container">
              {movies &&
                movies.map((item, index) => {
                  return index < 20 ? (
                    <div
                      key={index}
                      className="card-all"
                      onClick={() => {
                        setSelectedMovieID(item.id);
                        goToMovie.current.style.display = "none";
                        goToMovie2.current.style.display = "block";
                      }}
                    >
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
                  ) : null;
                })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="home-container"
        ref={goToMovie2}
        style={{ display: "none" }}
      >
        {selectedMovieID ? PlayMovie() : null}
      </div>
    </div>
  );
}
