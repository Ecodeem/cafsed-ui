import React, {Component} from "react";
import {Helmet} from "react-helmet";
import Header from './header';
import Footer from './footer';

import _ from 'underscore';
import { Link } from 'react-router-dom';
import '../shades/scss/the_team.scss';    
const BASE_URL = process.env.USE_BASE_URL;

export class Teampage extends React.Component {
        constructor(props){
						super(props);
						this.state={
	    
							theTeam:[],
							teamplayer:{},
							isFlipped:false,
							teamPlayerModal: false,
																
						};
						this.aboutcontroller = new AbortController(); 
						this.hideteamPlayer = this.hideteamPlayer.bind(this);
						this.showTeamPlayer = this.showTeamPlayer.bind(this);
	    
		}

	
		hideteamPlayer(){
			this.setState({teamPlayerModal: false});
		}

		showTeamPlayer(value){

			const record = this.state.theTeam.find(team => team.id == value);
			this.setState({teamPlayerModal: true, teamplayer:record});
			
		}

getTeam(){
	
			fetch(process.env.API_URL+'allteams/u', {signal: this.aboutcontroller.signal})
				 .then( (response) => {
			 if (response.ok) {
					 return response.json();
			 }else{
					 
					throw new Error('No Data Found');
					 
			 }
				 })
				 .then(
			 (result) => {
					this.setState({
						theTeam: result.data,
				 
			 });
					
			 }
				 )
				 .catch((error) => {
				this.setState({
					theTeam: [],
				 
					});
			 
				 });  
			 
}

componentDidMount(){
	this.getTeam();
}
componentWillUnmount(){
	this.aboutcontroller.abort();
}
        render(){
const {teamplayer,teamPlayerModal,theTeam}	= this.state;
const description = _.unescape(`${teamplayer.description}`);


        return(

<React.Fragment>
<Helmet>
<title>MEET THE TEAM: Centre for Africa Social Economic and Ecological Development (CAFSED)</title>
<meta name="description" content="Meet the management, executive, operation,technology and products, team at Centre for Africa Social Economic and Ecological Development (CAFSED)." />
<meta name="keywords" content="management team, executive team, operations team,technology and products team, cafsed.org, cafsed,  Centre for Afric, Social, Economic, Ecological, Development" />
</Helmet>

{
teamPlayerModal &&(
<div className="overlay">
<div className="teamWrapper" data-aos="fade-right" data-aos-duration="1000">
<div onClick={this.hideteamPlayer} className="closeButtn"><span className="pe-7s-close-circle" ></span></div>
<div className="wrapTeamate">
  <table>
		<tbody>
			<tr>
				<td style={{width: '90px'}}>
				 <img src={`${BASE_URL}/the_team/${teamplayer.imagelink}`} />
				</td>
				<td>
          {teamplayer.names} <br/>
				<span>	{teamplayer.designation}</span>
				</td>
			</tr>
		</tbody>
	</table>

	<div dangerouslySetInnerHTML= {{__html: description}}/>

</div> 
</div>
</div>
)
}
<Header />  

<div className="mobPadding" style={{marginTop:'70px'}}> </div>


  
	
	    <div className="abtwhiteBoardHead">
			    <section className="abtbracer">
            Meet the Team
					</section>
			</div>

	<div className="abtwhiteBoard">
	<section className="abtbracer">
	<div className="teamHeadinggs">
	  Management & Operations
	</div>

	<ul className="manageTeam">
{
	theTeam.map((theTeams,index) => (

		<li className="flip-cardd">
			
			 <div className="flip-card-inner">
			 <div className="flip-card-front" >
			   <img src={`${BASE_URL}/the_team/${theTeams.imagelink}`} alt={`${theTeams.names}-image`} />
			 </div>
			 
			 
			 <section className="flip-card-back" >
			  <div onClick={() => this.showTeamPlayer(theTeams.id)}>
				 Read About
				 </div>
			 </section>
		   </div>
		
			 <p onClick={() => this.showTeamPlayer(theTeams.id)}>
			 <span style={{fontWeight:'bold'}}>{theTeams.names} </span><br/>
			 {theTeams.designation} 
			 </p>
		 </li>

	))
	   

}



  </ul>
	</section>
	</div>
  
<Footer />      
	
</React.Fragment>
    );
    }
}

 
module.exports = Teampage;