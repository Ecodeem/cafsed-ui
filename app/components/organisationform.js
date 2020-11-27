import React, {Component} from "react";
import Loginform from './login';
import '../shades/scss/organisationform.scss';
import Picky from 'react-picky';
import 'react-picky/dist/picky.css'; // Include CSS
const BASE_URL = process.env.USE_BASE_URL;

class Organisationform extends React.Component {
        constructor(props){
            super(props);
	    
	this.state={
	    goals:[],
	    countries:[],	   
	    org_name:'',
	    email:'',
	    password:'',
	    address:'',
	    country:'',
	    
	    value: null,
      arrayValue: [],
	    
	    orgErr:' ',
	    emailErr:' ',
	    passwordErr:' ',
	    sdgErr: ' ',
	    addressErr:' ',
			countryErr:' ',
			responseErr:'',
	    
	    orgClean: false,
	    emailClean: false,
	    passwordClean: false,
	    sdgClean: false,
	    addressClean: false,
	    countryClean: false,
	    
	    issubmitted:false,
			overlayLoginForm: false,
			isLoadedSoft:true,
	    
	};
	this.aboutcontroller = new AbortController();
	this.handleOrgInputChange = this.handleOrgInputChange.bind(this);
	this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
	this.handlePassInputChange = this.handlePassInputChange.bind(this);
	this.handleAddInputChange = this.handleAddInputChange.bind(this);
	this.handleCountryInputChange = this.handleCountryInputChange.bind(this);
	
	this.handleSubmit = this.handleSubmit.bind(this);
	this.selectMultipleOption = this.selectMultipleOption.bind(this);
	this.displayLoginForm= this._displayLoginForm.bind(this);
	this.hideLoginForm = this._hideLoginForm.bind(this);
	    
	}


_displayLoginForm(){
   this.setState({
	overlayLoginForm: true,
   });
}
_hideLoginForm(){
   this.setState({
	overlayLoginForm: false,
   });
}

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



validateOrgField(value){

 if (value.length <=0) {
   this.setState({orgErr: 'This field is required.',orgClean: false});
 }else{
   this.setState({orgErr:'',orgClean: true});	
 }
}

validateEmailField(value){

 if (value.length <=0) {
   this.setState({emailErr: 'This field is required.',emailClean: false});
 }else{
   this.setState({emailErr:'',emailClean: true});	
 }
}

validatePasswordField(value){

 if (value.length <=0) {
   this.setState({passwordErr: 'This field is required.',passwordClean: false});
 }else if(value.length < 8){
   this.setState({passwordErr: 'Must be atleast 8 characters.',passwordClean: false});	
 }
 else{
   this.setState({passwordErr:'',passwordClean: true});	
 }
}

validateSDGsField(value){

 if (value.length <=0) {
   this.setState({sdgErr: 'Pick an SDG(s)',sdgClean: false});
 }else{
   this.setState({sdgErr:'',sdgClean: true});	
 }
}

validateAddressField(value){

 if (value.length <=0) {
   this.setState({addressErr: 'This field is required.',addressClean: false});
 }else{
   this.setState({addressErr:'',addressClean: true});	
 }
}
validateCountryField(value){

 if (value.length <=0 || value == 'Select a country') {
   this.setState({countryErr: 'This field is required.',countryClean: false});
 }else{
   this.setState({countryErr:'',countryClean: true});	
 }
}

handleOrgInputChange(event) {
    const {target} = event;
    const value = target.value;
    this.setState({org_name: value});
    this.validateOrgField(value);
}
handleEmailInputChange(event) {
    const {target} = event;
    const value = target.value;
    this.setState({email: value});
    this.validateEmailField(value);
}
handlePassInputChange(event) {
    const {target} = event;
    const value = target.value;
    this.setState({password: value});
    this.validatePasswordField(value);
}
selectMultipleOption(value,event) {
    this.setState({arrayValue: value,sdgErr:''});
    
}
handleAddInputChange(event) {
    const {target} = event;
    const value = target.value;
    this.setState({address: value});
    this.validateAddressField(value);
}
handleCountryInputChange(event) {
    const {target} = event;
    const value = target.value;
    this.setState({country: value});
    this.validateCountryField(value);
}




handleSubmit(event) {
  event.preventDefault();
  const {org_name,email,password,address,arrayValue,country} = this.state;
  const{orgClean,emailClean,passwordClean,addressClean,countryClean} = this.state
  this.validateOrgField(org_name);
  this.validateEmailField(email);
  this.validatePasswordField(password);
  this.validateSDGsField(arrayValue);
  this.validateAddressField(address);
  this.validateCountryField(country);
  
  if (orgClean && emailClean && passwordClean && addressClean && countryClean && arrayValue.length >=1) {
	let sdgs='';
	arrayValue.map(({sdg})=> {
	  sdgs += `${sdg}`+' ';
	})
	
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
const {responseErr,isLoadedSoft,countries,goals,overlayLoginForm,issubmitted,org_name,email,address,arrayValue,orgErr,emailErr,passwordErr,sdgErr,addressErr,countryErr} = this.state;

    return(
issubmitted ?

<div className="mWrapper">

<div className="successWrapper" data-aos="zoom-in" data-aos-duration="1000">

<div className="successWrapperLeft">
  Successful
</div>
<div onClick={this.displayLoginForm} className="successWrapperRight">
  LOG IN
</div>
 
</div>

{
overlayLoginForm &&(
<Loginform hideForm={this.hideLoginForm}/>
)
}

</div> :
<section className="regSuperCont">
       <div className="regTitle">
          Set Up an Organisation Account
       </div>

			 <div className="span" id="emailErr"> {responseErr} </div>
       
       <form id="regForm" onSubmit={this.handleSubmit}>
          <section className="formRow">
	    <div className="fieldCont">
		<ul>
		   <li className="pe-7s-culture pe-va"></li>
		</ul>
	      
	       <input
                 type="text" 
                 name="org_name" 
                 placeholder="Organisation"
		 onChange={this.handleOrgInputChange}
		 className="inputBox"
               /> 
               <div className="span" id="orgErr"> {orgErr} </div>
	       
             </div>
	     
	     <div className="fieldCont">
		<ul>
		   <li className="pe-7s-mail pe-va"></li>
		</ul>
	      
	       <input 
                 type="email" 
                 name="email" 
                 placeholder="Email address"
		 onChange={this.handleEmailInputChange}
		 className="inputBox"
               />
	       <div className="span" id="emailErr"> {emailErr} </div>
               
             </div>
	</section>
	
	<section className="formRow">
	
	     <div className="fieldCont">
		<ul>
		   <li className="pe-7s-key pe-va"></li>
		</ul>
	      
	       <input
                 type="password" 
                 name="password" 
                 placeholder="Password"
		 onChange={this.handlePassInputChange}
		 className="inputBox"
               /> 
               <div className="span" id="passErr"> {passwordErr} </div>
	       
             </div>
	     
	     <div className="fieldCont ">
		<ul>
		   <li className="pe-7s-help2 pe-va"></li>
		</ul>
	      
	        <div className="strethPicky"> 
	      <Picky
  options={goals}
  value={this.state.arrayValue}
  onChange={this.selectMultipleOption}
  valueKey="sdg"
  labelKey="label"
  multiple={true}
  numberDisplayed={3}
  manySelectedPlaceholder={'SDGs (%s)'}
	placeholder={'SDGs'}
	
  
/>
           <div className="span" id="passErr"> {sdgErr} </div>
	</div>
	       
        </div>
	</section>
	
	<section className="formRow">
	
	    <div className="fieldCont">
		<ul>
		   <li className="pe-7s-map-marker pe-va"></li>
		</ul>
	      
	       <input
                 type="text" 
                 name="address" 
                 placeholder="Location"
		 onChange={this.handleAddInputChange}
		 className="inputBox"
               /> 
               <div className="span" id="addErr"> {addressErr}</div>
	       
             </div>
	     
	     <div className="fieldCont">
		<ul>
		   <li className="pe-7s-map-marker pe-va"></li>
		</ul>
	      
	       <select className="inputBox" name="year" onChange={this.handleCountryInputChange}>
                <option value="Select a country">Select a country</option>
	{
		countries.map((country,index) => (
		
		<option key={index} value={country.value}>{country.label}</option>	   
		
		))
		
	}	 
               </select> 
               <div className="span" id="conErr"> {countryErr}</div>
	       
             </div>
	</section>
	<div className="span" id="emailErr" style={{marginTop:'10px'}}> {responseErr} </div>
	     
	{  
			isLoadedSoft ?
			<button  className="regSumitButt" type="submit"> Submit </button> :
					 <div className="loadReg">
					  <img src={`${BASE_URL}utilities/images/softload.gif`}  />
					 </div>
		      
		}
               
		
		
      </form>
</section>
    
    );
    }
}


module.exports = Organisationform;