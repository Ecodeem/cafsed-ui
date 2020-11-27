import React, {Component} from "react";
import {Helmet} from "react-helmet";
import path from 'path';
import Header from './header';
import '../shades/scss/report.scss';
import '../shades/scss/performance.scss';
import Category from './percategory';
import Staterank from './staterank';
import Statemap from './statemap';
import Subnational from './subnational';
import Stateperformance from './stateperformance';
import Subnationalperformance from './subnationalperformance';
import Methodology from './methodology';
import Picky from 'react-picky';
import 'react-picky/dist/picky.css'; 
import { NavLink, Link } from 'react-router-dom';


class Report extends React.Component { 
        constructor(props){
            super(props);
	    
	 this.state={
	    
	    data: [],
	    getCountryData: [],
	    regionaldata: [],
	    isLoaded: false,
	    countryValue: 'Nigeria',
	    noData:false,
	    reportTab:'Ranking',
	    
	 };
	 this. aboutcontroller = new AbortController();
	 this.selectMultipleOption = this.selectMultipleOption.bind(this);
	 this.showReportTab = this.showReportTab.bind(this);
	   
        }


getData(){  //  set default values
    const states = [
      { state: 'Lagos', value: 76, abrv: 'LGS',region: 'South West',composite: 76, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Edo', value: 76, abrv: 'EDO', region: 'South West',composite: 76, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Benue', value: 66, abrv: 'BEU', region: 'South West',composite: 73, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Enugu', value: 69, abrv: 'ENU', region: 'South West',composite: 69, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Akwa Ibom', value: 65, abrv: 'AIB', region: 'South West',composite: 65, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Abuja', value: 64, abrv: 'ABJ', region: 'South West',composite: 64, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Ondo', value: 65, abrv: 'OND', region: 'South West',composite: 65, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Ekiti', value: 64, abrv: 'EKT', region: 'North East',composite: 64, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Oyo', value: 63, abrv: 'OYO', region: 'North East',composite: 63, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Katsina', value: 60, abrv: 'KAT', region: 'North East',composite: 60, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Bauchi', value: 59, abrv: 'BAU', region: 'North East',composite: 59, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Osun', value: 55, abrv: 'OSU', region: 'North East',composite: 55, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Niger', value: 56, abrv: 'NGR', region: 'North East',composite: 56, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Abia', value: 54, abrv: 'ABI', region: 'North West',composite: 54, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Adamawa', value: 51, abrv: 'ADA', region: 'North West',composite: 51, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Anambra', value: 49, abrv: 'ANB', region: 'North West',composite: 49, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Bayelsa', value: 44, abrv: 'BYL', region: 'North West',composite: 44, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Rivers', value: 44, abrv: 'RIV', region: 'North West',composite: 44, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Cross River', value: 44, abrv: 'CRV', region: 'North West',composite: 44, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Delta', value: 43, abrv: 'DEL', region: 'South East',composite: 43, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Ebonyi', value: 41, abrv: 'EBN', region: 'South East',composite: 41, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Gombe', value: 44, abrv: 'GOM', region: 'South East',composite: 44, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Imo', value: 40, abrv: 'IMO', region: 'South East',composite: 40, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Jigawa', value: 37, abrv: 'JIG', region: 'South East',composite: 37, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Kebbi', value: 37, abrv: 'KEB', region: 'South South',composite: 37, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Kogi', value: 36, abrv: 'KOG', region: 'South South',composite: 36, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Kwara', value: 35, abrv: 'KWR', region: 'South South',composite: 35, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Nassarawa', value: 33, abrv: 'NAS', region: 'South South',composite: 33, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Ogun', value: 32, abrv: 'OGN', region: 'South South',composite: 32, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Plateau', value: 31, abrv: 'PLT', region: 'South South',composite: 31, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Sokoto', value: 30, abrv: 'SKT', region: 'North Central',composite: 30, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Taraba', value: 29, abrv: 'TRB', region: 'North Central',composite: 29, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Yobe', value: 30, abrv: 'YBE', region: 'North Central',composite: 30, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Zamfara', value: 27, abrv: 'ZFR', region: 'North Central',composite: 27, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Borno', value: 26, abrv: 'BRN', region: 'North Central',composite: 26, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Kaduna', value: 26, abrv: 'KAD', region: 'North Central',composite: 26, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
      { state: 'Kano', value: 26, abrv: 'KAN', region: 'North Central',composite: 26, goal1: 78, goal2: 64, goal3: 62, goal4: 60, goal5: 75, goal6: 53, goal7: 62, goal8: 37, goal9: 50, goal10: 83, goal11: 47, goal12: 71, goal13: 59, goal14: 69, goal15: 66, goal16: 61, goal17: 43},
     
         
    ]
  
  return states;
}


getRegionalData(){  //  set default values
    const regional = [
      { region: 'South West', value: 0, abrv: 'SW',composite: 0, goal1: 0, goal2: 0, goal3: 0, goal4: 0, goal5: 0, goal6: 0, goal7: 0, goal8: 0, goal9: 0, goal10: 0, goal11: 0, goal12: 0, goal13: 0, goal14: 0, goal15: 0, goal16: 0, goal17: 0},
      { region: 'North East', value: 0, abrv: 'SW',composite: 0, goal1: 0, goal2: 0, goal3: 0, goal4: 0, goal5: 0, goal6: 0, goal7: 0, goal8: 0, goal9: 0, goal10: 0, goal11: 0, goal12: 0, goal13: 0, goal14: 0, goal15: 0, goal16: 0, goal17: 0},
      { region: 'North West', value: 0, abrv: 'SW',composite: 0, goal1: 0, goal2: 0, goal3: 0, goal4: 0, goal5: 0, goal6: 0, goal7: 0, goal8: 0, goal9: 0, goal10: 0, goal11: 0, goal12: 0, goal13: 0, goal14: 0, goal15: 0, goal16: 0, goal17: 0},
      { region: 'South East', value: 0, abrv: 'SW',composite: 0, goal1: 0, goal2: 0, goal3: 0, goal4: 0, goal5: 0, goal6: 0, goal7: 0, goal8: 0, goal9: 0, goal10: 0, goal11: 0, goal12: 0, goal13: 0, goal14: 0, goal15: 0, goal16: 0, goal17: 0},
      { region: 'South South', value: 0, abrv: 'SW',composite: 0, goal1: 0, goal2: 0, goal3: 0, goal4: 0, goal5: 0, goal6: 0, goal7: 0, goal8: 0, goal9: 0, goal10: 0, goal11: 0, goal12: 0, goal13: 0, goal14: 0, goal15: 0, goal16: 0, goal17: 0},
      { region: 'North Central', value: 0, abrv: 'SW',composite: 0, goal1: 0, goal2: 0, goal3: 0, goal4: 0, goal5: 0, goal6: 0, goal7: 0, goal8: 0, goal9: 0, goal10: 0, goal11: 0, goal12: 0, goal13: 0, goal14: 0, goal15: 0, goal16: 0, goal17: 0},
      
         
    ]
  
  return regional;
}

showReportTab(value){
  this.setState({
     reportTab: value,
  });
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
		getCountryData: result.data,
	});
	   
	}
    )
    .catch((error) => {
	 this.setState({
	        getCountryData: [],
		
	   });
	
    });
   
}

