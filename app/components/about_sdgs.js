import React, {Component} from "react";
import {Helmet} from "react-helmet";
import Header from './header';
import Footer from './footer';

import { NavLink, Link } from 'react-router-dom';
import '../shades/scss/about_sdgs.scss';    
const BASE_URL = process.env.USE_BASE_URL;

export class Aboutsdgs extends React.Component {
        constructor(props){
						super(props);
						this.state={
	    
							goalCards:[],
																
						};
	    
	  }
getGoals(){  //  set default values
			const icons = [
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_1.jpg`, goal:'Goal 1', goalid: 'goal_1', goalfull: 'No Poverty', desc:'Economic growth must be inclusive to provide sustainable jobs and promote equality.', color:'#ee0b32'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_2.png`, goal:'Goal 2', goalid: 'goal_2', goalfull: 'Zero Hunger', desc:'The food and agriculture sector offers key solutions for development, and is central for hunger and poverty eradication.', color:'#d6a532'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_3.png`, goal:'Goal 3', goalid: 'goal_3', goalfull: 'Good Health and Well-Being', desc:'Ensuring healthy lives and promoting the well-being for all at all ages is essential to sustainable development.', color:'#549638'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_4.png`, goal:'Goal 4', goalid:'goal_4', goalfull: 'Quality Education', desc:'Obtaining a quality education is the foundation to improving people’s lives and sustainable development.', color:'#b00000'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_5.png`, goal:'Goal 5', goalid: 'goal_5', goalfull: 'Gender Equality',desc:'Gender equality is not only a fundamental human right, but a necessary foundation for a peaceful, prosperous and sustainable world.', color:'#fc3807'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_6.png`, goal:'Goal 6', goalid: 'goal_6', goalfull: 'Clean Water & Sanitation', desc:'Clean, accessible water for all is an essential part of the world we want to live in.', color:'#1eb9d5'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_7.png`, goal:'Goal 7', goalid: 'goal_7', goalfull: 'Affordable & Clean Energy', desc:'Energy is central to nearly every major challenge and opportunity.', color:'#f8c018'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_8.png`, goal:'Goal 8', goalid: 'goal_8', goalfull: 'Decent Work & Economic Growth', desc:'Sustainable economic growth will require societies to create the conditions that allow people to have quality jobs.', color:'#9d004f'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_9.png`, goal:'Goal 9', goalid: 'goal_9', goalfull: 'Industry, Innovation & Infrastructure', desc:'Investments in infrastructure are crucial to achieving sustainable development.', color:'#ff8040'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_10.png`, goal:'Goal 10', goalid: 'goal_10', goalfull: 'Reduced Inequalities', desc:'To reduce inequalities, policies should be universal in principle, paying attention to the needs of disadvantaged and marginalized populations.', color:'#dd006f'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_11.png`, goal:'Goal 11', goalid: 'goal_11', goalfull: 'Sustainable Cities & Communities', desc:'There needs to be a future in which cities provide opportunities for all, with access to basic services, energy, housing, transportation and more.', color:'#f0a43c'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_12.png`, goal:'Goal 12', goalid: 'goal_12', goalfull: 'Responsible Consumption & Production', desc:'Responsible Production and Consumption', color:'#b58120'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_13.png`, goal:'Goal 13', goalid: 'goal_13', goalfull: 'Climate Action', desc:'Climate change is a global challenge that affects everyone, everywhere.', color:'#51a347'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_14.png`, goal:'Goal 14', goalid: 'goal_14', goalfull: 'Life Below Water', desc:'Careful management of this essential global resource is a key feature of a sustainable future.', color:'#00a8f9'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_15.png`, goal:'Goal 15', goalid: 'goal_15', goalfull: 'Life on Land', desc:'Sustainably manage forests, combat desertification, halt and reverse land degradation, halt biodiversity loss', color:'#00df38'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_16.png`, goal:'Goal 16', goalid: 'goal_16', goalfull: 'Peace, Justice & Strong Institutions', desc:'Access to justice for all, and building effective, accountable institutions at all levels.', color:'#00699b'},
				{ imgLink: `${BASE_URL}/aboutsdgs/images/goal_17.png`, goal:'Goal 17', goalid: 'goal_17', goalfull: 'Partnerships', desc:'Revitalize the global partnership for sustainable development.', color:'#003d59'},
				]
		
		return icons;
}
componentDidMount(){
	this.setState({
		goalCards: this.getGoals(),
	});
}
        render(){
const {goalCards}	= this.state;
        return(

<React.Fragment>
<Helmet>
<title>ABOUT THE SDGs: Centre for Africa Socio Economic and Ecological Development (CAFSED)</title>
<meta name="description" content="The Sustainable Development Goals are the blueprint to achieve a better and more sustainable future for all. They address the global challenges we face, including those related to poverty, inequality, climate, environmental degradation, prosperity, and peace and justice. The Goals interconnect and in order to leave no one behind, it is important that we achieve each Goal and target by 2030. Click on any specific Goal below to learn more about each issue." />
<meta name="keywords" content="SDG, blueprint, achieve, sustainable future, challenges, poverty, hunger, inequality, environmental degradation, prosperity, peace and justice, no poverty, zero hunger, Good Health and Well-being, Quality Education, Gender Equality, Clean Water & Sanitation, Affordable and Clean Energy, Decent Work and Economic growth, Industry Innovation & Infrastructure, Reduced Inequalities, Sustainable Cities and Communities, Responsible Consumption & Production, Climate Action, Life Below Water, Life on Land, Peace and Justice Strong Institutions, Partnerships for the Goals." />
</Helmet>

<Header />  

<div className="mobPadding" style={{marginTop:'70px'}}> </div>

  
	
	    <div className="abtwhiteBoardHead">
			    <section className="abtbracer">
            About the Sustainable Development Goals 
					</section>
			</div>

	<div className="sdggwhiteBoard">

	 <div className="abtpreAmble">
	 <section className="abtbracer">
	 The Sustainable Development Goals are the blueprint to achieve a better and more sustainable future for all. They address the global challenges we face, including those related to poverty, inequality, climate, environmental degradation, prosperity, and peace and justice. The Goals interconnect and in order to leave no one behind, it ís important that we achieve each Goal and target by 2030. Click on any specific Goal below to learn more about each issue.
	 </section>
	 </div>

	 <div className="abtGoalsWrapper">
	 <section className="abtbracer">
    {
			goalCards.map((goalCard,index) => (

		<div key={index} className="flip-card">
		  <div className="flip-card-inner">
			 <div className="flip-card-front" >
			   <div className="frontImgbt">
			   <img src={goalCard.imgLink} />
				 </div>
				 <div className="frontTitlebt">{goalCard.goal}: {goalCard.goalfull}</div>
			 </div>
			 <div className="flip-card-back" style={{backgroundColor: `${goalCard.color}`}}>

			   <section className="backContnt">
				 <h3>{goalCard.goal}: {goalCard.goalfull}</h3>
				 <h4>{goalCard.desc}</h4>
				 <Link to={`/sdg/${goalCard.goalid}`}>
				 <div>READ MORE ABOUT {goalCard.goal}</div>
				 </Link>
			   </section>
			 
			 </div>
			 </div>
		 </div>

			))
     
}
	</section>
	 </div>

	</div>
  
<Footer />   
	
</React.Fragment>
    );
    }
}

 
module.exports = Aboutsdgs;