import React, {Component} from "react";
import path from 'path';
import '../shades/scss/report.scss';


class Staterank extends React.Component {
        constructor(props){
            super(props);
	    
	this.state = {
	  filtered: [],
	  display: 'none',
	};
	
	this.showState = this._showState.bind(this);
	this.hideState = this._hideState.bind(this);
	this.handleColor = this.handleColor.bind(this);
		      
        }

_showState(value){
   this.setState({display: value});
}
_hideState(){
   this.setState({display: 'none'});
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
	color = '#fa8c1f';
}
if(value >= 65 && !(value > 74) ){
	color = '#ffff06';
}
if(value >= 75 && !(value > 100) ){
	color = '#008000';
}	
	return color;	
	
}

 
componentDidUpdate(prevProps) {
  if (this.props.filtered !== prevProps.filtered) {
    this.setState({
       filtered: this.props.filtered
    });
  }
  
}


        render(){
const totalScore = [];		
const {display} = this.state;
const {filtered} = this.props;
filtered.sort((a,b) => b.value - a.value);
filtered.map((row,index)=> {
totalScore.push(row.value);
	})
const TotalScore = totalScore.reduce((memo, num) => memo + num,0)/totalScore.length;
const nationalBench = Math.round(TotalScore);
const styleLine = this.handleColor(nationalBench);


        return(
<section className="dataCubeRank">
	    <div className="dataCubeTitle">
	       <div className="RankTit">State Rank</div>
	       
	       <div className="RankLegend">
		<div>
		  National Bench Mark
		</div>
		<div>
		  <div className="shrtDiv" style={{borderTop: `2px dotted ${styleLine}`}}></div>
		</div>
		
		<div className="shrtScr">{nationalBench}</div>
		</div>
		
		
		
	       
	    </div>
	    
	    <div className="LayerCon">
	    
	    <div className="divider" style={{borderRight: `2px dotted ${styleLine}`, marginLeft: `${nationalBench}%`}}></div>
	      
	      
	{
	filtered.map((row,index)=> {
let fillClass ='';
if(row.value <= 49 && !(row.value > 49) ){
	fillClass = 'redd';
}
if(row.value >= 50 && !(row.value > 64) ){
	fillClass = 'orangee';
}
if(row.value >= 65 && !(row.value > 74) ){
	fillClass = 'yelloww';
}
if(row.value >= 75 && !(row.value > 100) ){
	fillClass = 'greenn';
}


const barLength = (row.value * 100) / 100 + '%' ;

 return(
<div key={index} className={row.abrv} >
        {
	display == row.state && (
	<div className="toolTip" style={{left: barLength}}>
	  <div>{row.state}</div>
	  <div>{row.value}</div>
	</div>
	)}
	<div className="stateAbrev">
	 {row.abrv}
	</div>
		
	<div className="ribSupercon">
	  <div className="ribbonCon">
	       <div onPointerOver={e => this.showState(row.state)} onPointerOut={this.hideState} className={`ribbon ${fillClass}`} style={{width: barLength}}></div>
	       <div className="shwp">{row.value}</div>
	  </div>
		    
	</div>
</div>) }
	    
          )
	}
	   
	    </div>
	    
	    
	    
	    <div className="LayerCon" style={{marginTop:'-15px'}}>
	        <div className="stateAbrev">
		   &nbsp;&nbsp;
		</div>
		<div className="ribSupercon">
		    <ul className="scaler">
		      <li>20</li>
		      <li>40</li>
		      <li>60</li>
		      <li>80</li>
		      
		      <li style={{paddingRight:0}}>100</li>
		    </ul>
		</div>
	     </div>
	    
	    
	    
	   </section>
    
    );
    }
}
 
module.exports = Staterank;