_fetchReportData($country){

const apidata={
  country: $country
};

// submit data to api
$.ajax({

        type : "POST",
        url:  process.env.API_URL+"report/u", 
        data : JSON.stringify(apidata),
	beforeSend: (data) => {
	 this.setState({isLoaded:false}); 
        },
	success : (response)=> {
	console.log(response.message);
	this.setState({
		noData: false,
		isLoaded:true,
		data: response.data,
		}); 
        },
	error : (err)=> {
	this.setState({noData: true,isLoaded:true}); 
        }
});
   
}


componentDidMount(){
const {countryValue} = this.state;
this._fetchCountries();
this._fetchReportData(countryValue);

 this.setState({
     
      regionaldata: this.getRegionalData(),
      isLoaded:true,
      noData: false,
 });
}

componentWillUnmount(){
    this.aboutcontroller.abort()
}


selectMultipleOption(value) {
    
    this.setState({
	countryValue: value,
    });
    
const bb = value;
console.log(bb.value);
const apidata={
  country: bb.value
};

// submit data to api
$.ajax({

        type : "POST",
        url:  process.env.API_URL+"report/u", 
        data : JSON.stringify(apidata),
	beforeSend: (data) => {
	 this.setState({isLoaded:false}); 
        },
	success : (response)=> {
	
	this.setState({
		noData: false,
		isLoaded:true,
		data: response.data,
		}); 
        },
	error : (err)=> {
	this.setState({noData: true,isLoaded:true}); 
        }
});

}

        render(){
const {reportTab,data,regionaldata,isLoaded,getCountryData,noData} = this.state;

        return(

<React.Fragment>
<Helmet>
<title>SDGs DATA REPORT IN AFRICA: Report on Country Level SDGs in Africa</title>
<meta name="description" content="View report in standard dashboard on the SDGs at country level in Africa. The tracking tool uses rank charts and traffic lights representations to better present countries performance in achieving the SDGs in 2030, thus helping governments to better plan and prioritize towards a better future." />
<meta name="keywords" content="SDG, SDGs, tracking, Cafsed data, Cafsed, tracking tool, traffic lights chart, performance, achieve, prioritize, visualize, SDGs Data, report, 169 targets, indicators, line chart, bar chart, polar, SDG for a better future, SDG Goals chart, global goals " />
</Helmet>  

{
isLoaded == false && ( <div className="spinnerLoad"></div>)
}
     <Header />
     
     <div className="mobPadding" style={{marginTop:'40px'}}> </div>
     
     <section className="Bracerr">
     
     <div className="selecTContry">
<Picky
  className='cuspicky'
  options={getCountryData}
  value={this.state.countryValue}
  onChange={this.selectMultipleOption}
  valueKey="value"
  labelKey="label"
  includeFilter={true}
  
/>
     </div>
     <div className="emptyDat" >
{  noData && (
     <div className="noDataRep">
        NO DATA
     </div>
     )
}
</div>
    </section>
{ noData == false && (
<>
     <section className="Bracerr">
     <section className="TitleMcon">
     
     <div className="TitleContt" onClick={() => (this.showReportTab('Ranking'))} >Ranking</div>
     <div className="TitleContt" onClick={() => (this.showReportTab('Performance'))} style={{backgroundColor:"#d6d6d6"}}>Performance</div>
     
     </section>
     </section>
     
     <section className="Bracerr">
        
     {  reportTab == 'Ranking' ?
        <> 
	 <Statemap filtered={data}/>
	 <Category filtered={data} />
         <Staterank filtered={data}/>
	 <Subnational filtered={regionaldata}/> </> : ''
	
     }
     {  reportTab == 'Performance' ?
        <>
	  <Stateperformance filtered={data}/>
	  <Subnationalperformance filtered={regionaldata}/> </> :''
	
     }  
     </section>
     
     <Methodology />
</>
     )
}

     </React.Fragment>


    
    );
    }
    
}

module.exports = Report;