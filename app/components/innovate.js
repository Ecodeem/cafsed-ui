import React, {Component} from "react";
import {Helmet} from "react-helmet";
import path from 'path';
import Header from './header';
import Footer from './footer';
import ShowMoreText from 'react-show-more-text';
import { Link } from 'react-router-dom';
import '../shades/scss/innovate.scss';    
const BASE_URL = process.env.USE_BASE_URL;

export class Innovatepage extends React.Component {
        constructor(props){
						super(props);
						this.state={
	    
							goalIcons:[],
																
						};
	    
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
componentDidMount(){
	this.setState({
		goalIcons: this.getGoalIcon(),
			 
	});
}
        render(){
const {goalIcons}	= this.state;
        return(

<React.Fragment>
<Helmet>
<title>ABOUT AFRICA SDGs: Centre for Africa Social Economic and Ecological Development (CAFSED)</title>
<meta name="description" content="Get involved in the SDGs through our IDI hub. Our vision for SDG-IDI is to create at least 1 million jobs per year through our investor and entrepreneur bridge-gap platform, which was designed with the sole aim of achieving one of our set objectives of increasing the percentage of men and women, particularly youths who are actively engaged in implementation of SDGs within their community and initiating out-of-the-box ideas relevant to achieving the SDGs." />
<meta name="keywords" content="SDG, social, cross-cutting, reliable data, quality data, tool, economic, socioeconomic, development, performance records, Africa, achieve, achieving,cafsed" />
</Helmet>

<Header />  

<div className="mobPadding" style={{marginTop:'70px'}}> </div>

  
	
	<div className="abtwhiteBoardHead">
			<section className="abtbracer">
            SDGs - IDI HUB 
			</section>
	</div>

	<div className="innowhiteBoard">
  <section className="abtbracer">
	 <h6>Get involved in the SDGs through our IDI hub.</h6>
	 <h6>IDI stands for INNOVATION, DEVELOPMENT AND INVESTMENT.</h6>
	 </section>
	<div >
	<section className="abtbracer">
	<ul className="innogoalCubes">
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
	<section className="bvc">
	<ShowMoreText
						lines={3}
						more="Show more"
						less="Show less"
						anchorClass='textColorinn'
						isExpanded={false}
						>
	<p>
	The Sustainable Development Goals (SDGs), adopted by 193 countries in September 2015, outlines a framework for a better global future by 2030. The SDG framework provides a roadmap for businesses to take action on some of the most pressing issues confronting our world in the pursuit of a more prosperous, inclusive and peaceful world. Early estimates suggest that achieving the SDG targets will require annual incremental investments of between $5 to $7 trillion USD. While the scale of this challenge is immense, private sector leaders are already embracing the SDGs. According to KPMG, approximately 2,500+ companies now include the SDGs in their annual sustainability reports. Another study estimates that the SDGs represent a $12 trillion market opportunity that could create 380 million jobs.
	</p>
	<p>
	Our vision for SDG-IDI is to create at least 1 million jobs per year through our investor and entrepreneur bridge-gap platform, which was designed with the sole aim of achieving one of our set objectives of increasing the percentage of men and women, particularly youths who are actively engaged in implementation of SDGs within their community and initiating out-of-the-box ideas relevant to SDGs attainment as well as engaging and attracting potential investors and investments, development partners, non-governmental organizations and enterprise development institutions throughout Africa to promote socio-economic and environmental developmental projects as the case may be.
	</p>
	<p>
	The SDG-IDI is to act as a catalyst for positive change. By turning sustainability into a competitive race to the top, the proposals to innovate new SDGs business solutions, develop existing SDG business initiative and invest in a worthy initiative hopes to increase the rate of SDG adoption, foster the inclusion of youths and women in the SDG implementation.
	</p>
	<p>
	The aim of the SDG-IDI programme is to accelerate Africa’s SMEs’ work with the SDGs, thereby supporting their competitiveness and their future social and environmental contribution to achieving the SDGs. This is done by accepting proposals towards developing new and innovative business models, products or services in several start-up or existing organizations across Africa.
	</p>
	<p>
	We are in the process of starting up several Development and Innovation Hub in partnership with several government offices and leaders for the benefit of African youths. We manage this innovation hubs for several programme towards SDG focused initiatives while we seek and tie grants, investments and funding to worthwhile initiatives.
	</p>
	<p>
	The basis of the programme is after due diligence and selection to subject each idea to a tailor-made specified period for incubation, where companies test and review the programme, and as part of this process develop products, services or business models that address the SDGs and at the same time contribute to growth and new business. It is crucial that the solutions have both commercial potential as well as positive impact on the SDGs.
	</p>
	</ShowMoreText>
	<h4>SUBMIT A PROPOSAL</h4>
	<p>
	We know that starting a company is tough, hard and lonely, and founders have to make difficult decisions daily with limited information but with our SDG-IDI mechanism, we bridge the gap.
	</p>
	<p>
	Do you have an idea, a business or social impact driven initiative that requires support, please send to our email <span>(cafsedorg@gmail.com)</span> and we shall get back to you as soon as possible on the way forward.
	</p>
	<h4>Please note the following:</h4>
	<p>
	The Project Proposal document should be maximum 20 pages long, in MS Word or PDF format (.doc or .docx or .pdf).
	</p>
	<p>
	Proposals exceeding the data limit of 20MB or the page limit, or submitted in other file formats than those provided above, may be disqualified.
	</p>
	<p>
	Please ensure the information in the Project Proposal is in line with the information provided below. Ensure the Project Proposal is addressing a specific SDG goal, factual and realistic. Document your claims and proposals where possible and provide supporting data, using diagrams, charts and graphics where appropriate.
	</p>

	<ol>
		<li>Project description, ownership and management team</li>
		<li>Market analysis (commercial rationale)</li>
		<li>Technology, business model and growth strategy</li>
		<li>Financial overview and investment proposal</li>
		<li>Identification and mitigation of risks</li>
		<li>Social, environmental and gender impact</li>
		<li>Conclusion</li>
	</ol>

	<h4>Our Assessment Criteria</h4>
	
	<ul>
		<li>Investment Opportunity and Project Structure</li>
		<li>Market Analysis (Commercial Rationale)&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp; 10%</li>
		<li>Management Team & Organization&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp; 20%</li>
		<li>Technology, Operations & Implementation Plan&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp; 10%</li>
		<li>Financials and Investment Structure&nbsp &nbsp; - &nbsp;&nbsp;&nbsp; 10%</li>
		<li>Identification and Mitigation of Risks	&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp; 10%</li>
		<li>Environmental & Social Benefits&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp; 10%</li>
		<li>Professionalism and Presentation of the Proposal&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp; 5%</li>
		<li>Maturity of the Project&nbsp; - &nbsp;&nbsp;&nbsp; 5%</li>
	</ul>
</section>
	</section>

	</div>
  
	</div>

<Footer />     
	
</React.Fragment>
    );
    }
}

 
module.exports = Innovatepage;