import React, {Component} from "react";
import {Helmet} from "react-helmet";
import store from 'storejs';
import { NavLink, Link } from 'react-router-dom';
import path from 'path';
import Header from './header';
import Footer from './footer';
import '../shades/scss/support.scss';
import '../shades/css/mapofafricawithnames.css';
const BASE_URL = process.env.USE_BASE_URL;


class Support extends React.Component { 
        constructor(props){
            super(props);
	    
	this.state={
	    
	    goalIcons:[],
	    goalTargets:[],
	    isLoaded: false,
	    countryLists: false,
	    goalLists: false,
      indicatorModal: false,
      successModal: false,
	    countries:[],
	    indicator: false,
      displayy: 'none',
      donorType: 'Individual',
	    
	    indicatorvalue:'',
	    fundamount:'',
	 };
	this.aboutcontroller = new AbortController(); 
	this.showCountiesToDonor = this.showCountiesToDonor.bind(this);
	this.showGoalsToDonor = this.showGoalsToDonor.bind(this);
	this.hideCountiesFromDonor = this.hideCountiesFromDonor.bind(this);
	this.hideGoalsFromDonor = this.hideGoalsFromDonor.bind(this);
  this.hideIndicatorModalFromDonor = this.hideIndicatorModalFromDonor.bind(this);
  this.hideSuccessModalFromDonor = this.hideSuccessModalFromDonor.bind(this);
	this.showIndicatorsToDonor = this.showIndicatorsToDonor.bind(this);
	this.showIndicatorToDonor = this.showIndicatorToDonor.bind(this);
	this.goToCheckout = this.goToCheckout.bind(this);
	this.handleIndicatorChange = this.handleIndicatorChange.bind(this);
	this.showCountry = this._showCountry.bind(this);
  this.hideCountry = this._hideCountry.bind(this);
  this.handleDonorTypeChange = this.handleDonorTypeChange.bind(this);
  
	
	    
	}


getGoalIcon(){  //  set default values
    const icons = [
      { imgLink: `${BASE_URL}/goal_icons/goal_1.png`, goalabrrv: 'goal_1', goalfull: 'No Poverty', color:'#ee0b32'},
      { imgLink: `${BASE_URL}/goal_icons/goal_2.png`, goalabrrv: 'goal_2', goalfull: 'Zero Hunger', color:'#d6a532'},
      { imgLink: `${BASE_URL}/goal_icons/goal_3.png`, goalabrrv: 'goal_3', goalfull: 'Good Health', color:'#549638'},
      { imgLink: `${BASE_URL}/goal_icons/goal_4.png`, goalabrrv: 'goal_4', goalfull: 'Quality Education', color:'#b00000'},
      { imgLink: `${BASE_URL}/goal_icons/goal_5.png`, goalabrrv: 'goal_5', goalfull: 'Gender Equality', color:'#fc3807'},
      { imgLink: `${BASE_URL}/goal_icons/goal_6.png`, goalabrrv: 'goal_6', goalfull: 'Clean Water & Sanitation', color:'#1eb9d5'},
      { imgLink: `${BASE_URL}/goal_icons/goal_7.png`, goalabrrv: 'goal_7', goalfull: 'Affordable & Clean Energy', color:'#f8c018'},
      { imgLink: `${BASE_URL}/goal_icons/goal_8.png`, goalabrrv: 'goal_8', goalfull: 'Decent Work & Economic Growth', color:'#9d004f'},
      { imgLink: `${BASE_URL}/goal_icons/goal_9.png`, goalabrrv: 'goal_9', goalfull: 'Industry, Innovation & Infrastructure', color:'#ff8040'},
      { imgLink: `${BASE_URL}/goal_icons/goal_10.png`, goalabrrv: 'goal_10', goalfull: 'Reduced Inequality', color:'#dd006f'},
      { imgLink: `${BASE_URL}/goal_icons/goal_11.png`, goalabrrv: 'goal_11', goalfull: 'Sustainable Cities & Communities', color:'#f0a43c'},
      { imgLink: `${BASE_URL}/goal_icons/goal_12.png`, goalabrrv: 'goal_12', goalfull: 'Responsible Consumption & Production', color:'#b58120'},
      { imgLink: `${BASE_URL}/goal_icons/goal_13.png`, goalabrrv: 'goal_13', goalfull: 'Climate Action', color:'#51a347'},
      { imgLink: `${BASE_URL}/goal_icons/goal_14.png`, goalabrrv: 'goal_14', goalfull: 'Life Below Water', color:'#00a8f9'},
      { imgLink: `${BASE_URL}/goal_icons/goal_15.png`, goalabrrv: 'goal_15', goalfull: 'Life on Land', color:'#00df38'},
      { imgLink: `${BASE_URL}/goal_icons/goal_16.png`, goalabrrv: 'goal_16', goalfull: 'Peace, Justice & Strong Institutions', color:'#00699b'},
      { imgLink: `${BASE_URL}/goal_icons/goal_17.png`, goalabrrv: 'goal_17', goalfull: 'Partnerships for the Goals', color:'#003d59'},
      ]
  
  return icons;
}

getIndicators(goalvalue){
	
 fetch(process.env.API_URL+'allgoaltargets/'+goalvalue, {signal: this.aboutcontroller.signal})
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
		goalTargets: result.data,
		
	});
	   
	}
    )
    .catch((error) => {
	 this.setState({
    goalTargets: [],
		
	   });
	
    });  
	
}

_showCountry(value){
   this.setState({displayy: value});
}
_hideCountry(){
   this.setState({displayy: 'none'});
}

hideCountiesFromDonor(){
  this.setState({countryLists: false});
}

hideGoalsFromDonor(){
  this.setState({goalLists: false});
}

hideIndicatorModalFromDonor(){
  this.setState({indicatorModal: false});
}
hideSuccessModalFromDonor(){
  this.setState({successModal: false});
}

showCountiesToDonor(shortname,fullname,color){
  store.set('donorGoal', {choiceGoalAbrrv:shortname, choiceGoalFull:fullname, Color:color});
  this.setState({countryLists: true});
}

showIndicatorToDonor(shortname,fullname,color){
  store.set('donorGoal', {choiceGoalAbrrv:shortname, choiceGoalFull:fullname, Color:color});
  this.setState({indicatorModal: true,goalLists: false});
  this.getIndicators(shortname);
}

showGoalsToDonor(value){
  store.set('donorCountry', { choiceCountry:value });
  this.setState({goalLists: true});
}

showIndicatorsToDonor(value){
  store.set('donorCountry', { choiceCountry:value });
  this.setState({indicatorModal: true,countryLists: false});
  const goalshort = store.get('donorGoal').choiceGoalAbrrv;
  this.getIndicators(goalshort);
  
}
handleDonorTypeChange(value){
  store.set('donorType', {donoRType:value});
  this.setState({donorType:value});
}
handleIndicatorChange(event){
    const {target} = event;
    const value = target.value;
    this.setState({indicatorvalue:value});
}
goToCheckout(){
  let {indicatorvalue} =this.state;
  let country =''; let goalfull='';let donoType ='';
  store.has('donorType')==true ? 
  donoType = store.get('donorType').donoRType : null ;
  store.has('donorCountry')==true ? 
  country = store.get('donorCountry').choiceCountry : null;
  
  const indicatorvalu = indicatorvalue.slice(4);

  const donTitle = indicatorvalu + ' in ' + country + ' as ' + donoType;

 store.set('donationCause', {projectTitle:donTitle });
  const {history} = this.props;
  const searchParam = '/checkout/'; 
  history.push(searchParam);
}

