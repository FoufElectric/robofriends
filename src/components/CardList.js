import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

// if(true) {
//   throw new Error("NOOOOO!");
// }

// This was originally a lot more clear, but I followed the
// professor's way of cleaning up the code, now it looks
// clean, but hell to understand
  return (
    <div>
    {
    robots.map((user, i) => {
      return (
        <Card
          key={i}
          id={user.id}
          name={user.name}
          email={user.email} />
        );
      })
    }
    </div>
  );
}

export default CardList;
