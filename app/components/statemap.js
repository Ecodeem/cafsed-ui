import React, {Component} from "react";
import path from 'path';
import panAndZoomHoc from 'react-pan-and-zoom-hoc';
import '../shades/scss/report.scss';
import '../shades/css/mapofnigeria.css';




class Statemap extends React.Component { 
        constructor(props){
            super(props);
	    
	this.state = {
	  filtered: [],
	  display: 'none',
	  showLegend: true,
	};
	
	this.showState = this._showState.bind(this);
	this.hideState = this._hideState.bind(this);
	this.showLegend = this._showLegend.bind(this);
	this.hideLegend = this._hideLegend.bind(this);
	
	}

_showState(value){
   this.setState({display: value});
}
_hideState(){
   this.setState({display: 'none'});
}
_showLegend(){
   this.setState({showLegend: true});
}
_hideLegend(){
   this.setState({showLegend: false});
}

componentDidUpdate(prevProps) {
  if (this.props.filtered !== prevProps.filtered) {
    this.setState({
       filtered: this.props.filtered
    });
  }
  
}

reducer(filtered,value){
  return filtered.filter((row) => row.state == value);
}

handleColor(row){
let color ='grey';
if(row.value == 0 ){
	color = 'grey';
}
if(row.value >= 1 && !(row.value > 49) ){
	color = 'red';
}
if(row.value >= 50 && !(row.value > 64) ){
	color = '#fa8c1f';
}
if(row.value >= 65 && !(row.value > 74) ){
	color = '#ffff06';
}
if(row.value >= 75 && !(row.value > 100) ){
	color = '#008000';
}	
	return color;	
	
}

