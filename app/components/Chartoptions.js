import React, {Component} from "react";
import path from 'path';
import '../shades/scss/chartoptions.scss';
import Barchart from './Barchart';
import Linechart from './Linechart';
import Polarchart from './Polarchart';
import Picky from 'react-picky';
import 'react-picky/dist/picky.css'; 
import { NavLink, Link } from 'react-router-dom';
const BASE_URL = process.env.USE_BASE_URL;

class Chartoptions extends React.Component {
        constructor(props){
            super(props);
	    
	   this.state={
	    
	    
	    states:[],
	    filtered: [],
	     value: null,
             arrayValue: [],
	     chart: 'Line',
	     noStateData:false,
	     sstate:'all',
	    
	    
	    };
	    this. aboutcontroller = new AbortController();
	    this.selectMultipleOption = this.selectMultipleOption.bind(this);
	    this._showBar = this._showBar.bind(this);
	    this._showLine = this._showLine.bind(this);
	    this._showPolar = this._showPolar.bind(this);
	    this.getStateValue = this._getStateValue.bind(this);
	    
        }

_showBar(){
   this.setState({chart: 'Bar'});
}
_showLine(){
   this.setState({chart: 'Line'});
}
_showPolar(){
   this.setState({chart: 'Polar'});
}

_fetchContrRecord(){

const indicator = this.props.indicator;
const country = this.props.country;
fetch(process.env.API_URL+'visualize/'+country+'/'+indicator, {signal: this.aboutcontroller.signal})
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
		filtered: result.data,
		arrayValue: result.data,
		noStateData:false,
	   });
	   
	}
    )
    .catch((error) => {
	 this.setState({
		noStateData:true
	   });
	
    });
}


_fetchStateRecord(state){

const indicator = this.props.indicator;
fetch(process.env.API_URL+'visualizestate/'+state+'/'+indicator, {signal: this.aboutcontroller.signal})
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
		filtered: result.data,
		arrayValue: result.data,
		noStateData:false,
	   });
	   
	}
    )
    .catch((error) => {
	 this.setState({
		noStateData:true
	   });
	
    });
}

_getStateValue(e){
 const state = e.target.value;
 state == 'all' ? this._fetchContrRecord() : this._fetchStateRecord(state);
 this.setState({sstate:state});	
 
 
}

selectMultipleOption(value) {
    console.log("Val", value);
    this.setState({
	arrayValue: value,
        filtered: value,
   });

//const filteredResults = this.state.data.filter(result =>!value.includes(result)	);
}


componentDidUpdate(prevProps) {
  if (this.props.filtered !== prevProps.filtered) {
    this.setState({
       filtered: this.props.filtered,
       arrayValue: this.props.filtered,
       noStateData:false,
    });
  }
  
  
}

        render(){
const {sstate,filtered,states,noStateData} = this.state;
filtered.sort((a,b) => a.year - b.year);

	return(
<div>
<div className="chartMenu">
<div  className="chartMarginn">
<ul className="dataOptions" >
	     <li>

<Picky
  options={this.props.filtered}
  value={this.state.arrayValue}
  onChange={this.selectMultipleOption}
  valueKey="year"
  labelKey="label"
  multiple={true}
  numberDisplayed={1}
  manySelectedPlaceholder={'Years (%s)'}
  allSelectedPlaceholder={'Years (%s)'}
  placeholder={'Years'}
  
/>

	     </li>
	    
	</ul>
	
	<ul className="ChartMenuPicker">
	   <li>
	     <img onClick={this._showLine} src={`${BASE_URL}shades/images/line.png`} />
	   </li>
	   <li>
	     <img onClick={this._showBar} src={`${BASE_URL}shades/images/bar.png`} />
	   </li>
	   <li>
	     <img onClick={this._showPolar} src={`${BASE_URL}shades/images/polar.png`} />
	   </li>
	</ul>
	
	<ul className="ChartTools">
	
	   <li className="stateForm">
	   
	     <select className="stateinput" onChange={this.getStateValue} value={sstate}>
	     <option value='all'>All States</option>	
	{
	  this.props.states.map((state,index)=>(
		
		<option key={index} value={state.state}>{state.label}</option>	  
		
		))
	       
	      
	}
	     </select>
	   </li>
	   
	   
	</ul>
</div>
</div>
<div className="chartWrap">
{  noStateData && (
     <div className="noData">
        NO DATA
     </div>
     )
}
{ noStateData == false && (

<>	
	{this.state.chart ==='Line' ?
	<Linechart filtered={filtered} /> : ''
	}
	{this.state.chart ==='Bar' ?
	<Barchart filtered={filtered} /> : ''
	}
	{this.state.chart ==='Polar' ?
	<Polarchart filtered={filtered} /> : ''
	}
</>	

)}
</div>
</div>
    );
    }
    
}

 
module.exports = Chartoptions;