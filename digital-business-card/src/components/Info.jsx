import React from 'react'
import profilePhoto from '../Images/Profile.jpeg'

export default function Info(){
    return (<div className="info--txt">
                <img className="Image" src={profilePhoto} alt="profile-photo" />
                <h1 className="profile--name">Joel Raj</h1>
                <h3 className="profile--role">Full Stack Developer</h3>
                <h4 className="profile--mail">vjoelraj1823@gmail.com</h4>
                <div className = "buttons">
                    <button className="profile--mail--logo">
                        <i class="fa-solid fa-envelope"></i>
                        Email
                    </button>
                    <button className="profile--linkedin--logo">
                        <i class="fa-brands fa-linkedin-in"></i>
                        LinkedIn
                    </button>
                </div>
           </div>)
};

