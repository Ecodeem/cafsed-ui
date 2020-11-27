import React, {Component} from "react";
import path from 'path';
import '../shades/scss/report.scss';


class Category extends React.Component {
        constructor(props){
            super(props);
	    
	this.state = {
	  filtered: [],
	};
	    
        }

componentDidUpdate(prevProps) {
  if (this.props.filtered !== prevProps.filtered) {
    this.setState({
       filtered: this.props.filtered
    });
  }
  
}


        render(){

const {filtered} = this.props;
filtered.sort((a,b) => b.value - a.value);
const Achivers = filtered.filter((row) => row.value >= 75 && !(row.value > 100) );
const Toprankers = filtered.filter((row) => row.value >= 65 && !(row.value > 74) );
const Highliners = filtered.filter((row) => row.value >= 50 && !(row.value > 64) );
const Beginners = filtered.filter((row) => row.value <= 49 && !(row.value > 49) );



        return(
<section className="dataCubeRight">
	    <div className="dataCubeTitle">
	       Performance Category
	    </div>
	    
	    <div className="dataCubeLinerper">
	        <table className="table">
		   <tbody>
		     <tr>
		        <td>  </td>
		        <td><strong>Category</strong></td>
			<td><strong>State</strong></td>
			
		     </tr>
		     <tr>
		        <td> 1 </td>
		        <td>Achivers</td>
			<td>
		{
			Achivers.map((row,index) =>
			
			<Catstate key={index} row={row}/>	     
				     
			)
			   
		}
			</td>
			
		     </tr>
		     <tr>
		        <td> 2 </td>
		        <td>Top Rankers</td>
			<td>
		{
			Toprankers.map((row,index) =>
			
			<Catstate key={index} row={row}/>	     
				     
			)
			   
		}
			</td>
			
		     </tr>
		     <tr>
		        <td> 3 </td>
		        <td>Highliners</td>
			<td> 
		{
			Highliners.map((row,index) =>
			
			<Catstate key={index} row={row}/>	     
				     
			)
			   
		}
			</td>
			
		     </tr>
		     <tr>
		        <td> 4 </td>
		        <td>Beginners</td>
			<td>
		{
			Beginners.map((row,index) =>
			
			<Catstate key={index} row={row}/>	     
				     
			)
			   
		}
			</td>
			
		     </tr>
		
		   </tbody>
		</table>
	    </div>
	</section>
    
    );
    }
}

const Catstate = props =>
 <div>
    {props.row.state}
    </div>;

 
module.exports = Category;