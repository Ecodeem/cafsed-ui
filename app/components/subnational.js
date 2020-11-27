import React, {Component} from "react";
import path from 'path';
import '../shades/scss/report.scss';


class Subnational extends React.Component {
        constructor(props){
            super(props);
	
	this.state = {
	  filtered: [],
	  display: 'none',
	};
	
	this.showState = this._showState.bind(this);
	this.hideState = this._hideState.bind(this);
	    
        }

_showState(value){
   this.setState({display: value});
}
_hideState(){
   this.setState({display: 'none'});
}
	
componentDidUpdate(prevProps) {
  if (this.props.filtered !== prevProps.filtered) {
    this.setState({
       filtered: this.props.filtered
    });
  }
  
}


        render(){

const {display} = this.state;
const {filtered} = this.props;
filtered.sort((a,b) => b.value - a.value);

        return(
<section className="dataCubeRegional">
	    <div className="dataCubeTitle">
	       Sub-National
	    </div>
	    
	    <div className="LayerCon">
	    
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
	display == row.region && (
	<div className="toolTip" style={{left: barLength}}>
	  <div>{row.region}</div>
	  <div>{row.value}</div>
	</div>
	)}
	       
	        <div className="regionalAbrev">
		   {row.abrv}
		</div>
		
		<div className="regSupercon">
		    <div className="regbonCon">
		       <div onPointerOver={e => this.showState(row.region)} onPointerOut={this.hideState} className={`ribbon ${fillClass}`} style={{width: barLength}}></div>
		       <div className="shwp">{row.value}</div>
		    </div>
		    
		</div>
	      </div>) }
	    
          )
	  
	}
	    
	    </div>
	    
	    <div className="LayerCon" style={{marginTop:'-50px'}}>
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

 
module.exports = Subnational;