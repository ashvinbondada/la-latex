import React from 'react';
import SolutionCard from '../components/SolutionCard';
import solutionsData from '../data/solutions.json';
import './LinearAlgebra.css';

function LinearAlgebra() {
  return (
    <div className="linear-algebra-page">
      <h1>Linear Algebra Solutions</h1>
      <div className="solutions-container">
        {solutionsData.map((solution, index) => (
          <SolutionCard key={index} solution={solution.solution} index={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default LinearAlgebra;
