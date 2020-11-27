import React, {Component} from "react";
import AOS from 'aos';
import Loginform from './login';
import 'aos/dist/aos.css';
import { Scrollbars } from 'react-custom-scrollbars';
const Link = require('react-router-dom').Link;
require('../shades/scss/headerHome.scss');    
const BASE_URL = process.env.USE_BASE_URL;

export class Headerhome extends React.Component {

		constructor(props){
				super(props);
	
 this.state = {

showdrawer:false,
overlayLoginForm: false, 
 }
 
 AOS.init();
 this.displayLoginForm= this._displayLoginForm.bind(this);
 this.hideLoginForm = this._hideLoginForm.bind(this);
 this.showDrawer = this.showDrawer.bind(this);
 this.hideDrawer = this.hideDrawer.bind(this);
 this.changeLanguageByButtonClick = this.changeLanguageByButtonClick.bind(this);
 

}

changeLanguageByButtonClick() {
	var language = document.getElementById("language").value;
	
	  var selectField = document.querySelector("#google_translate_element select");
	  
      for(var i=0; i < selectField.children.length; i++){
        var option = selectField.children[i];
        if(option.value==language){
           selectField.selectedIndex = i;
           selectField.dispatchEvent(new Event('change'));
           break;
        }
      }
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

showDrawer(){
this.setState({showdrawer:true})
}
hideDrawer(){
this.setState({showdrawer:false})
}
googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: "en"}, 'google_translate_element');
  }

componentDidMount() {

	$('.hamburger').click(function(){
		$('.line1,.line2,.line3').toggleClass('change');
		$('.line-x-1,.line-x-2').toggleClass('change-x');
		$('.lg-nav').toggleClass('change-lg-nav');
	});

	$('#click_abt').click(function(){
		$('.sdg_drop').toggleClass('abt_show');
	});

	$('#click_sdg').click(function(){
		$('.sdg_data').toggleClass('abt_show');
	});

	 $('#click_get').click(function(){
		$('.get_drop').toggleClass('abt_show');
	});

	 $('#click_cafsed').click(function(){
		$('.sdg_drop').toggleClass('abt_show');
	});

	$('.hamburger').hover(function(){
        $('.burger-line1,.burger-line2,.burger-line3').toggleClass("move");
	  });

	  $('.view-1').click(function(){
		$('.sec-nav').toggleClass('sec-nav-view');
		$('.sec-nav2').toggleClass('sec-no-height');
	  });
	  
	  $('.view-2').click(function(){
		$('.sec-nav2').toggleClass('sec-nav-view');
		$('.sec-nav').toggleClass('hide');
	  });

	  
	  
}

