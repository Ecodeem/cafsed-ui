import React, {Component} from "react";
import path from 'path';
import '../shades/scss/performance.scss';



class Stateperformance extends React.Component { 
        constructor(props){
            super(props);
	    
	this.state = {
	  states: [],
	}; 
	    
        }

	
componentDidUpdate(prevProps) {
  if (this.props.filtered !== prevProps.filtered) {
    this.setState({
       states: this.props.filtered
    });
  }
  
}

handleColor(value){
let color ='grey';
if(value == 0 ){
	color = 'grey';
}
if(value >= 1 && !(value > 49) ){
	color = 'red';
}
if(value >= 50 && !(value > 64) ){
	color = 'orange';
}
if(value >= 65 && !(value > 74) ){
	color = 'yellow';
}
if(value >= 75 && !(value > 100) ){
	color = 'green';
}	
	return color;	
	
}

        render(){
		
const {states} = this.state;
states.sort((a,b) => b.composite - a.composite);
const {filtered} = this.props;
        return(
         
	<section className="dataCube">
	    <div className="dataCubeTitle">
	       State Performance across SDGs
	    </div>
	    
	    <div className="legendCont">
	      <ul>
	         <li> <div className="legBox Achiever"></div><div>Achievers</div></li>
		 <li> <div className="legBox Topranker"></div><div>Top Rankers</div></li>
		 <li> <div className="legBox Highliner"></div><div>Highliners</div></li>
		 <li> <div className="legBox Beginner"></div><div>Beginners</div></li>
	      </ul>
	    </div>
	    
	    <div className="dataCubeLiner">
	       
	       <table>
	         <thead>
	         <tr>
		 
			<th className="head1 serial"> -</th>
			<th className="head1 statecol">States</th>
			<th className="head1 cc">Composite</th>
			<th className="head1">Goal 1</th>
			<th className="head1">Goal 2</th>
			<th className="head1">Goal 3</th>
			<th className="head1">Goal 4</th>
			<th className="head1">Goal 5</th>
			<th className="head1">Goal 6</th>
			<th className="head1">Goal 7</th>
			<th className="head1">Goal 8</th>
			<th className="head1">Goal 9</th>
			<th className="head1">Goal 10</th>
			<th className="head1">Goal 11</th>
			<th className="head1">Goal 12</th>
			<th className="head1">Goal 13</th>
			<th className="head1">Goal14</th>
			<th className="head1">Goal 15</th>
			<th className="head1">Goal 16</th>
			<th className="head1">Goal 17</th>
		 
		 </tr>
		 
		</thead>
		 <tbody>
	{
	 filtered.map((state,index)=> {
const fillG1 = this.handleColor(state.goal1);
const fillG2 = this.handleColor(state.goal2);
const fillG3 = this.handleColor(state.goal3);
const fillG4 = this.handleColor(state.goal4);
const fillG5 = this.handleColor(state.goal5);
const fillG6 = this.handleColor(state.goal6);
const fillG7 = this.handleColor(state.goal7);
const fillG8 = this.handleColor(state.goal8);
const fillG9 = this.handleColor(state.goal9);
const fillG10 = this.handleColor(state.goal10);
const fillG11 = this.handleColor(state.goal11);
const fillG12 = this.handleColor(state.goal12);
const fillG13 = this.handleColor(state.goal13);
const fillG14 = this.handleColor(state.goal14);
const fillG15 = this.handleColor(state.goal15);
const fillG16 = this.handleColor(state.goal16);
const fillG17 = this.handleColor(state.goal17);
const fillGCompo = this.handleColor(state.composite);

      return(
	
	<tr>
		 
	<th className="bodd serial">{index}</th>
	<td className="bodd statebodcol">{state.state}</td>
	<td className="bodd">
	<div className={fillGCompo}>{state.composite}</div>
	</td>
	<td className="bodd">
	  <div className={fillG1}>{state.goal1}</div>
	</td>
	<td className="bodd">
	  <div className={fillG2}>{state.goal2}</div>
	</td>
	<td className="bodd">
	  <div className={fillG3}>{state.goal3}</div>
	</td>
	<td className="bodd">
	  <div className={fillG4}>{state.goal4}</div>
	</td>
	<td className="bodd">
	  <div className={fillG5}>{state.goal5}</div>
	</td>
	<td className="bodd">
	  <div className={fillG6}>{state.goal6}</div>
	</td>
	<td className="bodd">
	  <div className={fillG7}>{state.goal7}</div>
	</td>
	<td className="bodd">
	  <div className={fillG8}>{state.goal8}</div>
	</td>
	<td className="bodd">
	  <div className={fillG9}>{state.goal9}</div>
	</td>
	<td className="bodd">
	  <div className={fillG10}>{state.goal10}</div>
	</td>
	<td className="bodd">
	  <div className={fillG11}>{state.goal11}</div>
	</td>
	<td className="bodd">
	  <div className={fillG12}>{state.goal12}</div>
	</td>
	<td className="bodd">
	  <div className={fillG13}>{state.goal13}</div>
	</td>
	<td className="bodd">
	  <div className={fillG14}>{state.goal14}</div>
	</td>
	<td className="bodd">
	  <div className={fillG15}>{state.goal15}</div>
	</td>
	<td className="bodd">
	 <div className={fillG16}>{state.goal16}</div>
	</td>
	<td className="bodd">
	  <div className={fillG17}>{state.goal17}</div>
	</td>
	
	</tr>

      )
	
	})	
	
	}
		 
		 
		
		 </tbody>
	       </table>
	       
	    </div>
	    
	</section>
  
    );
    }
    
}

module.exports = Stateperformance;