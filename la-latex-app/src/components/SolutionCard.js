import React, { useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import './SolutionCard.css';

function SolutionCard({ solution, index }) {
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
          <div className="solution-content">
            <MathJax inline>{`\\(${solution}\\)`}</MathJax>
          </div>
        </MathJaxContext>
      )}
    </div>
  );
}

export default SolutionCard;
