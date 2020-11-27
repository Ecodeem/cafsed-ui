import React, {Component} from "react";
import {Helmet} from "react-helmet";
import path from 'path';
import Header from './header';
import Footer from './footer';

import _ from 'underscore';
import '../shades/scss/event.scss';
const BASE_URL = process.env.USE_BASE_URL;


class Event extends React.Component {
        constructor(props){
            super(props);
	    
	this.state={
	    
	  event: [],
	  isLoaded: false,
	    
	};
	
	
	    
	}

getData(){  //  set default values
    const events = [
      { eventid: "234", author: 'Pst. Kolade', type: "article", medialink: `${BASE_URL}event/images/dd.jpg`, date: "May 9, 2019", title: "Richard Curtis delivers keynote speech at the High Level Political Forum in New York", teaser: "Discover why partnerships, urgency and unique opportunities are the driving force behind the achievement of the SDGs.", content: "<p>Every year the High Level Political Forum (HLPF) brings together countries in order to review progress towards the Global Goals. On Tuesday,	UN SDG Advocate Richard Curtis spoke at the opening of the Ministerial segment at the HLPF in New York. Richard is a screenwriter, producer and film director, as well as co-founder of Comic Relief and Project Everyone. His speech highlighted the urgent need for progress towards the Goals and the unique opportunity presented by the year 2020, which marks 5 years since the Goals were agreed, and ten years left to achieve them. </p><p> Richard particularly focussed on the potential for worldwide collaboration in the coming year,calling on the leaders in the room to form an 'irresistible alliance' with citizens and organisations from across all sectors, in order to take a 'quantum leap towards the Goals'. </p><p><slant>Madame President, Mr. Secretary-General, Excellencies, Ladies and Gentlemen, it is a great honour to be with you here today. </slant> </p>	<p><slant>I have written quite a few versions of this speech.</slant></p><p><slant>Many of them have been factual and sensible as befits this occasion. But I've become worried that that's not my job. As the person who gave the world Mr Bean and has written movies that made Hugh Grant so rich and so unhappy - I feel I'm still slightly an outsider here - and it's my job to be an advocate for the people who aren't here today. </slant></p><p><slant>These are people who don't know what the HLPF is - they don't know what ECOSOC is - they don't even know what the PGA is - although of course they should, but they suspect it's something to do with golf.</slant></p><p><slant>But many of them do know who the Secretary General is - they know he's not a secretary and they know he's not a general - and they know he's in a unique position and that the United Nations he leads is something that <bold>carries their hopes and dreams for a better world.</bold></slant></p><p><slant>The sensible speech I was preparing was full of important and excellent facts - the number of countries who have bent their systems towards the Goals - the powerful gains that have been made. And whatever I now say, my prime message is to congratulate all those presenting their National Reviews. I'm particularly proud that the UK is here today. There is real and impressive progress. Thank you all.</slant></p><p><slant>But I kept worrying that I wasn't saying what was in my heart and the heart of those all around the world from the Aboriginal leaders still fighting for their rights in my native Australia to the school children, including my own son, marching for Climate progress in Trafalgar Square.</slant></p><p><slant>So I just want to pick the <bold>three key words</bold> that keep going through my head whenever I think of the SDGs.</slant></p><p><slant>The first word is bold> Partnership. </bold></slant></p><p><slant> Partnership - I stand here as an example of partnership. I was a UK campaigner for the Millennium Development Goals and I came to the UN in 2014 to ask if there was anything I could do to help on the SDGs - and they graciously accepted my partnership. We formed a group called Project Everyone to help tell the world about the Goals when they launched. We helped design the logo and graphics and short names for the Goals in order to make them as clear and useful for supporters as possible. We worked with a huge number of partners to talk about the Goals on TV, on Radio, online, in schools. And everywhere we looked, this is the key thing we found people extraordinarily eager to help. We've continued this work in different ways - and will do so until 2030. </slant> </p> <p> <slant> And my message to you all is that there are so many possible partners for the Goals . </slant> </p><p> <slant> No-one denies we're all in a boat on a wild sea - we have to use the skills of everyone - some to build the boat - some to guide it - some to row the boat - some when the boat sinks, like the refugee boat Yusra Mardini, to grab the ropes and swim the boat to safety. </slant> </p> <p> <slant> I am obsessed by the partners we could have on this Global Goals journey. They are legion. Governments, represented here - churches who have so often campaigned for change, from the abolition of the slave trade to the cancelation of third world debt - trade unionists - business leaders to whom it is becoming increasingly clear that sustainable, purpose-driven business is not only crucial for us, but for business itself - employees who are proud of the companies they work for but want to be prouder - bankers & investments bankers & insurance companies & pension providers who are starting to see that sustainable investment can be profitable and will be THE KEY to financing the future of the Goals - civil society with all its miscellaneous passions - tech leaders who are moving fast into the unknown and know they should do so with purpose and principle or they will fail - young activists - older activists - scientists - technologists - environmentalists - philanthropists - academia - mayors - feminists - school children.'</slant> </p> <p> <slant> The Goals have got people primed - to an extraordinary, and I think to an entirely unpredicted extent. You in power can't do this job on your own. Now is the time to seek out and accelerate partnerships - put money into partnerships. When we reach 2030 - let's be amazed by the irresistible alliance we've brought together. Remember the 300 who stood up to whole Persian army - who take on history and change it. </slant> </p> <p> <slant> So when you review your VNRs - I'm asking you make a mark by every single item and ask - who could help make this happen faster? Who is already passionate about this, and we could partner with - using the SDGs as glorious glue? Who could we bring on board to help make more radical and powerful change? </slant> </p> <p> <slant> The second word is Urgency. </slant> </p> <p> <slant>Urgency is a tough world in politics and the world. Because everyone always thinks there's need for urgent change, and always will do - so urgency can lose its flavour and power. </slant> </p> <p> <slant> But one of the key purposes of the Global Goals is to give a deadline to intensify our sense of urgency - and I am very grateful for the Secretary General's report that stress the huge urgent needs of the planet - showing that Global Hunger is on the rise - that Greenhouse Gas Emissions are reaching record levels - that at least 50% of people on our planet still lack essential health services. </slant> </p> <p> <slant> But when you hear that word - 'urgent' - I beg everyone here, in this room - never to lose your sense of the simple, intimate, daily urgency in the lives of those we serve. Never forget what is happening to millions as we sit here today - never forget the simultaneity of human suffering. </slant> </p> <p> <slant> When I was 32, I started a charity called Red Nose Day. It was 1985 and I spent time studying homelessness in London that immensely solvable but complex thing, where the lives of citizens fallen on hard times can be totally ruined by one bad piece of luck. I also went to Ethiopia during the famine there and in Sudan, saw pain that no human should ever suffer and ever since then, every day, I've never been able to shed that sense of urgency. </slant> </p>	<p> <slant> So if your Governments back home ever tell you, 'this SDG stuff can wait - there are other priorities' - remember the people, in your countries and abroad, for whom it can't wait - the young girl being prepared for child marriage, tomorrow. The mother choosing today whether to spend her money on food for all her children, or life-saving medicine for one sick child - the family deciding whether they must abandon everything tonight and begin the life of refugees - the father, whose child just attempted suicide yesterday and without proper help will do so again. The changes the Goals promise could not be more urgent. </slant> </p> <p> <slant> So what is the answer - how do you hang on to urgency? One answer is of course to support those larger efforts to make the Goals come true. The Global Fund - GAVI - the World Bank's IDA replenishment - the COPs- all presenting huge opportunities in the next 18 months. These are initiatives of which our generation can be proud - don't pass them by. And then the answer is to focus ever harder on every target of the Goals - to exploit their deadlines. They make urgency real and tactile and measurable. That's what they're for. </slant></p> <p> <slant> And finally - the third word is Opportunity. But I hope you don't mind if I get greedy and use two words instead - </slant> </p> <p> <slant> Unique Opportunity. This is what the Goals give us. A unique opportunity. In the SDGs we have unique roadmap to guide us, negotiated with the passion and determination of people like our Deputy Secretary General and every UN representative who chiseled out this plan to make us the first generation to end extreme poverty - the last generation to be threatened by climate change - the most determined generation to end inequality and injustice. </slant> </p> <p> <slant> But why this is a unique opportunity right now is because next year it'll be 2020, a third of the way to 2030. If we wait, the window of opportunity will begin to fade. An acceptance will creep into people's minds that we're not going to make it. That it was a nice opportunity we missed. That we settled for bronze when we could have won gold. </slant> </p> <p> <slant> And right now is the precise moment to grab this unique opportunity. This HLPF has to turbo-charge the General Assembly this September. It has to provide the energy and information to make that week of summits great & famous meetings. Not a level-headed presentation of how far we've got - but a visionary planning session of how to get where we have to go. We cannot say 'we'll be back and report sensibly in 2023'. We have to say 'we'll be straight back in 2020 with utter determination, new partners, and increased urgency to go for Gold'. </slant> </p> <p> <slant> 2020 is a historic year - a year when, with totally clear 20/20 vision, we must make a decisive recommitment. Without it, we will drift. And that is why every day a huge number of citizens, organizations and businesses outside this hall are making plans to join together in a global popular campaign - for people and for planet. The moment the clock strikes midnight at the start of 2020 they will be campaigning noisily, in the media, online, in schools, in epic concerts, with memorable works of art, on advertising hoardings and in village squares and city streets to press for acceleration and achievement in the Goals. </slant> </p> <p><slant>It would be a tragedy if this campaign of we, the peoples, wasn't greeted by the leaders of every country, by the heads of all UN organisations - as an opportunity for all of us to work together for a quantum leap towards the Goals. </slant> </p><p><slant>And we strongly believe the United Nations therefore has to commit to an annual UNGA meeting in September about the Goals - always inspired and informed by the annual HLPF - so we can make radical progress EVERY YEAR for a Decade of Delivery from 2020 to 2030.</slant></p><p><slant> 	The glory of the SDGs is their comprehensiveness. They brilliantly link together all the key issues in our world - from cities to consumption to employment to biodiversity to climate to poverty to gender justice. But in doing so, the problem is they don't allow us a get out.</slant></p><p><slant>In 2030 we can't expand the SDGs, like we expanded the MDGs. All we can do is break them down again - go for less, not more. So now is the moment - in 2019 and 2020 - to go for broke - with deeply urgency - with radical partnerships - and with a sense of this unique human opportunity. </slant> </p> <p> <slant> In 2030 we can't expand the SDGs, like we expanded the MDGs. All we can do is break them down again - go for less, not more. So now is the moment - in 2019 and 2020 - to go for broke - with deeply urgency - with radical partnerships - and with a sense of this unique human opportunity. </slant> </p> <p> <slant> And you are the generation of people with power in the United Nations and power in every country in the world, who could and must make it happen. </slant></p>"},
      { eventid: '235', author: 'Enouch', type: 'video', medialink: `${BASE_URL}event/videos/sample.mp4`, date: 'May 9, 2019', title: 'Richard Curtis delivers keynote speech at the High Level Political Forum in New York', teaser: 'Discover why partnerships, urgency and unique opportunities are the driving force behind the achievement of the SDGs.'},
      { eventid: '236', author: 'Enouch', type: 'article', medialink: `${BASE_URL}event/images/aa.png`, date: 'May 9, 2019', title: 'Indegenous people matters', teaser: 'Discover why partnerships, urgency and unique opportunities are the driving force behind the achievement of the SDGs.'},
      { eventid: '237', author: 'Pst. Kolade', type: 'article', medialink: `${BASE_URL}event/images/you.jpg`, date: 'May 9, 2019', title: 'Young people can play a key role in achieving the SDGs', teaser: 'Discover why partnerships, urgency and unique opportunities are the driving force behind the achievement of the SDGs.'},
      { eventid: '238', author: 'Pst. Kolade', type: 'article', medialink: `${BASE_URL}event/images/cc.jpg`, date: 'May 9, 2019', title: 'Inclusivity is a central theme of the 17 UN Sustainable', teaser: 'Discover why partnerships, urgency and unique opportunities are the driving force behind the achievement of the SDGs.'},
    ]
  
  return events;
}

componentDidMount(){

 const {params} = this.props.match;
 const events = this.getData();
 const record = events.find(event => event.eventid == params.id);

 this.setState({
      event: record,
      isLoaded:true,
 });

}