componentDidMount(){

  store.set('donorType', {donoRType:this.state.donorType});
 this.setState({
      goalIcons: this.getGoalIcon(),
      isLoaded:true,
 });
 
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
componentWillUnmount(){
    this.aboutcontroller.abort();
}

    render(){

const {fundamount,indicatorvalue,successModal,donorType,goalTargets,goalLists,displayy,indicatorModal,goalIcons,isLoaded,countryLists,countries} = this.state;
let country =''; let goalshort ='';let goalfull='';let color='';let donoType ='';

store.has('donorType')==true ? 
donoType = store.get('donorType').donoRType : null;
store.has('donorCountry')==true ? 
country = store.get('donorCountry').choiceCountry : null;


if (store.has('donorGoal')==true) {
 goalshort = store.get('donorGoal').choiceGoalAbrrv;
 goalfull= store.get('donorGoal').choiceGoalFull;
 color= store.get('donorGoal').Color;
}
    return(
	
<React.Fragment >
<Helmet>
<title>SUPPORT : Support Our Work in Africa (CAFSED)</title>
<meta name="description" content="To achieve the SDGs in Africa by 2030, we must take collective action financially. Everyone, homeland or diaspora, can contribute to making sure the SDGs are met. A single act of kindness, if multiply by hundreds can change the world. Find an SDG target to fund in any country in Africa below." />
<meta name="keywords" content="fund, Africa, SDG, Africa SDGs,contribute, action, collective, achieve, support,cafsed " />
                 
</Helmet>

{
isLoaded == false && ( <div className="spinnerLoad"></div>)
}
<Header />
<div className="mobPadding" style={{marginTop:'60px'}}> </div>


{
indicatorModal &&(
<div className="overlay">
  <div className="ListIndicators" data-aos="fade-right" data-aos-duration="1000">
  <div onClick={this.hideIndicatorModalFromDonor} className="closeButtn"><span className="pe-7s-close-circle" style={{color:'#fff'}}></span></div>
  <div className="indicaHead" style={{backgroundColor:`${color}`}}> 
    <div className="wrapGoalIcon">
      <img src={`${BASE_URL}/goal_icons/${goalshort}.png`} />
    </div>
    <div className="wrapGoalTitle">
    <h3>{`${goalfull}`} </h3>
    <p>Pick a Target to fund in {`${country}`} </p>
    
    </div>
  </div>
  
  <form id="fundForm" className="targetFormWr" >
   <div className="takeinIndicators">
  
   {
    goalTargets.map((goalTarget,index) => (
	       
	<label>
       <input onChange={this.handleIndicatorChange} type="radio" name="indicatorvalue" value={goalTarget.target}/>
       <div>{goalTarget.target}</div>
       
  </label>       
	
	))
 
   }     

    </div>     

     
   <div className="lowerDivv">
       <button onClick={this.goToCheckout}> Continue</button>
   </div>
  
  
   </form> 
 
  </div>
</div>

)
}

{
countryLists &&(
<div className="overlay">
<div className="ListCountry" data-aos="fade-right" data-aos-duration="1000">
<div onClick={this.hideCountiesFromDonor} className="closeButtn"><span className="pe-7s-close-circle"></span></div>
 <div className="ModallTitle">Pick a Country to Fund {`${goalfull}`} in  as {`${donoType}`}</div>
  <div className="wrapContry">
    
    { countries.map((country,index) => (
	<div className="countryBox">
      <div onClick={()=>(this.showIndicatorsToDonor(country.value))} key={index}>{country.value}</div>
	</div>
      ))
    }
    
 </div>
</div>
</div>
)
}

{
goalLists &&(
<div className="overlay">
<div className="ListCountry" data-aos="fade-right" data-aos-duration="1000">
<div onClick={this.hideGoalsFromDonor} className="closeButtn"><span className="pe-7s-close-circle"></span></div>
 <div className="ModallTitle">Pick a Goal to Fund in {`${country}`} as {`${donoType}`}</div>
 <div className="wrapgoalIcons">
    <div className="innerWrapSup">
    { goalIcons.map((goal,index) => (
	<div className="goalIconBox">
      <div onClick={()=>(this.showIndicatorToDonor(goal.goalabrrv,goal.goalfull,goal.color))} key={index}><img src={goal.imgLink} /></div>
	</div>
      ))
    }
    
    </div>    
 </div>
</div>
</div>
)
}
<section className="body">


	<div className="supportBracer">
		<section className="donationStats">
		<div><span>Amount Spent:</span> $0 </div>
		<div><span>Amount Raised:</span> $0 &nbsp;</div>
		<div><span>Amount Needed:</span> $1TR &nbsp;</div>
		 
		 
		</section>
	</div>
	

  <div className="supportBracer">
    <div className="supportPreamb">
	
	<p>Everyone can contribute to making sure the Global Goals
	are met. A single act of kindness, if multiply by hundreds can
	change the world. Find a project/organisation to support below.</p>
    </div>
  
  </div>

  <div className="supportBracer">

  <div className="donorType">
    
    <label>
       <input type="radio" name="donorType" value="Individual" />
       <div onClick={()=> this.handleDonorTypeChange('Individual')} className={donorType=='Individual'?'selected':null}>Individual</div>
    </label>  

    <label>
       <input type="radio" name="donorType" value="Organisation"/>
       <div onClick={()=> this.handleDonorTypeChange('Organisation')} className={donorType=='Organisation'?'selected':null}>Organisation</div>
    </label>   

  </div>
  
  </div>
  
  
  
  <div className="supportBracer">

    <section className="africaMap">
    
    <div className="boxxTitle">
     Fund an Indicator in Africa. Start off with a Country
    </div>

<div className="infoCardcontSup">
  
  {
   countries.map((country,index) => (
    displayy == country.value && (
     <div key={index} className="infoCardSup">
	<p>{country.value}</p>
	
     </div>
     )
    )
	)
  }


</div>   
    
      <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"  xmlSpace="preserve" width="7.16516in" height="7.94783in"
	      className="svgAfMap" viewBox="0 0 7275 8070" >

  <g id="map_x0020_of_x0020_africa" transform="translate(0, 0)">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  
  <path  className="fil0" id="Morocco" onPointerOver={e => this.showCountry('Morocco')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Morocco'))} d="M29 1990l424 -6 0 -198 110 -66 -6 -278 352 -8 6 -319c96,-95 143,-108 297,-121 11,4 22,7 33,11 52,-88 121,-121 182,-132 11,-9 6,-29 33,-28l-44 -66 30 -47 69 -8 0 -39 176 -6 22 -50c-43,-26 -53,-65 -69,-113l-3 -184c-27,-4 -31,-21 -55,-36l-51 12 -39 -39 -168 30 -52 -44 -27 -56 -59 12c-93,333 -153,254 -281,343l-74 89c-4,55 -6,94 -51,110l-7 129c64,46 -46,171 -94,203 -6,9 -10,17 -13,26 -80,34 -96,87 -215,94l-74 168 -83 50c-22,70 -47,153 -66,209 -109,100 -152,239 -204,358z"/>
  <path className="fil1" id="Mauritius" onPointerOver={e => this.showCountry('Mauritius')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Mauritius'))}  d="M914 1279l424 266 -193 -3 110 955 28 30 -11 91 -402 -8 -41 17 -107 3 -25 39 -50 -58 -41 8 -3 80 -58 8 -58 -80 -44 -25 -18 -61 -40 10 -48 -45 -81 -8c-36,26 -88,24 -132,36l-22 39 6 -74c35,-85 86,-166 -8,-289l30 -94 -33 -63 -17 0 -41 -63 424 -11 -3 -206 105 -39 -6 -292 355 -3 0 -159z"/>
  <path className="fil2" id="Senegal"   onPointerOver={e => this.showCountry('Senegal')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Senegal'))} d="M0 2713l50 -22 55 -85 0 -33 28 -39 118 -28 89 0 48 51 39 -15c14,22 10,72 41,66 41,54 121,129 118,198l-11 14 67 50 15 85 -85 14 -102 -22 0 -17 -220 -6 -45 36 -73 3 -41 14 -3 -91 -8 -19 25 -28 -61 -107 -44 -19z"/>
  
  <polygon className="fil3" id="Gambia" onPointerOver={e => this.showCountry('Gambia')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Gambia'))} points="267,2817 333,2850 365,2839 398,2853 326,2871 256,2834 246,2860 190,2867 189,2893 88,2892 81,2867 105,2834 219,2835 "/>
  <polygon className="fil4" id="Guinea Bissau" onPointerOver={e => this.showCountry('Guinea-Bissau')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Guinea-Bissau'))}  points="173,3038 92,2980 131,2961 202,2964 248,2924 407,2929 404,3035 305,3062 275,3118 235,3093 228,3060 266,3051 250,3035 210,3056 237,3012 "/>
  
  <path className="fil5" id="Guinea" onPointerOver={e => this.showCountry('Guinea')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Guinea'))} d="M458 3323l-32 -83 -91 -43 -19 -50 -41 -26 32 -65 95 -14 6 -114 63 4 1 11 105 28 81 -22 -17 32 39 17 29 -19 25 30 41 -36 54 22 50 -34 34 -10 14 80 51 33 -29 23 33 8 -1 54 41 43 -22 18 14 58 21 3 -10 66 29 18 -59 15 28 41 -23 61 -32 -7c-7,-3 -14,-6 -21,-10 -14,17 -5,47 -41,52l-36 -28c5,-8 9,-17 14,-25 -6,-63 -23,-104 -146,-73 44,-48 -5,-110 -58,-171l-81 0 -54 11 -13 49 -72 51z"/>
  <path className="fil6" id="Sierra Leone" onPointerOver={e => this.showCountry('Sierra Leone')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Sierra Leone'))}  d="M478 3412l-22 -85 75 -56 15 -50 48 -7 89 0c22,48 107,89 52,172l42 -13c-26,88 -79,108 -119,161l-107 -44 8 -17 -79 -62z"/>
  <path className="fil7" id="Liberia" onPointerOver={e => this.showCountry('Liberia')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Liberia'))}  d="M1073 3805c-90,-27 -173,-69 -236,-129 -36,-34 -66,-76 -109,-88 -31,-9 -53,-26 -75,-50 47,-49 98,-81 127,-163 62,-7 89,13 100,81l-17 19 41 29c24,-7 34,-18 40,-50l32 22 12 75 -29 30 77 24 12 25c76,18 20,69 22,94l3 81z"/>
  <path className="fil8" id="Cote d' Ivorie" onPointerOver={e => this.showCountry('Cote d ivorie')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Cote d ivorie'))} d="M1562 3708c-145,7 -285,-32 -489,97l-7 -85c18,-33 59,-67 -21,-93l-9 -29 -77 -20 26 -30 -11 -66 -11 -16 32 5 25 -59 -30 -40 58 -17 -28 -16 11 -71 -22 1 -9 -58 48 -54 77 28 28 -49 49 -5 0 36 24 19 53 -28 29 9c19,22 39,44 58,66 53,-7 108,-27 159,-21l48 48 -7 34 21 17 9 83c-54,64 -49,109 -74,164l32 104 16 1 -7 45z"/>
  <path className="fil9" id="Ghana" onPointerOver={e => this.showCountry('Ghana')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Ghana'))} d="M1648 3756c-28,-27 -62,-23 -93,-34l9 -13 7 -44 -17 -3 -34 -106c28,-56 34,-113 85,-168 -11,-19 -11,-53 -17,-79l-25 -17 8 -37 -22 -134 20 -24 237 -13 50 -7 -7 45 57 48 -19 69 33 22 -21 75 40 38 -17 12 12 99 -19 42c26,32 45,63 77,77l-19 29 -75 3c-49,23 -97,62 -151,74 -38,8 -64,15 -97,45z"/>
  <path className="fil10" id="Togo" onPointerOver={e => this.showCountry('Togo')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Togo'))} d="M1855 3076l98 12 -12 62 65 46 0 67 26 30 0 241 -7 9 26 42 -59 21c-32,-23 -51,-54 -77,-81l19 -36 -17 -102 19 -17 -38 -36 19 -79 -33 -19 20 -67 -53 -44 5 -52z"/>
 
  <polygon className="fil11" id="Benin" onPointerOver={e => this.showCountry('Benin')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Benin'))} points="2150,3576 2052,3592 2023,3548 2031,3541 2031,3293 2004,3264 2005,3198 1938,3151 1954,3096 2007,3030 2073,3044 2110,2990 2106,2958 2147,2940 2164,2938 2237,3003 2222,3043 2255,3077 2270,3130 2234,3163 2237,3203 2185,3248 2189,3287 2152,3291 "/>
  
  <path className="fil12" id="Nigeria" onPointerOver={e => this.showCountry('Nigeria')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Nigeria'))}  d="M2455 3752c-45,3 32,-227 -309,-175l8 -288 34 -8 -3 -32 50 -37 -3 -48 42 -32 -24 -50 -32 -40 16 -37 3 -87 45 -45 3 -56c157,-80 192,-23 241,-19l58 69 85 -37 40 3 63 45 98 8 32 -37 77 -24 93 -3 106 29 87 -63 34 -3 50 74 5 63 53 29 -11 69 -56 26 -53 77 -19 48 -21 16 3 45 -29 11 -5 63 -71 50 8 42 -50 69 11 21 -26 16 -32 58 -71 -74 -19 24 -40 -13 -124 124 -8 71 -21 40 -42 -13 0 37 -93 -3 -32 24 -79 8 -71 -37z"/>
  <path className="fil13" id="Cameroon"onPointerOver={e => this.showCountry('Cameroon')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Cameroon'))} d="M3058 4011l-128 -3 -28 -15c4,-20 20,-61 9,-85l-30 -44 0 -42 -74 -13 0 -53 -45 5 29 -63 5 -71 132 -124 34 16 16 -26 74 69 34 -63 37 -13 -26 -21 56 -69 -5 -45 63 -48 0 -53 42 -16 -5 -45 25 -20c8,-56 40,-75 70,-120l55 -25 10 -70 -55 -30 -5 -65c92,48 110,120 100,172 -5,28 -6,43 -2,79l61 74 -155 10 -25 35 132 111 37 103c-48,48 -72,112 -98,175l13 132 34 34 21 63 87 87 11 116 -85 -29 -50 -3 -26 -21 -135 5 -17 -11 -189 0 -5 19z"/>
  <path className="fil14" id="Equatorial Guinea" onPointerOver={e => this.showCountry('Equatorial Guinea')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Equatorial Guinea'))} d="M2852 4113c17,-40 48,-59 52,-120l30 15 120 1 5 123 -168 0 -40 -19z"/>
  <path className="fil15" id="Gabon" onPointerOver={e => this.showCountry('Gabon')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Gabon'))} d="M2850 4280l-5 -108 36 3 -5 -37 26 -11 159 3 -8 -115 13 -22 193 4 4 16 1 94 52 -20 41 4 30 50 -58 70 -7 45 65 42c3,32 -1,70 8,95l-45 100 -41 -41 -22 32 -53 -4 -17 -50 -40 -1 4 56 -95 -8 13 83 28 19 -33 37 -20 -15 -34 46c-47,-76 -129,-138 -193,-208l8 -65 -33 -5 -38 -70 41 11 26 -29z"/>
  <path className="fil16" id="Congo" onPointerOver={e => this.showCountry('Congo')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Congo'))} d="M3133 4756c-14,-42 -56,-81 -97,-110l41 -45 19 12 30 -40 -26 -17 -15 -85 97 16 -8 -58 46 0 13 48 53 5 25 -29 38 37 44 -100 -7 -93 -66 -36 7 -58 58 -71 -26 -42 -38 -11 -57 22c-1,-33 -2,-66 -3,-99l132 -1 37 21 46 -5 89 32 0 -58c27,-21 35,-58 42,-119l97 -33 34 26 87 -1 9 42 -65 97 -1 73 -26 52 13 53 -29 67 13 38 -102 82 -65 90 9 122 -41 65 -29 8 -78 79 -52 9 1 -59 -108 54 -50 -42 -93 63z"/>
  
  <polygon className="fil17" id="Democratic Republic of the Congo" onPointerOver={e => this.showCountry('Democratic Republic of the Congo')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Democratic Repulic of the Congo'))}  points="3179,4861 3155,4832 3203,4828 3179,4756 3242,4712 3277,4731 3384,4684 3384,4737 3434,4732 3511,4651 3541,4643 3583,4575 3574,4457 3639,4366 3742,4278 3725,4239 3758,4182 3737,4129 3770,4073 3767,4003 3836,3904 3820,3851 3812,3784 3870,3722 3940,3695 4004,3734 4029,3769 4223,3797 4270,3727 4322,3758 4441,3695 4473,3720 4526,3697 4529,3673 4621,3683 4648,3707 4748,3698 4781,3750 4854,3783 4887,3755 4933,3776 4962,3742 5055,3835 5076,3822 5110,3867 5095,3970 5151,3995 5072,4075 5071,4105 5014,4147 5009,4191 4986,4239 4948,4286 4983,4288 4981,4379 4936,4403 4919,4401 4900,4494 4941,4549 4936,4699 4917,4762 4952,4814 4932,4850 5035,5000 5073,5087 4903,5113 4845,5179 4842,5214 4861,5212 4880,5249 4847,5441 4915,5540 4964,5538 4992,5507 4997,5637 4969,5622 4932,5646 4843,5536 4771,5521 4723,5439 4675,5487 4527,5446 4525,5394 4418,5414 4427,5386 4392,5361 4304,5390 4235,5377 4207,5403 4197,5362 4214,5316 4166,5233 4176,5106 4153,5066 4158,4984 4026,4990 4034,4951 3922,4961 3906,5068 3763,5068 3717,5082 3628,4921 3623,4857 3603,4842 3244,4847 "/>
  
  <path className="fil18" id="Angola" onPointerOver={e => this.showCountry('Angola')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Angola'))} d="M3226 4958l-67 -87 83 -26 357 -3 24 15 8 67 87 158 39 -13 147 -3 19 -107 114 -9 -12 40 134 0 -7 83 29 29 -15 131 50 82 -22 52 13 36 32 -25 59 19 89 -33 9 167 -24 38 20 25 -214 0 -4 338 20 48 130 112c-60,20 -120,30 -181,34 -100,15 -202,-4 -299,-19l-25 -40 -480 5 -75 -55 -60 35 -86 0c-2,-51 10,-95 -5,-152l33 -26 24 -85 24 -147 123 -136c11,-44 26,-83 8,-156l-89 -165 46 -33 -1 -57 -59 -104 7 -32z"/>
  <path className="fil19" id="Namibia" onPointerOver={e => this.showCountry('Namibia')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Namibia'))} d="M3125 6152l-5 -102 89 1 54 -32 75 50 479 -4 25 38c161,22 251,47 484,-11l92 -22 65 5 40 32 -37 0 -42 34 -30 -5 -67 44 -32 -54 -239 38 3 402 -104 -1 7 734 -38 7 -54 58 -37 -15 -52 11 -90 -28 -3 -56 -48 -13 -45 58 -90 -78c-40,-73 -54,-173 -81,-259l-7 -103 -30 -69 4 -156c-16,-61 -81,-145 -122,-217 -24,-74 -74,-189 -163,-288z"/>
  <path className="fil20" id="South Africa" onPointerOver={e => this.showCountry('South Africa')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('South Africa'))} d="M3792 7690c-48,-64 -101,-141 -119,-229 -11,-51 -31,-96 -61,-136l45 -60 45 15 5 50 95 30 45 -10 35 15 60 -55 40 -15 -5 -415c25,25 60,30 85,155l-20 35 10 50 105 -5 105 -100 25 -75 50 -5 50 45 80 15 85 -20 35 -95c37,-42 115,-10 110,-130l90 -50 55 -70 65 -10 40 -30 50 -5c15,8 30,17 45,25 35,2 45,-20 105,5 15,70 25,125 60,175l15 50 -10 175 25 105 70 0 -50 200c-95,60 -160,155 -210,275 -50,52 -125,110 -145,160 -85,90 -163,123 -245,185l-95 0 0 30 -75 -5 -10 25 -120 -25 -30 15 -90 -10 -80 50 -85 -5c-35,10 -65,25 -90,55l-40 0 -40 -50 -45 -5 10 -30 -65 5 20 -35 -65 -130 45 -25 5 -55 -15 -55z"/>
  <path className="fil21" id="Lesotho" onPointerOver={e => this.showCountry('Lesotho')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Lesotho'))} d="M4772 7555l-70 -115c25,-20 65,-30 70,-85l90 -35 90 90 -25 70 -95 35 -25 50 -35 -10z"/>
  
  <polygon className="fil22" id="Swaziland(Eswatini)" onPointerOver={e => this.showCountry('Eswatini')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Eswatini'))} points="5127,7161 5102,7116 5097,7071 5122,7016 5162,6991 5212,7016 5237,7116 5217,7176 "/>
  
  <path className="fil23" id="Mozambique" onPointerOver={e => this.showCountry('Mozambique')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Mozambique'))} d="M5326 7021l-15 100 -70 5 -30 -110 10 -180 -15 -50c-35,-50 -43,-117 -65,-175l125 -120 5 -80 55 -60 -25 -60 20 -110 5 -50 -5 -50 5 -25 -20 -40 15 -30 -100 -25 -80 -45 -85 -5 -20 -110 315 -100 40 60 75 -15 20 15 5 80 -35 60 5 25 105 115 -20 -70 35 -45 35 -10 10 -145 -105 -120 -15 -150 30 -70 60 20 25 -25 35 30 70 -15 65 20 45 -45 65 15 30 -30 55 0c38,-23 85,-40 115,-70l20 30c-8,28 -12,62 -20,90 3,70 20,145 10,210l35 90 -5 50 -25 70 -45 35 -25 60c-97,50 -215,95 -290,150 -70,80 -140,130 -210,195l-45 25 -5 70 40 35 20 80 5 100 20 -30 -10 195 10 20 -40 55 -230 100 -40 55 30 40 25 -35z"/>
  <path className="fil24" id="Tanzania" onPointerOver={e => this.showCountry('Tanzania')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Tanzania'))} d="M5511 5407l-20 -125 -45 -55 -20 0 0 25 -200 -70c-25,-35 -55,-45 -90,-55l-55 -110 0 -60 -60 -60 -35 -15 30 -30 -20 -40 0 -35 10 -20 -30 -20 0 -45 45 -15 60 -90 25 -5 5 -40 -50 -15 20 -45 30 -5 0 -85 -40 -55 140 0 -25 115 35 40 20 -25 20 0 0 15 105 10 55 -30 -30 -25 10 -50 50 -45 370 210 -10 50 165 120 0 45 -40 90 5 40 75 80 -30 55 15 35 -15 35 5 40 35 55 5 80 75 40 -5 15c-40,35 -77,47 -115,70l-55 0 -30 30 -65 -15 -45 45 -65 -20 -70 15 -35 -25 -25 25 -55 -25 -30 -25z"/>
  <path className="fil25" id="Kenya" onPointerOver={e => this.showCountry('Kenya')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Kenya'))} d="M6001 4717l-25 5 -160 -115 5 -60 -375 -205 10 -75 70 0 -5 -10 -5 -20 -50 15 -25 -35c20,-40 20,-80 85,-115l20 -40 -10 -90 -60 -90 15 -35 -35 -5 -15 -50 40 -50 95 -30 20 5 15 35 35 -5 10 20 90 0 120 90 160 20 35 -45 90 -45 40 35 75 5 -90 110 -5 395 60 75 -30 35 -45 0c-25,27 0,60 -75,80l5 35 -85 160z"/>
  <path className="fil26" id="Somalia" onPointerOver={e => this.showCountry('Somalia')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Somalia'))} d="M6366 3788l40 -35 75 -30 110 10 330 -330 -110 -5 -310 -100 -55 -35c-28,-48 -80,-85 -85,-145l55 -85 110 110 80 5 85 -55 60 30 100 -60 95 5 50 -20 25 15 140 -35 55 -50 60 25c-15,40 -45,55 -15,130l-35 25 -5 90 -110 160 0 25c-55,60 -60,113 -90,170 -160,245 -210,265 -315,385 -220,85 -370,265 -475,425l-60 -80 5 -395 90 -110 30 -35 70 -5z"/>
  <path className="fil27" id="Djibouti" onPointerOver={e => this.showCountry('Djibouti')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Djibouti'))} d="M6326 2923l30 10 40 -35 35 25 0 55 -70 25 0 25 55 0 -30 55c-20,-15 -60,-20 -100,5 -15,-10 -35,-35 -25,-70l65 -95z"/>
  <path className="fil28" id="Eritrea" onPointerOver={e => this.showCountry('Eritrea')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Eritrea'))} d="M5911 2713l-55 -55 -35 85 -30 -35 -15 10 -55 5 -20 -90 55 -120 5 -100 45 15 10 -40 75 -20 40 -50c40,100 65,260 120,300l15 -25 45 65 25 -10 25 35 45 10 55 75 60 40c20,35 45,70 75,95l-40 30 -30 -10c-40,-40 -65,-100 -120,-120l-40 -60c-70,-30 -135,-85 -255,-30z"/>
  <path className="fil29" id="Sudan" onPointerOver={e => this.showCountry('Sudan')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Sudan'))} d="M4387 2568l5 -480 100 10 0 -235 1259 5 30 85c15,97 0,240 45,290l110 80 -40 45 -75 20 -15 50 -45 -30 -5 105 -55 125 15 90 -50 165 -50 15 -60 90 -10 90 -45 5 -30 30 10 35 -30 85 -25 -5 10 -75 -80 -70 -10 -80 20 -70 -55 0 0 30 -75 -5 30 30 5 75 -120 130 -50 10 -80 -60 -45 20 -5 40 -55 10 -20 30 -85 -5 -20 -30 -90 10 -45 5 -70 -80 0 -20 -85 10 -50 155 -40 20 -80 -10 20 -45 0 -75 -85 -110 5 -45 -40 -30 15 -50 -50 -65 -25 10 0 -45 35 -35 -25 -45 50 -35 -20 -45 35 -20 45 -105 95 0z"/>
  <path className="fil30" id="Egypt" onPointerOver={e => this.showCountry('Egypt')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Egypt'))} d="M4492 1014l-35 -105 40 -80 -20 -75 35 -35 25 25 35 -15 170 25 60 35 60 0 60 35c65,-13 104,-50 145,-85l20 20 65 -25 85 5 -20 25 30 25 25 -20 35 25 55 -20 55 15 55 -20 65 185 -15 115 -30 55 5 45 -35 20 -95 -90 -5 -55 -45 -55 -10 -65 -30 50 25 40 25 85 65 75 5 40 55 90 -5 45c65,85 90,170 135,255l50 30 -25 5 5 65 20 65 120 95 -1259 5 0 -854z"/>
  <path className="fil31" id="Libya" onPointerOver={e => this.showCountry('Libya')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Libya'))} d="M3533 1699l-175 100 -90 -65 -155 -35 -40 -85 -100 -40 -25 15 -40 -45 -5 -70 -65 -75 50 -55 0 -45 -20 -40 30 -65 -30 -50 15 -105 -70 -120 75 -30 45 -75 -25 -55 80 -100 75 -40 -5 -85 90 45 130 -5 100 40 75 25c15,75 45,105 90,140 220,-5 205,75 305,110l50 0 75 -60c5,-60 5,-60 5,-60l-20 -50 10 -65 160 -100 90 5 75 40 0 35 105 45 100 5 20 35 -35 40 15 70 -40 85 40 105 0 1074 -110 -5 0 60 -854 -450z"/>
  <path className="fil32" id="Tunisia" onPointerOver={e => this.showCountry('Tunisia')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Tunisia'))} d="M2623 460l35 -85 55 -30 0 -120 -10 -30c15,-48 10,-100 45,-145 40,-35 70,-50 135,-50l50 70 75 -40 5 20 -30 55 -35 20 15 65 50 35 -5 55 -60 85 -45 25 -5 50 40 35 65 5 20 60 40 5 5 80 -80 40 -85 95 30 55 -45 75 -45 15 -50 -230 -75 -60 -30 -75 -30 -10 -35 -70z"/>
  <path className="fil33" id="Algeria" onPointerOver={e => this.showCountry('Algeria')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Algeria'))} d="M1639 300l60 -60 90 -40 25 10 115 -90 175 -20 30 -25 70 0 25 -20 115 5 35 30 110 -35 15 -25 60 25 50 -25 50 30 80 -5c-30,60 -35,120 -25,165l-5 125 -50 30 -40 75 35 85 35 10 30 75 80 65 45 220 -35 10 65 125 -10 105 30 50 -35 70 25 35 0 50 -50 50 65 75 0 75 50 40 25 -15 100 40 30 90 -460 290 -185 170 -265 55 -10 -95 -135 -45 -35 -30 -50 -35 5 -25 -1048 -713 -16 -162c86,-72 170,-133 300,-115l35 5c60,-80 100,-115 185,-130 10,-12 10,-20 30,-35l-45 -55 35 -50 70 -10 0 -40 170 0 30 -55c-40,-25 -55,-65 -75,-110l5 -185 -65 -40 55 5z"/>
  <path className="fil34" id="Mali" onPointerOver={e => this.showCountry('Mali')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Mali'))} d="M2218 2613l-225 15 -30 30 -85 10 -35 -15 -70 0 -85 60 -40 5 0 30 -50 -10 -45 30 0 40 -40 -5 5 45 -35 20 -45 -40 -40 35 15 45 -35 60 -75 40 10 45 -40 35 5 65 -50 30 -30 -10 5 -40 -50 0 -30 55 -75 -30 -35 30 -35 -40 0 -50 -30 -10 30 -25 -55 -35 -10 -70 -40 -5 -40 40 -60 -20 -45 40 -25 -35 -30 25 -30 -25 15 -25 0 -65 -85 -70 15 -25 -30 -85 45 -10 5 -85 45 0 45 60 20 -40 120 -10 35 -10 400 5 10 -90 -25 -30 -115 -959 190 10 640 435 -5 45 60 25 25 35 140 40 5 85 95 -10 5 290c-25,50 -30,95 -80,120z"/>
  <path className="fil35" id="Niger" onPointerOver={e => this.showCountry('Niger')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Niger'))} d="M3488 2438c-75,70 -170,185 -210,270l20 75 -35 5c-32,23 -58,42 -90,65l-90 -25 -105 -5 -75 25 -35 40 -95 -10 -60 -45 -45 0 -80 40 -60 -75c-45,-5 -115,-55 -245,20l0 60 -45 45 0 80 -80 -65 -55 15 10 35 -45 -40 15 -45 -60 5 -65 -40 0 -65 -40 -5 -45 -85 0 -45 90 -10 25 -30 240 -10c25,-45 35,-45 70,-120l-5 -300 175 -35 185 -170 460 -295 160 40 85 60 70 -40 25 175 50 55 -10 20 50 45 -30 55 -25 330z"/>
  
  <polygon className="fil36" id="Burkina Faso" onPointerOver={e => this.showCountry('Burkina Faso')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Burkina Faso'))} points="1367,3228 1309,3173 1279,3158 1274,3088 1319,3053 1304,3008 1379,2968 1419,2898 1399,2863 1439,2828 1489,2868 1524,2848 1514,2803 1559,2808 1554,2768 1599,2738 1649,2753 1649,2713 1689,2718 1774,2653 1844,2648 1874,2673 1879,2723 1919,2803 1959,2803 1959,2863 2024,2908 2089,2903 2074,2953 2113,2988 2074,3043 2009,3028 1949,3093 1859,3073 1804,3088 1574,3093 1544,3123 1569,3263 1524,3208 "/>
  
  <path className="fil37" id="Chad" onPointerOver={e => this.showCountry('Chad')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Chad'))} d="M3732 3393l-105 55 -20 -40 -80 50 -35 -10 -30 -105 -135 -115 25 -35 155 -10 -60 -70c-25,-70 55,-180 -100,-255l-50 -75 -20 -75c55,-95 110,-185 210,-270l20 -330 40 -55 -55 -45 10 -20 -50 -60 -25 -170 110 -60 854 450 0 420 -95 0 -50 105 -35 20 20 50 -50 35 25 40 -40 40 5 45 30 -15 45 70 -15 45 40 30 -5 50 -45 -10 -75 40 0 25 -135 140 -140 10 -20 15 25 20 -60 65 -85 5z"/>
  <path className="fil38" id="Central African Republic" onPointerOver={e => this.showCountry('Central African Republic')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Central African Republic'))} d="M4537 3468c65,25 85,45 105,70l10 60 70 35 25 65 -100 10 -20 -25 -100 -10 5 25 -60 20 -30 -20 -120 60 -50 -30 -55 70 -190 -30 -20 -35 -70 -35 -65 20 -60 70 10 80 -80 -5 -40 -25 -95 40 -40 120 -15 -70 -85 -80 -20 -65 -35 -35 -10 -135c25,-55 40,-105 90,-165l35 15 80 -55 20 40 105 -55 85 0 60 -70 -25 -20 25 -15 135 -10 140 -140 0 -30 70 -30 50 5 85 110 -5 65 -20 50 80 10 -5 45 65 10c22,32 55,45 65,95z"/>
  <path className="fil39" id="South Sudan" onPointerOver={e => this.showCountry('South Sudan')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('South Sudan'))} d="M5346 3418l65 10c37,35 65,80 110,105 15,55 25,100 60,145l50 5 20 70 -40 0 -10 -35 -25 -5 -90 30 -50 50 -40 45 -125 -5 -25 40 -40 -40 -35 20 -30 -20 -30 35 -35 -45 -20 15 -95 -95 -30 35 -45 -25 -35 30 -75 -35 -30 -50 -20 -65 -75 -35 -5 -60c-35,-25 -65,-55 -110,-70 -10,-40 -43,-67 -65,-100l-70 -5 10 -50 40 -15 50 -155 85 -10 0 20 70 80 140 -15 15 30 90 0 15 -25 55 -10 5 -40 45 -25 80 65 50 -10 120 -130 -5 -70 -25 -35 70 0 0 -25 55 0 -20 60 15 95 75 70 -10 70 30 5 0 85 -10 20 -90 10 -10 60z"/>
  <path className="fil40" id="Ethiopia" onPointerOver={e => this.showCountry('Ethiopia')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Ethiopia'))} d="M5521 3538l-110 -105 -70 -15 15 -60 90 -10 10 -20 0 -90 25 -80 -10 -40 35 -30 45 -5 5 -90 60 -85 55 -15 45 -165 50 -5 25 -15 30 35 35 -80 60 50c165,-60 210,25 260,40l35 55c50,30 77,77 115,115l-65 95 -5 40 30 30c35,-20 70,-25 100,-10l-30 40c20,55 55,95 85,135 85,75 243,97 365,145l115 5 -330 330 -110 -10 -75 30 -40 35 -70 10 -30 25 -75 5 -40 -45 -85 45 -40 50 -165 -20 -115 -90 -95 0 0 -10 -15 -75 -55 -5c-30,-50 -50,-90 -60,-140z"/>
  
  <polygon className="fil41" id="Rwanda" onPointerOver={e => this.showCountry('Rwanda')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Rwanda'))} points="5012,4382 5072,4337 5112,4392 5112,4477 5082,4482 5012,4472 4987,4522 4917,4512 4902,4492 4952,4447 4942,4397 4982,4377 "/>
  <polygon className="fil42" id="Burundi" onPointerOver={e => this.showCountry('Burundi')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Burundi'))} points="4977,4692 4937,4582 4942,4547 4917,4512 4987,4522 5012,4472 5077,4482 5062,4527 5112,4542 5107,4582 5082,4587 5022,4677 "/>
  
  <path className="fil43" id="Uganda" onPointerOver={e => this.showCountry('Uganda')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Uganda'))} d="M5162 4028l-10 -35 -60 -20 15 -100 35 -40 30 20 35 -20 40 40 25 -40 125 5 40 -50 20 55 35 5 -15 35 60 90 10 90 -20 40c-60,35 -57,73 -85,110l-55 0 -20 -25 -30 30 -50 0 -65 20 10 30 -40 45 5 25 -120 0 -65 45 -35 -5 5 -90 30 -40 -25 -10 25 -50 0 -40 60 -40 10 15 80 -95z"/>
  <path className="fil44" id="Zambia" onPointerOver={e => this.showCountry('Zambia')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Zambia'))} d="M5361 5362l-10 140 20 35 -45 25 5 55 -25 50 25 40 -295 95 15 70 -95 10 -60 35 -10 50c-105,-10 -132,108 -200,165l-70 -20 -10 15 -85 -15 -40 -35 -75 -5 -85 20 -130 -115 -15 -40 0 -345 215 0 -20 -25 25 -40 -10 -165 40 25 -10 25 110 -20 0 55 150 40 45 -45 50 80 75 15 85 110 40 -25 25 15 -5 -125 -30 25 -45 5 -70 -100 35 -190 -20 -45c20,-20 95,-40 45,-95l170 -25 -15 30 65 40 15 -30c50,15 65,30 85,55l105 35 70 120 -40 25z"/>
  <path className="fil45" id="Zimbabwe" onPointerOver={e => this.showCountry('Zimbabwe')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Zimbabwe'))} d="M5331 6351l-60 65 -10 80 -120 115c-32,2 -40,-15 -95,5l-50 -30 -50 5 -35 -45 -100 -20 -45 -65 5 -60 -45 0 -5 -40 -110 -70c-15,-65 -67,-123 -100,-185l95 20 10 -15 65 20c7,35 100,-115 140,-125l65 -5 10 -85 60 -35 95 -10 5 40 90 0 80 55 95 20 -15 30 25 40c-15,35 -3,63 -5,95l-25 135 30 65z"/>
  <path className="fil46" id="Botswana" onPointerOver={e => this.showCountry('Botswana')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Botswana'))} d="M3972 6566l105 0 0 -400 235 -40 35 55 60 -45 35 5 45 -35 25 0c33,62 85,120 100,185l110 70 5 40 45 0 -5 60 45 65 100 20 35 45 -35 30 -70 5 -55 75 -90 50c10,120 -75,88 -110,130l-35 95 -80 20 -85 -15 -45 -45 -55 5 -20 70 -110 105 -105 5 -10 -50 20 -35c-20,-50 -15,-115 -85,-155l-5 -315z"/>
  
  <polygon className="fil47" id="Malawi" onPointerOver={e => this.showCountry('Malawi')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Malawi'))} points="5431,5512 5466,5592 5466,5637 5496,5671 5486,5696 5506,5731 5526,5696 5561,5746 5556,5686 5626,5771 5616,5916 5576,5926 5546,5971 5566,6041 5461,5931 5456,5901 5491,5841 5481,5761 5466,5746 5391,5761 5351,5701 5331,5706 5307,5671 5331,5617 5326,5562 5371,5537 5351,5502 5361,5362 5401,5337 5331,5222 5431,5252 5456,5317 5466,5457 "/>
  <polygon className="fil14" id="Equatorial Guinea" onPointerOver={e => this.showCountry('Equatorial Guinea')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Equatorial Guinea'))} points="2773,3848 2803,3858 2763,3958 2723,3948 "/>
  <polygon className="fil48 str0" id="Sao Tome and Principe" onPointerOver={e => this.showCountry('Sao Tome and Principe')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Sao Tome and Principe'))} points="2517,4198 2580,4230 2541,4276 2493,4276 "/>
  <polygon className="fil24" id="Tanzania" onPointerOver={e => this.showCountry('Tanzania')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Tanzania'))} points="6034,4785 6039,4732 6050,4774 "/>
  <polygon className="fil24" id="Tanzania" onPointerOver={e => this.showCountry('Tanzania')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Tanzania'))} points="5981,4880 5992,4827 6018,4907 "/>
  <polygon className="fil49" id="Comoros" onPointerOver={e => this.showCountry('Comoros')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Comoros'))} points="6532,5481 6581,5474 6581,5515 "/>
  <polygon className="fil49" id="Comoros" onPointerOver={e => this.showCountry('Comoros')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Comoros'))} points="6650,5564 6678,5592 6706,5571 "/>
  <polygon className="fil49" id="Comoros" onPointerOver={e => this.showCountry('Comoros')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Comoros'))} points="6401,5370 6429,5370 6429,5425 6429,5453 6401,5439 "/>
  
  <path className="fil50" id="Madagascar" onPointerOver={e => this.showCountry('Madagascar')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Madagascar'))} d="M6691 6936l-70 45 -45 0 -25 -25 -45 -10c-45,-20 -47,-63 -70,-95l0 -100 5 -15 -45 -70c-20,-85 13,-113 20,-170l35 -5 5 -45 60 -95 0 -55 -45 -110 -10 -110 55 -75 0 -60 50 5 35 -30 100 -20c43,-38 90,-45 130,-115l5 40 30 -45 -5 -35 35 -20 -5 -60 40 25c32,-28 73,-47 55,-130l45 -60c22,37 15,70 65,110 10,60 20,120 25,185l30 75 -30 60 -35 -60 -30 10 25 110 -40 65 -10 145c-55,110 -165,465 -240,710l-45 30 -55 0z"/>
 
  <polygon className="fil50" id="Madagascar" onPointerOver={e => this.showCountry('Madagascar')} onPointerOut={this.hideCountry} onClick={()=>(this.showGoalsToDonor('Madagascar'))} points="6916,5627 6931,5627 6931,5646 6916,5646 "/>
  
  <polygon className="fil51" points="5072,4072 5152,3993 5162,4028 5082,4122 5072,4107 "/>
  <polygon className="fil51" points="5336,4217 5366,4187 5391,4217 5441,4212 5466,4252 5516,4237 5526,4262 5526,4267 5456,4267 5446,4347 5401,4387 5391,4437 5421,4462 5366,4492 5262,4482 5262,4467 5242,4467 5222,4492 5187,4452 5212,4337 5197,4337 5192,4312 5232,4267 5222,4237 5287,4217 "/>
  <polygon className="fil51" points="4902,4492 4922,4397 4937,4402 4942,4397 4952,4447 "/>
  <polygon className="fil51" points="4937,4697 4942,4592 4982,4692 4977,4737 5007,4757 4997,4777 4997,4812 5017,4852 4987,4882 5022,4897 5082,4957 5082,5017 5137,5127 5142,5127 5127,5157 5062,5117 5077,5087 5032,4997 4932,4847 4952,4812 4917,4762 "/>
  
  <path className="fil51" d="M4842 5177l60 -65 10 0c40,70 -30,70 -50,95l5 5 -25 5 0 -40z"/>
  
  <polygon className="fil52" points="3163,4832 3163,4797 3138,4752 3228,4692 3248,4712 3178,4757 3203,4827 "/>
  <polygon className="fil53" points="3363,2853 3413,2853 3415,2860 3393,2863 3375,2871 3363,2863 "/>
  
  <path className="fil51" d="M4892 5961l-5 40 -65 5c-30,25 -135,135 -135,130 60,-65 110,-185 205,-175z"/>
  
  <polygon className="fil51" points="5426,5252 5426,5227 5451,5227 5496,5282 5516,5412 5536,5432 5506,5502 5521,5651 5561,5691 5561,5751 5531,5696 5506,5731 5486,5696 5496,5671 5466,5637 5466,5587 5431,5512 5466,5457 5451,5312 "/>
  <polygon className="fil51" points="4987,4237 5012,4247 4982,4287 4947,4287 "/>
  
  <path className="fil54" d="M924 1159l-124 -72 14 -25 105 22c10,2 17,4 22,5 -4,-4 -9,-10 -16,-18l-69 -80 13 -22 124 72 -9 16 -104 -60 83 97 -9 15 -127 -26 106 62 -9 16z"/>
  <path id="1" className="fil54" d="M960 996c-17,-10 -26,-21 -29,-35 -2,-12 0,-23 6,-34 7,-12 17,-20 30,-23 13,-3 26,-1 40,8 12,7 20,14 24,21 5,7 7,15 7,24 0,9 -3,17 -7,25 -7,13 -17,20 -30,24 -13,3 -27,0 -42,-9zm9 -16c12,7 22,9 30,8 9,-2 15,-6 20,-14 4,-8 5,-16 2,-24 -3,-8 -10,-16 -22,-23 -11,-6 -21,-9 -30,-7 -9,2 -15,6 -20,14 -4,8 -5,16 -2,24 3,8 10,16 21,23z"/>
  <path id="2" className="fil54" d="M1065 921l-90 -52 8 -14 14 8c-4,-7 -7,-13 -7,-17 0,-4 1,-8 3,-12 3,-5 8,-9 14,-13l11 13c-4,2 -8,6 -10,9 -2,3 -3,7 -2,11 0,4 2,7 5,11 4,5 10,9 16,13l47 27 -9 15z"/>
  <path id="3" className="fil54" d="M1051 842c-17,-10 -26,-21 -29,-35 -2,-12 0,-23 6,-34 7,-12 17,-20 30,-23 13,-3 26,-1 40,8 12,7 20,14 24,21 5,7 7,15 7,24 0,9 -3,17 -7,25 -7,13 -17,20 -30,24 -13,3 -27,0 -42,-9zm9 -16c12,7 22,9 30,8 9,-2 15,-6 20,-14 4,-8 5,-16 2,-24 -3,-8 -10,-16 -22,-23 -11,-6 -21,-9 -30,-7 -9,2 -15,6 -20,14 -4,8 -5,16 -2,24 3,8 10,16 21,23z"/>
  <path id="4" className="fil54" d="M1157 689l11 -14c9,8 15,17 17,27 2,10 0,20 -6,30 -7,12 -17,20 -29,23 -12,3 -26,0 -41,-9 -10,-6 -17,-12 -23,-20 -5,-7 -8,-16 -8,-24 0,-9 3,-17 7,-25 6,-10 13,-16 21,-20 9,-3 18,-3 28,0l-6 16c-7,-2 -13,-2 -18,0 -5,2 -9,5 -12,10 -4,8 -5,16 -3,24 3,8 10,15 22,22 12,7 22,10 30,8 8,-1 14,-6 19,-13 4,-6 5,-12 3,-18 -1,-6 -6,-12 -13,-17z"/>
  <path id="5" className="fil54" d="M1208 602l11 -14c9,8 15,17 17,27 2,10 0,20 -6,30 -7,12 -17,20 -29,23 -12,3 -26,0 -41,-9 -10,-6 -17,-12 -23,-20 -5,-7 -8,-16 -8,-24 0,-9 3,-17 7,-25 6,-10 13,-16 21,-20 9,-3 18,-3 28,0l-6 16c-7,-2 -13,-2 -18,0 -5,2 -9,5 -12,10 -4,8 -5,16 -3,24 3,8 10,15 22,22 12,7 22,10 30,8 8,-1 14,-6 19,-13 4,-6 5,-12 3,-18 -1,-6 -6,-12 -13,-17z"/>
  <path id="6" className="fil54" d="M1210 573c-17,-10 -26,-21 -29,-35 -2,-12 0,-23 6,-34 7,-12 17,-20 30,-23 13,-3 26,-1 40,8 12,7 20,14 24,21 5,7 7,15 7,24 0,9 -3,17 -7,25 -7,13 -17,20 -30,24 -13,3 -27,0 -42,-9zm9 -16c12,7 22,9 30,8 9,-2 15,-6 20,-14 4,-8 5,-16 2,-24 -3,-8 -10,-16 -22,-23 -11,-6 -21,-9 -30,-7 -9,2 -15,6 -20,14 -4,8 -5,16 -2,24 3,8 10,16 21,23z"/>
  <path className="fil54" d="M537 2583l-162 -102 20 -32 139 34c13,3 23,6 29,7 -5,-6 -12,-14 -21,-25l-88 -110 18 -29 162 102 -13 21 -136 -85 106 133 -12 19 -168 -40 138 87 -13 21z"/>
  <path id="1" className="fil54" d="M688 2311c2,11 2,21 0,30 -2,8 -5,17 -10,24 -8,13 -18,21 -28,24 -11,3 -21,1 -31,-5 -6,-4 -10,-8 -13,-14 -3,-6 -5,-11 -5,-17 0,-6 1,-12 2,-18 1,-5 4,-11 8,-20 8,-17 13,-31 16,-40 -3,-2 -4,-3 -5,-3 -8,-5 -15,-7 -21,-5 -8,2 -15,8 -21,18 -6,9 -9,17 -8,24 0,7 4,13 11,21l-15 18c-7,-7 -12,-14 -15,-21 -3,-7 -3,-16 -1,-25 2,-9 6,-19 13,-29 6,-10 13,-17 19,-22 6,-5 12,-8 18,-8 5,-1 11,0 17,2 4,1 10,5 19,11l27 17c18,12 30,19 36,21 5,2 11,3 17,4l-13 21c-5,-1 -11,-2 -17,-5zm-45 -26c-2,9 -6,21 -13,37 -4,9 -6,16 -7,20 -1,4 0,8 2,12 2,4 4,7 8,9 5,3 11,4 17,2 6,-2 12,-7 16,-14 5,-8 7,-16 8,-24 0,-8 -1,-15 -5,-22 -3,-5 -9,-10 -18,-16l-7 -5z"/>
  <path id="2" className="fil54" d="M782 2193l-17 -11c8,17 6,34 -4,50 -4,7 -10,13 -16,17 -6,4 -13,7 -18,7 -6,0 -12,-1 -19,-3 -4,-2 -11,-5 -19,-10l-73 -46 13 -20 65 41c10,7 18,11 22,12 6,2 12,2 17,0 6,-2 10,-6 14,-12 4,-6 6,-13 6,-20 0,-7 -2,-13 -6,-19 -4,-5 -11,-11 -21,-18l-63 -40 13 -20 117 74 -11 18z"/>
  <path id="3" className="fil54" d="M812 2144l-117 -74 11 -18 18 11c-5,-10 -8,-17 -8,-23 0,-6 1,-11 4,-15 4,-7 11,-12 19,-16l14 18c-6,3 -10,7 -13,12 -3,4 -4,9 -3,14 0,5 3,10 6,14 6,7 13,13 21,18l61 39 -13 20z"/>
  <path id="4" className="fil54" d="M720 1981l-23 -14 13 -20 23 14 -13 20zm139 88l-117 -74 13 -20 117 74 -13 20z"/>
  <path id="5" className="fil54" d="M901 1964l19 8c-2,6 -5,12 -8,16 -5,7 -9,12 -14,15 -5,3 -10,3 -14,3 -5,-1 -13,-5 -25,-12l-68 -43 -9 15 -15 -10 9 -15 -29 -18 0 -27 41 26 13 -20 15 10 -13 20 69 43c6,4 10,6 12,6 2,0 4,0 6,-1 2,-1 4,-3 6,-6 1,-2 3,-5 5,-9z"/>
  <path id="6" className="fil54" d="M792 1868l-23 -14 13 -20 23 14 -13 20zm139 88l-117 -74 13 -20 117 74 -13 20z"/>
  <path id="7" className="fil54" d="M1011 1828l-17 -11c8,17 6,34 -4,50 -4,7 -10,13 -16,17 -6,4 -13,7 -18,7 -6,0 -12,-1 -19,-3 -4,-2 -11,-5 -19,-10l-73 -46 13 -20 65 41c10,7 18,11 22,12 6,2 12,2 17,0 6,-2 10,-6 14,-12 4,-6 6,-13 6,-20 0,-7 -2,-13 -6,-19 -4,-5 -11,-11 -21,-18l-63 -40 13 -20 117 74 -11 18z"/>
  <path id="8" className="fil54" d="M1001 1765l9 -22c9,4 17,5 24,2 7,-2 14,-8 20,-17 6,-9 8,-17 7,-24 -1,-7 -4,-12 -9,-15 -4,-3 -9,-3 -14,-1 -3,2 -10,7 -20,16 -13,12 -22,20 -29,24 -6,4 -13,6 -19,6 -7,0 -13,-2 -19,-6 -5,-3 -9,-8 -12,-13 -3,-5 -5,-11 -5,-17 0,-5 0,-10 2,-16 2,-6 5,-13 8,-19 6,-9 12,-16 19,-22 7,-5 14,-8 20,-9 7,0 14,1 22,5l-10 21c-7,-3 -13,-3 -19,-1 -6,2 -12,7 -16,15 -6,9 -8,17 -8,22 1,6 3,10 7,13 3,2 5,2 8,2 3,0 7,-2 10,-4 2,-2 7,-6 16,-14 13,-12 22,-20 28,-24 6,-4 12,-6 19,-7 7,0 13,2 20,6 7,4 12,10 15,18 3,8 4,16 3,25 -1,9 -5,19 -11,28 -10,15 -20,25 -31,29 -11,4 -24,3 -38,-2z"/>
  <path className="fil54" d="M1529 1333l93 -242 35 0 99 242 -36 0 -28 -73 -102 0 -26 73 -34 0zm70 -100l83 0 -25 -67c-8,-20 -13,-37 -17,-51 -3,16 -8,31 -13,47l-27 71z"/>
  
  <polygon id="1" className="fil54" points="1777,1333 1777,1091 1807,1091 1807,1333 "/>
  
  <path id="2" className="fil54" d="M1847 1348l29 4c1,9 5,15 10,20 7,5 17,8 30,8 14,0 24,-3 32,-8 8,-5 13,-13 15,-23 2,-6 2,-19 2,-38 -13,15 -29,23 -49,23 -24,0 -43,-9 -56,-26 -13,-17 -20,-38 -20,-63 0,-17 3,-32 9,-46 6,-14 15,-25 26,-33 12,-8 25,-12 41,-12 21,0 38,8 51,25l0 -22 27 0 0 152c0,27 -3,47 -8,58 -6,11 -14,20 -26,27 -12,7 -27,10 -45,10 -21,0 -38,-5 -51,-14 -13,-9 -19,-24 -19,-42zm24 -105c0,23 5,40 14,50 9,11 21,16 34,16 14,0 25,-5 34,-16 9,-10 14,-27 14,-49 0,-21 -5,-38 -14,-49 -10,-11 -21,-16 -34,-16 -13,0 -24,5 -34,16 -9,11 -14,27 -14,48z"/>
  <path id="3" className="fil54" d="M2161 1276l31 4c-5,18 -14,32 -27,42 -13,10 -30,15 -50,15 -26,0 -46,-8 -61,-24 -15,-16 -23,-38 -23,-66 0,-29 8,-52 23,-69 15,-16 35,-24 59,-24 23,0 43,8 57,24 15,16 22,38 22,67 0,2 0,4 0,8l-131 0c1,19 7,34 16,44 10,10 22,15 37,15 11,0 20,-3 28,-9 8,-6 14,-15 18,-28zm-97 -48l98 0c-1,-15 -5,-26 -11,-33 -9,-11 -22,-17 -37,-17 -14,0 -25,5 -34,14 -9,9 -14,21 -15,37z"/>
  <path id="4" className="fil54" d="M2229 1333l0 -176 27 0 0 27c7,-12 13,-21 19,-25 6,-4 12,-6 19,-6 10,0 20,3 31,9l-11 27c-7,-4 -14,-6 -22,-6 -6,0 -12,2 -17,6 -5,4 -9,9 -11,16 -3,11 -5,22 -5,35l0 92 -30 0z"/>
  <path id="5" className="fil54" d="M2342 1125l0 -34 30 0 0 34 -30 0zm0 208l0 -176 30 0 0 176 -30 0z"/>
  <path id="6" className="fil54" d="M2532 1311c-11,9 -22,16 -32,20 -10,4 -21,6 -33,6 -19,0 -34,-5 -45,-14 -10,-9 -16,-21 -16,-36 0,-9 2,-16 6,-24 4,-7 9,-13 15,-17 6,-4 13,-8 21,-10 6,-2 15,-3 27,-4 24,-3 42,-6 53,-10 0,-4 0,-7 0,-8 0,-12 -3,-21 -8,-26 -8,-7 -19,-10 -34,-10 -14,0 -24,2 -31,7 -7,5 -12,14 -15,26l-29 -4c3,-12 7,-23 13,-30 6,-8 15,-14 26,-18 11,-4 25,-6 40,-6 15,0 27,2 37,5 9,4 16,8 21,13 4,5 7,12 9,20 1,5 1,14 1,27l0 39c0,28 1,45 2,52 1,7 4,14 7,21l-31 0c-3,-6 -5,-14 -6,-22zm-2 -66c-11,4 -27,8 -49,11 -12,2 -21,4 -26,6 -5,2 -9,5 -12,10 -3,4 -4,9 -4,14 0,8 3,14 9,20 6,5 15,8 26,8 11,0 22,-2 31,-7 9,-5 16,-12 20,-20 3,-7 5,-17 5,-30l0 -11z"/>
  
  <polygon className="fil54" points="3331,1392 3331,1150 3363,1150 3363,1364 3482,1364 3482,1392 "/>
  
  <path id="1" className="fil54" d="M3517 1184l0 -34 30 0 0 34 -30 0zm0 208l0 -176 30 0 0 176 -30 0z"/>
  <path id="2" className="fil54" d="M3619 1392l-28 0 0 -242 30 0 0 86c13,-16 29,-24 48,-24 11,0 21,2 31,6 10,4 18,10 24,18 6,8 11,17 15,28 4,11 5,23 5,36 0,30 -7,53 -22,70 -15,16 -33,25 -54,25 -21,0 -37,-9 -49,-26l0 22zm0 -89c0,21 3,36 9,46 9,15 22,23 38,23 13,0 24,-6 34,-17 9,-11 14,-28 14,-50 0,-23 -5,-40 -14,-51 -9,-11 -20,-16 -33,-16 -13,0 -24,6 -34,17 -9,11 -14,28 -14,49z"/>
  <path id="3" className="fil54" d="M3779 1460l-3 -28c7,2 12,3 17,3 7,0 12,-1 16,-3 4,-2 7,-5 10,-9 2,-3 5,-10 9,-22 1,-2 1,-4 3,-7l-67 -176 32 0 37 101c5,13 9,26 13,41 3,-13 8,-27 12,-40l37 -102 30 0 -66 179c-7,19 -13,32 -17,40 -5,10 -11,17 -18,21 -7,5 -15,7 -25,7 -6,0 -12,-1 -19,-4z"/>
  <path id="4" className="fil54" d="M4064 1370c-11,9 -22,16 -32,20 -10,4 -21,6 -33,6 -19,0 -34,-5 -45,-14 -10,-9 -16,-21 -16,-36 0,-9 2,-16 6,-24 4,-7 9,-13 15,-17 6,-4 13,-8 21,-10 6,-2 15,-3 27,-4 24,-3 42,-6 53,-10 0,-4 0,-7 0,-8 0,-12 -3,-21 -8,-26 -8,-7 -19,-10 -34,-10 -14,0 -24,2 -31,7 -7,5 -12,14 -15,26l-29 -4c3,-12 7,-23 13,-30 6,-8 15,-14 26,-18 11,-4 25,-6 40,-6 15,0 27,2 37,5 9,4 16,8 21,13 4,5 7,12 9,20 1,5 1,14 1,27l0 39c0,28 1,45 2,52 1,7 4,14 7,21l-31 0c-3,-6 -5,-14 -6,-22zm-2 -66c-11,4 -27,8 -49,11 -12,2 -21,4 -26,6 -5,2 -9,5 -12,10 -3,4 -4,9 -4,14 0,8 3,14 9,20 6,5 15,8 26,8 11,0 22,-2 31,-7 9,-5 16,-12 20,-20 3,-7 5,-17 5,-30l0 -11z"/>
  
  <polygon className="fil54" points="4630,1533 4630,1309 4791,1309 4791,1336 4659,1336 4659,1405 4783,1405 4783,1431 4659,1431 4659,1507 4797,1507 4797,1533 "/>
  
  <path id="1" className="fil54" d="M4829 1547l27 4c1,8 4,14 9,18 7,5 16,8 28,8 13,0 23,-3 30,-8 7,-5 12,-12 14,-21 1,-6 2,-17 2,-35 -12,14 -27,21 -45,21 -22,0 -40,-8 -52,-24 -12,-16 -18,-35 -18,-58 0,-15 3,-30 8,-43 6,-13 14,-23 24,-30 11,-7 23,-11 38,-11 19,0 35,8 47,23l0 -20 25 0 0 140c0,25 -3,43 -8,54 -5,11 -13,19 -24,25 -11,6 -25,9 -41,9 -19,0 -35,-4 -47,-13 -12,-9 -18,-22 -17,-39zm23 -97c0,21 4,37 13,46 8,10 19,15 32,15 13,0 23,-5 32,-15 9,-10 13,-25 13,-46 0,-20 -4,-35 -13,-45 -9,-10 -19,-15 -32,-15 -12,0 -23,5 -31,15 -9,10 -13,25 -13,44z"/>
  <path id="2" className="fil54" d="M5007 1596l-3 -25c6,2 11,2 16,2 6,0 11,-1 15,-3 4,-2 7,-5 9,-9 2,-3 5,-10 8,-21 1,-2 1,-4 2,-7l-62 -163 29 0 34 94c4,12 8,24 12,37 3,-12 7,-25 11,-37l35 -95 27 0 -61 165c-7,18 -12,30 -15,37 -5,9 -11,16 -17,20 -6,4 -14,6 -23,6 -5,0 -11,-1 -18,-3z"/>
  <path id="3" className="fil54" d="M5164 1596l0 -225 25 0 0 21c6,-8 13,-14 20,-19 7,-4 16,-6 27,-6 14,0 26,4 37,11 11,7 19,17 24,30 5,13 8,27 8,43 0,17 -3,31 -9,45 -6,13 -15,23 -26,30 -11,7 -23,11 -36,11 -9,0 -17,-2 -25,-6 -7,-4 -13,-9 -18,-15l0 79 -28 0zm25 -142c0,21 4,36 13,46 8,10 19,15 31,15 12,0 23,-5 31,-15 9,-10 13,-26 13,-48 0,-21 -4,-36 -13,-46 -8,-10 -19,-15 -30,-15 -12,0 -22,5 -31,16 -9,11 -13,27 -13,48z"/>
  <path id="4" className="fil54" d="M5398 1509l4 24c-8,2 -15,2 -21,2 -10,0 -18,-2 -23,-5 -5,-3 -9,-7 -12,-12 -2,-5 -3,-16 -3,-33l0 -94 -20 0 0 -21 20 0 0 -40 28 -17 0 57 28 0 0 21 -28 0 0 95c0,8 0,13 1,15 1,2 2,4 5,5 2,1 5,2 9,2 3,0 7,0 12,-1z"/>
  <path className="fil54" d="M4546 2561l30 -3c1,12 5,22 10,30 5,8 13,14 24,19 11,5 23,7 37,7 12,0 23,-2 32,-5 9,-4 16,-9 21,-15 5,-6 7,-13 7,-21 0,-8 -2,-14 -7,-20 -4,-6 -12,-10 -22,-14 -6,-2 -21,-6 -43,-12 -22,-5 -38,-10 -47,-15 -12,-6 -20,-14 -26,-23 -6,-9 -9,-19 -9,-30 0,-12 3,-24 10,-34 7,-11 17,-19 30,-24 13,-6 28,-8 44,-8 18,0 34,3 47,9 14,6 24,14 32,26 7,11 11,24 12,38l-31 2c-2,-15 -7,-27 -17,-35 -10,-8 -24,-12 -42,-12 -19,0 -34,4 -42,11 -9,7 -13,16 -13,26 0,9 3,16 9,21 6,6 22,11 48,17 26,6 44,11 54,15 14,6 24,15 31,25 7,10 10,21 10,34 0,13 -4,25 -11,36 -7,11 -18,20 -32,27 -14,6 -29,9 -47,9 -22,0 -40,-3 -55,-10 -15,-6 -26,-16 -35,-29 -8,-13 -13,-27 -13,-43z"/>
  <path id="1" className="fil54" d="M4893 2639l0 -26c-14,20 -32,30 -56,30 -10,0 -20,-2 -29,-6 -9,-4 -16,-9 -20,-15 -4,-6 -7,-13 -9,-22 -1,-6 -2,-15 -2,-28l0 -109 30 0 0 97c0,16 1,26 2,31 2,8 6,14 12,18 6,4 13,7 22,7 9,0 17,-2 25,-7 8,-5 13,-11 17,-19 3,-8 5,-19 5,-34l0 -94 30 0 0 176 -27 0z"/>
  <path id="2" className="fil54" d="M5080 2639l0 -22c-11,17 -27,26 -49,26 -14,0 -27,-4 -39,-12 -12,-8 -21,-18 -27,-32 -6,-14 -10,-30 -10,-48 0,-17 3,-33 9,-48 6,-14 15,-25 26,-33 12,-8 25,-11 39,-11 11,0 20,2 28,7 8,4 15,10 20,17l0 -87 30 0 0 242 -28 0zm-94 -88c0,22 5,39 14,50 9,11 21,17 34,17 13,0 24,-5 33,-16 9,-11 14,-27 14,-49 0,-24 -5,-42 -14,-53 -9,-11 -21,-17 -34,-17 -13,0 -24,5 -33,16 -9,11 -13,28 -13,51z"/>
  <path id="3" className="fil54" d="M5270 2617c-11,9 -22,16 -32,20 -10,4 -21,6 -33,6 -19,0 -34,-5 -45,-14 -10,-9 -16,-21 -16,-36 0,-9 2,-16 6,-24 4,-7 9,-13 15,-17 6,-4 13,-8 21,-10 6,-2 15,-3 27,-4 24,-3 42,-6 53,-10 0,-4 0,-7 0,-8 0,-12 -3,-21 -8,-26 -8,-7 -19,-10 -34,-10 -14,0 -24,2 -31,7 -7,5 -12,14 -15,26l-29 -4c3,-12 7,-23 13,-30 6,-8 15,-14 26,-18 11,-4 25,-6 40,-6 15,0 27,2 37,5 9,4 16,8 21,13 4,5 7,12 9,20 1,5 1,14 1,27l0 39c0,28 1,45 2,52 1,7 4,14 7,21l-31 0c-3,-6 -5,-14 -6,-22zm-2 -66c-11,4 -27,8 -49,11 -12,2 -21,4 -26,6 -5,2 -9,5 -12,10 -3,4 -4,9 -4,14 0,8 3,14 9,20 6,5 15,8 26,8 11,0 22,-2 31,-7 9,-5 16,-12 20,-20 3,-7 5,-17 5,-30l0 -11z"/>
  <path id="4" className="fil54" d="M5343 2639l0 -176 27 0 0 25c13,-19 31,-29 56,-29 11,0 20,2 29,6 9,4 16,9 20,15 4,6 8,13 9,22 1,6 2,15 2,29l0 108 -30 0 0 -107c0,-12 -1,-21 -3,-27 -2,-6 -6,-11 -12,-14 -6,-4 -13,-5 -21,-5 -13,0 -24,4 -33,12 -9,8 -14,23 -14,46l0 96 -30 0z"/>
  <path className="fil54" d="M1422 2489l0 -242 48 0 57 172c5,16 9,28 12,36 3,-9 7,-22 13,-39l58 -169 43 0 0 242 -31 0 0 -203 -71 203 -29 0 -70 -206 0 206 -31 0z"/>
  <path id="1" className="fil54" d="M1816 2467c-11,9 -22,16 -32,20 -10,4 -21,6 -33,6 -19,0 -34,-5 -45,-14 -10,-9 -16,-21 -16,-36 0,-9 2,-16 6,-24 4,-7 9,-13 15,-17 6,-4 13,-8 21,-10 6,-2 15,-3 27,-4 24,-3 42,-6 53,-10 0,-4 0,-7 0,-8 0,-12 -3,-21 -8,-26 -8,-7 -19,-10 -34,-10 -14,0 -24,2 -31,7 -7,5 -12,14 -15,26l-29 -4c3,-12 7,-23 13,-30 6,-8 15,-14 26,-18 11,-4 25,-6 40,-6 15,0 27,2 37,5 9,4 16,8 21,13 4,5 7,12 9,20 1,5 1,14 1,27l0 39c0,28 1,45 2,52 1,7 4,14 7,21l-31 0c-3,-6 -5,-14 -6,-22zm-2 -66c-11,4 -27,8 -49,11 -12,2 -21,4 -26,6 -5,2 -9,5 -12,10 -3,4 -4,9 -4,14 0,8 3,14 9,20 6,5 15,8 26,8 11,0 22,-2 31,-7 9,-5 16,-12 20,-20 3,-7 5,-17 5,-30l0 -11z"/>
  <path id="2" className="fil54" d="M1889 2281l0 -34 30 0 0 34 -30 0zm0 208l0 -176 30 0 0 176 -30 0z"/>
  
  <polygon id="3" className="fil54" points="1964,2489 1964,2247 1993,2247 1993,2489 "/>
  <polygon className="fil54" points="2525,2515 2525,2272 2558,2272 2685,2463 2685,2272 2716,2272 2716,2515 2683,2515 2555,2324 2555,2515 "/>
  
  <path id="1" className="fil54" d="M2766 2306l0 -34 30 0 0 34 -30 0zm0 208l0 -176 30 0 0 176 -30 0z"/>
  <path id="2" className="fil54" d="M2835 2529l29 4c1,9 5,15 10,20 7,5 17,8 30,8 14,0 24,-3 32,-8 8,-5 13,-13 15,-23 2,-6 2,-19 2,-38 -13,15 -29,23 -49,23 -24,0 -43,-9 -56,-26 -13,-17 -20,-38 -20,-63 0,-17 3,-32 9,-46 6,-14 15,-25 26,-33 12,-8 25,-12 41,-12 21,0 38,8 51,25l0 -22 27 0 0 152c0,27 -3,47 -8,58 -6,11 -14,20 -26,27 -12,7 -27,10 -45,10 -21,0 -38,-5 -51,-14 -13,-9 -19,-24 -19,-42zm24 -105c0,23 5,40 14,50 9,11 21,16 34,16 14,0 25,-5 34,-16 9,-10 14,-27 14,-49 0,-21 -5,-38 -14,-49 -10,-11 -21,-16 -34,-16 -13,0 -24,5 -34,16 -9,11 -14,27 -14,48z"/>
  <path id="3" className="fil54" d="M3149 2458l31 4c-5,18 -14,32 -27,42 -13,10 -30,15 -50,15 -26,0 -46,-8 -61,-24 -15,-16 -23,-38 -23,-66 0,-29 8,-52 23,-69 15,-16 35,-24 59,-24 23,0 43,8 57,24 15,16 22,38 22,67 0,2 0,4 0,8l-131 0c1,19 7,34 16,44 10,10 22,15 37,15 11,0 20,-3 28,-9 8,-6 14,-15 18,-28zm-97 -48l98 0c-1,-15 -5,-26 -11,-33 -9,-11 -22,-17 -37,-17 -14,0 -25,5 -34,14 -9,9 -14,21 -15,37z"/>
  <path id="4" className="fil54" d="M3217 2515l0 -176 27 0 0 27c7,-12 13,-21 19,-25 6,-4 12,-6 19,-6 10,0 20,3 31,9l-11 27c-7,-4 -14,-6 -22,-6 -6,0 -12,2 -17,6 -5,4 -9,9 -11,16 -3,11 -5,22 -5,35l0 92 -30 0z"/>
  <path className="fil54" d="M1405 3197l-41 -66 23 -13c5,-3 9,-4 13,-5 4,0 7,0 11,2 3,2 6,4 8,7 2,3 3,6 3,9 0,3 -1,7 -3,10 4,-1 9,-1 12,1 4,2 7,4 9,8 2,3 3,6 4,10 0,3 0,6 -1,9 -1,2 -2,5 -5,7 -2,2 -5,5 -9,7l-24 14zm-16 -43l13 -8c4,-2 6,-4 7,-5 2,-2 3,-4 3,-6 0,-2 -1,-4 -2,-7 -1,-2 -3,-4 -5,-5 -2,-1 -4,-1 -6,-1 -2,0 -6,2 -10,4l-12 7 12 20zm19 31l15 -9c3,-2 4,-3 5,-4 2,-1 3,-3 4,-5 1,-2 1,-3 1,-6 0,-2 -1,-4 -2,-6 -2,-2 -3,-4 -6,-5 -2,-1 -5,-1 -7,-1 -3,0 -6,2 -10,4l-14 8 14 23z"/>
  <path id="1" className="fil54" d="M1491 3148l-4 -7c0,7 -3,13 -9,16 -3,2 -5,2 -8,3 -3,0 -6,0 -8,-1 -2,-1 -4,-3 -6,-5 -1,-1 -3,-4 -5,-7l-18 -30 8 -4 16 27c3,4 5,7 6,8 2,2 4,3 6,3 2,0 5,0 7,-1 2,-1 4,-3 5,-6 1,-2 2,-5 1,-8 -1,-3 -2,-6 -5,-10l-16 -26 8 -4 30 48 -7 4z"/>
  <path id="2" className="fil54" d="M1510 3137l-30 -48 7 -4 5 7c0,-4 0,-8 1,-10 1,-2 2,-3 4,-4 3,-1 6,-2 9,-2l2 9c-3,0 -5,0 -7,2 -2,1 -3,2 -3,4 -1,2 -1,4 0,6 1,3 2,7 5,10l16 25 -8 4z"/>
  
  <polygon id="3" className="fil54" points="1539,3120 1498,3054 1505,3050 1529,3087 1535,3057 1545,3052 1538,3080 1576,3099 1567,3104 1537,3088 1535,3097 1546,3116 "/>
  
  <path id="4" className="fil54" d="M1547 3038l-6 -9 8 -4 6 9 -8 4zm35 57l-30 -48 8 -4 30 48 -8 4z"/>
  <path id="5" className="fil54" d="M1601 3084l-30 -48 7 -4 4 7c0,-7 3,-12 9,-16 3,-2 6,-2 8,-3 3,0 5,0 8,1 2,1 4,3 6,5 1,1 3,4 5,8l18 29 -8 4 -18 -29c-2,-3 -4,-6 -5,-7 -2,-1 -3,-2 -6,-2 -2,0 -4,0 -6,2 -3,2 -5,5 -6,8 -1,4 0,8 4,15l16 26 -8 4z"/>
  <path id="6" className="fil54" d="M1675 3034c-1,4 -3,8 -5,10 -2,3 -4,5 -7,6 -5,3 -10,4 -14,3 -4,-1 -8,-4 -10,-8 -1,-2 -2,-5 -2,-7 0,-3 0,-5 1,-7 1,-2 2,-4 4,-6 1,-1 3,-3 6,-5 6,-4 10,-8 12,-11 -1,-1 -1,-2 -1,-2 -2,-3 -4,-5 -6,-6 -3,-1 -7,0 -10,2 -4,2 -6,4 -7,7 -1,2 -1,5 1,9l-8 3c-1,-4 -2,-7 -2,-10 0,-3 2,-6 4,-9 2,-3 5,-5 9,-8 4,-2 7,-4 10,-4 3,0 6,0 8,1 2,1 4,2 6,4 1,1 3,4 5,7l7 11c5,8 8,12 9,14 2,2 3,3 5,5l-8 5c-2,-1 -4,-3 -5,-5zm-12 -18c-2,3 -6,6 -11,10 -3,2 -5,4 -6,5 -1,1 -1,3 -1,4 0,2 0,3 1,4 1,2 3,4 6,4 2,1 5,0 8,-2 3,-2 5,-4 7,-7 1,-3 2,-6 2,-8 0,-2 -2,-5 -4,-9l-2 -3z"/>
  
  <polygon id="7" className="fil54" points="1723,3014 1682,2948 1723,2924 1728,2932 1695,2951 1708,2972 1737,2955 1741,2963 1712,2979 1731,3010 "/>
  
  <path id="8" className="fil54" d="M1800 2962c-1,4 -3,8 -5,10 -2,3 -4,5 -7,6 -5,3 -10,4 -14,3 -4,-1 -8,-4 -10,-8 -1,-2 -2,-5 -2,-7 0,-3 0,-5 1,-7 1,-2 2,-4 4,-6 1,-1 3,-3 6,-5 6,-4 10,-8 12,-11 -1,-1 -1,-2 -1,-2 -2,-3 -4,-5 -6,-6 -3,-1 -7,0 -10,2 -4,2 -6,4 -7,7 -1,2 -1,5 1,9l-8 3c-1,-4 -2,-7 -2,-10 0,-3 2,-6 4,-9 2,-3 5,-5 9,-8 4,-2 7,-4 10,-4 3,0 6,0 8,1 2,1 4,2 6,4 1,1 3,4 5,7l7 11c5,8 8,12 9,14 2,2 3,3 5,5l-8 5c-2,-1 -4,-3 -5,-5zm-12 -18c-2,3 -6,6 -11,10 -3,2 -5,4 -6,5 -1,1 -1,3 -1,4 0,2 0,3 1,4 1,2 3,4 6,4 2,1 5,0 8,-2 3,-2 5,-4 7,-7 1,-3 2,-6 2,-8 0,-2 -2,-5 -4,-9l-2 -3z"/>
  <path id="9" className="fil54" d="M1810 2944l7 -6c2,3 5,5 8,5 3,1 6,0 10,-2 4,-2 6,-4 6,-7 1,-2 0,-5 -1,-7 -1,-2 -3,-3 -5,-3 -2,0 -5,0 -9,2 -6,2 -11,3 -14,3 -3,0 -5,0 -8,-2 -2,-1 -4,-3 -6,-5 -1,-2 -2,-4 -2,-7 0,-2 0,-5 1,-7 1,-2 2,-3 3,-5 2,-2 4,-3 6,-5 4,-2 7,-3 10,-4 3,0 6,0 9,1 2,1 5,3 7,6l-7 5c-2,-2 -4,-4 -7,-4 -2,0 -5,0 -8,2 -3,2 -6,4 -6,6 -1,2 -1,4 0,6 1,1 2,2 3,2 1,1 3,1 4,0 1,0 4,-1 8,-2 6,-2 11,-2 14,-3 3,0 5,0 8,1 2,1 4,3 6,6 2,3 3,6 3,9 0,3 -1,6 -3,9 -2,3 -5,5 -8,7 -6,3 -11,5 -16,4 -5,-1 -9,-4 -13,-8z"/>
  <path id="10" className="fil54" d="M1848 2910c-5,-9 -7,-17 -5,-24 2,-6 5,-10 11,-13 6,-4 13,-4 19,-2 7,2 12,7 17,15 4,6 6,12 6,16 0,5 0,9 -2,13 -2,4 -5,7 -9,9 -6,4 -13,4 -19,2 -7,-2 -12,-7 -17,-15zm8 -4c4,6 8,10 12,12 4,2 9,1 12,-1 4,-2 6,-6 7,-10 1,-5 -1,-10 -5,-16 -4,-6 -8,-10 -12,-11 -4,-2 -8,-1 -12,1 -4,2 -6,6 -7,10 -1,4 1,10 5,16z"/>
  <path className="fil54" d="M3938 7662l18 -14c6,7 12,12 18,15 6,3 14,4 23,2 9,-1 18,-5 26,-10 8,-5 14,-10 18,-16 4,-6 7,-12 7,-18 0,-6 -1,-11 -4,-16 -3,-5 -7,-8 -12,-10 -5,-2 -12,-2 -19,0 -5,1 -16,4 -32,10 -16,5 -28,8 -35,9 -10,1 -18,-1 -25,-4 -7,-3 -13,-9 -17,-16 -5,-8 -7,-16 -7,-26 0,-9 3,-19 10,-27 6,-9 14,-16 25,-23 11,-7 22,-12 33,-13 11,-2 21,-1 30,4 9,4 17,11 23,19l-18 14c-7,-9 -15,-14 -24,-15 -9,-1 -20,2 -31,9 -12,8 -20,16 -22,24 -3,8 -2,15 2,22 3,5 8,9 14,10 6,1 19,-2 37,-8 19,-7 32,-10 40,-12 11,-2 21,0 30,3 8,4 15,10 20,18 5,8 8,17 7,27 0,10 -3,20 -9,29 -6,10 -15,18 -26,25 -14,9 -27,14 -39,16 -12,2 -23,0 -33,-4 -10,-5 -19,-12 -26,-22z"/>
  <path id="1" className="fil54" d="M4073 7567c-13,-20 -17,-39 -12,-56 4,-14 13,-26 27,-34 15,-10 31,-12 47,-9 16,4 29,15 41,32 9,14 14,27 15,38 1,11 -1,21 -7,31 -5,10 -13,18 -22,24 -16,10 -31,13 -47,9 -16,-4 -30,-15 -41,-34zm19 -12c9,14 19,23 29,26 11,3 21,2 30,-4 9,-6 15,-14 17,-25 2,-11 -2,-24 -11,-38 -9,-14 -18,-22 -29,-25 -11,-3 -21,-2 -30,4 -9,6 -15,14 -17,25 -2,11 2,23 11,38z"/>
  <path id="2" className="fil54" d="M4306 7496l-10 -16c-1,18 -8,32 -23,41 -7,4 -13,7 -21,8 -7,1 -13,1 -19,-1 -5,-2 -10,-5 -15,-10 -3,-3 -7,-9 -12,-17l-43 -69 19 -12 39 61c6,10 11,16 14,19 4,4 9,6 15,7 6,0 11,-1 17,-5 6,-4 10,-8 13,-14 3,-6 4,-12 3,-18 -1,-6 -5,-14 -11,-24l-37 -59 19 -12 70 111 -17 11z"/>
  <path id="3" className="fil54" d="M4382 7424l13 15c-5,4 -9,8 -13,11 -7,4 -13,7 -18,7 -5,0 -9,-1 -13,-3 -4,-3 -9,-9 -16,-21l-40 -64 -14 9 -9 -15 14 -9 -17 -27 12 -23 24 39 19 -12 9 15 -19 12 41 65c3,5 6,9 8,10 2,1 3,2 6,2 2,0 5,-1 7,-3 2,-1 5,-3 8,-6z"/>
  <path id="4" className="fil54" d="M4411 7429l-96 -153 19 -12 35 55c2,-16 10,-28 24,-36 8,-5 16,-8 24,-9 8,-1 15,1 21,5 6,4 13,12 20,22l44 70 -19 12 -44 -70c-6,-9 -12,-15 -19,-17 -7,-2 -14,0 -21,4 -6,3 -10,8 -13,14 -3,6 -4,12 -3,18 1,6 4,14 10,22l38 61 -19 12z"/>
  <path id="5" className="fil54" d="M4562 7332l-38 -190 22 -14 159 113 -23 15 -47 -35 -64 40 12 57 -21 14zm5 -91l52 -33 -43 -32c-13,-10 -23,-18 -31,-25 4,11 8,22 10,34l11 55z"/>
  <path id="6" className="fil54" d="M4723 7229l-61 -96 -17 10 -9 -15 17 -10 -7 -12c-5,-7 -7,-13 -8,-18 -1,-6 -1,-12 2,-18 3,-6 8,-11 16,-17 5,-3 12,-6 19,-9l7 18c-4,2 -8,4 -12,6 -6,4 -9,7 -10,11 -1,4 1,9 5,16l6 10 22 -14 9 15 -22 14 61 96 -19 12z"/>
  <path id="7" className="fil54" d="M4777 7194l-70 -111 17 -11 11 17c-1,-11 0,-18 2,-23 2,-5 5,-9 10,-11 6,-4 14,-6 23,-6l4 21c-6,0 -12,2 -16,5 -4,3 -7,6 -9,11 -2,4 -2,9 -1,15 2,8 6,16 11,24l37 58 -19 12z"/>
  <path id="8" className="fil54" d="M4765 7018l-14 -22 19 -12 14 22 -19 12zm83 131l-70 -111 19 -12 70 111 -19 12z"/>
  <path id="9" className="fil54" d="M4942 7033l20 -9c6,14 7,27 3,40 -4,12 -12,22 -24,30 -15,10 -30,12 -46,8 -15,-4 -29,-15 -41,-34 -8,-12 -12,-24 -14,-35 -2,-11 0,-22 5,-32 5,-10 13,-17 22,-23 12,-8 24,-11 35,-9 11,1 22,7 31,17l-16 14c-6,-6 -13,-10 -20,-11 -7,-1 -13,1 -20,4 -9,6 -15,14 -17,25 -2,10 2,23 11,38 9,15 19,24 29,27 10,3 20,2 29,-4 7,-5 12,-11 14,-18 2,-8 1,-17 -4,-27z"/>
  <path id="10" className="fil54" d="M5065 6991c-3,10 -7,19 -12,25 -5,6 -11,12 -18,17 -12,8 -23,11 -34,9 -10,-2 -18,-7 -24,-17 -3,-5 -5,-11 -6,-17 0,-6 1,-12 3,-17 2,-5 5,-10 10,-15 3,-3 8,-8 15,-13 14,-11 24,-21 29,-28 -2,-3 -3,-4 -3,-5 -5,-8 -10,-12 -16,-13 -7,-1 -16,1 -25,7 -9,6 -14,11 -17,17 -2,6 -2,13 1,22l-20 9c-3,-9 -5,-17 -4,-24 1,-7 4,-14 10,-22 6,-7 13,-14 23,-20 9,-6 18,-10 25,-11 7,-2 13,-1 18,0 5,2 10,5 14,9 3,3 7,8 12,17l16 25c11,17 18,28 22,32 4,4 8,8 13,10l-20 12c-4,-3 -8,-6 -12,-11zm-28 -41c-5,7 -14,16 -26,26 -7,6 -12,11 -14,14 -2,3 -3,7 -4,11 0,4 1,7 3,11 3,5 8,8 14,9 6,1 12,-1 20,-5 7,-5 13,-10 16,-17 4,-7 5,-14 4,-21 -1,-6 -4,-12 -9,-21l-4 -7z"/>
  
  <polygon className="fil54" points="3478,6191 3672,6139 3679,6166 3554,6310 3707,6269 3713,6294 3519,6346 3512,6319 3637,6175 3485,6216 "/>
  
  <path id="1" className="fil54" d="M3572 6475c-10,-7 -17,-14 -23,-22 -5,-7 -9,-16 -12,-25 -4,-16 -4,-29 2,-39 5,-10 14,-17 26,-20 7,-2 14,-2 20,0 7,2 12,5 17,9 5,4 9,9 12,15 2,4 6,11 9,21 7,19 14,33 20,41 3,-1 5,-1 6,-1 10,-3 16,-7 19,-12 4,-8 4,-18 1,-30 -3,-11 -7,-19 -13,-24 -5,-4 -13,-7 -24,-7l-3 -24c11,0 20,1 27,4 7,3 14,9 20,18 6,8 10,19 14,31 3,12 4,22 4,31 -1,8 -3,15 -6,20 -3,5 -8,9 -14,12 -4,2 -11,4 -22,7l-32 8c-22,6 -36,10 -42,13 -6,3 -11,6 -15,10l-7 -25c4,-4 10,-7 16,-9zm52 -16c-6,-8 -12,-20 -19,-37 -4,-10 -7,-16 -10,-20 -3,-4 -6,-6 -10,-7 -4,-1 -8,-1 -12,0 -6,2 -11,5 -14,11 -3,6 -3,14 -1,23 2,9 7,17 13,23 6,6 13,10 21,12 6,1 14,0 25,-2l9 -2z"/>
  <path id="2" className="fil54" d="M3570 6539l141 -37 6 22 -20 5c8,3 15,7 21,13 6,6 10,14 13,24 3,11 3,20 0,28 -3,8 -7,14 -14,19 19,7 31,20 36,38 4,14 3,26 -3,36 -6,10 -17,17 -33,21l-97 25 -6 -24 89 -23c9,-3 16,-5 20,-8 4,-3 6,-6 8,-11 1,-5 1,-10 0,-16 -3,-10 -8,-18 -16,-22 -8,-5 -20,-5 -34,-2l-82 22 -6 -24 91 -24c11,-3 18,-7 22,-12 4,-5 5,-12 3,-21 -2,-7 -5,-13 -10,-17 -5,-5 -11,-8 -19,-8 -7,-1 -18,1 -30,4l-73 19 -6 -24z"/>
  <path id="3" className="fil54" d="M3797 6724l27 -7 6 24 -27 7 -6 -24zm-167 44l141 -37 6 24 -141 37 -6 -24z"/>
  <path id="4" className="fil54" d="M3652 6851l-6 -23 194 -51 6 24 -69 18c15,7 25,18 29,34 2,9 3,18 1,26 -1,9 -5,16 -10,23 -5,7 -12,13 -20,18 -8,5 -17,9 -27,12 -24,6 -44,5 -61,-3 -16,-9 -27,-21 -31,-38 -4,-17 -1,-32 10,-45l-18 5zm71 -19c-17,4 -28,10 -35,17 -10,11 -14,23 -10,36 3,11 10,18 21,24 11,5 26,6 43,1 18,-5 31,-12 38,-22 7,-10 9,-20 6,-30 -3,-11 -10,-18 -21,-24 -11,-5 -25,-6 -42,-1z"/>
  <path id="5" className="fil54" d="M3854 6937l27 -7 6 24 -27 7 -6 -24zm-167 44l141 -37 6 24 -141 37 -6 -24z"/>
  <path id="6" className="fil54" d="M3745 7131c-10,-7 -17,-14 -23,-22 -5,-7 -9,-16 -12,-25 -4,-16 -4,-29 2,-39 5,-10 14,-17 26,-20 7,-2 14,-2 20,0 7,2 12,5 17,9 5,4 9,9 12,15 2,4 6,11 9,21 7,19 14,33 20,41 3,-1 5,-1 6,-1 10,-3 16,-7 19,-12 4,-8 4,-18 1,-30 -3,-11 -7,-19 -13,-24 -5,-4 -13,-7 -24,-7l-3 -24c11,0 20,1 27,4 7,3 14,9 20,18 6,8 10,19 14,31 3,12 4,22 4,31 -1,8 -3,15 -6,20 -3,5 -8,9 -14,12 -4,2 -11,4 -22,7l-32 8c-22,6 -36,10 -42,13 -6,3 -11,6 -15,10l-7 -25c4,-4 10,-7 16,-9zm52 -16c-6,-8 -12,-20 -19,-37 -4,-10 -7,-16 -10,-20 -3,-4 -6,-6 -10,-7 -4,-1 -8,-1 -12,0 -6,2 -11,5 -14,11 -3,6 -3,14 -1,23 2,9 7,17 13,23 6,6 13,10 21,12 6,1 14,0 25,-2l9 -2z"/>
  <path className="fil54" d="M3346 5271l180 -140 26 16 -35 227 -27 -17 12 -68 -76 -46 -53 43 -26 -15zm98 -43l62 37 11 -62c3,-19 7,-34 10,-46 -9,10 -20,20 -31,29l-52 41z"/>
  <path id="1" className="fil54" d="M3532 5383l80 -132 20 12 -11 19c18,-9 37,-7 55,4 8,5 14,11 19,18 5,7 8,14 8,20 0,7 0,14 -3,21 -2,5 -6,12 -12,22l-49 81 -22 -13 48 -80c5,-9 9,-16 10,-22 1,-6 0,-11 -3,-16 -3,-5 -7,-10 -13,-13 -9,-6 -20,-8 -30,-6 -11,2 -21,11 -31,28l-43 72 -22 -14z"/>
  <path id="2" className="fil54" d="M3663 5477l20 16c-3,7 -4,14 -1,19 3,7 9,14 19,20 10,6 20,9 28,8 8,-1 15,-4 22,-10 4,-4 10,-13 19,-28 -17,6 -32,4 -47,-5 -18,-11 -28,-26 -30,-45 -2,-19 2,-38 13,-56 8,-13 17,-23 28,-31 11,-8 23,-12 35,-13 12,-1 24,3 36,10 16,9 25,23 27,42l10 -16 21 12 -69 114c-12,20 -23,34 -33,40 -9,6 -20,9 -32,8 -12,0 -25,-5 -38,-13 -16,-10 -26,-21 -32,-34 -5,-13 -4,-26 5,-40zm66 -68c-10,17 -15,32 -13,44 2,12 8,21 19,27 10,6 21,7 33,4 12,-4 23,-14 33,-31 10,-16 13,-30 11,-43 -2,-13 -8,-22 -18,-28 -10,-6 -21,-7 -33,-3 -12,4 -23,14 -32,30z"/>
  <path id="3" className="fil54" d="M3847 5483c15,-24 32,-38 53,-42 17,-3 34,1 50,10 18,11 29,26 34,45 4,19 0,39 -12,60 -10,17 -21,29 -32,35 -11,7 -23,10 -36,9 -13,0 -25,-4 -37,-11 -18,-11 -30,-26 -34,-45 -4,-19 0,-39 14,-61zm23 14c-10,17 -14,32 -12,45 2,13 9,23 20,29 11,7 23,8 35,4 12,-4 24,-15 34,-32 10,-16 14,-31 11,-44 -2,-13 -9,-23 -20,-29 -11,-7 -23,-8 -35,-4 -12,4 -24,14 -34,31z"/>
  
  <polygon id="4" className="fil54" points="3956,5638 4066,5457 4088,5470 3979,5652 "/>
  
  <path id="5" className="fil54" d="M4109 5708c-13,2 -23,2 -33,0 -9,-2 -18,-5 -27,-11 -14,-9 -23,-19 -27,-31 -4,-12 -2,-23 5,-34 4,-6 9,-11 15,-15 6,-4 13,-6 19,-6 7,0 14,0 20,2 5,1 12,4 22,9 19,9 34,14 44,16 2,-3 3,-5 4,-6 5,-9 7,-17 5,-23 -3,-8 -10,-16 -21,-23 -10,-6 -19,-9 -27,-9 -7,1 -15,5 -23,13l-20 -16c8,-8 15,-14 23,-17 8,-3 17,-3 28,-1 10,2 21,7 33,13 11,7 20,14 25,21 5,7 9,13 9,19 1,6 0,12 -2,19 -2,4 -5,11 -11,21l-18 30c-13,21 -20,34 -22,40 -2,6 -4,12 -4,19l-23 -14c0,-6 2,-12 5,-19zm28 -51c-10,-2 -24,-6 -42,-14 -10,-4 -17,-7 -22,-7 -5,-1 -9,0 -13,2 -4,2 -7,5 -10,9 -4,6 -4,12 -2,19 2,7 8,13 16,18 9,5 17,8 26,8 9,0 17,-2 24,-7 5,-4 11,-10 17,-20l5 -8z"/>
  <path className="fil54" d="M3837 4791l-62 -97 33 -21c8,-5 14,-8 18,-10 6,-2 13,-3 19,-2 8,1 15,4 22,9 7,5 13,12 18,21 5,7 8,14 10,21 2,7 3,13 2,18 0,5 -1,10 -3,14 -2,4 -5,8 -8,12 -4,4 -9,8 -15,12l-35 22zm6 -20l21 -13c6,-4 11,-8 14,-11 3,-3 5,-7 5,-11 1,-5 1,-11 -1,-17 -2,-6 -5,-13 -9,-20 -6,-10 -13,-17 -20,-20 -7,-3 -13,-4 -19,-3 -4,1 -10,4 -18,9l-20 13 47 74z"/>
  <path id="1" className="fil54" d="M3967 4676l13 -6c3,8 3,16 0,24 -3,7 -8,14 -16,19 -10,7 -20,9 -30,6 -10,-3 -19,-9 -26,-21 -8,-12 -10,-23 -8,-33 2,-10 8,-19 17,-25 9,-6 19,-8 29,-5 10,3 19,10 26,21 0,1 1,2 2,3l-52 33c5,7 11,12 18,14 7,2 13,1 19,-3 4,-3 7,-6 9,-11 2,-4 2,-9 0,-16zm-51 6l39 -25c-4,-6 -9,-9 -13,-10 -7,-2 -13,-1 -19,2 -5,3 -9,8 -10,14 -1,6 0,12 3,19z"/>
  <path id="2" className="fil54" d="M4008 4681l-45 -70 11 -7 6 10c0,-5 1,-9 4,-14 2,-4 6,-8 11,-11 5,-3 10,-5 15,-5 5,0 9,2 13,5 0,-12 5,-20 14,-26 7,-4 14,-6 20,-4 6,1 12,6 17,14l31 48 -12 8 -28 -44c-3,-5 -6,-8 -8,-10 -2,-2 -5,-2 -7,-2 -3,0 -6,1 -8,3 -5,3 -8,7 -9,13 -1,5 1,12 5,19l26 41 -12 8 -29 -46c-3,-5 -7,-9 -10,-10 -4,-1 -8,-1 -12,2 -3,2 -6,5 -8,9 -2,4 -2,7 -1,12 1,4 3,10 7,16l23 36 -12 8z"/>
  <path id="3" className="fil54" d="M4094 4576c-8,-13 -11,-25 -8,-36 3,-9 8,-16 17,-22 10,-6 20,-8 30,-6 10,2 19,9 26,20 6,9 9,17 10,24 1,7 -1,13 -4,20 -3,6 -8,11 -14,15 -10,6 -20,8 -30,6 -10,-2 -19,-10 -26,-21zm12 -8c6,9 12,15 19,16 7,2 13,1 19,-3 6,-4 9,-9 10,-16 1,-7 -1,-15 -7,-24 -6,-9 -12,-14 -19,-16 -7,-2 -13,-1 -19,3 -6,4 -9,9 -11,16 -1,7 1,15 7,24z"/>
  <path id="4" className="fil54" d="M4225 4505l13 -6c4,9 5,17 2,25 -2,8 -7,14 -15,19 -10,6 -19,8 -29,5 -10,-3 -19,-10 -26,-21 -5,-8 -8,-15 -9,-22 -1,-7 0,-14 3,-20 3,-6 8,-11 14,-15 8,-5 15,-7 22,-6 7,1 14,4 20,11l-10 9c-4,-4 -8,-6 -13,-7 -4,-1 -8,0 -12,3 -6,4 -9,9 -11,16 -1,7 1,15 7,24 6,9 12,15 19,17 6,2 12,1 18,-3 5,-3 8,-7 9,-12 1,-5 0,-11 -2,-17z"/>
  <path id="5" className="fil54" d="M4263 4517l-45 -70 11 -7 7 11c0,-7 0,-12 1,-15 1,-3 3,-5 6,-7 4,-3 9,-4 15,-4l3 14c-4,0 -7,1 -10,3 -3,2 -4,4 -6,7 -1,3 -1,6 0,9 1,5 4,10 7,15l23 37 -12 8z"/>
  <path id="6" className="fil54" d="M4349 4450c-2,7 -5,12 -8,16 -3,4 -7,8 -12,11 -8,5 -15,7 -21,6 -7,-1 -12,-5 -15,-11 -2,-3 -3,-7 -4,-11 0,-4 0,-7 2,-11 1,-3 3,-6 6,-9 2,-2 5,-5 9,-9 9,-7 15,-13 19,-18 -1,-2 -2,-3 -2,-3 -3,-5 -6,-8 -10,-8 -5,-1 -10,1 -16,5 -6,4 -9,7 -11,11 -1,4 -1,8 1,14l-13 6c-2,-6 -3,-11 -2,-15 0,-5 2,-9 6,-14 4,-5 8,-9 14,-13 6,-4 11,-6 16,-7 5,-1 9,-1 12,0 3,1 6,3 9,6 2,2 4,5 8,11l10 16c7,11 12,18 14,21 2,3 5,5 8,7l-12 8c-3,-2 -5,-4 -8,-7zm-18 -26c-3,5 -9,10 -17,17 -4,4 -7,7 -9,9 -1,2 -2,4 -2,7 0,2 1,5 2,7 2,3 5,5 9,6 4,1 8,-1 13,-4 5,-3 8,-7 10,-11 2,-4 3,-9 3,-13 0,-4 -2,-8 -6,-13l-3 -4z"/>
  <path id="7" className="fil54" d="M4403 4412l8 9c-3,3 -6,5 -8,7 -4,3 -8,4 -11,4 -3,0 -6,-1 -8,-2 -2,-2 -6,-6 -10,-13l-26 -40 -9 6 -6 -9 9 -6 -11 -17 7 -15 16 25 12 -8 6 9 -12 8 26 41c2,3 4,5 5,6 1,1 2,1 4,1 1,0 3,-1 5,-2 1,-1 3,-2 5,-4z"/>
  <path id="8" className="fil54" d="M4368 4332l-9 -14 12 -8 9 14 -12 8zm53 83l-45 -70 12 -8 45 70 -12 8z"/>
  <path id="9" className="fil54" d="M4481 4341l13 -6c4,9 5,17 2,25 -2,8 -7,14 -15,19 -10,6 -19,8 -29,5 -10,-3 -19,-10 -26,-21 -5,-8 -8,-15 -9,-22 -1,-7 0,-14 3,-20 3,-6 8,-11 14,-15 8,-5 15,-7 22,-6 7,1 14,4 20,11l-10 9c-4,-4 -8,-6 -13,-7 -4,-1 -8,0 -12,3 -6,4 -9,9 -11,16 -1,7 1,15 7,24 6,9 12,15 19,17 6,2 12,1 18,-3 5,-3 8,-7 9,-12 1,-5 0,-11 -2,-17z"/>
  <path id="10" className="fil54" d="M4558 4327l-62 -97 43 -27c9,-6 16,-9 21,-10 6,-1 11,0 17,2 6,3 10,7 13,12 4,7 6,14 4,22 -1,8 -6,15 -15,22 4,-1 8,-1 11,0 6,1 12,3 19,6l34 16 -16 10 -26 -12c-7,-3 -13,-6 -18,-7 -4,-2 -8,-2 -11,-2 -3,0 -5,0 -7,1 -2,1 -4,2 -7,4l-15 9 27 43 -13 8zm-22 -62l28 -18c6,-4 10,-7 13,-11 3,-3 4,-7 4,-11 0,-4 -1,-7 -3,-10 -3,-5 -7,-7 -12,-8 -5,-1 -11,1 -19,6l-31 20 20 32z"/>
  <path id="11" className="fil54" d="M4688 4212l13 -6c3,8 3,16 0,24 -3,7 -8,14 -16,19 -10,7 -20,9 -30,6 -10,-3 -19,-9 -26,-21 -8,-12 -10,-23 -8,-33 2,-10 8,-19 17,-25 9,-6 19,-8 29,-5 10,3 19,10 26,21 0,1 1,2 2,3l-52 33c5,7 11,12 18,14 7,2 13,1 19,-3 4,-3 7,-6 9,-11 2,-4 2,-9 0,-16zm-51 6l39 -25c-4,-6 -9,-9 -13,-10 -7,-2 -13,-1 -19,2 -5,3 -9,8 -10,14 -1,6 0,12 3,19z"/>
  <path id="12" className="fil54" d="M4746 4244l-62 -97 11 -7 6 9c0,-5 1,-10 4,-14 2,-4 5,-7 10,-10 6,-4 12,-6 19,-5 7,0 13,2 19,6 6,4 11,10 15,16 5,7 7,14 8,22 1,7 0,14 -3,20 -3,6 -7,11 -13,14 -4,3 -8,4 -12,4 -4,0 -8,0 -12,-1l22 34 -12 8zm-28 -69c6,9 12,15 18,17 6,2 12,1 17,-2 5,-3 8,-8 9,-15 1,-7 -2,-15 -8,-24 -6,-9 -12,-15 -18,-17 -7,-2 -12,-2 -17,2 -5,3 -8,8 -9,16 -1,7 2,15 7,24z"/>
  <path id="13" className="fil54" d="M4850 4139l-7 -10c0,11 -5,20 -15,26 -4,3 -9,4 -13,5 -5,1 -9,0 -12,-1 -3,-1 -6,-3 -9,-6 -2,-2 -5,-6 -8,-11l-28 -44 12 -8 25 39c4,6 7,10 9,12 3,3 6,4 9,4 4,0 7,-1 11,-3 4,-2 6,-5 8,-9 2,-4 3,-8 2,-12 -1,-4 -3,-9 -7,-15l-24 -38 12 -8 45 70 -11 7z"/>
  
  <polygon id="14" className="fil54" points="4879,4120 4817,4023 4829,4016 4891,4113 "/>
  
  <path id="15" className="fil54" d="M4856 4017l-9 -14 12 -8 9 14 -12 8zm53 83l-45 -70 12 -8 45 70 -12 8z"/>
  <path id="16" className="fil54" d="M4969 4026l13 -6c4,9 5,17 2,25 -2,8 -7,14 -15,19 -10,6 -19,8 -29,5 -10,-3 -19,-10 -26,-21 -5,-8 -8,-15 -9,-22 -1,-7 0,-14 3,-20 3,-6 8,-11 14,-15 8,-5 15,-7 22,-6 7,1 14,4 20,11l-10 9c-4,-4 -8,-6 -13,-7 -4,-1 -8,0 -12,3 -6,4 -9,9 -11,16 -1,7 1,15 7,24 6,9 12,15 19,17 6,2 12,1 18,-3 5,-3 8,-7 9,-12 1,-5 0,-11 -2,-17z"/>
  <path id="17" className="fil54" d="M3906 4911c-8,-13 -11,-25 -8,-36 3,-9 8,-16 17,-22 10,-6 20,-8 30,-6 10,2 19,9 26,20 6,9 9,17 10,24 1,7 -1,13 -4,20 -3,6 -8,11 -14,15 -10,6 -20,8 -30,6 -10,-2 -19,-10 -26,-21zm12 -8c6,9 12,15 19,16 7,2 13,1 19,-3 6,-4 9,-9 10,-16 1,-7 -1,-15 -7,-24 -6,-9 -12,-14 -19,-16 -7,-2 -13,-1 -19,3 -6,4 -9,9 -11,16 -1,7 1,15 7,24z"/>
  <path id="18" className="fil54" d="M4011 4893l-39 -61 -11 7 -6 -9 11 -7 -5 -7c-3,-5 -5,-8 -5,-11 -1,-4 0,-8 1,-11 2,-4 5,-7 10,-11 3,-2 7,-4 12,-6l5 12c-3,1 -5,2 -7,4 -4,2 -6,5 -6,7 -1,2 1,6 3,10l4 6 14 -9 6 9 -14 9 39 61 -12 8z"/>
  <path id="19" className="fil54" d="M4102 4819l8 9c-3,3 -6,5 -8,7 -4,3 -8,4 -11,4 -3,0 -6,-1 -8,-2 -2,-2 -6,-6 -10,-13l-26 -40 -9 6 -6 -9 9 -6 -11 -17 7 -15 16 25 12 -8 6 9 -12 8 26 41c2,3 4,5 5,6 1,1 2,1 4,1 1,0 3,-1 5,-2 1,-1 3,-2 5,-4z"/>
  <path id="20" className="fil54" d="M4120 4822l-62 -97 12 -8 22 35c1,-10 6,-18 15,-23 5,-3 10,-5 16,-6 5,0 10,1 14,3 4,3 8,7 13,14l28 45 -12 8 -28 -45c-4,-6 -8,-9 -12,-11 -4,-1 -9,0 -14,3 -4,2 -6,5 -8,9 -2,4 -3,8 -2,12 1,4 3,9 6,14l24 38 -12 8z"/>
  <path id="21" className="fil54" d="M4229 4721l13 -6c3,8 3,16 0,24 -3,7 -8,14 -16,19 -10,7 -20,9 -30,6 -10,-3 -19,-9 -26,-21 -8,-12 -10,-23 -8,-33 2,-10 8,-19 17,-25 9,-6 19,-8 29,-5 10,3 19,10 26,21 0,1 1,2 2,3l-52 33c5,7 11,12 18,14 7,2 13,1 19,-3 4,-3 7,-6 9,-11 2,-4 2,-9 0,-16zm-51 6l39 -25c-4,-6 -9,-9 -13,-10 -7,-2 -13,-1 -19,2 -5,3 -9,8 -10,14 -1,6 0,12 3,19z"/>
  <path id="22" className="fil54" d="M4357 4622l15 -5c4,12 4,23 1,33 -3,10 -10,18 -20,25 -10,7 -20,10 -30,10 -9,0 -18,-3 -27,-9 -9,-6 -16,-13 -22,-23 -6,-10 -10,-20 -11,-30 -1,-10 1,-19 6,-28 5,-8 11,-15 20,-21 10,-6 19,-9 29,-8 10,1 19,5 27,12l-11 11c-7,-6 -13,-9 -20,-9 -6,-1 -13,1 -19,5 -7,5 -13,10 -15,17 -3,7 -3,14 -1,21 2,7 5,14 9,21 5,8 11,15 17,19 6,5 13,7 20,7 7,0 13,-2 19,-6 7,-5 12,-11 14,-18 2,-7 2,-16 -2,-25z"/>
  <path id="23" className="fil54" d="M4379 4606c-8,-13 -11,-25 -8,-36 3,-9 8,-16 17,-22 10,-6 20,-8 30,-6 10,2 19,9 26,20 6,9 9,17 10,24 1,7 -1,13 -4,20 -3,6 -8,11 -14,15 -10,6 -20,8 -30,6 -10,-2 -19,-10 -26,-21zm12 -8c6,9 12,15 19,16 7,2 13,1 19,-3 6,-4 9,-9 10,-16 1,-7 -1,-15 -7,-24 -6,-9 -12,-14 -19,-16 -7,-2 -13,-1 -19,3 -6,4 -9,9 -11,16 -1,7 1,15 7,24z"/>
  <path id="24" className="fil54" d="M4481 4590l-45 -70 11 -7 6 10c0,-11 5,-20 15,-26 4,-3 9,-4 13,-5 5,-1 8,0 12,1 3,1 6,3 9,6 2,2 5,6 8,11l28 43 -12 8 -27 -43c-3,-5 -6,-8 -8,-10 -2,-2 -5,-3 -9,-3 -3,0 -6,1 -10,3 -5,3 -8,8 -10,13 -2,6 0,13 6,22l24 38 -12 8z"/>
  <path id="25" className="fil54" d="M4558 4549l13 -6c3,3 6,5 9,5 4,0 9,-1 14,-4 6,-4 9,-7 11,-11 2,-4 2,-8 0,-13 -1,-3 -4,-8 -9,-16 -1,9 -6,17 -14,22 -10,6 -19,7 -29,4 -10,-4 -18,-10 -24,-20 -4,-7 -7,-14 -8,-21 -1,-7 0,-14 2,-20 3,-6 7,-11 13,-15 8,-5 17,-6 27,-3l-5 -8 11 -7 39 61c7,11 11,19 11,25 1,6 -1,12 -4,18 -3,6 -8,11 -15,15 -8,5 -16,8 -24,7 -8,0 -14,-5 -18,-12zm-17 -49c6,9 12,15 18,17 6,2 12,1 18,-2 5,-3 9,-9 10,-15 1,-7 -1,-14 -7,-23 -5,-9 -11,-14 -18,-16 -7,-2 -13,-1 -18,2 -5,3 -8,8 -9,15 -1,7 1,14 7,23z"/>
  <path id="26" className="fil54" d="M4605 4461c-8,-13 -11,-25 -8,-36 3,-9 8,-16 17,-22 10,-6 20,-8 30,-6 10,2 19,9 26,20 6,9 9,17 10,24 1,7 -1,13 -4,20 -3,6 -8,11 -14,15 -10,6 -20,8 -30,6 -10,-2 -19,-10 -26,-21zm12 -8c6,9 12,15 19,16 7,2 13,1 19,-3 6,-4 9,-9 10,-16 1,-7 -1,-15 -7,-24 -6,-9 -12,-14 -19,-16 -7,-2 -13,-1 -19,3 -6,4 -9,9 -11,16 -1,7 1,15 7,24z"/>
  <path className="fil54" d="M3653 2682l27 7c-6,22 -16,40 -31,51 -15,12 -33,18 -55,18 -22,0 -40,-5 -54,-14 -14,-9 -25,-22 -32,-39 -7,-17 -11,-36 -11,-55 0,-22 4,-40 12,-56 8,-16 20,-28 35,-37 15,-8 32,-12 50,-12 21,0 38,5 52,16 14,11 24,25 29,44l-27 6c-5,-15 -12,-26 -21,-33 -9,-7 -21,-10 -34,-10 -16,0 -29,4 -40,11 -11,8 -18,18 -22,31 -4,13 -7,26 -7,40 0,18 3,33 8,46 5,13 13,23 24,29 11,7 22,10 35,10 15,0 28,-4 39,-13 11,-9 18,-22 22,-39z"/>
  <path id="1" className="fil54" d="M3711 2755l0 -207 25 0 0 74c12,-14 27,-21 45,-21 11,0 21,2 29,7 8,4 14,10 17,18 4,8 5,19 5,34l0 95 -25 0 0 -95c0,-13 -3,-22 -8,-28 -5,-6 -13,-9 -23,-9 -7,0 -15,2 -21,6 -7,4 -11,9 -14,16 -3,7 -4,16 -4,28l0 82 -25 0z"/>
  <path id="2" className="fil54" d="M3970 2736c-9,8 -19,14 -27,17 -9,3 -18,5 -28,5 -16,0 -29,-4 -38,-12 -9,-8 -13,-18 -13,-31 0,-7 2,-14 5,-20 3,-6 8,-11 13,-15 5,-4 12,-6 18,-8 5,-1 13,-3 23,-4 21,-2 36,-5 45,-9 0,-3 0,-6 0,-7 0,-10 -2,-18 -7,-22 -7,-6 -16,-9 -29,-9 -12,0 -21,2 -27,6 -6,4 -10,12 -13,22l-25 -3c2,-11 6,-19 11,-26 5,-7 13,-12 23,-15 10,-4 21,-5 34,-5 13,0 23,1 31,5 8,3 14,7 18,11 4,5 6,10 8,17 1,4 1,12 1,23l0 34c0,24 1,38 2,45 1,6 3,12 6,18l-27 0c-3,-5 -4,-12 -5,-19zm-2 -56c-9,4 -23,7 -42,10 -11,1 -18,3 -22,5 -4,2 -8,5 -10,8 -2,4 -4,8 -4,12 0,7 3,12 8,17 5,4 13,7 23,7 10,0 19,-2 26,-6 8,-4 13,-10 17,-17 3,-6 4,-14 4,-25l0 -9z"/>
  <path id="3" className="fil54" d="M4129 2755l0 -19c-9,15 -23,22 -42,22 -12,0 -23,-3 -33,-10 -10,-7 -18,-16 -23,-28 -5,-12 -8,-25 -8,-41 0,-15 3,-28 7,-41 5,-12 12,-21 22,-28 10,-7 21,-10 33,-10 9,0 17,2 24,6 7,4 13,9 17,15l0 -74 25 0 0 207 -24 0zm-80 -75c0,19 4,33 12,43 8,9 18,14 29,14 11,0 21,-5 28,-14 8,-9 12,-23 12,-41 0,-20 -4,-35 -12,-45 -8,-10 -18,-14 -29,-14 -11,0 -21,5 -28,14 -8,9 -11,24 -11,44z"/>
  <path className="fil54" d="M6718 6885l-117 -11 2 -23 86 -20c8,-2 14,-3 18,-4 -4,-2 -10,-4 -18,-8l-79 -36 2 -21 117 11 -1 15 -98 -10 95 44 -1 14 -103 24 100 10 -1 15z"/>
  <path id="1" className="fil54" d="M6727 6693c4,6 7,11 8,16 1,5 2,11 1,16 -1,9 -4,16 -9,21 -5,5 -11,7 -18,6 -4,0 -8,-2 -11,-4 -3,-2 -6,-5 -8,-8 -2,-3 -3,-7 -4,-11 0,-3 -1,-7 -1,-13 0,-12 -1,-21 -2,-26 -2,0 -3,0 -4,0 -6,-1 -10,0 -13,3 -4,3 -6,9 -6,16 -1,7 0,12 2,15 2,3 6,6 12,8l-3 14c-6,-2 -11,-4 -14,-8 -3,-3 -6,-8 -7,-14 -1,-6 -2,-12 -1,-20 1,-7 2,-13 4,-17 2,-4 5,-7 7,-9 3,-2 6,-3 10,-4 3,0 7,0 13,1l19 2c13,1 22,2 26,2 4,0 7,-1 11,-3l-1 15c-3,1 -7,2 -11,2zm-32 -2c2,5 3,13 3,24 0,6 1,10 2,13 1,3 2,5 4,6 2,2 4,2 7,3 4,0 7,-1 10,-3 3,-3 5,-7 5,-12 1,-6 0,-11 -2,-15 -2,-5 -5,-8 -9,-10 -3,-2 -8,-3 -14,-4l-5 -1z"/>
  <path id="2" className="fil54" d="M6746 6604l-11 -1c8,6 11,15 10,25 -1,7 -3,13 -7,18 -4,5 -10,9 -17,12 -7,2 -15,3 -24,2 -8,-1 -16,-3 -23,-6 -7,-4 -12,-8 -15,-14 -3,-6 -4,-13 -4,-20 0,-5 2,-10 5,-13 3,-4 6,-7 9,-9l-42 -4 1 -14 117 11 -1 13zm-47 41c11,1 19,0 25,-5 6,-4 9,-9 10,-15 1,-6 -1,-12 -6,-17 -5,-5 -12,-8 -23,-9 -12,-1 -20,0 -26,4 -6,4 -9,9 -10,16 -1,6 1,12 6,17 5,5 13,8 24,9z"/>
  <path id="3" className="fil54" d="M6745 6511c4,6 7,11 8,16 1,5 2,11 1,16 -1,9 -4,16 -9,21 -5,5 -11,7 -18,6 -4,0 -8,-2 -11,-4 -3,-2 -6,-5 -8,-8 -2,-3 -3,-7 -4,-11 0,-3 -1,-7 -1,-13 0,-12 -1,-21 -2,-26 -2,0 -3,0 -4,0 -6,-1 -10,0 -13,3 -4,3 -6,9 -6,16 -1,7 0,12 2,15 2,3 6,6 12,8l-3 14c-6,-2 -11,-4 -14,-8 -3,-3 -6,-8 -7,-14 -1,-6 -2,-12 -1,-20 1,-7 2,-13 4,-17 2,-4 5,-7 7,-9 3,-2 6,-3 10,-4 3,0 7,0 13,1l19 2c13,1 22,2 26,2 4,0 7,-1 11,-3l-1 15c-3,1 -7,2 -11,2zm-32 -2c2,5 3,13 3,24 0,6 1,10 2,13 1,3 2,5 4,6 2,2 4,2 7,3 4,0 7,-1 10,-3 3,-3 5,-7 5,-12 1,-6 0,-11 -2,-15 -2,-5 -5,-8 -9,-10 -3,-2 -8,-3 -14,-4l-5 -1z"/>
  <path id="4" className="fil54" d="M6766 6480l3 -14c4,0 8,-1 10,-4 3,-3 5,-8 5,-14 1,-7 0,-12 -2,-16 -2,-4 -6,-7 -11,-8 -3,-1 -9,-2 -18,-3 7,7 10,15 9,25 -1,12 -6,20 -15,26 -9,6 -19,8 -31,7 -8,-1 -15,-3 -22,-7 -7,-4 -11,-8 -15,-14 -3,-6 -4,-13 -4,-20 1,-10 6,-18 15,-24l-10 -1 1 -13 74 7c13,1 22,4 28,7 5,3 9,8 12,14 3,6 4,13 3,22 -1,10 -4,18 -9,24 -5,6 -12,8 -22,7zm-50 -17c11,1 20,0 25,-4 6,-4 9,-9 9,-16 1,-7 -1,-12 -6,-17 -5,-5 -12,-8 -23,-9 -10,-1 -18,1 -24,5 -6,4 -9,9 -10,16 -1,6 1,12 6,17 5,5 12,8 23,9z"/>
  <path id="5" className="fil54" d="M6763 6329c4,6 7,11 8,16 1,5 2,11 1,16 -1,9 -4,16 -9,21 -5,5 -11,7 -18,6 -4,0 -8,-2 -11,-4 -3,-2 -6,-5 -8,-8 -2,-3 -3,-7 -4,-11 0,-3 -1,-7 -1,-13 0,-12 -1,-21 -2,-26 -2,0 -3,0 -4,0 -6,-1 -10,0 -13,3 -4,3 -6,9 -6,16 -1,7 0,12 2,15 2,3 6,6 12,8l-3 14c-6,-2 -11,-4 -14,-8 -3,-3 -6,-8 -7,-14 -1,-6 -2,-12 -1,-20 1,-7 2,-13 4,-17 2,-4 5,-7 7,-9 3,-2 6,-3 10,-4 3,0 7,0 13,1l19 2c13,1 22,2 26,2 4,0 7,-1 11,-3l-1 15c-3,1 -7,2 -11,2zm-32 -2c2,5 3,13 3,24 0,6 1,10 2,13 1,3 2,5 4,6 2,2 4,2 7,3 4,0 7,-1 10,-3 3,-3 5,-7 5,-12 1,-6 0,-11 -2,-15 -2,-5 -5,-8 -9,-10 -3,-2 -8,-3 -14,-4l-5 -1z"/>
  <path id="6" className="fil54" d="M6752 6297l-1 -14c6,0 10,-2 14,-5 3,-3 5,-8 6,-15 1,-7 0,-12 -3,-15 -2,-3 -5,-5 -9,-6 -3,0 -6,1 -8,3 -1,2 -4,7 -6,14 -4,10 -7,17 -9,21 -2,4 -5,7 -9,8 -4,2 -8,2 -12,2 -4,0 -7,-2 -10,-4 -3,-2 -6,-5 -7,-8 -1,-2 -3,-6 -3,-10 -1,-4 -1,-8 0,-13 1,-7 2,-12 5,-17 2,-5 5,-8 9,-10 4,-2 8,-3 14,-4l1 14c-4,0 -8,2 -11,5 -3,3 -4,7 -5,13 -1,7 0,11 2,15 2,3 4,5 7,5 2,0 4,0 5,-1 2,-1 3,-3 4,-5 1,-1 2,-6 5,-12 4,-10 7,-17 9,-21 2,-4 5,-7 9,-9 4,-2 8,-3 13,-2 5,0 9,2 13,6 4,3 7,8 9,13 2,6 2,12 2,18 -1,11 -4,19 -9,25 -5,5 -12,8 -21,9z"/>
  <path id="7" className="fil54" d="M6760 6153l3 -14c10,2 17,7 22,14 5,7 7,15 6,24 -1,12 -6,21 -14,27 -8,6 -20,9 -34,7 -9,-1 -17,-3 -24,-7 -7,-4 -11,-9 -14,-15 -3,-7 -4,-13 -3,-21 1,-9 4,-17 9,-22 5,-5 12,-9 21,-9l1 14c-6,1 -10,3 -14,6 -3,3 -5,7 -6,12 -1,7 1,13 6,18 5,5 13,8 24,9 11,1 20,0 26,-4 6,-4 9,-9 9,-16 1,-6 -1,-11 -4,-15 -3,-4 -8,-7 -15,-9z"/>
  <path id="8" className="fil54" d="M6789 6074c4,6 7,11 8,16 1,5 2,11 1,16 -1,9 -4,16 -9,21 -5,5 -11,7 -18,6 -4,0 -8,-2 -11,-4 -3,-2 -6,-5 -8,-8 -2,-3 -3,-7 -4,-11 0,-3 -1,-7 -1,-13 0,-12 -1,-21 -2,-26 -2,0 -3,0 -4,0 -6,-1 -10,0 -13,3 -4,3 -6,9 -6,16 -1,7 0,12 2,15 2,3 6,6 12,8l-3 14c-6,-2 -11,-4 -14,-8 -3,-3 -6,-8 -7,-14 -1,-6 -2,-12 -1,-20 1,-7 2,-13 4,-17 2,-4 5,-7 7,-9 3,-2 6,-3 10,-4 3,0 7,0 13,1l19 2c13,1 22,2 26,2 4,0 7,-1 11,-3l-1 15c-3,1 -7,2 -11,2zm-32 -2c2,5 3,13 3,24 0,6 1,10 2,13 1,3 2,5 4,6 2,2 4,2 7,3 4,0 7,-1 10,-3 3,-3 5,-7 5,-12 1,-6 0,-11 -2,-15 -2,-5 -5,-8 -9,-10 -3,-2 -8,-3 -14,-4l-5 -1z"/>
  <path id="9" className="fil54" d="M6803 6039l-85 -8 1 -13 13 1c-6,-4 -9,-7 -11,-10 -2,-3 -2,-6 -2,-10 0,-5 2,-10 6,-14l13 6c-2,3 -4,7 -4,10 0,3 0,6 2,9 2,3 4,5 7,6 5,2 10,3 17,4l45 4 -1 14z"/>
  <polygon className="fil54" points="2355,3423 2355,3258 2377,3258 2464,3388 2464,3258 2485,3258 2485,3423 2462,3423 2376,3293 2376,3423 "/>
  <path id="1" className="fil54" d="M2519 3281l0 -23 20 0 0 23 -20 0zm0 142l0 -120 20 0 0 120 -20 0z"/>
  <path id="2" className="fil54" d="M2566 3433l20 3c1,6 3,10 7,13 5,4 12,6 21,6 9,0 17,-2 22,-6 5,-4 9,-9 10,-16 1,-4 2,-13 1,-26 -9,10 -20,16 -33,16 -16,0 -29,-6 -38,-18 -9,-12 -14,-26 -14,-43 0,-11 2,-22 6,-32 4,-10 10,-17 18,-22 8,-5 17,-8 28,-8 14,0 26,6 35,17l0 -15 19 0 0 103c0,19 -2,32 -6,40 -4,8 -10,14 -18,18 -8,4 -18,7 -30,7 -14,0 -26,-3 -35,-10 -9,-6 -13,-16 -13,-29zm17 -72c0,16 3,27 9,34 6,7 14,11 23,11 9,0 17,-4 23,-11 6,-7 9,-18 9,-34 0,-15 -3,-26 -10,-33 -6,-7 -14,-11 -23,-11 -9,0 -17,4 -23,11 -6,7 -9,18 -9,33z"/>
  <path id="3" className="fil54" d="M2780 3384l21 3c-3,12 -9,22 -18,28 -9,7 -20,10 -34,10 -17,0 -31,-5 -42,-16 -10,-11 -15,-26 -15,-45 0,-20 5,-36 15,-47 10,-11 24,-17 40,-17 16,0 29,5 39,16 10,11 15,26 15,46 0,1 0,3 0,5l-89 0c1,13 4,23 11,30 7,7 15,10 25,10 7,0 14,-2 19,-6 5,-4 9,-10 12,-19zm-66 -33l67 0c-1,-10 -3,-18 -8,-23 -6,-8 -15,-12 -25,-12 -9,0 -17,3 -23,9 -6,6 -10,15 -10,25z"/>
  <path id="4" className="fil54" d="M2826 3423l0 -120 18 0 0 18c5,-8 9,-14 13,-17 4,-3 8,-4 13,-4 7,0 14,2 21,6l-7 19c-5,-3 -10,-4 -15,-4 -4,0 -8,1 -12,4 -3,3 -6,6 -7,11 -2,7 -3,15 -3,24l0 63 -20 0z"/>
  <path id="5" className="fil54" d="M2903 3281l0 -23 20 0 0 23 -20 0zm0 142l0 -120 20 0 0 120 -20 0z"/>
  <path id="6" className="fil54" d="M3033 3408c-8,6 -15,11 -22,14 -7,3 -14,4 -22,4 -13,0 -23,-3 -30,-10 -7,-6 -11,-15 -11,-25 0,-6 1,-11 4,-16 3,-5 6,-9 10,-12 4,-3 9,-5 15,-7 4,-1 10,-2 18,-3 16,-2 28,-4 36,-7 0,-3 0,-5 0,-5 0,-8 -2,-14 -6,-17 -5,-5 -13,-7 -23,-7 -10,0 -17,2 -21,5 -5,3 -8,9 -10,18l-20 -3c2,-8 5,-15 9,-21 4,-5 10,-9 18,-12 8,-3 17,-4 27,-4 10,0 19,1 25,4 6,2 11,5 14,9 3,4 5,8 6,14 1,3 1,10 1,19l0 27c0,19 0,31 1,36 1,5 2,10 5,14l-21 0c-2,-4 -3,-9 -4,-15zm-2 -45c-7,3 -18,6 -33,8 -8,1 -14,3 -18,4 -3,1 -6,4 -8,7 -2,3 -3,6 -3,10 0,5 2,10 6,13 4,4 10,5 18,5 8,0 15,-2 21,-5 6,-3 11,-8 13,-14 2,-5 3,-11 3,-20l0 -7z"/>
  <polygon className="fil54" points="5223,4892 5223,4770 5177,4748 5177,4732 5287,4784 5287,4801 5241,4779 5241,4901 "/>
  <path id="1" className="fil54" d="M5349 4939c-6,2 -13,3 -18,3 -6,-1 -12,-2 -19,-6 -11,-5 -20,-12 -26,-20 -6,-8 -9,-16 -9,-25 0,-5 1,-9 3,-12 2,-3 5,-5 9,-6 4,-1 8,-1 12,0 3,1 8,2 15,5 14,5 24,8 31,9 0,-2 0,-4 0,-4 0,-7 -2,-13 -5,-17 -4,-6 -11,-11 -20,-15 -8,-4 -14,-5 -18,-4 -4,1 -7,5 -9,11l-17 -10c2,-6 4,-11 8,-14 4,-3 9,-4 15,-3 7,1 14,3 23,7 9,4 16,8 21,13 5,5 9,9 12,13 3,4 4,9 5,14 1,3 1,9 1,16l0 23c0,16 0,26 1,30 1,5 2,9 4,14l-18 -8c-2,-4 -3,-9 -3,-14zm-1 -38c-6,0 -16,-3 -28,-7 -7,-2 -12,-4 -15,-4 -3,0 -5,1 -7,2 -2,2 -2,4 -2,7 0,4 2,9 5,14 3,5 9,9 15,12 7,3 12,4 18,4 5,0 9,-2 11,-6 2,-3 3,-8 3,-16l0 -6z"/>
  <path id="2" className="fil54" d="M5391 4972l0 -100 15 7 0 14c7,-7 18,-8 32,-1 6,3 12,7 17,11 5,5 9,9 11,14 3,5 4,10 5,15 1,3 1,9 1,17l0 61 -17 -8 0 -61c0,-7 -1,-12 -2,-16 -1,-4 -4,-8 -7,-12 -3,-4 -7,-7 -12,-9 -7,-3 -14,-4 -19,-2 -5,2 -8,10 -8,22l0 55 -17 -8z"/>
  <path id="3" className="fil54" d="M5490 5019l0 -14 64 -43c-7,-3 -14,-6 -19,-9l-41 -19 0 -14 82 39 0 11 -55 38 -10 7c8,3 15,6 22,9l47 22 0 15 -89 -42z"/>
  <path id="4" className="fil54" d="M5663 5088c-6,2 -13,3 -18,3 -6,-1 -12,-2 -19,-6 -11,-5 -20,-12 -26,-20 -6,-8 -9,-16 -9,-25 0,-5 1,-9 3,-12 2,-3 5,-5 9,-6 4,-1 8,-1 12,0 3,1 8,2 15,5 14,5 24,8 31,9 0,-2 0,-4 0,-4 0,-7 -2,-13 -5,-17 -4,-6 -11,-11 -20,-15 -8,-4 -14,-5 -18,-4 -4,1 -7,5 -9,11l-17 -10c2,-6 4,-11 8,-14 4,-3 9,-4 15,-3 7,1 14,3 23,7 9,4 16,8 21,13 5,5 9,9 12,13 3,4 4,9 5,14 1,3 1,9 1,16l0 23c0,16 0,26 1,30 1,5 2,9 4,14l-18 -8c-2,-4 -3,-9 -3,-14zm-1 -38c-6,0 -16,-3 -28,-7 -7,-2 -12,-4 -15,-4 -3,0 -5,1 -7,2 -2,2 -2,4 -2,7 0,4 2,9 5,14 3,5 9,9 15,12 7,3 12,4 18,4 5,0 9,-2 11,-6 2,-3 3,-8 3,-16l0 -6z"/>
  <path id="5" className="fil54" d="M5705 5120l0 -100 15 7 0 14c7,-7 18,-8 32,-1 6,3 12,7 17,11 5,5 9,9 11,14 3,5 4,10 5,15 1,3 1,9 1,17l0 61 -17 -8 0 -61c0,-7 -1,-12 -2,-16 -1,-4 -4,-8 -7,-12 -3,-4 -7,-7 -12,-9 -7,-3 -14,-4 -19,-2 -5,2 -8,10 -8,22l0 55 -17 -8z"/>
  <path id="6" className="fil54" d="M5814 5053l0 -19 17 8 0 19 -17 -8zm0 119l0 -100 17 8 0 100 -17 -8z"/>
  <path id="7" className="fil54" d="M5923 5211c-6,2 -13,3 -18,3 -6,-1 -12,-2 -19,-6 -11,-5 -20,-12 -26,-20 -6,-8 -9,-16 -9,-25 0,-5 1,-9 3,-12 2,-3 5,-5 9,-6 4,-1 8,-1 12,0 3,1 8,2 15,5 14,5 24,8 31,9 0,-2 0,-4 0,-4 0,-7 -2,-13 -5,-17 -4,-6 -11,-11 -20,-15 -8,-4 -14,-5 -18,-4 -4,1 -7,5 -9,11l-17 -10c2,-6 4,-11 8,-14 4,-3 9,-4 15,-3 7,1 14,3 23,7 9,4 16,8 21,13 5,5 9,9 12,13 3,4 4,9 5,14 1,3 1,9 1,16l0 23c0,16 0,26 1,30 1,5 2,9 4,14l-18 -8c-2,-4 -3,-9 -3,-14zm-1 -38c-6,0 -16,-3 -28,-7 -7,-2 -12,-4 -15,-4 -3,0 -5,1 -7,2 -2,2 -2,4 -2,7 0,4 2,9 5,14 3,5 9,9 15,12 7,3 12,4 18,4 5,0 9,-2 11,-6 2,-3 3,-8 3,-16l0 -6z"/>
  <path className="fil54" d="M4142 6956l-75 -93 35 -28c7,-6 14,-9 19,-11 6,-2 12,-1 17,1 6,2 10,5 14,9 3,4 5,9 6,14 1,5 0,11 -3,16 7,-3 14,-4 20,-2 6,2 12,5 16,10 4,4 6,9 7,14 1,5 1,10 0,14 -1,4 -3,8 -7,13 -3,4 -8,9 -14,14l-36 29zm-31 -64l20 -16c5,-4 9,-8 11,-11 2,-3 4,-7 3,-10 0,-3 -2,-7 -4,-10 -3,-3 -5,-5 -9,-6 -3,-1 -7,-1 -10,0 -3,1 -9,5 -15,10l-19 15 23 28zm35 43l23 -19c4,-3 7,-6 8,-7 2,-3 4,-6 5,-8 1,-3 1,-6 1,-9 -1,-3 -2,-6 -4,-9 -3,-3 -6,-6 -10,-7 -4,-1 -8,-1 -12,1 -4,2 -9,5 -15,9l-22 17 26 32z"/>
  <path id="1" className="fil54" d="M4197 6857c-10,-12 -14,-25 -12,-36 2,-10 7,-18 15,-25 9,-7 19,-11 30,-9 11,1 20,7 29,18 7,9 11,17 13,24 1,7 1,14 -2,21 -3,7 -7,12 -13,17 -9,8 -20,11 -30,9 -11,-1 -21,-8 -30,-19zm12 -9c7,9 14,14 21,15 7,1 14,0 19,-5 6,-5 9,-11 9,-18 0,-7 -3,-15 -10,-24 -7,-8 -14,-13 -21,-14 -7,-1 -14,0 -19,5 -6,5 -9,11 -9,18 0,7 3,15 10,24z"/>
  <path id="2" className="fil54" d="M4318 6799l10 9c-3,3 -5,6 -8,8 -4,3 -8,5 -11,6 -3,1 -6,0 -9,-1 -3,-1 -7,-6 -12,-12l-31 -39 -8 7 -7 -9 8 -7 -13 -17 6 -16 19 24 11 -9 7 9 -11 9 32 39c3,3 5,5 6,6 1,1 2,1 4,1 1,0 3,-1 5,-2 1,-1 3,-3 5,-4z"/>
  <path id="3" className="fil54" d="M4317 6784l10 -11c4,4 9,6 14,6 5,0 10,-2 15,-6 5,-4 8,-8 9,-13 1,-4 0,-8 -2,-11 -2,-3 -5,-4 -8,-3 -2,0 -7,2 -15,6 -10,5 -17,7 -22,9 -5,1 -9,1 -13,0 -4,-1 -7,-4 -10,-7 -2,-3 -4,-6 -5,-10 -1,-4 -1,-7 0,-11 1,-3 2,-6 5,-9 2,-3 5,-7 9,-9 5,-4 11,-7 16,-9 5,-2 10,-2 14,-1 4,1 8,4 12,7l-10 11c-3,-3 -7,-5 -11,-5 -4,0 -8,2 -13,5 -5,4 -8,8 -9,12 -1,4 0,6 2,9 1,1 3,2 5,3 2,0 4,0 7,0 1,0 6,-2 12,-5 10,-4 17,-7 21,-8 4,-1 8,-1 12,0 4,1 7,4 11,8 3,4 5,8 5,13 0,5 -1,10 -3,16 -3,5 -7,10 -12,14 -9,7 -17,11 -24,11 -8,0 -15,-3 -22,-9z"/>
  <path id="4" className="fil54" d="M4415 6738l-75 -51 12 -10 42 30 16 11c0,-1 -3,-6 -8,-17l-21 -48 12 -9 42 31 14 10 -7 -16 -20 -48 11 -9 33 84 -12 10 -43 -32 -12 -9 28 63 -12 10z"/>
  <path id="5" className="fil54" d="M4535 6629c-1,7 -3,13 -6,17 -3,5 -6,9 -11,12 -7,6 -15,9 -21,8 -7,0 -13,-3 -17,-9 -3,-3 -4,-7 -5,-11 -1,-4 0,-8 1,-11 1,-4 3,-7 5,-10 2,-2 5,-6 9,-10 8,-9 14,-15 17,-20 -1,-2 -2,-3 -2,-3 -4,-5 -7,-7 -11,-7 -5,0 -10,2 -16,7 -5,4 -9,8 -10,12 -1,4 0,9 2,15l-12 7c-3,-6 -4,-11 -4,-16 0,-5 2,-10 5,-15 3,-5 8,-10 13,-15 6,-5 11,-8 16,-9 5,-2 9,-2 12,-1 3,1 7,2 10,5 2,2 5,5 9,10l12 15c9,11 14,17 17,20 3,2 6,4 9,6l-12 10c-3,-1 -6,-4 -9,-6zm-22 -25c-3,5 -8,11 -15,19 -4,4 -7,8 -8,10 -1,2 -2,5 -2,7 0,2 1,5 3,7 2,3 6,5 10,5 4,0 8,-2 13,-5 4,-4 8,-8 9,-12 2,-5 2,-9 1,-14 -1,-4 -3,-8 -7,-13l-3 -4z"/>
  <path id="6" className="fil54" d="M4570 6615l-54 -68 10 -8 8 10c-1,-11 3,-21 13,-28 4,-3 8,-6 13,-7 5,-1 9,-1 12,0 4,1 7,3 10,6 2,2 5,5 10,11l33 41 -11 9 -33 -41c-4,-5 -7,-8 -10,-9 -3,-2 -6,-2 -9,-2 -3,0 -7,2 -10,4 -5,4 -8,9 -9,15 -1,6 2,13 9,22l30 37 -11 9z"/>
  <path id="7" className="fil54" d="M4680 6514c-1,7 -3,13 -6,17 -3,5 -6,9 -11,12 -7,6 -15,9 -21,8 -7,0 -13,-3 -17,-9 -3,-3 -4,-7 -5,-11 -1,-4 0,-8 1,-11 1,-4 3,-7 5,-10 2,-2 5,-6 9,-10 8,-9 14,-15 17,-20 -1,-2 -2,-3 -2,-3 -4,-5 -7,-7 -11,-7 -5,0 -10,2 -16,7 -5,4 -9,8 -10,12 -1,4 0,9 2,15l-12 7c-3,-6 -4,-11 -4,-16 0,-5 2,-10 5,-15 3,-5 8,-10 13,-15 6,-5 11,-8 16,-9 5,-2 9,-2 12,-1 3,1 7,2 10,5 2,2 5,5 9,10l12 15c9,11 14,17 17,20 3,2 6,4 9,6l-12 10c-3,-1 -6,-4 -9,-6zm-22 -25c-3,5 -8,11 -15,19 -4,4 -7,8 -8,10 -1,2 -2,5 -2,7 0,2 1,5 3,7 2,3 6,5 10,5 4,0 8,-2 13,-5 4,-4 8,-8 9,-12 2,-5 2,-9 1,-14 -1,-4 -3,-8 -7,-13l-3 -4z"/>
  <path className="fil54" d="M4349 5994l-6 -19 46 -123c3,-9 7,-16 10,-23l-85 28 -6 -18 109 -36 6 18 -51 133 -6 14 97 -32 6 18 -120 40z"/>
  <path id="1" className="fil54" d="M4556 5911c-5,8 -10,14 -16,19 -6,5 -12,8 -19,10 -12,4 -22,4 -31,0 -8,-4 -14,-10 -17,-19 -2,-5 -2,-11 -1,-16 1,-5 3,-10 6,-14 3,-4 7,-7 11,-11 3,-2 9,-5 16,-8 14,-7 25,-13 31,-17 -1,-3 -1,-4 -2,-5 -3,-8 -6,-12 -11,-14 -6,-3 -14,-2 -23,1 -9,3 -15,7 -18,11 -3,4 -4,11 -4,19l-19 4c-1,-8 0,-16 2,-22 2,-6 6,-12 13,-16 6,-5 14,-9 24,-12 9,-3 17,-5 24,-4 7,0 12,2 16,4 4,2 7,6 10,11 2,3 4,9 7,17l8 25c6,17 10,28 12,33 2,4 5,8 9,12l-19 6c-3,-3 -6,-7 -8,-12zm-15 -41c-6,5 -15,11 -28,17 -7,4 -12,7 -15,9 -3,2 -4,5 -5,8 -1,3 -1,6 0,10 2,5 5,8 10,11 5,2 11,2 18,0 7,-2 13,-6 18,-11 5,-5 7,-11 8,-17 1,-5 0,-11 -3,-20l-2 -7z"/>
  <path id="2" className="fil54" d="M4607 5909l-36 -110 17 -5 5 15c2,-7 5,-12 9,-18 5,-5 11,-9 18,-11 8,-3 15,-3 22,-2 6,2 12,5 16,11 4,-16 14,-26 28,-30 11,-4 20,-3 28,1 8,4 14,12 18,25l25 75 -19 6 -23 -69c-2,-7 -5,-13 -7,-16 -2,-3 -5,-5 -9,-6 -4,-1 -8,-1 -12,1 -8,3 -13,7 -17,14 -3,7 -3,16 0,27l21 64 -19 6 -24 -71c-3,-8 -6,-14 -11,-17 -4,-3 -10,-4 -17,-1 -5,2 -10,5 -13,9 -4,4 -5,9 -6,15 0,6 1,14 5,24l19 57 -19 6z"/>
  <path id="3" className="fil54" d="M4801 5846l-17 6 -50 -152 19 -6 18 54c5,-12 13,-21 25,-25 7,-2 14,-3 21,-2 7,1 13,3 19,7 6,4 11,9 15,15 5,6 8,13 11,21 6,19 6,35 0,48 -6,13 -15,22 -28,26 -13,4 -25,2 -36,-6l5 14zm-19 -56c4,13 9,22 15,27 9,8 19,10 29,7 8,-3 14,-9 18,-18 4,-9 3,-21 -2,-35 -5,-14 -11,-24 -19,-29 -8,-5 -16,-6 -24,-3 -8,3 -14,9 -18,18 -4,9 -3,20 1,34z"/>
  <path id="4" className="fil54" d="M4859 5682l-7 -21 19 -6 7 21 -19 6zm43 130l-36 -110 19 -6 36 110 -19 6z"/>
  <path id="5" className="fil54" d="M5016 5760c-5,8 -10,14 -16,19 -6,5 -12,8 -19,10 -12,4 -22,4 -31,0 -8,-4 -14,-10 -17,-19 -2,-5 -2,-11 -1,-16 1,-5 3,-10 6,-14 3,-4 7,-7 11,-11 3,-2 9,-5 16,-8 14,-7 25,-13 31,-17 -1,-3 -1,-4 -2,-5 -3,-8 -6,-12 -11,-14 -6,-3 -14,-2 -23,1 -9,3 -15,7 -18,11 -3,4 -4,11 -4,19l-19 4c-1,-8 0,-16 2,-22 2,-6 6,-12 13,-16 6,-5 14,-9 24,-12 9,-3 17,-5 24,-4 7,0 12,2 16,4 4,2 7,6 10,11 2,3 4,9 7,17l8 25c6,17 10,28 12,33 2,4 5,8 9,12l-19 6c-3,-3 -6,-7 -8,-12zm-15 -41c-6,5 -15,11 -28,17 -7,4 -12,7 -15,9 -3,2 -4,5 -5,8 -1,3 -1,6 0,10 2,5 5,8 10,11 5,2 11,2 18,0 7,-2 13,-6 18,-11 5,-5 7,-11 8,-17 1,-5 0,-11 -3,-20l-2 -7z"/>
  <polygon className="fil54" points="5586,4326 5586,4179 5605,4179 5605,4252 5678,4179 5704,4179 5642,4239 5706,4326 5681,4326 5629,4252 5605,4275 5605,4326 "/>
  <path id="1" className="fil54" d="M5793 4291l19 2c-3,11 -8,19 -16,25 -8,6 -18,9 -30,9 -15,0 -28,-5 -37,-14 -9,-9 -14,-23 -14,-40 0,-18 5,-32 14,-41 9,-10 21,-15 36,-15 14,0 26,5 35,14 9,10 13,23 13,41 0,1 0,3 0,5l-79 0c1,12 4,21 10,27 6,6 13,9 22,9 7,0 12,-2 17,-5 5,-3 8,-9 11,-17zm-59 -29l59 0c-1,-9 -3,-16 -7,-20 -6,-7 -13,-10 -22,-10 -8,0 -15,3 -21,8 -6,6 -9,13 -9,22z"/>
  <path id="2" className="fil54" d="M5834 4326l0 -106 16 0 0 15c8,-12 19,-17 34,-17 6,0 12,1 18,3 5,2 9,5 12,9 3,4 5,8 6,13 1,3 1,9 1,17l0 65 -18 0 0 -64c0,-7 -1,-13 -2,-16 -1,-4 -4,-6 -7,-9 -4,-2 -8,-3 -12,-3 -8,0 -14,2 -20,7 -6,5 -8,14 -8,28l0 58 -18 0z"/>
  <path id="3" className="fil54" d="M5947 4366l-2 -17c4,1 7,2 10,2 4,0 7,-1 10,-2 2,-1 4,-3 6,-6 1,-2 3,-6 5,-13 0,-1 1,-2 2,-4l-40 -106 19 0 22 61c3,8 5,16 8,24 2,-8 5,-16 7,-24l23 -62 18 0 -40 108c-4,12 -8,20 -10,24 -3,6 -7,10 -11,13 -4,3 -9,4 -15,4 -3,0 -7,-1 -12,-2z"/>
  <path id="4" className="fil54" d="M6119 4312c-7,6 -13,10 -19,12 -6,2 -13,4 -20,4 -12,0 -21,-3 -27,-9 -6,-6 -9,-13 -9,-22 0,-5 1,-10 4,-14 2,-4 5,-8 9,-10 4,-3 8,-5 13,-6 4,-1 9,-2 16,-3 14,-2 25,-4 32,-6 0,-2 0,-4 0,-5 0,-7 -2,-12 -5,-15 -5,-4 -11,-6 -20,-6 -8,0 -15,1 -19,4 -4,3 -7,8 -9,16l-18 -2c2,-8 4,-14 8,-18 4,-5 9,-8 16,-11 7,-2 15,-4 24,-4 9,0 16,1 22,3 6,2 10,5 12,8 3,3 5,7 6,12 1,3 1,9 1,17l0 24c0,17 0,27 1,32 1,4 2,9 4,13l-19 0c-2,-4 -3,-8 -3,-13zm-1 -40c-7,3 -16,5 -29,7 -7,1 -13,2 -16,4 -3,1 -5,3 -7,6 -2,3 -3,5 -3,9 0,5 2,9 5,12 4,3 9,5 16,5 7,0 13,-1 18,-5 5,-3 9,-7 12,-12 2,-4 3,-10 3,-18l0 -7z"/>
  <path className="fil54" d="M4790 3398l20 -2c1,8 3,15 7,20 3,5 9,9 16,12 7,3 15,5 24,5 8,0 15,-1 21,-4 6,-2 11,-6 14,-10 3,-4 5,-9 5,-14 0,-5 -1,-9 -4,-13 -3,-4 -8,-7 -14,-9 -4,-2 -14,-4 -28,-8 -15,-4 -25,-7 -31,-10 -8,-4 -13,-9 -17,-15 -4,-6 -6,-13 -6,-20 0,-8 2,-16 7,-23 5,-7 11,-12 20,-16 9,-4 18,-5 29,-5 12,0 22,2 31,6 9,4 16,9 21,17 5,7 7,16 8,25l-20 2c-1,-10 -5,-18 -11,-23 -6,-5 -15,-8 -28,-8 -13,0 -22,2 -28,7 -6,5 -9,10 -9,17 0,6 2,10 6,14 4,4 15,7 32,11 17,4 29,7 35,10 9,4 16,10 20,16 4,7 7,14 7,23 0,8 -2,16 -7,24 -5,7 -12,13 -21,17 -9,4 -19,6 -31,6 -14,0 -26,-2 -36,-6 -10,-4 -17,-10 -23,-19 -6,-8 -8,-18 -9,-29z"/>
  <path id="1" className="fil54" d="M4935 3392c0,-21 6,-37 18,-47 10,-9 22,-13 36,-13 16,0 29,5 39,16 10,10 15,25 15,43 0,15 -2,26 -7,35 -4,8 -11,15 -19,20 -8,5 -18,7 -28,7 -16,0 -29,-5 -39,-15 -10,-10 -15,-25 -15,-45zm20 0c0,15 3,26 10,33 6,7 15,11 24,11 10,0 18,-4 24,-11 6,-7 10,-19 10,-34 0,-14 -3,-25 -10,-32 -6,-7 -15,-11 -24,-11 -10,0 -18,4 -24,11 -6,7 -10,18 -10,33z"/>
  <path id="2" className="fil54" d="M5141 3450l0 -17c-9,13 -21,20 -36,20 -7,0 -13,-1 -19,-4 -6,-3 -10,-6 -13,-10 -3,-4 -5,-9 -6,-14 -1,-4 -1,-10 -1,-18l0 -71 20 0 0 64c0,10 0,17 1,21 1,5 4,9 8,12 4,3 9,4 15,4 6,0 11,-1 16,-4 5,-3 9,-7 11,-12 2,-5 3,-13 3,-22l0 -62 20 0 0 115 -18 0z"/>
  <path id="3" className="fil54" d="M5232 3432l3 17c-5,1 -10,2 -15,2 -7,0 -13,-1 -16,-3 -4,-2 -7,-5 -8,-9 -2,-4 -2,-11 -2,-23l0 -66 -14 0 0 -15 14 0 0 -28 20 -12 0 40 20 0 0 15 -20 0 0 67c0,6 0,9 1,11 1,2 2,3 3,4 2,1 4,1 7,1 2,0 5,0 9,-1z"/>
  <path id="4" className="fil54" d="M5251 3450l0 -159 20 0 0 57c9,-11 20,-16 34,-16 8,0 16,2 22,5 6,3 11,8 13,14 3,6 4,15 4,26l0 73 -20 0 0 -73c0,-10 -2,-17 -6,-21 -4,-4 -10,-7 -18,-7 -6,0 -11,1 -16,4 -5,3 -9,7 -11,12 -2,5 -3,12 -3,21l0 63 -20 0z"/>
  <path id="5" className="fil54" d="M4790 3646l20 -2c1,8 3,15 7,20 3,5 9,9 16,12 7,3 15,5 24,5 8,0 15,-1 21,-4 6,-2 11,-6 14,-10 3,-4 5,-9 5,-14 0,-5 -1,-9 -4,-13 -3,-4 -8,-7 -14,-9 -4,-2 -14,-4 -28,-8 -15,-4 -25,-7 -31,-10 -8,-4 -13,-9 -17,-15 -4,-6 -6,-13 -6,-20 0,-8 2,-16 7,-23 5,-7 11,-12 20,-16 9,-4 18,-5 29,-5 12,0 22,2 31,6 9,4 16,9 21,17 5,7 7,16 8,25l-20 2c-1,-10 -5,-18 -11,-23 -6,-5 -15,-8 -28,-8 -13,0 -22,2 -28,7 -6,5 -9,10 -9,17 0,6 2,10 6,14 4,4 15,7 32,11 17,4 29,7 35,10 9,4 16,10 20,16 4,7 7,14 7,23 0,8 -2,16 -7,24 -5,7 -12,13 -21,17 -9,4 -19,6 -31,6 -14,0 -26,-2 -36,-6 -10,-4 -17,-10 -23,-19 -6,-8 -8,-18 -9,-29z"/>
  <path id="6" className="fil54" d="M5018 3697l0 -17c-9,13 -21,20 -36,20 -7,0 -13,-1 -19,-4 -6,-3 -10,-6 -13,-10 -3,-4 -5,-9 -6,-14 -1,-4 -1,-10 -1,-18l0 -71 20 0 0 64c0,10 0,17 1,21 1,5 4,9 8,12 4,3 9,4 15,4 6,0 11,-1 16,-4 5,-3 9,-7 11,-12 2,-5 3,-13 3,-22l0 -62 20 0 0 115 -18 0z"/>
  <path id="7" className="fil54" d="M5141 3697l0 -15c-7,11 -18,17 -32,17 -9,0 -18,-3 -25,-8 -8,-5 -14,-12 -18,-21 -4,-9 -6,-19 -6,-31 0,-11 2,-22 6,-31 4,-9 10,-16 17,-21 8,-5 16,-7 26,-7 7,0 13,1 19,4 5,3 10,7 13,11l0 -57 20 0 0 159 -18 0zm-62 -57c0,15 3,26 9,33 6,7 14,11 22,11 9,0 16,-3 22,-10 6,-7 9,-18 9,-32 0,-16 -3,-27 -9,-35 -6,-7 -14,-11 -22,-11 -9,0 -16,4 -22,11 -6,7 -9,18 -9,33z"/>
  <path id="8" className="fil54" d="M5265 3683c-7,6 -14,11 -21,13 -7,3 -14,4 -22,4 -13,0 -22,-3 -29,-9 -7,-6 -10,-14 -10,-24 0,-6 1,-11 4,-15 3,-5 6,-8 10,-11 4,-3 9,-5 14,-6 4,-1 10,-2 17,-3 16,-2 27,-4 35,-7 0,-3 0,-4 0,-5 0,-8 -2,-14 -6,-17 -5,-4 -12,-7 -22,-7 -9,0 -16,2 -20,5 -4,3 -8,9 -10,17l-19 -3c2,-8 5,-15 9,-20 4,-5 10,-9 17,-12 8,-3 16,-4 26,-4 10,0 18,1 24,3 6,2 11,5 14,9 3,4 5,8 6,13 1,3 1,9 1,18l0 26c0,18 0,30 1,34 1,5 2,9 5,14l-20 0c-2,-4 -3,-9 -4,-14zm-2 -43c-7,3 -18,5 -32,7 -8,1 -14,2 -17,4 -3,1 -6,4 -8,6 -2,3 -3,6 -3,9 0,5 2,9 6,13 4,3 10,5 17,5 8,0 14,-2 20,-5 6,-3 10,-8 13,-13 2,-4 3,-11 3,-19l0 -7z"/>
  <path id="9" className="fil54" d="M5313 3697l0 -115 18 0 0 16c8,-13 21,-19 37,-19 7,0 13,1 19,4 6,2 10,6 13,10 3,4 5,9 6,14 1,4 1,10 1,19l0 71 -20 0 0 -70c0,-8 -1,-14 -2,-18 -2,-4 -4,-7 -8,-9 -4,-2 -8,-4 -14,-4 -8,0 -15,3 -21,8 -6,5 -9,15 -9,30l0 63 -20 0z"/>
  <polygon className="fil54" points="5563,3520 5563,3323 5706,3323 5706,3346 5589,3346 5589,3407 5698,3407 5698,3430 5589,3430 5589,3497 5710,3497 5710,3520 "/>
  <path id="1" className="fil54" d="M5796 3499l3 21c-7,1 -13,2 -18,2 -9,0 -16,-1 -20,-4 -5,-3 -8,-6 -10,-11 -2,-5 -3,-14 -3,-29l0 -82 -18 0 0 -19 18 0 0 -35 24 -15 0 50 24 0 0 19 -24 0 0 84c0,7 0,11 1,13 1,2 2,4 4,5 2,1 5,2 8,2 3,0 6,0 11,-1z"/>
  <path id="2" className="fil54" d="M5820 3520l0 -197 24 0 0 71c11,-13 25,-20 43,-20 11,0 20,2 27,6 8,4 13,10 17,17 3,7 5,18 5,32l0 91 -24 0 0 -90c0,-12 -3,-21 -8,-26 -5,-6 -13,-8 -22,-8 -7,0 -14,2 -20,6 -6,4 -11,9 -13,15 -3,6 -4,15 -4,26l0 78 -24 0z"/>
  <path id="3" className="fil54" d="M5973 3351l0 -28 24 0 0 28 -24 0zm0 170l0 -143 24 0 0 143 -24 0z"/>
  <path id="4" className="fil54" d="M6025 3449c0,-26 7,-46 22,-59 12,-11 27,-16 45,-16 20,0 36,6 48,19 12,13 19,31 19,53 0,18 -3,33 -8,43 -6,11 -14,19 -24,25 -11,6 -22,9 -34,9 -20,0 -36,-6 -49,-19 -12,-13 -19,-31 -19,-55zm25 0c0,18 4,32 12,41 8,9 18,14 30,14 12,0 22,-5 30,-14 8,-9 12,-23 12,-42 0,-18 -4,-31 -12,-40 -8,-9 -18,-14 -30,-14 -12,0 -22,5 -30,14 -8,9 -12,23 -12,41z"/>
  <path id="5" className="fil54" d="M6188 3575l0 -198 22 0 0 19c5,-7 11,-13 18,-16 7,-4 14,-5 24,-5 12,0 23,3 32,9 9,6 16,15 21,27 5,11 7,24 7,38 0,15 -3,28 -8,39 -5,12 -13,21 -23,27 -10,6 -20,9 -32,9 -8,0 -15,-2 -22,-5 -6,-3 -12,-8 -16,-13l0 70 -24 0zm22 -125c0,18 4,32 11,41 7,9 16,13 27,13 11,0 20,-5 28,-14 8,-9 11,-23 11,-42 0,-18 -4,-32 -11,-41 -7,-9 -16,-14 -27,-14 -10,0 -19,5 -27,14 -8,10 -12,24 -12,42z"/>
  <path id="6" className="fil54" d="M6341 3351l0 -28 24 0 0 28 -24 0zm0 170l0 -143 24 0 0 143 -24 0z"/>
  <path id="7" className="fil54" d="M6496 3502c-9,8 -18,13 -26,16 -8,3 -17,5 -27,5 -16,0 -28,-4 -36,-11 -8,-8 -13,-17 -13,-29 0,-7 2,-13 5,-19 3,-6 7,-10 13,-14 5,-3 11,-6 17,-8 5,-1 12,-2 22,-4 20,-2 34,-5 43,-8 0,-3 0,-5 0,-6 0,-10 -2,-17 -7,-21 -6,-5 -15,-8 -28,-8 -11,0 -20,2 -25,6 -5,4 -9,11 -12,21l-24 -3c2,-10 6,-18 11,-25 5,-6 12,-11 21,-14 9,-3 20,-5 33,-5 12,0 22,1 30,4 8,3 13,6 17,11 4,4 6,10 8,17 1,4 1,12 1,22l0 32c0,22 1,37 2,43 1,6 3,12 6,17l-25 0c-2,-5 -4,-11 -5,-18zm-2 -54c-9,4 -22,7 -40,9 -10,1 -17,3 -21,5 -4,2 -7,4 -10,8 -2,3 -3,7 -3,11 0,6 2,12 7,16 5,4 12,6 21,6 9,0 18,-2 25,-6 7,-4 13,-10 16,-17 3,-5 4,-14 4,-24l0 -9z"/>
  <path className="fil54" d="M6571 3279l14 -1c1,6 2,11 5,14 3,4 6,7 12,9 5,2 11,3 18,3 6,0 11,-1 15,-3 4,-2 8,-4 10,-7 2,-3 3,-6 3,-10 0,-4 -1,-7 -3,-9 -2,-3 -6,-5 -10,-7 -3,-1 -10,-3 -21,-6 -11,-3 -18,-5 -22,-7 -6,-3 -10,-7 -12,-11 -3,-4 -4,-9 -4,-14 0,-6 2,-11 5,-16 3,-5 8,-9 14,-12 6,-3 13,-4 21,-4 9,0 16,1 23,4 7,3 12,7 15,12 4,5 5,11 6,18l-15 1c-1,-7 -3,-13 -8,-17 -5,-4 -11,-6 -20,-6 -9,0 -16,2 -20,5 -4,3 -6,7 -6,12 0,4 2,8 4,10 3,3 11,5 23,8 12,3 21,5 26,7 7,3 12,7 15,12 3,5 5,10 5,16 0,6 -2,12 -5,17 -4,5 -9,10 -15,13 -7,3 -14,5 -22,5 -10,0 -19,-2 -26,-5 -7,-3 -13,-8 -17,-14 -4,-6 -6,-13 -6,-21z"/>
  <path id="1" className="fil54" d="M6676 3274c0,-15 4,-27 13,-34 7,-6 16,-9 26,-9 11,0 21,4 28,11 7,7 11,18 11,31 0,11 -2,19 -5,25 -3,6 -8,11 -14,14 -6,3 -13,5 -20,5 -12,0 -21,-4 -28,-11 -7,-8 -11,-18 -11,-32zm15 0c0,11 2,19 7,24 5,5 11,8 18,8 7,0 13,-3 18,-8 5,-5 7,-13 7,-24 0,-10 -2,-18 -7,-23 -5,-5 -11,-8 -18,-8 -7,0 -13,3 -18,8 -5,5 -7,13 -7,24z"/>
  <path id="2" className="fil54" d="M6771 3316l0 -84 13 0 0 12c3,-4 6,-7 10,-10 4,-3 9,-4 15,-4 6,0 11,1 15,4 4,3 7,6 8,11 7,-10 15,-15 26,-15 8,0 15,2 19,7 4,5 7,12 7,21l0 57 -14 0 0 -53c0,-6 0,-10 -1,-12 -1,-2 -3,-4 -5,-6 -2,-2 -5,-2 -9,-2 -6,0 -11,2 -15,6 -4,4 -6,10 -6,19l0 49 -14 0 0 -54c0,-6 -1,-11 -3,-14 -2,-3 -6,-5 -11,-5 -4,0 -8,1 -11,3 -3,2 -6,5 -7,9 -2,4 -2,10 -2,17l0 43 -14 0z"/>
  <path id="3" className="fil54" d="M6960 3306c-5,4 -10,8 -15,9 -5,2 -10,3 -16,3 -9,0 -16,-2 -21,-7 -5,-4 -7,-10 -7,-17 0,-4 1,-8 3,-11 2,-3 4,-6 7,-8 3,-2 6,-4 10,-5 3,-1 7,-1 13,-2 11,-1 20,-3 25,-5 0,-2 0,-3 0,-4 0,-6 -1,-10 -4,-12 -4,-3 -9,-5 -16,-5 -7,0 -12,1 -15,4 -3,2 -6,6 -7,12l-14 -2c1,-6 3,-11 6,-14 3,-4 7,-6 13,-8 5,-2 12,-3 19,-3 7,0 13,1 17,3 4,2 8,4 10,6 2,3 4,6 4,10 0,2 1,7 1,13l0 19c0,13 0,21 1,25 1,4 2,7 3,10l-15 0c-1,-3 -2,-6 -3,-10zm-1 -31c-5,2 -13,4 -23,5 -6,1 -10,2 -12,3 -2,1 -4,3 -6,5 -1,2 -2,4 -2,7 0,4 1,7 4,9 3,2 7,4 13,4 5,0 10,-1 15,-4 4,-2 7,-6 9,-10 2,-3 2,-8 2,-14l0 -5z"/>
  <polygon id="4" className="fil54" points="6995,3316 6995,3201 7009,3201 7009,3316 "/>
  <path id="5" className="fil54" d="M7031 3217l0 -16 14 0 0 16 -14 0zm0 99l0 -84 14 0 0 84 -14 0z"/>
  <path id="6" className="fil54" d="M7122 3306c-5,4 -10,8 -15,9 -5,2 -10,3 -16,3 -9,0 -16,-2 -21,-7 -5,-4 -7,-10 -7,-17 0,-4 1,-8 3,-11 2,-3 4,-6 7,-8 3,-2 6,-4 10,-5 3,-1 7,-1 13,-2 11,-1 20,-3 25,-5 0,-2 0,-3 0,-4 0,-6 -1,-10 -4,-12 -4,-3 -9,-5 -16,-5 -7,0 -12,1 -15,4 -3,2 -6,6 -7,12l-14 -2c1,-6 3,-11 6,-14 3,-4 7,-6 13,-8 5,-2 12,-3 19,-3 7,0 13,1 17,3 4,2 8,4 10,6 2,3 4,6 4,10 0,2 1,7 1,13l0 19c0,13 0,21 1,25 1,4 2,7 3,10l-15 0c-1,-3 -2,-6 -3,-10zm-1 -31c-5,2 -13,4 -23,5 -6,1 -10,2 -12,3 -2,1 -4,3 -6,5 -1,2 -2,4 -2,7 0,4 1,7 4,9 3,2 7,4 13,4 5,0 10,-1 15,-4 4,-2 7,-6 9,-10 2,-3 2,-8 2,-14l0 -5z"/>
  <path className="fil54" d="M4688 6310l0 -11 45 -57c3,-4 6,-8 9,-11l-49 0 0 -10 63 0 0 10 -50 62 -5 6 57 0 0 10 -70 0z"/>
  <path id="1" className="fil54" d="M4769 6233l0 -12 11 0 0 12 -11 0zm0 76l0 -64 11 0 0 64 -11 0z"/>
  <path id="2" className="fil54" d="M4796 6310l0 -64 10 0 0 9c2,-3 5,-6 8,-8 3,-2 7,-3 11,-3 5,0 9,1 12,3 3,2 5,5 6,8 5,-7 12,-11 20,-11 6,0 11,2 15,5 3,4 5,9 5,16l0 44 -11 0 0 -40c0,-4 0,-7 -1,-9 -1,-2 -2,-3 -4,-5 -2,-1 -4,-2 -7,-2 -5,0 -8,2 -11,5 -3,3 -4,8 -4,14l0 37 -11 0 0 -42c0,-5 -1,-8 -3,-11 -2,-2 -5,-4 -9,-4 -3,0 -6,1 -8,2 -3,2 -4,4 -6,7 -1,3 -2,8 -2,13l0 33 -11 0z"/>
  <path id="3" className="fil54" d="M4910 6310l-10 0 0 -89 11 0 0 32c5,-6 10,-9 18,-9 4,0 8,1 11,2 4,2 6,4 9,7 2,3 4,6 5,10 1,4 2,8 2,13 0,11 -3,19 -8,25 -5,6 -12,9 -20,9 -8,0 -14,-3 -18,-9l0 8zm0 -33c0,8 1,13 3,17 3,6 8,8 14,8 5,0 9,-2 12,-6 3,-4 5,-10 5,-18 0,-8 -2,-15 -5,-19 -3,-4 -7,-6 -12,-6 -5,0 -9,2 -12,6 -3,4 -5,10 -5,18z"/>
  <path id="4" className="fil54" d="M5011 6302c-4,3 -8,6 -12,7 -4,1 -8,2 -12,2 -7,0 -13,-2 -16,-5 -4,-3 -6,-8 -6,-13 0,-3 1,-6 2,-9 1,-3 3,-5 6,-6 2,-2 5,-3 8,-4 2,-1 5,-1 10,-2 9,-1 15,-2 19,-4 0,-1 0,-2 0,-3 0,-4 -1,-8 -3,-9 -3,-2 -7,-4 -12,-4 -5,0 -9,1 -11,3 -2,2 -4,5 -5,10l-11 -1c1,-5 3,-8 5,-11 2,-3 5,-5 10,-6 4,-2 9,-2 15,-2 5,0 10,1 13,2 3,1 6,3 8,5 2,2 3,4 3,7 0,2 1,5 1,10l0 14c0,10 0,16 1,19 0,3 1,5 3,8l-11 0c-1,-2 -2,-5 -2,-8zm-1 -24c-4,2 -10,3 -18,4 -5,1 -8,1 -10,2 -2,1 -3,2 -4,4 -1,2 -2,3 -2,5 0,3 1,5 3,7 2,2 5,3 10,3 4,0 8,-1 11,-3 3,-2 6,-4 7,-7 1,-2 2,-6 2,-11l0 -4z"/>
  <path id="5" className="fil54" d="M5048 6310l-10 0 0 -89 11 0 0 32c5,-6 10,-9 18,-9 4,0 8,1 11,2 4,2 6,4 9,7 2,3 4,6 5,10 1,4 2,8 2,13 0,11 -3,19 -8,25 -5,6 -12,9 -20,9 -8,0 -14,-3 -18,-9l0 8zm0 -33c0,8 1,13 3,17 3,6 8,8 14,8 5,0 9,-2 12,-6 3,-4 5,-10 5,-18 0,-8 -2,-15 -5,-19 -3,-4 -7,-6 -12,-6 -5,0 -9,2 -12,6 -3,4 -5,10 -5,18z"/>
  <path id="6" className="fil54" d="M5118 6310l-19 -64 11 0 10 37 4 14c0,-1 1,-5 3,-13l10 -38 11 0 10 37 3 12 4 -12 11 -37 11 0 -20 64 -11 0 -10 -38 -3 -11 -13 49 -12 0z"/>
  <path id="7" className="fil54" d="M5240 6289l11 1c-2,7 -5,12 -10,15 -5,4 -11,5 -18,5 -9,0 -17,-3 -22,-9 -5,-6 -8,-14 -8,-24 0,-11 3,-19 8,-25 6,-6 13,-9 22,-9 9,0 16,3 21,9 5,6 8,14 8,25 0,1 0,2 0,3l-48 0c0,7 2,12 6,16 4,4 8,6 13,6 4,0 7,-1 10,-3 3,-2 5,-5 7,-10zm-36 -17l36 0c0,-5 -2,-9 -4,-12 -3,-4 -8,-6 -13,-6 -5,0 -9,2 -13,5 -3,3 -5,8 -6,13z"/>
  <path className="fil54" d="M5426 6367l-79 -85 17 -16 76 42c7,4 12,7 16,9 -2,-4 -5,-10 -8,-18l-34 -78 15 -14 79 85 -11 10 -66 -71 41 94 -10 9 -92 -50 67 73 -11 10z"/>
  <path id="1" className="fil54" d="M5493 6250c-11,-11 -15,-23 -14,-34 1,-9 5,-18 13,-25 8,-8 18,-11 29,-11 11,1 20,6 29,16 7,8 12,15 14,22 2,7 2,13 -1,20 -2,7 -6,13 -11,18 -9,8 -18,12 -29,11 -10,-1 -20,-6 -30,-17zm11 -10c7,8 14,12 22,13 7,1 13,-1 18,-6 5,-5 8,-11 8,-18 0,-7 -4,-15 -12,-23 -7,-8 -14,-12 -21,-13 -7,-1 -13,1 -18,6 -5,5 -8,11 -8,18 0,7 4,15 11,23z"/>
  <path id="2" className="fil54" d="M5586 6221l-8 -8 -2 -81c-4,4 -8,8 -11,11l-25 23 -8 -8 51 -47 6 7 3 70 0 13c4,-5 9,-9 13,-13l29 -26 8 9 -55 50z"/>
  <path id="3" className="fil54" d="M5685 6117c-1,7 -2,13 -5,17 -2,5 -6,9 -10,13 -7,6 -14,9 -20,9 -7,0 -12,-3 -17,-8 -3,-3 -5,-6 -6,-10 -1,-4 -1,-7 0,-11 1,-4 2,-7 4,-10 2,-2 4,-6 8,-10 8,-9 13,-16 15,-21 -1,-1 -2,-2 -2,-3 -4,-4 -8,-6 -11,-6 -5,0 -10,3 -15,7 -5,5 -8,9 -9,13 -1,4 0,9 3,14l-12 8c-3,-5 -5,-10 -5,-15 0,-5 1,-10 4,-15 3,-5 7,-10 12,-15 5,-5 10,-8 15,-10 4,-2 8,-2 12,-2 3,0 7,2 10,4 2,1 5,5 9,9l13 14c9,10 15,16 18,18 3,2 6,4 9,5l-11 10c-3,-1 -6,-3 -9,-6zm-22 -23c-2,5 -7,12 -13,20 -4,5 -6,8 -7,11 -1,2 -1,5 -1,7 0,2 1,4 3,6 3,3 6,4 10,4 4,0 8,-2 12,-6 4,-4 7,-8 8,-13 2,-5 2,-9 0,-14 -1,-3 -4,-7 -8,-12l-4 -4z"/>
  <path id="4" className="fil54" d="M5718 6101l-57 -62 9 -9 8 9c-1,-5 -1,-10 1,-14 2,-5 4,-9 8,-13 5,-4 9,-7 14,-8 5,-1 9,0 14,2 -2,-12 1,-21 9,-28 6,-6 12,-8 19,-8 6,0 13,4 19,11l39 42 -10 10 -36 -39c-4,-4 -7,-7 -9,-8 -2,-1 -5,-2 -8,-1 -3,1 -5,2 -8,4 -4,4 -7,9 -7,14 0,6 3,11 8,18l33 36 -10 10 -37 -40c-4,-5 -8,-7 -12,-8 -4,-1 -8,1 -12,4 -3,3 -5,6 -6,10 -1,4 -1,8 1,12 2,4 5,9 10,14l30 32 -10 10z"/>
  <path id="5" className="fil54" d="M5828 6001l-10 9 -79 -85 10 -10 28 30c-1,-10 2,-18 9,-24 4,-4 8,-6 13,-8 5,-2 10,-2 14,-1 5,1 10,3 14,5 5,3 9,6 13,11 10,11 15,21 15,32 0,11 -4,19 -11,26 -7,7 -16,9 -26,7l7 8zm-29 -31c7,7 13,12 18,13 8,2 15,1 21,-4 5,-4 7,-10 6,-17 0,-7 -4,-15 -11,-22 -7,-8 -15,-13 -21,-13 -7,-1 -12,1 -17,5 -5,4 -7,10 -6,17 0,7 4,14 11,22z"/>
  <path id="6" className="fil54" d="M5817 5876l-11 -12 10 -10 11 12 -10 10zm67 73l-57 -62 10 -10 57 62 -10 10z"/>
  <path id="7" className="fil54" d="M5972 5913l-28 -30c0,4 0,8 -2,12 -2,4 -4,8 -7,11 -7,7 -16,10 -27,9 -11,-1 -21,-7 -30,-17 -6,-6 -10,-13 -12,-20 -2,-7 -3,-14 -1,-20 2,-6 5,-12 10,-16 8,-7 17,-9 27,-7l-8 -8 9 -9 79 86 -10 10zm-83 -25c7,8 14,12 21,13 7,1 13,-1 17,-5 4,-4 7,-10 6,-16 0,-7 -4,-14 -11,-22 -8,-8 -15,-13 -22,-14 -7,-1 -13,1 -18,5 -5,4 -7,10 -6,16 0,7 4,14 12,22z"/>
  <path id="8" className="fil54" d="M6018 5827l-8 -9c2,11 -2,21 -10,29 -4,3 -8,6 -12,7 -4,2 -8,2 -12,1 -3,-1 -7,-2 -10,-5 -2,-2 -6,-5 -10,-9l-35 -38 10 -10 32 34c5,5 9,9 11,10 3,2 7,3 10,3 4,0 7,-2 10,-5 3,-3 5,-6 7,-11 1,-4 1,-8 0,-12 -1,-4 -5,-8 -9,-14l-31 -33 10 -10 57 62 -9 9z"/>
  <path id="9" className="fil54" d="M6068 5745l12 -9c4,8 5,16 4,23 -1,8 -6,15 -13,22 -9,8 -19,12 -29,11 -10,-1 -20,-6 -30,-16 -10,-10 -14,-21 -14,-32 0,-11 4,-20 13,-28 8,-8 18,-11 28,-10 10,1 20,6 30,17 1,1 1,2 3,3l-46 42c7,6 13,10 20,10 7,0 13,-2 18,-6 4,-4 6,-8 7,-12 1,-5 0,-10 -2,-16zm-50 15l35 -32c-5,-5 -10,-7 -15,-8 -7,-1 -13,1 -19,6 -5,4 -7,10 -8,16 0,6 2,12 6,18z"/>
  <path className="fil54" d="M3030 3830l12 -7c6,10 9,19 8,28 -1,9 -5,18 -12,25 -7,8 -15,13 -23,15 -8,2 -16,1 -25,-2 -9,-3 -16,-8 -23,-15 -8,-7 -13,-15 -16,-23 -3,-8 -3,-17 -1,-25 2,-8 6,-15 12,-22 7,-7 15,-12 23,-13 8,-1 17,0 26,4l-7 12c-7,-3 -13,-5 -19,-4 -5,1 -11,4 -15,9 -5,6 -8,12 -9,18 -1,6 0,12 3,18 3,6 7,11 12,16 6,6 13,10 19,13 6,3 13,3 18,1 6,-2 11,-5 15,-9 5,-5 8,-12 8,-18 0,-7 -2,-14 -7,-21z"/>
  <path id="1" className="fil54" d="M3102 3793c0,6 -1,11 -3,15 -2,4 -4,8 -8,12 -6,6 -11,9 -17,9 -6,0 -11,-1 -15,-6 -3,-2 -4,-5 -5,-9 -1,-3 -1,-6 -1,-10 0,-3 2,-6 3,-9 1,-2 3,-5 6,-9 6,-8 10,-14 12,-19 -1,-1 -2,-2 -2,-2 -4,-3 -7,-5 -10,-5 -4,0 -8,3 -13,7 -4,4 -6,8 -7,11 0,3 1,7 4,12l-10 8c-3,-4 -5,-9 -5,-13 -1,-4 0,-8 2,-13 2,-5 5,-9 10,-14 4,-5 8,-8 12,-10 4,-2 7,-3 10,-2 3,0 6,1 9,3 2,1 5,4 9,7l12 11c8,8 14,13 16,14 3,2 5,3 9,4l-9 9c-3,-1 -6,-2 -8,-4zm-21 -18c-2,5 -5,11 -10,18 -3,4 -5,7 -6,10 -1,2 -1,4 0,6 1,2 2,4 3,5 2,2 5,3 9,3 3,0 7,-2 10,-6 3,-3 5,-7 6,-11 1,-4 1,-8 -1,-12 -1,-3 -4,-6 -8,-10l-3 -3z"/>
  <path id="2" className="fil54" d="M3130 3777l-53 -50 8 -8 7 7c-1,-4 -1,-8 0,-13 1,-4 3,-8 7,-12 4,-4 8,-6 12,-7 4,-1 8,-1 12,1 -2,-10 0,-18 6,-25 5,-5 10,-8 16,-8 6,0 11,3 17,8l36 34 -8 9 -33 -32c-4,-3 -6,-6 -9,-6 -2,-1 -4,-1 -7,0 -2,1 -5,2 -7,4 -4,4 -5,8 -5,13 0,5 3,10 8,15l31 29 -8 9 -35 -33c-4,-4 -8,-6 -11,-6 -3,0 -7,1 -10,4 -2,3 -4,6 -5,9 -1,3 0,7 1,10 2,3 5,7 10,12l28 26 -9 9z"/>
  <path id="3" className="fil54" d="M3228 3640l10 -8c4,7 6,13 5,20 -1,7 -4,13 -10,19 -7,8 -16,12 -25,12 -9,0 -18,-4 -27,-12 -9,-8 -14,-17 -14,-27 -1,-9 3,-18 9,-25 7,-7 15,-11 24,-11 9,0 18,4 27,13 1,0 1,1 2,2l-37 40c6,5 12,8 18,8 6,0 11,-2 15,-7 3,-3 5,-7 5,-11 0,-4 -1,-8 -3,-13zm-42 16l28 -30c-5,-4 -9,-6 -13,-6 -6,0 -11,2 -16,6 -4,4 -6,9 -6,14 0,5 2,10 7,15z"/>
  <path id="4" className="fil54" d="M3265 3636l-53 -50 8 -8 8 8c-2,-6 -3,-10 -2,-13 0,-3 2,-5 4,-7 3,-3 7,-5 12,-7l5 11c-3,1 -6,3 -8,5 -2,2 -3,4 -3,7 0,3 0,5 2,8 2,4 5,8 9,11l28 26 -9 9z"/>
  <path id="5" className="fil54" d="M3267 3580c-10,-9 -15,-19 -14,-29 0,-8 4,-16 10,-22 7,-7 15,-11 24,-11 9,0 18,4 26,12 7,6 11,13 13,18 2,6 2,12 1,18 -2,6 -4,11 -9,16 -7,7 -15,11 -24,11 -9,0 -18,-4 -27,-13zm9 -9c7,6 13,10 19,10 6,0 11,-2 16,-6 4,-4 6,-10 5,-16 -1,-6 -4,-13 -11,-19 -7,-6 -13,-9 -19,-10 -6,0 -11,2 -16,6 -4,5 -6,10 -6,16 1,6 4,12 11,19z"/>
  <path id="6" className="fil54" d="M3321 3523c-10,-9 -15,-19 -14,-29 0,-8 4,-16 10,-22 7,-7 15,-11 24,-11 9,0 18,4 26,12 7,6 11,13 13,18 2,6 2,12 1,18 -2,6 -4,11 -9,16 -7,7 -15,11 -24,11 -9,0 -18,-4 -27,-13zm9 -9c7,6 13,10 19,10 6,0 11,-2 16,-6 4,-4 6,-10 5,-16 -1,-6 -4,-13 -11,-19 -7,-6 -13,-9 -19,-10 -6,0 -11,2 -16,6 -4,5 -6,10 -6,16 1,6 4,12 11,19z"/>
  <path id="7" className="fil54" d="M3405 3489l-53 -50 8 -8 8 7c-2,-9 0,-18 7,-25 3,-3 6,-6 10,-7 4,-2 7,-2 10,-2 3,0 6,2 9,3 2,1 5,4 9,8l33 31 -8 9 -32 -30c-4,-3 -7,-6 -9,-7 -2,-1 -5,-1 -8,0 -3,1 -5,2 -8,5 -4,4 -6,8 -6,13 0,5 3,11 10,17l29 27 -9 9z"/>
  <path className="fil54" d="M3732 3520l12 3c-3,10 -7,18 -14,23 -7,5 -15,8 -25,8 -10,0 -18,-2 -25,-6 -6,-4 -11,-10 -14,-18 -3,-8 -5,-16 -5,-25 0,-10 2,-18 6,-25 4,-7 9,-13 16,-17 7,-4 14,-6 23,-6 9,0 17,2 24,7 6,5 11,11 13,20l-12 3c-2,-7 -5,-12 -9,-15 -4,-3 -9,-5 -16,-5 -7,0 -13,2 -18,5 -5,3 -8,8 -10,14 -2,6 -3,12 -3,18 0,8 1,15 3,21 2,6 6,10 11,13 5,3 10,4 16,4 7,0 13,-2 18,-6 5,-4 8,-10 10,-18z"/>
  <path id="1" className="fil54" d="M3804 3531l12 2c-2,7 -5,12 -10,16 -5,4 -12,6 -19,6 -10,0 -18,-3 -24,-9 -6,-6 -9,-15 -9,-26 0,-11 3,-20 9,-26 6,-6 13,-9 23,-9 9,0 16,3 22,9 6,6 9,15 9,26 0,1 0,2 0,3l-51 0c0,7 3,13 6,17 4,4 8,6 14,6 4,0 8,-1 11,-3 3,-2 5,-6 7,-11zm-38 -18l38 0c0,-6 -2,-10 -4,-13 -4,-4 -8,-7 -14,-7 -5,0 -10,2 -13,5 -4,4 -6,8 -6,14z"/>
  <path id="2" className="fil54" d="M3831 3553l0 -68 10 0 0 10c5,-7 12,-11 22,-11 4,0 8,1 11,2 3,1 6,3 8,6 2,2 3,5 4,8 0,2 1,6 1,11l0 42 -12 0 0 -41c0,-5 0,-8 -1,-11 -1,-2 -2,-4 -5,-6 -2,-1 -5,-2 -8,-2 -5,0 -9,2 -13,5 -4,3 -5,9 -5,18l0 37 -12 0z"/>
  <path id="3" className="fil54" d="M3928 3542l2 10c-3,1 -6,1 -9,1 -4,0 -7,-1 -10,-2 -2,-1 -4,-3 -5,-5 -1,-2 -1,-7 -1,-14l0 -39 -8 0 0 -9 8 0 0 -17 12 -7 0 24 12 0 0 9 -12 0 0 40c0,3 0,5 1,6 0,1 1,2 2,2 1,1 2,1 4,1 1,0 3,0 5,0z"/>
  <path id="4" className="fil54" d="M3940 3553l0 -68 10 0 0 10c3,-5 5,-8 7,-10 2,-2 5,-2 7,-2 4,0 8,1 12,4l-4 11c-3,-2 -6,-2 -8,-2 -3,0 -5,1 -7,2 -2,2 -3,4 -4,6 -1,4 -2,9 -2,13l0 35 -12 0z"/>
  <path id="5" className="fil54" d="M4027 3544c-4,4 -8,6 -12,8 -4,2 -8,2 -13,2 -7,0 -13,-2 -17,-5 -4,-4 -6,-8 -6,-14 0,-3 1,-6 2,-9 2,-3 4,-5 6,-7 2,-2 5,-3 8,-4 2,-1 6,-1 10,-2 9,-1 16,-2 21,-4 0,-2 0,-3 0,-3 0,-5 -1,-8 -3,-10 -3,-3 -7,-4 -13,-4 -5,0 -9,1 -12,3 -3,2 -4,5 -6,10l-11 -2c1,-5 3,-9 5,-12 2,-3 6,-5 10,-7 4,-2 10,-2 15,-2 6,0 11,1 14,2 4,1 6,3 8,5 2,2 3,5 4,8 0,2 1,5 1,11l0 15c0,11 0,17 1,20 0,3 1,6 3,8l-12 0c-1,-2 -2,-5 -2,-8zm-1 -25c-4,2 -10,3 -19,4 -5,1 -8,1 -10,2 -2,1 -3,2 -5,4 -1,2 -2,3 -2,5 0,3 1,6 3,8 2,2 6,3 10,3 4,0 8,-1 12,-3 3,-2 6,-5 8,-8 1,-3 2,-6 2,-11l0 -4z"/>
  <polygon id="6" className="fil54" points="4056,3553 4056,3459 4067,3459 4067,3553 "/>
  <path id="7" className="fil54" d="M4105 3553l36 -94 14 0 38 94 -14 0 -11 -28 -39 0 -10 28 -13 0zm27 -38l32 0 -10 -26c-3,-8 -5,-14 -7,-20 -1,6 -3,12 -5,18l-10 27z"/>
  <path id="8" className="fil54" d="M4204 3553l0 -59 -10 0 0 -9 10 0 0 -7c0,-5 0,-8 1,-10 1,-3 3,-5 6,-7 3,-2 7,-3 12,-3 3,0 7,0 11,1l-2 10c-2,0 -5,-1 -7,-1 -3,0 -6,1 -7,2 -1,1 -2,4 -2,8l0 6 13 0 0 9 -13 0 0 59 -12 0z"/>
  <path id="9" className="fil54" d="M4237 3553l0 -68 10 0 0 10c3,-5 5,-8 7,-10 2,-2 5,-2 7,-2 4,0 8,1 12,4l-4 11c-3,-2 -6,-2 -8,-2 -3,0 -5,1 -7,2 -2,2 -3,4 -4,6 -1,4 -2,9 -2,13l0 35 -12 0z"/>
  <path id="10" className="fil54" d="M4281 3472l0 -13 12 0 0 13 -12 0zm0 81l0 -68 12 0 0 68 -12 0z"/>
  <path id="11" className="fil54" d="M4354 3528l11 2c-1,8 -4,14 -9,18 -5,4 -11,7 -19,7 -9,0 -17,-3 -22,-9 -6,-6 -8,-15 -8,-26 0,-7 1,-14 4,-19 2,-5 6,-10 11,-12 5,-3 10,-4 16,-4 7,0 13,2 18,6 5,4 8,9 9,16l-11 2c-1,-5 -3,-8 -6,-10 -3,-2 -6,-3 -10,-3 -6,0 -11,2 -14,6 -4,4 -5,11 -5,20 0,9 2,16 5,20 4,4 8,6 14,6 5,0 8,-1 11,-4 3,-3 5,-7 6,-13z"/>
  <path id="12" className="fil54" d="M4420 3544c-4,4 -8,6 -12,8 -4,2 -8,2 -13,2 -7,0 -13,-2 -17,-5 -4,-4 -6,-8 -6,-14 0,-3 1,-6 2,-9 2,-3 4,-5 6,-7 2,-2 5,-3 8,-4 2,-1 6,-1 10,-2 9,-1 16,-2 21,-4 0,-2 0,-3 0,-3 0,-5 -1,-8 -3,-10 -3,-3 -7,-4 -13,-4 -5,0 -9,1 -12,3 -3,2 -4,5 -6,10l-11 -2c1,-5 3,-9 5,-12 2,-3 6,-5 10,-7 4,-2 10,-2 15,-2 6,0 11,1 14,2 4,1 6,3 8,5 2,2 3,5 4,8 0,2 1,5 1,11l0 15c0,11 0,17 1,20 0,3 1,6 3,8l-12 0c-1,-2 -2,-5 -2,-8zm-1 -25c-4,2 -10,3 -19,4 -5,1 -8,1 -10,2 -2,1 -3,2 -5,4 -1,2 -2,3 -2,5 0,3 1,6 3,8 2,2 6,3 10,3 4,0 8,-1 12,-3 3,-2 6,-5 8,-8 1,-3 2,-6 2,-11l0 -4z"/>
  <path id="13" className="fil54" d="M4448 3553l0 -68 10 0 0 10c5,-7 12,-11 22,-11 4,0 8,1 11,2 3,1 6,3 8,6 2,2 3,5 4,8 0,2 1,6 1,11l0 42 -12 0 0 -41c0,-5 0,-8 -1,-11 -1,-2 -2,-4 -5,-6 -2,-1 -5,-2 -8,-2 -5,0 -9,2 -13,5 -4,3 -5,9 -5,18l0 37 -12 0z"/>
  <path id="14" className="fil54" d="M3665 3699l0 -94 41 0c8,0 15,1 19,3 4,2 8,5 10,9 3,4 4,9 4,14 0,7 -2,12 -6,17 -4,5 -11,7 -20,9 3,2 6,3 7,5 4,3 7,7 10,12l16 25 -15 0 -12 -19c-4,-6 -7,-10 -9,-13 -2,-3 -4,-5 -6,-6 -2,-1 -4,-2 -6,-2 -1,0 -4,0 -7,0l-14 0 0 42 -12 0zm12 -52l27 0c6,0 10,-1 13,-2 3,-1 6,-3 7,-6 2,-3 2,-5 2,-8 0,-4 -2,-8 -5,-11 -3,-3 -8,-4 -15,-4l-30 0 0 31z"/>
  <path id="15" className="fil54" d="M3804 3677l12 2c-2,7 -5,12 -10,16 -5,4 -12,6 -19,6 -10,0 -18,-3 -24,-9 -6,-6 -9,-15 -9,-26 0,-11 3,-20 9,-26 6,-6 13,-9 23,-9 9,0 16,3 22,9 6,6 9,15 9,26 0,1 0,2 0,3l-51 0c0,7 3,13 6,17 4,4 8,6 14,6 4,0 8,-1 11,-3 3,-2 5,-6 7,-11zm-38 -18l38 0c0,-6 -2,-10 -4,-13 -4,-4 -8,-7 -14,-7 -5,0 -10,2 -13,5 -4,4 -6,8 -6,14z"/>
  <path id="16" className="fil54" d="M3831 3725l0 -94 10 0 0 9c2,-3 5,-6 8,-8 3,-2 7,-3 11,-3 6,0 11,1 15,4 4,3 8,7 10,13 2,5 3,11 3,18 0,7 -1,13 -4,19 -2,6 -6,10 -11,13 -5,3 -10,4 -15,4 -4,0 -7,-1 -10,-2 -3,-2 -6,-4 -7,-6l0 33 -12 0zm10 -60c0,9 2,15 5,19 4,4 8,6 13,6 5,0 9,-2 13,-6 4,-4 5,-11 5,-20 0,-9 -2,-15 -5,-19 -4,-4 -8,-6 -13,-6 -5,0 -9,2 -13,7 -4,5 -6,11 -6,20z"/>
  <path id="17" className="fil54" d="M3948 3699l0 -10c-5,8 -12,12 -21,12 -4,0 -8,-1 -11,-2 -3,-2 -6,-3 -8,-6 -2,-2 -3,-5 -4,-9 0,-2 -1,-6 -1,-11l0 -42 12 0 0 38c0,6 0,10 1,12 1,3 2,5 5,7 2,2 5,3 9,3 3,0 7,-1 10,-3 3,-2 5,-4 6,-7 1,-3 2,-7 2,-13l0 -36 12 0 0 68 -10 0z"/>
  <path id="18" className="fil54" d="M3987 3699l-11 0 0 -94 12 0 0 33c5,-6 11,-9 19,-9 4,0 8,1 12,3 4,2 7,4 9,7 2,3 4,7 6,11 1,4 2,9 2,14 0,12 -3,21 -9,27 -6,6 -13,9 -21,9 -8,0 -14,-3 -19,-10l0 9zm0 -34c0,8 1,14 3,18 4,6 8,9 15,9 5,0 9,-2 13,-7 4,-4 5,-11 5,-19 0,-9 -2,-15 -5,-20 -4,-4 -8,-6 -13,-6 -5,0 -9,2 -13,7 -4,4 -5,11 -5,19z"/>
  <polygon id="19" className="fil54" points="4048,3699 4048,3605 4060,3605 4060,3699 "/>
  <path id="20" className="fil54" d="M4078 3618l0 -13 12 0 0 13 -12 0zm0 81l0 -68 12 0 0 68 -12 0z"/>
  <path id="21" className="fil54" d="M4151 3674l11 2c-1,8 -4,14 -9,18 -5,4 -11,7 -19,7 -9,0 -17,-3 -22,-9 -6,-6 -8,-15 -8,-26 0,-7 1,-14 4,-19 2,-5 6,-10 11,-12 5,-3 10,-4 16,-4 7,0 13,2 18,6 5,4 8,9 9,16l-11 2c-1,-5 -3,-8 -6,-10 -3,-2 -6,-3 -10,-3 -6,0 -11,2 -14,6 -4,4 -5,11 -5,20 0,9 2,16 5,20 4,4 8,6 14,6 5,0 8,-1 11,-4 3,-3 5,-7 6,-13z"/>
  <path className="fil54" d="M1710 3576l-13 -4 14 -48 42 12c4,9 6,18 7,27 1,9 0,17 -3,25 -3,11 -8,20 -16,28 -7,8 -16,13 -27,15 -10,2 -21,1 -32,-2 -11,-3 -21,-8 -29,-16 -8,-7 -13,-16 -15,-26 -2,-10 -2,-21 2,-32 2,-8 6,-15 10,-21 5,-6 10,-10 16,-12 6,-2 13,-3 21,-3l0 15c-6,0 -11,1 -15,2 -4,2 -8,4 -11,8 -3,4 -6,9 -7,15 -2,7 -3,13 -2,19 1,6 2,10 5,14 2,4 6,7 9,10 6,5 13,9 21,11 10,3 19,4 27,2 8,-1 14,-5 19,-11 5,-6 9,-12 11,-20 2,-6 2,-13 2,-20 -1,-7 -2,-12 -4,-16l-21 -6 -10 33z"/>
  <path id="1" className="fil54" d="M1775 3521l-113 -33 4 -14 40 12c-6,-9 -7,-18 -4,-28 2,-6 4,-11 8,-15 4,-4 8,-6 13,-7 5,-1 11,0 19,2l52 15 -4 14 -52 -15c-7,-2 -12,-2 -16,0 -4,2 -7,6 -8,11 -1,4 -1,8 0,13 1,4 3,8 6,10 3,3 8,5 14,7l45 13 -4 14z"/>
  <path id="2" className="fil54" d="M1806 3377c3,6 5,12 5,17 0,5 0,11 -2,16 -3,9 -7,15 -13,19 -6,4 -12,4 -19,2 -4,-1 -7,-3 -10,-6 -3,-3 -5,-6 -6,-9 -1,-4 -2,-7 -2,-11 0,-3 1,-7 1,-13 2,-12 3,-20 2,-26 -2,-1 -3,-1 -4,-1 -6,-2 -10,-1 -13,0 -4,3 -7,7 -9,14 -2,7 -2,12 -1,15 1,4 5,7 10,10l-6 13c-5,-3 -10,-6 -12,-10 -3,-4 -4,-9 -5,-15 0,-6 0,-12 2,-19 2,-7 4,-12 7,-16 3,-4 6,-7 9,-8 3,-1 7,-2 11,-2 2,0 7,1 13,3l18 5c13,4 21,6 25,6 4,0 7,0 11,-1l-4 14c-3,1 -7,1 -11,0zm-31 -8c1,6 0,14 -1,24 -1,6 -1,10 -1,13 0,3 1,5 3,7 2,2 4,3 6,4 4,1 7,1 10,-2 3,-2 6,-6 7,-11 2,-5 2,-10 1,-15 -1,-5 -3,-9 -7,-12 -3,-2 -7,-4 -13,-6l-5 -1z"/>
  <path id="3" className="fil54" d="M1827 3346l-82 -24 4 -12 12 3c-7,-9 -9,-19 -6,-30 1,-5 4,-9 7,-13 3,-4 6,-6 10,-7 3,-1 7,-2 11,-1 3,0 7,1 14,3l50 15 -4 14 -50 -14c-6,-2 -10,-2 -13,-2 -3,0 -6,2 -8,4 -2,2 -4,5 -5,9 -2,6 -1,12 1,17 3,5 9,10 19,13l45 13 -4 14z"/>
  <path id="4" className="fil54" d="M1858 3202c3,6 5,12 5,17 0,5 0,11 -2,16 -3,9 -7,15 -13,19 -6,4 -12,4 -19,2 -4,-1 -7,-3 -10,-6 -3,-3 -5,-6 -6,-9 -1,-4 -2,-7 -2,-11 0,-3 1,-7 1,-13 2,-12 3,-20 2,-26 -2,-1 -3,-1 -4,-1 -6,-2 -10,-1 -13,0 -4,3 -7,7 -9,14 -2,7 -2,12 -1,15 1,4 5,7 10,10l-6 13c-5,-3 -10,-6 -12,-10 -3,-4 -4,-9 -5,-15 0,-6 0,-12 2,-19 2,-7 4,-12 7,-16 3,-4 6,-7 9,-8 3,-1 7,-2 11,-2 2,0 7,1 13,3l18 5c13,4 21,6 25,6 4,0 7,0 11,-1l-4 14c-3,1 -7,1 -11,0zm-31 -8c1,6 0,14 -1,24 -1,6 -1,10 -1,13 0,3 1,5 3,7 2,2 4,3 6,4 4,1 7,1 10,-2 3,-2 6,-6 7,-11 2,-5 2,-10 1,-15 -1,-5 -3,-9 -7,-12 -3,-2 -7,-4 -13,-6l-5 -1z"/>
  <path className="fil54" d="M1166 3435l11 3c-2,9 -7,16 -13,21 -6,5 -14,7 -23,7 -9,0 -17,-2 -23,-6 -6,-4 -10,-9 -13,-16 -3,-7 -5,-15 -5,-23 0,-9 2,-17 5,-23 3,-7 8,-12 15,-15 6,-3 13,-5 21,-5 9,0 16,2 22,7 6,4 10,11 12,19l-11 3c-2,-6 -5,-11 -9,-14 -4,-3 -9,-4 -14,-4 -7,0 -12,2 -17,5 -4,3 -8,7 -9,13 -2,5 -3,11 -3,17 0,7 1,14 3,19 2,5 5,10 10,12 4,3 9,4 15,4 6,0 12,-2 16,-6 4,-4 7,-9 9,-16z"/>
  <path id="1" className="fil54" d="M1186 3434c0,-12 3,-20 10,-26 5,-5 12,-7 20,-7 9,0 16,3 21,8 5,6 8,13 8,23 0,8 -1,14 -4,19 -2,5 -6,8 -11,11 -5,3 -10,4 -15,4 -9,0 -16,-3 -21,-8 -5,-6 -8,-14 -8,-24zm11 0c0,8 2,14 5,18 4,4 8,6 13,6 5,0 10,-2 13,-6 3,-4 5,-10 5,-18 0,-8 -2,-14 -5,-18 -4,-4 -8,-6 -13,-6 -5,0 -10,2 -13,6 -3,4 -5,10 -5,18z"/>
  <path id="2" className="fil54" d="M1280 3456l1 9c-3,1 -6,1 -8,1 -4,0 -7,-1 -9,-2 -2,-1 -4,-3 -4,-5 -1,-2 -1,-6 -1,-13l0 -36 -8 0 0 -8 8 0 0 -15 11 -6 0 22 11 0 0 8 -11 0 0 37c0,3 0,5 1,6 0,1 1,2 2,2 1,1 2,1 4,1 1,0 3,0 5,0z"/>
  <path id="3" className="fil54" d="M1333 3445l11 1c-2,6 -5,11 -10,15 -5,4 -11,5 -18,5 -9,0 -16,-3 -22,-8 -5,-6 -8,-13 -8,-24 0,-10 3,-19 8,-24 5,-6 12,-9 21,-9 8,0 15,3 20,9 5,6 8,14 8,24 0,1 0,2 0,3l-47 0c0,7 2,12 6,16 3,4 8,5 13,5 4,0 7,-1 10,-3 3,-2 5,-5 7,-10zm-35 -17l35 0c0,-5 -2,-9 -4,-12 -3,-4 -8,-6 -13,-6 -5,0 -9,2 -12,5 -3,3 -5,8 -5,13z"/>
  <path id="4" className="fil54" d="M1143 3600l0 -8c-4,6 -10,9 -17,9 -5,0 -10,-1 -14,-4 -4,-3 -7,-7 -10,-11 -2,-5 -3,-11 -3,-17 0,-6 1,-12 3,-17 2,-5 5,-9 9,-12 4,-3 9,-4 14,-4 4,0 7,1 10,2 3,2 5,4 7,6l0 -31 11 0 0 86 -10 0zm-33 -31c0,8 2,14 5,18 3,4 7,6 12,6 5,0 9,-2 12,-6 3,-4 5,-10 5,-17 0,-9 -2,-15 -5,-19 -3,-4 -7,-6 -12,-6 -5,0 -9,2 -12,6 -3,4 -5,10 -5,18z"/>
  <polygon id="5" className="fil54" points="1170,3544 1168,3528 1168,3514 1180,3514 1180,3528 1177,3544 "/>
  <polygon id="6" className="fil54" points="1196,3600 1196,3514 1208,3514 1208,3600 "/>
  <path id="7" className="fil54" d="M1244 3600l-24 -62 11 0 13 37c1,4 3,8 4,13 1,-3 2,-7 4,-12l14 -38 11 0 -24 62 -10 0z"/>
  <path id="8" className="fil54" d="M1283 3569c0,-12 3,-20 10,-26 5,-5 12,-7 20,-7 9,0 16,3 21,8 5,6 8,13 8,23 0,8 -1,14 -4,19 -2,5 -6,8 -11,11 -5,3 -10,4 -15,4 -9,0 -16,-3 -21,-8 -5,-6 -8,-14 -8,-24zm11 0c0,8 2,14 5,18 4,4 8,6 13,6 5,0 10,-2 13,-6 3,-4 5,-10 5,-18 0,-8 -2,-14 -5,-18 -4,-4 -8,-6 -13,-6 -5,0 -10,2 -13,6 -3,4 -5,10 -5,18z"/>
  <path id="9" className="fil54" d="M1354 3526l0 -12 11 0 0 12 -11 0zm0 74l0 -62 11 0 0 62 -11 0z"/>
  <path id="10" className="fil54" d="M1380 3600l0 -62 10 0 0 10c2,-4 5,-7 7,-9 2,-1 4,-2 7,-2 4,0 7,1 11,3l-4 10c-3,-1 -5,-2 -8,-2 -2,0 -4,1 -6,2 -2,1 -3,3 -4,6 -1,4 -2,8 -2,12l0 33 -11 0z"/>
  <path id="11" className="fil54" d="M1463 3580l11 1c-2,6 -5,11 -10,15 -5,4 -11,5 -18,5 -9,0 -16,-3 -22,-8 -5,-6 -8,-13 -8,-24 0,-10 3,-19 8,-24 5,-6 12,-9 21,-9 8,0 15,3 20,9 5,6 8,14 8,24 0,1 0,2 0,3l-47 0c0,7 2,12 6,16 3,4 8,5 13,5 4,0 7,-1 10,-3 3,-2 5,-5 7,-10zm-35 -17l35 0c0,-5 -2,-9 -4,-12 -3,-4 -8,-6 -13,-6 -5,0 -9,2 -12,5 -3,3 -5,8 -5,13z"/>
  <path className="fil54" d="M2980 4321l0 -10 36 0 0 32c-6,4 -11,8 -17,10 -6,2 -12,3 -18,3 -8,0 -16,-2 -23,-5 -7,-4 -12,-9 -16,-16 -4,-7 -5,-15 -5,-23 0,-8 2,-16 5,-23 4,-7 9,-13 15,-16 7,-4 14,-5 23,-5 6,0 12,1 17,3 5,2 9,5 12,8 3,4 5,8 7,14l-10 3c-1,-4 -3,-8 -5,-10 -2,-3 -5,-5 -8,-6 -4,-2 -7,-2 -12,-2 -5,0 -10,1 -13,2 -4,2 -7,4 -9,6 -2,3 -4,5 -5,9 -2,5 -3,11 -3,17 0,8 1,14 4,19 3,5 6,9 12,12 5,3 10,4 16,4 5,0 10,-1 14,-3 5,-2 8,-4 11,-6l0 -16 -25 0z"/>
  <path id="1" className="fil54" d="M3072 4347c-4,3 -8,6 -11,7 -4,1 -8,2 -12,2 -7,0 -12,-2 -16,-5 -4,-3 -6,-8 -6,-13 0,-3 1,-6 2,-8 1,-3 3,-5 5,-6 2,-2 5,-3 8,-3 2,-1 5,-1 9,-2 9,-1 15,-2 19,-4 0,-1 0,-2 0,-3 0,-4 -1,-7 -3,-9 -3,-2 -7,-4 -12,-4 -5,0 -9,1 -11,3 -2,2 -4,5 -5,9l-10 -1c1,-4 2,-8 5,-11 2,-3 5,-5 9,-6 4,-1 9,-2 14,-2 5,0 10,1 13,2 3,1 6,3 7,5 2,2 3,4 3,7 0,2 1,5 1,10l0 14c0,10 0,16 1,19 0,3 1,5 3,8l-11 0c-1,-2 -2,-5 -2,-8zm-1 -23c-4,2 -10,3 -17,4 -4,1 -7,1 -9,2 -2,1 -3,2 -4,3 -1,2 -1,3 -1,5 0,3 1,5 3,7 2,2 5,3 9,3 4,0 8,-1 11,-3 3,-2 6,-4 7,-7 1,-2 2,-6 2,-11l0 -4z"/>
  <path id="2" className="fil54" d="M3108 4355l-10 0 0 -86 11 0 0 31c4,-6 10,-8 17,-8 4,0 7,1 11,2 3,2 6,4 8,7 2,3 4,6 5,10 1,4 2,8 2,13 0,11 -3,19 -8,25 -5,6 -12,9 -19,9 -7,0 -13,-3 -17,-9l0 8zm0 -32c0,7 1,13 3,16 3,5 8,8 13,8 5,0 9,-2 12,-6 3,-4 5,-10 5,-18 0,-8 -2,-14 -5,-18 -3,-4 -7,-6 -12,-6 -5,0 -9,2 -12,6 -3,4 -5,10 -5,17z"/>
  <path id="3" className="fil54" d="M3161 4324c0,-12 3,-20 10,-26 5,-5 12,-7 20,-7 9,0 16,3 21,8 5,6 8,13 8,23 0,8 -1,14 -4,19 -2,5 -6,8 -11,11 -5,3 -10,4 -15,4 -9,0 -16,-3 -21,-8 -5,-6 -8,-14 -8,-24zm11 0c0,8 2,14 5,18 4,4 8,6 13,6 5,0 10,-2 13,-6 3,-4 5,-10 5,-18 0,-8 -2,-14 -5,-17 -4,-4 -8,-6 -13,-6 -5,0 -10,2 -13,6 -3,4 -5,10 -5,18z"/>
  <path id="4" className="fil54" d="M3232 4355l0 -62 10 0 0 9c5,-7 11,-10 20,-10 4,0 7,1 10,2 3,1 6,3 7,5 2,2 3,5 3,8 0,2 1,5 1,10l0 38 -11 0 0 -38c0,-4 0,-8 -1,-10 -1,-2 -2,-4 -4,-5 -2,-1 -5,-2 -7,-2 -4,0 -8,1 -12,4 -3,3 -5,8 -5,16l0 34 -11 0z"/>
  <path className="fil54" d="M3466 4482l11 -14c11,9 18,20 21,32 3,12 1,24 -5,36 -6,13 -14,22 -23,27 -9,5 -19,8 -31,7 -12,-1 -23,-4 -35,-9 -12,-6 -22,-13 -29,-22 -7,-9 -11,-19 -11,-30 -1,-11 2,-22 7,-32 6,-12 13,-20 23,-25 10,-5 21,-7 33,-5l-4 17c-10,-1 -18,0 -24,3 -6,3 -11,9 -15,17 -4,9 -6,18 -4,26 1,8 5,15 11,21 6,6 13,11 21,15 10,5 19,8 28,8 9,1 17,-1 23,-6 7,-4 12,-10 15,-17 4,-9 5,-17 3,-26 -2,-8 -8,-16 -17,-23z"/>
  <path id="1" className="fil54" d="M3478 4454c-16,-8 -25,-18 -29,-30 -3,-10 -2,-21 3,-31 6,-12 14,-19 25,-23 11,-4 24,-2 37,4 11,5 19,11 24,17 5,6 7,13 8,21 0,8 -1,16 -5,23 -6,12 -14,20 -25,23 -11,4 -24,2 -38,-5zm7 -15c11,5 20,7 28,5 8,-2 13,-7 17,-14 3,-7 4,-14 0,-22 -3,-7 -10,-14 -22,-19 -11,-5 -20,-6 -27,-4 -8,2 -13,7 -17,14 -3,7 -4,15 0,22 3,7 10,14 21,19z"/>
  <path id="2" className="fil54" d="M3567 4377l-85 -41 6 -13 12 6c-6,-11 -7,-22 -1,-34 2,-5 6,-9 10,-13 4,-3 8,-6 12,-6 4,-1 8,-1 13,1 3,1 8,3 14,6l52 25 -7 14 -52 -25c-6,-3 -11,-4 -14,-5 -3,0 -7,1 -10,3 -3,2 -6,5 -7,9 -3,6 -4,12 -2,19 2,6 8,12 19,17l47 22 -7 14z"/>
  <path id="3" className="fil54" d="M3617 4292l9 -13c5,1 9,1 12,0 4,-2 8,-7 11,-13 3,-7 4,-13 3,-17 -1,-5 -3,-9 -8,-13 -3,-2 -9,-5 -18,-10 4,10 4,20 0,29 -6,12 -14,19 -26,21 -12,2 -23,1 -35,-5 -8,-4 -15,-9 -20,-15 -5,-6 -9,-13 -10,-20 -1,-7 0,-15 4,-22 5,-10 13,-16 24,-19l-10 -5 6 -13 74 35c13,6 22,12 26,18 4,5 7,12 7,19 0,7 -1,15 -6,24 -5,10 -11,17 -19,21 -8,4 -16,4 -25,-1zm-46 -37c11,5 20,7 28,5 7,-2 13,-6 16,-13 3,-7 3,-13 0,-20 -3,-7 -10,-13 -21,-18 -10,-5 -19,-6 -27,-4 -8,2 -13,6 -16,13 -3,6 -3,13 0,20 3,7 10,13 20,18z"/>
  <path id="4" className="fil54" d="M3610 4179c-16,-8 -25,-18 -29,-30 -3,-10 -2,-21 3,-31 6,-12 14,-19 25,-23 11,-4 24,-2 37,4 11,5 19,11 24,17 5,6 7,13 8,21 0,8 -1,16 -5,23 -6,12 -14,20 -25,23 -11,4 -24,2 -38,-5zm7 -15c11,5 20,7 28,5 8,-2 13,-7 17,-14 3,-7 4,-14 0,-22 -3,-7 -10,-14 -22,-19 -11,-5 -20,-6 -27,-4 -8,2 -13,7 -17,14 -3,7 -4,15 0,22 3,7 10,14 21,19z"/>
  <path className="fil54" d="M69 2746l11 -1c1,4 2,8 4,11 2,3 5,5 9,7 4,2 8,3 13,3 4,0 8,-1 12,-2 3,-1 6,-3 8,-5 2,-2 2,-5 2,-7 0,-3 -1,-5 -2,-7 -2,-2 -4,-4 -8,-5 -2,-1 -8,-2 -16,-4 -8,-2 -14,-4 -17,-5 -4,-2 -7,-5 -9,-8 -2,-3 -3,-7 -3,-11 0,-4 1,-9 4,-12 3,-4 6,-7 11,-9 5,-2 10,-3 16,-3 6,0 12,1 17,3 5,2 9,5 11,9 3,4 4,9 4,14l-11 1c-1,-6 -3,-10 -6,-12 -3,-3 -9,-4 -15,-4 -7,0 -12,1 -15,4 -3,3 -5,6 -5,9 0,3 1,6 3,8 2,2 8,4 17,6 9,2 16,4 19,6 5,2 9,5 11,9 2,4 4,8 4,12 0,5 -1,9 -4,13 -3,4 -6,7 -11,10 -5,2 -11,3 -17,3 -8,0 -15,-1 -20,-3 -5,-2 -10,-6 -13,-10 -3,-5 -5,-10 -5,-16z"/>
  <path id="1" className="fil54" d="M196 2754l11 1c-2,6 -5,11 -10,15 -5,4 -11,5 -18,5 -9,0 -17,-3 -22,-9 -5,-6 -8,-14 -8,-24 0,-11 3,-19 8,-25 5,-6 13,-9 21,-9 8,0 15,3 21,9 5,6 8,14 8,24 0,1 0,2 0,3l-47 0c0,7 2,12 6,16 4,4 8,6 13,6 4,0 7,-1 10,-3 3,-2 5,-5 7,-10zm-35 -17l35 0c0,-5 -2,-9 -4,-12 -3,-4 -8,-6 -13,-6 -5,0 -9,2 -12,5 -3,3 -5,8 -6,13z"/>
  <path id="2" className="fil54" d="M221 2774l0 -63 10 0 0 9c5,-7 11,-10 20,-10 4,0 7,1 11,2 3,1 6,3 7,5 2,2 3,5 3,8 0,2 1,5 1,10l0 39 -11 0 0 -38c0,-4 0,-8 -1,-10 -1,-2 -2,-4 -4,-5 -2,-1 -5,-2 -7,-2 -5,0 -8,1 -12,4 -3,3 -5,8 -5,17l0 35 -11 0z"/>
  <path id="3" className="fil54" d="M332 2754l11 1c-2,6 -5,11 -10,15 -5,4 -11,5 -18,5 -9,0 -17,-3 -22,-9 -5,-6 -8,-14 -8,-24 0,-11 3,-19 8,-25 5,-6 13,-9 21,-9 8,0 15,3 21,9 5,6 8,14 8,24 0,1 0,2 0,3l-47 0c0,7 2,12 6,16 4,4 8,6 13,6 4,0 7,-1 10,-3 3,-2 5,-5 7,-10zm-35 -17l35 0c0,-5 -2,-9 -4,-12 -3,-4 -8,-6 -13,-6 -5,0 -9,2 -12,5 -3,3 -5,8 -6,13z"/>
  <path id="4" className="fil54" d="M354 2780l10 1c0,3 2,6 4,7 3,2 6,3 11,3 5,0 9,-1 12,-3 3,-2 5,-5 5,-8 1,-2 1,-7 1,-14 -5,6 -11,8 -18,8 -9,0 -15,-3 -20,-9 -5,-6 -7,-14 -7,-23 0,-6 1,-12 3,-17 2,-5 5,-9 10,-12 4,-3 9,-4 15,-4 7,0 14,3 18,9l0 -8 10 0 0 55c0,10 -1,17 -3,21 -2,4 -5,7 -10,10 -4,2 -10,4 -16,4 -8,0 -14,-2 -18,-5 -5,-3 -7,-8 -7,-15zm9 -38c0,8 2,14 5,18 3,4 7,6 12,6 5,0 9,-2 12,-6 3,-4 5,-10 5,-18 0,-8 -2,-14 -5,-17 -3,-4 -8,-6 -12,-6 -5,0 -9,2 -12,6 -3,4 -5,10 -5,17z"/>
  <path id="5" className="fil54" d="M466 2766c-4,3 -8,6 -12,7 -4,1 -8,2 -12,2 -7,0 -12,-2 -16,-5 -4,-3 -6,-8 -6,-13 0,-3 1,-6 2,-8 1,-3 3,-5 6,-6 2,-2 5,-3 8,-4 2,-1 5,-1 10,-2 9,-1 15,-2 19,-4 0,-1 0,-2 0,-3 0,-4 -1,-7 -3,-9 -3,-2 -7,-4 -12,-4 -5,0 -9,1 -11,3 -2,2 -4,5 -5,9l-10 -1c1,-4 3,-8 5,-11 2,-3 5,-5 10,-6 4,-1 9,-2 14,-2 5,0 10,1 13,2 3,1 6,3 7,5 2,2 3,4 3,7 0,2 1,5 1,10l0 14c0,10 0,16 1,19 0,3 1,5 3,8l-11 0c-1,-2 -2,-5 -2,-8zm-1 -24c-4,2 -10,3 -18,4 -4,1 -8,1 -9,2 -2,1 -3,2 -4,3 -1,2 -2,3 -2,5 0,3 1,5 3,7 2,2 5,3 10,3 4,0 8,-1 11,-3 3,-2 6,-4 7,-7 1,-2 2,-6 2,-11l0 -4z"/>
  <polygon id="6" className="fil54" points="492,2774 492,2687 503,2687 503,2774 "/>
  <path className="fil54" d="M508 3129l0 -11 40 0 0 35c-6,5 -12,9 -19,11 -7,2 -13,4 -20,4 -9,0 -18,-2 -25,-6 -8,-4 -13,-10 -17,-17 -4,-7 -6,-16 -6,-25 0,-9 2,-18 6,-26 4,-8 9,-14 17,-18 7,-4 15,-6 25,-6 7,0 13,1 18,3 6,2 10,5 13,9 3,4 6,9 7,15l-11 3c-1,-5 -3,-9 -5,-11 -2,-3 -5,-5 -9,-7 -4,-2 -8,-2 -13,-2 -6,0 -11,1 -15,3 -4,2 -7,4 -10,7 -3,3 -5,6 -6,9 -2,6 -4,12 -4,19 0,8 1,15 4,21 3,6 7,10 13,13 6,3 11,4 18,4 5,0 11,-1 16,-3 5,-2 9,-4 12,-7l0 -18 -28 0z"/>
  <path id="1" className="fil54" d="M609 3166l0 -10c-5,8 -13,12 -22,12 -4,0 -8,-1 -11,-2 -3,-2 -6,-3 -8,-6 -2,-2 -3,-5 -4,-9 0,-2 -1,-6 -1,-11l0 -42 12 0 0 38c0,6 0,10 1,12 1,3 2,5 5,7 2,2 5,3 9,3 3,0 7,-1 10,-3 3,-2 5,-4 6,-7 1,-3 2,-7 2,-13l0 -37 12 0 0 68 -10 0z"/>
  <path id="2" className="fil54" d="M638 3085l0 -13 12 0 0 13 -12 0zm0 81l0 -68 12 0 0 68 -12 0z"/>
  <path id="3" className="fil54" d="M667 3166l0 -68 10 0 0 10c5,-7 12,-11 22,-11 4,0 8,1 11,2 3,1 6,3 8,6 2,2 3,5 4,9 0,2 1,6 1,11l0 42 -12 0 0 -41c0,-5 0,-8 -1,-11 -1,-2 -3,-4 -5,-6 -2,-1 -5,-2 -8,-2 -5,0 -9,2 -13,5 -4,3 -5,9 -5,18l0 37 -12 0z"/>
  <path id="4" className="fil54" d="M787 3144l12 2c-2,7 -5,12 -10,16 -5,4 -12,6 -19,6 -10,0 -18,-3 -24,-9 -6,-6 -9,-15 -9,-26 0,-11 3,-20 9,-27 6,-6 14,-9 23,-9 9,0 17,3 22,9 6,6 9,15 9,26 0,1 0,2 0,3l-51 0c0,7 3,13 6,17 4,4 9,6 14,6 4,0 8,-1 11,-3 3,-2 5,-6 7,-11zm-38 -19l38 0c-1,-6 -2,-10 -4,-13 -4,-4 -8,-7 -14,-7 -5,0 -10,2 -13,5 -4,4 -6,8 -6,14z"/>
  <path id="5" className="fil54" d="M858 3157c-4,4 -8,6 -12,8 -4,2 -8,2 -13,2 -8,0 -13,-2 -17,-5 -4,-4 -6,-8 -6,-14 0,-3 1,-6 2,-9 2,-3 4,-5 6,-7 2,-2 5,-3 8,-4 2,-1 6,-1 10,-2 9,-1 16,-2 21,-4 0,-2 0,-3 0,-3 0,-5 -1,-8 -3,-10 -3,-3 -7,-4 -13,-4 -5,0 -9,1 -12,3 -3,2 -5,5 -6,10l-11 -2c1,-5 3,-9 5,-12 2,-3 6,-5 10,-7 4,-2 10,-2 16,-2 6,0 11,1 14,2 4,1 6,3 8,5 2,2 3,5 4,8 0,2 1,6 1,11l0 15c0,11 0,18 1,20 0,3 1,6 3,8l-12 0c-1,-2 -2,-5 -2,-9zm-1 -26c-4,2 -11,3 -19,4 -5,1 -8,1 -10,2 -2,1 -3,2 -5,4 -1,2 -2,3 -2,5 0,3 1,6 4,8 2,2 6,3 10,3 4,0 8,-1 12,-3 3,-2 6,-5 8,-8 1,-3 2,-6 2,-12l0 -4z"/>
  <path className="fil54" d="M5096 4176l7 -10 43 30c8,5 13,10 16,15 3,5 5,10 4,17 0,6 -3,13 -8,20 -5,7 -10,12 -16,15 -6,3 -11,3 -17,2 -6,-1 -13,-5 -21,-10l-43 -30 7 -10 43 30c6,5 12,7 16,8 4,1 8,1 12,-1 4,-2 7,-5 10,-9 5,-7 7,-14 6,-19 -1,-5 -6,-11 -16,-18l-43 -30z"/>
  <path id="1" className="fil54" d="M5193 4208l8 -8c3,2 6,2 8,1 3,-1 6,-4 9,-8 3,-4 4,-8 4,-12 0,-4 -1,-7 -4,-10 -2,-2 -5,-5 -11,-9 2,7 1,14 -3,20 -5,7 -12,11 -20,12 -8,0 -16,-2 -24,-8 -5,-4 -9,-8 -12,-13 -3,-5 -5,-10 -4,-15 0,-5 2,-10 5,-15 5,-6 11,-10 19,-10l-7 -5 6 -8 47 33c8,6 14,11 16,15 2,4 3,9 3,14 -1,5 -3,10 -7,16 -5,6 -10,11 -15,13 -6,2 -11,1 -17,-3zm-27 -31c7,5 13,7 19,7 5,-1 9,-3 12,-7 3,-4 4,-9 3,-14 -1,-5 -5,-10 -12,-15 -7,-5 -13,-7 -18,-6 -5,1 -10,3 -13,7 -3,4 -4,9 -2,14 1,5 5,10 12,15z"/>
  <path id="2" className="fil54" d="M5249 4105c0,5 0,10 -1,14 -1,4 -3,8 -5,11 -4,6 -9,10 -14,11 -5,1 -10,0 -15,-3 -3,-2 -5,-4 -6,-7 -1,-3 -2,-6 -2,-8 0,-3 1,-6 2,-9 1,-2 2,-5 4,-9 4,-8 7,-14 8,-19 -1,-1 -2,-1 -2,-2 -4,-3 -7,-4 -10,-3 -4,1 -7,4 -10,8 -3,4 -5,8 -4,11 0,3 2,7 5,10l-8 8c-3,-4 -5,-7 -6,-11 -1,-4 -1,-8 0,-12 1,-4 3,-9 7,-14 3,-5 6,-8 10,-10 3,-2 6,-3 9,-3 3,0 5,0 8,2 2,1 5,3 9,6l12 9c9,6 14,10 17,11 3,1 5,2 8,2l-7 10c-3,0 -5,-1 -8,-3zm-21 -14c-1,4 -3,10 -7,17 -2,4 -3,7 -4,9 0,2 0,4 0,6 1,2 2,3 3,4 2,2 5,2 8,2 3,-1 6,-3 8,-6 2,-4 4,-7 4,-11 0,-4 0,-7 -2,-11 -1,-2 -4,-5 -8,-8l-3 -2z"/>
  <path id="3" className="fil54" d="M5272 4088l-54 -38 6 -8 8 5c-3,-8 -2,-16 3,-24 2,-3 5,-6 8,-8 3,-2 6,-3 9,-3 3,0 6,1 9,2 2,1 5,3 9,6l33 24 -6 9 -33 -23c-4,-3 -7,-4 -9,-5 -2,-1 -5,0 -7,1 -2,1 -4,3 -6,5 -3,4 -4,8 -3,13 0,5 4,9 11,14l30 21 -6 9z"/>
  <path id="4" className="fil54" d="M5338 3995l-7 -5c3,7 2,14 -3,21 -3,4 -7,7 -12,9 -5,2 -10,2 -16,1 -6,-1 -11,-3 -17,-7 -5,-4 -10,-8 -13,-13 -3,-5 -5,-10 -4,-15 0,-5 2,-10 5,-15 2,-3 5,-6 8,-7 3,-2 6,-2 10,-2l-27 -19 6 -9 75 53 -6 9zm-48 10c7,5 13,7 19,7 5,-1 10,-3 12,-7 3,-4 4,-9 2,-14 -1,-5 -5,-10 -12,-15 -7,-5 -14,-8 -19,-7 -5,0 -10,3 -13,7 -3,4 -4,9 -2,14 1,5 6,10 13,15z"/>
  <path id="5" className="fil54" d="M5373 3932c0,5 0,10 -1,14 -1,4 -3,8 -5,11 -4,6 -9,10 -14,11 -5,1 -10,0 -15,-3 -3,-2 -5,-4 -6,-7 -1,-3 -2,-6 -2,-8 0,-3 1,-6 2,-9 1,-2 2,-5 4,-9 4,-8 7,-14 8,-19 -1,-1 -2,-1 -2,-2 -4,-3 -7,-4 -10,-3 -4,1 -7,4 -10,8 -3,4 -5,8 -4,11 0,3 2,7 5,10l-8 8c-3,-4 -5,-7 -6,-11 -1,-4 -1,-8 0,-12 1,-4 3,-9 7,-14 3,-5 6,-8 10,-10 3,-2 6,-3 9,-3 3,0 5,0 8,2 2,1 5,3 9,6l12 9c9,6 14,10 17,11 3,1 5,2 8,2l-7 10c-3,0 -5,-1 -8,-3zm-21 -14c-1,4 -3,10 -7,17 -2,4 -3,7 -4,9 0,2 0,4 0,6 1,2 2,3 3,4 2,2 5,2 8,2 3,-1 6,-3 8,-6 2,-4 4,-7 4,-11 0,-4 0,-7 -2,-11 -1,-2 -4,-5 -8,-8l-3 -2z"/>
  <path className="fil54" d="M2146 3444l-94 4 -1 -35c0,-7 0,-13 2,-17 2,-4 5,-8 8,-11 4,-3 8,-4 12,-4 4,0 8,1 12,3 4,2 7,5 9,10 1,-6 4,-10 8,-14 4,-3 9,-5 14,-5 4,0 9,1 12,2 4,2 7,4 9,7 2,3 4,6 5,10 1,4 2,9 2,15l2 36zm-55 -10l-1 -20c0,-6 -1,-10 -2,-12 -1,-3 -3,-5 -5,-7 -2,-2 -5,-2 -8,-2 -3,0 -6,1 -8,3 -2,2 -4,4 -5,7 -1,3 -1,8 -1,14l1 19 29 -1zm44 -2l-1 -24c0,-4 0,-7 -1,-8 -1,-3 -2,-5 -3,-7 -1,-2 -3,-3 -5,-5 -2,-1 -5,-2 -8,-2 -4,0 -7,1 -9,3 -3,2 -4,4 -5,8 -1,3 -1,8 -1,14l1 22 32 -1z"/>
  <path id="1" className="fil54" d="M2119 3311l1 -12c7,2 13,5 17,10 4,5 6,11 7,19 0,10 -2,18 -8,24 -6,6 -14,9 -26,10 -12,0 -21,-2 -27,-8 -7,-6 -10,-13 -11,-23 0,-9 2,-17 8,-23 6,-6 15,-9 26,-10 1,0 2,0 3,0l2 51c7,-1 13,-3 17,-7 4,-4 6,-9 5,-15 0,-4 -1,-8 -4,-11 -2,-3 -6,-5 -11,-7zm-17 39l-2 -38c-6,1 -10,2 -13,5 -4,4 -6,9 -6,15 0,5 2,10 6,13 4,3 9,5 15,5z"/>
  <path id="2" className="fil54" d="M2140 3284l-68 3 0 -10 10 0c-8,-5 -12,-12 -12,-21 0,-4 0,-8 2,-11 1,-4 3,-6 6,-8 2,-2 5,-3 8,-4 2,-1 6,-1 11,-1l42 -2 0 12 -42 2c-5,0 -8,1 -11,2 -2,1 -4,3 -5,5 -1,2 -2,5 -2,8 0,5 2,9 5,13 3,3 9,5 18,5l37 -2 0 12z"/>
  <path id="3" className="fil54" d="M2056 3214l-13 1 0 -12 13 -1 0 12zm81 -3l-68 3 -1 -12 68 -3 1 12z"/>
  <path id="4" className="fil54" d="M2136 3181l-68 3 0 -10 10 0c-8,-5 -12,-12 -12,-21 0,-4 0,-8 2,-11 1,-4 3,-6 6,-8 2,-2 5,-3 8,-4 2,-1 6,-1 11,-1l42 -2 0 12 -42 2c-5,0 -8,1 -11,2 -2,1 -4,3 -5,5 -1,2 -2,5 -2,8 0,5 2,9 5,13 3,3 9,5 18,5l37 -2 0 12z"/>
  <polygon className="fil54" points="724,3585 755,3508 766,3512 738,3580 776,3595 772,3604 "/>
  <path id="1" className="fil54" d="M810 3543l4 -11 9 4 -4 11 -9 -4zm-27 66l22 -56 9 4 -22 56 -9 -4z"/>
  <path id="2" className="fil54" d="M816 3622l-9 -4 31 -77 9 4 -11 27c6,-3 12,-4 18,-1 3,1 6,3 9,6 3,3 4,6 5,9 1,3 1,7 1,11 0,4 -1,8 -3,12 -4,10 -9,16 -16,19 -7,3 -14,4 -20,1 -7,-3 -11,-7 -12,-14l-3 7zm11 -28c-3,7 -4,12 -3,16 1,6 4,10 9,12 4,2 8,1 13,-1 4,-2 8,-7 11,-14 3,-7 4,-13 2,-18 -1,-5 -4,-8 -8,-9 -4,-2 -8,-1 -13,1 -4,2 -8,7 -11,14z"/>
  <path id="3" className="fil54" d="M913 3640l9 5c-4,5 -8,8 -14,10 -5,1 -11,1 -18,-2 -8,-3 -14,-8 -16,-15 -3,-7 -2,-15 1,-24 4,-9 9,-16 16,-19 7,-3 14,-3 22,0 7,3 13,8 15,15 3,7 2,15 -2,24 0,1 -1,1 -1,2l-42 -17c-2,6 -2,12 0,16 2,5 5,8 10,10 3,1 7,2 10,1 3,-1 6,-3 9,-6zm-25 -28l31 13c1,-5 2,-9 1,-12 -2,-5 -5,-8 -10,-10 -4,-2 -9,-2 -13,0 -4,2 -7,5 -10,10z"/>
  <path id="4" className="fil54" d="M927 3666l22 -56 9 3 -3 8c4,-3 7,-5 9,-5 2,-1 5,0 7,1 3,1 6,4 8,7l-7 7c-2,-2 -4,-4 -6,-5 -2,-1 -4,-1 -6,0 -2,1 -4,2 -6,4 -2,3 -4,6 -6,10l-12 29 -9 -4z"/>
  <path id="5" className="fil54" d="M990 3615l4 -11 9 4 -4 11 -9 -4zm-27 66l22 -56 9 4 -22 56 -9 -4z"/>
  <path id="6" className="fil54" d="M1026 3698c-5,2 -9,2 -13,2 -4,0 -7,-1 -11,-2 -6,-2 -10,-6 -12,-10 -2,-4 -2,-9 0,-13 1,-3 3,-5 5,-7 2,-2 4,-3 7,-3 3,-1 5,-1 8,0 2,0 5,1 9,2 8,2 14,3 18,4 1,-1 1,-2 1,-2 2,-4 2,-7 1,-9 -2,-3 -5,-6 -9,-8 -4,-2 -8,-2 -11,-2 -3,1 -5,3 -8,6l-9 -5c2,-4 5,-6 8,-8 3,-2 6,-2 11,-2 4,0 9,1 13,3 5,2 8,4 11,6 3,2 4,5 5,7 1,2 1,5 0,8 0,2 -1,5 -3,9l-5 13c-4,9 -6,14 -6,17 -1,2 -1,5 0,8l-10 -4c0,-2 0,-5 1,-8zm8 -21c-4,0 -10,-1 -17,-3 -4,-1 -7,-1 -9,-1 -2,0 -4,1 -5,2 -1,1 -2,2 -3,4 -1,3 -1,5 0,7 1,2 4,4 7,6 4,1 7,2 11,2 3,0 6,-2 9,-4 2,-2 4,-5 5,-9l1 -3z"/>
 </g>
</svg>
      
    
      
      
    </section>
    <section className="sdgCubes">
     
     <div className="boxxTitle">
     Start off with a Goal
    </div>
    
      <ul>
      { goalIcons.map((goal,index) => (
		   
	<li onClick={()=>(this.showCountiesToDonor(goal.goalabrrv,goal.goalfull,goal.color))} key={index}><img src={goal.imgLink} /></li>
	))
       }
      
      </ul>
    
    </section>
	
  </div>
  
    
</section>

<Footer />
</React.Fragment>
    );
    }
}



module.exports = Support;