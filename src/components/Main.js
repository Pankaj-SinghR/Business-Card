import React from "react";

export default function Main(){
    return (
        <div className="main">
            <div className="about">
                <h1 className="about__h1">About</h1>
                <div className="about__para">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
            </div>   
            <div className="interest">
                <h1 className="interest__h1">Interests</h1>
                <div className="interest__para">
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic
                </div>
            </div> 
        </div>
    )
}