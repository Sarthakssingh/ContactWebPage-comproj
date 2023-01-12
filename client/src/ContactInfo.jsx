import React from 'react';
import './page.css';
import Message from './Message'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function ContactInfo(props) {
  const navigate =useNavigate();
  const [data,setData] = useState()
  const [text, setText] = useState(false);

  const handlechange = (data) =>{
    setText(true);
    setData(data)
    console.log(data)
  }
  if(text===true){
    return(
    <Message data={data}/>
    )
  }

  return (
    <div className='container contact'>
      <div className='row'>
        <div className='col-12 info text-center'>
          <p className='para'>Contact Details</p>
        <h1>{props.detail.name}</h1>
        <p>{props.detail.email}</p>
        <p>{props.detail.phone}</p>
        <button className='btn btn-warning' onClick={() => handlechange(props.detail)}>SEND OTP</button>
    </div>
    </div>
    </div>
      
  )
}

export default ContactInfo