import React from 'react';
import Card from '../card/Card';
import data from '../data/data';

function Cards() {
  return(
    <ul className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-10 px-3 md:px-6 container m-auto">
      { data && data.map(item => {
        return <Card item={ item } key={item.author}/>
      })}
    </ul>
  )
};

export default Cards;