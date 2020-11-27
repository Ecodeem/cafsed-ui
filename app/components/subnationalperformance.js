import React, {Component} from "react";
import path from 'path';
import '../shades/scss/performance.scss';



class Subnationalperformance extends React.Component { 
        constructor(props){
            super(props);
	    
	this.state = {
	  regions: [],
	}; 
	    
        }

	
componentDidUpdate(prevProps) {
  if (this.props.filtered !== prevProps.filtered) {
    this.setState({
       regions: this.props.filtered
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
		
const {regions} = this.state;
const {filtered} = this.props;
filtered.sort((a,b) => b.composite - a.composite);

        return(
         
	<section className="dataCubeSubNat">
	    <div className="dataCubeTitle">
	       Sub-National Performance across SDGs
	    </div>
	    
	    <div className="legendCont">
	      <ul>
	         <li> <div className="legBox Achiever"></div><div>Achievers</div></li>
		 <li> <div className="legBox Topranker"></div><div>Top Rankers</div></li>
		 <li> <div className="legBox Highliner"></div><div>Highliners</div></li>
		 <li> <div className="legBox Beginner"></div><div>Beginners</div></li>
	      </ul>
	    </div>
	    
	    <div className="dataCubeLinerSubNat">
	       
	       <table>
	         <thead>
	         <tr>
		 
			<th className="head1 serial"> -</th>
			<th className="head1 statecol">Sub/N</th>
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
	 filtered.map((region,index)=> {
const fillG1 = this.handleColor(region.goal1);
const fillG2 = this.handleColor(region.goal2);
const fillG3 = this.handleColor(region.goal3);
const fillG4 = this.handleColor(region.goal4);
const fillG5 = this.handleColor(region.goal5);
const fillG6 = this.handleColor(region.goal6);
const fillG7 = this.handleColor(region.goal7);
const fillG8 = this.handleColor(region.goal8);
const fillG9 = this.handleColor(region.goal9);
const fillG10 = this.handleColor(region.goal10);
const fillG11 = this.handleColor(region.goal11);
const fillG12 = this.handleColor(region.goal12);
const fillG13 = this.handleColor(region.goal13);
const fillG14 = this.handleColor(region.goal14);
const fillG15 = this.handleColor(region.goal15);
const fillG16 = this.handleColor(region.goal16);
const fillG17 = this.handleColor(region.goal17);
const fillGCompo = this.handleColor(region.composite);

      return(
	
	<tr>
		 
	<th className="bodd serial">{index}</th>
	<td className="bodd statebodcol">{region.region}</td>
	<td className="bodd">
	<div className={fillGCompo}>{region.composite}</div>
	</td>
	<td className="bodd">
	  <div className={fillG1}>{region.goal1}</div>
	</td>
	<td className="bodd">
	  <div className={fillG2}>{region.goal2}</div>
	</td>
	<td className="bodd">
	  <div className={fillG3}>{region.goal3}</div>
	</td>
	<td className="bodd">
	  <div className={fillG4}>{region.goal4}</div>
	</td>
	<td className="bodd">
	  <div className={fillG5}>{region.goal5}</div>
	</td>
	<td className="bodd">
	  <div className={fillG6}>{region.goal6}</div>
	</td>
	<td className="bodd">
	  <div className={fillG7}>{region.goal7}</div>
	</td>
	<td className="bodd">
	  <div className={fillG8}>{region.goal8}</div>
	</td>
	<td className="bodd">
	  <div className={fillG9}>{region.goal9}</div>
	</td>
	<td className="bodd">
	  <div className={fillG10}>{region.goal10}</div>
	</td>
	<td className="bodd">
	  <div className={fillG11}>{region.goal11}</div>
	</td>
	<td className="bodd">
	  <div className={fillG12}>{region.goal12}</div>
	</td>
	<td className="bodd">
	  <div className={fillG13}>{region.goal13}</div>
	</td>
	<td className="bodd">
	  <div className={fillG14}>{region.goal14}</div>
	</td>
	<td className="bodd">
	  <div className={fillG15}>{region.goal15}</div>
	</td>
	<td className="bodd">
	 <div className={fillG16}>{region.goal16}</div>
	</td>
	<td className="bodd">
	  <div className={fillG17}>{region.goal17}</div>
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

module.exports = Subnationalperformance;