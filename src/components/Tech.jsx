import React, { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import ErrorBoundary from "./ErrorBoundary";
import FallbackBall from "./FallbackBall";

const Tech = () => {
  const [failedBalls, setFailedBalls] = useState({});

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
          {failedBalls[technology.name] ? (
            <FallbackBall name={technology.name} />
          ) : (
            <ErrorBoundary onError={() => handleBallError(technology.name)}>
              <BallCanvas icon={technology.icon} />
            </ErrorBoundary>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
