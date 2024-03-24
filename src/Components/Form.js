import React from 'react'
import {useState} from 'react'

const Form = () => {
  const[Name,setName]=useState("")             // data binding or forms in react
  const[email,setemail]=useState("")
  const[number,setnumber]=useState("")
  const[myCar,setmycar]=useState("")
  function handleform(e) {
      e.preventDefault()
      console.log(Name,email,number);
  }
  function handleChange(e) {
    setmycar(e.target.value)
  }
  return (
    <div>
<form onSubmit={(e)=>{handleform(e)}}>
        <label>Emp name</label>
        <input type='text'value={Name} onChange={(e)=>{setName(e.target.value)}} />
        
        <label>Emp email</label>
        <input type='email'value={email} onChange={(e)=>{setemail(e.target.value)}} />

        <label>Emp salary</label>
        <input type='number'value={number} onChange={(e)=>{setnumber(e.target.value)}} />

        <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      
        {/* <input type='submit'/> */}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default Form
