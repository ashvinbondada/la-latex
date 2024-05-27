import React, { useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import './SolutionCard.css';

function SolutionCard({ problem, solution, index }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="solution-card">
      <button onClick={toggleVisibility} className="dropdown-button">
        {isVisible ? 'Hide' : `Show`} Solution {index}
      </button>
      {isVisible && (
        <MathJaxContext>
          <div className="problem-content">
            <div className="problem-statement">
              <h5>Problem Statement</h5>
              <p>{problem}</p>
            </div>
            <div className="solution-statement">
              <h5>Solution</h5>
              <MathJax inline>{`\\(${solution}\\)`}</MathJax>
            </div>
          </div>
        </MathJaxContext>
      )}
    </div>
  );
}

export default SolutionCard;
