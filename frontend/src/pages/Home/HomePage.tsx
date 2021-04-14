import TrendingAtricles from 'components/TrendingAtricles';
import React from 'react';
import AtriclebyCategory from './AtriclebyCategory';

function HomePage(props:any): React.ReactElement {

  return <div>
    <div className="flex flex-col bg-gray-100 rounded-md border border-gray-300 px-5 py-2 mb-5">
      <h1>TRENDING NOW:</h1>
      <p>Zhang social media pop also known when smart innocent...</p>
    </div>
    <TrendingAtricles />
    <AtriclebyCategory />
  </div>;
}

export default HomePage;