        render(){
const {display,showLegend} = this.state;
//const states = ['Lagos','Edo','Benue','Enugu','Akwa-Ibom','Abuja','Ondo','Ekiti','Oyo','Kastina','Bauchi','Osun','Niger','Abia','Adamawa','Anambra','Bayelsa','Cross-Rivers','Rivers','Delta','Ebonyi','Gombe','Imo','Jigawa','Kebbi','Kogi','Kwara','Nassarawa','Ogun','Plateau','Sokoto','Taraba','Yobe','Zamfara','Borno'];
const {x,y, scale, width, height, ...other} = this.props;
const {filtered} = this.props;

// 1. Kwara
const KwaraRec = this.reducer(filtered,'Kwara');
const KwaraStyle = KwaraRec.map((row,index) => this.handleColor(row));

// 2. Ogun
const OgunRec = this.reducer(filtered,'Ogun');
const OgunStyle = OgunRec.map((row,index) => this.handleColor(row));

// 28. Lagos
const LagosRec = this.reducer(filtered,'Lagos');
const LagosStyle = LagosRec.map((row,index) => this.handleColor(row));

// 29. Ondo
const OndoRec = this.reducer(filtered,'Ondo');
const OndoStyle = OndoRec.map((row,index) => this.handleColor(row));

// 3. Delta
const DeltaRec = this.reducer(filtered,'Delta');
const DeltaStyle = DeltaRec.map((row,index) => this.handleColor(row));

// 4. Bayelsa
const BayelsaRec = this.reducer(filtered,'Bayelsa');
const BayelsaStyle = BayelsaRec.map((row,index) => this.handleColor(row));

// 5. Akwa-Ibom
const AkwaIbomRec = this.reducer(filtered,'Akwa Ibom');
const AkwaIbomStyle = AkwaIbomRec.map((row,index) => this.handleColor(row));

// 6. Rivers
const RiversRec = this.reducer(filtered,'Rivers');
const RiversStyle = RiversRec.map((row,index) => this.handleColor(row));

// 7. Abia
const AbiaRec = this.reducer(filtered,'Abia');
const AbiaStyle = AbiaRec.map((row,index) => this.handleColor(row));

// 8. Anambra
const AnambraRec = this.reducer(filtered,'Anambra');
const AnambraStyle = AnambraRec.map((row,index) => this.handleColor(row));

// 9. Enugu
const EnuguRec = this.reducer(filtered,'Enugu');
const EnuguStyle = EnuguRec.map((row,index) => this.handleColor(row));

// 10. Ebonyi
const EbonyiRec = this.reducer(filtered,'Ebonyi');
const EbonyiStyle = EbonyiRec.map((row,index) => this.handleColor(row));

// 11. Cross-River
const CrossRiverRec = this.reducer(filtered,'Cross River');
const CrossRiverStyle = CrossRiverRec.map((row,index) => this.handleColor(row));

// 12. Benue
const BenueRec = this.reducer(filtered,'Benue');
const BenueStyle = BenueRec.map((row,index) => this.handleColor(row));

// 13. Taraba
const TarabaRec = this.reducer(filtered,'Taraba');
const TarabaStyle = TarabaRec.map((row,index) => this.handleColor(row));

// 14. Adamawa
const AdamawaRec = this.reducer(filtered,'Adamawa');
const AdamawaStyle = AdamawaRec.map((row,index) => this.handleColor(row));

// 15. Abuja
const AbujaRec = this.reducer(filtered,'Abuja');
const AbujaStyle = AbujaRec.map((row,index) => this.handleColor(row));

// 16. Niger
const NigerRec = this.reducer(filtered,'Niger');
const NigerStyle = NigerRec.map((row,index) => this.handleColor(row));

// 17. Borno
const BornoRec = this.reducer(filtered,'Borno');
const BornoStyle = BornoRec.map((row,index) => this.handleColor(row));

// 18. Yobe
const YobeRec = this.reducer(filtered,'Yobe');
const YobeStyle = YobeRec.map((row,index) => this.handleColor(row));

// 19. Bauchi
const BauchiRec = this.reducer(filtered,'Bauchi');
const BauchiStyle = BauchiRec.map((row,index) => this.handleColor(row));

// 20. Jigawa
const JigawaRec = this.reducer(filtered,'Jigawa');
const JigawaStyle = JigawaRec.map((row,index) => this.handleColor(row));

// 21. Katsina
const KatsinaRec = this.reducer(filtered,'Katsina');
const KatsinaStyle = KatsinaRec.map((row,index) => this.handleColor(row));

// 22. Kebbi
const KebbiRec = this.reducer(filtered,'Kebbi');
const KebbiStyle = KebbiRec.map((row,index) => this.handleColor(row));

// 23. Sokoto
const SokotoRec = this.reducer(filtered,'Sokoto');
const SokotoStyle = SokotoRec.map((row,index) => this.handleColor(row));

// 24. Zamfara
const ZamfaraRec = this.reducer(filtered,'Zamfara');
const ZamfaraStyle = ZamfaraRec.map((row,index) => this.handleColor(row));

// 25. Kano
const KanoRec = this.reducer(filtered,'Kano');
const KanoStyle = KanoRec.map((row,index) => this.handleColor(row));

// 26. Kaduna
const KadunaRec = this.reducer(filtered,'Kaduna');
const KadunaStyle = KadunaRec.map((row,index) => this.handleColor(row));


// 27. Oyo
const OyoRec = this.reducer(filtered,'Oyo');
const OyoStyle = OyoRec.map((row,index) => this.handleColor(row));

// 30. Osun
const OsunRec = this.reducer(filtered,'Osun');
const OsunStyle = OsunRec.map((row,index) => this.handleColor(row));

// 31. Plateau
const PlateauRec = this.reducer(filtered,'Plateau');
const PlateauStyle = PlateauRec.map((row,index) => this.handleColor(row));

// 32. Nassarawa
const NassarawaRec = this.reducer(filtered,'Nassarawa');
const NassarawaStyle = NassarawaRec.map((row,index) => this.handleColor(row));

// 33. Ekiti
const EkitiRec = this.reducer(filtered,'Ekiti');
const EkitiStyle = EkitiRec.map((row,index) => this.handleColor(row));

// 34. Edo
const EdoRec = this.reducer(filtered,'Edo');
const EdoStyle = EdoRec.map((row,index) => this.handleColor(row));

// 35. Imo
const ImoRec = this.reducer(filtered,'Imo');
const ImoStyle = ImoRec.map((row,index) => this.handleColor(row));

// 36. Gombe
const GombeRec = this.reducer(filtered,'Gombe');
const GombeStyle = GombeRec.map((row,index) => this.handleColor(row));

// 37. Kogi
const KogiRec = this.reducer(filtered,'Kogi');
const KogiStyle = KogiRec.map((row,index) => this.handleColor(row));



//console.log(filtered);


        return(
<section className="dataCubeLeft">

  <div className="infoCardcont">
  
  {
   filtered.map((row,index) => (
    display == row.state && (
     <div key={index} className="infoCard">
	<p>{row.state}</p>
	<div>{row.value}</div>
     </div>
     )
    )
	)
  }   
     
     
  </div>
	    <div className="dataCubeTitle">
	       State Scores
	    </div>
           <div className="mapCont">

 <div className="legendCard">
  
  { !showLegend ?
   <section>
      <div className="angleUp">
      <span onClick={this.showLegend} className="pe-7s-angle-up"></span>
     </div>
   </section> :
   
   <section>
     <div className="angleDown">
      <span onClick={this.hideLegend} className="pe-7s-angle-down"></span>
     </div> 
     <div className="legendLine">
       <div className="achvBox"></div>
       <div className="legendText">Achievers</div>
      </div>
      
      <div className="legendLine">
       <div className="trankerBox"></div>
       <div className="legendText">Top Rankers</div>
      </div>
      
      <div className="legendLine">
       <div className="highLinerBox"></div>
       <div className="legendText">Highliners</div>
      </div>
      
      <div className="legendLine">
       <div className="bignBox"></div>
       <div className="legendText">Beginners</div>
      </div>
      </section>
  }    
  </div>
	   
	      <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" className="svgMap" viewBox="0 0 8944 7215">
 
 <g id="map_x0020_of_x0020_Nigeria">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  
  <polygon className="fil0 str0" id="Kwara" onPointerOver={e => this.showState('Kwara')} onPointerOut={this.hideState} style={{fill: KwaraStyle}} points="66,3985 52,3813 81,3766 85,3596 263,3596 378,3432 374,3298 446,3200 448,3169 523,3136 507,3052 599,3005 657,3017 726,2909 726,2845 769,2815 985,2796 1307,3120 1339,3116 1329,3298 1362,3352 1469,3339 1483,3407 1569,3458 1569,3522 1743,3508 1903,3645 2254,3807 2313,3801 2352,3862 2588,3846 2607,3881 2652,3881 2576,4125 2160,4026 2137,4024 2028,4139 2035,4209 2145,4315 2149,4348 2082,4352 2022,4420 1918,4426 1873,4387 1745,4381 1719,4358 1428,4379 1270,4164 1153,3891 1161,3786 1257,3692 944,3536 870,3528 823,3622 462,3836 378,3807 183,3961 111,3950 "/>
  <polygon className="fil1 str0" id="Ogun" onPointerOver={e => this.showState('Ogun')} onPointerOut={this.hideState} style={{fill: OgunStyle}} points="29,5544 29,5418 70,5369 29,5291 35,5205 27,5164 68,5131 66,5105 35,5084 35,5043 64,5033 52,4824 91,4789 42,4711 42,4527 5,4483 64,4426 148,4430 195,4586 212,4518 253,4512 255,4602 382,4883 468,4892 512,4775 571,4791 614,4840 638,4842 646,4826 744,4795 810,4953 825,5049 784,5109 1098,5049 1128,5113 1229,5092 1274,5168 1409,5158 1405,5254 1286,5365 1421,5431 1421,5560 1350,5597 1419,5623 1409,5671 1251,5630 1249,5587 1167,5580 1112,5517 1145,5470 1052,5494 1059,5414 1054,5382 569,5390 525,5412 499,5402 448,5367 427,5371 372,5503 150,5505 113,5546 "/>
  <polygon className="fil2 str0" id="Lagos" onPointerOver={e => this.showState('Lagos')} onPointerOut={this.hideState} style={{fill: LagosStyle}} points="19,5605 17,5550 115,5544 150,5505 370,5505 421,5377 450,5367 519,5412 566,5382 1052,5384 1052,5492 1145,5468 1116,5515 1165,5578 1251,5587 1225,5591 569,5595 528,5550 528,5601 "/>
 
  <path className="fil3 str0" id="Ondo" onPointerOver={e => this.showState('Ondo')} onPointerOut={this.hideState} style={{fill: OndoStyle}} d="M1747 6021l-394 -359 55 12 14 -51 -70 -18 68 -57 -2 -111 -139 -72 125 -109 2 -113 248 -57 -4 -143 69 -72 27 -25 221 -10 115 111 172 -283 156 -74 103 146 -70 53 21 162 -90 135 -41 49 4 100 -109 113 -33 8 -49 4 -6 -51 0 -43 -14 -12 -215 2 -111 137 4 53 -62 256c1,106 142,66 4,318z"/>
 
  <polygon className="fil4 str0" id="Delta" onPointerOver={e => this.showState('Delta')} onPointerOut={this.hideState} style={{fill: DeltaStyle}} points="1743,6029 1823,5814 1916,5884 1909,5974 1987,5941 1989,5892 2102,5896 2141,5927 2180,5888 2258,5888 2418,5995 2402,6038 2410,6109 2512,6101 2656,5956 2662,5896 2533,5722 2568,5652 2625,5701 2908,5537 3011,5485 3062,5785 3019,5867 3015,5982 2953,6079 2849,6339 2859,6396 2754,6409 2650,6474 2652,6519 2504,6589 2459,6546 2412,6589 2229,6645 2082,6565 2080,6526 2008,6530 1991,6403 2129,6364 2137,6286 1909,6224 2008,6226 1983,6134 1877,6226 1807,6130 1815,6083 1877,6029 1770,6077 "/>
 
  <path className="fil5 str0" id="Bayelsa" onPointerOver={e => this.showState('Bayelsa')} onPointerOut={this.hideState} style={{fill: BayelsaStyle}} d="M2037 6561l49 -2 148 92 185 -62 43 -43 43 39 148 -68 2 -43 107 -59 98 -18 100 16 -176 344 49 117 144 49 62 55 -18 84 -10 -49 2 107 -6 43c-53,-6 -53,-6 -53,-6l0 -98 -25 2 -8 103 -98 -10 -133 23 47 -76 -100 90 -76 21 6 -84 -35 -29 6 100 -47 -25 -14 -70 -25 64 -267 -238 -10 -55 -135 -314z"/>
  
  <polygon className="fil6 str0" id="Akwa Ibom" onPointerOver={e => this.showState('Akwa Ibom')} onPointerOut={this.hideState} style={{fill: AkwaIbomStyle}} points="3666,7031 3651,6849 3614,6801 3592,6682 3647,6641 3637,6582 3647,6432 3731,6426 3725,6387 3729,6285 3774,6285 3916,6385 3903,6418 3936,6482 4008,6473 4039,6508 4043,6619 4215,6822 4268,6951 4211,7011 "/>
 
  <g id="_606344928">
   <polygon className="fil7 str0" id="Rivers" onPointerOver={e => this.showState('Rivers')} onPointerOut={this.hideState} style={{fill: RiversStyle}} points="3151,7146 3032,7154 3036,6992 2981,6922 2833,6877 2780,6758 2958,6412 2856,6393 2856,6334 2892,6235 2948,6117 2987,6147 2958,6289 3053,6332 3032,6430 3143,6521 3434,6523 3438,6598 3368,6699 3376,6765 3579,6781 3651,6853 3639,6963 3465,6970 3493,7017 3461,7037 3303,6849 3381,7041 3274,7093 3243,6881 3215,6910 3262,7105 3225,7154 3122,6955 3053,6793 3036,6797 3106,6951 3089,6996 "/>
   <polygon className="fil7 str0" id="Rivers" onPointerOver={e => this.showState('Rivers')} onPointerOut={this.hideState} style={{fill: RiversStyle}} points="3348,7115 3397,7043 3493,7050 3477,7103 "/>
   <polygon className="fil7 str0" id="Rivers" onPointerOver={e => this.showState('Rivers')} onPointerOut={this.hideState} style={{fill: RiversStyle}} points="3512,7064 3510,7095 3670,7080 3668,7058 "/>
  </g>
  
  <polygon className="fil8 str0" id="Abia" onPointerOver={e => this.showState('Abia')} onPointerOut={this.hideState} style={{fill: AbiaStyle}} points="3381,6769 3362,6695 3440,6596 3434,6527 3551,6262 3538,6156 3538,6049 3440,5979 3500,5912 3590,5899 3645,5946 3649,6041 3696,6067 3809,6055 3844,6090 3848,6127 3912,6156 3961,6387 3916,6400 3912,6387 3776,6281 3725,6289 3733,6426 3645,6439 3635,6588 3649,6639 3592,6678 3610,6801 3579,6781 "/>
 
  <path className="fil9 str0" id="Anambra" onPointerOver={e => this.showState('Anambra')} onPointerOut={this.hideState} style={{fill: AnambraStyle}} d="M2960 6139l-6 -80 64 -72 4 -117 51 -82c0,0 -78,-301 -70,-291 8,10 8,10 8,10l84 -12 74 -146 12 35 74 6 66 29 10 45 -70 113 59 18 121 285 57 18 -53 80 -135 -6 -152 148 -115 -12 -53 47 -31 -16z"/>
  <path className="fil10 str0" id="Enugu" onPointerOver={e => this.showState('Enugu')} onPointerOut={this.hideState} style={{fill: EnuguStyle}} d="M3184 5391l-6 -59 41 -51 45 55 310 -242 53 27 211 139 51 55c-40,51 38,123 -86,147l-47 251 45 113 -43 62 2 72 -121 -16 -45 -43 -90 14 -51 -25 -127 -291 -62 -23 72 -100 -16 -62 -135 -23z"/>
  
  <polygon className="fil11 str0" id="Ebonyi" onPointerOver={e => this.showState('Ebonyi')} onPointerOut={this.hideState} style={{fill: EbonyiStyle}} points="3774,5465 3867,5446 3930,5534 3953,5534 3998,5395 4094,5391 4188,5340 4221,5444 4330,5620 4287,5651 4285,5743 4186,5914 4131,5897 4051,5957 4035,5928 3979,5920 3971,6018 3912,6154 3854,6137 3852,6088 3813,6055 3698,6078 3649,6041 3645,5944 3766,5959 3752,5889 3803,5825 3754,5717 "/>
  <polygon className="fil12 str0" id="Cross River" onPointerOver={e => this.showState('Cross River')} onPointerOut={this.hideState} style={{fill: CrossRiverStyle}} points="4379,6883 4352,6855 4307,6857 4305,6806 4258,6824 4176,6721 4217,6818 4043,6621 4043,6514 4008,6475 3940,6482 3901,6416 3922,6397 3965,6395 3914,6151 3977,6020 3979,5924 4033,5926 4055,5959 4137,5895 4184,5920 4285,5750 4285,5651 4336,5620 4215,5417 4293,5362 4410,5370 4473,5266 4715,5327 4726,5409 4935,5397 5119,5608 4644,6041 4644,6119 4613,6131 4658,6190 4666,6225 4637,6289 4603,6547 "/>
  <polygon className="fil13 str0" id="Benue" onPointerOver={e => this.showState('Benue')} onPointerOut={this.hideState} style={{fill: BenueStyle}} points="3623,5114 3723,5163 3908,4854 3852,4835 3811,4642 3748,4517 3712,4371 4316,4589 4594,4378 4740,4376 4859,4472 4847,4554 5191,4536 5439,4845 5419,5003 5248,5497 5117,5608 4939,5401 4724,5413 4715,5331 4469,5266 4408,5370 4295,5360 4213,5411 4186,5333 4096,5395 3996,5407 3949,5538 3934,5536 3864,5458 3887,5315 3850,5260 "/>
 
  <path className="fil14 str0" id="Taraba" onPointerOver={e => this.showState('Taraba')} onPointerOut={this.hideState} style={{fill: TarabaStyle}} d="M5238 5526l180 -523 21 -164 -242 -299 -353 23 12 -88 164 -92 -12 -103 -33 -39 23 -68 158 35 45 -79 150 18 318 -297 264 -351 133 -238 109 -49 455 16 174 197 158 238 2 55 -72 260 -342 353 70 180 76 -31 72 -2 158 347 -123 121 103 133 -105 86 -45 -2 -76 168 -43 121 -78 27 -14 76 -41 25 -176 2 -35 -68 2 -131 -133 -70 -41 -117 -178 -84c0,0 18,-55 -8,-47 -27,8 -27,8 -27,8l16 68 -49 123 -215 -2 -31 -88 -37 -16 -174 166 -100 14 -47 185 -31 4z"/>
 
  <polygon className="fil15 str0" id="Adamawa" onPointerOver={e => this.showState('Adamawa')} onPointerOut={this.hideState} style={{fill: AdamawaStyle}} points="6926,4821 6770,4480 6694,4478 6624,4505 6548,4337 6899,3974 6969,3726 6963,3664 6809,3443 6628,3232 6936,3035 6932,2881 7059,2883 7266,2678 7461,2588 7524,2569 7590,2471 7852,2549 7955,2545 8021,2207 8258,2181 8057,2777 7908,2840 7904,2951 7877,2984 7932,3043 7877,3238 7631,3361 7662,3414 7598,3570 7598,3781 7567,3835 7522,3830 7405,3953 7262,3949 7299,4025 7155,4115 7172,4257 7135,4314 7147,4444 7004,4642 7018,4714 "/>
  <polygon className="fil16 str0" id="Abuja" onPointerOver={e => this.showState('Abuja')} onPointerOut={this.hideState} style={{fill: AbujaStyle}} points="3123,4116 3074,4065 3070,3540 3090,3501 3240,3493 3384,3598 3484,3446 3609,3452 3648,3407 3720,3450 3660,3571 3550,4020 "/>
  <polygon className="fil17 str0" id="Niger" onPointerOver={e => this.showState('Niger')} onPointerOut={this.hideState} style={{fill: NigerStyle}} points="3011,4256 2835,4091 2781,3905 2654,3879 2609,3879 2588,3840 2350,3862 2315,3799 2248,3813 1914,3645 1743,3505 1567,3522 1567,3462 1485,3403 1473,3341 1358,3354 1325,3296 1344,3120 1309,3128 987,2796 778,2810 704,2689 702,2665 763,2566 806,2571 815,2593 845,2593 890,2361 860,2363 827,2298 833,2251 845,2197 813,2048 905,2054 1048,2138 1323,2136 1585,2206 1549,2431 1409,2544 1413,2673 1444,2700 1426,2800 1497,2817 1510,2757 1641,2564 1639,2413 1832,2359 1836,2320 1793,2275 1795,2240 1838,2214 1823,2134 1600,2035 1600,1988 2032,1929 2108,2060 2112,2173 2254,2181 2424,2128 2479,2070 2541,2066 2633,2222 2637,2281 2602,2294 2592,2540 2641,2642 2680,2638 2844,2472 2898,2480 2982,2493 3033,2499 3060,2450 3146,2462 3144,2513 3228,2564 3234,2661 3298,2679 3298,2730 3177,2837 3254,2899 3447,2913 3482,3097 3431,3106 3427,3120 3513,3241 3412,3339 3451,3391 3451,3440 3480,3446 3386,3604 3244,3493 3093,3495 3074,3532 3064,4069 3125,4114 "/>
  <polygon className="fil18 str0" id="Borno" onPointerOver={e => this.showState('Borno')} onPointerOut={this.hideState} style={{fill: BornoStyle}} points="6703,2614 6750,2540 6744,2462 6826,2411 6820,2267 7035,2158 7117,2070 7101,1929 7242,1746 7214,1672 7138,1650 7181,1547 7185,1478 7169,1472 7181,1070 7304,899 7304,848 7222,785 7238,600 7304,598 7357,455 7694,243 7849,231 7937,96 8126,96 8479,576 8565,1084 8585,1107 8751,1107 8920,1228 8940,1266 8885,1359 8852,1578 8901,1646 8895,1752 8581,1955 8436,1914 8272,2105 8257,2185 8022,2210 7956,2548 7855,2552 7585,2462 7523,2577 7269,2675 7054,2886 6931,2890 6826,2759 "/>
  <polygon className="fil19 str0" id="Yobe" onPointerOver={e => this.showState('Yobe')} onPointerOut={this.hideState} style={{fill: YobeStyle}} points="5219,791 5409,571 6045,368 6090,389 6549,395 6978,565 7232,600 7220,787 7304,850 7306,895 7179,1070 7169,1461 7183,1480 7179,1558 7138,1642 7220,1672 7242,1748 7099,1931 7117,2076 7037,2162 6814,2265 6828,2413 6742,2462 6664,2470 6658,2206 6486,1994 6346,1912 6318,1910 6221,1947 6176,1914 6082,1326 6020,1111 5918,1035 5858,817 5672,805 5592,674 5383,750 "/>
  <polygon className="fil20 str0" id="Bauchi" onPointerOver={e => this.showState('Bauchi')} onPointerOut={this.hideState} style={{fill: BauchiStyle}} points="5602,1408 5674,1123 5834,1109 5926,1033 6020,1123 6088,1328 6176,1910 6221,1945 5981,2130 5891,2359 5887,2376 5965,2415 5994,2527 6117,2620 6119,2776 6219,2997 6283,3212 6180,3212 6072,3267 5908,3292 5405,3036 5387,3138 5286,3255 4960,3237 4858,3120 4893,3050 4872,2921 4720,2917 4712,2776 4663,2675 4585,2671 4511,2601 4602,2431 4595,2359 4542,2277 4548,2154 4567,2113 4636,2105 4768,1949 4903,1914 5030,1947 5145,1945 5200,2003 5323,1970 5395,2046 5381,2144 5442,2197 5573,2206 5600,2216 5623,2208 5651,2126 5776,2033 5514,1998 5389,1832 5350,1828 5344,1679 5297,1638 5229,1642 "/>
  
  <path className="fil21 str0" id="Jigawa" onPointerOver={e => this.showState('Jigawa')} onPointerOut={this.hideState} style={{fill: JigawaStyle}} d="M4093 932l10 -137 303 4 314 -16 498 6 166 -39 207 -76 84 131 182 12 57 215 -82 82 -162 10 -64 283 -375 232 62 0 51 39 -4 156 43 -6 131 170 256 39 -113 84 -39 88c-16,10 -16,10 -16,10l-31 -18 -129 -4 -68 -51 23 -105 -80 -76 -121 35 -55 -55 -121 12 -117 -45 16 -74 78 -80 -41 -21 -45 -94 -80 -4 59 -164 -18 -84 -111 8 -2 -35 -76 -8 -109 -162 -70 -107 2 -78 -199 8 -43 82 -174 -168z"/>
 
  <polygon className="fil22 str0" id="Katsina" onPointerOver={e => this.showState('Katsina')} onPointerOut={this.hideState} style={{fill: KatsinaStyle}} points="3316,676 3410,590 3566,594 3816,430 4062,438 4304,606 4386,619 4493,725 4718,779 4403,803 4107,795 4095,930 4210,992 4144,1000 3882,1250 3923,1660 3820,1718 3771,1816 3829,1894 3742,1964 3611,1898 3542,1968 3427,1960 3431,2062 3398,2087 3259,2033 3271,1960 3172,1914 3201,1759 3308,1586 3382,1504 3435,1504 3435,1459 3341,1394 3382,1295 "/>
  <polygon className="fil23 str0" id="Kebbi" onPointerOver={e => this.showState('Kebbi')} onPointerOut={this.hideState} style={{fill: KebbiStyle}} points="1147,496 1249,500 1303,459 1540,614 1663,557 1614,713 1668,811 1643,897 1663,1090 1536,1111 1491,1152 1487,1459 1426,1640 1421,1705 1499,1750 1676,1627 1979,1619 2057,1619 2217,1697 2438,1820 2471,1877 2537,1968 2537,2078 2484,2066 2426,2140 2250,2189 2110,2177 2106,2070 2028,1919 1594,2001 1594,2033 1823,2136 1840,2255 1799,2230 1799,2296 1868,2316 1856,2374 1643,2415 1643,2575 1512,2755 1495,2812 1438,2804 1446,2694 1401,2665 1393,2517 1557,2439 1569,2197 1323,2128 1044,2144 901,2050 806,2054 646,1841 642,1767 790,1578 753,1467 802,1402 749,1295 786,984 "/>
 
  <path className="fil24 str0" id="Sokoto" onPointerOver={e => this.showState('Sokoto')} onPointerOut={this.hideState} style={{fill: SokotoStyle}} d="M1155 291l103 -12 443 -213 33 37 262 0 74 -86 139 -12 381 164 70 4 49 -41 107 57 275 349 -86 57c-160,4 -160,4 -160,4l-33 -53 -78 4 0 74 -119 -4 -45 53 8 119 -57 66 -180 8 -148 152 16 152 -33 49 -332 -25 -45 451 -135 -4 -168 107 -74 -41 70 -250 8 -295 12 -49 135 -4 -4 -193 16 -119 -49 -82 33 -131 -103 33 -234 -144 -172 21 21 -201z"/>
  
  <polygon className="fil25 str0" id="Zamfara" onPointerOver={e => this.showState('Zamfara')} onPointerOut={this.hideState} style={{fill: ZamfaraStyle}} points="3195,658 3306,678 3375,1297 3347,1387 3445,1461 3433,1502 3380,1498 3318,1580 3199,1765 3170,1904 3015,2109 2764,2138 2646,2253 2539,2068 2535,1966 2436,1826 2223,1695 2055,1617 1981,1625 1805,1646 1830,1199 2167,1221 2215,1162 2190,1010 2342,871 2518,863 2584,797 2568,653 2625,600 2728,637 2736,555 2805,543 2842,596 3002,600 3097,543 "/>
  <polygon className="fil49 str0" id="Kano" onPointerOver={e => this.showState('Kano')} onPointerOut={this.hideState} style={{fill: KanoStyle}} points="3870,1927 3769,1834 3822,1699 3929,1654 3884,1244 4138,1006 4241,1002 4274,1080 4323,1027 4520,1018 4511,1092 4679,1346 4757,1367 4757,1396 4872,1392 4921,1469 4839,1634 4917,1642 4958,1736 4999,1761 4930,1830 4913,1912 4762,1953 4647,2097 4581,2101 4544,2277 4597,2359 4606,2437 4552,2499 4495,2503 4409,2466 4356,2421 4417,2359 4417,2245 4405,2117 4319,2027 4224,2003 4077,1904 4089,1834 4077,1798 "/>
  <polygon className="fil48 str0" id="Kaduna" onPointerOver={e => this.showState('Kaduna')} onPointerOut={this.hideState} style={{fill: KadunaStyle}} points="3654,3409 3622,3446 3482,3442 3410,3353 3503,3249 3429,3130 3490,3097 3462,2921 3257,2897 3179,2823 3293,2732 3302,2687 3236,2642 3228,2552 3117,2527 3129,2458 3052,2441 3031,2495 2859,2468 2687,2642 2629,2630 2592,2536 2605,2298 2777,2142 3015,2105 3175,1901 3273,1966 3252,2031 3396,2097 3445,2056 3433,1949 3544,1974 3617,1900 3745,1978 3802,1896 3880,1912 4073,1793 4089,1826 4073,1892 4224,2007 4315,2027 4409,2113 4433,2363 4343,2417 4413,2474 4491,2507 4565,2495 4515,2601 4581,2667 4585,2716 4495,2794 4474,2847 4474,2974 4470,3106 4409,3204 4409,3302 4507,3430 4380,3667 4294,3594 4192,3581 4068,3663 4044,3532 3954,3421 3859,3487 3720,3450 "/>
  <polygon className="fil26 str0" id="Oyo" onPointerOver={e => this.showState('Oyo')} onPointerOut={this.hideState} style={{fill: OyoStyle}} points="7,4461 19,4293 23,4157 60,3985 113,3924 183,3969 384,3805 450,3821 823,3628 868,3542 954,3538 1257,3698 1159,3793 1147,3883 1257,4157 1426,4387 1317,4536 1200,4453 1130,4547 1073,4514 1032,4670 1122,4822 1057,5068 790,5125 823,5051 823,4953 737,4818 655,4826 622,4855 560,4781 523,4781 458,4904 376,4896 253,4584 253,4514 212,4510 195,4592 146,4432 56,4416 "/>
  <polygon className="fil45 str0" id="Osun" onPointerOver={e => this.showState('Osun')} onPointerOut={this.hideState} style={{fill: OsunStyle}} points="1434,4383 1721,4367 1778,4399 1782,4453 1704,4535 1684,4711 1750,4863 1655,4920 1655,5084 1417,5162 1270,5170 1221,5092 1126,5101 1093,5072 1057,5068 1122,4830 1024,4678 1081,4518 1134,4551 1200,4457 1307,4535 "/>
 
  <path className="fil27 str0" id="Plateau" onPointerOver={e => this.showState('Plateau')} onPointerOut={this.hideState} style={{fill: PlateauStyle}} d="M4612 3657l-123 -135 21 -98 -94 -127 -4 -94 66 -94 0 -254 8 -74 107 -57 -29 -62 98 12 45 98 4 144 168 8 21 103 -45 98 103 119 332 8 107 -119 8 -94 508 262 144 -33c-95,218 -260,394 -390,591l-324 287 -156 -12 -139 -78 -336 -25 -53 -152 78 -221 -123 0z"/>
 
  <polygon className="fil28 str0" id="Nassarawa" onPointerOver={e => this.showState('Nassarawa')} onPointerOut={this.hideState} style={{fill: NassarawaStyle}} points="3197,4510 3242,4240 3197,4174 3213,4100 3554,4030 3656,3596 3726,3456 3857,3489 3960,3428 4042,3526 4062,3657 4194,3583 4296,3592 4374,3670 4479,3459 4604,3649 4735,3661 4661,3883 4714,4030 5051,4059 5198,4141 5153,4211 4997,4174 4973,4244 5014,4289 5018,4383 4854,4481 4743,4367 4587,4383 4308,4588 3755,4391 3451,4404 "/>
  
  
  <polygon className="fil44 str0" id="Ekiti" onPointerOver={e => this.showState('Ekiti')} onPointerOut={this.hideState} style={{fill: EkitiStyle}} points="1778,4383 1873,4387 1898,4431 2020,4415 2073,4350 2139,4354 2131,4408 2233,4404 2209,4457 2201,4522 2352,4600 2250,4674 2082,4941 1983,4842 1750,4855 1676,4715 1696,4539 1782,4445 "/>
 
  <path className="fil47 str0" id="Edo" onPointerOver={e => this.showState('Edo')} onPointerOut={this.hideState} style={{fill: EdoStyle}} d="M1827 5818c-84,68 -71,-74 -107,-111l45 -96c-23,-14 16,-42 13,-71l20 -88 -12 -62 119 -139 230 4 16 111 193 -135 -12 -98 127 -180 -21 -164 78 -57 94 103 82 -16 70 70 57 -4 55 79 85 -1 66 57 -49 246 33 226 -82 37 -308 172 -49 -49 -33 74 127 168 -4 66 -144 148 -98 4 -4 -119 -152 -98 -78 -4 -37 45 -49 -33 -111 -4 -4 49 -74 29 0 -98c-27,-19 -55,-38 -82,-57z"/>
 
  <polygon className="fil29 str0" id="Imo" onPointerOver={e => this.showState('Imo')} onPointerOut={this.hideState} style={{fill: ImoStyle}} points="2972,6150 3041,6101 3168,6126 3312,5970 3439,5978 3529,6056 3554,6253 3435,6532 3148,6519 3021,6429 3045,6335 2963,6286 "/>
  <polygon className="fil41 str0" id="Gombe" onPointerOver={e => this.showState('Gombe')} onPointerOut={this.hideState} style={{fill: GombeStyle}} points="6115,2618 6004,2536 5967,2409 5873,2368 5979,2121 6230,1941 6307,1904 6484,1994 6660,2204 6648,2466 6742,2466 6750,2536 6705,2614 6931,2897 6943,3024 6627,3241 6283,3208 6115,2769 "/>
  <polygon className="fil42 str0" id="Kogi" onPointerOver={e => this.showState('Kogi')} onPointerOut={this.hideState} style={{fill: KogiStyle}} points="2022,4151 2128,4025 2572,4123 2650,3889 2769,3909 2846,4094 3011,4266 3121,4119 3203,4106 3191,4164 3248,4242 3195,4504 3462,4410 3736,4389 3740,4525 3802,4627 3849,4824 3904,4853 3732,5168 3593,5119 3273,5328 3224,5287 3179,5332 3145,5432 3093,5496 3015,5500 2982,5287 3031,5017 2961,4951 2896,4988 2826,4894 2760,4881 2678,4807 2596,4832 2502,4725 2408,4586 2354,4619 2203,4516 2231,4418 2129,4401 2149,4319 2022,4201 "/>
 </g>
 
</svg>
	       
	    </div>
</section>
   );
    }
    
}


module.exports = Statemap;