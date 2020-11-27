import React, {Component} from "react";
import path from 'path';
import '../shades/scss/organisationform.scss';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import Picky from 'react-picky';
import 'react-picky/dist/picky.css'; // Include CSS

class Personalform extends React.Component {
        constructor(props){
            super(props);
	    
	this.state={
	    
	   sdgs: this.getData(),
	   
	    org_name:'',
	    email:'',
	    password:'',
	    address:'',
	    
	    value: null,
            arrayValue: [],
	    
	    orgErr:' ',
	    emailErr:' ',
	    passwordErr:' ',
	    sdgErr: ' ',
	    addressErr:' ',
	    
	    orgClean: false,
	    emailClean: false,
	    passwordClean: false,
	    sdgClean: false,
	    addressClean: false,
	     
	    
	};
	
	this.handleOrgInputChange = this.handleOrgInputChange.bind(this);
	this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
	this.handlePassInputChange = this.handlePassInputChange.bind(this);
	this.handleAddInputChange = this.handleAddInputChange.bind(this);
	
	this.handleSubmit = this.handleSubmit.bind(this);
	
	this.selectMultipleOption = this.selectMultipleOption.bind(this);
	    
	}

getData(){  //  set default values
    const bars = [
      {sdg: 'SDG 1', label: 'SDG1: No Poverty'},
      {sdg: 'SDG 2', label: 'SDG1: Zero Hunger'},
      
     
      
     
    ]
  
  return bars;
}

componentDidMount(){

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



handleSubmit(event) {
  event.preventDefault();
  const {org_name,email,password,address,arrayValue} = this.state;
  const{orgClean,emailClean,passwordClean,addressClean} = this.state
  this.validateOrgField(org_name);
  this.validateEmailField(email);
  this.validatePasswordField(password);
  this.validateSDGsField(arrayValue)
  this.validateAddressField(address);
  
  if (orgClean && emailClean && passwordClean && addressClean && arrayValue.length >=1) {
	const sdgs= [];
	arrayValue.map(({sdg})=> {
	  sdgs.push({sdg});
	})
	
 const data = {
	Organisation: org_name,
	Email: email,
	Password: password,
	SDGs:sdgs,
	Address: address,
  }
  
  alert(JSON.stringify(data, null, 2));
  
  }
 

}

    render(){
const {org_name,email,address,arrayValue,orgErr,emailErr,passwordErr,sdgErr,addressErr} = this.state;
const{orgClean,emailClean,passwordClean,addressClean} = this.state

console.log(orgClean+' '+emailClean+' '+passwordClean+' '+addressClean);

    return(

<section className="regSuperCont">
       <div className="regTitle">
          Set Up a Personal Account
       </div>
       
       <form id="regForm" onSubmit={this.handleSubmit}>
          <section className="formRow">
	    <div className="fieldCont">
		<ul>
		   <li className="pe-7s-user pe-va"></li>
		</ul>
	      
	       <input
                 type="text" 
                 name="org_name" 
                 placeholder="Organisation"
		 onChange={this.handleOrgInputChange}
		 className="inputBox"
               /> 
               <div class="span" id="orgErr"> {orgErr} </div>
	       
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
	       <div class="span" id="emailErr"> {emailErr} </div>
               
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
               <div class="span" id="passErr"> {passwordErr} </div>
	       
             </div>
	     
	     <div className="fieldCont ">
		<ul>
		   <li className="pe-7s-help2 pe-va"></li>
		</ul>
	      
	        <div> 
	      <Picky
  options={this.state.sdgs}
  value={this.state.arrayValue}
  onChange={this.selectMultipleOption}
  valueKey="sdg"
  labelKey="label"
  multiple={true}
  numberDisplayed={3}
  manySelectedPlaceholder={'SDGs (%s)'}
  placeholder={'SDGs'}
  
/>
           <div class="span" id="passErr"> {sdgErr} </div>
	</div>
	       
        </div>
	</section>
	
	<section className="formRow">
	
	     <div className="fieldCont finalField">
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
               <div class="span" id="addErr"> {addressErr}</div>
	       
             </div>
	</section>
	     
	     
               <div className="regSumitButt">
		<button type="submit">
                    Submit
                 </button>
		</div>
      </form>
</section>
    );
    }
}



module.exports = Personalform;