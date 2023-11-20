import React from 'react'

function Search({setSearch,search,oldlist,setList}) {
  const inputHandler=(e)=>{
    setSearch(e.target.value)
    if(e.target.value===''){
      setList([...oldlist])
    }
  }
  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
        value={search}
        name='search'
        onChange={inputHandler}
      />
    </section>
  )
}

export default Search
