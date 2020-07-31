import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <div className='text-centre'>
        <Link to='/photo'>
          <button href='' className='photo-link'>
            Check All Photos
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
