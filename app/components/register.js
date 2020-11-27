import React, {Component} from "react";
import {Helmet} from "react-helmet";
import store from 'store';
import path from 'path';
import Header from './header';
import Footer from './footer';
import Feedback from './feedback';
import '../shades/scss/register.scss';
import Organisationform from './organisationform';
import Personalform from './personal';
const BASE_URL = process.env.USE_BASE_URL;



class Register extends React.Component {
        constructor(props){
            super(props);
	    
	this.state={
	    
	isregistered: false,
	isLoaded: false,
	userReg: 'corporate',
	activeClass:  false,
	    
	};
	
	this._showPersonal = this._showPersonal.bind(this);
	this._showCorporate = this._showCorporate.bind(this);
	
	}

_showPersonal(){
    this.setState({
	userReg: 'register',
	activeClass: true,
    })
	
}
	
_showCorporate(){
    this.setState({
	userReg: 'corporate',
	activeClass: false,
    })
	
}

componentDidMount(){

 this.setState({
      isLoaded:true,
 });

}

    render(){

const {isLoaded,isregistered,activeClass} = this.state;
    
    return(

<React.Fragment>
<Helmet>
<title>REGISTER: Africa SDGs Data Upload Registration</title>
<meta name="description" content="Partners and stakeholders registration page to upload data on Africa SDGs onto cafsed.org website." />
<meta name="keywords" content="register, upload data, africa sdg, partners, stakeholders" />
</Helmet>  

{
isLoaded == false && ( <div className="spinnerLoad"></div>)
}
     <Header />

	 <div className="mobPadding" style={{marginTop:'70px'}}> </div> 

    {
	isregistered ?
	<section className="succesFull">
           <p>Account Creation Successful</p>
	    <div>Proceed to Log In</div>
        </section> :
<>	
	 <div className="userHeadderWrapper">

	

	       <ul className="userNav">
	       
	                <li onClick={this._showCorporate}  className={activeClass? "Inactive" : "Active"}>
			   Corporate 
			</li>
	                
			
						
		</ul>
	</div>
     
        {
	this.state.userReg == 'corporate' ? <Organisationform /> : null 
	
      }
      
	
	
</>    
     
	}

<Footer />
</React.Fragment>

    );
    }
}



module.exports = Register;