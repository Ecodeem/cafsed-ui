import React, {Component} from "react";
import store from 'storejs';
import {Helmet} from "react-helmet";
import Header from './header';
import Footer from './footer';
import '../shades/scss/partner.scss';
import Picky from 'react-picky';
import 'react-picky/dist/picky.css'; // Include CSS
import { globalAgent } from "http";
const BASE_URL = process.env.USE_BASE_URL;

export default class Checkout extends Component {
    state={
	    
			goals:[],
			countries:[],
			arrayValue: [],
			donorAdd:'',	
			donorCity:'', 
			donorState:'',  
			orgName:'',
			website:'',
			donorEmail:'',
			donorPhone:'',
			donorCountry:'',
			comment:'',
			aboutOrg:'',
	    
	    donorAddErr:null,
			donorCityErr:null,
			donorStateErr:null,
			orgNameErr:null,
			websiteErr:null,
	    donorEmailErr:null,
	    donorPhoneErr:null,
			donorCountryErr:null,
			volInterestErr:null,
			commentErr:null,
			aboutOrgErr:null,

			responseErr:null,
			responseSuc:null,
			donorAddClean: false,
			donorCityClean: false,
			donorStateClean: false,
	    donorFNameClean: false,
			donorLNameClean: false,
	    donorEmailClean: false,
	    donorPhoneClean: false,
			donorCountryClean: false,
			volInterestClean: false,
			commentClean:false,
			aboutOrgClean:false,
			
			apiSuccess:false,
			apiErrorr:false,
	    issubmitted:false,
			overlayLoginForm: false,
			isLoadedSoft:true,
	    
	};
	aboutcontroller = new AbortController();
	
		    
	


componentDidMount(){

	fetch(process.env.API_URL+'allgoals/u', {signal: this.aboutcontroller.signal})
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
	goals: result.data,
	
});
	 
}
	)
	.catch((error) => {
 this.setState({
				goals: [],
	
	 });

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


selectMultipleOption = (value)=> {
	this.setState({arrayValue: value,volInterestErr:null,volInterestClean: true});
	
}

validateVolInterestField = (value) => {

	if (value.length <=0) {
		this.setState({volInterestErr: 'Pick a Department(s)',volInterestClean: false});
	}else{
		this.setState({volInterestErr:'',volInterestClean: true});	
	}
 }

 validateaboutOrgField = (value) =>{

	if (value.length <=0) {
		this.setState({aboutOrgErr: 'This field is required.',aboutOrgClean: false});
	}else{
		this.setState({aboutOrgErr:'',aboutOrgClean: true});	
	}
 }
 validatecommentField = (value) =>{

	if (value.length <=0) {
		this.setState({commentErr: 'This field is required.',commentClean: false});
	}else{
		this.setState({commentErr:'',commentClean: true});	
	}
 }

validatedonorAddField = (value) =>{

	if (value.length <=0) {
		this.setState({donorAddErr: 'This field is required.',donorAddClean: false});
	}else{
		this.setState({donorAddErr:'',donorAddClean: true});	
	}
 }

 validatedonorCityField = (value) => {

	if (value.length <=0) {
		this.setState({donorCityErr: 'This field is required.',donorCityClean: false});
	}else{
		this.setState({donorCityErr:'',donorCityClean: true});	
	}
 }

 validatedonorStateField = (value) => {

	if (value.length <=0) {
		this.setState({donorStateErr: 'This field is required.',donorStateClean: false});
	}else{
		this.setState({donorStateErr:'',donorStateClean: true});	
	}
 }

validateorgNameField = (value) => {

 if (value.length <=0) {
   this.setState({orgNameErr: 'This field is required.',orgNameClean: false});
 }else{
   this.setState({orgNameErr:'',orgNameClean: true});	
 }
}

validatewebsiteField = (value) => {

	if (value.length <=0) {
		this.setState({websiteErr: 'This field is required.',websiteClean: false});
	}else{
		this.setState({websiteErr:'',websiteClean: true});	
	}
 }

validatedonorEmailField = (value) => {

 if (value.length <=0) {
   this.setState({donorEmailErr: 'This field is required.',donorEmailClean: false});
 }else{
   this.setState({donorEmailErr:'',donorEmailClean: true});	
 }
}

validatedonorPhoneField = (value) => {

 if (value.length <=0) {
   this.setState({donorPhoneErr: 'This field is required.',donorPhoneClean: false});
 }else{
   this.setState({donorPhoneErr:'',donorPhoneClean: true});	
 }
}

validatedonorCountryField = (value) =>{

 if (value.length <=0 || value == 'Select a country') {
   this.setState({donorCountryErr: 'This field is required.',donorCountryClean: false});
 }else{
   this.setState({donorCountryErr:'',donorCountryClean: true});	
 }
}

handleorgNameInputChange = (event) => {
    const {target} = event;
    const value = target.value;
    this.setState({orgName: value});
    this.validateorgNameField(value);
}
handlewebsiteInputChange = (event) => {
    const {target} = event;
    const value = target.value;
    this.setState({website: value});
    this.validatewebsiteField(value);
}
handlecommentInputChange = (event) => {
	const {target} = event;
	const value = target.value;
	this.setState({comment: value});
	this.validatecommentField(value);
}
handleaboutOrgInputChange = (event) => {
	const {target} = event;
	const value = target.value;
	this.setState({aboutOrg: value});
	this.validateaboutOrgField(value);
}
handledonorEmailInputChange = (event) => {
    const {target} = event;
    const value = target.value;
    this.setState({donorEmail: value});
    this.validatedonorEmailField(value);
}
handledonorPhoneInputChange = (event) => {
    const {target} = event;
    const value = target.value;
    this.setState({donorPhone: value});
    this.validatedonorPhoneField(value);
}
handledonorAddInputChange = (event) => {
	const {target} = event;
	const value = target.value;
	this.setState({donorAdd: value});
	this.validatedonorAddField(value);
}
handledonorCityInputChange = (event) => {
	const {target} = event;
	const value = target.value;
	this.setState({donorCity: value});
	this.validatedonorCityField(value);
}
handledonorStateInputChange = (event) => {
	const {target} = event;
	const value = target.value;
	this.setState({donorState: value});
	this.validatedonorStateField(value);
}
handledonorCountryInputChange = (event) => {
    const {target} = event;
    const value = target.value;
    this.setState({donorCountry: value});
    this.validatedonorCountryField(value);
}


handleSubmit = (event) => {
	event.preventDefault();
	const {comment,aboutOrg,arrayValue,donorAdd,donorCity,donorState,orgName,website,donorEmail,donorPhone,donorCountry} = this.state;
  const{aboutOrgClean,commentClean,orgNameClean,volInterestClean,donorEmailClean,donorPhoneClean,donorCityClean,donorStateClean,donorCountryClean,donorAddClean} = this.state
  this.validateorgNameField(orgName);
	this.validatewebsiteField(website);
	this.validateaboutOrgField(aboutOrg);
	this.validatecommentField(comment);
  this.validatedonorEmailField(donorEmail);
	this.validatedonorPhoneField(donorPhone);
	this.validatedonorAddField(donorAdd);
	this.validatedonorCityField(donorCity);
	this.validatedonorStateField(donorState);
	this.validatedonorCountryField(donorCountry);
	this.validateVolInterestField(arrayValue);
	

store.has('donationCause') == true ? 
donationCause = store.get('donationCause').projectTitle : null ;
  
  if (donorAddClean && donorCityClean && donorStateClean && orgNameClean && donorEmailClean && donorPhoneClean && donorCountryClean && volInterestClean && aboutOrgClean && commentClean) {

		let sdgs='';
		  arrayValue.map(({sdg})=> {
			sdgs += `${sdg}`+',';
		})

 const apidata = {
	OrganisationName: orgName,
	Website: website,
	Email: donorEmail,
	Phone:donorPhone,
	Address:donorAdd,
	City: donorCity,
	State: donorState,
	Country: donorCountry,
	AboutOrganisation:aboutOrg,
	Comment:comment,
	Sdgs: sdgs
	}
	
//alert(JSON.stringify(apidata,2));


  $.ajax({

        type : "POST",
        url:  process.env.API_URL+"createpartner/u", 
        data : JSON.stringify(apidata),
	beforeSend: (data) => {
	 this.setState({isLoadedSoft:false}); 
        },
	success : (response)=> {
	this.setState({
		isLoadedSoft:true,
		apiErrorr:false,
		issubmitted: true,
		responseErr:null,
		apiSuccess:true, 
		responseSuc:response.message,
			
	    orgName: '',
	    website: '',
	    donorEmail:'',
	    donorPhone:'',
	    donorAdd:'',
    	donorCity:'', 
			donorState:'',
	    donorCountry:'',
	    aboutOrg:'',
	    comment:'',
	    arrayValue: [],

	   });
	},
	error : (err)=> {
	this.setState({
		isLoadedSoft:true,
		apiErrorr:true, 
		responseErr: err.responseJSON.message,
	}); 
	
	
  }
});


  }

}

    render(){
const {commentErr,aboutOrgErr,donorAddErr,donorCityErr,donorStateErr,orgNameErr,websiteErr,donorEmailErr,donorPhoneErr,donorCountryErr,responseErr,} = this.state;
const{volInterestErr,arrayValue,goals,apiSuccess,responseSuc,apiErrorr,isLoadedSoft,countries,} = this.state;

 
    return( 
<React.Fragment>

<Helmet>
<title>VOLUNTEER WITH CAFSED: Centre for Africa Social Economic and Ecological Development (CAFSED)</title>
    
</Helmet>

<Header /> 

<section className="partnBracer">

<div className="toppartnBox">
  <h3>Partnership Form</h3>
	<p> We'd love to share our work with you! </p>
</div>

{ apiErrorr ?
<div className="ApiError">{responseErr}</div>:null
}
{ apiSuccess ?
	<div className="ApiSuccess">{responseSuc}</div>:null
}

<form onSubmit={this.handleSubmit}>

<div className="partnBio">
  
	<div className="partnColl">

	<div className="partnInputBox">
	  <input
      type="text" 
      name="orgName" 
      placeholder="Organisation Name"
		  onChange={this.handleorgNameInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {orgNameErr} </div>
	</div>

	<div className="partnInputBox">
	<input
      type="website" 
      name="website" 
      placeholder="Website Address"
		  onChange={this.handlewebsiteInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {websiteErr}</div>
	</div>

	<div className="partnInputBox">
	<input
      type="email" 
      name="email" 
      placeholder="Email"
		  onChange={this.handledonorEmailInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorEmailErr}</div>
	</div>

	<div className="partnInputBox">
	<input
      type="text" 
      name="dnPhone" 
      placeholder="+2340000000000"
		  onChange={this.handledonorPhoneInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorPhoneErr}</div>
	</div>

	<div className="partnInputBox">
	<input
      type="text" 
      name="address" 
      placeholder="Address"
		  onChange={this.handledonorAddInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorAddErr}</div>
	</div>

	<div className="partnInputBox">
	<input
      type="text" 
      name="city" 
      placeholder="City"
		  onChange={this.handledonorCityInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorCityErr}</div>
	</div>

	<div className="partnInputBox">
	<input
      type="text" 
      name="state" 
      placeholder="State"
		  onChange={this.handledonorStateInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorStateErr}</div>
	</div>

	<div className="partnInputBox">
	<select
      name="country" 
      onChange={this.handledonorCountryInputChange}
			className="chkInputField"
			>
      <option value="Select a country">Select a country</option>
  {
		countries.map((country,index) => (
		
		<option key={index} value={country.value}>{country.label}</option>	   
		
		))
		
	}	 

    </select> 
		<div className="span" id=""> {donorCountryErr}</div>
	</div>


</div>

<div className="partnColl">
<textarea name="aboutorg" onChange={this.handleaboutOrgInputChange} placeholder="About Organisation (200 words)"></textarea>
<div className="span" id=""> {aboutOrgErr}</div>
<textarea name="comment" onChange={this.handlecommentInputChange} placeholder="Comment"></textarea>
<div className="span" id=""> {commentErr}</div>

</div>

</div>


<div className="volInterest">
    <div className="checkTitle">
     Pick SDGs of Interest
	  </div>
		<div className="strethPickyset"> 		       
				 <Picky
  options={goals}
  value={arrayValue}
  onChange={this.selectMultipleOption}
  valueKey="sdg"
  labelKey="label"
  multiple={true}
  numberDisplayed={0}
  manySelectedPlaceholder={'SDGs (%s)'}
	placeholder={'Select SDGs(s)'}
  
/>
			 
</div>
<div className="span" id=""> {volInterestErr}</div>	
</div>

{  
	isLoadedSoft ?
	<button  className="regSumitButt" type="submit"> Submit </button> :
			 <div className="loadReg">
				<img src={`${BASE_URL}utilities/images/softload.gif`}  />
			 </div>
			
}




</form>

</section>

<Footer />

</React.Fragment>
    
    );
    }
}

