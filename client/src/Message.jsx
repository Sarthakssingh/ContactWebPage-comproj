import React from 'react'
import './page.css'
function Message(props) {
  const sendData=(data)=>{
    console.log(data)
  }
  const otp = Math.floor(Math.random() * 10000000)
  const sentence = `Hi your OTP is : ${otp}`
  return (
    <div className='container message'>
      <div className='row'>
        <h2>Compose Message</h2>
        <p>to : {props.data.phone}</p>
        <div className='d-flex flex-column'>
          <input type="text" value = {sentence} className = "input"/>
          <button className='btn btn-success' onClick={()=>sendData(props.data)}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message;