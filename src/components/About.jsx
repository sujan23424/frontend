import React from 'react'
import {useEffect, useState} from 'react';


const About = () => {
  const [name, setName] = useState("")
  return (
    <div>
      <h1>{name}</h1>
      <input type='text' onChange={(event)=>{
        setName(event.target.value);
      }} />
    </div>
  )
}

export default About