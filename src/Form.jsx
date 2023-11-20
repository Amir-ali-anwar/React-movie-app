import React from "react";

const Form = ({setMovieName,movieName,setList,list,setoldList}) => {
  const submitHandler=(e)=>{
    e.preventDefault()
    if(!movieName){
      alert("Please enter movie name")
      return 
    }
    setList([...list,{movieName}])
    setoldList([...list,{movieName}])
   setMovieName('')
  }
  const inputHandler=(e)=>{
    const value= e.target.value
    
  setMovieName(value)
  }
  return (
    <section>
    <div className='card pa-30'>
      <form  onSubmit={submitHandler}>
        <div className='layout-column mb-15'>
          <label htmlFor='name' className='mb-3'>Movie Name</label>
          <input
            type='text'
            id='name'
            name='movie'
            placeholder='Enter Movie Name'
            data-testid='nameInput'
            onChange={inputHandler}
            value={movieName}
          />
        </div>
        <div className='layout-row justify-content-end'>
          <button
            type='submit'
            className='mx-0'
            data-testid='addButton'
          >
            Add Movie
          </button>
        </div>
      </form>
    </div>
  </section>
  );
};

export default Form;
