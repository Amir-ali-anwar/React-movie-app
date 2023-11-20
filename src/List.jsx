import React from "react";

const List = ({ list }) => {
  
  return (
    <section>
      <ul className="styled w-100 pl-0" data-testid="moviesList">
        {list?.map((item, index) => (
          <li key={index}>{item.movieName}</li>
        ))}
      </ul>
    </section>
  );
};

export default List;
