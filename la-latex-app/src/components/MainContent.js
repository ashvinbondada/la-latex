import React from 'react';
import SolutionCard from './SolutionCard';
import './MainContent.css';

const solutions = [
  "a^2 + b^2 = c^2",
  "\\frac{d}{dx}e^x = e^x"
];

function MainContent() {
  return (
    <main className="main-content">
      <h1 className="title">Solutions</h1>
      <div className="solutions-container">
        {solutions.map((solution, index) => (
          <SolutionCard key={index} solution={solution} index={index + 1} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;
