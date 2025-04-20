import React, { useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import ErrorBoundary from "./ErrorBoundary";
import FallbackBall from "./FallbackBall";

const Tech = () => {
  const [failedBalls, setFailedBalls] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleBallError = (techName) => {
    setFailedBalls(prev => ({
      ...prev,
      [techName]: true
    }));
  };

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {isMobile ? (
            <div className="w-full h-full flex items-center justify-center bg-tertiary rounded-full p-4">
              <img src={technology.icon} alt={technology.name} className="w-16 h-16 object-contain" />
            </div>
          ) : (
            failedBalls[technology.name] ? (
              <FallbackBall name={technology.name} />
            ) : (
              <ErrorBoundary onError={() => handleBallError(technology.name)}>
                <BallCanvas icon={technology.icon} />
              </ErrorBoundary>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
