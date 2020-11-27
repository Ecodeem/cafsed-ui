import React, {Component} from "react";
import {Helmet} from "react-helmet";
import Header from './header';

import Footer from './footer';
import '../shades/scss/spreadstyle.scss';
import { isString } from "util";
import { isAbsolute } from "path";
import { isEqual } from "react-pinch-and-zoom/lib/Rect";
import { isContext } from "vm";
const BASE_URL = process.env.USE_BASE_URL;

class Spread extends React.Component {
        constructor(props){
            super(props);
	    this.state = {
		 images: [
			  {id: "11", caption:"Shalene supports Goal 1", src: `${BASE_URL}spreadword/images/sdg1.jpg`},
			  {id: "22", caption:"Chalene supports Goal 1", src: `${BASE_URL}spreadword/images/sdg3.jpg`},
			  {id: "33", caption:"Shalene supports Goal 1", src: `${BASE_URL}spreadword/images/sdg2.jpg`},
			  {id: "44", caption:"Shalene supports Goal 1", src: `${BASE_URL}spreadword/images/sdg5.jpg`},
			  {id: "55", caption:"Shalene supports Goal 1", src: `${BASE_URL}spreadword/images/sdg4.jpg`},
			],
		 shareImage:[],
		 overlayShare: false,
	
		};
		
		this.displayShare = this._displayShare.bind(this);
		this.hideShare = this._hideShare.bind(this);
        }
	
_displayShare(images,value){
   const record = images.find(image => image.id == value);
   this.setState({
	shareImage: record,
	overlayShare: true,
   });
}
_hideShare(){
   this.setState({
	overlayShare: false,
   });
}


        render(){
  const {images,links,shareImage,overlayShare} = this.state;

       return(

<React.Fragment>

<Helmet>
  <title>SPREAD THE WORD ON AFRICA SDGs : Spread the word on the SDGs in Africa (CAFSED)</title>
  <meta name="description" content="Everyday, Organisations, businesses, government, individuals, continue to take the right step in pledging their support to the SDGs in Africa. Find information to share. Anyone can change Africa and the world. Welcome to join the movement." />
  <meta name="keywords" content="fund, Africa, SDG, movement, pledge, find, information, share, change, SDGs,contribute, action, collective, achieve, support, Africa, Cafsed " />
  <meta property="og:site_name" content="CASDN SDG TRACKER" />
  <meta property="og:title" content="Spread the word on the SDGs" />
  <meta property="og:description" content={shareImage.caption} />
  <meta property="og:image" itemprop="image" content={shareImage.src} />
  <meta property="og:type" content="website" />
  <meta property="og:updated_time" content="1506670715" />
  <meta property="og:url" content={`process.env.BASE_URL/getinvolved/`} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content={`process.env.BASE_URL/getinvolved/`} />
  <meta name="twitter:title" content="Spread the word on the SDGs in Africa" />
  <meta name="twitter:description" content={shareImage.caption} />
  <meta name="twitter:image" content={shareImage.src} />
   
</Helmet>
{
overlayShare &&(
<div className="overlay">

 <div  className="shareImage" data-aos="fade-right" data-aos-duration="1000">
    <div onClick={this.hideShare} className="closeButtn"><span className="pe-7s-close-circle"></span></div>
    <h4>Share this image with your friend who you think is
    strong and passionate of the SDGs
    </h4>
    <div className="imageCon">
      <img src={shareImage.src} />
    </div>
    <ul>
      <a href={`https://www.facebook.com/sharer/sharer.php?t=${shareImage.caption}&u=${process.env.BASE_URL}/getinvolved/`} target='_blank' >
        <li><img src={`${BASE_URL}spreadword/images/face.jpg`} /></li>
      </a>
      <li><img src={`${BASE_URL}spreadword/images/pin.jpg`} /></li>
      <a href={`https://twitter.com/share?url=${process.env.BASE_URL}/getinvolved/&text=${shareImage.caption}`} target='_blank' >
        <li><img src={`${BASE_URL}spreadword/images/twi.jpg`} /></li>
      </a>
      <a href={`whatsapp://send?text=${process.env.BASE_URL}/getinvolved/`} data-action="share/whatsapp/share" target='_blank' >
        <li><img src={`${BASE_URL}spreadword/images/wats.jpg`} /></li>
      </a>
    </ul>
 </div>

</div>
)
}
<Header />

<div className="mobPadding" style={{marginTop:'40px'}}> </div>

        <div className="heAderText">
	
	   <h2>Get Involved</h2>
	   
	   <p>
	       Find information to share. Anyone can change the world. Welcome to join the movement.
	   </p>
	   <div></div>
	   
	</div>

  	  

   <div className="ContainingDiv">
	    
	{    images.map((image,index) => (
        <div key={index} className="ShareBox">
		    <div className="gallery-image-bottom gallery-res-bottom-1">
            <img src={image.src} className="img-responsive image-center res-image image-grow" />
		    </div>
		    
		    <div className="imagebutt">
		       <img onClick={e => this._displayShare(images,image.id)} src={`${BASE_URL}spreadword/images/shareicon.png`} className="imageShare"/>
		         <span>Share image</span>
		    </div>
		    <div className="imagebuttright">
		         <ul>
			   <li>
		             <img src={`${BASE_URL}spreadword/images/twit.png`} className="imageShare" />
			   </li>
			   <li>
		             <img src={`${BASE_URL}spreadword/images/ig.png`} className="imageShare" />
			   </li>
			   <li>
		             <img src={`${BASE_URL}spreadword/images/fb.png`} className="imageShare" />
			   </li>
			  
			 </ul>
		    </div>
		</div>
		))
	}	
		</div>
    
	  
	            
		    <Footer />
</React.Fragment>
    
    );
    }
}

 
module.exports = Spread;