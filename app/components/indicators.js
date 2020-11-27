import React, {Component} from "react";
import EscapeOutside from "react-escape-outside";
import { NavLink, Link } from 'react-router-dom'; 

class Indicators extends React.Component {
        constructor(props){
            super(props);
	    
	   this.state={
	    
	    isOpen: false,
	    indicatorTitle:'',
	    
	    };
	    
	    this._toggleShowGoals = this._toggleShowGoals.bind(this);
	    this._toggleHideGoals = this._toggleHideGoals.bind(this);
	    this.handleEscapeOutside = this.handleEscapeOutside.bind(this);
        }

_toggleShowGoals(){
   this.setState({ isOpen: true });

}
_toggleHideGoals(){
    if (this.state.hidegoals=='true') {
	this.setState({
        hidegoals: 'false'
      }); 
    }
   
}

handleEscapeOutside() {
    this.setState({ isOpen: false })
}


componentDidUpdate(prevProps) {
	
$('#SDG1').collapsible();
$('#SDG2').collapsible();
$('#SDG3').collapsible();
$('#SDG4').collapsible();
$('#SDG5').collapsible();
$('#SDG6').collapsible();
$('#SDG7').collapsible();
$('#SDG8').collapsible();
$('#SDG9').collapsible();
$('#SDG10').collapsible();
$('#SDG11').collapsible();
$('#SDG12').collapsible();
$('#SDG13').collapsible();
$('#SDG14').collapsible();
$('#SDG15').collapsible();
$('#SDG16').collapsible();
$('#SDG17').collapsible();
  
}
        render(){
const {indicatorTitle}	= this.state;

	return(
<div>
	<div className="indicatorTitlecont" onClick={this._toggleShowGoals}>
	    <div className="indicatorTitle">
		{this.props.indicatortitle}
	    </div>
	</div>
	
	
	{ this.state.isOpen === true && (
	<EscapeOutside onEscapeOutside={ this.handleEscapeOutside }>
	<div className="indicatorsCont">
	    
	    <div id="SDG1" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG1:No Poverty</h1>
		<div>
		    <p>
			Target 1.1: By 2030, eradicate extreme poverty for all people everywhere,
		         currently measured a people living on less than $1.25 a day
		    </p>
 
			<ul>
			    <a href="/playground/poverty_indi1">
			    <li>Proportion of population below the international poverty line, by sex, age, employment status and 
				geographical location (urban/rural)| Percent</li>
			    </a>
			    
			</ul>
		     <p>
			 Target 1.2: By 2030, reduce at least by half the proportion of men, women
			children of all ages living in poverty in all its dimensions according to
			national definitions.
		    </p>
			<ul>
			    <a href="/playground/poverty_indi2">
			      <li>Proportion of population living below the national poverty line, by sex and age | Percent</li>
			    </a>
			    <a href="/playground/poverty_indi3">
			      <li>Proportion of men, women and children of all ages 
				living in poverty in all its dimensions according to national 
				definitions | Percent</li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 1.3: Implement nationally appropriate social protection systems and
			measures for all, including floors, and by 2030 achieve susbstantial coverage
			of the poor and the vulnerable.
		     </p>	
			<ul>
			   <a href="/playground/poverty_indi4">
			      <li>Proportion of population covered by social 
				protection floors/systems, by sex, distinguishing children, 
				unemployed persons, older persons, persons with 
				disabilities, pregnant women, newborns, work-injury 
				victims and the poor and the vulnerable | Percent</li> 
			    </a>
			</ul>
		   
		    <p>
			Target 1.4: By 2030, ensure that all men and women, in particular 
                        the poor and the vulnerable, have equal rights to economic 
                        resources, as well as access to basic services, ownership and 
                        control over land and other forms of property, inheritance, 
                        natural resources, appropriate new technology and financial 
                        services, including microfinance.
		    </p>
			<ul>
			   <a href="/playground/poverty_indi5">
			      <li>Proportion of population living in households with access to basic services| Percent</li>
			    </a>
			    <a href="/playground/poverty_indi6">
			       <li>Proportion of total adult population with secure tenure rights to land, (a) with legally recognized
			documentation, and (b) who perceive their rights to land as secure, by sex and type of tenure | Percent</li>
			    </a>
			</ul>
                        
                    <p>
			Target 1.5: By 2030, build the resilience of the poor and thoe in vulnerable
			situation and reduce their expoure and vulnerability to climate-related
			extreme events and other economic, social and environmental shocks and di
			disasters.
		    </p>
			<ul>
			   <a href="/playground/poverty_indi7">
			      <li>Number of deaths, missing persons and directly 
				affected persons attributed to disasters per 100,000 
				population | Number</li>
			    </a>
			    <a href="/playground/poverty_indi8">
			      <li>Direct economic loss attributed to disasters in 
				relation to global gross domestic product (GDP)| Number</li>
			    </a>
                            <a href="/playground/poverty_indi9">
			      <li>Number of countries that adopt and implement 
				national disaster risk reduction strategies in line with the 
				Sendai Framework for Disaster Risk Reduction 2015�2030 | Number</li>
			    </a>
			    <a href="/playground/poverty_indi10">
			      <li>Proportion of local governments that adopt and 
				implement local disaster risk reduction strategies in line 
				with national disaster risk reduction strategies | Percent</li> 
			    </a>
			</ul>
                        
                    <p>
			        Target 1.a: Ensure significant mobilization of resources from a 
				variety of sources, by 2030, including through enhanced development 
				cooperation, in order to provide adequate and predictable 
				means for developing countries, in particular least developed 
				countries, to implement programmes and policies to end 
				poverty in all its dimensions.
		    </p>
			<ul>
			   <a href="/playground/poverty_indi11">
			      <li>Proportion of domestically generated resources 
				allocated by the government directly to poverty reduction 
				programmes| Number</li>
			    </a>
			    <a href="/playground/poverty_indi12">
			       <li>Proportion of total government spending on 
                            essential services (education, health and social protection)| Percent</li>
			    </a>
                            <a href="/playground/poverty_indi13">
			      <li>Sum of total grants and non-debt-creating inflows 
				directly allocated to poverty reduction programmes as a 
				proportion of GDP | Number</li> 
			    </a>
			</ul>
                        
                    <p>
			Target 1.b: Create sound policy frameworks at the national, 
				regional and international levels, based on pro-poor and 
				gender-sensitive development strategies, to support 
				accelerated investment in poverty eradication actions.
		    </p>
			<ul>
			   <a href="/playground/poverty_indi14">
			      <li>Proportion of government recurrent and capital 
				spending to sectors that disproportionately benefit women, 
				the poor and vulnerable groups | Percent</li>
			    </a>
			</ul>    
		    
		</div>
	    </div>
            
	    
	    <div id="SDG2" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG2:Zero Hunger</h1>
		<div>
		    <p>
			Target 2.1: By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations,
			including infants, to safe, nutritious and sufficient food all year round
		    </p>
			 <ul>
			   <a href="/playground/hunger_indi1">
			      <li>Prevalence of undernourishment | Percent</li>
			    </a>
			    <a href="/playground/hunger_indi2">
			      <li>Estimated number of population in moderate or severe food insecurity | Number</li>
			    </a>
			</ul>
		    
		     <p>
			Target 2.2: By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed
			targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons
		      </p>
			<ul>
			   <a href="/playground/hunger_indi3">
			      <li>Prevalence of stunting in children (height for age below minus two standard deviations
                                from the median) | Number</li>
			    </a>
			    <a href="/playground/hunger_indi4">
			       <li>Prevalence of malnutrition in children (height for age below minus two standard deviations
                                from the median) | Number</li>
			    </a>
			</ul>
		    
		    <p>
			Target 2.3: By 2030, double the agricultural productivity and 
				incomes of small-scale food producers, in particular women, 
				indigenous peoples, family farmers, pastoralists and fishers, 
				including through secure and equal access to land, other 
				productive resources and inputs, knowledge, financial 
				services, markets and opportunities for value addition and 
				non-farm employment 
		    </p>
			<ul>
			   <a href="/playground/hunger_indi5">
			     <li>Volume of production per labour unit by classes of 
                                farming/pastoral/forestry enterprise size | Number</li>
			    </a>
			    <a href="/playground/hunger_indi6">
			      <li>Average income of small-scale food producers, by 
                                sex and indigenous status| Number</li>
			    </a>
			</ul>
		   
		    <p>
			Target 2.4: By 2030, ensure sustainable food production systems 
				and implement resilient agricultural practices that increase 
				productivity and production, that help maintain ecosystems, 
				that strengthen capacity for adaptation to climate change, 
				extreme weather, drought, flooding and other disasters and 
				that progressively improve land and soil quality
		    </p>
                        <ul>
			   <a href="/playground/hunger_indi7">
			      <li>Proportion of agricultural area under productive 
				and sustainable agriculture | Percent</li>
			    </a>
			</ul>
                        
                    <p>
			Target 2.5: By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and
                        domesticated animals and their related wild species, including through soundly managed and
                        diversified seed and plant banks at the national, regional and international levels, and promote
                        access to and fair and equitable sharing of benefits arising from the utilization of genetic
                        resources and associated traditional knowledge, as internationally agreed.
		    </p>
			<ul>
			   <a href="/playground/hunger_indi8">
			      <li>Number of accessions of plant and animal genetic resources secured in conservation facilities under
                                 medium or long term conditions | Number</li>
			    </a>
			    <a href="/playground/hunger_indi9">
			      <li>Proportion of local breeds classified as being at risk, not at risk or
			         at unknown level of risk of extinction | Percent</li>
			    </a>
			</ul>
			
	             <p>
			Target 2.a: Increase investment, including through enhanced international cooperation,
                        in rural infrastructure, agricultural research and extension services, technology development and plant and
                        livestock gene banks in order to enhance agricultural productive capacity in developing countries,
                        in particular least developed countries. 
		    </p>
			<ul>
			   <a href="/playground/hunger_indi10">
			      <li>The agriculture orientation index for government expenditures | Index</li>
			    </a>
			    <a href="/playground/hunger_indi11">
			      <li>Total official flows disbursements for agriculture, by recipient | Constant USD</li>
			    </a>
			</ul>
			
		    <p>
			Target 2.b: Correct and prevent trade restrictions and distortions in 
			world agricultural markets, including through the parallel 
			elimination of all forms of agricultural export subsidies and 
			all export measures with equivalent effect, in accordance 
			with the mandate of the Doha Development Round. 
		    </p>
			<ul>
			   <a href="/playground/hunger_indi12">
			      <li>Agricultural export subsidies | Index</li>
			    </a>
			</ul>
			
		     <p>
			Target 2.c: Adopt measures to ensure the proper functioning of food commodity markets and their derivatives
                        and facilitate timely access to market information, including on food reserves, in order
                        to help limit extreme food price volatility.
		    </p>
			<ul>
			   <a href="/playground/hunger_indi13">
			      <li>Indicator of Food Price Anomalies (IFPA)| Index</li>
			    </a>
			</ul>   	
		</div>
	    </div>
            
            
            <div id="SDG3" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG 3:Good Health</h1>
		<div>
		    <p>
			Target 3.1: By 2030, reduce the global maternal mortality ratio to less than 70 per
                                          100,000 live births.
		    </p>
 
			<ul>
			    <a href="/playground/health_indi1">
			      <li>Maternal mortality ratio | Per 100,000 live births</li>
			    </a>
			    <a href="/playground/health_indi2">
			      <li>Proportion of births attended by skilled health personnel | Percent</li>
			    </a>
			</ul>
		     
			
		     <p>
			Target 3.2: By 2030, end preventable deaths of newborns and children under 5 years of age, 
                        with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births
                        and under-5 mortality to at least as low as 25 per 1,000 live births.
		    </p>
			<ul>
			    <a href="/playground/health_indi3">
			        <li>Under-five Mortality rate | Per 1,000 live births</li>
			    </a>
			    <a href="/playground/health_indi4">
			        <li>Neonatal mortality rate | Per 1,000 live births</li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 3.3: By 2030, end the epidemics of AIDS, tuberculosis,
                        malaria and neglected tropical diseases and combat hepatitis,
                        water-borne diseases and other communicable diseases.
		     </p>	
			<ul>
			   <a href="/playground/health_indi5">
			      <li>Estimated HIV incidence rate | Per 1,000 uninfected population</li>
			    </a>
			    <a href="/playground/health_indi6">
			       <li>Tuberculosis incidence rate | Per 100,000 population</li>
			    </a>
			    <a href="/playground/health_indi7">
			      <li>Malaria incidence rate | Per 1,000 population</li>
			    </a>
			    <a href="/playground/health_indi8">
			       <li>Hepatitis B incidence rate | per 100,000 population</li>
			    </a>
			    <a href="/playground/health_indi9">
			      <li>Number of people requiring interventions against neglected tropical diseases | Number</li>
			    </a>
			    
			</ul>
		   
		    <p>
			Target 3.4: By 2030, reduce by one third premature mortality
                        from non-communicable diseases through prevention and treatment
                        and promote mental health and well-being.
		    </p>
			<ul>
			   <a href="/playground/health_indi10">
			      <li>Mortality rate attributed to cardiovascular disease, cancer, diabetes or chronic
                                respiratory disease | Probability</li>
			    </a>
			    <a href="/playground/health_indi11">
			      <li>Suicide mortality rate | Per 100,000 population</li>
			    </a>
			</ul>
			
		    <p>
			Target 3.5: Strengthen the prevention and treatment of substance abuse,
                        including narcotic drug abuse and harmful use of alcohol.
		    </p>
 
			<ul>
			    <a href="/playground/health_indi12">
			      <li>Coverage of treatment interventions 
				(pharmacological, psychosocial and rehabilitation and 
				aftercare services) for substance use disorders | Percent</li>
			    </a>
			    <a href="/playground/health_indi13">
			      <li>Alcohol per capita consumption within a calendar year in litres of pure alcohol | Litres pure alcohol</li>
			    </a>
			</ul>
		     <p>
			Target 3.6: By 2020, halve the Number of global deaths and injuries from road traffic accidents.
		    </p>
			<ul>
			    <a href="/playground/health_indi14">
			      <li>Death rate due to road traffic injuries | Per 100,000 population</li>
			    </a>
			    			   
			</ul>
		    
		    <p>
			Target 3.7: By 2030, ensure universal access to sexual and reproductive health-care services,
                        including for family planning, information and education, and the integration of reproductive
                        health into national strategies and programmes.
		     </p>	
			<ul>
			   <a href="/playground/health_indi15">
			      <li>Proportion of women married or in a union of reproductive
                                 age who have their need for family planning satisfied with modern methods | Percent</li>
			    </a>
			    <a href="/playground/health_indi16">
			       <li>Adolescent birth rate | Per 1,000 population</li>
			    </a>
			</ul>
		   
		    <p>
			Target 3.8: By 2030, achieve universal health coverage, including financial 
			risk protection, access to quality essential health-care 
			services and access to safe, effective, quality and affordable 
			essential medicines and vaccines for all.
		    </p>
			<ul>
			   <a href="/playground/health_indi17">
			      <li>Coverage of essential health services (defined as 
				the average coverage of essential services based on tracer 
				interventions that include reproductive, maternal, newborn 
				and child health, infectious diseases, non-communicable 
				diseases and service capacity and access, among the 
				general and the most disadvantaged population) | Number</li> 
			    </a>
			    <a href="/playground/health_indi18">
			      <li>Proportion of population with large household 
				expenditures on health as a share of total household 
				expenditure or income | Percent</li>
			    </a>
			</ul>
			
		   <p>
			Target 3.9: By 2030, substantially reduce the Number of deaths and illnesses from
                        hazardous chemicals and air, water and soil pollution and contamination.
		    </p>
			<ul>
			    <a href="/playground/health_indi19">
			      <li>Mortality rate attributed to household and ambient air pollution | Per 100,000 population</li>
			    </a>
			    <a href="/playground/health_indi20">
			      <li>Mortality rate attributed to unsafe water, unsafe sanitation and lack of hygiene | Per 100,000 population</li>
			    </a>
			    <a href="/playground/health_indi21">
			      <li>Mortality rate attributed to unintentional poisonings | Per 100,000 population</li>
			    </a>
			</ul>
		    
		    <p>
			Target 3.a: Strengthen the implementation of the World Health Organization
                        Framework Convention on Tobacco Control in all countries, as appropriate.
		     </p>	
			<ul>
			   <a href="/playground/health_indi22">
			      <li>Age-standardized prevalence of current tobacco use 
				among persons aged 15 years and older| Percent</li>
			    </a>
			    
			</ul>
		   
		    <p>
			Target 3.b: Support the research and development of vaccines and medicines for the communicable
                        and non-communicable diseases that primarily affect developing countries, provide access to
                        affordable essential medicines and vaccines, in accordance with the Doha Declaration on the
                        TRIPS Agreement and Public Health, which affirms the right of developing countries to use to
                        the full the provisions in the Agreement on Trade-Related Aspects of
                        Intellectual Property Rights regarding flexibilities to protect public health, and,
                        in particular, provide access to medicines for all.
		    </p>
			<ul>
			   <a href="/playground/health_indi23">
			      <li>Proportion of the target population covered by all 
                              vaccines included in their national programme | Percent</li>
			    </a>
			   <a href="/playground/health_indi24">
			      <li>Total net official development assistance to medical 
                              research and basic health sectors | Percent</li>
			    </a>
			    <a href="/playground/health_indi25">
			      <li>Proportion of health facilities that have a core set of 
				relevant essential medicines available and affordable on a 
				sustainable basis | Percent</li>
			    </a>
			</ul>
		    
		    
		    <p>
			Target 3.c: Substantially increase health financing and the recruitment, development, training
                        and retention of the health workforce in developing countries, especially in least developed
                        countries and small island developing States.
		    </p>
 
			<ul>
			    <a href="/playground/health_indi26">
			       <li>Health worker density and distribution| Per 1,000 population</li>
			    </a>
			</ul>
			
		   <p>
			Target 3.d: Strengthen the capacity of all countries, in particular 
				developing countries, for early warning, risk reduction and 
				management of national and global health risks.
		    </p>
 
			<ul>
			    <a href="/playground/health_indi27">
			        <li>International Health Regulations (IHR) capacity 
				and health emergency preparedness </li>
			    </a>
			</ul>		
		</div>
	    </div>
            
	    
	    <div id="SDG4" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG 4:Quality Education</h1>
		<div>
		    <p>
			Target 4.1: By 2030, ensure that all girls and boys complete free,
                        equitable and quality primary and secondary education leading to relevant and effective learning outcomes
		    </p>
			 <ul>
			   <a href="/playground/education_indi1">
			      <li>Proportion of children and young people (a) in 
				grades 2/3; (b) at the end of primary; and (c) at the end of 
				lower secondary achieving at least a minimum proficiency 
				level in (i) reading and (ii) mathematics by sex | Percent</li>
			    </a>
			</ul>
		    
		     <p>
		          Target 4.2: By 2030, ensure that all girls and boys have access to quality early
                        childhood development, care and pre-primary education so that they are ready for primary education.
		     </p>
			<ul>
			   <a href="/playground/education_indi2">
			      <li>Proportion of children under 5 years of age who are 
				developmentally on track in health, learning and 
				psychosocial well-being, by sex | Percent</li>
			    </a>
			    <a href="/playground/education_indi3">
			      <li>Participation rate in organized learning (one year before the official
			         primary entry age), by sex | Percent</li>
			    </a>
			</ul>
		    
		    <p>
			 Target 4.3: By 2030, ensure equal access for all women and men to affordable and quality
                        technical, vocational and tertiary education, including university.
		    </p>
			<ul>
			   <a href="/playground/education_indi4">
			      <li>Participation rate of youth and adults in formal and non-formal education and
                                  training in the previous 12 months by sex | Percent</li>
			    </a>
			</ul>
		   
		    <p>
			Target 4.4: By 2030, substantially increase the Number of youth and
                        adults who have relevant skills, including technical and vocational skills,
                        for employment, decent jobs and entrepreneurship.
		    </p>
                        <ul>
			   <a href="/playground/education_indi5">
			      <li>Proportion of youth and adults with information and communications
                                 technology (ICT) skill, by type of skills | Percent</li>
			    </a>
			</ul>
                        
                    <p>
			 Target 4.5: By 2030, eliminate gender disparities in education and ensure equal access to all levels of
                        education and vocational training for the vulnerable, including persons with disabilities, indigenous
                        peoples and children in vulnerable situations.	
		    </p>
			<ul>
			   <a href="/playground/education_indi6">
			      <li>Parity indices (female/male, rural/urban, bottom/top 
				wealth quintile and others such as disability status, 
				indigenous peoples and conflict-affected, as data become 
				available) for all education indicators on this list that can 
				be disaggregated | Ratio</li>
			    </a>
			</ul>
			
		    <p>
			Target 4.6: By 2030, ensure that all youth and a substantial proportion of adults,
                        both men and women, achieve literacy and numeracy.
		    </p>
			 <ul>
			   <a href="/playground/education_indi7">
			      <li> Proportion of population in a given age group 
				achieving at least a fixed level of proficiency in functional 
				a literacy and
				b numeracy skills, by sex | Percent</li>
			    </a>
			</ul>
		    
		     <p>
		            Target 4.7: By 2030, ensure that all learners acquire the knowledge 
				and skills needed to promote sustainable development, 
				including, among others, through education for sustainable 
				development and sustainable lifestyles, human rights, gender 
				equality, promotion of a culture of peace and non-violence, 
				global citizenship and appreciation of cultural diversity and 
				of culture�s contribution to sustainable development.
		     </p>
			<ul>
			   <a href="/playground/education_indi8">
			      <li> Extent to which
			        i global citizenship education and 
				ii education for sustainable developmentincluding 
				gender equality and human rights are mainstreamed at all 
				levels in
				a. national education policies
				b. curricula
				c. teacher education and
				d. student assessment| Percent</li>
			    </a>
			</ul>
		    
		    <p>
		        Target 4.a: Build and upgrade education facilities that are child, disability and gender
                        sensitive and provide safe, non-violent, inclusive and effective learning environments for all.
		    </p>
			<ul>
			   <a href="/playground/education_indi9">
			      <li>
			        Proportion of schools with access to
			        a. electricity,
				b. the Internet for pedagogical purposes,
				c. computers for pedagogical purposes,
				
				d. adapted infrastructure and 
				materials for students with disabilities,
				e. basic drinking water,
				
				f. single-sex basic sanitation facilities and 
				g. basic handwashing facilities as per the WASH 
				indicator definitions | Percent
			      </li>
			    </a>
			</ul>
		   
		    <p>
			Target 4.b: By 2020, substantially expand globally the Number of scholarships available to developing countries,
                        in particular least developed countries, small island developing States and African countries, for enrolment
                        in higher education, including vocational training and information and communications technology, technical,
                        engineering and scientific programmes, in developed countries and other developing countries.
		    </p>
                        <ul>
			   <a href="/playground/education_indi10">
			      <li>Volume of official development assistance flows 
				for scholarships by sector and type of study 
				scientific programmes, in developed countries and other 
				developing countries | Constant USD</li>
			    </a>
			</ul>
                        
                    <p>
		        Target 4.c: By 2030, substantially increase the supply of qualified teachers, including through international
                        cooperation for teacher training in developing countries, especially least developed countries and small
                        island developing States.
		    </p>
			<ul>
			   <a href="/playground/education_indi11">
			    <li>Proportion of teachers in
			        a. pre-primary, 
				b. primary,
				c. lower secondary; and
				d. upper secondary, 
				education who have received at least the minimum 
				organized teacher training e.g. pedagogical training
				pre-service or in-service required for teaching at the 
				relevant level in a given country | Percent</li>
			    </a>
			</ul>    	
		</div>
	    </div>
	    
            
            
            <div id="SDG5" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG 5:Gender Equality</h1>
		<div>
		    <p>
			Target 5.1: End all forms of discrimination against all women and girls everywhere.
		    </p>
 
			<ul>
			    <a href="/playground/genequality_indi1">
			      <li>Whether or not legal frameworks are in place 
				to promote, enforce and monitor equality and
				non-discrimination on the basis of sex</li>
			    </a>
			</ul>
			
		     <p>
			Target 5.2: Eliminate all forms of violence against all women and girls in the public
                         and private spheres, including trafficking and sexual and other types of exploitation.
		    </p>
			<ul>
			    <a href="/playground/genequality_indi2">
			      <li>Proportion of ever-partnered women subjected to physical or sexual violence
                                  by a current or former intimate partner in the previous 12 months | Percent</li>
			    </a>
			    <a href="/playground/genequality_indi3">
			      <li>Proportion of women and girls aged 15 years and 
				older subjected to sexual violence by persons other than 
				an intimate partner in the previous 12 months, by age and 
				place of occurrence</li> 
			    </a>
			   
			</ul>
		    
		    <p>
			Target 5.3: Eliminate all harmful practices, such as child, early and forced marriage and Female
                        genital mutilation.
		     </p>	
			<ul>
			   <a href="/playground/genequality_indi4">
			      <li>Proportion of women aged 20�24 years who were 
                              married or in a union before age 15 and before age 18 | Percent</li>
			    </a>
			    <a href="/playground/genequality_indi5">
			      <li>Proportion of girls and women aged 15�49 years 
				who have undergone female genital mutilation/cutting, 
				by age | Percent</li>
			    </a>
			</ul>
		   
		    <p>
			Target 5.4: Recognize and value unpaid care and domestic work through the provision of public services,
                        infrastructure and social protection policies and the promotion of shared responsibility within the
                        household and the family as nationally appropriate.
		    </p>
			<ul>
			   <a href="/playground/genequality_indi6">
			       <li>Proportion of time spent on unpaid domestic and care work  by sex, age and location | Percent</li>
			    </a>
			    
			</ul>
		    
		    <p>
			Target 5.5: Ensure women�s full and effective participation and
                        equal opportunities for leadership at all levels of decision-making
                        in political, economic and public life.
		     </p>	
			<ul>
			   <a href="/playground/genequality_indi7">
			       <li>Proportion of seats held by women in (a) national 
				  parliaments and (b) local governments | Percent</li>
 			    </a>
			    <a href="/playground/genequality_indi8">
			       <li>Proportion of women in managerial positions | Percent</li>
			    </a>
			</ul>
			
		      <p>
			Target 5.6: Ensure universal access to sexual and reproductive health and reproductive rights
                        as agreed in accordance with the Programme of Action of the International Conference on
                        Population and Development and the Beijing Platform for Action and the outcome  documents
                        of their review conferences.
		    </p>
			<ul>
			    <a href="/playground/genequality_indi9">
			      <li>Proportion of women aged 15�49 years who make 
				their own informed decisions regarding sexual relations, 
				contraceptive use and reproductive health care | Percent</li>
			    </a>
			    <a href="/playground/genequality_indi10">
			       	<li>Number of countries with laws and regulations that 
				guarantee full and equal access to women and men aged 
				15 years and older to sexual and reproductive health care, 
				information and education</li>
					   
			    </a>
			   
			</ul>
		    
		    <p>
			Target 5.a: Undertake reforms to give women equal rights to 
		   economic resources, as well as access to ownership and 
		   control over land and other forms of property, financial 
		   services, inheritance and natural resources, in accordance 
		   with national laws.
		     </p>	
			<ul>
			   <a href="/playground/genequality_indi11">
			      <li>Proportion of total agricultural population with 
				ownership or secure rights over agricultural land, by sex; 
				and (b) share of women among owners or rights-bearers of 
				agricultural land, by type of tenure| Percent
			      </li>
			    </a>
			    <a href="/playground/genequality_indi12">
			       <li>Proportion of countries where the legal framework 
				(including customary law) guarantees women�s equal 
				rights to land ownership and/or control
			       </li>
			    </a>
			</ul>
		   
		    <p>
			Target 5.b: Enhance the use of enabling technology, in particular information and
                        communications technology, to promote the empowerment of women.
		    </p>
			<ul>
			   <a href="/playground/genequality_indi13">
			      <li>Proportion of individuals who own a mobile telephone | Percent</li>
			    </a>
			</ul>
		    
		    <p>
			Target 5.c: Adopt and strengthen sound policies and enforceable 
             		   legislation for the promotion of gender equality and the 
		           empowerment of all women and girls at all levels.
		     </p>	
			<ul>
			   <a href="/playground/genequality_indi14">
			      <li>Proportion of countries with systems to track and 
                                 make public allocations for gender equality and women�s 
		                 empowerment| Percent</li>
			    </a>
			</ul>
			
		</div>
	    </div>
            
	    
	    <div id="SDG6" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG 6:Clean Water and Sanitation</h1>
		<div>
		    <p>
			Target 6.1: By 2030, achieve universal and equitable access to safe and affordable drinking water for all.
		    </p>
			 <ul>
			   <a href="/playground/sanitation_indi1">
			      <li> Proportion of population using safely managed drinking water services | Percent</li>
			    </a>
			</ul>
		    
		     <p>
		          Target 6.2: By 2030, achieve access to adequate and equitable sanitation and hygiene
                        for all and end open defecation, paying special attention to the needs of women and girls
                        and those in vulnerable situations.
		     </p>
			<ul>
			   <a href="/playground/sanitation_indi2">
			       <li>Proportion of population using (a) safely managed 
		                 sanitation services and (b) a hand-washing facility with 
		                 soap and water | Percent</li>
			    </a>
			</ul>
		    
		    <p>
				Target 6.3:By 2030, improve water quality by reducing pollution, 
			   eliminating dumping and minimizing release of hazardous 
			   chemicals and materials, halving the proportion of untreated 
			   wastewater and substantially increasing recycling and safe 
			   reuse globally.
		    </p>
			<ul>
			   <a href="/playground/sanitation_indi3">
			      <li>Proportion of wastewater safely </li>
			    </a>
			    <a href="/playground/sanitation_indi4">
			       <li>  Proportion of bodies of water with good ambient 
		               water quality| Percentt</li> 
			    </a>
			</ul>
		   
		    <p>
			Target 6.4: By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable
                        withdrawals and supply of freshwater to address water scarcity and substantially reduce the Number of people
                        suffering from water scarcity.
		    </p>
                        <ul>
			   <a href="/playground/sanitation_indi5">
			       <li>Change in water-use efficiency over time</li>
			    </a>
			    <a href="/playground/sanitation_indi6">
			      <li>Level of water stress: freshwater withdrawal as a proportion of available freshwater resources | Percentt</li>
			    </a>
			</ul>
                        
                    <p>
		         Target 6.5: By 2030, implement integrated water resources management at all levels,
                        including through transboundary cooperation as appropriate.
		    </p>
			<ul>
			   <a href="/playground/sanitation_indi7">
			      <li>Degree of integrated water resources management implementation (0�100)</li>
			    </a>
			    <a href="/playground/sanitation_indi8">
			       <li>Proportion of transboundary basin area with an operational arrangement
			          for water cooperation | Percent</li>
			    </a>
			</ul>
			
		   <p>
		        Target 6.6: By 2020, protect and restore water-related ecosystems, including mountains,
			  forests, wetlands, rivers, aquifers and lakes.
		    </p>
			<ul>
			   <a href="/playground/sanitation_indi9">
			       <li>Change in the extent of water-related ecosystems over time</li> 
			    </a>
			</ul>
		   
		    <p>
			Target 6.a: By 2030, expand international cooperation and capacity-building support to developing countries
                        in water- and sanitation-related activities and programmes, including water harvesting, desalination, 
                        water efficiency, wastewater treatment, recycling and reuse technologies.
		    </p>
                        <ul>
			   <a href="/playground/sanitation_indi10">
			       <li> Amount of water- and sanitation-related official development assistance
			       that is part of a government-coordinated spending plan</li>
			    </a>
			</ul>
                        
                    <p>
		         Target 6.b: Support and strengthen the participation of local communities in improving water and sanitation management.
		    </p>
			<ul>
			   <a href="/playground/sanitation_indi11">
			      <li> Proportion of local administrative units with established and operational policies and
			      procedures for participation of local communities in water and sanitation management  | Percent</li>
			    </a>
			</ul>
			
		</div>
	    </div>
            
            
            <div id="SDG7" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG 7:Renewable Energy</h1>
		<div>
		    <p>
			Target 7.1: By 2030, ensure universal access to affordable, reliable and modern energy services.
		    </p>
 
			<ul>
			    <a href="/playground/energy_indi1">
			      <li> Proportion of population with access to electricity</li>
			    </a>
			    <a href="/playground/energy_indi2">
			     <li> Proportion of population with primary reliance on clean fuels and technology</li>
			    </a>
			</ul>
		     <p>
			Target 7.2: By 2030, increase substantially the share of renewable energy in the global energy mix.
		    </p>
			<ul>
			    <a href="/playground/energy_indi3">
			      <li>Renewable energy share in the total final energy consumption | Percent</li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 7.3: By 2030, double the global rate of improvement in energy efficiency.
		     </p>	
			<ul>
			   <a href="/playground/energy_indi4">
			      <li>Energy intensity measured in terms of primary energy and GDP | Percentt</li>
			    </a>
			</ul>
		   
		    <p>
			Target 7.a: By 2030, enhance international cooperation to facilitate 
                                access to clean energy research and technology, including 
                                renewable energy, energy efficiency and advanced and 
                                cleaner fossil-fuel technology, and promote investment in 
                                energy infrastructure and clean energy technology.
		    </p>
			<ul>
			   <a href="/playground/energy_indi5">
			       <li>International financial flows to developing 
                                    countries in support of clean energy research and 
                                    development and renewable energy production, including 
                                    in hybrid systems | Percentt</li>
			    </a>
			</ul>
		    
		    <p>
			Target 7.b: By 2030, expand infrastructure and upgrade technology for supplying modern and sustainable
                        energy services for all in developing countries, in particular least developed countries, small island
                        developing States and landlocked developing countries, in accordance with their respective
                        programmes of support.
		    </p>
			<ul>
			   <a href="/playground/energy_indi6">
			      <li>Investments in energy efficiency as a proportion of GDP and the amount of foreign
                            direct investment in financial transfer for infrastructure and technology to
                            sustainable development services| Percentt</li> 
			    </a>
			</ul>
		    
		</div>
	    </div>
            
	    
	    <div id="SDG8" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG 8:Good Jobs and Economic Growth</h1>
		<div>
		    <p>
			Target 8.1: Sustain per capita economic growth in accordance with national circumstances and,
                        in particular, at least 7 per cent gross domestic product growth per annum in the least developed countries.
		    </p>
			 <ul>
			   <a href="/playground/employment_indi1">
			       <li>Annual growth rate of real GDP per capita | Percent</li>
			    </a>
			</ul>
		    
		     <p>
			Target 8.2: Achieve higher levels of economic productivity through diversification, technological
                        upgrading and innovation, including through a focus on high-value added and labour-intensive sectors.
		      </p>
			<ul>
			   <a href="/playground/employment_indi2">
			      <li>Annual growth rate of real GDP per employed person | Percent</li> 
			    </a>
			</ul>
		    
		    <p>
			Target 8.3: Promote development-oriented policies that support productive activities, decent job creation,
                        entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and
                        medium-sized enterprises, including through access to financial services.
		    </p>
			<ul>
			   <a href="/playground/employment_indi3">
			       <li>Proportion of informal employment in non-agriculture employment, by sex| Percent</li>
			    </a>
			</ul>
		   
		    <p>
			Target 8.4: Improve progressively, through 2030, global resource efficiency in consumption and production and
                        endeavour to decouple economic growth from environmental degradation, in accordance with the 10-Year Framework 
                        of Programmes on Sustainable Consumption and Production, with developed countries taking the lead.
		    </p>
                        <ul>
			   <a href="/playground/employment_indi4">
			      <li>Material footprint, Material footprint per capita 
                                Material footprint per unit of GDP | Metric Tons</li>
			    </a>
			    <a href="/playground/employment_indi5">
			      <li>Domestic material consumption, Domestic material consumption per capita 
                                Domestic material consumption per unit of GDP | Metric Tons</li>
			    </a>
			</ul>
                        
                    <p>
			Target 8.5: By 2030, achieve full and productive employment and decent work for all women and men,
                        including for young people and persons with disabilities, and equal pay for work of equal value.
		    </p>
			<ul>
			   <a href="/playground/employment_indi6">
			      <li>Average hourly earnings of female and male employees, by occupation, age and
			         persons with disabilities | Local currency</li>
			    </a>
			    <a href="/playground/employment_indi7">
			       <li>Unemployment rate, by sex, age and persons with disabilities | Local currency</li>
			    </a>
			</ul>
			
		    <p>
			Target 8.6: By 2020, substantially reduce the proportion of youth not in employment, education or training.
		    </p>
			<ul>
			   <a href="/playground/employment_indi8">
			       <li>Proportion of youth (aged 15�24 years) not in education, employment or training | Percent</li>
			    </a>
			</ul>
		   
		    <p>
			Target 8.7: Take immediate and effective measures to eradicate forced labour, end modern slavery
                        and human trafficking and secure the prohibition and elimination of the worst forms of child labour,
                        including recruitment and use of child soldiers, and by 2025 end child labour in all its forms
		    </p>
                        <ul>
			   <a href="/playground/employment_indi9">
			      <li>Proportion and number of children aged 5�17 years engaged in child labour, by sex and age| Percent</li>
			    </a>
			</ul>
                        
                    <p>
			Target 8.8: Protect labour rights and promote safe and secure working environments for all workers,
                        including migrant workers, in particular women migrants, and those in precarious employment.
		    </p>
			<ul>
			   <a href="/playground/employment_indi10">
			      <li> Frequency rates of fatal and non-fatal occupational injuries, by sex and migrant
			         status | Per 100,000 employees</li>
			    </a>
			    <a href="/playground/employment_indi11">
			      <li>Level of national compliance with labour rights (freedom of association and
				collective bargaining) based on International Labour Organization (ILO) textual
			        sources and national legislation, by sex and migrant status | Per 100,000 employees</li>
			    </a>
			</ul>
			
		   <p>
			Target 8.9: By 2030, devise and implement policies to promote 
		          sustainable tourism that creates jobs and promotes local 
		          culture and products.
		    </p>
			<ul>
			   <a href="/playground/employment_indi12">
			       <li> Tourism direct GDP as a proportion of total GDP and in growth rate</li>
			    </a>
			    <a href="/playground/employment_indi13">
			       <li>Proportion of jobs in sustainable tourism industries out of total tourism jobs | Percent</li>
			    </a>
			</ul>
		   
		    <p>
			Target 8.10: Strengthen the capacity of domestic financial institutions
                        to encourage and expand access to banking, insurance and financial services for all.
		    </p>
                        <ul>
			   <a href="/playground/employment_indi14">
			      <li>(a) Number of commercial bank branches per 100,000 adults and (b) number
			         of automated teller machines (ATMs) per 100,000 adults | Per 100,000 population</li>
			    </a>
			    <a href="/playground/employment_indi15">
			      <li>Proportion of adults (15 years and older) with an account at a bank or other
			     financial institution or with a mobile-money-service provider | Percent</li>
			    </a>
			</ul>
                        
                    <p>
			Target 8.a: Increase Aid for Trade support for developing countries, in particular least developed
                        countries, including through the Enhanced Integrated Framework for Trade-related Technical Assistance
                        to Least Developed Countries.
		    </p>
			<ul>
			   <a href="/playground/employment_indi16">
			    <li>Aid for Trade commitments and disbursements | Constant USD</li>
			    </a>
			    
			</ul>
			
		    <p>
			Target 8.b: By 2020, develop and operationalize a global strategy for youth
			employment and implement the Global Jobs Pact of the International Labour Organization.
		    </p>
                        <ul>
			   <a href="/playground/employment_indi17">
			      <li>Existence of a developed and operationalized national
			    strategy for youth employment, as a distinct strategy or as
			    part of a national employment strategy</li>
			    </a>
			</ul>
                			
		</div>
	    </div>
            
            
            <div id="SDG9" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG 9:Industry, Innovation and Infrastructure</h1>
		<div>
		    <p>
			Target 9.1: Develop quality, reliable, sustainable and resilient infrastructure, including
                        regional and transborder infrastructure, to support economic development and human well-being,
                        with a focus on affordable and equitable access for all.
		    </p>
 
			<ul>
			    <a href="/playground/industry_indi1">
			      <li> Proportion of the rural population who live within 2 km of an all-season road| Percent</li>
			    </a>
			    <a href="/playground/industry_indi2">
			      <li>Passenger and freight volumes, by mode of transport | Number</li>
			    </a>
			</ul>
		     <p>
			Target 9.2: Promote inclusive and sustainable industrialization and, by 2030, significantly raise
                        industry�s share of employment and gross domestic product, in line with national circumstances, and
                        double its share in least developed countries.
		    </p>
			<ul>
			    <a href="/playground/industry_indi3">
			      <li>Manufacturing value addedas a proportion of GDP and per capita | Constant USD</li>
			    </a>
			    <a href="/playground/industry_indi4">
			      <li>Manufacturing employment as a proportion of total employment | Percent</li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 9.3: Increase the access of small-scale industrial and other 
				      enterprises, in particular in developing countries, to financial 
				      services, including affordable credit, and their integration 
				      into value chains and markets.
		     </p>	
			<ul>
			   <a href="/playground/industry_indi5">
			      <li> Proportion of small-scale industries in total industry value added | Percent</li>
			    </a>
			    <a href="/playground/industry_indi6">
			      <li>Proportion of small-scale industries with a loan or line of credit | Percent</li>
			    </a>
			</ul>
		   
		    <p>
			Target 9.4: By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with
                        increased resource-use efficiency and greater adoption of clean and environmentally sound technologies
                        and industrial processes, with all countries taking action in accordance with their respective capabilities.
		    </p>
			<ul>
			   <a href="/playground/industry_indi7">
			      <li>Emissions of carbon dioxide per unit value added </li>
			    </a>
			</ul>
		    
		    <p>
			Target 9.5: Enhance scientific research, upgrade the technological capabilities of industrial
                        sectors in all countries, in particular developing countries, including, by 2030, encouraging
                        innovation and substantially increasing the Number of research and development workers per 1 million
                        people and public and private research and development spending.
		    </p>
 
			<ul>
			    <a href="/playground/industry_indi8">
			       <li>Research and development (R&D) expenditure as a proportion of GDP | Percent</li>
			    </a>
			    <a href="/playground/industry_indi9">
			      <li>Researchers (in full-time equivalent) per million inhabitants | Per million population</li>
			    </a>
			</ul>
			
		     <p>
			Target 9.a: Facilitate sustainable and resilient infrastructure development in developing countries
                        through enhanced financial, technological and technical support to African countries, least developed
                        countries, landlocked developing countries and small island developing States.
		    </p>
			<ul>
			    <a href="/playground/industry_indi10">
			       <li>Total official international support (official development assistance
				plus other official flows) to infrastructure</li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 9.b: Support domestic technology development, research and innovation in developing countries,
                        including by ensuring a conducive policy environment for, inter alia, industrial diversification and
                        value addition to commodities.
		     </p>	
			<ul>
			   <a href="/playground/industry_indi11">
			      <li>Proportion of medium and high-tech industry value added in total value added | Percent</li>
			    </a>
			</ul>
		   
		    <p>
			Target 9.c: Significantly increase access to information and communications technology and strive
                        to provide universal and affordable access to the Internet in least developed countries by 2020.
		    </p>
			<ul>
			   <a href="/playground/industry_indi12">
			      <li>Proportion of population covered by a mobile network, by technology | Percent</li>
			    </a>
			</ul>
		    
		</div>
	    </div>
            
	    
	    <div id="SDG10" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG 10:Reduced Inequalities</h1>
		<div>
		    <p>
			Target 10.1: By 2030, progressively achieve and sustain income growth of the bottom 
                        40 per cent of the population at a rate higher than the national average.
		    </p>
			 <ul>
			   <a href="/playground/inequalities_indi1">
			      <li>Growth rates of household expenditure or income per capita among the bottom 40 per cent
                                      of the total population | Percent</li>
			    </a>
			</ul>
		    
		     <p>
			Target 10.2: By 2030, empower and promote the social, economic and political inclusion
			of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status.
		      </p>
			<ul>
			   <a href="/playground/inequalities_indi2">
			      <li> Proportion of people living below 50 per cent of median income, by sex,
			      age and persons with disabilities| Percent</li>
			    </a>
			</ul>
		    
		    <p>
			Target 10.3: Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws,
			policies and practices and promoting appropriate legislation, policies and action in this regard.
		    </p>
			<ul>
			   <a href="/playground/inequalities_indi3">
			      <li>Proportion of population reporting having personally felt 
				discriminated against or harassed in the previous 12 months on the basis 
				of a ground of discrimination prohibited under international human 
				rights law | Percent</li>
			    </a>
			</ul>
		   
		    <p>
			Target 10.4: Adopt policies, especially fiscal, wage and social protection policies, and progressively
                        achieve greater equality.
		    </p>
                        <ul>
			   <a href="/playground/inequalities_indi4">
			      <li>Labour share of GDP, comprising wages and social protection transfers | Percent</li>
			    </a>
			</ul>
                        
                    <p>
			Target 10.5: Improve the regulation and monitoring of global financial markets and
			 institutions and strengthen the implementation of such regulations.
		    </p>
			<ul>
			   <a href="/playground/inequalities_indi5">
			      <li>Financial Soundness Indicators | Percent</li>
			    </a>
			</ul>
			
		   <p>
			Target 10.6: Ensure enhanced representation and voice for developing countries in decision-making
                        in global international economic and financial institutions in order to deliver more effective, credible,
                        accountable and legitimate institutions.
		    </p>
			 <ul>
			   <a href="/playground/inequalities_indi6">
			      <li> Proportion of members and voting rights of developing countries in
			         international organizations | Percent</li>
			    </a>
			</ul>
		    
		     <p>
			Target 10.7:  Facilitate orderly, safe, regular and responsible migration and mobility of people,
			including through the implementation of planned and well-managed migration policies.
		      </p>
			<ul>
			   <a href="/playground/inequalities_indi7">
			      <li> Recruitment cost borne by employee as a proportion of monthly income earned
			       in country of destination | Number</li>
			    </a>
			    <a href="/playground/inequalities_indi8">
			      <li> Number of countries with migration policies that facilitate orderly, safe,
			       regular and responsible migration and mobility of people | Number</li> 
			    </a>
			</ul>
		    
		    <p>
			Target 10.a: Implement the principle of special and differential treatment for developing countries,
                        in particular least developed countries, in accordance with World Trade Organization agreements.
		    </p>
			<ul>
			   <a href="/playground/inequalities_indi9">
			      <li>Proportion of tariff lines applied to imports from least developed countries and developing
                                   countries with zero-tariff | Constant USD</li>
			    </a>
			</ul>
		   
		    <p>
			Target 10.b: Encourage official development assistance and financial flows, including foreign direct investment,
                        to States where the need is greatest, in particular least developed countries, African countries, small island
                        developing States and landlocked developing countries, in accordance with their national plans and programmes.
		    </p>
                        <ul>
			   <a href="/playground/inequalities_indi10">
			      <li>Total resource flows for development, by recipient and donor countries and type of flow
			       (e.g. official development assistance, foreign direct investment and other flows)</li>
			    </a>
			</ul>
                        
                    <p>
			Target 10.c: By 2030, reduce to less than 3 per cent the transaction costs of migrant remittances and
                        eliminate remittance corridors with costs higher than 5 per cent.
		    </p>
			<ul>
			   <a href="/playground/inequalities_indi11">
			      <li>Remittance costs as a proportion of the amount remitted | Percent</li>
			    </a>
			</ul>
			
			
		</div>
	    </div>
            
            
            
            <div id="SDG11" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG 11:Sustainable Cities and Communities</h1>
		<div>
		    <p>
			Target 11.1: By 2030, ensure access for all to adequate, safe and affordable housing and
			basic services and upgrade slums.
		    </p>
 
			<ul>
			    <a href="/playground/settlements_indi1">
			      <li>Proportion of urban population living in slums, informal settlements or inadequate housing | Percent</li>
			    </a>
			</ul>
		     <p>
			Target 11.2: By 2030, provide access to safe, affordable, accessible and sustainable transport systems
			for all, improving road safety, notably by expanding public transport, with special attention to the 
			needs of those in vulnerable situations, women, children, persons with disabilities and older persons.
		    </p>
			<ul>
			    <a href="/playground/settlements_indi2">
			      <li>Proportion of population that has convenient access to public transport, by sex,
			         age and persons with disabilities | Percent</li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 11.3: By 2030, enhance inclusive and sustainable urbanization and capacity for participatory,
			integrated and sustainable human settlement planning and management in all countries.
		     </p>	
			<ul>
			   <a href="/playground/settlements_indi3">
			      <li> Ratio of land consumption rate to population growth rate | Ratio </li> 
			    </a>
			    <a href="/playground/settlements_indi4">
				<li>Proportion of cities with a direct participation structure of civil society
				 in urban planning and management that operate regularly and democratically | Percent</li>
			    </a>
			</ul>
		   
		    <p>
			Target 11.4:  Strengthen efforts to protect and safeguard the world�s cultural and natural heritage.
		    </p>
			<ul>
			   <a href="/playground/settlements_indi5">
			      <li>Total expenditure (public and private) per capita spent on the preservation, protection and
			     conservation of all cultural and natural heritage, by type of heritage (cultural, natural, mixed
			     and World Heritage Centre designation), level of government (national, regional and local/municipal),
			     type of expenditure (operating expenditure/investment) and type of private funding (donations in kind,
			     private non-profit sector and sponsorship) | Percent</li>
			    </a>
			</ul>
		    
		    <p>
			Target 11.5: By 2030, significantly reduce the Number of deaths and the Number of people affected and 
                        substantially decrease the direct economic losses relative to global gross domestic product by disasters,
                        including water-related disasters, with a focus on protecting the poor and people in vulnerable situations.
		    </p>
 
			<ul>
			    <a href="/playground/settlements_indi6">
			      <li>Number of deaths, missing persons and directly affected persons attributed
			       to disasters per 100,000 population | Number</li>
			    </a>
			    <a href="/playground/settlements_indi7">
			      <li>Direct economic loss in relation to global GDP, damage to critical infrastructure
			       and number of disruptions to basic services, attributed to disasters| Number</li>
			    </a>
			</ul>
		     <p>
			Target 11.6: By 2030, reduce the adverse per capita environmental impact of cities, including by
                        paying special attention to air quality and municipal and other waste management.
		    </p>
			<ul>
			    <a href="/playground/settlements_indi8">
			      <li>Proportion of urban solid waste regularly collected and with adequate final discharge out
			        of total urban solid waste generated, by cities | Percent</li>
			    </a>
			    <a href="/playground/settlements_indi9">
			       <li>Annual mean levels of fine particulate matter (PM2.5) in cities (population
			         weighted) | Micrograms per cubic meter</li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 11.7: By 2030, provide universal access to safe, inclusive 
			and accessible, green and public spaces, in particular for 
			women and children, older persons and persons with 
			disabilities.
		     </p>	
			<ul>
			   <a href="/playground/settlements_indi10">
			      <li>Average share of the built-up area of cities that is open space for public use for
			         all, by sex, age and persons with disabilities</li>
			    </a>
			    <a href="/playground/settlements_indi11">
			       <li>Proportion of persons victim of physical or sexual harassment, by sex, age,
			         disability status and place of occurrence, in the previous 12 months</li>
			    </a>
			</ul>
		   
		    <p>
			Target 11.a: Support positive economic, social and environmental links between
			urban, peri-urban and rural areas by strengthening national and regional development planning.
		    </p>
			<ul>
			   <a href="/playground/settlements_indi12">
			      <li>Proportion of population living in cities that implement urban and regional
			    development plans integrating population projections and resource needs, by size of city</li>
			    </a>
			</ul>
			
		     <p>
			Target 11.b: By 2020, substantially increase the Number of cities and human settlements adopting and 
                        implementing integrated policies and plans towards inclusion, resource efficiency, mitigation and
                        adaptation to climate change, resilience to disasters, and develop and implement, in line with the Sendai
                        Framework for Disaster Risk Reduction 2015-2030, holistic disaster risk management at all levels.
		    </p>
 
			<ul>
			    <a href="/playground/settlements_indi13">
			      <li>Number of countries that adopt and implement national disaster risk reduction strategies
			    in line with the Sendai Framework for Disaster Risk Reduction 2015�2030 | Number</li>
			    </a>
			    <a href="/playground/settlements_indi14">
			      <li>Proportion of local governments that adopt and implement local disaster risk reduction
			      strategies in line with national disaster risk reduction strategies | Percent</li>
			    </a>
			</ul>
			
		     <p>
			Target 11.c: Support least developed countries, including through financial and technical assistance,
			in building sustainable and resilient buildings utilizing local materials.
		    </p>
			<ul>
			    <a href="/playground/settlements_indi15">
			       <li>Proportion of financial support to the least developed countries that is allocated to the
			    construction and retrofitting of sustainable, resilient and resource-efficient buildings utilizing
			    local materials| Percent</li>
			    </a>
			   
			</ul>
		     
		    			
		</div>
	    </div>
            
	    
	    <div id="SDG12" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG 12:Responsible Consumption</h1>
		<div>
		    <p>
			Target 12.1: Implement the 10-Year Framework of Programmes on 
				      Sustainable Consumption and Production Patterns, all 
				      countries taking action, with developed countries taking the 
				      lead, taking into account the development and capabilities of 
				      developing countries.
		    </p>
			 <ul>
			   <a href="/playground/consumption_indi1">
			      <li>Number of countries with sustainable consumption 
				      and production (SCP) national action plans or SCP 
				      mainstreamed as a priority or a target into national policies
				      </li>
			    </a>
			</ul>
		    
		     <p>
			Target 12.2: By 2030, achieve the sustainable management and efficient use of natural resources.
		      </p>
			<ul>
			   <a href="/playground/consumption_indi2">
			      <li>Material footprint, Material footprint per capita 
                                Material footprint per unit of GDP | Metric Tons</li>
			    </a>
			    <a href="/playground/consumption_indi3">
			      <li>Domestic material consumption, Domestic material consumption per capita 
                                 Domestic material consumption per unit of GDP  | Metric Tons</li>
			    </a>
			</ul>
		    
		    <p>
			Target 12.3: By 2030, halve per capita global food waste at the 
				retail and consumer levels and reduce food losses along 
				production and supply chains, including post-harvest losses.
		    </p>
			<ul>
			   <a href="/playground/consumption_indi4">
			      <li>(a) Food loss index and (b) food waste index | Index</li>
			    </a>
			</ul>
		   
		    <p>
			Target 12.4: By 2020, achieve the environmentally sound management of chemicals and all wastes
                        throughout their life cycle, in accordance with agreed international frameworks, and significantly
                        reduce their release to air, water and soil in order to minimize their adverse impacts on human health
                        and the environment.
		    </p>
                        <ul>
			   <a href="/playground/consumption_indi5">
			       <li>Number of parties to international multilateral 
				      environmental agreements on hazardous waste, and other 
				      chemicals that meet their commitments and obligations in 
				      transmitting information as required by each relevant 
				      agreement</li>
			    </a>
			    <a href="/playground/consumption_indi6">
			      <li>Hazardous waste generated per capita and 
                                proportion of hazardous waste treated, by type of treatment</li> 
			    </a>
			</ul>
                        
                    <p>
			Target 12.5: By 2030, substantially reduce waste generation through 
                              prevention, reduction, recycling and reuse.
		    </p>
		    
			<ul>
			   <a href="/playground/consumption_indi7">
			      <li>National recycling rate, tons of material recycled</li>
			    </a>
			</ul>
			
		   <p>
			Target 12.6: Encourage companies, especially large and 
				      transnational companies, to adopt sustainable practices and 
				      to integrate sustainability information into their reporting 
				      cycle.
		    </p>
			 <ul>
			   <a href="/playground/consumption_indi8">
			      <li>Number of companies publishing sustainability reports</li>
			    </a>
			</ul>
		    
		     <p>
			Target 12.7: Promote public procurement practices that are sustainable, in accordance with
			national policies and priorities.
		      </p>
			<ul>
			   <a href="/playground/consumption_indi9">
			      <li>Number of countries implementing sustainable public procurement policies and action plans</li>
			    </a>
			    
			</ul>
		    
		    <p>
			Target 12.8: By 2030, ensure that people everywhere have the relevant information and awareness
			for sustainable development and lifestyles in harmony with nature.
		    </p>
			<ul>
			   <a href="/playground/consumption_indi10">
			      <li>Extent to which (i) global citizenship education and (ii) education for sustainable development
			    (including climate change education) are mainstreamed in (a) national education policies;
			    (b) curricula; (c) teacher education; and (d) student assessment</li>
			    </a>
			</ul>
		   
		    <p>
			Target 12.a: Support developing countries to strengthen their scientific and technological
			capacity to move towards more sustainable patterns of consumption and production.
		    </p>
                        <ul>
			   <a href="/playground/consumption_indi11">
			       <li> Amount of support to developing countries on research and development for
			    sustainable consumption and production and environmentally sound technologies</li> 
			    </a>
			</ul>
                        
                    <p>
			Target 12.b: Develop and implement tools to monitor sustainable development
			impacts for sustainable tourism that creates jobs and promotes local culture and products.
		    </p>
		    
			<ul>
			   <a href="/playground/consumption_indi12">
			      <li>Number of sustainable tourism strategies or policies and implemented action plans with
			    agreed monitoring and evaluation tools</li>
			    </a>
			</ul>
		    
		    <p>
			Target 12.c:  Rationalize inefficient fossil-fuel subsidies that 
				encourage wasteful consumption by removing market 
				distortions, in accordance with national circumstances, 
				including by restructuring taxation and phasing out those 
				harmful subsidies, where they exist, to reflect their 
				environmental impacts, taking fully into account the specific 
				needs and conditions of developing countries and 
				minimizing the possible adverse impacts on their 
				development in a manner that protects the poor and the 
				affected communities.
		    </p>
		    
			<ul>
			   <a href="/playground/consumption_indi13">
			      <li>Amount of fossil-fuel subsidies per unit of GDP (production and consumption)
			    and as a proportion of total national expenditure on fossil fuels </li>
			    </a>
			</ul>
			
			
		</div>
	    </div>
            
            
            <div id="SDG13" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG 13:Climate Action</h1>
		<div>
		    <p>
			Target 13.1: Strengthen resilience and adaptive capacity to
			climate-related hazards and natural disasters in all countries.
		    </p>
 
			<ul>
			    <a href="/playground/climate_indi1">
			      <li>Number of deaths, missing persons and directly affected persons attributed to
			      disasters per 100,000 population | Number</li>
			    </a>
			    <a href="/playground/climate_indi2">
			      <li> Number of countries that adopt and implement national disaster risk
			      reduction strategies in line with the Sendai Framework for Disaster Risk
			      Reduction 2015�2030| Number</li>
			    </a>
			    <a href="/playground/climate_indi3">
			      <li>Proportion of local governments that adopt and implement local disaster risk
			    reduction strategies in line with national disaster risk reduction strategies | Percent</li> 
			    </a>
			</ul>
			
		     <p>
			Target 13.2: Integrate climate change measures into national policies, strategies and planning.
		    </p>
			<ul>
			    
			    <a href="/playground/climate_indi4">
				<li> Number of countries that have communicated the 
				  establishment or operationalization of an integrated 
				  policy/strategy/plan which increases their ability to adapt 
				  to the adverse impacts of climate change, and  foster 
				  climate resilience and low greenhouse gas emissions 
				  development in a manner that does not threaten food 
				  production (including a national adaptation plan, 
				  nationally determined contribution, national 
				  communication, biennial update report or other)| Number
			       </li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 13.3: Improve education, awareness-raising and human and 
				      institutional capacity on climate change mitigation, 
				      adaptation, impact reduction and early warning.
		     </p>	
			<ul>
			   <a href="/playground/climate_indi5">
			      <li>Number of countries that have integrated 
				mitigation, adaptation, impact reduction and early warning 
				into primary, secondary and tertiary curricula| Number</li>
			    </a>
			    <a href="/playground/climate_indi6">
			      <li>  Number of countries that have communicated the 
				strengthening of institutional, systemic and individual 
				capacity-building to implement adaptation, mitigation and 
				technology transfer, and development actions | Number</li>
			    </a>
			</ul>
		   
		    <p>
			Target 13.a: Implement the commitment undertaken by developed-country parties 
				to the United Nations Framework 
				Convention on Climate Change to a goal of mobilizing 
				jointly $100 billion annually by 2020 from all sources to 
				address the needs of developing countries in the context of 
				meaningful mitigation actions and transparency on 
				implementation and fully operationalize the Green Climate 
				Fund through its capitalization as soon as possible.
		    </p>
			<ul>
			   <a href="/playground/climate_indi7">
			      <li>Mobilized amount of United States dollars per yearbetween 2020 and 2025 accountable
			    towards the $100 billion commitment</li>
			    </a>
			</ul>
			
		    <p>
			Target 13.b: Promote mechanisms for raising capacity for effective 
				climate change-related planning and management in least 
				developed countries and small island developing States, 
				including focusing on women, youth and local and 
				marginalized communities.
		    </p>
			<ul>
			   <a href="/playground/climate_indi8">
			        <li>Number of least developed countries and small 
				island developing States that are receiving specialized 
				support, and amount of support, including finance, 
				technology and capacity-building, for mechanisms for 
				raising capacities for effective climate change-related 
				planning and management, including focusing on women, 
				youth and local and marginalized communities| Number</li>
			    </a>
			</ul>	
		    
		</div>
	    </div>
            
	    
	    <div id="SDG14" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG14:Life Below Water</h1>
		<div>
		    <p>
			Target 14.1: By 2025, prevent and significantly reduce marine 
				      pollution of all kinds, in particular from land-based 
				      activities, including marine debris and nutrient pollution.
		    </p>
			 <ul>
			   <a href="/playground/water_indi1">
			      <li>Index of coastal eutrophication and floating plastic debris density | Index</li>
			    </a>
			</ul>
		    
		     <p>
			Target 14.2: By 2020, sustainably manage and protect marine and 
				      coastal ecosystems to avoid significant adverse impacts, 
				      including by strengthening their resilience, and take action 
				      for their restoration in order to achieve healthy and 
				      productive oceans.
		      </p>
			<ul>
			    <a href="/playground/water_indi2">
			       <li>Proportion of national exclusive economic zones managed
			      using ecosystem-based approaches | Percent</li>
			    </a>
			</ul>
		    
		    <p>
			Target 14.3: Minimize and address the impacts of ocean 
				      acidification, including through enhanced scientific 
				      cooperation at all levels.
		    </p>
			<ul>
			   <a href="/playground/water_indi3">
			      <li>Average marine acidity (pH) measured at agreed suite of representative sampling stations</li>
			    </a>
			</ul>
		   
		    <p>
			Target 14.4: By 2020, effectively regulate harvesting and end overfishing, illegal, unreported and
                        unregulated fishing and destructive fishing practices and implement science-based management plans,
                        in order to restore fish stocks in the shortest time feasible, at least to levels that can produce maximum
                        sustainable yield as determined by their biological characteristics.
		    </p>
                        <ul>
			   <a href="/playground/water_indi4">
			      <li>Proportion of fish stocks within biologically sustainable levels | Percent</li>
			    </a>
			</ul>
                        
                    <p>
			Target 14.5: By 2020, conserve at least 10 per cent of coastal and marine areas, consistent
                        with national and international law and based on the best available scientific information.
		    </p>
			<ul>
			   <a href="/playground/water_indi5">
			       <li>Coverage of protected areas in relation to marine areas | </li>
			    </a>
			</ul>
			
		    <p>
			Target 14.6: By 2020, prohibit certain forms of fisheries subsidies 
				      which contribute to overcapacity and overfishing, eliminate 
				      subsidies that contribute to illegal, unreported and 
				      unregulated fishing and refrain from introducing new such 
				      subsidies, recognizing that appropriate and effective special 
				      and differential treatment for developing and least developed 
				      countries should be an integral part of the World Trade 
				      Organization fisheries subsidies negotiation.
		    </p>
			 <ul>
			   <a href="/playground/water_indi6">
			      <li>Degree of implementation of international instruments aiming to combat illegal,
			    unreported and unregulated fishing</li>
			    </a>
			</ul>
		    
		     <p>
			Target 14.7:By 2030, increase the economic benefits to small island 
				      developing States and least developed countries from the 
				      sustainable use of marine resources, including through 
				      sustainable management of fisheries, aquaculture and 
				      tourism.
		      </p>
			<ul>
			   <a href="/playground/water_indi7">
			      <li>Sustainable fisheries as a proportion of GDP in small island developing States,
			    least developed countries and all countries</li>
			    </a>
			</ul>
		    
		    <p>
			Target 14.a: Increase scientific knowledge, develop research 
				      capacity and transfer marine technology, taking into account 
				      the Intergovernmental Oceanographic Commission Criteria 
				      and Guidelines on the Transfer of Marine Technology, in 
				      order to improve ocean health and to enhance the 
				      contribution of marine biodiversity to the development of 
				      developing countries, in particular small island developing 
				      States and least developed countries.
		    </p>
			<ul>
			   <a href="/playground/water_indi8">
			      <li>Proportion of total research budget allocated to research in the field of marine technology | Percent</li>
			    </a>
			</ul>
		   
		    <p>
			Target 14.b: Provide access for small-scale artisanal fishers to marine resources and markets.
		    </p>
                        <ul>
			   <a href="/playground/water_indi9">
			      <li>Degree of application of a legal/regulatory/policy/institutional
			    framework which recognizes and protects access rights for small-scale fisheries</li>
			    </a>
			</ul>
                        
                    <p>
			Target 14.c: Enhance the conservation and sustainable use of 
				oceans and their resources by implementing international 
				law as reflected in the United Nations Convention on the 
				Law of the Sea, which provides the legal framework for the 
				conservation and sustainable use of oceans and their 
				resources, as recalled in paragraph 158 of �The future we 
				want�.
		    </p>
			<ul>
			   <a href="/playground/water_indi10">
			      <li>Number of countries making progress in ratifying, 
				accepting and implementing through legal, policy and 
				institutional frameworks, ocean-related instruments that 
				implement international law, as reflected in the United 
				Nations Convention on the Law of the Sea, for the 
				conservation and sustainable use of the oceans and their 
				resources</li>
			    </a>
			</ul>
			
			
		</div>
	    </div>
            
            
            <div id="SDG15" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG 15:Life on Land</h1>
		<div>
		    <p>
			Target 15.1: By 2020, ensure the conservation, restoration and sustainable use of terrestrial and
                        inland freshwater ecosystems and their services, in particular forests, wetlands, mountains and drylands,
                        in line with obligations under international agreements.
		    </p>
 
			<ul>
			    <a href="/playground/land_indi1">
			       <li>Forest area as a proportion of total land area | Percent</li>
			    </a>
			    <a href="/playground/land_indi2">
			      <li>Proportion of important sites for terrestrial and freshwater biodiversity
			      that are covered by protected areas, by ecosystem type| Percent</li>
			    </a>
			</ul>
		     <p>
			Target 15.2: By 2020, promote the implementation of sustainable management of all types of forests,
                         halt deforestation, restore degraded forests and substantially increase afforestation and reforestation globally.
		    </p>
			<ul>
			    <a href="/playground/land_indi3">
			      <li>Progress towards sustainable forest management| Percent</li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 15.3: By 2030, combat desertification, restore degraded 
				      land and soil, including land affected by desertification, 
				      drought and floods, and strive to achieve a land degradation-neutral world.
		     </p>	
			<ul>
			   <a href="/playground/land_indi4">
			      <li>Proportion of land that is degraded over total land area</li>
			    </a>
			</ul>
		   
		    <p>
			Target 15.4: By 2030, ensure the conservation of mountain ecosystems, including their biodiversity, 
                        in order to enhance their capacity to provide benefits that are essential for sustainable development.
		    </p>
			<ul>
			   <a href="/playground/land_indi5">
			      <li>Coverage by protected areas of important sites for mountain biodiversity | Percent</li>
			    </a>
			    <a href="/playground/land_indi6">
			      <li>Mountain Green Cover Index | Square kilometers</li> 
			    </a>
			</ul>
			
		    <p>
			Target 15.5: Take urgent and significant action to reduce the degradation of natural habitats,
                        halt the loss of biodiversity and, by 2020, protect and prevent the extinction of threatened species.
		    </p>
 
			<ul>
			    <a href="/playground/land_indi7">
			      <li>Red List Index | Index</li>
			    </a>
			</ul>
		     <p>
			Target 15.6: Promote fair and equitable sharing of the benefits arising from the utilization of genetic
                        resources and promote appropriate access to such resources, as internationally agreed.
		    </p>
			<ul>
			    <a href="/playground/land_indi8">
			      <li>Number of countries that have adopted legislative, administrative and policy
			    frameworks to ensure fair and equitable sharing of benefits | Number</li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 15.7: Take urgent action to end poaching and trafficking of 
				      protected species of flora and fauna and address both 
				      demand and supply of illegal wildlife products.
		     </p>	
			<ul>
			   <a href="/playground/land_indi9">
			      <li>Proportion of traded wildlife that was poached or illicitly trafficked</li>
			    </a>
			</ul>
		   
		    <p>
			Target 15.8: By 2020, introduce measures to prevent the 
				      introduction and significantly reduce the impact of invasive 
				      alien species on land and water ecosystems and control or 
				      eradicate the priority species.
		    </p>
			<ul>
			   <a href="/playground/land_indi10">
			      <li>Proportion of countries adopting relevant national
			    legislation and adequately resourcing the prevention or control of invasive alien species </li>
			    </a>
			</ul>
			
		     <p>
			Target 15.9: By 2020, integrate ecosystem and biodiversity values into national
			and local planning, development processes, poverty reduction strategies and accounts.
		    </p>
 
			<ul>
			    <a href="/playground/land_indi11">
			       <li>Progress towards national targets established in accordance with 
                              Aichi Biodiversity Target of the Strategic Plan for (2011-2020) Biodiversity  </li>
			    </a>
			</ul>
		     <p>
			Target 15.a: Mobilize and significantly increase financial resources from all
                        sources to conserve and sustainably use biodiversity and ecosystems.
		    </p>
			<ul>
			    <a href="/playground/land_indi12">
			      <li>Official development assistance and public expenditure on 
                               conservation and sustainable use of biodiversity and ecosystems</li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 15.b: Mobilize significant resources from all sources and at all levels to finance sustainable
                        forest management and provide adequate incentives to developing countries to advance such management,
                        including for conservation and reforestation.
		     </p>	
			<ul>
			   <a href="/playground/land_indi13">
			      <li>Official development assistance and public expenditure on conservation and
			      sustainable use of biodiversity and ecosystems</li>
			    </a>
			</ul>
		   
		    <p>
			Target 15.c: Enhance global support for efforts to combat poaching and trafficking of protected species,
			including by increasing the capacity of local communities to pursue sustainable livelihood opportunities.
		    </p>
			<ul>
			   <a href="/playground/land_indi14">
			      <li>Proportion of traded wildlife that was poached or illicitly trafficked</li>
			    </a>
			</ul> 	
		    
		</div>
	    </div>
            
	    
	    <div id="SDG16" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG 16:Peace and Justice</h1>
		<div>
		    <p>
			Target 16.1: Significantly reduce all forms of violence and related death rates everywhere.
		    </p>
			 <ul>
			   <a href="/playground/peace_indi1">
			       <li>Number of victims of intentional homicide Per 100,000 population, by sex</li>
			    </a>
			    <a href="/playground/peace_indi2">
			      <li>Conflict-related deaths per 100,000 population, by sex, age and cause</li>
			    </a>
			    <a href="/playground/peace_indi3">
			        <li>Proportion of population subjected to (a) physical violence,
			       (b) psychological violence and (c) sexual violence in the previous 12 months</li>
			    </a>
			    <a href="/playground/peace_indi4">
			      <li>Proportion of population that feel safe walking alone around the area they</li>
			    </a>
			</ul>
		    
		     <p>
			Target 16.2: End abuse, exploitation, trafficking and all forms of violence against and torture of children.
		      </p>
			<ul>
			   <a href="/playground/peace_indi5">
			      <li>Proportion of children aged 1�17 who experienced any physical punishment and/or psychological aggression by
                                   caregivers in the past month | Percent</li>
			    </a>
			    <a href="/playground/peace_indi6">
			      <li>Number of victims of human trafficking per 100,000 population | Number</li>
			    </a>
			    <a href="/playground/peace_indi7">
			      <li>Proportion of young women and men aged 18-29 years who experienced
			       sexual violence by age 18 | Percent</li> 
			    </a>
			</ul>
		    
		    <p>
			Target 16.3: Promote the rule of law at the national and international levels and ensure equal access
                        to justice for all.
		    </p>
			<ul>
			   <a href="/playground/peace_indi8">
			      <li>Proportion of victims of violence in the previous 12 months who reported their
			     victimization to competent authorities or other officially recognized conflict
			     resolution mechanisms</li>
			    </a>
			    <a href="/playground/peace_indi9">
			       <li>Unsentenced detainees as a proportion of overall prison population | Percent</li>
			    </a>
			</ul>
		   
		    <p>
			Target 16.4: By 2030, significantly reduce illicit financial and arms flows, strengthen
			the recovery and return of stolen assets and combat all forms of organized crime.
		    </p>
                        <ul>
			   <a href="/playground/peace_indi10">
			       <li>Total value of inward and outward illicit financial flows (in current United States dollars) </li>
			    </a>
			    <a href="/playground/peace_indi11">
			      <li>Proportion of seized, found or surrendered arms whose illicit origin or context has been
			    traced or established by a competent authority in line with international instruments</li>
			    </a>
			</ul>
                        
                    <p>
			Target 16.5: Substantially reduce corruption and bribery in all their forms.
		    </p>
			<ul>
			   <a href="/playground/peace_indi12">
			      <li>Proportion of persons who had at least one contact with a public official and who paid a
			      bribe to a public official, or were asked for a bribe by those public officials, during the
			      previous 12 months</li>
			    </a>
			    <a href="/playground/peace_indi13">
			       <li>Proportion of businesses that had at least one contact with a public official and that paid
			       a bribe to a public official, or were asked for a bribe by those public officials during the
			       previous 12 months</li>
			    </a>
			</ul>
			
		    <p>
			Target 16.6: Develop effective, accountable and transparent institutions at all levels.
		    </p>
			 <ul>
			   <a href="/playground/peace_indi14">
			       <li>Primary government expenditures as a proportion of original approved budget,
			          by sector (or by budget codes or similar)</li>
			    </a>
			    <a href="/playground/peace_indi15">
			      <li>Proportion of population satisfied with their last experience of public services</li>
			    </a>
			</ul>
		    
		     <p>
			Target 16.7: Ensure responsive, inclusive, participatory and representative decision-making at all levels.
		      </p>
			<ul>
			   <a href="/playground/peace_indi16">
			      <li>Proportions of positions in national and local institutions, including (a) the legislatures;
				(b) the public service; and (c) the judiciary, compared to national distributions,
				 by sex, age, persons with disabilities and population groups</li>
			    </a>
			    <a href="/playground/peace_indi17">
			       <li>Proportion of population who believe decision-making is inclusive and
			        responsive, by sex, age, disability and population group</li>
			    </a>
			</ul>
		    
		    <p>
			Target 16.8: Broaden and strengthen the participation of developing countries in the
                        institutions of global governance.
		    </p>
			<ul>
			   <a href="/playground/peace_indi18">
			       <li>Proportion of members and voting rights of developing
			          countries in international organizations</li>
			    </a>
			</ul>
		   
		    <p>
			Target 16.9: By 2030, provide legal identity for all, including birth registration.
		    </p>
                        <ul>
			   <a href="/playground/peace_indi19">
			      <li>Proportion of children under 5 years of age whose births have been
			        registered with a civil authority, by age</li>
			    </a>
			</ul>
                        
                    <p>
			Target 16.10: Ensure public access to information and protect fundamental freedoms, in accordance
                        with national legislation and international agreements.
		    </p>
			<ul>
			   <a href="/playground/peace_indi20">
			      <li>Number of verified cases of killing, kidnapping, enforced disappearance, arbitrary detention
			         and torture of journalists, associated media personnel, trade unionists and human rights
				 advocates in the previous 12 months | Number</li>
			    </a>
			    <a href="/playground/peace_indi21">
			       <li>Number of countries that adopt and implement constitutional, statutory and/or policy
                                   guarantees for public access to information | Number</li>
			    </a>
			</ul>
			
		     <p>
			Target 16.a: Strengthen relevant national institutions, including through international cooperation,
                        for building capacity at all levels, in particular in developing countries, to prevent violence and combat
                        terrorism and crime.
		    </p>
                        <ul>
			   <a href="/playground/peace_indi22">
			       <li> Existence of independent national human rights
			     institutions in compliance with the Paris Principles</li>
			    </a>
			</ul>
                        
                    <p>
			Target 16.b: Promote and enforce non-discriminatory laws and policies for sustainable development.
		    </p>
			<ul>
			   <a href="/playground/peace_indi23">
			       <li>Proportion of population reporting having personally felt discriminated against or harassed
			    in the previous 12 months on the basis of a ground of discrimination prohibited under
			    international human rights law</li>
			    </a>
			</ul>
			
			
		</div>
	    </div>
            
            
            
            <div id="SDG17" className="collapseCont">
		<h1><span className="arrow-r"></span>SDG17:Partnerships for the Goals</h1>
		<div>
		    <p>
			Target 17.1: Strengthen domestic resource mobilization, including through 
			international support to developing countries, to improve domestic 
			capacity for tax and other revenue collection.
		    </p>
 
			<ul>
			    <a href="/playground/partnership_indi1">
			    <li>Total government revenue as a proportion of GDP, by source</li>
			    </a>
			    <a href="/playground/partnership_indi2">
			    <li>Proportion of domestic budget funded by domestic taxes</li>
			    </a>
			</ul>
		     <p>
			Target 17.2: Developed countries to implement fully their official development assistance commitments,
                        including the commitment by many developed countries to achieve the target of 0.7 per cent of gross
                        national income for official development assistance (ODA/GNI) to developing countries and 0.15 to 0.20
                        per cent of ODA/GNI to least developed countries; ODA providers are encouraged to consider setting a
                        target to provide at least 0.20 per cent of ODA/GNI to least developed countries.
		    </p>
			<ul>
			    <a href="/playground/partnership_indi3">
			    <li>Net official development assistance, total and to least developed countries, as a
			    proportion of the Organization for Economic Cooperation and Development (OECD)
			    Development Assistance Committee donors� gross national income (GNI)</li>
			    </a>
			    			   
			</ul>
		    
		    <p>
			Target 17.3: Mobilize additional financial resources for developing countries from multiple sources.
		     </p>	
			<ul>
			   <a href="/playground/partnership_indi4">
			    <li>Foreign direct investment (FDI), official development assistance and South-South cooperation
			    as a proportion of total domestic budget</li>
			    </a>
			    <a href="/playground/partnership_indi5">
			    <li> Volume of remittances (in United States dollars) as a proportion of total GDP | Percent</li>
			    </a>
			</ul>
		   
		    <p>
			Target 17.4: Assist developing countries in attaining long-term debt sustainability through
                        coordinated policies aimed at fostering debt financing, debt relief and debt restructuring, as
                        appropriate, and address the external debt of highly indebted poor countries to reduce debt distress.
		    </p>
			<ul>
			   <a href="/playground/partnership_indi6">
			    <li>Debt service as a proportion of exports of goods and services | Percent</li>
			    </a>
			</ul>
		    
                    <p>
			Target 17.5: Adopt and implement investment promotion regimes for least developed countries.
		    </p>
 
			<ul>
			    <a href="/playground/partnership_indi7">
			    <li>Number of countries that adopt and implement investment 
                               promotion regimes for least developed countries Technology</li>
			    </a>
			</ul>
		     <p>
			Target 17.6: Enhance North-South, South-South and triangular regional and international cooperation
                        on and access to science, technology and innovation and enhance knowledge-sharing on mutually agreed
                        terms, including through improved coordination among existing mechanisms, in particular at the
                        United Nations level, and through a global technology facilitation mechanism.
		    </p>
			<ul>
			    <a href="/playground/partnership_indi8">
			    <li>Number of science and/or technology cooperation agreements and programmes
			        between countries, by type of cooperation</li>
			    </a>
			    <a href="/playground/partnership_indi9">
			    <li>Fixed Internet broadband Subscriptions per 100 inhabitants, by speed</li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 17.7: Promote the development, transfer, dissemination and diffusion of environmentally sound
			technologies to developing countries on favourable terms, including on concessional and preferential
			terms, as mutually agreed.
		     </p>	
			<ul>
			   <a href="/playground/partnership_indi10">
			    <li>Total amount of approved funding for developing countries to promote the
			    development, transfer, dissemination and diffusion of environmentally sound technologies</li>
			    </a>
			   
			</ul>
		   
		    <p>
			Target 17.8: Fully operationalize the technology bank and science, technology and innovation
                        capacity-building mechanism for least developed countries by 2017 and enhance the use of enabling
                        technology, in particular information and communications technology.
		    </p>
			<ul>
			   <a href="/playground/partnership_indi11">
			    <li>Proportion of individuals using the Internet Capacity-building</li>
			    </a>
			</ul>
                        
                    <p>
			Target 17.9: Enhance international support for implementing effective and targeted
                        capacity-building in developing countries to support national plans to implement all
                        the Sustainable Development Goals, including through North-South, South-South and triangular cooperation.
		    </p>
 
			<ul>
			    <a href="/playground/partnership_indi12">
			      <li>Dollar value of financial and technical assistance (including through North-South,
                                   South-South and triangular cooperation) committed to developing countries | Constant USD</li>
			    </a>
			</ul>
		     <p>
			Target 17.10: Promote a universal, rules-based, open, non-discriminatory and equitable
                        multilateral trading system under the World Trade Organization, including through the conclusion
                        of negotiations under its Doha Development Agenda.
		    </p>
			<ul>
			    <a href="/playground/partnership_indi13">
			       <li>Worldwide weighted tariff-average </li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 17.11: Significantly increase the exports of developing countries, in particular
                        with a view to doubling the least developed countries� share of global exports by 2020.
		     </p>	
			<ul>
			   <a href="/playground/partnership_indi14">
			       <li>Developing countries� and least developed countries� share of global exports | Percent</li>
			    </a>
			</ul>
		   
		    <p>
			Target 17.12: Realize timely implementation of duty-free and quota-free market access on a
                        lasting basis for all least developed countries, consistent with World Trade Organization decisions,
                        including by ensuring that preferential rules of origin applicable to imports from least developed
                        countries are transparent and simple, and contribute to facilitating market access.
		    </p>
			<ul>
			   <a href="/playground/partnership_indi15">
			      <li>Average tariffs faced by developing countries, least developed countries and small island
                                 developing States Systemic issues Policy and institutional coherence | Percent</li>
			    </a>
			</ul>
                        
                    <p>
			Target 17.13: Enhance global macroeconomic stability, including through policy coordination and policy coherence.
		    </p>
 
			<ul>
			    <a href="/playground/partnership_indi16">
			       <li>Macroeconomic Dashboard</li>
			    </a>
			</ul>
		     <p>
			Target 17.14: Enhance policy coherence for sustainable development.
		    </p>
			<ul>
			    <a href="/playground/partnership_indi17">
			      <li>Number of countries with mechanisms in place to enhance policy coherence of sustainable development</li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 17.15: Respect each country�s policy space and leadership to establish and 
                        implement policies for poverty eradication and sustainable development.
		     </p>	
			<ul>
			   <a href="/playground/partnership_indi18">
			      <li>Extent of use of country-owned results frameworks and
			    planning tools by providers of development cooperation Multi-stakeholder partnerships</li>
			    </a>
			</ul>
		   
		    <p>
			Target 17.16: Enhance the Global Partnership for Sustainable Development, complemented by
                        multi-stakeholder partnerships that mobilize and share knowledge, expertise, technology and
                        financial resources, to support the achievement of the Sustainable Development Goals in all countries,
                        in particular developing countries.
		    </p>
			<ul>
			   <a href="/playground/partnership_indi19">
			      <li> Number of countries reporting progress in multi-stakeholder development
			    effectiveness monitoring frameworks that support the achievement of the Sustainable Development Goals</li>
			    </a>
			</ul>
                        
                    <p>
			Target 17.17: Encourage and promote effective public, public-private and civil
			society partnerships, building on the experience and resourcing strategies of partnerships.
		    </p>
 
			<ul>
			    <a href="/playground/partnership_indi20">
			    <li>Amount of United States dollars committed to (a) public-private 
				partnerships and (b) civil society partnerships Data, monitoring and 
				accountability</li>
			    </a>
			</ul>
		     <p>
			Target 17.18: By 2020, enhance capacity-building support to developing countries, including for least
                        developed countries and small island developing States, to increase significantly the availability of
                        high-quality, timely and reliable data disaggregated by income, gender, age, race, ethnicity, migratory
                        status, disability, geographic location and other characteristics relevant in national contexts.
		    </p>
			<ul>
			    <a href="/playground/partnership_indi21">
			     <li>Proportion of sustainable development indicators produced at the national level with full
			      disaggregation when relevant to the target, in accordance with the Fundamental Principles
			      of Official Statistics</li>
			    </a>
			    <a href="/playground/partnership_indi22">
			      <li>Number of countries that have national statistical legislation that complies
			        with the Fundamental Principles of Official Statistics</li>
			    </a>
                            <a href="/playground/partnership_indi23">
			      <li>Number of countries with a national statistical plan that is fully funded and
			        under implementation, by source of funding</li>
			    </a>
			   
			</ul>
		    
		    <p>
			Target 17.19: By 2030, build on existing initiatives to develop measurements of progress on
                        sustainable development that complement gross domestic product, and support statistical
                        capacity-building in developing countriest.
		     </p>	
			<ul>
			   <a href="/playground/partnership_indi24">
			      <li>Dollar value of all resources made available to strengthen statistical capacity in
                                    developing countries | USD</li>
			    </a>
			    <a href="/playground/partnership_indi25">
			      <li>Proportion of countries that (a) have conducted at least one population and housing census
			          in the last 10 years; and (b) have achieved 100 per cent birth registration and 80 per cent
				  death registration</li>
			    </a>
			</ul>
		   
		     
		</div>
	    </div>
            
	    
	    
	    
	</div>
	</EscapeOutside>
	)}
	
        </div>
    );
    }
}

 
module.exports = Indicators;