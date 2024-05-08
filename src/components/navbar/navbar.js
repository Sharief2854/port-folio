import React, { useState } from 'react';
import './navbar.css';
import { serviceObj } from '../../services/service';
function NavBar()
{
    const[name,setName]=useState("");
    serviceObj.getDetails().then((data)=>
    {
        // console.log(data.data)
        setName(data.data[0].name)
    })
    return(
        <>
            <nav class="navbar  navbar-expand-lg fixed-top">
                <div class="container">
                    <span>
                        Developer 
                        <span className='name'> {name}</span>
                    </span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars text-white"></i>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                                Developer 
                                <span class Name='name'> {name}</span>
                            </h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="link" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="link" href="#">About Me</a>
                                </li>
                                <li class="nav-item">
                                    <a class="link" href="#">Skills</a>
                                </li>
                            </ul>  
                            <ul class="navbar-nav justify-content-end flex-grow-1 ">
                                <li class="nav-item ">
                                    <a className='link' id='red-color' href="#">Contact Me</a>
                                </li>
                            </ul>
                        </div>
                
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar;