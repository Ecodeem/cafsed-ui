import React, {Component} from "react";
import _ from 'underscore';
import store from 'storejs';
import Commit from './commit';
import History from './history';


class Settingtab extends React.Component {
        constructor(props){
            super(props);
	    this.state={
	    
	    goals:[],
	    indicators:[],
	    states:[],
	    currenttab: 'Commit',
	    activeTab: false,
	    
	    
	    };
	    this.aboutcontroller = new AbortController();
	    this._showCommit = this._showCommit.bind(this);
	    this._showHistory = this._showHistory.bind(this);
	   
	    
	}

_showCommit(){
   this.setState({currenttab: 'Commit'});
}
_showHistory(){
   this.setState({currenttab: 'History'});
}


componentDidMount(){
	
  if (store.has('user')==true) {
   
  const userid = store.get('user').userid;

  fetch(process.env.API_URL+'usergoals/'+userid, {signal: this.aboutcontroller.signal})
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
		goals: result.data,
		
	});
	   
	}
    )
    .catch((error) => {
	 this.setState({
	        goals: [],
		
	   });
	
    });
    
    fetch(process.env.API_URL+'userindicators/'+userid, {signal: this.aboutcontroller.signal})
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
		indicators: result.data,
	});
	   
	}
    )
    .catch((error) => {
	 this.setState({
	        indicators: [],
	});
	
    });
    
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
const {goals,indicators,states,currenttab} = this.state;
const sortedStates = _.sortBy(states,'state');

    return(

<div className="settabStrip">
<div className="settabBracer"> 
<ul className="accLinksCon">
	    <li onClick={this._showCommit} className={this.state.currenttab ==='Commit' ? 'acTiveTab':''}>Commit Data</li>
	    <li onClick={this._showHistory} className={this.state.currenttab ==='History' ? 'acTiveTab':''}>Data History</li>
		</ul>
</div>	  
		 
       
       <section className="accDownStrip">
         
    {this.state.currenttab ==='Commit' ?
	<Commit setReturnData={this.setReturnData} currenttab={currenttab} country={this.props.country} goals={goals} indicators={indicators} states={sortedStates}/> : ''
	}
	{this.state.currenttab ==='History' ?
	<History currenttab={currenttab} country={this.props.country} goals={goals} indicators={indicators} states={sortedStates}/> : ''
	}
	
	
	 
	  
       </section>
</div>

    );
    }
}

module.exports = Settingtab;