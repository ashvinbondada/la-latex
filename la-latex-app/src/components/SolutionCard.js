import React, { useState, useEffect } from 'react';
import './SolutionCard.css';

function SolutionCard({ file, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [problemContent, setProblemContent] = useState('');
  const [solutionContent, setSolutionContent] = useState('');

  useEffect(() => {
    const fetchText = async (file) => {
      try {
        const response = await fetch(file);
        const text = await response.text();
        console.log(text);
        const parts = text.split('---');

        if (parts.length >= 2) {
          setProblemContent(parts[0].trim());
          setSolutionContent(parts[1].trim());
        } else {
          console.error("Text file is not correctly formatted:", file);
        }
      } catch (error) {
        console.error("Error fetching text file:", error);
      }
    };

    fetchText(file);
  }, [file]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="solution-card">
      <button onClick={toggleVisibility} className="dropdown-button">
        {isVisible ? 'Hide' : `Show`} Solution {index}
      </button>
      {isVisible && (
        <div className="problem-content">
          <div className="problem-statement">
            <h5>Problem Statement</h5>
            <p>{problemContent}</p>
          </div>
          <div className="solution-statement">
            <h5>Solution</h5>
            <p>{solutionContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SolutionCard;
