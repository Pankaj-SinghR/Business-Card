import React from "react"
import avatar from "../images/avatar.jpg"

export default function Header(){
    return (
        <div className="header">
            <img src={avatar} alt="" className="avatar"/>
            <h1>Pankaj Singh</h1>
            <span>Frontend Developer</span>
            <a href="https://pankajsingh.website" className="portfoliolink">pankajsingh.website</a>
            <div className="buttons">
                <a href="mailto:pankajsingh132000@gmail.com" target="_blank" className="buttons__email" ><i class="fas fa-envelope"></i>Email</a>
                <a href="https://www.linkedin.com/in/pankaj-singh-r/" target="_blank" className="buttons__linkedin"><i class="fab fa-linkedin"></i>LinkedIn</a>
            </div>
        </div>
    )
}