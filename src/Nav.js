import React, { useState,useEffect} from "react";
import "./Nav.css";

function Nav(){
    // const [show,handleShow]=useState(false);
    // useEffect(()=>{
    //     window.addEventListener("scroll",()=>{
    //         if(window.scrollY>100){
    //             handleShow(true);
    //         }else handleShow(false);
    //     });
    //     return()=>{
    //         win
            
            
    //         dow.removeEventListener("scroll");
    //     };
    // }, []);

    return(
        <div className="nav">
            <img
            className="nav_logo"
            src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=614&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2" alt="NETFLIX_LOGO"

            />

        </div>
    )
}

export default Nav;