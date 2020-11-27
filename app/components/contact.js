import React, {Component} from "react";
import {Helmet} from "react-helmet";
import Header from './header';
import Footer from './footer';
import { NavLink, Link } from 'react-router-dom';
import '../shades/scss/contact.scss';    
const BASE_URL = process.env.USE_BASE_URL;

export class Contact extends React.Component {
        constructor(props){
						super(props);
						this.state={

							name:'',
							email:'',
							subject:'',
							message:'',

							nameErr:'',
							emailErr:'',
							subjectErr:'',
							messageErr:'',

							nameClean: false,
							emailClean: false,
							subjectClean: false,
							messageClean: false,

							sending:false,
							sendStatus:'',
						};

						this.handleNameInputChange = this.handleNameInputChange.bind(this);
						this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
						this.handleSubjectInputChange = this.handleSubjectInputChange.bind(this);
						this.handleMessageInputChange = this.handleMessageInputChange.bind(this);
						this.handleSubmit = this.handleSubmit.bind(this);
		}

validateNameField(value){

	if (value.length <=0) {
			this.setState({nameErr: 'Give a name.',nameClean: false});
	}else{
		this.setState({nameErr:'',nameClean: true});	
	}
}
validateEmailField(value){

	if (value.length <=0) {
		this.setState({emailErr: 'Give an email',emailClean: false});
	}else{
		this.setState({emailErr:'',emailClean: true});	
	}
 }
 validateSubjectField(value){

	if (value.length <=0) {
		this.setState({subjectErr: 'Select a subject',subjectClean: false});
	}else{
		this.setState({subjectErr:'',subjectClean: true});	
	}
 }

 validateMessageField(value){

	if (value.length <=0) {
		this.setState({messageErr: 'Type in a message',messageClean: false});
	}else{
		this.setState({messageErr:'',messageClean: true});	
	}
 }