componentDidUpdate() {
$( ".mainMenu" ).each(function(){
		$(this).click(function() {
$('.mainMenu').next('.subMenu').slideUp();
$(this).next('.subMenu').slideDown();
	
});
		});		
	
}

		render(){
const {showdrawer,overlayLoginForm} = this.state;


		return(

	<React.Fragment>

{
	overlayLoginForm &&(
	<Loginform hideForm={this.hideLoginForm}/>
	)
}  
	
	<section className="col-nav container-fluid no-padding"> 

	
<div className="brand">
<Link to="/">
<img src={`${BASE_URL}utilities/images/logo.png`} className="brand-a wow slideInLeft" />
</Link>
</div>

<div className="lang">

<select onChange={this.changeLanguageByButtonClick} className="custom-select" style={{width:'100px',height:'30px', fontSize: '12px'}} id="language" >
<option value="af">Afrikanns</option>
<option value="sq">Albanian</option>
<option value="ar">Arabic</option>
<option value="hy">Armenian</option>
<option value="eu">Basque</option>
<option value="bn">Bengali</option>
<option value="bg">Bulgarian</option>
<option value="ca">Catalan</option>
<option value="km">Cambodian</option>
<option value="zh-CN">Chinese (Mandarin)</option>
<option value="hr">Croation</option>
<option value="cs">Czech</option>
<option value="da">Danish</option>
<option value="nl">Dutch</option>
<option value="en" selected>English</option>
<option value="et">Estonian</option>
<option value="fj">Fiji</option>
<option value="fi">Finnish</option>
<option value="fr">French</option>
<option value="ka">Georgian</option>
<option value="de">German</option>
<option value="el">Greek</option>
<option value="gu">Gujarati</option>
<option value="he">Hebrew</option>
<option value="hi">Hindi</option>
<option value="hu">Hungarian</option>
<option value="is">Icelandic</option>
<option value="id">Indonesian</option>
<option value="ga">Irish</option>
<option value="it">Italian</option>
<option value="ja">Japanese</option>
<option value="jw">Javanese</option>
<option value="ko">Korean</option>
<option value="la">Latin</option>
<option value="lv">Latvian</option>
<option value="lt">Lithuanian</option>
<option value="mk">Macedonian</option>
<option value="ms">Malay</option>
<option value="ml">Malayalam</option>
<option value="mt">Maltese</option>
<option value="mi">Maori</option>
<option value="mr">Marathi</option>
<option value="mn">Mongolian</option>
<option value="ne">Nepali</option>
<option value="no">Norwegian</option>
<option value="fa">Persian</option>
<option value="pl">Polish</option>
<option value="pt">Portuguese</option>
<option value="pa">Punjabi</option>
<option value="qu">Quechua</option>
<option value="ro">Romanian</option>
<option value="ru">Russian</option>
<option value="sm">Samoan</option>
<option value="sr">Serbian</option>
<option value="sk">Slovak</option>
<option value="sl">Slovenian</option>
<option value="es">Spanish</option>
<option value="sw">Swahili</option>
<option value="sv">Swedish </option>
<option value="ta">Tamil</option>
<option value="tt">Tatar</option>
<option value="te">Telugu</option>
<option value="th">Thai</option>
<option value="bo">Tibetan</option>
<option value="to">Tonga</option>
<option value="tr">Turkish</option>
<option value="uk">Ukranian</option>
<option value="ur">Urdu</option>
<option value="uz">Uzbek</option>
<option value="vi">Vietnamese</option>
<option value="cy">Welsh</option>
<option value="xh">Xhosa</option>
</select>

<div id="google_translate_element" style={{display:'none'}}></div>
</div>

<div className="hamburger">
<div className="line1"> <div className="burger-line1"></div> </div>

<div className="line2"> <div className="burger-line2"></div> </div>

<div className="line3"> <div className="burger-line3"></div> </div>


<div className="hamburger-x">
<div className="line-x-1"> <div className="burger-line1"></div> </div>
<div className="line-x-2"> <div className="burger-line3"></div> </div>
</div>


</div> 


<div className="flipped-image-wrap">
<ul class="no-padding">

 <li>
 <Link to="/getinvolved/" className="spread m-l-10">  </Link>
	<center>
		<small className="dsFontw"> Spread the Word </small> 
	</center>  
</li>

 <li>  
 <Link to="/report/" className="report m-l-10"> </Link>
	<center>
		<small className="dsFontw"> View Report </small> 
	</center>
</li>


<li>
<Link to="/sdg-IDI/" className="inno m-l-5">  </Link>
	<center>
		<small className="dsFontw"> Innovation </small> 
	</center>
</li>

<li >
<Link to="/visualize/" className="ibfim m-l-15"> </Link>
	<center>
		<small className="dsFontw"> Visualise Data </small> 
	</center>
	
</li>

</ul>

</div>

</section>


<section className="container-fluid lg-nav" id="lg-nav">
<Scrollbars  autoHide>
<div className="row drop-wrap">
<nav className="col-sm lg-nav">
<ul>
<li><Link to="/" className="white">Home</Link></li>

<li id="click_abt"><a className="white"> About Us <img src={`${BASE_URL}utilities/images/icon/caret_down.png`} className="caret_down"/></a>   </li>


<div className="sdg_drop">
<li><Link to="/about-casdn/" className="white"> CAFSED</Link> </li> 
<li><Link to="/sdg-africa/" className="white">SDGs Africa</Link> </li>
<li><Link to="/about-sdgs/" className="white"> The SDGs </Link> </li> 


</div>


<li id="click_get"><a className="white"> Get Involved <img src={`${BASE_URL}utilities/images/icon/caret_down.png`} className="caret_down"/></a>   </li>

<div className="get_drop">
<li><Link to="/getinvolved/" className="white">Spread the Word</Link> </li> 
<li><Link to="/partner/" className="white">Partner with us</Link>  </li>
<li><Link to="/volunteer/" className="white"> Volunteer</Link> </li>
</div>

<li><Link to="/support/" className="white"> Donate </Link> </li>
<li><Link to="/register/" className="white">SIGN UP</Link> </li> 
<li><a onClick={this.displayLoginForm} className="white">SIGN IN</a> </li>

</ul>
</nav>

<nav className="col-sm">
<ul>

<div class="sec-nav">
<li><a href='https://www.eventbrite.com/e/african-sdgs-stakeholders-summit-innovation-show-tickets-76674009025' className="white">Register for summit</a> </li>
<li><Link to="/projects/" className="white">View Project</Link> </li>
<li><Link to="/sdg-IDI/" className="white">SDGs - IDI Hub</Link> </li>

<li><Link to="/the-team/" className="white"> Our Team </Link> </li>
<li><Link to="/contact/" className="white"> Events/Media</Link> </li>
</div>

</ul>
</nav>



<nav className="col-sm" style={{borderRight: '0px'}}>
<ul>


<div className="sec-nav2">

<li id="click_sdg"><a class="white"> SDG Tracker System <img src={`${BASE_URL}utilities/images/icon/caret_down.png`} class="caret_down"/></a>   </li>

<div className="sdg_data">
<li><Link to="/data-for-africa/" className="white">Data for Development </Link> </li>
<li><Link to="/visualize/" className="white"> Visualize Data </Link> </li>
<li><Link to="/report/" className="white"> View Report </Link> </li>
</div>

<li><a href="https://bit.ly/38h7N55" target="_blank" className="white"> Ecodeem App </a>  </li>
<li><a href='#' className="white"> Blog </a> </li>
<li><Link to="/contact/" className="white">Contact</Link> </li> 
</div>

</ul>
</nav>        
</div>
</Scrollbars>
</section>

<div id="top-area"></div>
	

	</React.Fragment>
);
}
}

module.exports = Headerhome;