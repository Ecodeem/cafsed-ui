import React, {Component} from "react";
const BASE_URL = process.env.USE_BASE_URL;

class FeedBack extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
     
        
     return(
        <div className="feedBack">
        <a href="https://wa.me/2348130210333?text=Hello,%20I%20have%20a%20feed%20back%20for%20CAFSED." target="_blank">
        <img src={`${BASE_URL}shades/images/feedbackIcon.png`} alt="whatsapp_feedback" title="Chat Desk Now"/>
        </a>
        </div>
    );

    }
}

module.exports = FeedBack;