 handleNameInputChange(event) {
	const {target} = event;
	const value = target.value;
	this.setState({name: value});
	this.validateNameField(value);
}
handleEmailInputChange(event) {
	const {target} = event;
	const value = target.value;
	this.setState({email: value});
	this.validateEmailField(value);
}
handleSubjectInputChange(event) {
	const {target} = event;
	const value = target.value;
	this.setState({subject: value});
	this.validateSubjectField(value);
}
handleMessageInputChange(event) {
	const {target} = event;
	const value = target.value;
	this.setState({message: value});
	this.validateMessageField(value);
}
handleSubmit(event) {
  event.preventDefault();
  const {name,email,subject,message} = this.state;
  const{nameClean,emailClean,subjectClean,messageClean} = this.state
  this.validateNameField(name);
  this.validateEmailField(email);
  this.validateSubjectField(subject);
	this.validateMessageField(message);
	
	if (nameClean && emailClean && subjectClean && messageClean ) {
		const apidata = {
			Name: name,
			Email: email,
			Subject: subject,
			Message:message,
			
			}

			$.ajax({

        type : "POST",
        url:  process.env.API_URL+"contact/u", 
        data : JSON.stringify(apidata),
      	beforeSend: (data) => {
	      this.setState({sending:true});  
        },
	      success : (response)=> {
	      this.setState({
					sending:false,
					sendStatus: 'sent',
	     	  name:'',
	        email:'',
	        subject:'',
	        message:'',
	        
	      });
	
		   },
	error : (err)=> {
	this.setState({sendStatus: 'notsent',sending:false,}); 
        }
});
	}
  
}

componentDidMount(){
	
}
        render(){
const {nameErr,emailErr,subjectErr,messageErr,sending,sendStatus} = this.state;
        return(

<React.Fragment>
<Helmet>
<title>CONTACT: Centre for Africa Socio Economic and Ecological Development (CAFSED)</title>
<meta name="description" content="The Sustainable Development Goals are the blueprint to achieve a better and more sustainable future for all. They address the global challenges we face, including those related to poverty, inequality, climate, environmental degradation, prosperity, and peace and justice. The Goals interconnect and in order to leave no one behind, it is important that we achieve each Goal and target by 2030. Click on any specific Goal below to learn more about each issue." />
<meta name="keywords" content="SDG, blueprint, achieve, sustainable future, challenges, poverty, hunger, inequality, environmental degradation, prosperity, peace and justice, no poverty, zero hunger, Good Health and Well-being, Quality Education, Gender Equality, Clean Water & Sanitation, Affordable and Clean Energy, Decent Work and Economic growth, Industry Innovation & Infrastructure, Reduced Inequalities, Sustainable Cities and Communities, Responsible Consumption & Production, Climate Action, Life Below Water, Life on Land, Peace and Justice Strong Institutions, Partnerships for the Goals." />
</Helmet>

<Header />  

<div className="mobPadding"  style={{marginTop:'80px'}}> </div>

  
<section className="contBackcon">
<section className="contbracer">

<div className="contTitle">
 CONTACT
</div>

<div className="contTitlesub">
CHECK IN WITH US!
</div>

<div className="contTitlesub2">
We'd love to share our work with you! 
</div>


<div className="contConWrap">

<div className="contConLeft">

{ sendStatus == 'sent' ?
<section className="contGoodWrap">
Successfull! Thanks for writing to us! You will get a response from us in maximum
of 48 hours. Please do not resend this message within this time period.
</section> : null
}

{ sendStatus == 'notsent' ?
<section className="contBadWrap">
Mail not sent. Try again.
</section> : null
}


<form id="regForm" onSubmit={this.handleSubmit}>
<p>{nameErr}</p>
<input onChange={this.handleNameInputChange} type="text" name="name" placeholder="Name"/>
<p>{emailErr}</p>
<input onChange={this.handleEmailInputChange} type="email" name="email" placeholder="Email"/>
<p>{subjectErr}</p>
<input onChange={this.handleSubjectInputChange} type="text" name="subject" placeholder="Subject"/>
<p>{messageErr}</p>
<textarea onChange={this.handleMessageInputChange} name="message" placeholder="Message"></textarea>
{
	sending ? <div> Sending.. </div> :
  <button type="submit"> SEND </button> 
}
</form>
</div>


<div className="contConRight">
 
 <table>
	 <tbody>
		 <tr>
			 <td><span className="pe-7s-map-marker"></span></td>
			 <td>42, Onisha Cresent, Gimbiya Street <br/> Garki 11, Abuja.</td>
		 </tr>
		 <tr>
			 <td><span className="pe-7s-call"></span></td>
			 <td>(+234) 813 021 0333</td>
		 </tr>
		 <tr>
			 <td><span className="pe-7s-mail"></span></td>
			 <td>info@cafsed.org</td>
		 </tr>
	 </tbody>
 </table>

 <div className="contSocialcon">

 <ul>
	 <li>
	 <a href="https://web.facebook.com/Cafsed-111681590236290/" target="_blank" title="Click to visit our Facebook Page">
	 <img src={`${BASE_URL}/shades/images/faceb.png`} alt="facebook_image" />
	 </a>
	 </li>
	 <li>
	 <a href="https://twitter.com/cafsedorg" target="_blank" title="Click to Visit our Twitter page">
	 <img src={`${BASE_URL}/shades/images/twitt.png`} alt="twitter_image" />
	 </a>
	 </li>
	 <li>
	 <a href="https://www.instagram.com/cafsedorg/" target="_blank"  title="Click to Join us on Instram">
	 <img src={`${BASE_URL}/shades/images/inst.png`} alt="instagram_image"/>
	 </a>
	 </li>
	 <li>
	 <a href="https://www.linkedin.com/company/cafsed-organistion" target="_blank" title="Click to Link to us on LinkedIn">
	 <img src={`${BASE_URL}/shades/images/linkn.png`} alt="linkedin_image"/>
	 </a>
	 </li>
 </ul>
 </div>
</div>

</div>
</section>
</section>
	 
  <Footer />    
	
</React.Fragment>
    );
    }
}

 
module.exports = Contact;