import React, {Component} from "react";
import {Helmet} from "react-helmet";
import Headerhome from './headerhome';
import Footer from './footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../shades/scss/home.scss';
import Loginform from './login';
import { NavLink, Link } from 'react-router-dom';
const BASE_URL = process.env.USE_BASE_URL; 


class Home extends React.Component {
        constructor(props){
            super(props);
	    this.state = {
		
	    overlayLoginForm: false,  
	    
	    }
	    AOS.init();
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


componentDidMount() {

  $('.single-item').slick({
    infinite: true,
    speed: 600,
    autoplay: true,
    adaptiveHeight: true
    }); 

    $('.partner').slick({
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrow: true,
     responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }]

    });

    $('.team').slick({
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrow: true,
       
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]

    });

    $('.footer-goals').slick({
      slidesToShow: 14,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
       
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 5
        }
      }]

    });

}

        render(){
const {overlayLoginForm} = this.state;

        return(
<React.Fragment>

<Helmet>
<title>Cafsed: Centre for Africa Socio Economic and Ecological Development (CAFSED)</title>
<meta name="description" content="Centre for Africa Socioeconomic and Ecological Development (CAFSED) is a non-profit organization that is envisioned to drive implementation and performance of the Global Agenda among other developmental initiatives, especially as it concerns and affects Africa as a whole. We are a network of experts and organizations dedicated to providing policy, business framework, data research, data and finance gap-bridge and other solution platforms in order to achieve developmental strides in Africa." />
<meta name="keywords" content="SDG, SDGs, Support, Donate, Innovate, Report, Monitor, Visualize, SDGs Data, Charts, Dashboard, Africa SDGs, Ecological Development, Centre for Africa, global goals, cafsed,vision 2030, UN Goals, driving sustainable goals, Data Research" />
</Helmet>
{
overlayLoginForm &&(
<Loginform hideForm={this.hideLoginForm}/>
)
}  
	

<Headerhome />


<div className="single-item">


<div className="slider1">
	 
	 <div className="white-layer">
		 
	 </div>

	<div className="middle-content">
		<h1> For a Sustainable Africa</h1>
		
		<div className="row sign-wrap">
    <ul>
        <li>
        <Link to="/register/"> <div class="sign-in spark"> Sign up</div></Link>
       </li>

        <li>
          <a onClick={this.displayLoginForm}> <div class="sign-in spark"> Sign in</div></a>
        </li>
   </ul>
      </div>

		<a href="https://www.eventbrite.com/e/african-sdgs-stakeholders-summit-innovation-show-tickets-76674009025" target="_blank" className="reg-summit"> Register for The Summit  </a>
		
	
	</div>
</div>


</div>
        

        <section className="sticky-footer container-fluid ">
          <div className="container">
            <div className=" footer-goals">

              <div className="sticky-item" >
              <a href={`${BASE_URL}sdg/goal_1`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_1.png`} />
              </a>
              </div> 

              <div className="sticky-item" >
              <a href={`${BASE_URL}sdg/goal_2`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_2.png`}/>
                </a>
              </div>

              <div className="sticky-item" >
              <a href={`${BASE_URL}sdg/goal_3`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_3.png`}/>
                </a>
              </div>

              <div className="sticky-item" >
              <a href={`${BASE_URL}sdg/goal_4`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_4.png`}/>
                </a>
              </div>

               <div className="sticky-item" >
               <a href={`${BASE_URL}sdg/goal_5`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_5.png`}/>
                </a>
              </div>

               <div className="sticky-item" >
               <a href={`${BASE_URL}sdg/goal_6`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_6.png`}/>
                </a>
              </div>

               <div className="sticky-item" >
               <a href={`${BASE_URL}sdg/goal_7`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_7.png`}/>
                </a>
              </div>

               <div className="sticky-item" >
               <a href={`${BASE_URL}sdg/goal_8`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_8.png`}/>
                </a>
              </div>

               <div className="sticky-item" >
               <a href={`${BASE_URL}sdg/goal_9`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_9.png`} />
                </a>
              </div>

              <div className="sticky-item" >
              <a href={`${BASE_URL}sdg/goal_10`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_10.png`}/>
                </a>
              </div>

              <div className="sticky-item" >
              <a href={`${BASE_URL}sdg/goal_11`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_11.png`} />
                </a>
              </div>

              <div className="sticky-item" >
              <a href={`${BASE_URL}sdg/goal_12`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_12.png`}/>
                </a>

              </div>

              <div className="sticky-item" >
              <a href={`${BASE_URL}sdg/goal_13`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_13.png`}/>
                </a>
              </div>

              <div className="sticky-item" >
              <a href={`${BASE_URL}sdg/goal_14`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_14.png`} />
                </a>
              </div>

              <div className="sticky-item" >
              <a href={`${BASE_URL}sdg/goal_15`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_15.png`} />
                </a>
              </div>

              <div className="sticky-item" >
              <a href={`${BASE_URL}sdg/goal_16`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_16.png`} />
                </a>
              </div>

              <div className="sticky-item" >
              <a href={`${BASE_URL}sdg/goal_16`}>
                <img className="dslGoalsHover" src={`${BASE_URL}goal_icons/goal_17.png`} />
                </a>
              </div>

            </div>

            
          </div>
        </section>
        
        <section className="container first-col aos-item" data-aos="zoom-in-right">
          <h2> Who we are </h2>

           <p> Centre for Africa Socioecenomic and Ecological Development (CAFSED) is a non-profit organization that is envisioned to drive implementation and performance of the Global Agenda among other developmental initiatives, especially as it concerns and affects Africa as a whole </p>
           <a data-toggle="modal" data-target="#abt_us_modal"> <div className="join-us spark" style={{background:'#60b849'}}> <center style={{fontSize:'18px'}}> About us</center> </div></a>
         
        
          
        </section>
        
				<section className="container-fluid our-mission" >
          <div data-aos="fade-down" className="aos-item">
            <h3> Our Mission</h3>
              <p style={{color:'#fff',margin:'20px 0'}}> Through our platforms, we encourage all citizens, businesses, civil society organizations, and governments at all levels to focus and concentrate on Agenda 2030, in order to address pressing economic, social and environmental challenges in the continent.

              CAFSED promotes practical problem solving through our goal-base policies advocacy, grassroots organizing, policy research, social entrepreneurship, and diverse collaborations on implementation of SDGs in Africa.
							</p>
                <div className="join-us  spark default-green" data-toggle="modal" data-target="#mission_modal">
                  <center > Read More </center>
                  
                </div>
              
          </div>
          
          
        </section>

       <section className="container first-col" >

        
         <br />

         <div className="container row countis-wrap">

         <div className="col-md-4 col-sm-4  aos-item" data-aos="fade-up-left">
            <div className="col-circle-countis">
						<img src={`${BASE_URL}utilities/images/icon/goal.png`}/>
              
            </div>
            <center>
              <h6 style={{fontSize:'16px'}}>$ <span style={{fontSize:'16px'}} className="counter"> 1,000,000,000,000</span></h6>
              <span style={{fontSize:'16px'}}> <b>Target</b> </span>
            </center>
             
          </div>

          <div className="col-md-4 col-sm-4 aos-item" data-aos="fade-up">
            <div className="col-circle-countis ">
						<img src={`${BASE_URL}utilities/images/icon/user.png`}/>
            </div>
            <center>
              <h6> <span style={{fontSize:'16px'}} className="counter countis">132 </span></h6>
              <span style={{fontSize:'16px'}}> <b>Total Users</b> </span>
            </center>
             
          </div>

          <div className="col-md-4 col-sm-4 aos-item" data-aos="fade-up-right" >
            <div className="col-circle-countis">
						<img src={`${BASE_URL}utilities/images/icon/raised.png`}/>
            </div>
            <center>
              <h6 style={{fontSize:'16px'}}> $<span style={{fontSize:'16px'}} className="counter countis"> 0 </span></h6>
              <span style={{fontSize:'16px'}}> <b>Amount Raised</b> </span>
            </center>
             
          </div>

          
      
           
         </div>
           <br />  <br />

                    
        </section>
        <section className="container">

         

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p style={{color:'#000'}}> We are committed to bridging the financial gap of achieving the sustainable Development goals across Africa by 2030 through our $1 Trillion Dollar fund raising campaign from 2020-2030</p>
            </div>

            <div className="col-md-6 col-sm-12">
              
          <a href="/support/">
            <div className="donate-btn default-background spark" >
              <img src={`${BASE_URL}utilities/images/icon/donate.png`}/> <br />
              <span> DONATE</span>
           </div>
          </a>
            </div>
            
          </div>
          
          


          <div className="progress" style={{width: '50%', margin: 'auto'}}>
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '1%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">$0</div>
          </div>

          <br />
          <br />

          <div className="row">

            <div className="col-md-6 col-sm-12">
               
                <a href="/partner/">
                  <div className="donate-btn default-green spark">
									<img src={`${BASE_URL}utilities/images/icon/hand_shake.png`}/> <br />
                    
                    <span> PARTNER WITH US </span>
                 </div>
                </a>
            </div>

            <div className="col-md-6 col-sm-12">
              <p style={{color:'#000'}}> We are committed to bridging the financial gap of achieving the sustainable Development goals across Africa by 2030 through our $1 Trillion Dollar fund raising campaign from 2020-2030</p>
            </div>
   
          </div>
          


          
        </section>
         
          
        <section className="container-fluid ecodeem-wrap">
          <div className="container">
            <center> <h4 style={{fontSize:'25px'}}>ECODEEM APP</h4> </center>
            <div className="row">
              <div className="col-md-6 col-sm-12 ecodeem-phone">
                <p style={{color:'#000'}}> Ecodeem is our social media platform that helps users get a step closers to making the world a better place. Users can raise funds for project and programs while capturing and sharing moments with friends, family members and coworkers around the world. Ecodeem is a safe environment to drive socioeconomic and ecological development in Africa and across the World.  </p>
               
              </div>

              <div className="col-md-6 col-sm-12 eco-mobile">
              <a href="https://bit.ly/38h7N55" target="_blank">
							   <img src={`${BASE_URL}shades/images/ecodeemphone.png`}/>
              </a>
              </div>
              
            </div>
          </div>
          
          
        </section>

      
        <section className="container-fluid visualize">
          <center>
            <h3 style={{fontSize:'25px',paddingBottom:'20px'}} className="multi-dim"> Data System </h3> 
          </center>
          <br />

          <div className="row">
            
            <div className="col-md-6 col-sm-12 aos-item" data-aos="fade-right">
              <h6 style={{fontSize:'16px',paddingBottom:'10px'}} className="multi-dim"> Multi-dimentional Data Visualization </h6> 
							<img src={`${BASE_URL}shades/images/visualize.gif`}/>
              
            </div>

            <div className="col-md-6 col-sm-12 aos-item" data-aos="fade-left">
              <h6 style={{fontSize:'16px',paddingBottom:'10px'}} className="multi-dim"> Rank Charts and Traffic Lights Reporting</h6> 
              <img src={`${BASE_URL}shades/images/reportt.gif`}/>
            </div>
            
          </div>
          
        </section>
        <div className="container">
          <center> <h3 className="founder-note-h3"> Get Involved  </h3></center>
          <div className="row">

					<div class="col-md-6 data-aos" data-aos="fade-up-right">
              <h6 style={{fontSize:'16px'}}> Spread the word</h6>
              <div className="spread-card">
              <a href="/getinvolved/">
							<img src={`${BASE_URL}utilities/images/spread_wide.png`}/>
              </a>
              </div>
              <p style={{color:'#000'}} className="get_invo"> Find information to share with friends, family members and coworkers. Anybody can change the world. Join the movement</p>
            </div>

            <div class="col-md-6 data-aos" data-aos="fade-up-left">
               <h6 style={{fontSize:'16px'}}> Volunteer</h6>
               <div className="spread-card-vol">
               <a href="/volunteer/">
							 <img src={`${BASE_URL}utilities/images/volunteer.png`}/>
               </a>
              </div>
               
               <p style={{color:'#000'}} className="get_invo"> CAFSED is reaching out to concerned citizens from across the world to help build communities and improve living conditions of the African people</p>
              
            </div>
              
          </div>
         
          
        </div>
        <br />
        <br />
        <br />
        
				<section className="container-fluid" id="team">
          <center> <h3 className="founder-note-h3"> Our Team  </h3></center>
          <div className="row team">

           <div className="col-md-3">
              <div className="image-area">
                <div className="img-wrapper">
								<img src={`${BASE_URL}the_team/kolade_ilesanmi.jpg`} alt="kolade ilesanmi"/>
                 
                  <h2 style={{fontSize:'14px',lineHeight:'20px'}}>    Mr. Kolade Ilesanmi <br />
                   <i> Lead Advisor </i>  </h2>
                  
                </div>
            </div>
            <center>
               <a data-toggle="modal" data-target="#team_kolade"> Learn More </a>
            </center>
           
            </div>


            <div className="col-md-3">
              <div className="image-area">
                <div className="img-wrapper">
                  <img src={`${BASE_URL}the_team/juachi_nzelibe.jpg`} alt="juachi_nzelibe"/>
                  <h2 style={{fontSize:'14px',lineHeight:'20px'}}>    Juachi Nzelibe <br />
                    <i> Senior Advisor CAFSED/Project Coordinator Ecodeem</i> </h2>
                  
                </div>
            </div>
            <center className="hotLinkk" style={{fontSize:'14px',marginTop:'5px'}}>
               <a data-toggle="modal" data-target="#team_juachi"> Learn More </a>
            </center>
           
            </div>

            <div className="col-md-3">
              <div className="image-area">
                <div className="img-wrapper">
								<img src={`${BASE_URL}the_team/edwin.jpg`} alt="Edwin Dodoh"/>
                  
                  <h2 style={{fontSize:'14px',lineHeight:'20px'}}>  Edwin O. Dodoh <br />
                    <i> IT Cordinator </i>    </h2>
                  
                </div>
            </div>
            <center className="hotLinkk" style={{fontSize:'14px',marginTop:'5px'}}>
               <a data-toggle="modal" data-target="#team_edwin"> Learn More </a>
            </center>
           
            </div>

            <div className="col-md-3 col-sm-12">
              <div className="image-area">
                <div className="img-wrapper">
								<img src={`${BASE_URL}the_team/Venise_TUTU.jpg`} alt="venise_tutu"/>
                  
                  <h2 style={{fontSize:'14px',lineHeight:'20px'}}>  Venise TUTU. <br />
                    <i> Consultant (IT/Systems Development) </i>    </h2>
                  
                </div>
            </div>
            <center className="hotLinkk" style={{fontSize:'14px',marginTop:'5px'}}>
               <a data-toggle="modal" data-target="#team_venise"> Learn More </a>
            </center>
           
            </div>



          </div>
        </section>
        <br />
        <br />

        
        <section className="container">
          <center> <h3 className="founder-note-h3"> The African Continent  </h3></center>
          <div className="row">
              <div className="col-md-3 aos-item" data-aos="flip-left">
                <img src={`${BASE_URL}shades/images/afrii.png`} className="afrii"/>
              </div>

              <div className="col-md-6 p-100 aos-item" data-aos="flip-up">
                <p style={{color:'#000'}} className="txt-justify"> Never in the course of history has Africa witnessed this level of infrastructural and human capital decline. From Nigeria once rated as 3rd largest oil producer yet ranked as Nation with the largest number of poorest persons around the world to persistent civil unrest and humanitarian crisis in Sudan, Xenophobic attacks in South Africa, massive desertification and environmental issues in central Africa and insecurity in Somalia, massive human trafficking in Libya to unending deaths in the Mediterranean of fleeing migrates from the continent and the list goes on. </p>
                
                <center className="hotLinkk" style={{fontSize:'14px',marginTop:'5px'}}>
                  <a data-toggle="modal" data-target="#enoch_note"> Learn more </a>
                </center>
                
              </div>


              <div className="col-md-3 aos-item" data-aos="flip-right">
              <div className="image-area">
                <div className="img-wrapper">
								<img src={`${BASE_URL}the_team/esther_james.jpg`} alt="esther_james"/>
                  
								<h2 style={{fontSize:'14px',lineHeight:'20px'}}>  Esther James-Udobang <br />
                    <i> Country Director/Program Coordinator </i>    </h2>
                  
                </div>
            </div>
            <center className="hotLinkk" style={{fontSize:'14px',marginTop:'5px'}}>
               <a data-toggle="modal" data-target="#team_esther"> Learn More </a>
            </center>
           
            </div>

          </div>
          
          
        </section>


				<br/>
        <br/>

        <section class="col-md-8 col-sm-12 pat-wrap">
          <center> <h3 className="founder-note-h3"> Our Partners  </h3></center>

          <div class=" partner">

              <div className="pat-img">
                <img src={`${BASE_URL}utilities/images/patners/ecodem.png`}/>
              </div>
              
              <div className="pat-img">
                <img src={`${BASE_URL}utilities/images/patners/malic.png`}/>
              </div>
            
              <div className="pat-img">
                <img src={`${BASE_URL}utilities/images/patners/delta.png`}/>
              </div>

              <div class="pat-img">
                <img src={`${BASE_URL}utilities/images/patners/isreal.png`}/>
              </div>

              <div class="pat-img">
                <img src={`${BASE_URL}utilities/images/patners/cafsed.png`}/>
              </div>

              <div class="pat-img">
                <img src={`${BASE_URL}utilities/images/patners/enoch-f.png`}/>
              </div>
              
          </div>
            
        </section>


  <Footer />


         <div className="modal fade" id="abt_us_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
						
              <h5 style={{fontSize:'16px'}} className="modal-title" id="exampleModalLongTitle">About Us </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{fontSize:'14px'}}>
              Centre for Africa Socioecenomic and Ecological Development (CAFSED) is a non-profit organization that is envisioned to drive implementation and performance of the Global Agenda among other developmental initiatives, especially as it concerns and affects Africa as a whole.<br /> <br />

              We are a network of experts and organizations dedicated to providing policy, business framework, data research, data and finance gap-bridge and other solution platforms in order to achieve developmental strides in Africa.<br /> <br />

              The bottom line of the Sustainble Development Goals call for good jobs for all, healthcare for all, investing in our children, putting people’s interests over special interests, ensuring equal opportunity for all in education and social justice, providing sustainable infrastructure, and ensuring a clean and safe environment.<br /> <br />

              Our sole aim of driving socio economic and environmental prosperity amongst UN Africa member nations using the SDGs as a roadmap is in coalition with partners, groups and other stakeholders around the country and in Africa committed to achiveing the goals through our non-partisan framework is to leverage on same to achieve our set goals and objectives for Africa.
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="mission_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
						
              <h5 style={{fontSize:'16px'}} className="modal-title" id="exampleModalLongTitle"> Our Mission </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{fontSize:'14px'}}>
              Through our platforms, we encourage all citizens, businesses, civil society organizations, and governments at all levels to focus and concentrate on Agenda 2030, in order to address pressing economic, social and environmental challenges in the continent.<br /> <br />

              CAFSED promotes practical problem solving through our goal-base policies advocacy, grassroots organizing, policy research, social entrepreneurship, and diverse collaborations on implementation of SDGs in Africa.<br /> <br />

              CAFSED promotes practical problem solving through our goal-base policies advocacy, grassroots organizing, policy research, social entrepreneurship, and diverse collaborations on implementation of SDGs in Africa.
            </div>
          </div>
        </div>
      </div>
 
      <div className="modal fade" id="team_edwin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
						
              <div className="text-center team-pass">
                <img src={`${BASE_URL}the_team/edwin.jpg`} className="img-rounded " alt=" Edwin Dodoh "/>
              </div>
              <span className="team-img-span"> Edwin Dodoh <br /><i> IT Coordinator </i> </span>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" >
						An innovative programmer with experience in building websites and contriuting to the success of major development projects in the technology space. Utilizes web-based software across a Technological space. 
						</div>
          </div>
        </div>
      </div>

     

      <div className="modal fade" id="team_kolade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
						
              <div className="text-center team-pass">
                <img src={`${BASE_URL}the_team/kolade_ilesanmi.jpg`} className="img-rounded " alt=" Enoch Okeze"/>
              </div>
              <span className="team-img-span">  Mr. Kolade Ilesanmi <br /><i> Lead Advisor</i> </span>
              <button type="button" className="close dsl-close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{fontSize:'14px'}}>
              A Business Developer and an incisive Administrator, passionate about human capacity development, sustainable growth and nation building.
            </div>
          </div>
        </div>
      </div>

      
      <div className="modal fade" id="team_venise" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
						
              <div className="text-center team-pass">
              <img src={`${BASE_URL}the_team/Venise_TUTU.jpg`} alt="venise_tutu"/>
              </div>
              <span className="team-img-span">  Venise TUTU. <br /><i> Consultant (IT/Systems Development) </i> </span>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            Being resilient with goals, constantly checking in with the KPIs to determine how close or how far way I am and what it will take to bring it to life. I find this pressure inspiring and it’s become my guide in all results-oriented organisations or team I’d be working. 
            </div>
          </div>
        </div>
      </div>
	 
      <div className="modal fade" id="team_juachi" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
						
              <div className="text-center team-pass">
                <img src={`${BASE_URL}the_team/juachi_nzelibe.jpg`} className="img-rounded " alt=" juachi_nzelibe" />
              </div>
              <span className="team-img-span">  Juachi Nzelibe <br /><i> Senior Advisor CAFSED/Project Coordinator Ecodeem </i> </span>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
               An enthusiastic recent Global Health Development master's degree graduate from the University College (UCL). A unique combination of capabilities and skills acquired during studies and work experience, coupled with an excellent ability to learn new ones. Possession of strong analytical and research skills, displayed in the ability to critically appraise data from different sources.
            </div>
          </div>
        </div>
      </div>
  
      <div className="modal fade" id="team_esther" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
						
              <div className="text-center team-pass">
                <img src={`${BASE_URL}the_team/esther_james.jpg`} className="img-rounded " alt=" esther_james" />
              </div>
              <span className="team-img-span">    Esther James-Udobang <br /><i> Country Director/Program Coordinator  </i> </span>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              An innovative individual, dedicated problem solver with zeal to learn and perform in whatever field and position found in thereby positioning companies and institutes for success.
              <br />
              <br />

              Specialities include quality assurance and control, sales execution through product discovery, administration and relationship management.
            </div>
          </div>
        </div>
      </div>
  
      <div className="modal fade" id="enoch_note" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
						
              <div className="text-center">
               
              </div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              
            </div>
            <div className="modal-body" style={{fontSize:'14px'}}>
              Never in the course of history has Africa witnessed this level of infrastructural and human capital decline. From Nigeria once rated as 3rd largest oil producer yet ranked as Nation with the largest number of poorest persons around the world to persistent civil unrest and humanitarian crisis in Sudan, Xenophobic attacks in South Africa, massive desertification and environmental issues in central Africa and insecurity in Somalia, massive human trafficking in Libya to unending deaths in the Mediterranean of fleeing migrates from the continent and the list goes on.
              <br />
              <br />
              It stands to be a very obvious reality to mention that Africa is in dear need of urgent help, as we believe at the Center for Africa Socioeconomic and Ecological Development (CAFSED) that all hope is not lost for the continent which still receives massive support, relief and funding from concerned citizens across the world and from organizations in the tune of Billions of Dollars yet with little impact and insignificant documentation and data to show for. 
              At Center for Africa Socioeconomic and Ecological Development (CAFSED), we own and adopt the United Nation’s Sustainable Development Goals as the Continent’s global independent framework that not only mandates the role of government in ensuring improved living conditions for its people but as well empowers individuals and organizations (stakeholders) into action to achieve the world we want to have. Even as records indicates failed performance of the Millennium Development Goals (2000 – 2014) and similar patterns with the present Sustainable Development Goals (2015 – 2030) in Africa. One of our core objectives is to drive the implementation of the SDGs across the continent through research and data collation as well as bridging the funding gaps in achieving the SDGs in Africa through our Data System and $1 Trillion fund raising campaign from (2020 – 2030). 
              <br />
              <br />
              As a community of progressives we hope to expand into every nation in Africa to help rescue starving children in Northern Nigeria, provide healthcare and vaccines for babies and rural women, destroy child and human trafficking in Libya, combat climate change and effects of desert encroachment, ease humanitarian crisis in Sudan, create job opportunities for the massive unemployed Nigerian youths, fight gender basis across the Continent and ensure a better performance of the Sustainable Development Goals in Africa come 2030. 
              Let us build the CAFSED community to build Africa. Partner with us. <br /> <br />

              Founder / Program Cordinator:
              Enoch Okeze

            </div>
          </div>
        </div>
      </div>
     
  
	     
</React.Fragment>
    
    );
    }
}

 
module.exports = Home;