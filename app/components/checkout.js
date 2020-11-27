import React, {Component} from "react";
import store from 'storejs';
import {Helmet} from "react-helmet";
import Header from './header';
import Footer from './footer';
import '../shades/scss/checkout.scss';
const BASE_URL = process.env.USE_BASE_URL;

class Checkout extends React.Component {
        constructor(props){
            super(props);
	    
	this.state={
	    goals:[],
			countries:[],
			donationRef:'',
			donorTitle:'',	   
			donorFName:'',
			donorLName:'',
			donorEmail:'',
			donorPhone:'',
			donorCountry:'',
	    dnAmount:'',
	    dnType:'once',
	    
	    	    
			donorTitleErr:null,
			donorFNameErr:null,
			donorLNameErr:null,
	    donorEmailErr:null,
	    donorPhoneErr:null,
			donorCountryErr:null,
			dnAmountErr:null,
			

			responseErr:null,
	    
	    donorTitleClean: false,
	    donorFNameClean: false,
			donorLNameClean: false,
	    donorEmailClean: false,
	    donorPhoneClean: false,
			donorCountryClean: false,
			dnAmountClean: false,
	    
	    issubmitted:false,
			overlayLoginForm: false,
			isLoadedSoft:true,
	    
	};
	this.aboutcontroller = new AbortController();
	this.handledonorTitleInputChange = this.handledonorTitleInputChange.bind(this);
	this.handledonorFNameInputChange = this.handledonorFNameInputChange.bind(this);
	this.handledonorLNameInputChange = this.handledonorLNameInputChange.bind(this);
	this.handledonorEmailInputChange = this.handledonorEmailInputChange.bind(this);
	this.handledonorPhoneInputChange = this.handledonorPhoneInputChange.bind(this);
	this.handledonorCountryInputChange = this.handledonorCountryInputChange.bind(this);
	this.handlednTypeInputChange = this.handlednTypeInputChange.bind(this);
	this.handlednAmountInputChange = this.handlednAmountInputChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	
	    
	}


componentDidMount(){


	  let dnRef = Math.floor(Math.random()*10000000000);

	this.setState({donationRef:dnRef});
	
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

amountPicker(value){
  this.setState({dnAmount:value,dnAmountErr:null,dnAmountClean: true});
}

validatedonorTitleField(value){

	if (value.length <=0) {
		this.setState({donorTitleErr: 'Pick a title.',donorTitleClean: false});
	}else{
		this.setState({donorTitleErr:'',donorTitleClean: true});	
	}
 }

validatedonorFNameField(value){

 if (value.length <=0) {
   this.setState({donorFNameErr: 'This field is required.',donorFNameClean: false});
 }else{
   this.setState({donorFNameErr:'',donorFNameClean: true});	
 }
}

validatedonorLNameField(value){

	if (value.length <=0) {
		this.setState({donorLNameErr: 'This field is required.',donorLNameClean: false});
	}else{
		this.setState({donorLNameErr:'',donorLNameClean: true});	
	}
 }

validatedonorEmailField(value){

 if (value.length <=0) {
   this.setState({donorEmailErr: 'This field is required.',donorEmailClean: false});
 }else{
   this.setState({donorEmailErr:'',donorEmailClean: true});	
 }
}

validatedonorPhoneField(value){

 if (value.length <=0) {
   this.setState({donorPhoneErr: 'This field is required.',donorPhoneClean: false});
 }else{
   this.setState({donorPhoneErr:'',donorPhoneClean: true});	
 }
}

validatedonorCountryField(value){

 if (value.length <=0 || value == 'Select a country') {
   this.setState({donorCountryErr: 'This field is required.',donorCountryClean: false});
 }else{
   this.setState({donorCountryErr:'',donorCountryClean: true});	
 }
}

validatednAmountField(value){

	if (value.length <=0) {
		this.setState({dnAmountErr: 'Give amount.',dnAmountClean: false});
	}else{
		this.setState({dnAmountErr:'',dnAmountClean: true});	
	}
 }

handledonorTitleInputChange(event) {
	const {target} = event;
	const value = target.value;
	this.setState({donorTitle: value});
	this.validatedonorTitleField(value);
}

handledonorFNameInputChange(event) {
    const {target} = event;
    const value = target.value;
    this.setState({donorFName: value});
    this.validatedonorFNameField(value);
}
handledonorLNameInputChange(event) {
    const {target} = event;
    const value = target.value;
    this.setState({donorLName: value});
    this.validatedonorLNameField(value);
}
handledonorEmailInputChange(event) {
    const {target} = event;
    const value = target.value;
    this.setState({donorEmail: value});
    this.validatedonorEmailField(value);
}
handledonorPhoneInputChange(event) {
    const {target} = event;
    const value = target.value;
    this.setState({donorPhone: value});
    this.validatedonorPhoneField(value);
}
handledonorCountryInputChange(event){
    const {target} = event;
    const value = target.value;
    this.setState({donorCountry: value});
    this.validatedonorCountryField(value);
}
handlednAmountInputChange(event){
	const {target} = event;
	const value = target.value;
	this.setState({dnAmount: value});
	this.validatednAmountField(value);
}
handlednTypeInputChange(event){
	const {target} = event;
	const value = target.value;
	this.setState({dnType: value});
	this.validatednTypeField(value);
}

handleSubmit(event) {
	event.preventDefault();
	const {donationRef,donorTitle,donorFName,donorLName,donorEmail,donorPhone,donorCountry,dnAmount,dnType} = this.state;
  const{donorTitleClean,donorFNameClean,donorLNameClean,donorEmailClean,donorPhoneClean,donorCountryClean,dnAmountClean} = this.state
  this.validatedonorTitleField(donorTitle);
  this.validatedonorFNameField(donorFName);
  this.validatedonorLNameField(donorLName);
  this.validatedonorEmailField(donorEmail);
  this.validatedonorPhoneField(donorPhone);
	this.validatedonorCountryField(donorCountry);
	this.validatednAmountField(dnAmount);

store.has('donationCause')==true ? 
donationCause = store.get('donationCause').projectTitle : null ;
  
  if (donorTitleClean && donorFNameClean && donorLNameClean && donorEmailClean && donorPhoneClean && donorCountryClean && dnAmountClean) {
		
 const apidata = {
	Organisation: org_name,
	Email: email,
	Password: password,
	SDGs:sdgs,
	Address: address,
	Country: country,
  }
  
  
  $.ajax({

        type : "POST",
        url:  process.env.API_URL+"createuser/u", 
        data : JSON.stringify(apidata),
	beforeSend: (data) => {
	 this.setState({isLoadedSoft:false}); 
        },
	success : (response)=> {
	this.setState({
		issubmitted: true,
		org_name:'',
	  email:'',
	  password:'',
	  address:'',
	  country:'',
	  arrayValue: [],
	   });
	},
	error : (err)=> {
	this.setState({isLoadedSoft:true, responseErr: 'Email given exists. Consider Log In.'}); 
        }
});
  
  
  
  }
 

}

    render(){
const {dnAmount,donorTitleErr,donorFNameErr,donorLNameErr,donorEmailErr,donorPhoneErr,donorCountryErr,dnAmountErr,responseErr,} = this.state;
const{dnType,countries,donationRef} = this.state;
let donationCause ='';
store.has('donationCause')==true ? 
donationCause = store.get('donationCause').projectTitle : null ;

console.log(dnAmount);
 
    return( 
<React.Fragment>

<Helmet>
<title>CHECKOUT: Centre for Africa Social Economic and Ecological Development (CAFSED)</title>
    
</Helmet>

<Header /> 

<section className="checkOutBracer">

<div className="topCheckBox">
  <div className="donPurpose">
	  <span>Donating to Support</span> <br/>
    {donationCause}
	</div>
	<div className="donRef">
 	<span>Transaction Reference</span> <br/>
	 {donationRef}
	</div>
</div>

<form onSubmit={this.handleSubmit}>

<div className="checkBio">
  
	<div className="checkTitle">
     Bio
	</div>

	<div className="checkTitleBox">
		Mr. &nbsp;&nbsp;
	  <input
      type="radio" 
			name="dntitle" 
			value="Mr."
      onChange={this.handledonorTitleInputChange}
		  
    /> 
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		Mrs. &nbsp;&nbsp;
		<input
      type="radio" 
			name="dntitle"
			value="Mrs."
      onChange={this.handledonorTitleInputChange}
		  
    /> 
	</div>
	<div style={{width:'100%'}} className="span" id="donorTitleErr"> {donorTitleErr} </div>

	<div className="chkInputBox">
	  <input
      type="text" 
      name="firstName" 
      placeholder="First Name"
		  onChange={this.handledonorFNameInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorFNameErr} </div>
	</div>

	<div className="chkInputBox">
	<input
      type="text" 
      name="lastName" 
      placeholder="Last Name"
		  onChange={this.handledonorLNameInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorLNameErr}</div>
	</div>

	<div className="chkInputBox">
	<input
      type="email" 
      name="lastName" 
      placeholder="Email"
		  onChange={this.handledonorEmailInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorEmailErr}</div>
	</div>

	<div className="chkInputBox">
	<input
      type="text" 
      name="dnPhone" 
      placeholder="+2340000000000"
		  onChange={this.handledonorPhoneInputChange}
		  className="chkInputField"
    /> 
		<div className="span" id=""> {donorPhoneErr}</div>
	</div>

	<div className="chkInputBox">
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

<div className="checkDonat">
  
	<div className="checkTitle">
     Donation <span>(Recurring donations are a good way to give to charity)</span>
	</div>

  <div className="checkDoButtBox">

	<button type="button" onClick={()=> this.amountPicker('5')} className={dnAmount==='5'?'selected':null}>
	  $5
	</button>
	<button type="button" onClick={()=> this.amountPicker('10')} className={dnAmount==='10'?'selected':null}>
	  $10
	</button>
	<button type="button" onClick={()=> this.amountPicker('20')} className={dnAmount==='20'?'selected':null}>
	  $20
	</button>

	</div>

	<div className="chkAmount">

	<input
      type="text" 
      name="dnAmount" 
      placeholder="Other Amount"
		  onChange={this.handlednAmountInputChange}
		  className="chkAmountField"
    /> 
		<div className="span" id=""> {dnAmountErr}</div>
	</div>

	<div className="checkFreqBox">

	<label>
	  <input
      type="radio" 
			name="dntype"
			value="recurring"
      onChange={this.handlednTypeInputChange}
		  
    /> 
		<div className={dnType=='recurring'?'selected':null}>Recurring</div>
	</label>
	   
	<label>
	  <input
      type="radio" 
			name="dntype"
			value="once" 
      onChange={this.handlednTypeInputChange}
		  
    /> 
		<div className={dnType=='once'?'selected':null}>One Time</div>
	</label>



	</div>

	<div className="dnButton">
		<button type="submit">
			DONATE NOW
		</button>
	</div>


</div>
</form>

</section>

<Footer />

</React.Fragment>
    
    );
    }
}


module.exports = Checkout;