import React, {Component} from "react";
import {Helmet} from "react-helmet";
import _ from 'underscore';
import Header from './header';
import Indicators from './indicators';
import Chartoptions from './Chartoptions';
import '../shades/scss/playground.scss';
const BASE_URL = process.env.USE_BASE_URL;

class Playground extends React.Component {
        constructor(props){
            super(props);
	    this.state={
	    
	    data: [],
	    countries: [],
	    states: [],
	    indicator: {},
	    hideyear: 'true',
	    isLoaded: false,
	    country:'Nigeria',
	    noData:false,
	    shortIndicator:'',
	    };
	    
	    this. aboutcontroller = new AbortController();
	    this._queryCountry = this._queryCountry.bind(this);
	    this.__fetchCountryRecord = this._fetchCountryRecord.bind(this);	   
        }


getData(){  //  set default values
    const bars = [
      { year: '2015', value: 120, label: '2015', country: 'Nigeria'},
      { year: '2016', value: 150, label: '2016', country: 'Nigeria' },
      { year: '2017', value: 75, label: '2017', country: 'Nigeria' },
       { year: '2019', value: 62, label: '2019', country: 'Nigeria' },
      { year: '2018', value: 60, label: '2018', country: 'Nigeria' },
      
     
    ]
  
  return bars;
}

_fetchCountries(){

fetch(process.env.API_URL+'allcountries/u', {signal: this.aboutcontroller.signal})
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
		countries: result.data,
	});
	   
	}
    )
    .catch((error) => {
	 this.setState({
	        countries: [],
		
	   });
	
    });
   
}

_fetchStates(country){

fetch(process.env.API_URL+'states/'+country, {signal: this.aboutcontroller.signal})
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
		states: result.data,
	});
	   
	}
    )
    .catch((error) => {
	 this.setState({
	        states: [],
		
	   });
	
    });
   
}

_fetchIndicator(indicator){

fetch(process.env.API_URL+'oneindicator/'+indicator, {signal: this.aboutcontroller.signal})
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
		indicator: returnValue,
	});
	   
	}
    )
    .catch((error) => {
	 this.setState({
	        indicator: [],
		
	   });
	
    });
   
}

_fetchCountryRecord(country){

const indicator = this.props.match.params.id;

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
		data: result.data,
		shortIndicator: indicator,
		noData:false,
	   });
	   
	}
    )
    .catch((error) => {
	 this.setState({
	        data: [],
		noData:true
	   });
	
    });
}


_queryCountry(e) {

const country = e.target.value;
this._fetchCountryRecord(country);
this._fetchStates(country);
  
}

componentDidMount(){

const indicator = this.props.match.params.id;
const {country} = this.state;

this._fetchIndicator(indicator);
this._fetchCountryRecord(country);
this._fetchCountries();
this._fetchStates(country);

this.setState({
      shortIndicator: indicator,
      isLoaded:true,
});

}

componentWillUnmount(){
    this.aboutcontroller.abort()
}

        render(){
const {indicator,countries,data,isLoaded,states,country,noData,shortIndicator} = this.state;
data.sort((a,b) => a.year - b.year);
const sortedStates = _.sortBy(states,'state');
const bearer = _.pluck(data, 'bearer');
const bearers = _.uniq(bearer,true);


        return(

<React.Fragment>
<Helmet>
<title>VISUALIZE SDGs DATA IN AFRICA: Visualize SDGs data in Charts</title>
<meta name="description" content="Visualize SDGs data in charts on the 17 goals, 169 targets, and 232 indicators in all 54 African countries." />
<meta name="keywords" content="SDG, SDGs, Visualize, SDGs Data, 54 Countries in Africa, 169 targets, indicators,line chart, bar chart, polar chart" />
</Helmet>  

{
isLoaded == false && ( <div className="spinnerLoad"></div>)
}
     <Header /> 

	 <div className="mobPadding" style={{marginTop:'40px'}}> </div> 

	<div className="indexPad" onClick={this._toggleHideYear}>
	
	<Indicators indicatortitle={`${indicator.indicator}`}/>
	
          <div>
	    <div className="locationBoxCont">
	      <img src={`${BASE_URL}shades/images/jloc.png`} />
	       <select className="locationBox" id="" onChange={this._queryCountry} defaultValue={country}>
		<option value="Nigeria">Nigeria</option>
	{
	countries.map((country,index) => (
	
	 <option key={index} value={country.value}>{country.value}</option>	   
	
	))	
		
	}
		</select>
	    </div>
	 </div>
 <div style={{position:'relative',width:'100%'}}>

{  noData ?
     <div className="noData">
        NO DATA
     </div> :''
}   
        <Chartoptions filtered={data} states={sortedStates} indicator={shortIndicator} country={country}/> 
	<div className="source">Source(s): {`${bearers}`} </div>
 

</div>
</div>
</React.Fragment>
    );
    }
}

 
module.exports = Playground;