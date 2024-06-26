import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';

const InfoBox = ({text, link, btnText}) => (
    <div className = "info-box">
        <p className = "font-medium sm:text-xl text-center">
            {text}
        </p>
        <Link to={link} className = "neo-brutalism-white neo-btn">
            {btnText}
            <img src = {arrow} className = "w-4 h-4 object-contain"/>
        </Link>
    </div>

)



const renderContent = {
    1: (
           
            <section>
                <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 text-white mx-5">
                    Hi. I'm <span className="font-bold">Esequiel👋</span>, but everyone calls me <span className="font-bold">Zeke.</span>
                    <br/>
                    Welcome to my portfolio!
                </h1>
                <h4 className="sm:text-xl text-center text-black font-bold mx-5">
                    <div style={{ marginTop: '50px' }}>
                        DRAG TO EXPLORE ➡️
                    </div>
                </h4>
            </section>
    ),
    2:(
       <InfoBox
        text = "Worked with numerous companies and gained new skills throughout my journey🚗"
        link = "/about"
        btnText = "Learn more"
       
       />
    ),
    3:(
        <InfoBox
            text = "Check out my personal projects. 💻"
            link = "/projects"
            btnText = "Visit now"
       />
    ),
    4:(
        <InfoBox
            text = "I'd love to hear from you! Reach out to discuss!📱"
            
            link = "/contact"
            btnText = "Contact me"
       />
    ),
}



const Homeinfo = ({ currentStage }) => {

  return renderContent[currentStage] || null;

}

export default Homeinfo