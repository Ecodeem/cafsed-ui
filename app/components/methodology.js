import React, {Component} from "react";
import path from 'path';
import '../shades/scss/report.scss';


class Methodology extends React.Component { 
        constructor(props){
            super(props);
	    
	this.state = {
	  
	}; 
	    
        }

	

        render(){
		


        return(
<React.Fragment>

        <section className="methodBracer">
	  Methodology
	</section>
	<div className="Bracerr">
	<section className="methodologyCon">
	    <h4>Criteria for Indicator Selection</h4>
	    <p>
	      For each SDG, we identified technically-sound quantitative indicators that met five criteria to determine inclusion in the Nigeria SDG Index and Dashboards.
	    </p>
	    <h5>Criteria Adopted in selecting National Indicators</h5>
	    <ol>
	      <li>
	        <strong>Relevance & applicability:</strong> The indicators are relevant for monitoring achievement of the SDGs and applicable to the entire states. They allow for direct comparison of performance across states. Essentially, they allow for the definition of quantitative performance thresholds that signify SDG achievement.
	      </li>
	      <li>
	        <strong>Statistical adequacy:</strong> The indicators selected represent valid and reliable measures
	      </li>
	      <li>
	        Consent from respective Ministries/ Organisations.
	      </li>
	      <li>
	        <strong>Data quality:</strong> Ownership of data by the data source Ministries and/ Organisations.
	      </li>
	      <li>
	        <strong>Coverage:</strong> Data have to be available for at least 50% of the 36 States, including the FCT.
	      </li>
	    </ol>
	    
	    <h4>Computing the SDG Nigeria Index Scores</h4>
	    <h5>The procedure for calculating the SDG Nigeria Index comprised three steps: </h5>
	    <ol>
	      <li>
	        <strong>Raw data:</strong> Raw data for each of the (??) Priority Indicators were compiled for each State and at the national level.
		</li>
	      <li>
	        <strong>Rescaling:</strong> Rescale the data to ensure comparability across indicators and then aggregate the indicators within and across SDGs.</li>
	      <li>
	        <strong>Target setting:</strong> For each indicator, a national target value for 2030 has been set. This target value has been set in one of the three different ways (i) A quantifiable national target specified by the Government of Nigeria; (ii) A quantifiable UN SDG target specified under the UN SDGs for 2030; (iii) The average of the values of the top 3 performing States
		</li>
	      <li>
	        <strong>Normalising:</strong> To make data comparable across indicators, State data values of each of the Priority National Indicators was rescaled from its raw form into a score ranging from 0 to 100 -with 0 denoting lowest performer and 100 indicating that the target has been achieved.
		<p>
		For indicators where increasing value means better performance (Eg. Forest area coverage), score x' was computed as follows:
	        </p>
	        <p>
		In instances where States performed better than the target, their Index Score has been capped at 100.
	        </p>
	     </li>
	     <li>
	        <strong> SDG index score:</strong> For each of the Goals under the SDGs, SDG Nigeria Index score was computed for each State. This was calculated as the arithmetic mean of the normalised values of all the National Indicators within the Goal. In calculating the average, equal weights were assigned to each indicator and the arithmetic mean was rounded off to the nearest whole number.
		<p>
		 Based on the SDG Nigeria Index, States were classified into 4 categories under each of the SDGs
		 <ol>
		   <li>
		     Achiever - when SDG India Index score is equal to 100
		     </li>
		   <li>
		     Top Rankers - when SDG India Index score is less than 100 but greater than or equal to 65
		     </li>
		   <li>
		     Highliners - when SDG India Index score is less than 65 but greater than or equal to 50
		     </li>
		    <li>
		     Beginners - when SDG India Index score is less than 50
		     </li>
		    
		</ol>
	    </p>
	     </li>
	     <li>
	        <strong>Composite SDG Nigeria Index score:</strong> Every State's composite SDG Nigeria Index score was finally computed to quantify the overall progress of the States towards the SDGs. This was calculated as the arithmetic mean of the Goal scores across 13 out of the 17 Goals. This was done by assigning equal weight to every Goal score and the arithmetic mean was rounded off to the nearest whole number.
		<p>
		  The arithmetic mean of Goal scores were then rounded off to the nearest whole number to give the composite SDG Nigeria Index score for each State. The States were again classified into the four categories (as described above): Achiever, Top Rankers, Highliner and Beginner
		</p>
	     </li>
	      
	    </ol>
	    
	    
	    
	</section>
	</div>
</React.Fragment>  
    );
    }
    
}

module.exports = Methodology;