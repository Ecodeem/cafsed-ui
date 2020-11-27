import React, {Component} from "react";
import {Helmet} from "react-helmet";
import path from 'path';
import Header from './header';
import Footer from './footer';
import { NavLink, Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import '../shades/scss/about_africasdg.scss'; 

const BASE_URL = process.env.USE_BASE_URL;  


export class Aboutnigsdgs extends React.Component {
        constructor(props){
            super(props);
	    
	  }

        render(){

        return(
	
<React.Fragment>
<Helmet>
<title>ABOUT AFRICA SDGs: Centre for Africa Social Economic and Ecological Development (CAFSED)</title>
<meta name="description" content="Current record states that one in three Africans is at the risk of food insecurity. With 11 1/2 years to go, Africa is relatively on track to meet three goals: SDG 5 (gender equality), SDG 13 (climate action), and SDG 15 (life on land). In fact, the SDG Centre’s forecasts (for the SDGs for which we have sufficient data: poverty, malnutrition, maternal mortality, net school enrolment, access to electricity, and access to drinking water) show that all African regions except North Africa are unlikely to meet the SDGs. The struggle is more pronounced for Central Africa across all the goals." />
<meta name="keywords" content="SDG, social, economic, socioeconomic, development, school enrolment,access to electricity,malnutrition,maternal mortality, on track, gender inequality, records, Cafsed" />
</Helmet>

<Header />  

<div className="mobPadding" style={{marginTop:'40px'}}> </div>

<section className="slabb1">
<div className="afribracer">

<div className="afriheadWrap">
<div className="afrileft">
 <img src={`${BASE_URL}utilities/images/sdg-africa.png`} alt="mission-image" />
</div>

<div className="afriright">
 <h3>INTRODUCTION </h3>
</div>
</div>

<div className="africollBracer">

<ShowMoreText
	lines={3}
	more="Show more"
	less="Show less"
	anchorClass='textColorr'
	isExpanded={false}
>
<div className="africollleft">
<p>
        Our world is currently facing immense and several socioeconomic and environmental challenges, therefore every hand must be on deck to tackle these challenges. As part of solution to the immense developmental problem facing the world, all UN member states in September 2015 agreed upon the Sustainable Development Goals (SDGs) being the largest global partnership agreement and developmental plan ever made for our known world. 
        </p>
        <p>
        It consist of 17 goals and 169 targets. To realize them, it is estimated that the world will need to invest a staggering amount of between USD 5 Trillion and 7 Trillion per year – roughly 7-10% of global annual GDP.Despite the widespread adoption of and progress toward the Sustainable Development Goals, Africa continues to lag behind most of the world when it comes to socioeconomic development. 
        </p>
     

</div>
<div className="africollRight">
<p>
In fact, a recent report by the Sustainable Development Goals Center for Africa—”Africa 2030: Sustainable Development Goals Three-Year Reality Check”—reveals that minimal progress has been made and, in some instances, there is complete stagnation. More than half of the global poor (those who earn under $1.90 PPP per day) are found in Africa.
 </p>
      <p>
        One in three Africans is at the risk of food insecurity. With 11 1/2 years to go, Africa is relatively on track to meet three goals: SDG 5 (gender equality), SDG 13 (climate action), and SDG 15 (life on land). In fact, the SDG Center’s forecasts (for the SDGs for which we have sufficient data: poverty, malnutrition, maternal mortality, net school enrollment, access to electricity, and access to drinking water) show that all African regions except North Africa are unlikely to meet the SDGs. The struggle is more pronounced for Central Africa across all the goals.
        </p>
</div>
</ShowMoreText>
</div>

</div>
</section>

<section className="slabb2"> 
<div className="afribracer">

<div className="afriheadWrap">
<div className="afrileft">
 <img src={`${BASE_URL}utilities/images/dev-growth.jpeg`} alt="mission-image" />
</div>

<div className="afriright afriLongtil">
 <h3>ECONOMIC GROWTH AND HUMAN DEVELOPMENT GAPS  </h3>
</div>
</div>

<div className="africollBracer">
<ShowMoreText
	lines={3}
	more="Show more"
	less="Show less"
	anchorClass='textColorr'
	isExpanded={false}
>
<div className="africollleft">
<p>
        The region’s growth over the SDG period been well below the SDG target of 7 percent per year and also below the historical long-term average. In 2016—the year after the adoption of the SDGs—the sub-Saharan African region’s growth dropped to 1.4 percent. Globalization (migration, trade, and finance) has been under pressure or even reversing; China’s growth, which historically has been positively correlated with Africa’s, has decelerated in recent years; global trade growth has also dwindled; commodity prices remain depressed; and climatic conditions remain unfavorable. At the same time, social inclusion continues to be outstripped by population growth, impeding structural transformation and future productivity. Twenty-eight African countries are categorized as low income and 37 as having low human development.
        </p>
     

</div>
<div className="africollRight">
<p>
        A child born in Africa today is still at risk of not receiving a full, high-quality education or decent health care. An African child in school today continues to struggle to read and write due to poor quality of education services. Too many Africans continue not to visit the hospital due to lack of money. In fact, 22 African countries have a Human Capital Index score of less than 0.4. In other words, a child born today in those countries will be only 40 percent as productive at 18 years of age as one who completes their education and enjoys full health.
        </p>
</div>
</ShowMoreText>
</div>

</div>
</section>

<section className="slabb3"> 
<div className="afribracer">

<div className="afriheadWrap">
<div className="afrileft">
 <img src={`${BASE_URL}utilities/images/data-gap.png`} alt="mission-image" />
</div>

<div className="afriright">
 <h3>DATA GAPS PERSIST  </h3>
</div>
</div>

<div className="africollBracer">
<ShowMoreText
	lines={3}
	more="Show more"
	less="Show less"
	anchorClass='textColorr'
	isExpanded={false}
>
<div className="africollleft">
<p>
        While we do have a snapshot of the progress Africa (and the world) is making towards achieving the SDGs, a holistic review of SDGs over the last three years was not possible given that not enough data exists. In fact, only 96 indicators have data (41.4 percent of the global indicator framework). Where data exists, it is not comprehensive and consistent. Too often, African countries do not possess updated data for crucial indicators in poverty, health, nutrition, education, and infrastructure. Household surveys are irregular: Their scope, comprehensiveness, quantity, and quality vary wildly. At the continental level, there is just not enough data for tracking SDGs 10, 11, and 12.
        </p>
     

</div>
<div className="africollRight">

</div>
</ShowMoreText>
</div>

</div>
</section>


<section className="slabb6">
<div className="afribracer">

<div className="afriheadWrap">
<div className="afrileft">
 <img src={`${BASE_URL}utilities/images/fin-sdg.png`} alt="mission-image" />
</div>

<div className="afriright afriLongtil">
 <h3>FINANCING THE SUSTAINABLE DEVELOPMENT GOALS IN AFRICA IS GETTING HARDER</h3>
</div>
</div>

<div className="africollBracer">
<ShowMoreText
	lines={3}
	more="Show more"
	less="Show less"
	anchorClass='textColorr'
	isExpanded={false}
>
<div className="africollleft">
<p>
        Globally, financing for the SDGs remains below the requisite investment needs. The same is true for Africa. Despite an annual total financing mix of $650 billion ($500 billion in domestic revenue, $50 billion from official development assistance, slightly less than $50 billion in foreign direct investment, and $60 billion in remittances), the estimated additional annual financing required is between $500 billion and $1.2 trillion. Already, one in five African countries does not raise enough in revenues to meet its basic state functions. Even worse, in sub-Saharan Africa, that number is one in three. Notably, national development banks (NDBs) are a main source of long-term credit in many middle-income countries and developed economies. While Africa has 140 NDBs, they remain hugely constrained due to regulation, governance, and financing. As such, the size of most NDBs in Africa is small compared to the size of the economy in their respective countries.
        </p>
        
     

</div>
<div className="africollRight">
<p>
        Other sources of financing are unreliable as well. Official development assistance is failing in per capita terms, and OECD countries continue not to meet their SDG commitments of 0.7 percent of GDP. In fact, on average, they are currently meeting less than half of that goal. Foreign direct investment is, as a whole, unpredictable, but also seems to be stagnating. On the plus side, remittances are growing, but their associated costs remain over twice the SDG target of 3 percent. 
        </p>
<p>
        Consequently, African debt is rising. The number of African countries at high risk or in debt distress has more than doubled from eight in 2013 to 18 in 2018. Close to 40 percent of sub-Saharan African countries are at risk of a major debt crisis.
        </p>
</div>
</ShowMoreText>
</div>

</div>
</section>

<section className="slabb4"> 
<div className="afribracer">

<div className="afriheadWrap">
<div className="afrileft">
 <img src={`${BASE_URL}utilities/images/achive-sdg.jpeg`} alt="mission-image" />
</div>

<div className="afriright afriLongtil">
 <h3>THERE ARE GLOBAL REPERCUSSIONS FOR NOT ACHIEVING THE SDGS IN AFRICA  </h3>
</div>
</div>

<div className="africollBracer">
<ShowMoreText
	lines={3}
	more="Show more"
	less="Show less"
	anchorClass='textColorr'
	isExpanded={false}
>
<div className="africollleft">
<p>
        Overall, we cannot postpone investment in human capital and people or we risk losing a generation. SDG-tailored investment vehicles must be put in place on the continent that will consider the urgency, magnitude, and complexity of challenges faced in Africa, as well as the opportunities to be seized here. Africa’s failure to attain the SDGs will have implications everywhere on the planet, since some SDGs possess a transboundary nature, for example climate change, life below water, and effective partnerships.
        </p>
     

</div>
<div className="africollRight">
<p>
        Almost five years down in the 2030 Agenda, many countries are facing several challenges, militating against adequate monitoring and implementation of the SDG. Subjective assessment of SDGs experts on the main challenges for monitoring and implementing the SDGs indicates that these challenges differs from one country to the other, but the most commonly cited and most important challenges are on lack of funding or financial resources and lack of quality data or unavailability of data.
        </p>
</div>
</ShowMoreText>
</div>

</div>
</section>


<section className="slabb1">
<div className="afribracer">

<div className="afriheadWrap">
<div className="afrileft">
 <img src={`${BASE_URL}utilities/images/data-sdg.png`} alt="mission-image" />
</div>

<div className="afriright ">
 <h3>DATA </h3>
</div>
</div>

<div className="africollBracer">
<ShowMoreText
	lines={3}
	more="Show more"
	less="Show less"
	anchorClass='textColorr'
	isExpanded={false}
>
<div className="africollleft">
<p>
        Meanwhile, adequate data is very crucial for monitoring progress towards the implementation of the SDGs in real time.
        </p>
        <p>
        The 2030 Agenda for Sustainable Development reflects a unique global consensus and commitment to address the world’s most acute and pressing challenges. But to achieve the Sustainable Development Goals, and to leave no one behind, everyone in the world should be represented in up-to-date and timely data that can be used to measure progress and make decisions to improve people’s lives.
        </p>
        <p>
        Too much of our data is out-of-date, and too many people are missing from the numbers. There is an urgent need for more accurate, timely, and comprehensive data to make the SDGs an actionable framework for sustainable development that can drive policies and programs in real time for all people.
        </p>
        <p>
        Crucial to the success of SDGs implementation will be strong government systems and in particular strong statistical systems that can measure and incentivize progress across the goals. The discussion of the post 2015 development agenda and the SDGs has renewed interest in the quality and availability of statistics for management, program design, monitoring performance, evidenced based policy recommendation for informed decision. Most of the necessary statistics are produced by the Bureau of Statistics and other independent developing partner organizations in Africa, and this data is a crucial component for good governance.
        </p>
        <p>
        The SDG indicators require the use of modern, innovative technologies, including geospatial data, for comprehensive, disaggregated and frequent real time data collection across all the three dimensions of sustianable development (economic, environmental and social).
        </p>
        <p>
        Development data comes in many shapes and sizes. In its narrowest sense, it refers to the data used to monitor progress on the SDGs, through official SDG indicators.
        </p>
        
     

</div>
<div className="africollRight">

        <p>
        More broadly, it refers to the vast number of official statistics compiled by national statistics offices and the ministries to aid governance and program design, as well as very detailed data compiled by the international community to monitor the pace of economic and social development, as well as the status of the environment (broadly reflected in the world Bank's World Development indicators).
        </p>
        <p>
        Most stakeholders, federal agencies, state governments are interested in having rapid and easy access to the most recent data available for a key indicator. They often know, or have heard, that data exist for a given indicator, but don't have ready access to this data. Sometimes, the publication is missing from their library, or they don't have time to track down various data sources and compare the results of these surveys. They don't have access to government and donor databases. The data are in formats which are difficult to use in reports and presentations. Yet, the government of African nations are doing their best in making available relevant data.
        </p>
        <p>
        However, among the several efforts as reported in different SDGs Indicator Baseline Report and Country based SDGs Voluntary Reviews, top among the challenges against achieving the SDGs includes weak data production and management, missing data or inability to capture data in several indicators across all tiers of government.
        </p>
        <p>
        Center for Africa Socioeconomic and Ecological Development (CAFSED) being passionate about the achievement of the SDGs in Africa is setting new trend and standard for excellence, innovativeness, creativity and collaborative productivity through her innovative approach and solutions aimed at creating synergies, platforms and business models that challenges traditional and silo approaches but unlocks new perspectives needed to ignite positive developmental change and foster SDGs implementation.
        </p>
</div>
</ShowMoreText>
</div>

</div>
</section>

<section className="slabb5">
<div className="afribracer">

<div className="afriheadWrap">
<div className="afrileft">
 <img src={`${BASE_URL}utilities/images/aim-sdg.png`} alt="mission-image" />
</div>

<div className="afriright ">
 <h3>AIM (GOAL) </h3>
</div>
</div>

<div className="africollBracer">
<ShowMoreText
	lines={3}
	more="Show more"
	less="Show less"
	anchorClass='textColorr'
	isExpanded={false}
>
<div className="africollleft">
<p>
        It is in the light of the above that our organization is positioning itself to execute amongst our projects and activities towards driving sustainable, socio-economic and environmental development in Nigeria, a full-scale stand-alone SDGs survey in collaboration with relevant stakeholders, which is to be carried out on a real time basis to address not only missing data in the different national reports specifically, but also provide a platform on and for the SDGs within the African context, designed to provide a single point of access for comprehensive reporting of data on SDGs indicators.
        </p>
        
     

</div>
<div className="africollRight">

<p>
        This has become imperative because the successful tracking of the implementation of the SDGs will depend very significantly on the availability of those missing data for the indicators listed so. It is very important for these missing data to be made available as government strives intensely to implement the SDGs through policy changes, budget provision and programme effectiveness.
        </p>
</div>
</ShowMoreText>
</div>

</div>
</section>

<section className="slabb6">
<div className="afribracer">

<div className="afriheadWrap">
<div className="afrileft">
 <img src={`${BASE_URL}utilities/images/finance-sdg.jpeg`} alt="mission-image" />
</div>

<div className="afriright ">
 <h3>FINANCE/FUND </h3>
</div>
</div>

<div className="africollBracer">
<ShowMoreText
	lines={3}
	more="Show more"
	less="Show less"
	anchorClass='textColorr'
	isExpanded={false}
>
<div className="africollleft">
<p>
        The achievement of the Sustainable Development Goals (SDGs) in African nations requires a bold approach to development finance – one that significantly increases long-term, public and private investments on the continent. Without a bold approach to this endeavor, the SDGs will simply not be achieved. Unlike the period of the Millennium Development Goals (MDGs), during which there was a major focus in Overseas Development Assistance (ODA), the SDGs will require all types of financing – public, private, international and domestic – to be achieved. As a result of this need, new frameworks for development finance are required for national governments and financial institutions.
        </p>
        <p>
        The African continent is going through its own complex economic and financial transformation, both in the context of the global economy as well as in its own terms. From a long-term perspective, the prospects for continued economic growth and human development in Africa remains very strong. The continent benefits from a strong natural resource base, abundant human capital and strong entrepreneurial activity amongst its citizens. In recent times, the world has witnessed African economies translating their potential to achievements. From 2000-2015, growth rates in sub-Saharan Africa outpaced global economic growth rates by 2.5% per annum, of 5.3% versus 2.8%3. 
        </p>
        <p>
        From a medium-term perspective, Africa is continuing to deepen its financial markets and build its financial institutions for long-term economic growth.
        </p>
        
        

</div>
<div className="africollRight">
<p>
 The deepening of Africa’s financial markets is significant. At the end of 2011, total bond issuance from African economies totaled approximately $1bn. This figure had risen to $6.2 billion by the end of 2014, with a total of 11 countries accessing bond markets to financing domestic expenditures.4 Between 2011 and 2015, stock exchanges on the continent had undertaken 105 Initial Public Offerings (IPOs) and 335 Follow On (FO) capital raises.5 These, among others, are signs that the financial system across the continent is deepening and being further integrated into the global system. There is however a long ways to go.
</p>

<p>
        From a short-term perspective, there are significant financial and economic challenges that are facing key economies on the continent. The reversal, of the commodity super-cycle as well as the potential of interest rate increases in the United States, have both severely hurt large African economies, including Nigeria, South Africa and Egypt. In addition, concerns are mounting in the rise of the debt stock in African economies, which grew by 10.2% per year from 2011-2013, compared to 7.8% per year in 2006-2009.6 Debt-levels are still relatively low compared to advanced economies.
        </p>
        <p>
        The investment gap for Africa to achieve the SDGs is between an incremental outlay of $200 billion and $1.2 trillion per annum. Given the considerable increase in required investment for the SDGs in Africa, policy-makers must develop strategies to tap into all potential sources of financing – public, private, international and domestic.
        </p>
</div>
</ShowMoreText>
</div>

</div>
</section>

<Footer />
	
</React.Fragment>
    );
    }
}

 
module.exports = Aboutnigsdgs;