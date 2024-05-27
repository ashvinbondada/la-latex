import React from 'react';
import SolutionCard from '../components/SolutionCard';
import solutionsData from '../data/solutions.json';
import './LinearAlgebra.css';

function LinearAlgebra() {
  return (
    <div className="linear-algebra-page">
      <h1>Linear Algebra Solutions</h1>
      <div className="solutions-container">
        {solutionsData.map((chapter, cIndex) => (
          <div key={cIndex}>
            <h2>{chapter.chapter}</h2>
            {chapter.solutions.map((solution, sIndex) => (
              <SolutionCard 
                key={sIndex} 
                problem={solution.problem} 
                solution={solution.solution} 
                index={sIndex + 1} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinearAlgebra;
