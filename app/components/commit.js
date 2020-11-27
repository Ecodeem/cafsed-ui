import React, {Component} from "react";
import _ from 'underscore';
import store from 'storejs';
const BASE_URL = process.env.USE_BASE_URL;

class Commit extends React.Component {
        constructor(props){
            super(props);
	    this.state={
	     
		states: [],
		returnData:{},
	     commit: false,
	     
	     goal: this.props.currenttab ==='Commit' ? '' : this.props.oneData.goalsub ,
	     indicator: this.props.currenttab ==='Commit' ? '' : this.props.oneData.indicator ,
	     state: this.props.currenttab ==='Commit' ? '' : this.props.oneData.state ,
	     year: this.props.currenttab ==='Commit' ? '' : this.props.oneData.year ,
	     value: this.props.currenttab ==='Commit' ? '' : this.props.oneData.value ,
	     
	     goalerr: '',
	     indicatorerr: '',
	     allerr: '',
	     
	     goalClean: false,
	     indiClean: false,
	     allClean: false,
	     isLoadedSoft:true,
	     	    
	    };
	    this.aboutcontroller = new AbortController();
	    this._setCommitTrue = this._setCommitTrue.bind(this);
	    this._setCommitFalse = this._setCommitFalse.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleGoalInputChange = this.handleGoalInputChange.bind(this);
	    this.handleIndicatorInputChange = this.handleIndicatorInputChange.bind(this);
	    this.handleStateInputChange = this.handleStateInputChange.bind(this);
	    this.handleYearInputChange = this.handleYearInputChange.bind(this);
	    this.handleValueInputChange = this.handleValueInputChange.bind(this);
	}

_setCommitTrue(){
  this.setState({commit:true})
}
_setCommitFalse(){
  this.setState({commit:false,returnData:[],})
}


handlegoalFieldErr(value){
	
    if(value == ''){	
	this.setState({
	    goalerr:'Pick a goal.',
	    goalClean: false,
	})
    }else{
	this.setState({
	    goalerr:'',
	    goalClean: true,
	})
   }
}
handleindiFieldErr(value){
	
    if(value == ''){	
		
	this.setState({
	    indicatorerr:'Select indicator',
	    indiClean: false,
	    
	})
    }else{
	this.setState({
	    indicatorerr:'',
	    indiClean: true,
	})
    }
}
handleBatchFieldErr(value1,value2,value3){
	
    if((value1 == '' || value2 == '' || value3 == '')){	
		
	this.setState({
	    allerr:'All fields are required.',
	    allClean: false,
	    
	})
    }else{
	this.setState({
	    allerr:'',
	    allClean: true,
	})
    }
}

handleGoalInputChange(event) {
    const {target} = event;
    const value = target.value;
    this.setState({goal: value});
    
}
handleIndicatorInputChange(event) {
    const {target} = event;
    const value = target.value;
    this.setState({indicator: value});
    
}
handleStateInputChange(event) {
    const {target} = event;
    const value = target.value;
    this.setState({state: value});
 
}
handleYearInputChange(event) {
    const {target} = event;
    const value = target.value;
    this.setState({year: value});
    
}
handleValueInputChange(event) {
    const {target} = event;
    const value = target.value;
    this.setState({value: value});
    
}

handleSubmit(event) {
  event.preventDefault();
const {indicator,goal,state,year,value} = this.state;
this.handlegoalFieldErr(goal);
this.handleindiFieldErr(indicator);
this.handleBatchFieldErr(state,year,value);

const {goalClean, indiClean, allClean} = this.state;

if ((goalClean == true && indiClean == true && allClean == true) )	{
const userid = store.get('user').userid;

const dataid = this.props.currenttab ==='Commit' ? '' : this.props.oneData.id;

const apidata = {
UpadateId: dataid,
Indicator: indicator,
Goal: goal,
State: state,
Year: year,
Value: value,
Bearer: userid,
Country: this.props.country,
Label: year,
}

$.ajax({

        type : "POST",
        url:  process.env.API_URL+"storedata/u", 
        data : JSON.stringify(apidata),
	beforeSend: (data) => {
		this.setState({isLoadedSoft:false});
        },
	success : (response)=> {
	const returnValue = response.data.reduce((a,b) => Object.assign(a,b), {});
	this.setState({
		isLoadedSoft:true,
		returnData: returnValue ,
		commit: true,
		goal: '',
		indicator: '',
		state: '',
		year: '',
		value: '',
	   });
	this.props.setReturnData(returnValue);
		
        },
	error : (err)=> {
	this.setState({isLoadedSoft:true, commit: false,}); 
        }
});

}		

}


componentDidMount(){

	if (store.has('user')==true) {
   
		const userid = store.get('user').userid;

	fetch(process.env.API_URL+'userstates/'+userid, {signal: this.aboutcontroller.signal})
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
		states: result.data,
	});
	   
	}
    )
    .catch((error) => {
	 this.setState({
	        states: [],
	});
	
	});
	
}
    
}
componentWillUnmount(){
    this.aboutcontroller.abort();
}

    render(){
	
const {states,isLoadedSoft,indicator,commit,goalerr,indicatorerr,allerr,returnData} = this.state;
const sortedStates = _.sortBy(states,'state');
    return(
<div>
       <div className="cavCont">
	     <strong>Heads UP!</strong> All data must be provided as total value for all
	     <strong> stratifiers </strong> and given in percentages, ratios, and numbers accordingly.
	     
	  </div>
	<form id="regForm" onSubmit={this.handleSubmit}>
	{ commit === false &&(
          <div className="dataCard">
	  
	    <div className="upper">
	        <div className="goallcon">
		<label>Pick A Goal <span className="formErr">{goalerr}</span> </label><br/>
		 <select name="goal" onChange={this.handleGoalInputChange}>
		 {this.props.currenttab ==='Commit' ?
		 <option value=''> --</option>:
		 <option value={this.props.oneData.goalsub}>{this.props.oneData.goal}</option>
		 }
	{
		this.props.goals.map((goal,index) => (
		 <option key={index} value={goal.label}> {goal.goalabbrv} -  {goal.goal}</option>
		))
		    
		   
	}
		 </select>
		</div>
		<div className="goallcon">
		<label  className="margTOp">Pick An Indicator <span className="formErr">{indicatorerr}</span></label><br/>
		 <select name="indicator" onChange={this.handleIndicatorInputChange}>
		 {this.props.currenttab ==='Commit' ?
		 <option value=''> --</option>:
		 <option value={this.props.oneData.indicator}>{this.props.oneData.indicator}</option>
		 }
	{
		this.props.indicators.map((indicator,index) => (
		<option key={index} value={indicator.indicator} >{indicator.indicator}</option>
				
		))
		    
	}
		 </select>
		 <h4 style={{paddingTop:"5px",color:"#6b6b6b"}}> {indicator} </h4>
		</div>
	    </div>
	    
	    <div className="lower">
	    <p className="formErr">{allerr}</p>
	      <div className="crumbInput">
	      
	       <select name="state" onChange={this.handleStateInputChange}>
	       {this.props.currenttab ==='Commit' ?
		 <option value=''> --</option>:
		 <option value={this.props.oneData.state}>{this.props.oneData.state}</option>
		 }
        {
		sortedStates.map((state,index) => (
		
		<option key={index} value={state.state}>{state.label}</option>	   
		
		))
	         
	}
	       </select>
	       <select name="year" onChange={this.handleYearInputChange}>
	       {this.props.currenttab ==='Commit' ?
		 <option value=''> Year</option>:
		 <option value={this.props.oneData.year}>{this.props.oneData.year}</option>
		 } 
	          <option value="2022">2022</option>
		  <option value="2021">2021</option>
		  <option value="2020">2020</option>
		  <option value="2019">2019</option>
		  <option value="2018">2018</option>
		  <option value="2017">2017</option>
		  <option value="2016">2016</option>
		  <option value="2015">2015</option>
	       </select>
	      {this.props.currenttab ==='Commit' ? 
	       <input onChange={this.handleValueInputChange} name="value" type="text" placeholder="Value"/>:
	       <input onChange={this.handleValueInputChange} name="value" type="text" defaultValue={this.props.oneData.value}/>
	       } 
	       </div>
	       
{  
	isLoadedSoft ?
	<button className="commitDatacon" type="submit" value="Commit Data">Commit Data </button> :
	<div className="commitNumb" value="Commit Data">Commiting.. </div> 
	
	  
}

		   

	    </div>
	    
	  </div>
	)}
	</form> 
	{ commit &&(
	  <div className="dataCard">
	  
	    <div className="upper">
	      <div className="goallcon">
		<label>SDG Goal: </label><br/>
		
		 <p> {returnData.goal} </p> 
		</div>
		<div className="goallcon">
		<label>Goal Indicator </label><br/>
		
		 <h4> {returnData.indicator} </h4> 
		</div>
		
	    </div>
	    <div className="midInfo">
		<h2></h2>
		{this.props.currenttab ==='Commit' ?
		<h5>You have committed this data</h5> :
		<h5>You have updated this data</h5>
		}
	     </div>
	    
	    <div className="lower">
	      <div className="crumbInput">
	     
	       <p> {returnData.state} &bull;&nbsp;</p> 
	       <p> {returnData.year} &bull;&nbsp; </p> 
	      
	       <h4> [{returnData.value}] </h4>
	      </div>
	       
	       
	       {this.props.currenttab ==='Commit' ?
	         <button className="commitDatapure" onClick={this._setCommitFalse}>Commit Another Data</button> :
		  <button className="commitDatapure" onClick={this.props.backtolisting}>Return to History</button>
	       }
	       
	    </div>
	    
	  </div>
	)}
</div>
    );
    }
}

module.exports = Commit;