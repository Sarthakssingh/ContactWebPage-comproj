import React from 'react'

function Menu_2() {

  const data=[{
    "name": "Grant Berg",
      "email": "grantberg@unq.com",
      "phone": "+1 (837) 554-3706"
  }
  ]
  // if(!(props.datas in data)){
  //   data.push(props.datas)
  // }
  return (
    <div>
        <h2>Message Sent</h2>
        <div>
        <table>
        <tr>
          <th>Person</th>
          <th>Phone</th>
          <th>Email</th>
          </tr>
          {data.map((datas,index) =>(
                    <tr key={index}>
                    <td>{datas.name}</td>
                    <td>{datas.phone}</td>
                    <td>{datas.email}</td>
                    </tr>
                ))}
        </table>
        </div>
    </div>
  )
}

export default Menu_2