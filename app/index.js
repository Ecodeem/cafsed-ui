import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const Home = require('./components/home');
const Visualize = require('./components/visualize');
const Playground = require('./components/Playground');
const Report = require('./components/report');
const Register = require('./components/register');
const Account = require('./components/account');
const Events = require('./components/events');
const Event = require('./components/event');
const Spread = require('./components/spreadword');
const Support = require('./components/support');
const Aboutsdgs = require('./components/about_sdgs');
const Sdgs = require('./components/sdg');
const Aboutcasdn = require('./components/about_casdn');
const Aboutnigsdgs = require('./components/about_afrisdgs');
const Aboutdata = require('./components/about_data');
const Innovatepage = require('./components/innovate');
const Teampage = require('./components/the_team');
const Contact = require('./components/contact');
//const Projects = require('./components/projects');
const Checkout = require('./components/checkout');
import Volunteer from './components/volunteer';
import Partner from './components/partner';

ReactDOM.render(
     <Router basename="app/">
        
        <Route exact path="/" component={Home} />
        <Route path="/visualize/" component={Visualize} />
        <Route path="/register/" component={Register} />
        <Route path="/account/" component={Account} />
        <Route path="/playground/:id" component={Playground} />
        <Route path="/report/" component={Report} />
        <Route path="/events/" component={Events} />
        <Route path="/event/:id" component={Event} />
        <Route path="/support/" component={Support} />
        <Route path="/getinvolved/" component={Spread} />
        <Route path="/about-sdgs/" component={Aboutsdgs} />
        <Route path="/sdg/:id" component={Sdgs} />
        <Route path="/about-casdn/" component={Aboutcasdn} />
        <Route path="/sdg-africa/" component={Aboutnigsdgs} />
        <Route path="/data-for-africa/" component={Aboutdata} />
        <Route path="/sdg-IDI/" component={Innovatepage} />
        <Route path="/the-team/" component={Teampage} />
        <Route path="/contact/" component={Contact} />
        <Route path="/checkout/" component={Checkout} />
        <Route path="/volunteer/" component={Volunteer} />
        <Route path="/partner/" component={Partner} />
        {/*<Route path="/projects/" component={Projects} /> */}
               
      </Router>, 
   
    document.getElementById('app')
)