import React, { useState,useEffect } from "react";
import Form from "./Form";
import Search from "./Search";
import List from "./List";
const App = () => {
  const [movieName,setMovieName]= useState([])

  const [list,setList]=useState([])
  const [oldlist,setoldList]=useState([])
  const [search,setSearch]= useState('')
  const tempList=[...list]
  console.log({oldlist});
  console.log(list);

  const filteredList = tempList.filter((item) => item.movieName.includes(search));
  useEffect(() => {
    setList(filteredList);
  }, [search]);
  return (
    <>
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Form
            setMovieName={setMovieName}
            movieName={movieName}
            setList={setList}
            list={list}
            setoldList={setoldList}
          />
        </div>
        <div className="layout-column w-30">
          <Search setSearch={setSearch} search={search}  oldlist={oldlist} setList={setList}/>
          <List list={list} />
          {search && list.length === 0 && (
            <div data-testid="noResult">
              <h3 className="text-center">No Results Found</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
