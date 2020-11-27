import React, {Component} from "react";
const BASE_URL = process.env.USE_BASE_URL;


class Africamap extends React.Component {
        constructor(props){
            super(props);
	    this.state = {
		
	   
	    }
	    
        }

        render(){


        return(
<React.Fragment>

<img src={`${BASE_URL}shades/images/afrii.png`}/>
	
	
	     
</React.Fragment>
    
    );
    }
}

 
module.exports = Africamap;