import React, {Component} from "react";
import store from 'storejs';
import {Helmet} from "react-helmet";
import Header from './header';
import Footer from './footer';
import '../shades/scss/volunteer.scss';
import Picky from 'react-picky';
import 'react-picky/dist/picky.css'; // Include CSS
const BASE_URL = process.env.USE_BASE_URL;

export default class Checkout extends Component {
    state={
	    goals:[
				{label:'Research/Data Analysis', department:'Research/Data Analysis'},
				{label:'Community Engagement', department:'Community Engagement'},
				{label:'Protocol/Logistics', department:'Protocol/Logistics'},
				{label:'Media/Public Relations', department:'Media/Public Relations'},
				{label:'ICT', department:'ICT'},
				{label:'Tech/Innovate', department:'Tech/Innovate'},
				{label:'Project Manager', department:'Project Manager'},
				
			],
			countries:[],
			arrayValue: [],
			donorAdd:'',	
			donorCity:'', 
			donorState:'',  
			donorFName:'',
			donorLName:'',
			donorEmail:'',
			donorPhone:'',
			donorCountry:'',
	    
	      
			donorAddErr:null,
			donorCityErr:null,
			donorStateErr:null,
			donorFNameErr:null,
			donorLNameErr:null,
	    donorEmailErr:null,
	    donorPhoneErr:null,
			donorCountryErr:null,
			volInterestErr:null,
						

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
			
			apiSuccess:false,
			apiErrorr:false,
	    issubmitted:false,
			overlayLoginForm: false,
			isLoadedSoft:true,
	    
	};
	aboutcontroller = new AbortController();
	
		    
	


componentDidMount(){


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

validatedonorFNameField = (value) => {

 if (value.length <=0) {
   this.setState({donorFNameErr: 'This field is required.',donorFNameClean: false});
 }else{
   this.setState({donorFNameErr:'',donorFNameClean: true});	
 }
}

validatedonorLNameField = (value) => {

	if (value.length <=0) {
		this.setState({donorLNameErr: 'This field is required.',donorLNameClean: false});
	}else{
		this.setState({donorLNameErr:'',donorLNameClean: true});	
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


handledonorFNameInputChange = (event) => {
    const {target} = event;
    const value = target.value;
    this.setState({donorFName: value});
    this.validatedonorFNameField(value);
}
handledonorLNameInputChange = (event) => {
    const {target} = event;
    const value = target.value;
    this.setState({donorLName: value});
    this.validatedonorLNameField(value);
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
	const {arrayValue,donorAdd,donorCity,donorState,donorFName,donorLName,donorEmail,donorPhone,donorCountry} = this.state;
  const{volInterestClean,donorFNameClean,donorLNameClean,donorEmailClean,donorPhoneClean,donorCityClean,donorStateClean,donorCountryClean,donorAddClean} = this.state
  this.validatedonorFNameField(donorFName);
  this.validatedonorLNameField(donorLName);
  this.validatedonorEmailField(donorEmail);
	this.validatedonorPhoneField(donorPhone);
	this.validatedonorAddField(donorAdd);
	this.validatedonorCityField(donorCity);
	this.validatedonorStateField(donorState);
	this.validatedonorCountryField(donorCountry);
	this.validateVolInterestField(arrayValue);
	

store.has('donationCause') == true ? 
donationCause = store.get('donationCause').projectTitle : null ;
  
  if (donorAddClean && donorCityClean && donorStateClean && donorFNameClean && donorLNameClean && donorEmailClean && donorPhoneClean && donorCountryClean && volInterestClean) {

		let depts='';
		arrayValue.map(({department})=> {
			depts += `${department}`+',';
		})

 const apidata = {
	FirstName: donorFName,
	LastName: donorLName,
	Email: donorEmail,
	Phone:donorPhone,
	Address:donorAdd,
	City: donorCity,
	State: donorState,
	Country: donorCountry,
	Department: depts
	}
	
//alert(JSON.stringify(apidata,2));
  
 
  $.ajax({

        type : "POST",
        url:  process.env.API_URL+"createvolunteer/u", 
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
			
		arrayValue: [],
			donorAdd:'',	
			donorCity:'', 
			donorState:'',  
			donorFName:'',
			donorLName:'',
			donorEmail:'',
			donorPhone:'',
			donorCountry:'',
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
const {donorAddErr,donorCityErr,donorStateErr,donorFNameErr,donorLNameErr,donorEmailErr,donorPhoneErr,donorCountryErr,dnAmountErr,responseErr,} = this.state;
const{volInterestErr,arrayValue,goals,apiSuccess,responseSuc,apiErrorr,isLoadedSoft,dnType,countries,donationRef} = this.state;

 
    return( 
<React.Fragment>

<Helmet>
<title>VOLUNTEER WITH CAFSED: Centre for Africa Social Economic and Ecological Development (CAFSED)</title>
    
</Helmet>

<Header /> 

<section className="voluntBracer">

<div className="topvoluntBox">
  <h3>Volunteer Registration Form</h3>
	<p>Let's know your area of interest to offer volunteer, we will get back soon with updates upon receiving this form.</p>
</div>

{ apiErrorr ?
<div className="ApiError">{responseErr}</div>:null
}
{ apiSuccess ?
	<div className="ApiSuccess">{responseSuc}</div>:null
}

<form onSubmit={this.handleSubmit}>

<div className="volBio">
  
	
	<div className="volInputBox">
	  <input
      type="text" 
      name="firstName" 
      placeholder="First Name"
		  onChange={this.handledonorFNameInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorFNameErr} </div>
	</div>

	<div className="volInputBox">
	<input
      type="text" 
      name="lastName" 
      placeholder="Last Name"
		  onChange={this.handledonorLNameInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorLNameErr}</div>
	</div>

	<div className="volInputBox">
	<input
      type="email" 
      name="email" 
      placeholder="Email"
		  onChange={this.handledonorEmailInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorEmailErr}</div>
	</div>

	<div className="volInputBox">
	<input
      type="text" 
      name="dnPhone" 
      placeholder="+2340000000000"
		  onChange={this.handledonorPhoneInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorPhoneErr}</div>
	</div>

	<div className="volInputBox">
	<input
      type="text" 
      name="address" 
      placeholder="Address"
		  onChange={this.handledonorAddInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorAddErr}</div>
	</div>

	<div className="volInputBox">
	<input
      type="text" 
      name="city" 
      placeholder="City"
		  onChange={this.handledonorCityInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorCityErr}</div>
	</div>

	<div className="volInputBox">
	<input
      type="text" 
      name="state" 
      placeholder="State"
		  onChange={this.handledonorStateInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorStateErr}</div>
	</div>

	<div className="volInputBox">
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
<div className="volInterest">
    <div className="checkTitle">
     Pick an Area of Interest
	  </div>
		<div className="strethPickyset"> 		       
				 <Picky
  options={goals}
  value={arrayValue}
  onChange={this.selectMultipleOption}
  valueKey="department"
  labelKey="label"
  multiple={true}
  numberDisplayed={0}
  manySelectedPlaceholder={'Department (%s)'}
	placeholder={'Select Department(s)'}
  
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

