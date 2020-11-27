import React, {Component} from "react";
import _ from 'underscore';
import store from 'storejs';
import Commit from './commit';


class History extends React.Component {
        constructor(props){
            super(props);
	    this.state={
	      
	      histories:[],
	      oneData:{},
	      edit: false,
	      returnData:{},
	      
	      goal: '',
	     indicator: '',
	     state: '',
	     year: '',
	     value: '',
	    
	    };
	    this. aboutcontroller = new AbortController();
	     this._setEditFalse = this._setEditFalse.bind(this);
	     this.setOneData = this._setOneData.bind(this);
	     this.setReturnData = this.setReturnData.bind(this);
	}


_setEditFalse(){
  const{histories,returnData} = this.state;
  const indexOfUpdatedUser = _.findIndex(histories, {id: returnData.id});
  histories[indexOfUpdatedUser] = returnData;
  this.setState({edit:false})
}
_setOneData(idValue){
  const record = this.state.histories.find(({id}) => id==idValue);
  this.setState({oneData:record,edit:true})
}
setReturnData(value){
   this.setState({returnData: value});
}

componentDidMount(){

if (store.has('user')==true) {
 
   const userid = store.get('user').userid;
   
   fetch(process.env.API_URL+'userdata/'+userid, {signal: this.aboutcontroller.signal})
    .then( (response) => {
	if (response.ok) {
	    return response.json();
	}else{
	    
	   throw new Error('No Data Found');
	    
	}
    })
    .then(
	(result) => {
	  this.setState({
		histories: result.data,
		
	});
	   
	}
    )
    .catch((error) => {
	 this.setState({
	        histories: [],
		
	   });
	
    });
  
}

}
componentWillUnmount(){
    this.aboutcontroller.abort()
}

    render(){
const {edit,histories,oneData,returnData} = this.state;
console.log(returnData);

    return(
<div>
      	
	{ edit &&(
          <Commit setReturnData={this.setReturnData} backtolisting={this._setEditFalse} oneData={oneData} country={this.props.country} goals={this.props.goals} indicators={this.props.indicators} states={this.props.states}/>
	)}
	  
	{ edit === false &&(
		
	histories.map((history) =>(
	
	<div key={history.id} className="dataCard">
	  
	    <div className="upper">
	      <div className="goallcon">
		<label>SDG Goal: </label><br/>
		 <p> {history.goal} </p>
		</div>
		<div className="goallcon">
		<label>Goal Indicator </label><br/>
		 <h4> {history.indicator} </h4>
		</div>
		
	    </div>
	    
	    <div className="midInfo">
		<h2>
		     Date Commited: {history.date}
		</h2>
		{history.status ==='no' ?
		<h6>Status: This data is pending approval.</h6> :
		<h5>Status: Approved.</h5>
		}
	     </div>
	    
	    <div className="lower">
	      <div className="crumbInput">
	       <p> {history.state} &bull;&nbsp;</p>
	       <p> {history.year} &bull;&nbsp; </p>
	       <h4> [{history.value}] </h4>
	      </div>
	       
	       <div className="ManageDatacon">
	       {history.status ==='no' ?
	         <button onClick={() => this.setOneData(history.id)} className="EditButt">Edit</button>:
		 <button className="AprovButt">Edit</button>
	       }
	       </div>
	    </div>
	    
	  </div>	   
		   
	))
	  
	)}
	
	
</div>
    );
    }
}

module.exports = History;