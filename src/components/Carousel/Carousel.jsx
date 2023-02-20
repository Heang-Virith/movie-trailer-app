import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useRef } from "react";
import "./Carousel.scss";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "The Boy, the Mole, the Fox and the Horse",
    imgPath:
      process.env.REACT_APP_IMAGE_URL + "/oQRgyQCzcyZvE6w5heM9ktVY0LT.jpg",
    releaseDate: "1990-08-23",
    duration : 112
  },
  {
    label: "The Godfather",
    imgPath:
      process.env.REACT_APP_IMAGE_URL + "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    releaseDate: "2022-12-25",
    duration : 112
  },
  {
    label: "The Good, the Bad and the Ugly",
    imgPath:
      process.env.REACT_APP_IMAGE_URL + "/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
    releaseDate: "1966-12-23",
    duration : 106
  },
  {
    label: "Forrest Gump",
    imgPath:
      process.env.REACT_APP_IMAGE_URL + "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    releaseDate: "1994-06-23",
    duration: 90
  },
  {
    label: "Parasite",
    imgPath:
      process.env.REACT_APP_IMAGE_URL + "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    releaseDate: "2019-05-30",
    duration: 102
  },
  {
    label: "The Dark Knight",
    imgPath:
      process.env.REACT_APP_IMAGE_URL + "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    releaseDate: "2008-07-14",
    duration: 80
  },
  {
    label: "Pulp Fiction",
    imgPath:
      process.env.REACT_APP_IMAGE_URL + "/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
    releaseDate: "1994-09-10",
    duration: 110
  }
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const popIn = useRef(null);
  const handleMouseEnter = () => {
    popIn.current.style.display = "block";
  };
  return (
    <div className="container">
      <Box
        sx={{
          width: '65%',
          height: '100%',
          maxWidth: "1440px",
          flexGrow: 1,
          margin: "0 auto",
          cursor: "pointer",
          position: "relative",
          display: 'block'
        }}
      >
        <div className="pop-in-container">
          <AutoPlaySwipeableViews
            style={{ position: "relative" }}
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div style={{ margin: "0 auto" }} key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <div
                    className="pop-in-container"
                    onMouseEnter={handleMouseEnter}
                  >
                    <div className="pop-in" ref={popIn}>
                      <div className="movie-title">
                        <h2>{step.label}</h2>
                      </div>
                      <div className="movie-desc">
                        <ul className="movie-desc-item-container">
                          <li className="movie-desc-item">Release:<span>{step.releaseDate}</span></li>
                          <li className="movie-desc-item">Duration:<span>{step.duration}</span>min</li>
                        </ul>
                      </div>
                      <div className="play-button">
                        <button type="button">Watching</button>
                      </div>
                    </div>
                    <Box
                      component="img"
                      sx={{
                        height: 500,
                        display: "block",
                        maxWidth: 1440,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </div>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
        <div style={{padding: '1% 3%', backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginBottom: '5%'}}>
          Like and Share our website to support us.
        </div>
      </Box>
    </div>
  );
}

export default SwipeableTextMobileStepper;
