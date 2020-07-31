import React from "react";
import { Link } from "react-router-dom";

function Photo() {
  return (
    <div className='photos'>
      <Link to='/'>
        <a href='' className='create-link'>
          <svg
            id='left-arrow'
            width='1em'
            height='1em'
            viewBox='0 0 16 16'
            className='bi bi-arrow-left-short'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z'
            />
            <path
              fill-rule='evenodd'
              d='M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z'
            />
          </svg>
        </a>
      </Link>
      <div className='container'>
        <div className='img1'></div>
        <div className='img2'></div>
        <div className='img3'></div>
        <div className='img4'></div>
        <div className='img5'></div>
        <div className='img6'></div>
      </div>
    </div>
  );
}

export default Photo;
