import React from "react"
import avatar from "../images/avatar.png"

export default function Header(){
    return (
        <div className="header">
            <img src={avatar} alt="" className="avatar"/>
            <h1>Laura Smith</h1>
            <span>Frontend Developer</span>
            <a href="https://laurasmith.website">laurasmith.website</a>
            <div className="buttons">
                <button className="buttons__email"><i class="fas fa-envelope"></i>Email</button>
                <button className="buttons__linkedin"><i class="fab fa-linkedin"></i>LinkedIn</button>
            </div>
        </div>
    )
}