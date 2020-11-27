import React, {Component} from "react";
import {Helmet} from "react-helmet";
import Header from './header';
import Footer from './footer';
import AOS from 'aos';

import { NavLink, Link } from 'react-router-dom';
import '../shades/scss/sdg.scss';    
import _ from 'underscore';
const BASE_URL = process.env.USE_BASE_URL;

export class Sdgs extends React.Component {
        constructor(props){
						super(props);
						
						this.state={
	    
							goalIcons:[],
							goalDetails:{},
							goalTab: 'facts',
							activeClass:  true,
									
						};
						AOS.init();
						this.aboutcontroller = new AbortController(); 
						this._showFacts = this._showFacts.bind(this);
						this._showTargets = this._showTargets.bind(this);
						
	    
				}
getGoalIcon(){  //  set default values
					const icons = [
						{ imgLink: `${BASE_URL}/goal_icons/goal_1.png`, goalabrrv: 'goal_1', goalfull: 'No Poverty', color:'#ee0b32'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_2.png`, goalabrrv: 'goal_2', goalfull: 'Zero Hunger', color:'#d6a532'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_3.png`, goalabrrv: 'goal_3', goalfull: 'Good Health', color:'#549638'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_4.png`, goalabrrv: 'goal_4', goalfull: 'Quality Education', color:'#b00000'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_5.png`, goalabrrv: 'goal_5', goalfull: 'Gender Equality', color:'#fc3807'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_6.png`, goalabrrv: 'goal_6', goalfull: 'Clean Water & Sanitation', color:'#1eb9d5'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_7.png`, goalabrrv: 'goal_7', goalfull: 'Affordable & Clean Energy', color:'#f8c018'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_8.png`, goalabrrv: 'goal_8', goalfull: 'Decent Work & Economic Growth', color:'#9d004f'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_9.png`, goalabrrv: 'goal_9', goalfull: 'Industry, Innovation & Infrastructure', color:'#ff8040'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_10.png`, goalabrrv: 'goal_10', goalfull: 'Reduced Inequality', color:'#dd006f'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_11.png`, goalabrrv: 'goal_11', goalfull: 'Sustainable Cities & Communities', color:'#f0a43c'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_12.png`, goalabrrv: 'goal_12', goalfull: 'Responsible Consumption & Production', color:'#b58120'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_13.png`, goalabrrv: 'goal_13', goalfull: 'Climate Action', color:'#51a347'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_14.png`, goalabrrv: 'goal_14', goalfull: 'Life Below Water', color:'#00a8f9'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_15.png`, goalabrrv: 'goal_15', goalfull: 'Life on Land', color:'#00df38'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_16.png`, goalabrrv: 'goal_16', goalfull: 'Peace, Justice & Strong Institutions', color:'#00699b'},
						{ imgLink: `${BASE_URL}/goal_icons/goal_17.png`, goalabrrv: 'goal_17', goalfull: 'Partnerships for the Goals', color:'#003d59'},
						]
				
				return icons;
}

_showFacts(){
	this.setState({
		goalTab: 'facts',
		activeClass: true,
	})
				
}

_showTargets(){
	this.setState({
		goalTab: 'targets',
		activeClass: true,
	})
}


fetchgoalDetails(){
	const {params} = this.props.match;

	fetch(process.env.API_URL+'aboutgoal/'+params.id, {signal: this.aboutcontroller.signal})
	.then( (response) => {
if (response.ok) {
		return response.json();
}else{
		
	 throw new Error('No Data Found');
		
}
	})
	.then(
(result) => {
	const returnValue = result.data.reduce((a,b) => Object.assign(a,b), {});
	 this.setState({
	goalDetails: returnValue,
	
});
	 
}
	)
	.catch((error) => {
 this.setState({
	goalDetails: [],
	
	 });

	});

}


componentDidMount(){
	
	this.fetchgoalDetails();
	this.setState({
		goalIcons: this.getGoalIcon(),
			 
	});



}
componentWillUnmount(){
	this.aboutcontroller.abort();
}
        render(){
const {goalTab,goalIcons,activeClass,goalDetails} = this.state;

const preamble = _.unescape(`${goalDetails.preamble}`);
const facts = _.unescape(`${goalDetails.facts}`);
const targets = _.unescape(`${goalDetails.targets}`);

        return(
	
<React.Fragment>
<Helmet>
<title>{`${goalDetails.goalname} - ${goalDetails.shortdesc}`}</title>
<meta name="description" content={goalDetails.shortdesc} />
<meta name="keywords" content="SDG, blueprint, achieve, sustainable future, challenges, poverty, hunger, inequality, environmental degradation, posperity, peace and justice, leave no one behind, issue" />
</Helmet>

<Header />  

<div className="mobPadding" style={{marginTop:'70px'}}> </div>

  
	    <div className="sdgwhiteBoardHead">
			    <section className="sdgbracer">
					{goalDetails.goalno}: {goalDetails.shortdesc} 
					</section>
			</div>

	<div className="sdgwhiteBoard">
	<section className="sdgbracer">
	 <div className="sdgleft">
	   <div className="sdgStrip" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-once>
      <img src={`${BASE_URL}/aboutsdgs/images/strip/${goalDetails.bannerlink}`} />
		 </div>

		 <div className="sdgPreamble">

		   <div dangerouslySetInnerHTML= {{__html: preamble}}/>
		    
		 </div>

		 <ul className="extDocument">
      <li>
				<div>
				<a href={goalDetails.extmatlink} target='_blank'>
		     	<img src={`${BASE_URL}/aboutsdgs/images/doc/${goalDetails.matterlink}`} />
				</a>
			  </div>
				<a href={goalDetails.extmatlink} target='_blank'>
				<h3>Why it maters: {goalDetails.goalname}</h3>
				</a>
			</li>
			<li>
				<div>
				<a href={goalDetails.extinfolink} target='_blank'>
				<img src={`${BASE_URL}/aboutsdgs/images/doc/${goalDetails.infograph}`} />
				</a>
			  </div>
				<a href={goalDetails.extinfolink} target='_blank'>
				<h3>Infographic: {goalDetails.goalname} </h3>
				</a>
			</li>
	   </ul>

		 <div className="sdgDetailTab">

		   <ul className="tabs">
			 <li onClick={this._showFacts}  className={goalTab=='facts' ? "sdgActive" : "sdgInactive"}>
					Facts and Figures
				</li>
				<li onClick={this._showTargets}  className={goalTab=='targets'? "sdgActive" : "sdgInactive"}>
				{goalDetails.goalno} Targets
				</li>
       </ul>

			 <div className="sdgDetailCont">
     {
			 goalTab == 'facts' ?
			 <> 
			 <div data-aos="fade-in" data-aos-duration="1000" data-aos-once dangerouslySetInnerHTML= {{__html: facts}}/>
			 </>: null
		 }
		 {
			 goalTab == 'targets' ? 
			 <>
			    <div data-aos="fade-in" data-aos-duration="1000" data-aos-once dangerouslySetInnerHTML= {{__html: targets}}/>
			 </> : null
		 }
		 </div>

		 </div>

	 </div>

	 
	 
	 <div className="sdgright">

	 <div className="sdgCapp">
      THE 17 GOALS
	 </div>

	 <ul className="sdgCrumbs">
	 {
		 goalIcons.map((goalIcon,index)=>(
			 <a href={`/sdg/${goalIcon.goalabrrv}`}>
       <li key={index}>
			    <img src={goalIcon.imgLink} />
		   </li>
			 </a>
		 ))
	   
		 }
	 </ul>

	 </div>

	 </section>
	 </div>


  
 <Footer />     
	
</React.Fragment>
    );
    }
}

 
module.exports = Sdgs;