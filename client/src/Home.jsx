import React from 'react';
import './Home.css';
import { useState } from 'react';
import ContactInfo from './ContactInfo';
import data from './data.json';
import { useNavigate } from 'react-router-dom';
import Menu_2 from './Menu_2';

function Home() {
    const navigate = useNavigate();

    const [searchInput,setSearchInput] = useState("");
    const [show,setShow] = useState(false);
    const [datas,setDetail] = useState()

    
    const showDetails = (datas) => {
        setShow(true)
        setDetail(datas)
        //navigate('/ContactInfo')
    }
    if(show===true){
        return(
            <ContactInfo detail = {datas}/>
        )

    }
  return (
    <div className='container home'>
        <div className='row'>
            <h1 className='heading'>Contact Page</h1>
        <form className="form-inline mb-2 mt-1">
                <div className="form-group row">
                <div className="col-md-3">
                    <input type="text" name="name" className="form-control" id="nameInput" placeholder="Name" />
                </div>
                <div className="col-md-3">
                    <input type="text" name="phone" className="form-control" id="phoneInput" placeholder="Phone" />
                </div>
                <div className="col-md-3">
                    <input type="email" name="email" className="form-control" id="emailInput" placeholder="Email" />
                </div>
                    <button type="submit" className="btn btn-info">Add</button>
                </div>
            </form>
            <div className='col-6'>
                <p className='para col-12'>List of contacts.</p>
                <div className='col-4 col-md-6 mb-2'>
                <input type="text"
                className="form-control"
                placeholder='Search Here'
                onChange={handleChage => setSearchInput(handleChage.target.value)}
                value={searchInput}
                />
                </div>
                <div className=''>
                <table>
                <tr>
                <th>Person</th>
                <th>Phone</th>
                <th>Email</th> 
                </tr>
                {
                    data.filter(data => {
                        if(searchInput===""){
                            return data;
                        }
                        else if (data.name.toLowerCase().includes(searchInput.toLowerCase())){
                            return data;
                        }
                        
                    }).map((datas,index) =>(
                    <tr key={index}>
                    <td>{datas.name}</td>
                    <td><button className='phone' onClick={()=>showDetails(datas)}>{datas.phone}</button></td>
                    <td>{datas.email}</td>
                    </tr>
                ))}
                </table>
                </div>
            </div>
        <div className='col-4'>
            <Menu_2 data={datas}/>
        </div>
        </div>
    </div>
  )
}

export default Home;