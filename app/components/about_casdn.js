import React, {Component} from "react";
import {Helmet} from "react-helmet";
import AOS from 'aos';
import Header from './header';
import Footer from './footer';
import ShowMoreText from 'react-show-more-text';

import { Scrollbars } from 'react-custom-scrollbars';
import '../shades/scss/about_cafsed.scss'; 

const BASE_URL = process.env.USE_BASE_URL;   

export class Aboutcasdn extends React.Component {
        constructor(props){
			super(props);
			AOS.init();
	    
	  }

 executeOnClick(isExpanded){
	 console.log(isExpanded);
 }
        render(){

        return(
	
<React.Fragment>
<Helmet>
<title>ABOUT CAFSED: Centre for Africa Social Economic and Ecological Development (CAFSED)</title>
<meta name="description" content="Centre for Africa Socioeconomic and Ecological Development (CAFSED) is a non-profit organization that is envisioned to drive implementation and performance of the Global Agenda among other developmental initiatives, especially as it concerns and affects Africa as a whole. We are a network of experts and organizations dedicated to providing policy, business framework, data research, data and finance gap-bridge and other solution platforms in order to achieve developmental strides in Africa." />
<meta name="keywords" content="SDG, socio, cafsed, economic, socio-economic, development, non-profit, organisation, implement, performance, global agenda, initiatives, Africa, network, dedicated, policy, framework, business framework, data, data research, finance, solution, achieve, achievement." />
</Helmet>

     <Header />  
    
		 <div className="mobPadding" style={{marginTop:'70px'}}> </div>


    <div className="abtwhiteBoardHead">
		 <section className="cafbracer">
            About CAFSED
		</section>
	</div>
	<div className="cafwhiteBoard" data-aos="fade-in" data-aos-duration="1000">
	    <section className="cafbracer">
            <h3 className="cafSectitle">
			 Who We Are & What We Do
			</h3>
			<h4 className="cafSectitlesub">cafsed.org</h4>

			<div className="cafDetCon">

			<div className="cafDetBigArrow">
				<span className="pe-7s-world"></span>
			</div>

			<h3 className="cafmmTitle">
				WHO WE ARE
			</h3>
			<div className="cafmmLine"></div>

			<div className="cafmmContent">
			<Scrollbars autoHide style={{ height: '300px' }}>
			<p>
		Centre for Africa Socioecenomic and Ecological Development (CAFSED) is a non-profit organization that is envisioned to drive implementation and performance of the Global Agenda among other developmental initiatives, especially as it concerns and affects Africa as a whole.
	    </p>
	    <p>
	    We are a network of experts and organizations dedicated to providing policy, business framework, data research, data and finance gap-bridge and other solution platforms in order to achieve developmental strides in Africa.
	    </p>
	    <p>
	    The bottom line of the Sustainble Development Goals call for good jobs for all, healthcare for all, investing in our children, putting people’s interests over special interests, ensuring equal opportunity for all in education and social justice, providing sustainable infrastructure, and ensuring a clean and safe environment. 
	    </p>
		<p>
	    Our sole aim of driving socio economic and environmental prosperity amongst UN Africa member nations using the SDGs as a roadmap is in coalition with partners, groups and other  stakeholders around the country and in Africa committed to achiveing the goals through our non-partisan framework is to leverage on same to achieve our set goals and objectives for Africa.
		</p>
		</Scrollbars>
			</div>

			</div>

			<div className="cafDetCon2" style={{float:'right',marginRight:'0'}}>

			<div className="cafDetBigArrow2">
				<span className="pe-7s-leaf"></span>
			</div>

			<h3 className="cafmmTitle2">
				WHAT WE DO
			</h3>
			<div className="cafmmLine2"></div>
		
			<div className="cafmmContent">
			<Scrollbars autoHide style={{ height: '300px' }}>
			<p>
			<strong>SUSTAINABLE DEVELOPMENT REPORT:</strong> A research and advocacy report developed by our team of researchers and econometrician on the state of Nigeria’s performance on the implementation of the SDGs.
		    </p>
			<p>
			<strong>CAFSED.ORG (DATA ENGINE):</strong> A cross-cutting tool with reliable research and access to actual data, it is primarily data driven, info-graphic enabled, real-time self-adjustable statistical web-based application for effective data mobilization, enabling data visualization, tracking and periodic reporting of implementation progress of SDGs within the Africa context so as to measure the overall performance of the African state governments towards domestication and achieving the SDGs. 
		</p>
		<p>
			<strong>CAFSED.ORG – (FUND SUPPORT):</strong> A technological platform and strategic fund raising mechanism for individuals, diasporas, corporate and government to fund goals and projects in specific selected location or indicated regions of African states so as to contribute to closing of the obvious financial gap by 20% out of the 50% gap by 2030, influence and bring about accelerated implementation of the SDGs in Africa.
		</p>
		    <p>
			<strong>ECODEEM TODAY:</strong> We have hosted a TV/Radio program that serves as a communication tool for creating awareness and bringing the global goals close to the grassroots. The program was structured in a way to inform and engage its audience (viewers / listeners) in the understanding of their roles in achieving “the world we want to have” and taking practical steps daily in effort to actualize the SDGs for grass root impact.
		</p>
		<p>
			<strong>ECODEEM APP:</strong> A technological platform that leverages on the SDGs and engages Africans to get involved, benefit and contribute actively towards the social, economic, educational, technological, environmental and political development of Africa.  
		</p>
		
		<p>
			<strong>AFRICA SUSTAINABLE DEVELOPMENT SUMMIT (ASDS):</strong> Africa Sustainable Development Summit (ASDS) is conceived and designed as a periodic public-private dialogue and discourse forum on the SDGs.  This Summit is fundamentally organized to engage government, private sector, and civil society on key development issues and economic policies in Africa; develop cross-sectoral partnerships and collaborations for concrete actions to deliver on the 17 Sustainable Development Goals.
		 </p>
		 <p>
			 Until the culmination of the SDGs 2030 Agenda, The Sustainable Summits will be held every year, exploring the SDGs through different lenses, bridging gaps to global practices for local adaptation and benefit, unlocking the many opportunities and forging new perspectives towards implementation of the goals. 
        </p>
		<p>
			The overarching aim of the Sustainable Summit is to provide a precise update report on where each host African nation stands in the implementation of the SDGs. It is to be a Development Reporting Event that publicizes our research, monitoring and evaluation of SDGs implementation.
		</p>
		<p>
			The Summit is conceived to be a leading international meeting aiming to create a permanent and multidisciplinary knowledge network on implementation of SDGs, where all stakeholders will learn from each other: universities, governments, cities and public and social agencies. 
        </p>
		<p>
			Our aim is to provide intellectual guidance and scientific evidences to the challenges of SDGs, with a humanist and critical thinking, promoting research and education to build a fair locally driven but globally relevant community and more sustainable societies.
        </p>
		<p>
			We are gathering multidisciplinary experts and high-level practitioners from within Africa around and the world to exchange knowledge, ideas, experiences and expectations around the challenges involved with the SDGs. 
        </p>
		<p>
			Through a combination of keynote presentations by renowned experts, round tables and parallel sessions, the summit shall be opening debate among the different stakeholders on solutions for a sustainable development to transform society at local and global level. 
		</p>
		<p>
			We are now set for the commencement of our inaugural sustainable summit; which is to be hosted in Nigeria in January 2020 and is structured to be effectively replicated across other African countries giving considerations to the peculiarity of each nation's economic structure. 
        </p>

			</Scrollbars>
			</div>
			
			</div>
			


		</section>

		<div className="cafVNGcon">
		<section className="cafbracer" data-aos="fade-up" data-aos-duration="1000">
		<h3 className="cafSectitle" style={{color:'#fff'}}>
			 Organisation Vision, Mission & Goals
			</h3>
			<h4 className="cafSectitlesub" style={{color:'#fff'}}>cafsed.org</h4>

        <div className="cafVNGbox" style={{backgroundColor: '#8c9b38'}}>
		<div className="cafVNGimg">

		<img src={`${BASE_URL}utilities/images/vission.jpeg`} alt="vision-image" />
          <div className="cafVNGTstrip">
			  <div className="cafVNGTleft">
			    VISION
			  </div>
			  <div className="cafVNGright">
			   <span className="pe-7s-glasses"></span>
			  </div>
		  </div>
		</div>

		<div className="cafVNGcontt">
		Driving socio economic and environmental prosperity in Africa by bridging identified SDGs Data and Funding gaps.
		</div>

		</div>

		<div className="cafVNGbox" style={{backgroundColor: '#74623d'}}>
		<div className="cafVNGimg">
		<img src={`${BASE_URL}utilities/images/mission.jpeg`} alt="mission-image" />
          <div className="cafVNGTstrip">
			  <div className="cafVNGTleft">
			    MISSION
			  </div>
			  <div className="cafVNGright">
			   <span className="pe-7s-rocket"></span>
			  </div>
		  </div>
		</div>

		<div className="cafVNGcontt">
		
	    Through our platforms, we encourage all citizens, businesses, civil society organizations, and governments at all levels to focus and concentrate on Agenda 2030, in order to address pressing economic, social and environmental challenges in the continent.
	  
		</div>

		</div>

		<div className="cafVNGbox" style={{backgroundColor: '#031e2e'}}>
		<div className="cafVNGimg">
		<img src={`${BASE_URL}utilities/images/goal.jpeg`} alt="vision-image" />
          <div className="cafVNGTstrip">
			  <div className="cafVNGTleft">
			    GOALS
			  </div>
			  <div className="cafVNGright">
			   <span className="pe-7s-target"></span>
			  </div>
		  </div>
		</div>

		<div className="cafVNGcontt">
		
	    To provide a scalable but sustainable technological platform, initiate strategic implementable projects and harness diverse stakeholder collaborations that will contribute yearly to the bridging up to 20% out of almost 50% Data and Funding/Financing gaps essential to achieving SDGs in Africa by year 2030.
		
		</div>

		</div>
       
	   </section>
		</div>

		<section className="cafbracer">
		<h3 className="cafSectitle">
			 Organisation Objectives
			</h3>
			<h4 className="cafSectitlesub" >cafsed.org</h4>
		</section>

		<section className="cafObjcon">

		

		<div className="cafObjslabcon">
		<section className="cafbracer">

		<div className="cafObjslab" style={{backgroundColor:'#dedcee'}} data-aos="fade-left" data-aos-duration="1000">
          <h4>Objective 1</h4>
					<ShowMoreText
						lines={3}
						more="Show more"
						less="Show less"
						anchorClass='textColocn'
						isExpanded={false}
						>
		  <h5>
		  To innovatively create an engaging platform that will leverage on the SDGs so as to allow Africans contribute actively towards the social, economic, educational, technological, environmental and political development of Africa.
		</h5>
		  
		  <ul>
		   <li>
			1.1	On or before end of 2019, to design, facilitate and develop a simple to use, all-encompassing multi-user mobile app which will engage and enable users for micro-blogging, and other activities where users can initiate projects/programs as well as actions that 	empowers their lives and society while sharing messages, memorable photos and videos with friends, family and colleagues. The platform is to also allow for interaction between ideas and potential investors as it relates to SDGs focused business models.	
		   </li>
			<li>
			1.2	Through our platforms, we shall encourage all citizens, businesses, civil society organizations, and governments at all levels to focus and concentrate on Agenda 2030, in order to address pressing economic, social and environmental challenges in the continent.
			</li>
			<li>
			1.3	Design an SDG innovation hub and project activity that will address social challenges by gathering citizen ideas and providing a space where institutions, agencies and investors can respond to, and support, bourgeoning ideas.
		    </li>
			<li>
			1.4	To have a comparative advantage as an organization, acting as a bridge between the government and private sector so as to stimulate growth through enabling environment for social entrepreneurship, acting as a scaling up mechanism for the SDGs at the local level, supporting impact-oriented business start-ups (especially community based enterprises) and supporting innovative partnerships to encourage private financing.
		    </li>
		  </ul>

			
		  </ShowMoreText>
		</div>

		<div className="cafObjslabRig" style={{backgroundColor:'#f0e5de'}} data-aos="fade-right" data-aos-duration="1000">
          <h4>Objective 2</h4>
		  
			<ShowMoreText
					lines={3}
					more="Show more"
					less="Show less"
					anchorClass='textColocn'
					isExpanded={false}
						>
						<h5>
		  To mobilize for high-quality and reliable data from connected sources, by devising a cross-cutting tool with reliable research and access to actual data so as to measure the overall performance of the African state governments towards domestication and achieving the SDGs. 
		  </h5>
		  <ul>
		    <li>
			2.1	To design, facilitate and develop a data driven, info-graphic enabled, real-time self-adjustable statistical web-engine (web application) for effective data mobilization, tracking and reporting of implementation progress of SDGs within the Africa context.
		   </li>
		   <li>
		   2.2	Stakeholder mobilization and Advocacy for collaboration towards data collection and validation towards SDGs tracking, monitoring and implementation measurement.
		   </li>
		   <li>
		   2.3	Set up Data Validation Mechanism in order to maintain data integrity at all time.
		   </li>
		   <li>
		   2.4	Stimulate performance by promoting healthy competition and emulation among African member states. Enabling stakeholders identify priority areas in which they need to invest and improve by supporting them to measure incremental progress.
		   </li>
		   <li>
		   2.5	To carry out robust research, data analysis and publish validated data as periodic report and policy advice with the aim of informing decision makers on the need for improvement or sustainability in the implementation of the SDGs.
		   </li>
		  </ul>
			</ShowMoreText>
		</div>

		<div className="cafObjslab" style={{backgroundColor:'#abd0ce'}} data-aos="fade-left" data-aos-duration="1000">
          <h4>Objective 3</h4>
					<ShowMoreText
						lines={3}
						more="Show more"
						less="Show less"
						anchorClass='textColocn'
						isExpanded={false}
						>
		  <h5>
		  To initiate fund raising strategy of substantial targeted amount through resource mobilization on an enabled technological platform, special events and management board authorized mechanism for SDGs focused projects and program in selected or indicated regions of African states so as to contribute to closing of the obvious financial gap by 20% out of the 50% gap by 2030, influence and bring about accelerated implementation of the SDGs in Africa.
		  </h5>
		  <ul>
		   <li>
		   3.1	Our objective is to create an enabling technological platform that will empower passionate stakeholders and Diasporas to tax-effectively channel philanthropic capital to their countries of origin or regions of choice in Africa in ways that are beneficial for sustainable development.
		   </li>
		   <li>
		   3.2	Develop scalable solutions to break and overcome barriers that inhibits diaspora citizens from making strategic investments in their countries of origin. Create and network partnerships that will increase capital flows as DFIs to African countries, and generate sustainable social and economic impact.
		   </li>
		   <li>
		   3.3	Engage and provide opportunity through our fund raising mechanisms for multinationals and private corporate organizations to rethink and review their Corporate Social Responsibility in the light of supporting SDGs implementation. Thence, making them worthy ambassador or SDGs and the Agenda 2030 Developmental Agent® as they support worthy cause among the SDGs projects and programmes in their community of operation for the benefit of the people.
		   </li>
		   <li>
		   3.4	Through our platforms, we shall encourage all citizens, businesses, civil society organizations, and governments at all levels to contribute token of their income towards any Sustainable Development Goal of their choice.
		   </li>
		   <li>
		   3.5	To actively pilot innovative ways of financing the SDGs and design sustainable platform for incubating innovative solutions to development problems while creating widespread entrepreneurial culture in Africa.
		   </li>
		   <li>
		   3.6	Create synergy with other development partners in order to pursue innovative financing solutions to mobilize capital for development objectives in Africa.
		   </li>
		  </ul>
			</ShowMoreText>
		</div>

		<div className="cafObjslabRig" style={{backgroundColor:'#feee7d'}} data-aos="fade-right" data-aos-duration="1000">
          <h4>Objective 4</h4>
					<ShowMoreText
						lines={3}
						more="Show more"
						less="Show less"
						anchorClass='textColocn'
						isExpanded={false}
						>		
		  <h5>
		  To initiate, design and host a TV/Radio program that will serve as a communication tool for creating awareness and bringing the global goals close to the grassroots. The program is to be structured in a way to engage its audience (viewers / listeners) in the understanding of their roles in achieving “the world we want to have” and taking practical steps daily in effort to actualize the SDGs for grass root impact.
		  </h5>
		  <ul>
		   <li>
		   4.1	To gather and disseminate information which is pertinent to Africa and/or beneficial to Africans especially as it relates to achieving the SDGs.
		   </li>
		   <li>
		   4.2	To serve as a channel of communication and advocacy for good governance for the people and with government of the African countries with respect to the opinions, wishes, yearnings and aspirations of African citizens.
		   </li>
		   <li>
		   4.3	To create awareness, inform and educate the citizenry of Africa on who is doing what, who can do what and what can be done within the SDGs platform towards driving common socio economic and environmental development.
		   </li>
		   <li>
		   4.4	To use the media platform to support financially and technically, upcoming entrepreneurs who are contributing one way or the other to the achievement of the SDGs in their local community.
		   </li>
		   
		  </ul>
			</ShowMoreText>
		</div>

		<div className="cafObjslab" style={{backgroundColor:'#dedcee'}} data-aos="fade-left" data-aos-duration="1000">
          <h4>Objective 5</h4>
					<ShowMoreText
						lines={3}
						more="Show more"
						less="Show less"
						anchorClass='textColocn'
						isExpanded={false}
						>	
		  <h5>
		  To initiate and convene a platform for periodic and itinerant public-private dialogue and discourse forum on tracking, supporting and implementation of SDGs in Africa.
		  </h5>
		  <ul>
		   <li>
		   5.1	Organize a Sustainable Development Summit where government, private sectors and civil society will be engaged on key developmental issues and economic policies as it affects Africa or host countries in particular. Develop cross-sectoral partnerships and collaborations for concrete actions to deliver on the SDGs.
		  </li>
		   <li>
		   5.2	Utilize the summit platform to recognize, honour and award excellence or innovative initiatives in the implementation of the SDGs.
		  </li>
		   <li>
		   5.3	Utilize the summit platform to recognize, honour and award excellence or innovative initiatives in the implementation of the SDGs.
		   </li>
		   
		   
		  </ul>
			</ShowMoreText>
		</div>

		<div className="cafObjslabRig" style={{backgroundColor:'#f0e5de'}} data-aos="fade-right" data-aos-duration="1000">
          <h4>Objective 6</h4>
					<ShowMoreText
						lines={3}
						more="Show more"
						less="Show less"
						anchorClass='textColocn'
						isExpanded={false}
						>	
		  <h5>
		  To establish our strategic deliverables as an organization by creating social platform towards partnerships and promotion of SDGs, market place for investments, value and financial interactions, while advocating through awareness the closing of identified gaps so as not to leave anyone behind.
		  </h5>
		  <ul>
		   <li>
		   6.1	To ensure end-user satisfaction.
		   </li>
		   <li>
		   6.2	To positively influence many lives through direct-impact projects undertaken and with other stakeholders.
		  </li>
		   <li>
		   6.3	To execute and implement on budget and policy.
		   </li>
		   <li>
		   6.4	To have proper accounting and financial information for all raised fund and throughout all project cycle.
		  </li>
		  <li>
		  6.5	To build a reputation as a reliable private sector partner and stakeholder in the Sustainable Development Goals arena.
		  </li>
		   </ul>
			 </ShowMoreText>
		</div>

		<div className="cafObjslab" style={{backgroundColor:'#abd0ce'}} data-aos="fade-left" data-aos-duration="1000">
          <h4>Objective 7</h4>
					<ShowMoreText
						lines={3}
						more="Show more"
						less="Show less"
						anchorClass='textColocn'
						isExpanded={false}
						>	
		  <h5>
		  To increase % of men and women, particularly youths who are actively engaged in implementation of SDGs within their community and initiating out-of-the-box ideas relevant to SDGs attainment.
		 </h5>
		  <ul>
		   <li>
		   7.1  Community Mobilization and Advocacy targeting policy makers and the influential towards encouraging youths initiatives especially SDGs targeted.
		   </li>
		   <li>
		   7.2 Community Mobilization and advocacy for programmes targeting youths to be aware, leverage and take advantage of SDGs to engage their political leaders.
		   </li>
		   <li>
		   7.3  Community mobilization and advocacy targeting general population on what they need to know.
		
		   </li>
		   <li>
		   7.4 Carry out Capacity Building and Behavioral Change Communication programmes in order to empower youths and women in Entrepreneurship training and community economic development as a grassroots’ effort to contribute to achieving the SDGs.
		  </li>
		 
		   </ul>
			 </ShowMoreText>
		</div>

		<div className="cafObjslabRig" style={{backgroundColor:'#feee7d'}} data-aos="fade-right" data-aos-duration="1000">
          <h4>Objective 8</h4>
		  
		  <ul>
		   <li>
		   8.1 Design tailor made projects for different regions of Africa targeted at achieving specific goals as the need entails.
		  </li>
		   <li>
		   8.2	Shortlist qualified development agents in different region for implementation of SDG projects.
		</li>
		   
		 
		   </ul>
		</div>

		<div className="cafObjslab" style={{backgroundColor:'#dedcee'}} data-aos="fade-left" data-aos-duration="1000">
          <h4>Objective 9</h4>
					<ShowMoreText
						lines={3}
						more="Show more"
						less="Show less"
						anchorClass='textColocn'
						isExpanded={false}
						>	
		  <h5>
		  To strengthen national capacity for SDGs monitoring, evaluation, tracking, research and adoption of new perspectives and best practices.
		</h5>
		  <ul>
		   <li>
		   9.1 Strengthen mechanisms for SDGs projects monitoring and evaluation 
		   </li>
		   <li>
		   9.2 Strengthen capacity for monitoring and evaluation
		   </li>
		   <li>
		   9.3 Evaluate the implementation of the SDGs
		   </li>
		   <li>
		   9.4 Promote relevant research
		   </li>
		 
		   </ul>
			 </ShowMoreText>
		</div>

		</section>
		</div>

		</section>


	</div>

	<div style={{clear:'both'}}></div>
      
	<Footer />
</React.Fragment>
    );
    }
}

 
module.exports = Aboutcasdn;