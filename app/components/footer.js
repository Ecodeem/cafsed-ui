import React, {Component} from "react";
const path = require('path');
import { NavLink, Link } from 'react-router-dom';
import '../shades/scss/footer.scss';
const BASE_URL = process.env.USE_BASE_URL;

export class Footer extends React.Component {
        constructor(props){
            super(props);
	    
	   
        }

componentDidMount() {

   $('.q-click1').click(function(){
    $('.quick-ul1').toggleClass('quick-show');
    $('.plus1').toggleClass('cu-hide');
    $('.minus1').toggleClass('cu-show');
  });

  $('.q-click2').click(function(){
    $('.quick-ul2').toggleClass('quick-show');
    $('.plus2').toggleClass('cu-hide');
    $('.minus2').toggleClass('cu-show');
  });

  $('.q-click3').click(function(){
    $('.quick-ul3').toggleClass('quick-show');
    $('.plus3').toggleClass('cu-hide');
    $('.minus3').toggleClass('cu-show');
  });

  $(window).on('scroll',function(){
    
    if ($(window).scrollTop() > 200) {
        
        $('.back-to-top').show(400);
    }else{
        $('.back-to-top').hide(400);
    }
});


}



        render(){

        return(
	
<React.Fragment>  
<section className="container-fluid footer">
          <div className="container">
            <div style={{padding: '30px'}}></div>
            <div className="row">
              <div className="col-md-3 col-sm-6 dsl-coll" style={{marginBottom:'20px'}} >
                <ul className="quick-ul1">
                  <li className="footer-ul-head q-click1"> 
                    <b>ABOUT US</b> 
                    <img src={`${BASE_URL}utilities/images/icon/plus.png`} className="plus1" /> 
                    <img src={`${BASE_URL}utilitiesimages/icon/minus.png`} className="minus1" />
                  </li>
                  <li><a href="/events/">Events</a></li>
                  <li><a href="/about-casdn/">CAFSED</a></li>
                  <li><a href="/data-for-africa/">Data for Development</a></li>
                  <li> <a href="/partner/"> Partners</a></li>
                  <li><a href="/the-team/">The Team</a></li>
                </ul>
              </div>

             
              <div className="col-md-3 col-sm-6 dsl-coll" style={{marginBottom:'20px'}}>
                <ul className="quick-ul2">
                  <li className="footer-ul-head q-click2"> 
                    <b> QUICK LINKS</b>
                    <img src={`${BASE_URL}utilities/images/icon/plus.png`} className="plus1" /> 
                    <img src={`${BASE_URL}utilities/images/icon/minus.png`} className="minus1" />
                  </li>
                  <li> <a href="/sdg-IDI/">SDGs - IDI Hub</a></li>
                  <li><a href="/getinvolved/">Spread the Word</a></li>
                  <li><a href="/support/">Support</a></li>
                  <li><a href="/contact/">Contact</a></li>
                  
                </ul>
              </div>

            
              <div className="col-sm-3 dsl-coll" style={{marginBottom:'20px'}}>
                <ul className="quick-ul3">
                  <li className="footer-ul-head q-click3"> 
                    <b>RESOURCES</b>
                    <img src={`${BASE_URL}utilities/images/icon/plus.png`} className="plus1" /> 
                    <img src={`${BASE_URL}utilities/images/icon/minus.png`} className="minus1" />
                  </li>
                  <li> <a href="https://bit.ly/38h7N55" target="_blank"> Ecodeem App </a></li>
                  <li> <a href="#"> Summit Brouchure </a></li>
                  <li> <a href="#"> Feasibility Plan </a></li>
                </ul>
              </div>

              <div className="col-md-3 col-sm-6">
							<img src={`${BASE_URL}utilities/images/logo.png`}  style={{margin: '-2em 0 0 0'}}/>
              
                <div className="donate-form2">
                   <input type="text" name="" placeholder="$"  />
                   <a href="/support/">
                   <button> Donate</button>
                   </a>
                 </div>

              </div>
              
            </div>

            <div style={{padding: '30px'}}></div>

             <center>
               <div className="social_wrap">
                   <ul className="no-padding">
                     <li>
                       <a href="#"> <img src={`${BASE_URL}utilities/images/social_media/ecodeem.png`}/> </a>
                     </li>
                     <li>
                       <a href="https://web.facebook.com/Cafsed-111681590236290/"> <img src={`${BASE_URL}utilities/images/social_media/faceb.png`}/> </a>
                     </li>

                     <li>
                       <a href="https://www.instagram.com/cafsedorg/"> <img src={`${BASE_URL}utilities/images/social_media/inst.png`}/> </a>
                     </li>

                     <li>
                       <a href="https://www.linkedin.com/company/cafsed-organistion"> <img src={`${BASE_URL}utilities/images/social_media/linkn.png`}/> </a>
                     </li>

                     <li>
                       <a href="https://twitter.com/cafsedorg"> <img src={`${BASE_URL}utilities/images/social_media/twitt.png`}/> </a>
                     </li>

                     <li>
                        <a href="#"> <img src={`${BASE_URL}utilities/images/social_media/youtube.png`} /> </a>
                     </li>

                   </ul>
                 </div>
             </center>
                 

            <p style={{color:'#fff',margin:'20px'}}>Privacy Cookies © 2019 CAFSED. All rights Reserved • cafsed's Dev.

            </p>
            <center style={{fontSize:'12px'}}>  2019 cafsed.org </center>
          </div>

          
        </section>
        <div class="secure">
          <img src={`${BASE_URL}utilities/images/icon/comodo-secure.png`} />
        </div>

        <div className='whatsapp'>         
         <a href='https://wa.me/2348130210333?text=Hello,%20I%20have%20a%20feed%20back%20for%20CAFSED.'> <img src={`${BASE_URL}utilities/images/social_media/whatsapp.png`}/> </a>
       </div>

       <div className='back-to-top'>         
         <a href='#top-area'> <img src={`${BASE_URL}utilities/images/icon-top.png`}/> </a>
       </div>

        <div style={{padding: '30px'}}></div>


</React.Fragment>

    );
    }
}

 
module.exports = Footer;