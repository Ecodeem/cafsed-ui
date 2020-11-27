import React, {Component} from "react";
import {Helmet} from "react-helmet";
import { NavLink, Link } from 'react-router-dom';
import path from 'path';
import Header from './header';
import Footer from './footer';
import ShowMoreText from 'react-show-more-text';
import '../shades/scss/events.scss';
const BASE_URL = process.env.USE_BASE_URL;


class Events extends React.Component {
        constructor(props){
            super(props);
	    
	this.state={
	    
	    events: [],
	    
	 };
	
	
	    
	}

getData(){  //  set default values
    const events = [
      { eventid: '234', author: 'Pst. Kolade', type: 'article', medialink: `${BASE_URL}event/images/dd.jpg`, date: 'May 9, 2019', title: 'Richard Curtis delivers keynote speech at the High Level Political Forum in New York', teaser: 'Discover why partnerships, urgency and unique opportunities are the driving force behind the achievement of the SDGs.'},
			{ eventid: '235', author: 'Enoch Ekeze', type: 'video', medialink: `${BASE_URL}event/videos/ecodeem_cafsed_sotonye_agritams_video.mp4`, date: 'November 5, 2018', title: 'Talk Session with Sotonye Agritams from WOTCLEF on Tackling Gender Equality', teaser: 'WATCH VIDEO'},
			{ eventid: '236', author: 'Enoch Ekeze', type: 'video', medialink: `${BASE_URL}event/videos/ecodeem_cafsed_nigeria_info_nigeria_and_sdgs_video.mp4`, date: 'October 18, 2018', title: 'Cafsed Program Cord and Lead Advisor in a Studio Sesssion at Nigeria Info Radio Station, Appraising Nigeria Performance in Achieving the SDGs', teaser: 'WATCH VIDEO'},
      { eventid: '237', author: 'Enoch Ekeze', type: 'video', medialink: `${BASE_URL}event/videos/ecodeem_cafsed_wofclef_video.mp4`, date: 'October 6, 2018', title: 'Talk Session by Host, Ecodeem Today with Representative from WOFCLEF on Child Traficking', teaser: 'WATCH VIDEO'},
      { eventid: '237', author: 'Enoch Ekeze', type: 'video', medialink: `${BASE_URL}event/videos/ecodeem_bring_back_our_girls_video.mp4`, date: 'September 14, 2018', title: 'Talk Session by Host, Ecodeem Today with Representative from BRING BACK OUR GIRLS Movement on Gender Equality and Social Justice', teaser: 'WATCH VIDEO'},
      
      ]
  
  return events;
}

componentDidMount(){

 this.setState({
      events: this.getData(),
     
 });

}

    render(){

const {events} = this.state;

    return(
<React.Fragment>
<Helmet>
<title>EVENTS: Centre for Africa Social Economic and Ecological Development (CAFSED)</title>
<meta name="description" content="Currently, people are planning summits, forums, seminars and conferences to rally support for achieving the SDGs in Africa by 2030. See what’s been going on in Africa below." />
<meta name="keywords" content="Events, Events in Africa, SDG, Africa, SDGs, summit, forums, seminars, conferences, support, Africa, Cafsed event, SDG events " />
                 
</Helmet>

     <Header /> 

		 <div className="mobPadding" style={{marginTop:'40px'}}> </div>

<section className="body">

  <div className="eventBracer">
    <div className="pageTitle">
	<h3>Events/Media</h3>
	<p>Every day, people are taking action to make sure the
	17 SDGs are met. See what's been going on below</p>
	<div></div>
    </div>
  
  </div>
  
  
  
  <div className="eventBracer">
  
  {
	
   events.map((event) => {
	
	
	if (event.type == 'article') {
		
	return(
	
	<div className='eventCard'>
        <div className="topDiv">
	  <img src={event.medialink} />
	</div>
	<Link to={`/event/${event.eventid}`}> 
	<div className="buttDivv">
	  <h6>Published on {event.date}</h6>
	  <h4><strong>Author:</strong> {event.author}</h4>
		<ShowMoreText
						lines={3}
						more="."
						less="Show less"
						anchorClass='textColorr'
						isExpanded={false}
						>
	  <h3>{event.title}</h3>
		</ShowMoreText>
	  <div>{event.teaser}</div>
	</div>
	</Link>
        </div>
	
	)
     
	}else{
	
	return(<div className='eventCard'>
        <div className="topDiv">
	  <video  poster='' controls preload="metadata">
	  
	  <source src={event.medialink} alt="" />
           Your browser must support HTML5 video to play this content.
	  </video>
	</div>
	<div className="buttDivv">
	  <h6>Published on {event.date}</h6>
		<h4><strong>Author:</strong> {event.author}</h4>
		<ShowMoreText
						lines={3}
						more="."
						less="Show less"
						anchorClass='textColorr'
						isExpanded={false}
						>
	  <h3>{event.title}</h3>
		</ShowMoreText>
	  <div>{event.teaser}</div>
	</div>
        </div>
	)	
		
	}
	
	
   })
	
  }
     
</div>
  
    
</section>
<p style={{clear:'both'}}></p>
<Footer />
</React.Fragment>

    );
    }
}



module.exports = Events;