    render(){

const {event,isLoaded} = this.state;
const content = _.unescape(`${event.content}`);

    return(
<React.Fragment>

<Helmet>
  <title>{event.title}</title>
  <meta property="og:site_name" content="CASDN SDG TRACKER" />
  <meta property="og:title" content={event.title} />
  <meta property="og:description" content={event.teaser} />
  <meta property="og:image" itemprop="image" content={`${BASE_URL}events/images/${event.medialink}`} />
  <meta property="og:type" content="website" />
  <meta property="og:updated_time" content="1506670715" />
  <meta property="og:url" content={`process.env.BASE_URL/events/${event.eventid}`} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content={`process.env.BASE_URL/events/${event.eventid}`} />
  <meta name="twitter:title" content={event.title} />
  <meta name="twitter:description" content={event.teaser} />
  <meta name="twitter:image" content={`${BASE_URL}events/images/${event.medialink}`} />
                
</Helmet>

{
isLoaded == false && ( <div className="spinnerLoad"></div>)
}
<Header />

<div className="mobPadding" style={{marginTop:'40px'}}> </div>

<section className="body">


        <section class="eveTopBack">
		<section class="eveTopinner">
		    <div class="evntBanner">
			<img src={event.medialink}/>
		    </div>
		    <div class="evntTitlCon">
			<div class="eveDate">
			    <strong>Published:</strong> {`${event.date}`}
			</div>
			<div class="eveTitle">
			    {`${event.title}`}
			</div>
			<div class="eveOrgnzr">
			    <strong>Author:</strong> {`${event.author}`}
			</div>
			
		    </div>
		    
	    </section>
	</section>
	
	<div class="eventMainCont">
	<div class="eventINNCont">
		  
		<div class="eventContLeft">
			  <div class="articleTeaser">
			    {`${event.teaser}`}
			  </div>
			
			  <div dangerouslySetInnerHTML= {{__html: content}}/>
			 
		</div>
		
		<div class="eventContRight">
		    <div class="shareTitle">SPREAD THE WORD</div>
		     <ul class="mediAIcon">
			 
			<a href={`https://www.facebook.com/sharer/sharer.php?t=${event.teaser}&u=${process.env.BASE_URL}/events/${event.eventid}`} target='_blank' >
			  <li class="FaceBookK">
			    <div class="icoN">
			      <img src="app/shades/images/fb.png" />
			    </div>
			    <h4>Share on Facebook</h4>
			  </li>
			</a>
			
			<a href={`https://twitter.com/share?url=${process.env.BASE_URL}/events/${event.eventid}&text=${event.teaser}`} target='_blank' >
			  <li class="twitter">
			    <div class="icoN">
			      <img src="app/shades/images/twit.png" />
			    </div>
			    <h4>Share on Twitter</h4>
			  </li>
			</a>
		      </ul>
		</div>
	</div>
			
	</div>
		    
    
</section>
<Footer />
</React.Fragment>

    );
    }
}



module.exports = Event;