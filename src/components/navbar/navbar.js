import React, { useState } from 'react';
import './navbar.css';
import { serviceObj } from '../../services/service';
function NavBar()
{
    const[name,setName]=useState("");
    serviceObj.getDetails().then((data)=>
    {
        // console.log(data.data)
        setName(data.data[0].name);
    })
    return(
        <>
            <nav class="nav">
                <div className='center mt-3'>
                    <img src='images/pic1.jpg' className='nav-pic'></img>
                    <div className='mt-2 name'>
                        <span>{name}</span>
                    </div>
                    <div className='social-media mt-3'>
                        <i class="fa-brands fa-twitter fa-fade"></i>
                        <i class="fa-brands fa-instagram fa-fade"></i>
                        <i class="fa-brands fa-linkedin-in fa-fade"></i>
                        <i class="fa-solid fa-f fa-fade"></i>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar;