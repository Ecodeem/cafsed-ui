import React, {Component} from "react";
const path = require('path');
import panAndZoomHoc from 'react-pan-and-zoom-hoc';
require('../shades/scss/report.scss');
const Category = require('./percategory');
const Staterank = require('./staterank');
const Statemap = require('./statemap');
const Subnational = require('./subnational');
const NavLink = require('react-router-dom').NavLink;



class Report extends React.Component { 
        constructor(props){
            super(props);
	    
	 this.state={
	    
	    data: [],
	    regionaldata: [],
	 };
	    
        }


getData(){  //  set default values
    const states = [
      { state: 'Lagos', value: 78, abrv: 'LGS'},
      { state: 'Edo', value: 68, abrv: 'EDO'},
      { state: 'Benue', value: 66, abrv: 'BEU'},
      { state: 'Enugu', value: 64, abrv: 'ENU'},
      { state: 'Akwa Ibom', value: 62, abrv: 'AIB'},
      { state: 'Abuja', value: 60, abrv: 'ABJ'},
      { state: 'Ondo', value: 59, abrv: 'OND'},
      { state: 'Ekiti', value: 58, abrv: 'EKT'},
      { state: 'Oyo', value: 56, abrv: 'OYO'},
      { state: 'Kastina', value: 54, abrv: 'KAT'},
      { state: 'Bauchi', value: 52, abrv: 'BAU'},
      { state: 'Osun', value: 50, abrv: 'OSU'},
      { state: 'Niger', value: 48, abrv: 'NGR'},
      { state: 'Abi', value: 47, abrv: 'ABI'},
      { state: 'Adamawa', value: 46, abrv: 'ADA'},
      { state: 'Anambra', value: 45, abrv: 'ANB'},
      { state: 'Bayelsa', value: 44, abrv: 'BYL'},
      { state: 'Rivers', value: 43, abrv: 'RIV'},
      { state: 'Cross Rivers', value: 42, abrv: 'CRV'},
      { state: 'Delta', value: 41, abrv: 'DEL'},
      { state: 'Ebonyi', value: 40, abrv: 'EBN'},
      { state: 'Gombe', value: 39, abrv: 'GOM'},
      { state: 'Imo', value: 38, abrv: 'IMO'},
      { state: 'Jigawa', value: 37, abrv: 'JIG'},
      { state: 'Kebbi', value: 36, abrv: 'KEB'},
      { state: 'Kogi', value: 35, abrv: 'KOG'},
      { state: 'Kwara', value: 34, abrv: 'KWR'},
      { state: 'Nassarawa', value: 33, abrv: 'NAS'},
      { state: 'Ogun', value: 32, abrv: 'OGN'},
      { state: 'Plateau', value: 31, abrv: 'PLT'},
      { state: 'Sokoto', value: 30, abrv: 'SKT'},
      { state: 'Taraba', value: 29, abrv: 'TRB'},
      { state: 'Yobe', value: 28, abrv: 'YBE'},
      { state: 'Zafara', value: 27, abrv: 'ZFR'},
      { state: 'Borno', value: 26, abrv: 'BRN'},
     
         
    ]
  
  return states;
}

getRegionalData(){  //  set default values
    const regional = [
      { region: 'South West', value: 78, abrv: 'SW'},
      { region: 'North East', value: 68, abrv: 'NE'},
      { region: 'North West', value: 66, abrv: 'NW'},
      { region: 'South East', value: 64, abrv: 'SE'},
      { region: 'South South', value: 62, abrv: 'SS'},
      { region: 'North Central', value: 60, abrv: 'NC'},
      
         
    ]
  
  return regional;
}

componentDidMount(){

 this.setState({
      data: this.getData(),
      regionaldata: this.getRegionalData(),
 });

}

        render(){
const {data,regionaldata} = this.state;
const PannableAndZoomableFigure = panAndZoomHoc(Figure);

        return(
<div>
     <section className="Bracer">
     <div className="TitleContt">Ranking</div>
     </section>
     
     <section className="Bracer">
         
	 <Statemap />
	 <Category filtered={data} />
	 
     </section>
     
     <section className="Bracer">
     
	  <Staterank filtered={data}/>
	  <Subnational filtered={regionaldata}/>
	  
     </section>
</div>
    
    );
    }
    
}

class Figure extends React.Component{
	render(){
		const {x,y, scale, width, height, ...other} = this.props;
		return  <img style={{transform: `scale(${scale}, ${scale}) translate(${(0.5 - x)* width}px, ${(0.5 - y) * height}px`}} width={width} height={height} {...other} />
			
	}
    }

 
module.exports = Report;