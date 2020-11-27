import React, {Component} from "react";
import {Helmet} from "react-helmet";
import store from 'storejs';
import Header from './header';

import '../shades/scss/account.scss';
import Settingtab from './settingtab';
const BASE_URL = process.env.USE_BASE_URL;

class Account extends React.Component {
        constructor(props){
            super(props);
	    this.state={
	    
	    isLoaded: false,
	    profile: {},
	    
	    };
	this. aboutcontroller = new AbortController();
	this.handlelogout = this.handlelogout.bind(this);
	this.updateProfile = this.updateProfile.bind(this);
	}

handlelogout(){
store.remove('user');
const {history} = this.props;
 const searchParam = '/'; 
 history.push(searchParam);
}

updateProfile(value){
   this.setState({profile: value });
}
	

componentDidMount(){

if (store.has('user')==true) {
 
   const userid = store.get('user').userid;
   
   fetch(process.env.API_URL+'userprofile/'+userid, {signal: this.aboutcontroller.signal})
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
		profile: returnValue,
		isLoaded:true,
	});
	   
	}
    )
    .catch((error) => {
	 this.setState({
	        goals: [],
		
	   });
	
    });
  
}else{
 
 const {history} = this.props;
 const searchParam = '/register/'; 
 history.push(searchParam);
 
}	
    
}
componentWillUnmount(){
    this.aboutcontroller.abort();
}

    render(){
const {isLoaded,profile} = this.state;




    return(
<React.Fragment>
<Helmet>
  <title>{`USER - ${profile.orgname}`}</title>
                 
</Helmet>

{
isLoaded == false && ( <div className="spinnerLoad"></div>)
}
     <Header /> 

		 <div className="mobPadding" style={{marginTop:'70px'}}> </div>  
		 
      <section className="accTopStrip">

			 <div className="accbracerStrip">
			 
			 <div className="LogOutBox"><span onClick={this.handlelogout} className="pe-7s-power"></span></div>
       

       <div className="addDes">   
		   <span>{profile.orgname}</span> <br/>
		   {profile.email} <br/>
		   {profile.address} &bull; {profile.country}
		    </div>
	  <div className="focusGoal">
	    <strong>Focus Goal(s)</strong>: {profile.sdgs}
	    
	  </div>
	  
	</div>
       </section>
	  
	<Settingtab country={profile.country} profile={profile} updateprofile={this.updateProfile}/>  
 </React.Fragment>
    );
    }
}

module.exports = Account;