import React, {Component} from "react";
import store from 'storejs';
import {Helmet} from "react-helmet";
import { NavLink, Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import '../shades/scss/projects.scss';
const BASE_URL = process.env.USE_BASE_URL;


class Projects extends React.Component {
        constructor(props){
            super(props);
	    
	this.state={
	    
      projects: [],
      moreProj:{},
      overlayShare: false,
   };
   
   this.displayProjmore = this._displayProjmore.bind(this);
   this.hideShare = this._hideShare.bind(this);
	
	    
  }
  
  _displayProjmore(projects,value){
    const record = projects.find(project => project.id == value);
    this.setState({
    moreProj: record,
    overlayShare: true,
    });
 }
 _hideShare(){
    this.setState({
   overlayShare: false,
    });
 }

projectChoose(projname){
  store.set('donationCause', {projectTitle:projname });
  const {history} = this.props;
  const searchParam = '/checkout/'; 
  history.push(searchParam);
}
 

getData(){  //  set default values
    const events = [
      { id: '234', medialink: `${BASE_URL}supportprojects/images/2.png`, title: 'Richard Curtis delivers keynote speech at the.. ', description: 'Discover why partnerships, urgency and unique opportunities are the driving force behind the achievement of the SDGs.'},
      { id: '233', medialink: `${BASE_URL}supportprojects/images/1.png`, title: 'ichard Curtis delivers keynote speech at the ', description: 'Discover why partnerships, urgency and unique opportunities are the driving force behind the achievement of the SDGs.'},
			{ id: '231', medialink: `${BASE_URL}supportprojects/images/3.png`, title: 'ichard Curtis delivers keynote speech at the ', description: 'Discover why partnerships, urgency and unique opportunities are the driving force behind the achievement of the SDGs.'},
			
      ]
  
  return events;
}

componentDidMount(){

 this.setState({
      projects: this.getData(),
     
 });

}

    render(){

const {overlayShare,moreProj,projects} = this.state;

    return(
<React.Fragment>
<Helmet>
<title>SUPPORT SOCIAL PROJECTS IN AFRICA: Centre for Africa Social Economic and Ecological Development (CAFSED)</title>
<meta name="description" content="Currently, people are planning summits, forums, seminars and conferences to rally support for achieving the SDGs in Africa by 2030. See what’s been going on in Africa below." />
<meta name="keywords" content="Events, Events in Africa, SDG, Africa, SDGs, summit, forums, seminars, conferences, support, Africa, Cafsed event, SDG events " />
                 
</Helmet>

{
  overlayShare &&(
  <div className="overlay">
  
   <div  className="moreOnproj" data-aos="fade-right" data-aos-duration="1000">
      <div onClick={this.hideShare} className="closeButtn"><span className="pe-7s-close-circle"></span></div>
      <h4>{moreProj.title}</h4>
      
      <p>{moreProj.description}</p>
      
     
   </div>
  
  </div>
  )
}

<Header /> 

		 <div className="mobPadding" style={{marginTop:'70px'}}> </div>

<section className="bodyproj">

  <div className="projBracer">
    <div className="pageTitle">
    	<h3>Support a Project you Find Most Compelling</h3>

      
	  </div>
  
  </div>
  
  
  
  <div className="projBracer">
  
  {
	
   projects.map((project,index) => {
	
		
	return(
	
	<div key={index} className='projCard'>
  <div className="topDiv">
	  <img src={project.medialink} />
	</div>
	
	<div className="buttDivv">
	  
	  <h3>{project.title}</h3>
	  <p>{project.description}</p>

		<button onClick={e => this._displayProjmore(projects,project.id)} className="projRedMor">Read More</button>
    <a href="/checkout/">
    <button onClick={e => this.projectChoose(project.title)} className="projdONTE">DONATE</button>
    </a>

	</div>
	
        </div>
	
	) 
     
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



module.exports = Projects;