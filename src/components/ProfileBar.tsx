import React from 'react'

import ProfileImg from '../../public/img/profile.jpg'

export default function ProfileBar(){
    return(
        <section id='profilebar'>
            <div className="profileSpace">
                <img src={ProfileImg} alt="Profile Image" />
            </div>
            <div className='profileAbout'>
                <h1>Burak Yabgu</h1>
                <p>Hey it's Burak Yabgu. 23 years old Jr. Web Developer 👩🏼‍💻 I write articles sometimes ✍🏻</p>
            </div>
        </section>
    )
}