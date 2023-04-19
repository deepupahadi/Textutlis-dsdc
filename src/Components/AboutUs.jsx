import React, { useState } from "react";

export default function AboutUs() {
    const[style,setstyle] = useState({
        color:"black",
        backgroundColor:"white"
    })

    const hadlestyle = () => {
        if(style.color==="white"){
            setstyle({color:"black",backgroundColor:"white"})
        }
        else{
            setstyle({color:"white",backgroundColor:"black"})
        }  
    }


    return (
        <div>
            <div class="card mb=3" style={style}>
                <div class="card-body">
                    <h5 class="card-title">About Us</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p class="card-text"><small class="text muted">Last updated 2 min ago</small></p>

                    <button class="btn btn-primary" onClick={hadlestyle}>Enable Dark Mode</button>
                </div>
            </div>
        </div>
        
        
    )
}