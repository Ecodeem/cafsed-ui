import React, {Component} from "react";
import '../shades/scss/usersettingstyle.scss';
import Picky from 'react-picky';
import 'react-picky/dist/picky.css'; // Include CSS

class Commit extends React.Component {
        constructor(props){
            super(props);
	    this.state={
			
			goals:[],
			countries:[],	
			arrayValue: [], 
			
			orgErr:'',
			sdgErr: '',
			addressErr:'',
			countryErr:'',


			orgClean: false,
			sdgClean: false,
			addressClean: false,
			countryClean: false,

			commit: false,
			orgName: this.props.profile.orgname, 
			sdgs: this.props.profile.sdgs,
			location: this.props.profile.address,
			country:this.props.profile.country,

			isLoadedSoft: true,
			showcountryMask:true,
			showsdgMask:true,
	    
			};
			this.aboutcontroller = new AbortController();
			this.displaycounryMask = this._displaycounryMask.bind(this);
			this.displaysdgMask = this._displaysdgMask.bind(this);
	     this._setCommitTrue = this._setCommitTrue.bind(this);
		  this._setCommitFalse = this._setCommitFalse.bind(this);
		  this.handleSubmit = this.handleSubmit.bind(this);
		  this.handleOrgInputChange = this.handleOrgInputChange.bind(this);
			this.handleAddInputChange = this.handleAddInputChange.bind(this);
			this.handleCountryInputChange = this.handleCountryInputChange.bind(this);
			this.selectMultipleOption = this.selectMultipleOption.bind(this);
	}

_displaycounryMask(){
		this.setState({showcountryMask:false});
}
_displaysdgMask(){
	this.setState({showsdgMask:false});
}
_setCommitTrue(){
  this.setState({commit:true});
}
_setCommitFalse(){
  this.setState({commit:false});
}

validateOrgField(value){

	if (value.length <=0) {
	  this.setState({orgErr: 'This field is required.',orgClean: false});
	}else{
	  this.setState({orgErr:'',orgClean: true});	
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
	this.setState({orgName: value});
	this.validateOrgField(value);
}
selectMultipleOption(value,event) {
	this.setState({arrayValue: value,sdgErr:''});
		
}
handleAddInputChange(event) {
	const {target} = event;
	const value = target.value;
	this.setState({location: value});
	this.validateAddressField(value);
}
handleCountryInputChange(event) {
	const {target} = event;
	const value = target.value;
	this.setState({country: value});
	this.validateCountryField(value);
}

componentDidMount(){

const sdgStr = this.props.profile.sdgs;
const trimSdgstr = sdgStr.replace(/^\s+|\s+$/g, '');
const splitSdgstr = trimSdgstr.split(/[ ,]+/).join(',');
const SdgArray = splitSdgstr.split(',');
const SDGsArr = [];

for (let v of SdgArray) {
	const sdgObj = {sdg:v};
  SDGsArr.push(sdgObj);
}

this.setState({arrayValue: SDGsArr});

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

handleSubmit(event) {
	event.preventDefault();

			const {orgName,location,country,orgClean,addressClean,arrayValue,countryClean} = this.state;
this.validateOrgField(orgName);
this.validateAddressField(location);
this.validateCountryField(country);
this.validateSDGsField(arrayValue);

if (orgClean && addressClean && countryClean && arrayValue.length >=1) {

	let sdgs='';
	arrayValue.map(({sdg})=> {
	  sdgs += `${sdg}`+' ';
	})

  const apidata = {
	userId:  this.props.profile.userId,
	Organisation: orgName,
	SDGs:sdgs,
	Address: location,
	Country: country,
	
	}
	
	console.log(country);
	
	$.ajax({
 
			type : "POST",
			url:  process.env.API_URL+"updateacc/u", 
			data : JSON.stringify(apidata),
	 beforeSend: (data) => {
	  this.setState({isLoadedSoft:false}); 
			},
	 success : (response)=> {
		const returnValue = response.data.reduce((a,b) => Object.assign(a,b), {});
    this.props.updateprofile(returnValue);
	 this.setState({
		isLoadedSoft:true,
		 });
	 },
	 error : (err)=> {
	 this.setState({isLoadedSoft:true, responseErr: 'Unable to update data. Try again.'}); 
			}
 });
	
	
}	
	
  
 
 }

    render(){
const {sdgErr,arrayValue,goals,showcountryMask,showsdgMask,commit,countries,isLoadedSoft,orgName,sdgs,location,country,orgErr,countryErr,addressErr} = this.state;

    return(
<section>
	
	<section class="userDashHeadWrap3">
	    <section class="balancer">
	       <div class="billingCont2">
		  <div class="formWrapper">
<form onSubmit={this.handleSubmit}>
		  <div class="formTitle">Edit Profile</div>
		  
		   <div className="gutterWrapper">
		  
		    <div className="gutterWrap padRight">
		      <label>Organization</label><br/>
		        <input className="inputBoxset" onChange={this.handleOrgInputChange} type="text" id="orgnaization" name="orgnaization" defaultValue={orgName} /> 

				  <div className="span"> {orgErr} </div>
		    </div>
		    
		    <div className="gutterWrap">
{ showsdgMask &&(
	<div className="marskk">{sdgs}
		 <div className="closemarskk"><span onClick={this.displaysdgMask} className="pe-7s-close"></span></div>
	</div>
)
}
				<label>SDGs</label><br/>
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
	placeholder={'Select SDG(s)'}
  
/>
			 
</div>		 
        <div className="span"> {sdgErr} </div>
		     </div>
		     
		     <div className="gutterWrap padRight" >
		      <label>Location</label><br/>
		       <input className="inputBoxset" onChange={this.handleAddInputChange} type="text" id="location" name="location" defaultValue={location}  />
				 <div className="span"> {addressErr} </div>
		     </div>

			  <div className="gutterWrap">
{ showcountryMask &&(
				   <div className="marskk2">{country}
				      <div className="closemarskk"><span onClick={this.displaycounryMask} className="pe-7s-close"></span></div>
				   </div>
)
}
		      <label>Country</label><br/>
				  <select className="inputBox" name="year" onChange={this.handleCountryInputChange}>
                <option value="Select a country">Select a country</option>

				{
	       	countries.map((country,index) => (
		
	      	<option key={index} value={country.value}>{country.label}</option>	   
		
		     ))
		
      	}	
				</select> 
					 <div className="span"> {countryErr} </div>
		     </div>
		     
				
		    { isLoadedSoft ?
		       <button className="sdwm" type="submit">Save Changes</button>:
		       <button className="sdwmc" >Saving..</button>
			 }
			
	  </div>
		     
</form>
		  </div>
	       </div>
	    </section>
	    
	    <section class="balancer">
	       <div class="changeEmailCont">
		  <div class="changeEmailWrapper">
		     <div class="formTitle">Change Email</div>
		     <div class="div1">
			You can change your email at any time, but you
			have to confirm the email after the change.
		     </div>
		     <div class="div2">slypalmer15@gmail.com <span class="hyperLink">Change</span></div>
		  </div>
	       </div>
	       
	       <div class="changePasswordCont">
		  <div class="changePasswordWrapper">
		     <div class="formTitle">Change Password</div>
		     <table>
			<tr>
			   <td class="gutter">
			   <label for="newpassword">New Password
			      <input type="text" id="newpassword" name="newpassword" tabindex="4" />
			   </label>
			   </td>
			   
			</tr>
			<tr>
			   <td class="gutter">
			   <label for="confirmpassword">Confirm Password
			      <input type="text" id="confirmpassword" name="confirmpassword" tabindex="5" />
			   </label>
			   </td>
			   
			</tr>
			<tr>
			<td class="gutter">
			   <button>Save Changes</button>
			</td>
		     </tr>
		     </table>
		  </div>
	       </div>
	      
	       
	    </section>
	</section>
	
        </section>
    );
    }
}

module.exports = Commit;