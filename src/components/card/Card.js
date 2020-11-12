import React from 'react';

function Card({ item }) {
  return(
    <li className="card">
      <div class="card-image-wrapper relative">
        <img src={item.image} alt="" className="w-full object-cover rounded card-image h-full"/>
      </div>
      <div className="flex py-2 justify-between">
        <span>{item.author}</span>
        <ul className="flex flex-end">
          <li className="flex items-center mr-1 text-gray-700">
            <button className="hover:text-pink-600 outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 current-color">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </button>
            <span className="text-xs">{item.numberVotes}</span>
          </li>
          <li className="flex items-center text-gray-700">
            <button className="hover:text-pink-600 outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 ">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <span className="text-xs">{item.favourites}</span>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default Card;