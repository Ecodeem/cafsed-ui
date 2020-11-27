import React, {Component} from "react";
import {Helmet} from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../shades/scss/visualize.scss';
import path from 'path';
import Header from './header';
import { NavLink, Link } from 'react-router-dom';
const BASE_URL = process.env.USE_BASE_URL;

class Visualize extends React.Component {
        constructor(props){
            super(props);
	    
	   AOS.init();
        }


componentDidMount(){
$('#sdg1').click(function (){
      $('#SDG1mod').modal('show');
   });
   $('#sdg2').click(function (){
      $('#SDG2mod').modal('show');
   });
   $('#sdg3').click(function (){
      $('#SDG3mod').modal('show');
   });
   $('#sdg4').click(function (){
      $('#SDG4mod').modal('show');
   });
   $('#sdg5').click(function (){
      $('#SDG5mod').modal('show');
   });
   $('#sdg6').click(function (){
      $('#SDG6mod').modal('show');
   });
   $('#sdg7').click(function (){
      $('#SDG7mod').modal('show');
   });
   $('#sdg8').click(function (){
      $('#SDG8mod').modal('show');
   });
   $('#sdg9').click(function (){
      $('#SDG9mod').modal('show');
   });
   $('#sdg10').click(function (){
      $('#SDG10mod').modal('show');
   });
   $('#sdg11').click(function (){
      $('#SDG11mod').modal('show');
   });
   $('#sdg12').click(function (){
      $('#SDG12mod').modal('show');
   });
   $('#sdg13').click(function (){
      $('#SDG13mod').modal('show');
   });
   $('#sdg14').click(function (){
      $('#SDG14mod').modal('show');
   });
   $('#sdg15').click(function (){
      $('#SDG15mod').modal('show');
   });
   $('#sdg16').click(function (){
      $('#SDG16mod').modal('show');
   });
   $('#sdg17').click(function (){
      $('#SDG17mod').modal('show');
   });
   
$('#collapeseSDG1-tg1').collapsible();
$('#collapeseSDG1-tg2').collapsible();
$('#collapeseSDG1-tg3').collapsible();
$('#collapeseSDG1-tg4').collapsible();
$('#collapeseSDG1-tg5').collapsible();
$('#collapeseSDG1-tg6').collapsible();
$('#collapeseSDG1-tg7').collapsible();


$('#collapeseSDG2-tg1').collapsible();
$('#collapeseSDG2-tg2').collapsible();
$('#collapeseSDG2-tg3').collapsible();
$('#collapeseSDG2-tg4').collapsible();
$('#collapeseSDG2-tg5').collapsible();
$('#collapeseSDG2-tg6').collapsible();
$('#collapeseSDG2-tg7').collapsible();
$('#collapeseSDG2-tg8').collapsible();

$('#collapeseSDG3-tg1').collapsible();
$('#collapeseSDG3-tg2').collapsible();
$('#collapeseSDG3-tg3').collapsible();
$('#collapeseSDG3-tg4').collapsible();
$('#collapeseSDG3-tg5').collapsible();
$('#collapeseSDG3-tg6').collapsible();
$('#collapeseSDG3-tg7').collapsible();
$('#collapeseSDG3-tg8').collapsible();
$('#collapeseSDG3-tg9').collapsible();
$('#collapeseSDG3-tg10').collapsible();
$('#collapeseSDG3-tg11').collapsible();
$('#collapeseSDG3-tg12').collapsible();
$('#collapeseSDG3-tg13').collapsible();


$('#collapeseSDG4-tg1').collapsible();
$('#collapeseSDG4-tg2').collapsible();
$('#collapeseSDG4-tg3').collapsible();
$('#collapeseSDG4-tg4').collapsible();
$('#collapeseSDG4-tg5').collapsible();
$('#collapeseSDG4-tg6').collapsible();
$('#collapeseSDG4-tg7').collapsible();
$('#collapeseSDG4-tg8').collapsible();
$('#collapeseSDG4-tg9').collapsible();
$('#collapeseSDG4-tg10').collapsible();

$('#collapeseSDG5-tg1').collapsible();
$('#collapeseSDG5-tg2').collapsible();
$('#collapeseSDG5-tg3').collapsible();
$('#collapeseSDG5-tg4').collapsible();
$('#collapeseSDG5-tg5').collapsible();
$('#collapeseSDG5-tg6').collapsible();
$('#collapeseSDG5-tg7').collapsible();
$('#collapeseSDG5-tg8').collapsible();
$('#collapeseSDG5-tg9').collapsible();

$('#collapeseSDG6-tg1').collapsible();
$('#collapeseSDG6-tg2').collapsible();
$('#collapeseSDG6-tg3').collapsible();
$('#collapeseSDG6-tg4').collapsible();
$('#collapeseSDG6-tg5').collapsible();
$('#collapeseSDG6-tg6').collapsible();
$('#collapeseSDG6-tg7').collapsible();
$('#collapeseSDG6-tg8').collapsible();


$('#collapeseSDG7-tg1').collapsible();
$('#collapeseSDG7-tg2').collapsible();
$('#collapeseSDG7-tg3').collapsible();
$('#collapeseSDG7-tg4').collapsible();
$('#collapeseSDG7-tg5').collapsible();

$('#collapeseSDG8-tg1').collapsible();
$('#collapeseSDG8-tg2').collapsible();
$('#collapeseSDG8-tg3').collapsible();
$('#collapeseSDG8-tg4').collapsible();
$('#collapeseSDG8-tg5').collapsible();
$('#collapeseSDG8-tg6').collapsible();
$('#collapeseSDG8-tg7').collapsible();
$('#collapeseSDG8-tg8').collapsible();
$('#collapeseSDG8-tg9').collapsible();
$('#collapeseSDG8-tg10').collapsible();
$('#collapeseSDG8-tg11').collapsible();
$('#collapeseSDG8-tg12').collapsible();

$('#collapeseSDG9-tg1').collapsible();
$('#collapeseSDG9-tg2').collapsible();
$('#collapeseSDG9-tg3').collapsible();
$('#collapeseSDG9-tg4').collapsible();
$('#collapeseSDG9-tg5').collapsible();
$('#collapeseSDG9-tg6').collapsible();
$('#collapeseSDG9-tg7').collapsible();
$('#collapeseSDG9-tg8').collapsible();

$('#collapeseSDG10-tg1').collapsible();
$('#collapeseSDG10-tg2').collapsible();
$('#collapeseSDG10-tg3').collapsible();
$('#collapeseSDG10-tg4').collapsible();
$('#collapeseSDG10-tg5').collapsible();
$('#collapeseSDG10-tg6').collapsible();
$('#collapeseSDG10-tg7').collapsible();
$('#collapeseSDG10-tg8').collapsible();
$('#collapeseSDG10-tg9').collapsible();
$('#collapeseSDG10-tg10').collapsible();

$('#collapeseSDG11-tg1').collapsible();
$('#collapeseSDG11-tg2').collapsible();
$('#collapeseSDG11-tg3').collapsible();
$('#collapeseSDG11-tg4').collapsible();
$('#collapeseSDG11-tg5').collapsible();
$('#collapeseSDG11-tg6').collapsible();
$('#collapeseSDG11-tg7').collapsible();
$('#collapeseSDG11-tg8').collapsible();
$('#collapeseSDG11-tg9').collapsible();
$('#collapeseSDG11-tg10').collapsible();


$('#collapeseSDG12-tg1').collapsible();
$('#collapeseSDG12-tg2').collapsible();
$('#collapeseSDG12-tg3').collapsible();
$('#collapeseSDG12-tg4').collapsible();
$('#collapeseSDG12-tg5').collapsible();
$('#collapeseSDG12-tg6').collapsible();
$('#collapeseSDG12-tg7').collapsible();
$('#collapeseSDG12-tg8').collapsible();
$('#collapeseSDG12-tg9').collapsible();
$('#collapeseSDG12-tg10').collapsible();
$('#collapeseSDG12-tg11').collapsible();


$('#collapeseSDG13-tg1').collapsible();
$('#collapeseSDG13-tg2').collapsible();
$('#collapeseSDG13-tg3').collapsible();
$('#collapeseSDG13-tg4').collapsible();
$('#collapeseSDG13-tg5').collapsible();


$('#collapeseSDG14-tg1').collapsible();
$('#collapeseSDG14-tg2').collapsible();
$('#collapeseSDG14-tg3').collapsible();
$('#collapeseSDG14-tg4').collapsible();
$('#collapeseSDG14-tg5').collapsible();
$('#collapeseSDG14-tg6').collapsible();
$('#collapeseSDG14-tg7').collapsible();
$('#collapeseSDG14-tg8').collapsible();
$('#collapeseSDG14-tg9').collapsible();
$('#collapeseSDG14-tg10').collapsible();


$('#collapeseSDG15-tg1').collapsible();
$('#collapeseSDG15-tg2').collapsible();
$('#collapeseSDG15-tg3').collapsible();
$('#collapeseSDG15-tg4').collapsible();
$('#collapeseSDG15-tg5').collapsible();
$('#collapeseSDG15-tg6').collapsible();
$('#collapeseSDG15-tg7').collapsible();
$('#collapeseSDG15-tg8').collapsible();
$('#collapeseSDG15-tg9').collapsible();
$('#collapeseSDG15-tg10').collapsible();
$('#collapeseSDG15-tg11').collapsible();
$('#collapeseSDG15-tg12').collapsible();


$('#collapeseSDG16-tg1').collapsible();
$('#collapeseSDG16-tg2').collapsible();
$('#collapeseSDG16-tg3').collapsible();
$('#collapeseSDG16-tg4').collapsible();
$('#collapeseSDG16-tg5').collapsible();
$('#collapeseSDG16-tg6').collapsible();
$('#collapeseSDG16-tg7').collapsible();
$('#collapeseSDG16-tg8').collapsible();
$('#collapeseSDG16-tg9').collapsible();
$('#collapeseSDG16-tg10').collapsible();
$('#collapeseSDG16-tg11').collapsible();
$('#collapeseSDG16-tg12').collapsible();

$('#collapeseSDG17-tg1').collapsible();
$('#collapeseSDG17-tg2').collapsible();
$('#collapeseSDG17-tg3').collapsible();
$('#collapeseSDG17-tg4').collapsible();
$('#collapeseSDG17-tg5').collapsible();
$('#collapeseSDG17-tg6').collapsible();
$('#collapeseSDG17-tg7').collapsible();
$('#collapeseSDG17-tg8').collapsible();
$('#collapeseSDG17-tg9').collapsible();
$('#collapeseSDG17-tg10').collapsible();
$('#collapeseSDG17-tg11').collapsible();
$('#collapeseSDG17-tg12').collapsible();
$('#collapeseSDG17-tg13').collapsible();
$('#collapeseSDG17-tg14').collapsible();
$('#collapeseSDG17-tg15').collapsible();
$('#collapeseSDG17-tg16').collapsible();
$('#collapeseSDG17-tg17').collapsible();
$('#collapeseSDG17-tg18').collapsible();
$('#collapeseSDG17-tg19').collapsible();
  
}

        render(){

        return(
     <div>
<Helmet>
<title>VISUALIZE SDGs DATA IN AFRICA: Visualize SDGs data in Charts</title>
<meta name="description" content="Visualize SDGs data in charts on the 17 goals, 169 targets, and 232 indicators in all 54 African countries." />
<meta name="keywords" content="SDG, SDGs, Visualize, SDGs Data, 54 Countries in Africa, 169 targets, indicators, line chart, bar chart, polar chart, Cafsed data, Cafsed " />
</Helmet>    
	<Header />  

	<div className="mobPadding" style={{marginTop:'40px'}}> </div>
<div className="VishCav">
  Pick a goal to visualize..
</div>

<div id="bnn" >
  
<svg xmlns="http://www.w3.org/2000/svg"   version="1.1"  
    className="sdg_wheel" id="layer"   viewBox="0 0 8526 8550" data-aos="zoom-in-down" data-aos-duration="1000" >
 <defs>
  
   <mask id="id0">
  <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="2527.74" y1="2923.47" x2="5938.6" y2="5548.4">
   <stop offset="0" className="linGrad"/>
   <stop offset="1" className="linGrad1"/>
  </linearGradient>
    <rect className="rectSVG" x="1854" y="1806" width="4759" height="4859"/>
   </mask>
     <clipPath id="id2">
     <rect x="3910" y="3079" width="749" height="762"/>
    </clipPath>
 </defs>
 <g>
  <metadata id="CorelCorpID_0Corel-Layer"/>
    
  
  <path  id="sdg1" className="visualizefil0" d="M4319 0l-23 2777c163,-23 443,23 490,70l980 -2567c-490,-233 -1213,-280 -1447,-280z"/>
  
  <path id="sdg2" className="visualizefil1" d="M5789 289l-982 2558c163,24 437,269 469,327l1844 -2054c-403,-364 -1106,-765 -1330,-832z"/>
  
  <path id="sdg3" className="visualizefil2" d="M7158 1128l-1859 2052c145,79 319,353 328,418l2398 -1322c-252,-481 -681,-1008 -868,-1148z"/>
  
  <path id="sdg4" className="visualizefil3" d="M8032 2309l-2389 1324c108,124 139,472 125,536l2736 -364c-70,-538 -345,-1300 -471,-1496z"/>
  
  <path id="sdg5" className="visualizefil4" d="M8510 3827l-2731 334c52,156 -35,464 -73,518l2667 710c141,-524 179,-1333 137,-1563z"/>
  
  <path id="sdg6" className="visualizefil5" d="M8368 5447l-2656 -750c-14,164 -225,445 -281,480l2251 1659c337,-425 634,-1161 687,-1389z"/>
  
  <path id="sdg7" className="visualizefil6" d="M7641 6850l-2217 -1671c-70,150 -323,340 -388,354l1481 2384c463,-283 996,-871 1124,-1066z"/>
  
  <path id="sdg8" className="visualizefil7" d="M6470 7941l-1428 -2377c-111,117 -439,190 -501,181l531 2718c507,-110 1220,-381 1398,-522z"/>
 
  <path id="sdg9" className="visualizefil8 str0" d="M5011 8487l-465 -2728c-149,63 -493,5 -547,-29l-500 2757c508,103 1293,58 1512,0z"/>
 
  <path id="sdg10" className="visualizefil9" d="M3444 8445l546 -2702c-161,7 -444,-113 -483,-163l-1465 2316c441,273 1177,526 1402,548z"/>
  
  <path id="sdg11" className="visualizefil10" d="M2010 7863l1477 -2301c-154,-46 -407,-346 -427,-406l-2192 1726c325,404 936,887 1141,982z"/>

  <path id="sdg13" className="visualizefil11" d="M153 5426l2681 -770c-85,-137 -67,-470 -42,-528l-2785 -219c-24,518 55,1309 145,1517z"/>
  
  <path id="sdg14" className="visualizefil12" d="M0 3874l2782 238c-27,-159 114,-461 158,-506l-2509 -1229c-216,472 -438,1270 -432,1497z"/>
  
  <path id="sdg15" className="visualizefil13" d="M429 2339l2488 1268c34,-158 278,-385 336,-410l-1849 -2116c-376,357 -896,1045 -975,1258z"/>
  
  <path id="sdg16" className="visualizefil14" d="M1408 1069l1849 2087c88,-135 398,-260 461,-262l-984 -2614c-479,198 -1176,619 -1326,790z"/>
  
  <path id="sdg17" className="visualizefil15" d="M2752 254l980 2616c131,-94 473,-131 533,-111l27 -2751c-518,10 -1338,142 -1539,246z"/>
  
  <path id="sdg12" className="visualizefil16" d="M843 6836l2222 -1687c-129,-97 -232,-414 -230,-477l-2676 802c165,492 524,1201 684,1362z"/>
  
  <path className="visualizefil17" style={{mask: 'url(#id0)'}} d="M4233 1810c1312,0 2376,1086 2376,2426 0,1340 -1064,2426 -2376,2426 -1312,0 -2376,-1086 -2376,-2426 0,-1340 1064,-2426 2376,-2426z"/>
 
  <ellipse className="visualizefil18" cx="4269" cy="4268" rx="1521" ry="1509"/>
  <g id="_563951168">
   <ellipse className="visualizefil19" transform="matrix(0.47793 0.130153 -0.116588 0.428116 4430.28 2165.64)" rx="48" ry="54"/>
   <ellipse className="visualizefil19" transform="matrix(0.418185 0.113883 -0.102013 0.374597 4615.22 2228.63)" rx="48" ry="54"/>
   <ellipse className="visualizefil19" transform="matrix(0.418185 0.113883 -0.102013 0.374597 4738.24 2262.13)" rx="48" ry="54"/>
   <ellipse className="visualizefil19" transform="matrix(0.418185 0.113883 -0.102013 0.374597 4915.55 2296.1)" rx="48" ry="54"/>
   <path className="visualizefil19" d="M4854 2340c3,-23 87,-21 101,22l-20 73 -13 -3 16 -58c0,-3 -10,-11 -14,-3l-47 170 -14 -4 28 -112 -13 -4 -32 112 -17 -3 48 -173 -12 -3 -18 61 -13 -3 21 -72z"/>
   <path className="visualizefil19" d="M4365 2210c3,-23 87,-21 101,22l-20 73 -13 -3 16 -58c0,-3 -10,-11 -14,-3l-47 170 -14 -4 28 -112 -13 -4 -32 112 -17 -3 48 -173 -12 -3 -18 61 -13 -3 21 -72z"/>
   <line className="visualizefil20" x1="4351" y1="2281" x2="4300" y2= "2384" />
   <path className="visualizefil19" d="M4761 2303c-20,-5 -39,-8 -59,-16l-52 72 9 6 32 -43 4 10 -38 67 19 6 -22 77 15 3 20 -76 15 4 -19 76 12 3 20 -75 20 5 3 -77 7 -8 7 50 11 2 -6 -88z"/>
   <path className="visualizefil19" d="M4638 2270c-20,-5 -39,-8 -59,-16l-56 70 10 5 34 -40 4 10 -38 67 19 6 -22 77 15 3 20 -76 15 4 -19 76 12 3 20 -75 20 5 3 -77 7 -8 12 52 9 2 -10 -89z"/>
   <ellipse className="visualizefil19" transform="matrix(0.293024 0.0797984 -0.071481 0.262482 4489.19 2305.02)" rx="48" ry="54"/>
   <polygon className="visualizefil19" points="4530,2328 4526,2319 4493,2343 4469,2337 4447,2300 4442,2305 4460,2340 4440,2386 4447,2388 4438,2421 4450,2425 4459,2392 4473,2396 4465,2429 4474,2432 4482,2399 4490,2399 4498,2349 "/>
   <ellipse className="visualizefil19" transform="matrix(0.337252 0.0918429 -0.0822701 0.3021 4803.39 2387.29)" rx="48" ry="54"/>
   <path className="visualizefil19" d="M4819 2427c-14,-7 -30,-11 -46,-13l-28 36 6 4 17 -20 4 4 -20 66 10 3 9 -32 16 5 -7 32 10 3 16 -69 5 0 4 24 8 2 -5 -45z"/>
  </g>
  <g id="_563921624">
   <path className="visualizefil19 str1" d="M5104 2463c116,95 240,195 355,291 -72,105 -206,68 -245,66l-18 22c-43,-32 -75,-61 -119,-92l17 -22c-35,-47 -75,-163 10,-265z"/>
   <path className="visualizefil19 str1" d="M5349 2356c9,4 15,10 19,20 -114,55 -51,112 -117,180l-21 -18c66,-66 0,-110 119,-182z"/>
   <path className="visualizefil19 str1" d="M5423 2413c9,4 15,10 19,20 -114,55 -51,112 -117,180l-21 -18c66,-66 0,-110 119,-182z"/>
   <path className="visualizefil19 str1" d="M5496 2468c9,4 15,10 19,20 -114,55 -51,112 -117,180l-21 -18c66,-66 0,-110 119,-182z"/>
  </g>
  <g id="_563923256">
   <polyline className="visualizefil20 str2" points="5639,2909 5742,3009 5853,2977 5752,3081 5859,3050 5763,3223 6078,3034 6051,3140 "/>
   <path className="visualizefil19 str1" d="M6013 3204c74,5 54,56 15,73l-89 7c-1,-28 -2,-57 -3,-85 -2,-28 57,-93 77,5z"/>
  </g>
  <g id="_563924000">
   <polygon className="visualizefil18 str1" points="6312,3489 6240,3673 5956,3726 5984,3549 "/>
   <polygon className="visualizefil18" points="6374,3850 6245,3701 5960,3744 6044,3903 "/>
   <polyline className="visualizefil20 str3" points="6302,3460 5952,3520 5921,3739 6032,3942 6372,3886 "/>
   <polygon className="visualizefil18" points="6359,3961 6366,4000 6068,4051 6013,4037 6060,4012 "/>
   <path className="visualizefil18" d="M6384 3997l27 -5c11,-11 10,-31 -6,-38l-27 4 6 39z"/>
  </g>
  <g id="_563926568">
   <path className="visualizefil19" d="M6178 4233c89,0 161,72 161,161 0,89 -72,161 -161,161 -89,0 -161,-72 -161,-161 0,-89 72,-161 161,-161zm0 40c67,0 121,54 121,121 0,67 -54,121 -121,121 -67,0 -121,-54 -121,-121 0,-67 54,-121 121,-121z"/>
   <polygon className="visualizefil19" points="6105,4336 6257,4336 6257,4374 6106,4374 "/>
   <polygon className="visualizefil19" points="6107,4401 6259,4401 6259,4440 6108,4440 "/>
   <polygon className="visualizefil19" points="6275,4265 6334,4207 6282,4208 6281,4165 6416,4166 6414,4291 6365,4289 6361,4243 6306,4304 "/>
   <polygon className="visualizefil19" points="6208,4549 6207,4604 6257,4605 6259,4651 6207,4650 6207,4703 6164,4702 6163,4649 6111,4650 6111,4605 6164,4605 6164,4550 "/>
  </g>
  <g id="_563927960">
   <rect className="visualizefil18" transform="matrix(-0.115064 0.0943427 0.20904 0.378298 5362.96 5460.52)" width="176" height="205" rx="9" ry="9"/>
   <rect className="visualizefil18" transform="matrix(0.115064 0.0943427 -0.20904 0.378298 5600.02 5459.53)" width="176" height="205" rx="9" ry="9"/>
   <rect className="visualizefil18" transform="matrix(-0.0591125 0.13655 0.359025 0.240642 5256.56 5547.79)" width="176" height="205" rx="9" ry="9"/>
   <rect className="visualizefil18" transform="matrix(0.0591125 0.13655 -0.359025 0.240642 5705.06 5549.3)" width="176" height="205" rx="9" ry="9"/>
   <rect className="visualizefil18" transform="matrix(0.0291386 0.145915 0.432162 -0.00655034 5213.81 5679.96)" width="176" height="205" rx="9" ry="9"/>
   <rect className="visualizefil18" transform="matrix(0.0291386 0.145915 0.432162 -0.00655034 5652.02 5682.31)" width="176" height="205" rx="9" ry="9"/>
   <rect className="visualizefil18" transform="matrix(-0.0633552 0.134634 0.351321 0.251755 5640.97 5765.59)" width="176" height="205" rx="9" ry="9"/>
   <rect className="visualizefil18" transform="matrix(-0.118288 0.0902675 0.195703 0.385367 5577.31 5837.76)" width="176" height="205" rx="9" ry="9"/>
   <rect className="visualizefil18" transform="matrix(-0.146582 0.0255726 -0.00398732 0.432194 5492.36 5868.47)" width="176" height="205" rx="9" ry="9"/>
   <rect className="visualizefil18" transform="matrix(-0.141866 -0.0448812 -0.20278 0.38169 5403.57 5848.14)" width="176" height="205" rx="9" ry="9"/>
   <rect className="visualizefil18" transform="matrix(-0.106091 -0.104331 -0.353811 0.248243 5338.98 5785.08)" width="176" height="205" rx="9" ry="9"/>
   <circle className="visualizefil18" cx="5480" cy="5697" r="156"/>
   <path className="visualizefil20 str4" d="M5515 5625c27,13 44,40 44,69 0,42 -34,77 -77,77 -42,0 -77,-34 -77,-77 0,-29 16,-55 42,-68"/>
   <rect className="visualizefil18" transform="matrix(-0.146582 0.0255726 -0.00398732 0.432194 5492.36 5432.1)" width="176" height="205" rx="9" ry="9"/>
   <rect className="visualizefil6" transform="matrix(-0.107277 0.0192965 -0.00291814 0.326123 5488.59 5594.11)" width="176" height="205" rx="7" ry="7"/>
  </g>
  <g id="_563932040">
   <polygon className="visualizefil18" points="4874,6053 4931,6102 4978,6051 4991,6051 4993,6296 4868,6297 "/>
   <g>
    <polygon className="visualizefil18" points="4725,6136 4840,6028 4841,6299 4727,6301 "/>
    <polygon className="visualizefil18" points="5014,6010 5137,5906 5134,6299 5007,6297 "/>
    <polygon className="visualizefil18" points="4686,6078 4718,6108 4846,5978 4930,6058 5131,5860 5152,5877 5172,5793 5081,5806 5099,5830 4931,6002 4845,5923 "/>
   </g>
  </g>
  <g id="_563933192">
   <polygon className="visualizefil18" points="5912,4857 6198,5051 5960,5316 5892,5270 5864,5317 5888,5336 5795,5354 5774,5255 5795,5271 5826,5226 5763,5180 "/>
   <path className="visualizefil21" d="M5983 5060c-18,52 3,99 -12,121 -15,22 -42,36 -77,12 -36,-24 -33,-54 -18,-76 15,-22 66,-20 107,-57z"/>
   <path className="visualizefil5" d="M5891 4943c18,27 62,8 102,56 18,52 91,85 109,85 9,0 34,19 48,-1l20 -29 -248 -167 -31 56z"/>
  </g>
  <g id="_563934560">
   <path className="visualizefil18" d="M3785 6161c-24,85 -80,187 -168,218 -169,60 -368,-97 -323,-318 92,-261 431,-277 511,40 -19,5 -38,11 -56,16 -59,-168 -101,-197 -269,-188 -248,111 -160,405 42,419 33,5 54,15 127,-17 23,-20 42,-18 68,-59 24,-18 47,-75 70,-112z"/>
   <rect className="visualizefil18" transform="matrix(0.358019 0.327608 -0.327608 0.358019 3506.18 6012.93)" width="452" height="113"/>
   <rect className="visualizefil18" transform="matrix(0.358019 0.327608 -0.327608 0.358019 3448.66 6077.3)" width="452" height="113"/>
  </g>
  <g id="_563935112">
   <polygon className="visualizefil18" points="4261,5899 4110,5985 4108,6149 3973,6218 3973,6406 4124,6487 4252,6411 4399,6489 4552,6398 4547,6231 4412,6153 4414,5989 "/>
   <polygon className="visualizefil8" points="4526,6384 4521,6255 4417,6316 4420,6443 "/>
   <polygon className="visualizefil8" points="4298,6229 4397,6168 4508,6234 4408,6299 "/>
   <polygon className="visualizefil8" points="4135,6127 4135,6020 4229,6066 "/>
   <polygon className="visualizefil8" points="4273,6203 4273,6096 4367,6142 "/>
   <polygon className="visualizefil8" points="4385,6132 4385,6025 4291,6071 "/>
   <polygon className="visualizefil8" points="4247,6204 4247,6097 4153,6143 "/>
   <polygon className="visualizefil8" points="4251,6378 4244,6263 4140,6300 "/>
   <polygon className="visualizefil8" points="4132,6439 4131,6316 4232,6389 "/>
   <polygon className="visualizefil8" points="3991,6253 4105,6305 4105,6439 3993,6379 "/>
  </g>
  <g id="_563937728">
   <rect className="visualizefil18" transform="matrix(0.341134 0.302878 -0.302878 0.341134 3013.27 5373.38)" width="339" height="1101"/>
   <g>
    <rect className="visualizefil10" transform="matrix(0.22173 0.196865 -0.196865 0.22173 3042.42 5488.46)" width="85" height="141"/>
    <rect className="visualizefil10" transform="matrix(0.22173 0.196865 -0.196865 0.22173 2936.56 5507.3)" width="85" height="141"/>
    <rect className="visualizefil10" transform="matrix(0.22173 0.196865 -0.196865 0.22173 2984.42 5552.09)" width="85" height="141"/>
    <rect className="visualizefil10" transform="matrix(0.22173 0.196865 -0.196865 0.22173 2825.83 5641.09)" width="85" height="141"/>
    <rect className="visualizefil10" transform="matrix(0.22173 0.196865 -0.196865 0.22173 2874.13 5678.39)" width="85" height="141"/>
    <rect className="visualizefil10" transform="matrix(0.22173 0.196865 -0.196865 0.22173 2767.99 5701.04)" width="85" height="141"/>
    <rect className="visualizefil10" transform="matrix(0.22173 0.196865 -0.196865 0.22173 2816.3 5742.65)" width="85" height="141"/>
    <rect className="visualizefil10" transform="matrix(0.22173 0.196865 -0.196865 0.22173 2880.85 5575.98)" width="85" height="141"/>
    <rect className="visualizefil10" transform="matrix(0.22173 0.196865 -0.196865 0.22173 2928.17 5618.16)" width="85" height="141"/>
    <rect className="visualizefil10" transform="matrix(0.22173 0.196865 -0.196865 0.22173 2994.46 5445.95)" width="85" height="141"/>
   </g>
   <rect className="visualizefil18" transform="matrix(0.341134 0.302878 -0.293511 0.330583 3036.56 5863.49)" width="335" height="342"/>
   <rect className="visualizefil18" transform="matrix(0.341134 0.302878 -0.302878 0.341134 3073.59 5825.57)" width="335" height="85"/>
   <g>
    <rect className="visualizefil10" transform="matrix(0.378241 0.335824 -0.281998 0.317616 3060.37 5967.2)" width="102" height="85"/>
    <rect className="visualizefil10" transform="matrix(0.378241 0.335824 -0.281998 0.317616 3010.1 5923.43)" width="102" height="85"/>
    <rect className="visualizefil10" transform="matrix(0.378241 0.335824 -0.281998 0.317616 3092.88 5931.05)" width="102" height="85"/>
    <rect className="visualizefil10" transform="matrix(0.378241 0.335824 -0.281998 0.317616 3040.86 5886.82)" width="102" height="85"/>
   </g>
   <rect className="visualizefil18" transform="matrix(0.341134 0.302878 -0.288339 0.324758 2633.55 5542.27)" width="335" height="286"/>
   <rect className="visualizefil10" transform="matrix(0.341134 0.302878 -0.31709 0.357141 2638.73 5614.58)" width="102" height="159"/>
   <polygon className="visualizefil18" points="2955,5699 2956,5700 3194,5654 3067,5798 3067,5798 2919,5966 2807,5866 "/>
   <g>
    <rect className="visualizefil10" transform="matrix(0.378241 0.335824 -0.281998 0.317616 3063.42 5700.65)" width="102" height="85"/>
    <rect className="visualizefil10" transform="matrix(0.378241 0.335824 -0.281998 0.317616 2949.21 5732.53)" width="102" height="85"/>
    <rect className="visualizefil10" transform="matrix(0.378241 0.335824 -0.281998 0.317616 3032.46 5738.42)" width="102" height="85"/>
    <rect className="visualizefil10" transform="matrix(0.378241 0.335824 -0.281998 0.317616 2918.65 5767.41)" width="102" height="85"/>
    <rect className="visualizefil10" transform="matrix(0.378241 0.335824 -0.281998 0.317616 2999.02 5775.06)" width="102" height="85"/>
    <rect className="visualizefil10" transform="matrix(0.378241 0.335824 -0.281998 0.317616 2882.61 5806.05)" width="102" height="85"/>
    <rect className="visualizefil10" transform="matrix(0.378241 0.335824 -0.281998 0.317616 2930.91 5847.66)" width="102" height="85"/>
    <rect className="visualizefil10" transform="matrix(0.378241 0.335824 -0.281998 0.317616 2963.83 5810.35)" width="102" height="85"/>
    <path className="visualizefil22" d="M3041 5703l-77 18 34 30 43 -48zm-39 9m-21 24m39 -9"/>
    <path className="visualizefil22" d="M3142 5686l-66 5 34 30 32 -36zm-33 3m-16 18m33 -3"/>
   </g>
   <path className="visualizefil23" d="M2762 5636l-120 -107 132 -26 -12 132zm-60 -53m6 -66m60 53"/>
  </g>
  <path className="visualizefil18" d="M2499 5186c146,-2 158,66 166,77 56,101 6,167 6,167 -74,107 -246,149 -296,-18 -28,-93 19,-215 53,-271 6,-22 37,-135 -90,-160 -130,31 -131,120 -122,124 19,62 42,62 63,81l3 -26 86 57 -94 61c-1,-11 -2,-22 -3,-34 -180,-100 -118,-209 -40,-282 82,-76 325,-12 236,200 -17,51 -24,93 -41,144 -16,131 44,132 55,146 42,8 67,18 143,-52 45,-95 -51,-173 -138,-170l12 -45z"/>
  <g id="_564811536">
   <path className="visualizefil18" d="M2115 3544c32,157 -37,184 -82,234 89,24 145,-45 149,-40 140,200 255,198 409,120 -11,-170 -210,-259 -370,-187 -17,8 -7,-101 -106,-128z"/>
   <ellipse className="visualizefil12" transform="matrix(0.439316 0.163213 -0.163213 0.439316 2460.92 3778.59)" rx="59" ry="56"/>
   <path className="visualizefil18" d="M2176 3346c49,23 88,63 130,31 36,51 94,82 138,55 46,28 81,76 126,50 66,66 78,41 112,59l-10 28c-31,-14 -54,25 -108,-51 -43,-5 -91,-6 -133,-50 -48,-23 -110,3 -141,-56 -58,33 -91,-3 -126,-33l13 -34z"/>
   <path className="visualizefil18" d="M2135 3434c49,23 88,63 130,31 36,51 94,82 138,55 46,28 81,76 126,50 66,66 78,41 112,59l-10 28c-31,-14 -54,25 -108,-51 -43,-5 -91,-6 -133,-50 -48,-23 -110,3 -141,-56 -58,33 -91,-3 -126,-33l13 -34z"/>
  </g>
  <g id="_564812352">
   <path className="visualizefil18" d="M2791 2770c-36,-22 -82,-12 -106,20 -32,-17 -73,-6 -92,26 -12,19 -13,42 -5,62 -12,5 -20,8 -31,26 -11,17 -7,55 9,74l5 5 7 5c2,2 5,3 7,4l94 57c4,3 7,5 11,7l11 6 17 8c35,7 72,-8 94,-44 22,-36 14,-90 -22,-117 12,-7 22,-16 29,-28 23,-38 11,-88 -27,-111z"/>
   <rect className="visualizefil18" transform="matrix(0.446626 0.270374 -0.270374 0.446626 2611.76 3032.02)" width="81" height="182"/>
   <rect className="visualizefil18" transform="matrix(0.446626 0.270374 -0.226131 0.373543 2420.69 3061.25)" width="1073" height="97"/>
   <rect className="visualizefil18" transform="matrix(0.446626 0.270374 -0.226131 0.373543 2388.54 3116.49)" width="1073" height="97"/>
  </g>
  <g id="_564813600">
   <path className="visualizefil18" d="M2957 2487c23,-11 46,-31 64,-33 66,-2 150,40 167,24 37,-7 48,-32 58,-43 22,-26 33,-87 67,-77l64 11c-160,84 104,193 -109,293 5,13 17,38 22,51l134 -64 -13 -26 110 -49 46 94 -106 49 -15 -31 -343 162 -18 -36 155 -73c3,-1 -24,-52 -27,-53 -3,-1 -73,48 -154,13 85,-31 75,-58 97,-96 -31,14 -83,-9 -99,-21 -15,-12 -61,-102 -100,-96z"/>
   <rect className="visualizefil18" transform="matrix(0.499191 -0.237932 0.237932 0.499191 3457.42 2734.85)" width="247" height="51" rx="11" ry="11"/>
   <rect className="visualizefil18" transform="matrix(0.499191 -0.237932 0.237932 0.499191 3387.01 2584.44)" width="247" height="51" rx="11" ry="11"/>
   <rect className="visualizefil18" transform="matrix(-0.121415 -0.254734 0.499191 -0.237932 3075.16 2876.57)" width="247" height="51" rx="11" ry="11"/>
   <rect className="visualizefil18" transform="matrix(0.499191 -0.237932 0.237932 0.499191 3236.92 2682.73)" width="35" height="97"/>
   <path className="visualizefil18" d="M3379 2206c-36,23 -32,17 -18,58 42,-28 30,-16 18,-58z"/>
   <path className="visualizefil18" d="M3352 2275c-36,1 -30,3 -39,-32 42,0 28,-2 39,32z"/>
   <path className="visualizefil18" d="M3337 2320c-37,6 -31,7 -46,-28 44,-6 30,-7 46,28z"/>
   <path className="visualizefil18" d="M3409 2268c-36,-11 -30,-12 -49,22 43,12 28,11 49,-22z"/>
   <path className="visualizefil18" d="M3406 2319c-30,-23 -24,-22 -54,3 36,27 23,20 54,-3z"/>
   <path className="visualizefil20 str5" d="M3359 2264c-27,67 -7,114 23,151"/>
  </g>
  <g id="_564783744">
   <ellipse className="visualizefil20 str6" cx="3901" cy="2203" rx="145" ry="148"/>
   <ellipse className="visualizefil20 str6" cx="3771" cy="2297" rx="145" ry="148"/>
   <ellipse className="visualizefil20 str6" cx="3820" cy="2465" rx="145" ry="148"/>
   <ellipse className="visualizefil20 str6" cx="3980" cy="2463" rx="145" ry="148"/>
   <ellipse className="visualizefil20 str6" cx="4038" cy="2299" rx="145" ry="148"/>
  </g>
  <polygon className="visualizefil24" points="4497,1203 4497,1012 4548,1012 4576,1163 4574,1012 4607,1012 4607,1203 4556,1203 4528,1048 4530,1203 "/>
  <path id="1" className="visualizefil24" d="M4684 1158l0 -101c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -8,-3 -4,0 -6,1 -8,3 -1,2 -2,5 -2,11l0 101c0,5 1,9 2,11 1,2 4,3 8,3 4,0 6,-1 8,-3 1,-2 2,-5 2,-11zm37 -6c0,13 -1,22 -2,28 -1,6 -3,10 -6,14 -3,4 -7,7 -12,9 -5,2 -14,3 -27,3 -13,0 -22,-1 -27,-3 -5,-2 -9,-5 -12,-9 -3,-4 -5,-9 -6,-15 -1,-6 -2,-15 -2,-28l0 -88c0,-13 1,-22 2,-28 1,-6 3,-11 6,-15 3,-4 7,-7 13,-9 5,-2 14,-3 26,-3 12,0 21,1 26,3 5,2 9,5 13,9 3,4 5,9 6,15 1,6 2,15 2,28l0 88z"/>
  <path id="2" className="visualizefil24" d="M4533 1465l0 54 -36 0 0 -191 36 0c22,0 37,4 44,10 7,7 11,20 11,39l0 39c0,18 -4,31 -11,38 -7,7 -20,11 -39,11l-6 0zm19 -49l0 -40c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -9,-3l-8 0 0 68 8 0c4,0 7,-1 9,-3 1,-2 2,-6 2,-11z"/>
  <path id="3" className="visualizefil24" d="M4659 1474l0 -101c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -8,-3 -4,0 -6,1 -8,3 -1,2 -2,5 -2,11l0 101c0,5 1,9 2,11 1,2 4,3 8,3 4,0 6,-1 8,-3 1,-2 2,-5 2,-11zm37 -6c0,13 -1,22 -2,28 -1,6 -3,10 -6,14 -3,4 -7,7 -12,9 -5,2 -14,3 -27,3 -13,0 -22,-1 -27,-3 -5,-2 -9,-5 -12,-9 -3,-4 -5,-9 -6,-15 -1,-6 -2,-15 -2,-28l0 -88c0,-13 1,-22 2,-28 1,-6 3,-11 6,-15 3,-4 7,-7 13,-9 5,-2 14,-3 26,-3 12,0 21,1 26,3 5,2 9,5 13,9 3,4 5,9 6,15 1,6 2,15 2,28l0 88z"/>
  <polygon id="4" className="visualizefil24" points="4731,1519 4709,1328 4746,1328 4759,1495 4773,1328 4810,1328 4788,1519 "/>
  <polygon id="5" className="visualizefil24" points="4825,1519 4825,1328 4893,1328 4893,1362 4861,1362 4861,1404 4891,1404 4891,1437 4861,1437 4861,1485 4896,1485 4896,1519 "/>
  <path id="6" className="visualizefil24" d="M4958 1362l-9 0 0 59 9 0c5,0 8,-1 9,-3 2,-2 2,-5 2,-11l0 -32c0,-5 -1,-9 -2,-11 -2,-2 -5,-3 -9,-3zm11 109c0,-7 -1,-11 -3,-14 -2,-3 -6,-4 -11,-4l-6 0 0 66 -36 0 0 -191 37 0c22,0 37,3 44,10 7,7 11,20 11,39l0 22c0,11 -2,19 -6,25 -4,6 -10,10 -19,12 8,1 14,5 18,10 4,5 6,13 6,23l0 50 -35 0 0 -48z"/>
  <polygon id="7" className="visualizefil24" points="5041,1519 5041,1362 5017,1362 5017,1328 5101,1328 5101,1362 5077,1362 5077,1519 "/>
  <polygon id="8" className="visualizefil24" points="5134,1519 5134,1457 5102,1328 5139,1328 5154,1414 5168,1328 5202,1328 5170,1457 5170,1519 "/>
  <polygon className="visualizefil24" points="5480,1700 5480,1666 5520,1543 5483,1543 5483,1509 5557,1509 5557,1540 5516,1666 5557,1666 5557,1700 "/>
  <polygon id="1" className="visualizefil24" points="5574,1700 5574,1509 5642,1509 5642,1543 5610,1543 5610,1586 5640,1586 5640,1619 5610,1619 5610,1666 5645,1666 5645,1700 "/>
  <path id="2" className="visualizefil24" d="M5706 1543l-9 0 0 59 9 0c5,0 8,-1 9,-3 2,-2 2,-5 2,-11l0 -32c0,-5 -1,-9 -2,-11 -2,-2 -5,-3 -9,-3zm11 109c0,-7 -1,-11 -3,-14 -2,-3 -6,-4 -11,-4l-6 0 0 66 -36 0 0 -191 37 0c22,0 37,3 44,10 7,7 11,20 11,39l0 22c0,11 -2,19 -6,25 -4,6 -10,10 -19,12 8,1 14,5 18,10 4,5 6,13 6,23l0 50 -35 0 0 -48z"/>
  <path id="3" className="visualizefil24" d="M5829 1655l0 -101c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -8,-3 -4,0 -6,1 -8,3 -1,2 -2,5 -2,11l0 101c0,5 1,9 2,11 1,2 4,3 8,3 4,0 6,-1 8,-3 1,-2 2,-5 2,-11zm37 -6c0,13 -1,22 -2,28 -1,6 -3,10 -6,14 -3,4 -7,7 -12,9 -5,2 -14,3 -27,3 -13,0 -22,-1 -27,-3 -5,-2 -9,-5 -12,-9 -3,-4 -5,-9 -6,-15 -1,-6 -2,-15 -2,-28l0 -88c0,-13 1,-22 2,-28 1,-6 3,-11 6,-15 3,-4 7,-7 13,-9 5,-2 14,-3 26,-3 12,0 20,1 26,3 5,2 9,5 12,9 3,4 5,9 6,15 1,6 2,15 2,28l0 88z"/>
  <polygon id="4" className="visualizefil24" points="5486,2016 5486,1825 5522,1825 5522,1899 5541,1899 5541,1825 5577,1825 5577,2016 5541,2016 5541,1933 5522,1933 5522,2016 "/>
  <path id="5" className="visualizefil24" d="M5598 1825l36 0 0 145c0,5 1,9 2,11 1,2 4,3 8,3 4,0 6,-1 8,-3 1,-2 2,-5 2,-11l0 -145 34 0 0 129c0,15 -1,26 -2,33 -1,7 -3,13 -6,18 -3,5 -7,9 -13,11 -5,2 -13,3 -24,3 -11,0 -19,-1 -24,-3 -5,-2 -9,-6 -12,-11 -3,-5 -5,-10 -6,-17 -1,-7 -2,-18 -2,-33l0 -129z"/>
  <polygon id="6" className="visualizefil24" points="5709,2016 5709,1825 5760,1825 5788,1976 5786,1825 5818,1825 5818,2016 5768,2016 5740,1861 5742,2016 "/>
  <path id="7" className="visualizefil24" d="M5930 1912l0 53c0,13 -1,22 -2,28 -1,6 -3,11 -6,15 -3,4 -7,7 -11,9 -5,2 -13,3 -26,3 -13,0 -22,-1 -27,-3 -5,-2 -9,-5 -12,-9 -3,-4 -5,-9 -6,-15 -1,-6 -2,-15 -2,-28l0 -88c0,-13 1,-22 2,-28 1,-6 3,-11 6,-15 3,-4 7,-7 13,-9 5,-2 14,-3 26,-3 11,0 20,1 25,3 5,2 9,5 12,9 3,4 5,9 6,14 1,6 2,15 2,28l0 10 -34 0 0 -16c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -9,-3 -4,0 -7,1 -9,3 -1,2 -2,5 -2,11l0 101c0,5 1,9 2,11 1,2 4,3 9,3 4,0 7,-1 9,-3 1,-2 2,-5 2,-11l0 -25 -10 0 0 -34 44 0z"/>
  <polygon id="8" className="visualizefil24" points="5951,2016 5951,1825 6018,1825 6018,1859 5987,1859 5987,1902 6016,1902 6016,1935 5987,1935 5987,1982 6021,1982 6021,2016 "/>
  <path id="9" className="visualizefil24" d="M6083 1859l-9 0 0 59 9 0c5,0 8,-1 9,-3 2,-2 2,-5 2,-11l0 -32c0,-5 -1,-9 -2,-11 -2,-2 -5,-3 -9,-3zm11 109c0,-7 -1,-11 -3,-14 -2,-3 -6,-4 -11,-4l-6 0 0 66 -36 0 0 -191 37 0c22,0 37,3 44,10 7,7 11,20 11,39l0 22c0,11 -2,19 -6,25 -4,6 -10,10 -19,12 8,1 14,5 18,10 4,5 6,13 6,23l0 50 -35 0 0 -48z"/>
  <path className="visualizefil24" d="M6303 2569l29 44c7,11 12,19 14,24 2,5 3,11 3,16 0,5 -2,10 -5,14 -3,4 -10,9 -20,17 -11,7 -19,12 -24,13 -5,1 -10,1 -15,-1 -5,-2 -9,-5 -13,-9 -4,-4 -10,-11 -17,-22l-49 -74c-7,-11 -12,-19 -14,-24 -2,-5 -3,-11 -3,-16 0,-5 2,-10 6,-14 3,-4 10,-10 20,-17 9,-6 17,-10 22,-12 5,-1 10,-1 15,1 4,2 9,5 13,9 4,4 10,12 17,22l5 8 -29 19 -9 -13c-3,-4 -5,-7 -8,-8 -2,-1 -5,0 -9,3 -4,2 -6,5 -6,7 0,2 1,6 4,10l56 84c3,4 5,7 8,8 2,1 5,0 9,-3 4,-2 6,-5 6,-7 0,-2 -1,-6 -4,-10l-14 -20 -9 6 -19 -29 37 -25z"/>
  <path id="1" className="visualizefil24" d="M6398 2577l-56 -84c-3,-4 -5,-7 -7,-8 -2,-1 -5,0 -8,2 -3,2 -5,4 -5,7 0,2 1,6 4,10l56 84c3,5 6,7 8,8 2,1 5,0 8,-2 3,-2 5,-4 5,-6 0,-2 -1,-6 -4,-10zm27 -26c7,11 12,19 14,24 2,5 3,10 3,15 0,5 -2,10 -5,14 -3,4 -10,10 -21,17 -11,7 -19,12 -24,13 -5,1 -10,1 -15,-1 -5,-2 -9,-5 -13,-9 -4,-4 -10,-11 -17,-22l-49 -74c-7,-11 -12,-19 -14,-24 -2,-5 -3,-11 -3,-16 0,-5 2,-10 6,-14 3,-4 10,-10 20,-16 10,-7 18,-11 23,-12 5,-1 10,-1 15,1 5,2 9,5 13,9 4,4 10,11 17,22l49 74z"/>
  <path id="2" className="visualizefil24" d="M6491 2515l-56 -84c-3,-4 -5,-7 -7,-8 -2,-1 -5,0 -8,2 -3,2 -5,4 -5,7 0,2 1,6 4,10l56 84c3,5 6,7 8,8 2,1 5,0 8,-2 3,-2 5,-4 5,-6 0,-2 -1,-6 -4,-10zm27 -26c7,11 12,19 14,24 2,5 3,10 3,15 0,5 -2,10 -5,14 -3,4 -10,10 -21,17 -11,7 -19,12 -24,13 -5,1 -10,1 -15,-1 -5,-2 -9,-5 -13,-9 -4,-4 -10,-11 -17,-22l-49 -74c-7,-11 -12,-19 -14,-24 -2,-5 -3,-11 -3,-16 0,-5 2,-10 6,-14 3,-4 10,-10 20,-16 10,-7 18,-11 23,-12 5,-1 10,-1 15,1 5,2 9,5 13,9 4,4 10,11 17,22l49 74z"/>
  <path id="3" className="visualizefil24" d="M6564 2521l-105 -159 38 -25c15,-10 28,-14 38,-10 10,3 21,15 34,34l40 60c13,20 19,35 18,45 -1,10 -9,20 -24,30l-38 25zm20 -70l-53 -81c-3,-4 -5,-7 -7,-8 -2,-1 -5,0 -8,2l-8 5 68 102 8 -5c3,-2 5,-4 5,-6 0,-2 -1,-5 -4,-10z"/>
  <polygon id="4" className="visualizefil24" points="6703,2429 6597,2270 6628,2250 6668,2311 6684,2301 6643,2239 6673,2220 6779,2379 6748,2399 6703,2329 6687,2340 6733,2409 "/>
  <polygon id="5" className="visualizefil24" points="6797,2366 6692,2207 6749,2170 6768,2198 6741,2216 6764,2251 6789,2234 6807,2262 6782,2278 6809,2318 6838,2299 6857,2327 "/>
  <path id="6" className="visualizefil24" d="M6857 2232l14 -9 -56 -71 43 80zm7 90l-86 -172 48 -32 125 146 -31 20 -29 -37 -19 13 22 41 -30 20z"/>
  <polygon id="7" className="visualizefil24" points="6963,2257 6858,2097 6888,2077 6975,2208 7003,2189 7022,2218 "/>
  <polygon id="8" className="visualizefil24" points="7040,2206 6954,2075 6934,2088 6915,2060 6986,2013 7004,2042 6984,2055 7071,2186 "/>
  <polygon id="9" className="visualizefil24" points="7102,2165 6996,2006 7026,1986 7067,2048 7082,2037 7042,1976 7072,1956 7177,2115 7147,2135 7101,2066 7086,2076 7132,2146 "/>
  <path id="10" className="visualizefil24" d="M6445 2884l14 -9 -56 -71 43 80zm7 90l-86 -172 48 -32 125 146 -31 20 -29 -37 -19 13 22 41 -30 20z"/>
  <polygon id="11" className="visualizefil24" points="6551,2908 6446,2749 6488,2721 6595,2831 6510,2706 6537,2688 6642,2848 6600,2876 6491,2762 6578,2890 "/>
  <path id="12" className="visualizefil24" d="M6661 2835l-105 -159 38 -25c15,-10 28,-14 38,-10 10,3 21,15 34,34l40 60c13,20 19,35 18,45 -1,10 -9,20 -24,30l-38 25zm20 -70l-53 -81c-3,-4 -5,-7 -7,-8 -2,-1 -5,0 -8,2l-8 5 68 102 8 -5c3,-2 5,-4 5,-6 0,-2 -1,-5 -4,-10z"/>
  <polygon id="13" className="visualizefil24" points="6778,2529 6877,2654 6798,2516 6827,2497 6917,2666 6875,2694 6774,2568 6851,2710 6809,2738 6688,2588 6718,2569 6813,2696 6737,2556 "/>
  <polygon id="14" className="visualizefil24" points="6945,2648 6840,2488 6896,2451 6915,2480 6889,2497 6912,2532 6937,2516 6955,2543 6930,2560 6956,2599 6985,2580 7004,2609 "/>
  <polygon id="15" className="visualizefil24" points="7019,2599 6913,2440 6943,2420 7030,2551 7058,2532 7077,2560 "/>
  <polygon id="16" className="visualizefil24" points="7087,2554 6982,2395 7012,2375 7098,2506 7126,2487 7145,2515 "/>
  <path id="17" className="visualizefil24" d="M7167 2366l8 -6c4,-2 6,-5 6,-7 0,-2 -1,-6 -4,-10l-9 -14c-3,-4 -6,-7 -8,-8 -2,-1 -5,0 -9,2l-8 6 25 37zm16 25l27 42 9 -6c4,-2 6,-5 6,-7 0,-2 -1,-6 -4,-10l-12 -18c-3,-4 -6,-7 -8,-8 -2,-1 -5,0 -9,2l-9 6zm73 4c8,13 12,23 10,31 -2,8 -10,17 -25,26l-42 28 -105 -159 40 -27c15,-10 26,-14 34,-12 8,2 16,9 25,21l9 14c6,9 9,16 8,23 0,7 -3,13 -10,19 8,-4 15,-5 22,-2 7,3 14,9 21,20l12 18z"/>
  <polygon id="18" className="visualizefil24" points="7295,2417 7189,2257 7246,2220 7265,2248 7238,2266 7261,2301 7286,2285 7305,2312 7280,2329 7306,2368 7335,2349 7354,2377 "/>
  <polygon id="19" className="visualizefil24" points="7399,2348 7369,2368 7263,2208 7294,2188 "/>
  <polygon id="20" className="visualizefil24" points="7419,2335 7313,2175 7356,2147 7462,2258 7377,2133 7404,2115 7510,2274 7468,2302 7358,2189 7446,2317 "/>
  <path id="21" className="visualizefil24" d="M7547 2126l29 44c7,11 12,19 14,24 2,5 3,11 3,16 0,5 -2,10 -5,14 -3,4 -10,9 -20,17 -11,7 -19,12 -24,13 -5,1 -10,1 -15,-1 -5,-2 -9,-5 -13,-9 -4,-4 -10,-11 -17,-22l-49 -74c-7,-11 -12,-19 -14,-24 -2,-5 -3,-11 -3,-16 0,-5 2,-10 6,-14 3,-4 10,-10 20,-17 9,-6 17,-10 22,-12 5,-1 10,-1 15,1 4,2 9,5 13,9 4,4 10,12 17,22l5 8 -29 19 -9 -13c-3,-4 -5,-7 -8,-8 -2,-1 -5,0 -9,3 -4,2 -6,5 -6,7 0,2 1,6 4,10l56 84c3,4 5,7 8,8 2,1 5,0 9,-3 4,-2 6,-5 6,-7 0,-2 -1,-6 -4,-10l-14 -20 -9 6 -19 -29 37 -25z"/>
  <path className="visualizefil24" d="M6933 3362l0 -74c0,-5 -1,-9 -3,-11 -2,-2 -5,-3 -10,-3 -5,0 -9,1 -10,3 -2,2 -3,5 -3,11l0 101c0,5 1,9 3,11 2,2 5,3 10,3 5,0 8,-1 10,-2 2,-1 3,-4 3,-7l-20 -28 12 -15 8 12zm42 20l0 6c0,7 0,12 -1,16 -1,4 -2,7 -3,11l10 14 -15 14 -8 -13c-3,2 -7,4 -13,4 -6,1 -16,1 -31,1 -20,0 -33,-4 -39,-11 -7,-7 -10,-21 -10,-43l0 -88c0,-13 1,-22 2,-28 1,-6 4,-11 7,-15 4,-4 9,-7 15,-9 6,-2 16,-3 31,-3 14,0 24,1 30,3 6,2 11,5 15,9 3,4 6,9 7,15 1,6 2,15 2,28l0 88z"/>
  <path id="1" className="visualizefil24" d="M6999 3243l43 0 0 145c0,5 1,9 2,11 1,2 5,3 9,3 5,0 8,-1 9,-3 2,-2 2,-5 2,-11l0 -145 41 0 0 129c0,15 -1,26 -2,33 -1,7 -4,13 -7,18 -4,5 -9,9 -15,11 -6,2 -16,3 -29,3 -13,0 -23,-1 -29,-3 -6,-2 -11,-6 -15,-11 -3,-5 -6,-10 -7,-17 -1,-7 -2,-18 -2,-33l0 -129z"/>
  <path id="2" className="visualizefil24" d="M7173 3355l19 0 -9 -90 -10 90zm-51 79l27 -191 68 0 28 191 -44 0 -5 -47 -27 0 -5 47 -43 0z"/>
  <polygon id="3" className="visualizefil24" points="7262,3434 7262,3243 7304,3243 7304,3400 7345,3400 7345,3434 "/>
  <polygon id="4" className="visualizefil24" points="7402,3434 7359,3434 7359,3243 7402,3243 "/>
  <polygon id="5" className="visualizefil24" points="7447,3434 7447,3277 7418,3277 7418,3243 7518,3243 7518,3277 7489,3277 7489,3434 "/>
  <polygon id="6" className="visualizefil24" points="7557,3434 7557,3372 7519,3243 7562,3243 7580,3329 7596,3243 7637,3243 7600,3372 7600,3434 "/>
  <polygon id="7" className="visualizefil24" points="6867,3750 6867,3559 6947,3559 6947,3593 6910,3593 6910,3635 6945,3635 6945,3668 6910,3668 6910,3716 6951,3716 6951,3750 "/>
  <path id="8" className="visualizefil24" d="M6971 3750l0 -191 54 0c22,0 36,4 44,12 8,8 11,24 11,47l0 72c0,23 -4,39 -11,47 -8,8 -22,12 -44,12l-54 0zm65 -47l0 -97c0,-5 -1,-9 -2,-10 -1,-2 -4,-3 -9,-3l-11 0 0 123 11 0c5,0 8,-1 9,-3 2,-2 2,-5 2,-10z"/>
  <path id="9" className="visualizefil24" d="M7104 3559l43 0 0 145c0,5 1,9 2,11 1,2 5,3 9,3 5,0 8,-1 9,-3 2,-2 2,-5 2,-11l0 -145 41 0 0 129c0,15 -1,26 -2,33 -1,7 -4,13 -7,18 -4,5 -9,9 -15,11 -6,2 -16,3 -29,3 -13,0 -23,-1 -29,-3 -6,-2 -11,-6 -15,-11 -3,-5 -6,-10 -7,-17 -1,-7 -2,-18 -2,-33l0 -129z"/>
  <path id="10" className="visualizefil24" d="M7299 3623l0 -19c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -8,-3 -4,0 -7,1 -8,3 -1,2 -2,5 -2,11l0 101c0,5 1,9 2,11 1,2 4,3 8,3 4,0 7,-1 8,-3 1,-2 2,-5 2,-11l0 -26 39 0 0 20c0,13 -1,22 -2,28 -1,6 -3,11 -6,14 -3,4 -7,7 -12,9 -5,2 -14,3 -28,3 -16,0 -26,-1 -32,-3 -6,-2 -10,-5 -14,-9 -3,-4 -6,-9 -7,-15 -1,-6 -2,-15 -2,-28l0 -88c0,-13 1,-22 2,-28 1,-6 4,-11 7,-15 4,-4 9,-7 15,-9 6,-2 16,-3 31,-3 12,0 21,1 27,2 6,2 10,5 13,9 3,4 5,9 7,15 1,6 2,15 2,28l0 13 -39 0z"/>
  <path id="11" className="visualizefil24" d="M7408 3671l19 0 -9 -90 -10 90zm-51 79l27 -191 68 0 28 191 -44 0 -5 -47 -27 0 -5 47 -43 0z"/>
  <polygon id="12" className="visualizefil24" points="7507,3750 7507,3593 7479,3593 7479,3559 7579,3559 7579,3593 7550,3593 7550,3750 "/>
  <polygon id="13" className="visualizefil24" points="7637,3750 7595,3750 7595,3559 7637,3559 "/>
  <path id="14" className="visualizefil24" d="M7730 3705l0 -101c0,-5 -1,-9 -2,-11 -2,-2 -4,-3 -9,-3 -5,0 -8,1 -9,3 -2,2 -2,5 -2,11l0 101c0,5 1,9 2,11 2,2 5,3 9,3 4,0 7,-1 9,-3 2,-2 2,-5 2,-11zm44 -6c0,13 -1,22 -2,28 -1,6 -4,10 -7,14 -4,4 -8,7 -14,9 -6,2 -16,3 -32,3 -16,0 -26,-1 -32,-3 -6,-2 -10,-5 -14,-9 -3,-4 -6,-9 -7,-15 -1,-6 -2,-15 -2,-28l0 -88c0,-13 1,-22 2,-28 1,-6 4,-11 7,-15 4,-4 9,-7 15,-9 6,-2 16,-3 31,-3 14,0 24,1 30,3 6,2 11,5 15,9 3,4 6,9 7,15 1,6 2,15 2,28l0 88z"/>
  <polygon id="15" className="visualizefil24" points="7798,3750 7798,3559 7858,3559 7891,3710 7888,3559 7927,3559 7927,3750 7867,3750 7834,3595 7836,3750 "/>
  <path className="visualizefil24" d="M5872 6393l16 0 -8 -90 -8 90zm-44 79l23 -191 58 0 24 191 -37 0 -4 -47 -23 0 -4 47 -36 0z"/>
  <polygon id="1" className="visualizefil24" points="5947,6472 5947,6281 6015,6281 6015,6315 5983,6315 5983,6363 6012,6363 6012,6397 5983,6397 5983,6472 "/>
  <polygon id="2" className="visualizefil24" points="6032,6472 6032,6281 6100,6281 6100,6315 6068,6315 6068,6363 6096,6363 6096,6397 6068,6397 6068,6472 "/>
  <path id="3" className="visualizefil24" d="M6171 6427l0 -101c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -8,-3 -4,0 -6,1 -8,3 -1,2 -2,5 -2,11l0 101c0,5 1,9 2,11 1,2 4,3 8,3 4,0 6,-1 8,-3 1,-2 2,-5 2,-11zm37 -6c0,13 -1,22 -2,28 -1,6 -3,10 -6,14 -3,4 -7,7 -12,9 -5,2 -14,3 -27,3 -13,0 -22,-1 -27,-3 -5,-2 -9,-5 -12,-9 -3,-4 -5,-9 -6,-15 -1,-6 -2,-15 -2,-28l0 -88c0,-13 1,-22 2,-28 1,-6 3,-11 6,-15 3,-4 7,-7 13,-9 5,-2 14,-3 26,-3 12,0 21,1 26,3 5,2 9,5 13,9 3,4 5,9 6,15 1,6 2,15 2,28l0 88z"/>
  <path id="4" className="visualizefil24" d="M6273 6315l-9 0 0 59 9 0c5,0 8,-1 9,-3 2,-2 2,-5 2,-11l0 -32c0,-5 -1,-9 -2,-11 -2,-2 -5,-3 -9,-3zm11 109c0,-7 -1,-11 -3,-14 -2,-3 -6,-4 -11,-4l-6 0 0 66 -36 0 0 -191 37 0c22,0 37,3 44,10 7,7 11,20 11,39l0 22c0,11 -2,19 -6,25 -4,6 -10,10 -19,12 8,1 14,5 18,10 4,5 6,13 6,23l0 50 -35 0 0 -48z"/>
  <path id="5" className="visualizefil24" d="M6342 6472l0 -191 46 0c18,0 31,4 37,12 6,8 10,24 10,47l0 72c0,23 -3,39 -10,47 -6,8 -19,12 -37,12l-46 0zm55 -47l0 -97c0,-5 -1,-9 -2,-10 -1,-2 -4,-3 -8,-3l-10 0 0 123 10 0c4,0 6,-1 8,-3 1,-2 2,-5 2,-10z"/>
  <path id="6" className="visualizefil24" d="M6490 6393l16 0 -8 -90 -8 90zm-44 79l23 -191 58 0 24 191 -37 0 -4 -47 -23 0 -4 47 -36 0z"/>
  <path id="7" className="visualizefil24" d="M6601 6359l10 0c4,0 7,-1 9,-3 1,-2 2,-5 2,-11l0 -17c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -9,-3l-10 0 0 45zm0 30l0 50 11 0c4,0 7,-1 9,-3 1,-2 2,-6 2,-11l0 -22c0,-5 -1,-9 -2,-11 -2,-2 -4,-3 -9,-3l-11 0zm58 43c0,15 -3,26 -9,31 -6,6 -18,8 -35,8l-50 0 0 -191 48 0c18,0 29,3 35,9 6,6 9,16 9,31l0 17c0,11 -2,18 -6,24 -4,5 -10,9 -19,11 9,1 15,4 20,10 4,6 6,16 6,28l0 22z"/>
  <polygon id="8" className="visualizefil24" points="6679,6472 6679,6281 6716,6281 6716,6438 6750,6438 6750,6472 "/>
  <polygon id="9" className="visualizefil24" points="6761,6472 6761,6281 6829,6281 6829,6315 6797,6315 6797,6357 6827,6357 6827,6390 6797,6390 6797,6438 6832,6438 6832,6472 "/>
  <polygon id="10" className="visualizefil24" points="5836,6788 5836,6597 5904,6597 5904,6631 5872,6631 5872,6673 5902,6673 5902,6706 5872,6706 5872,6754 5907,6754 5907,6788 "/>
  <polygon id="11" className="visualizefil24" points="5924,6788 5924,6597 5975,6597 6003,6748 6001,6597 6034,6597 6034,6788 5983,6788 5955,6633 5957,6788 "/>
  <polygon id="12" className="visualizefil24" points="6056,6788 6056,6597 6124,6597 6124,6631 6092,6631 6092,6673 6122,6673 6122,6706 6092,6706 6092,6754 6127,6754 6127,6788 "/>
  <path id="13" className="visualizefil24" d="M6189 6631l-9 0 0 59 9 0c5,0 8,-1 9,-3 2,-2 2,-5 2,-11l0 -32c0,-5 -1,-9 -2,-11 -2,-2 -5,-3 -9,-3zm11 109c0,-7 -1,-11 -3,-14 -2,-3 -6,-4 -11,-4l-6 0 0 66 -36 0 0 -191 37 0c22,0 37,3 44,10 7,7 11,20 11,39l0 22c0,11 -2,19 -6,25 -4,6 -10,10 -19,12 8,1 14,5 18,10 4,5 6,13 6,23l0 50 -35 0 0 -48z"/>
  <path id="14" className="visualizefil24" d="M6348 6684l0 53c0,13 -1,22 -2,28 -1,6 -3,11 -6,15 -3,4 -7,7 -11,9 -5,2 -13,3 -26,3 -13,0 -22,-1 -27,-3 -5,-2 -9,-5 -12,-9 -3,-4 -5,-9 -6,-15 -1,-6 -2,-15 -2,-28l0 -88c0,-13 1,-22 2,-28 1,-6 3,-11 6,-15 3,-4 7,-7 13,-9 5,-2 14,-3 26,-3 11,0 20,1 25,3 5,2 9,5 13,9 3,4 5,9 6,14 1,6 2,15 2,28l0 10 -34 0 0 -16c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -9,-3 -4,0 -7,1 -9,3 -1,2 -2,5 -2,11l0 101c0,5 1,9 2,11 1,2 4,3 9,3 4,0 7,-1 9,-3 1,-2 2,-5 2,-11l0 -25 -10 0 0 -34 45 0z"/>
  <polygon id="15" className="visualizefil24" points="6393,6788 6393,6726 6361,6597 6398,6597 6412,6683 6426,6597 6460,6597 6429,6726 6429,6788 "/>
  <path className="visualizefil24" d="M4938 6802l-14 -158 34 -3c13,-1 23,1 28,8 5,6 9,19 10,39l5 60c2,19 0,33 -4,40 -4,7 -13,11 -26,12l-34 3zm37 -42l-7 -80c0,-4 -1,-7 -2,-8 -1,-1 -3,-2 -6,-2l-7 1 9 102 7 -1c3,0 5,-1 5,-3 1,-2 1,-4 1,-9z"/>
  <polygon id="1" className="visualizefil24" points="5021,6794 5007,6636 5057,6632 5059,6660 5036,6662 5039,6697 5061,6695 5063,6722 5041,6724 5045,6764 5070,6761 5073,6790 "/>
  <path id="2" className="visualizefil24" d="M5115 6680l-1 -16c0,-4 -1,-7 -2,-9 -1,-1 -3,-2 -5,-2 -3,0 -4,1 -5,3 -1,1 -1,5 0,9l7 83c0,5 1,7 2,9 1,1 3,2 5,2 3,0 4,-1 5,-3 1,-2 1,-5 1,-9l-2 -22 24 -2 1 16c1,11 1,18 1,23 0,5 -1,9 -3,12 -2,4 -4,6 -7,8 -3,2 -9,3 -17,4 -10,1 -16,1 -20,0 -4,-1 -7,-3 -9,-7 -2,-3 -4,-7 -6,-12 -1,-5 -2,-12 -3,-23l-6 -73c-1,-11 -1,-18 -1,-23 0,-5 2,-9 4,-12 2,-4 5,-7 9,-8 4,-2 10,-3 19,-4 8,-1 13,0 17,1 4,1 6,3 9,7 2,3 4,7 5,12 1,5 2,12 3,23l1 11 -24 2z"/>
  <polygon id="3" className="visualizefil24" points="5162,6782 5148,6624 5198,6619 5201,6648 5177,6650 5180,6685 5202,6683 5205,6710 5183,6712 5186,6751 5212,6749 5214,6777 "/>
  <polygon id="4" className="visualizefil24" points="5227,6776 5213,6618 5251,6615 5282,6738 5269,6613 5293,6611 5307,6769 5270,6773 5238,6646 5251,6774 "/>
  <polygon id="5" className="visualizefil24" points="5334,6767 5323,6637 5305,6639 5303,6610 5365,6605 5368,6633 5350,6635 5361,6765 "/>
  <polygon id="6" className="visualizefil24" points="5020,6899 5042,7029 5037,6897 5063,6895 5064,7054 5026,7058 5004,6925 5006,7059 4968,7063 4941,6906 4967,6903 4985,7034 4984,6902 "/>
  <path id="7" className="visualizefil24" d="M5125 7011l-7 -83c0,-4 -1,-7 -2,-9 -1,-1 -3,-2 -6,-2 -3,0 -5,1 -6,3 -1,2 -1,5 -1,9l7 83c0,4 1,7 2,9 1,1 3,2 6,2 3,0 5,-1 5,-3 1,-2 1,-5 1,-9zm27 -8c1,11 1,19 1,23 0,5 -2,9 -3,12 -2,4 -5,6 -8,8 -3,2 -10,3 -20,4 -10,1 -16,1 -20,0 -4,-1 -7,-3 -9,-7 -2,-3 -4,-7 -6,-12 -1,-5 -2,-12 -3,-23l-6 -73c-1,-11 -1,-18 -1,-23 0,-5 2,-9 4,-12 2,-4 5,-7 9,-8 4,-2 10,-3 19,-4 9,-1 15,-1 19,0 4,1 7,3 10,7 2,3 4,7 6,12 1,5 2,12 3,23l6 73z"/>
  <path id="8" className="visualizefil24" d="M5192 6912l-6 1 4 49 6 -1c3,0 6,-1 7,-3 1,-2 1,-5 1,-9l-2 -26c0,-4 -1,-7 -3,-9 -1,-1 -4,-2 -7,-2zm16 90c0,-5 -2,-9 -3,-11 -2,-2 -4,-3 -8,-2l-4 0 5 54 -27 2 -14 -158 28 -2c16,-1 27,1 33,6 6,5 9,16 11,31l2 18c1,9 0,16 -2,21 -2,5 -7,9 -13,11 6,1 11,3 14,7 3,4 5,10 6,19l4 41 -26 2 -3 -40z"/>
  <polygon id="9" className="visualizefil24" points="5254,7038 5240,6880 5266,6877 5272,6946 5283,6876 5310,6873 5295,6950 5327,7031 5300,7034 5274,6964 5280,7036 "/>
  <path id="10" className="visualizefil24" d="M5394 6960l12 -1 -12 -74 0 75zm-26 68l3 -160 42 -4 31 157 -27 2 -7 -39 -17 1 0 39 -27 2z"/>
  <polygon id="11" className="visualizefil24" points="5455,7020 5442,6862 5479,6859 5510,6982 5498,6857 5522,6855 5536,7013 5499,7017 5467,6890 5479,7018 "/>
  <path id="12" className="visualizefil24" d="M5552 7012l-14 -158 34 -3c13,-1 23,1 28,8 5,6 9,19 10,39l5 60c2,19 0,33 -4,40 -4,7 -13,11 -26,12l-34 3zm37 -42l-7 -80c0,-4 -1,-7 -2,-8 -1,-1 -3,-2 -6,-2l-7 1 9 102 7 -1c3,0 5,-1 5,-3 1,-2 1,-4 1,-9z"/>
  <polygon id="13" className="visualizefil24" points="4983,7325 4969,7167 5019,7163 5022,7191 4998,7193 5001,7228 5023,7226 5026,7253 5004,7255 5007,7295 5033,7292 5035,7321 "/>
  <path id="14" className="visualizefil24" d="M5078 7211l-1 -16c0,-4 -1,-7 -2,-9 -1,-1 -3,-2 -5,-2 -3,0 -4,1 -5,3 -1,1 -1,5 0,9l7 83c0,5 1,7 2,9 1,1 3,2 5,2 3,0 4,-1 5,-3 1,-2 1,-5 1,-9l-2 -22 24 -2 1 16c1,11 1,18 1,23 0,5 -1,9 -3,12 -2,4 -4,6 -7,8 -3,2 -9,3 -17,4 -10,1 -16,1 -20,0 -4,-1 -7,-3 -9,-7 -2,-3 -4,-7 -6,-12 -1,-5 -2,-12 -3,-23l-6 -73c-1,-11 -1,-18 -1,-23 0,-5 2,-9 4,-12 2,-4 5,-7 9,-8 4,-2 10,-3 19,-4 8,-1 13,0 17,1 4,1 6,3 9,7 2,3 4,7 5,12 1,5 2,12 3,23l1 11 -24 2z"/>
  <path id="15" className="visualizefil24" d="M5161 7272l-7 -83c0,-4 -1,-7 -2,-9 -1,-1 -3,-2 -6,-2 -3,0 -5,1 -6,3 -1,2 -1,5 -1,9l7 83c0,4 1,7 2,9 1,1 3,2 6,2 3,0 5,-1 5,-3 1,-2 1,-5 1,-9zm27 -8c1,11 1,19 1,23 0,5 -2,9 -3,12 -2,4 -5,6 -8,8 -3,2 -10,3 -20,4 -10,1 -16,1 -20,0 -4,-1 -7,-3 -9,-7 -2,-3 -4,-7 -6,-12 -1,-5 -2,-12 -3,-23l-6 -73c-1,-11 -1,-18 -1,-23 0,-5 2,-9 4,-12 2,-4 5,-7 9,-8 4,-2 10,-3 19,-4 9,-1 15,-1 19,0 4,1 7,3 10,7 2,3 4,7 6,12 1,5 2,12 3,23l6 73z"/>
  <polygon id="16" className="visualizefil24" points="5207,7306 5193,7148 5230,7144 5262,7268 5249,7143 5273,7141 5287,7299 5250,7302 5218,7175 5231,7304 "/>
  <path id="17" className="visualizefil24" d="M5341 7257l-7 -83c0,-4 -1,-7 -2,-9 -1,-1 -3,-2 -6,-2 -3,0 -5,1 -6,3 -1,2 -1,5 -1,9l7 83c0,4 1,7 2,9 1,1 3,2 6,2 3,0 5,-1 5,-3 1,-2 1,-5 1,-9zm27 -8c1,11 1,19 1,23 0,5 -2,9 -3,12 -2,4 -5,6 -8,8 -3,2 -10,3 -20,4 -10,1 -16,1 -20,0 -4,-1 -7,-3 -9,-7 -2,-3 -4,-7 -6,-12 -1,-5 -2,-12 -3,-23l-6 -73c-1,-11 -1,-18 -1,-23 0,-5 2,-9 4,-12 2,-4 5,-7 9,-8 4,-2 10,-3 19,-4 9,-1 15,-1 19,0 4,1 7,3 10,7 2,3 4,7 6,12 1,5 2,12 3,23l6 73z"/>
  <polygon id="18" className="visualizefil24" points="5386,7290 5373,7132 5411,7129 5437,7252 5442,7126 5480,7123 5494,7281 5470,7283 5460,7149 5454,7284 5424,7287 5396,7155 5409,7288 "/>
  <polygon id="19" className="visualizefil24" points="5538,7277 5511,7279 5497,7121 5524,7119 "/>
  <path id="20" className="visualizefil24" d="M5585 7167l-1 -16c0,-4 -1,-7 -2,-9 -1,-1 -3,-2 -5,-2 -3,0 -4,1 -5,3 -1,1 -1,5 0,9l7 83c0,5 1,7 2,9 1,1 3,2 5,2 3,0 4,-1 5,-3 1,-2 1,-5 1,-9l-2 -22 24 -2 1 16c1,11 1,18 1,23 0,5 -1,9 -3,12 -2,4 -4,6 -7,8 -3,2 -9,3 -17,4 -10,1 -16,1 -20,0 -4,-1 -7,-3 -9,-7 -2,-3 -4,-7 -6,-12 -1,-5 -2,-12 -3,-23l-6 -73c-1,-11 -1,-18 -1,-23 0,-5 2,-9 4,-12 2,-4 5,-7 9,-8 4,-2 10,-3 19,-4 8,-1 13,0 17,1 4,1 6,3 9,7 2,3 4,7 5,12 1,5 2,12 3,23l1 11 -24 2z"/>
  <path id="21" className="visualizefil24" d="M5065 7495l4 44c1,11 1,18 1,23 0,5 -2,9 -3,13 -2,4 -5,6 -8,8 -3,2 -10,3 -19,4 -10,1 -16,1 -20,0 -4,-1 -7,-3 -9,-7 -2,-3 -4,-7 -6,-12 -1,-5 -2,-12 -3,-23l-6 -73c-1,-11 -1,-18 -1,-23 0,-5 2,-9 4,-12 2,-4 5,-7 9,-8 4,-2 10,-3 19,-4 8,-1 15,-1 19,1 4,1 7,3 10,7 2,3 4,7 6,12 1,5 2,12 3,23l1 8 -25 2 -1 -13c0,-4 -1,-7 -2,-9 -1,-1 -3,-2 -7,-2 -3,0 -5,1 -6,3 -1,2 -1,5 -1,9l7 83c0,4 1,7 2,9 1,1 3,2 7,2 3,0 5,-1 6,-3 1,-2 1,-5 1,-9l-2 -20 -8 1 -2 -28 33 -3z"/>
  <path id="22" className="visualizefil24" d="M5109 7447l-6 1 4 49 6 -1c3,0 6,-1 7,-3 1,-2 1,-5 1,-9l-2 -26c0,-4 -1,-7 -3,-9 -1,-1 -4,-2 -7,-2zm16 90c0,-5 -2,-9 -3,-11 -2,-2 -4,-3 -8,-2l-4 0 5 54 -27 2 -14 -158 28 -2c16,-1 27,1 33,6 6,5 9,16 11,31l2 18c1,9 0,16 -2,21 -2,5 -7,9 -13,11 6,1 11,3 14,7 3,4 5,10 6,19l4 41 -26 2 -3 -40z"/>
  <path id="23" className="visualizefil24" d="M5208 7532l-7 -83c0,-4 -1,-7 -2,-9 -1,-1 -3,-2 -6,-2 -3,0 -5,1 -6,3 -1,2 -1,5 -1,9l7 83c0,4 1,7 2,9 1,1 3,2 6,2 3,0 5,-1 5,-3 1,-2 1,-5 1,-9zm27 -8c1,11 1,19 1,23 0,5 -2,9 -3,12 -2,4 -5,6 -8,8 -3,2 -10,3 -20,4 -10,1 -16,1 -20,0 -4,-1 -7,-3 -9,-7 -2,-3 -4,-7 -6,-12 -1,-5 -2,-12 -3,-23l-6 -73c-1,-11 -1,-18 -1,-23 0,-5 2,-9 4,-12 2,-4 5,-7 9,-8 4,-2 10,-3 19,-4 9,-1 15,-1 19,0 4,1 7,3 10,7 2,3 4,7 6,12 1,5 2,12 3,23l6 73z"/>
  <polygon id="24" className="visualizefil24" points="5313,7401 5335,7532 5330,7399 5356,7397 5357,7557 5319,7560 5297,7427 5299,7562 5261,7565 5234,7408 5260,7406 5278,7537 5277,7404 "/>
  <polygon id="25" className="visualizefil24" points="5392,7554 5380,7424 5363,7425 5360,7397 5422,7391 5425,7420 5407,7421 5418,7551 "/>
  <polygon id="26" className="visualizefil24" points="5446,7549 5432,7391 5458,7388 5464,7449 5477,7448 5472,7387 5499,7385 5512,7543 5486,7545 5480,7476 5466,7478 5472,7547 "/>
  <path className="visualizefil24" d="M7017 4451l0 53c0,13 -1,22 -2,28 -1,6 -3,11 -6,15 -3,4 -7,7 -11,9 -5,2 -13,3 -26,3 -13,0 -22,-1 -27,-3 -5,-2 -9,-5 -12,-9 -3,-4 -5,-9 -6,-15 -1,-6 -2,-15 -2,-28l0 -88c0,-13 1,-22 2,-28 1,-6 3,-11 6,-15 3,-4 7,-7 13,-9 5,-2 14,-3 26,-3 11,0 20,1 25,3 5,2 9,5 13,9 3,4 5,9 6,14 1,6 2,15 2,28l0 10 -34 0 0 -16c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -9,-3 -4,0 -7,1 -9,3 -1,2 -2,5 -2,11l0 101c0,5 1,9 2,11 1,2 4,3 9,3 4,0 7,-1 9,-3 1,-2 2,-5 2,-11l0 -25 -10 0 0 -34 45 0z"/>
  <polygon id="1" className="visualizefil24" points="7037,4555 7037,4364 7105,4364 7105,4398 7073,4398 7073,4441 7103,4441 7103,4474 7073,4474 7073,4521 7108,4521 7108,4555 "/>
  <polygon id="2" className="visualizefil24" points="7126,4555 7126,4364 7176,4364 7204,4515 7202,4364 7235,4364 7235,4555 7184,4555 7156,4400 7158,4555 "/>
  <path id="3" className="visualizefil24" d="M7257 4555l0 -191 46 0c18,0 31,4 37,12 6,8 10,24 10,47l0 72c0,23 -3,39 -10,47 -6,8 -19,12 -37,12l-46 0zm55 -47l0 -97c0,-5 -1,-9 -2,-10 -1,-2 -4,-3 -8,-3l-10 0 0 123 10 0c4,0 6,-1 8,-3 1,-2 2,-5 2,-10z"/>
  <polygon id="4" className="visualizefil24" points="7370,4555 7370,4364 7438,4364 7438,4398 7406,4398 7406,4441 7436,4441 7436,4474 7406,4474 7406,4521 7441,4521 7441,4555 "/>
  <path id="5" className="visualizefil24" d="M7504 4398l-9 0 0 59 9 0c5,0 8,-1 9,-3 2,-2 2,-5 2,-11l0 -32c0,-5 -1,-9 -2,-11 -2,-2 -5,-3 -9,-3zm11 109c0,-7 -1,-11 -3,-14 -2,-3 -6,-4 -11,-4l-6 0 0 66 -36 0 0 -191 37 0c22,0 37,3 44,10 7,7 11,20 11,39l0 22c0,11 -2,19 -6,25 -4,6 -10,10 -19,12 8,1 14,5 18,10 4,5 6,13 6,23l0 50 -35 0 0 -48z"/>
  <polygon id="6" className="visualizefil24" points="6926,4871 6926,4680 6994,4680 6994,4714 6962,4714 6962,4757 6992,4757 6992,4790 6962,4790 6962,4837 6997,4837 6997,4871 "/>
  <path id="7" className="visualizefil24" d="M7071 4800l0 -74c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -9,-3 -4,0 -7,1 -9,3 -1,2 -2,5 -2,11l0 101c0,5 1,9 2,11 1,2 4,3 9,3 4,0 7,-1 8,-2 1,-1 2,-4 3,-7l-17 -28 10 -15 6 12zm35 20l0 6c0,7 0,12 -1,16 0,4 -1,7 -2,11l8 14 -12 14 -7 -13c-2,2 -6,4 -11,4 -5,1 -13,1 -26,1 -17,0 -28,-4 -33,-11 -6,-7 -9,-21 -9,-43l0 -88c0,-13 1,-22 2,-28 1,-6 3,-11 6,-15 3,-4 7,-7 13,-9 5,-2 14,-3 26,-3 12,0 21,1 26,3 5,2 9,5 13,9 3,4 5,9 6,15 1,6 2,15 2,28l0 88z"/>
  <path id="8" className="visualizefil24" d="M7126 4680l36 0 0 145c0,5 1,9 2,11 1,2 4,3 8,3 4,0 6,-1 8,-3 1,-2 2,-5 2,-11l0 -145 35 0 0 129c0,15 -1,26 -2,33 -1,7 -3,13 -6,18 -3,5 -7,9 -13,11 -5,2 -13,3 -24,3 -11,0 -19,-1 -24,-3 -5,-2 -9,-6 -13,-11 -3,-5 -5,-10 -6,-17 -1,-7 -2,-18 -2,-33l0 -129z"/>
  <path id="9" className="visualizefil24" d="M7273 4792l16 0 -8 -90 -8 90zm-44 79l23 -191 58 0 24 191 -37 0 -4 -47 -23 0 -4 47 -36 0z"/>
  <polygon id="10" className="visualizefil24" points="7348,4871 7348,4680 7384,4680 7384,4837 7418,4837 7418,4871 "/>
  <polygon id="11" className="visualizefil24" points="7467,4871 7431,4871 7431,4680 7467,4680 "/>
  <polygon id="12" className="visualizefil24" points="7505,4871 7505,4714 7480,4714 7480,4680 7565,4680 7565,4714 7541,4714 7541,4871 "/>
  <polygon id="13" className="visualizefil24" points="7598,4871 7598,4809 7566,4680 7602,4680 7617,4767 7631,4680 7665,4680 7634,4809 7634,4871 "/>
  <path className="visualizefil24" d="M6515 5330l3 -19c1,-5 1,-9 0,-11 -1,-2 -3,-3 -6,-3 -3,0 -5,0 -7,2 -1,2 -2,5 -3,10l-14 100c-1,5 -1,9 0,11 1,2 3,3 6,3 3,0 5,0 7,-2 1,-2 2,-5 3,-10l4 -26 29 4 -3 20c-2,13 -3,22 -5,27 -2,6 -4,10 -7,14 -3,4 -6,6 -10,7 -4,1 -11,1 -21,0 -12,-2 -19,-3 -23,-6 -4,-2 -7,-6 -9,-10 -2,-4 -3,-9 -3,-15 0,-6 0,-15 2,-28l12 -87c2,-13 3,-22 5,-27 2,-6 4,-10 7,-14 3,-4 8,-6 12,-7 5,-1 13,-1 23,1 9,1 16,3 19,5 4,2 7,6 9,10 2,4 3,9 3,15 0,6 -1,15 -2,28l-2 13 -29 -4z"/>
  <polygon id="1" className="visualizefil24" points="6543,5461 6569,5272 6601,5276 6579,5431 6609,5436 6605,5469 "/>
  <polygon id="2" className="visualizefil24" points="6615,5471 6641,5282 6701,5290 6696,5324 6668,5320 6662,5362 6689,5365 6684,5398 6658,5394 6651,5441 6682,5445 6678,5479 "/>
  <path id="3" className="visualizefil24" d="M6735 5408l14 2 5 -90 -20 88zm-49 73l46 -186 51 7 -5 192 -32 -4 3 -47 -20 -3 -10 46 -32 -4z"/>
  <polygon id="4" className="visualizefil24" points="6790,5495 6816,5306 6861,5312 6865,5465 6883,5315 6912,5319 6886,5508 6842,5502 6838,5345 6819,5499 "/>
  <polygon id="5" className="visualizefil24" points="7066,5340 7057,5499 7087,5343 7118,5347 7076,5534 7032,5528 7041,5367 7007,5524 6962,5518 6972,5327 7003,5331 6990,5490 7024,5334 "/>
  <path id="6" className="visualizefil24" d="M7148 5464l14 2 5 -90 -20 88zm-49 73l46 -186 51 7 -5 192 -32 -4 3 -47 -20 -3 -10 46 -32 -4z"/>
  <polygon id="7" className="visualizefil24" points="7211,5552 7232,5397 7210,5394 7215,5360 7289,5370 7285,5404 7263,5401 7242,5557 "/>
  <polygon id="8" className="visualizefil24" points="7275,5561 7301,5372 7361,5380 7356,5414 7328,5410 7322,5452 7348,5455 7344,5488 7318,5484 7311,5531 7342,5536 7337,5570 "/>
  <path id="9" className="visualizefil24" d="M7413 5421l-8 -1 -8 58 8 1c4,1 7,0 9,-2 2,-2 3,-5 4,-10l4 -31c1,-5 1,-9 -1,-11 -1,-2 -4,-3 -8,-4zm-5 109c1,-7 1,-11 -1,-14 -1,-3 -5,-4 -9,-5l-5 -1 -9 65 -32 -4 26 -189 33 5c20,3 32,8 37,16 5,8 7,21 4,40l-3 22c-1,11 -4,19 -9,24 -4,5 -10,8 -18,9 7,2 12,7 15,12 3,6 3,14 2,23l-7 50 -31 -4 7 -48z"/>
  <path id="10" className="visualizefil24" d="M6451 5688l14 2 5 -90 -20 88zm-49 73l46 -186 51 7 -5 192 -32 -4 3 -47 -20 -3 -10 46 -32 -4z"/>
  <polygon id="11" className="visualizefil24" points="6506,5775 6532,5586 6577,5592 6581,5745 6599,5595 6628,5599 6602,5788 6558,5782 6554,5625 6535,5779 "/>
  <path id="12" className="visualizefil24" d="M6622 5791l26 -189 40 5c16,2 26,8 31,16 5,9 5,25 2,48l-10 72c-3,23 -8,39 -15,46 -7,7 -18,10 -34,7l-40 -5zm55 -40l13 -96c1,-5 1,-9 0,-11 -1,-2 -3,-3 -6,-3l-8 -1 -17 122 8 1c3,0 6,0 7,-2 1,-2 2,-5 3,-10z"/>
  <path id="13" className="visualizefil24" d="M6804 5751l-3 18c-1,5 0,8 1,11 1,2 3,4 7,4 4,1 6,0 8,-2 2,-2 3,-5 3,-11l2 -13c1,-4 1,-7 1,-9 0,-2 0,-4 -1,-5 -2,-4 -6,-7 -13,-11 -3,-2 -6,-3 -8,-4 -8,-5 -14,-10 -16,-17 -2,-7 -3,-17 -1,-30l2 -17c2,-17 6,-28 12,-35 6,-6 14,-8 26,-7l9 1c7,1 13,3 18,5 4,2 8,6 10,10 2,3 3,7 3,12 0,5 0,12 -2,22l-2 15 -28 -4 2 -12c1,-6 1,-10 0,-12 -1,-2 -3,-3 -7,-4 -3,0 -6,0 -7,2 -1,2 -2,5 -3,10l-2 12c-1,9 4,17 14,22 3,2 5,3 7,4 8,5 14,10 16,17 2,7 3,17 1,30l-3 25c-2,16 -6,27 -13,33 -6,6 -16,8 -28,7l-8 -1c-13,-2 -22,-6 -26,-13 -4,-7 -5,-19 -3,-36l3 -21 29 4z"/>
  <path id="14" className="visualizefil24" d="M6907 5750l14 2 5 -90 -20 88zm-49 73l46 -186 51 7 -5 192 -32 -4 3 -47 -20 -3 -10 46 -32 -4z"/>
  <polygon id="15" className="visualizefil24" points="6963,5837 6988,5648 7033,5654 7037,5807 7056,5657 7084,5661 7059,5850 7014,5844 7010,5687 6991,5841 "/>
  <polygon id="16" className="visualizefil24" points="7111,5858 7079,5853 7105,5664 7137,5668 "/>
  <polygon id="17" className="visualizefil24" points="7144,5862 7165,5707 7144,5704 7149,5670 7223,5680 7218,5714 7197,5711 7176,5866 "/>
  <path id="18" className="visualizefil24" d="M7245 5796l14 2 5 -90 -20 88zm-49 73l46 -186 51 7 -5 192 -32 -4 3 -47 -20 -3 -10 46 -32 -4z"/>
  <polygon id="19" className="visualizefil24" points="7308,5885 7330,5729 7308,5726 7313,5692 7387,5703 7383,5737 7361,5734 7340,5889 "/>
  <polygon id="20" className="visualizefil24" points="7405,5898 7373,5893 7399,5704 7431,5709 "/>
  <path id="21" className="visualizefil24" d="M7480 5863l14 -100c1,-5 1,-9 0,-11 -1,-2 -3,-3 -6,-4 -3,0 -6,0 -7,2 -1,2 -2,5 -3,10l-14 100c-1,5 -1,9 0,11 1,2 3,3 6,4 3,0 6,0 7,-2 1,-2 2,-5 3,-10zm33 -2c-2,13 -4,22 -5,28 -2,5 -4,10 -7,13 -3,4 -7,6 -12,7 -4,1 -12,1 -24,-1 -12,-2 -19,-3 -23,-6 -4,-2 -7,-6 -9,-10 -2,-4 -3,-9 -3,-15 0,-6 0,-15 2,-28l12 -87c2,-13 3,-22 5,-27 2,-6 4,-10 7,-14 3,-4 8,-6 12,-7 5,-1 13,-1 23,1 11,1 18,3 22,6 4,2 8,6 10,10 2,4 3,9 4,15 0,6 0,15 -2,28l-12 87z"/>
  <polygon id="22" className="visualizefil24" points="7524,5914 7550,5725 7595,5731 7599,5884 7617,5734 7646,5738 7620,5927 7576,5921 7572,5764 7553,5918 "/>
  <polygon className="visualizefil24" points="3924,7133 3899,7133 3899,6991 3924,6991 "/>
  <polygon id="1" className="visualizefil24" points="3940,7133 3940,6991 3974,6991 3993,7103 3992,6991 4014,6991 4014,7133 3979,7133 3960,7018 3962,7133 "/>
  <path id="2" className="visualizefil24" d="M4029 7133l0 -141 31 0c12,0 21,3 25,9 4,6 6,18 6,35l0 54c0,17 -2,29 -6,35 -4,6 -13,9 -25,9l-31 0zm37 -35l0 -72c0,-4 0,-6 -1,-8 -1,-1 -3,-2 -5,-2l-7 0 0 91 7 0c3,0 4,-1 5,-2 1,-1 1,-4 1,-8z"/>
  <path id="3" className="visualizefil24" d="M4105 6991l24 0 0 108c0,4 0,7 1,8 1,1 3,2 5,2 3,0 4,-1 5,-2 1,-1 1,-4 1,-8l0 -108 23 0 0 96c0,11 0,19 -1,24 -1,5 -2,9 -4,13 -2,4 -5,6 -9,8 -4,2 -9,2 -16,2 -7,0 -13,-1 -16,-2 -4,-2 -6,-4 -8,-8 -2,-3 -3,-8 -4,-13 -1,-5 -1,-13 -1,-25l0 -96z"/>
  <path id="4" className="visualizefil24" d="M4202 7085l0 14c0,4 1,6 2,8 1,2 3,2 6,2 3,0 5,-1 6,-2 1,-1 1,-4 1,-8l0 -10c0,-3 0,-5 0,-7 0,-1 -1,-3 -1,-4 -2,-3 -5,-5 -11,-6 -3,-1 -5,-1 -6,-2 -7,-3 -11,-6 -14,-11 -3,-5 -4,-12 -4,-22l0 -13c0,-13 2,-21 5,-27 4,-5 10,-7 19,-7l7 0c6,0 10,1 14,2 4,1 6,3 9,6 2,2 3,5 3,8 1,3 1,9 1,16l0 11 -22 0 0 -9c0,-4 0,-7 -1,-9 -1,-1 -3,-2 -5,-2 -3,0 -4,1 -5,2 -1,1 -1,4 -1,8l0 9c0,7 4,12 13,15 2,1 4,2 6,2 7,3 11,6 14,11 3,5 4,12 4,22l0 19c0,12 -2,20 -6,26 -4,5 -11,8 -20,8l-7 0c-10,0 -17,-2 -21,-7 -4,-5 -6,-14 -6,-26l0 -15 22 0z"/>
  <polygon id="5" className="visualizefil24" points="4262,7133 4262,7017 4246,7017 4246,6991 4303,6991 4303,7017 4287,7017 4287,7133 "/>
  <path id="6" className="visualizefil24" d="M4342 7016l-6 0 0 44 6 0c3,0 5,-1 6,-2 1,-1 2,-4 2,-8l0 -23c0,-4 -1,-7 -2,-8 -1,-1 -3,-2 -6,-2zm8 81c0,-5 -1,-8 -2,-10 -1,-2 -4,-3 -8,-3l-4 0 0 49 -24 0 0 -141 25 0c15,0 25,3 30,8 5,5 7,15 7,29l0 16c0,8 -1,14 -4,19 -3,4 -7,7 -13,9 6,1 10,4 12,8 3,4 4,10 4,17l0 37 -24 0 0 -36z"/>
  <polygon id="7" className="visualizefil24" points="4405,7133 4405,7087 4384,6991 4408,6991 4418,7055 4428,6991 4451,6991 4430,7087 4430,7133 "/>
  <polygon id="8" className="visualizefil24" points="3924,7366 3899,7366 3899,7225 3924,7225 "/>
  <polygon id="9" className="visualizefil24" points="3940,7366 3940,7225 3974,7225 3993,7337 3992,7225 4014,7225 4014,7366 3979,7366 3960,7252 3962,7366 "/>
  <polygon id="10" className="visualizefil24" points="4029,7366 4029,7225 4063,7225 4082,7337 4081,7225 4103,7225 4103,7366 4069,7366 4050,7252 4051,7366 "/>
  <path id="11" className="visualizefil24" d="M4155 7333l0 -74c0,-4 0,-7 -1,-8 -1,-1 -3,-2 -5,-2 -3,0 -4,1 -5,2 -1,1 -1,4 -1,8l0 74c0,4 0,7 1,8 1,1 3,2 5,2 3,0 4,-1 5,-2 1,-1 1,-4 1,-8zm25 -5c0,10 0,17 -1,21 -1,4 -2,8 -4,11 -2,3 -5,5 -8,7 -3,1 -9,2 -18,2 -9,0 -15,-1 -18,-2 -3,-1 -6,-3 -8,-7 -2,-3 -3,-7 -4,-11 -1,-4 -1,-11 -1,-20l0 -65c0,-9 0,-16 1,-20 1,-4 2,-8 4,-11 2,-3 5,-5 9,-7 4,-1 9,-2 18,-2 8,0 14,1 17,2 4,1 6,3 9,7 2,3 3,6 4,11 1,4 1,11 1,20l0 65z"/>
  <polygon id="12" className="visualizefil24" points="4203,7366 4189,7225 4214,7225 4223,7349 4232,7225 4257,7225 4243,7366 "/>
  <path id="13" className="visualizefil24" d="M4291 7308l11 0 -5 -67 -6 67zm-29 58l16 -141 39 0 16 141 -25 0 -3 -35 -15 0 -3 35 -24 0z"/>
  <polygon id="14" className="visualizefil24" points="4348,7366 4348,7250 4332,7250 4332,7225 4389,7225 4389,7250 4373,7250 4373,7366 "/>
  <polygon id="15" className="visualizefil24" points="4423,7366 4398,7366 4398,7225 4423,7225 "/>
  <path id="16" className="visualizefil24" d="M4475 7333l0 -74c0,-4 0,-7 -1,-8 -1,-1 -3,-2 -5,-2 -3,0 -4,1 -5,2 -1,1 -1,4 -1,8l0 74c0,4 0,7 1,8 1,1 3,2 5,2 3,0 4,-1 5,-2 1,-1 1,-4 1,-8zm25 -5c0,10 0,17 -1,21 -1,4 -2,8 -4,11 -2,3 -5,5 -8,7 -3,1 -9,2 -18,2 -9,0 -15,-1 -18,-2 -3,-1 -6,-3 -8,-7 -2,-3 -3,-7 -4,-11 -1,-4 -1,-11 -1,-20l0 -65c0,-9 0,-16 1,-20 1,-4 2,-8 4,-11 2,-3 5,-5 9,-7 4,-1 9,-2 18,-2 8,0 14,1 17,2 4,1 6,3 9,7 2,3 3,6 4,11 1,4 1,11 1,20l0 65z"/>
  <polygon id="17" className="visualizefil24" points="4514,7366 4514,7225 4549,7225 4568,7337 4566,7225 4588,7225 4588,7366 4554,7366 4535,7252 4537,7366 "/>
  <path id="18" className="visualizefil24" d="M4067 7542l11 0 -5 -67 -6 67zm-29 58l16 -141 39 0 16 141 -25 0 -3 -35 -15 0 -3 35 -24 0z"/>
  <polygon id="19" className="visualizefil24" points="4118,7600 4118,7459 4153,7459 4172,7570 4170,7459 4192,7459 4192,7600 4158,7600 4139,7485 4140,7600 "/>
  <path id="20" className="visualizefil24" d="M4208 7600l0 -141 31 0c12,0 21,3 25,9 4,6 6,18 6,35l0 54c0,17 -2,29 -6,35 -4,6 -13,9 -25,9l-31 0zm37 -35l0 -72c0,-4 0,-6 -1,-8 -1,-1 -3,-2 -5,-2l-7 0 0 91 7 0c3,0 4,-1 5,-2 1,-1 1,-4 1,-8z"/>
  <polygon id="21" className="visualizefil24" points="3924,7834 3899,7834 3899,7692 3924,7692 "/>
  <polygon id="22" className="visualizefil24" points="3940,7834 3940,7692 3974,7692 3993,7804 3992,7692 4014,7692 4014,7834 3979,7834 3960,7719 3962,7834 "/>
  <polygon id="23" className="visualizefil24" points="4029,7834 4029,7692 4075,7692 4075,7718 4053,7718 4053,7753 4073,7753 4073,7778 4053,7778 4053,7834 "/>
  <path id="24" className="visualizefil24" d="M4117 7717l-6 0 0 44 6 0c3,0 5,-1 6,-2 1,-1 2,-4 2,-8l0 -23c0,-4 -1,-7 -2,-8 -1,-1 -3,-2 -6,-2zm8 81c0,-5 -1,-8 -2,-10 -1,-2 -4,-3 -8,-3l-4 0 0 49 -24 0 0 -141 25 0c15,0 25,3 30,8 5,5 7,15 7,29l0 16c0,8 -1,14 -4,19 -3,4 -7,7 -13,9 6,1 10,4 12,8 3,4 4,10 4,17l0 37 -24 0 0 -36z"/>
  <path id="25" className="visualizefil24" d="M4187 7775l11 0 -5 -67 -6 67zm-29 58l16 -141 39 0 16 141 -25 0 -3 -35 -15 0 -3 35 -24 0z"/>
  <path id="26" className="visualizefil24" d="M4262 7787l0 14c0,4 1,6 2,8 1,2 3,2 6,2 3,0 5,-1 6,-2 1,-1 1,-4 1,-8l0 -10c0,-3 0,-5 0,-7 0,-1 -1,-3 -1,-4 -2,-3 -5,-5 -11,-6 -3,-1 -5,-1 -6,-2 -7,-3 -11,-6 -14,-11 -3,-5 -4,-12 -4,-22l0 -13c0,-13 2,-21 5,-27 4,-5 10,-7 19,-7l7 0c6,0 10,1 14,2 4,1 6,3 9,6 2,2 3,5 3,8 1,3 1,9 1,16l0 11 -22 0 0 -9c0,-4 0,-7 -1,-9 -1,-1 -3,-2 -5,-2 -3,0 -4,1 -5,2 -1,1 -1,4 -1,8l0 9c0,7 4,12 13,15 2,1 4,2 6,2 7,3 11,6 14,11 3,5 4,12 4,22l0 19c0,12 -2,20 -6,26 -4,5 -11,8 -20,8l-7 0c-10,0 -17,-2 -21,-7 -4,-5 -6,-14 -6,-26l0 -15 22 0z"/>
  <polygon id="27" className="visualizefil24" points="4323,7834 4323,7718 4306,7718 4306,7692 4364,7692 4364,7718 4347,7718 4347,7834 "/>
  <path id="28" className="visualizefil24" d="M4403 7717l-6 0 0 44 6 0c3,0 5,-1 6,-2 1,-1 2,-4 2,-8l0 -23c0,-4 -1,-7 -2,-8 -1,-1 -3,-2 -6,-2zm8 81c0,-5 -1,-8 -2,-10 -1,-2 -4,-3 -8,-3l-4 0 0 49 -24 0 0 -141 25 0c15,0 25,3 30,8 5,5 7,15 7,29l0 16c0,8 -1,14 -4,19 -3,4 -7,7 -13,9 6,1 10,4 12,8 3,4 4,10 4,17l0 37 -24 0 0 -36z"/>
  <path id="29" className="visualizefil24" d="M4449 7692l24 0 0 108c0,4 0,7 1,8 1,1 3,2 5,2 3,0 4,-1 5,-2 1,-1 1,-4 1,-8l0 -108 23 0 0 96c0,11 0,19 -1,24 -1,5 -2,9 -4,13 -2,4 -5,6 -9,8 -4,2 -9,2 -16,2 -7,0 -13,-1 -16,-2 -4,-2 -6,-4 -8,-8 -2,-3 -3,-8 -4,-13 -1,-5 -1,-13 -1,-25l0 -96z"/>
  <path id="30" className="visualizefil24" d="M4560 7740l0 -14c0,-4 0,-7 -1,-8 -1,-1 -2,-2 -5,-2 -2,0 -4,1 -5,2 -1,1 -1,4 -1,8l0 74c0,4 0,7 1,8 1,1 2,2 5,2 2,0 4,-1 5,-2 1,-1 1,-4 1,-8l0 -19 22 0 0 15c0,10 0,16 -1,21 -1,4 -2,8 -4,11 -2,3 -4,5 -7,7 -3,1 -8,2 -16,2 -9,0 -15,-1 -18,-2 -3,-1 -6,-3 -8,-7 -2,-3 -3,-7 -4,-11 -1,-4 -1,-11 -1,-21l0 -65c0,-9 0,-16 1,-20 1,-4 2,-8 4,-11 2,-3 5,-5 9,-7 4,-1 9,-2 18,-2 7,0 12,1 15,2 3,1 6,3 8,7 2,3 3,7 4,11 1,4 1,11 1,20l0 10 -22 0z"/>
  <polygon id="31" className="visualizefil24" points="4605,7834 4605,7718 4588,7718 4588,7692 4645,7692 4645,7718 4629,7718 4629,7834 "/>
  <path id="32" className="visualizefil24" d="M4654 7692l24 0 0 108c0,4 0,7 1,8 1,1 3,2 5,2 3,0 4,-1 5,-2 1,-1 1,-4 1,-8l0 -108 23 0 0 96c0,11 0,19 -1,24 -1,5 -2,9 -4,13 -2,4 -5,6 -9,8 -4,2 -9,2 -16,2 -7,0 -13,-1 -16,-2 -4,-2 -6,-4 -8,-8 -2,-3 -3,-8 -4,-13 -1,-5 -1,-13 -1,-25l0 -96z"/>
  <path id="33" className="visualizefil24" d="M4760 7717l-6 0 0 44 6 0c3,0 5,-1 6,-2 1,-1 2,-4 2,-8l0 -23c0,-4 -1,-7 -2,-8 -1,-1 -3,-2 -6,-2zm8 81c0,-5 -1,-8 -2,-10 -1,-2 -4,-3 -8,-3l-4 0 0 49 -24 0 0 -141 25 0c15,0 25,3 30,8 5,5 7,15 7,29l0 16c0,8 -1,14 -4,19 -3,4 -7,7 -13,9 6,1 10,4 12,8 3,4 4,10 4,17l0 37 -24 0 0 -36z"/>
  <polygon id="34" className="visualizefil24" points="4806,7834 4806,7692 4852,7692 4852,7718 4831,7718 4831,7749 4851,7749 4851,7773 4831,7773 4831,7808 4854,7808 4854,7834 "/>
  <path className="visualizefil24" d="M2766 6990l-9 0 0 54 9 0c5,0 8,-1 9,-3 2,-2 2,-5 2,-10l0 -29c0,-5 -1,-8 -2,-10 -2,-2 -5,-3 -9,-3zm11 100c0,-6 -1,-10 -3,-13 -2,-2 -6,-3 -11,-3l-6 0 0 60 -36 0 0 -176 37 0c22,0 37,3 44,10 7,6 11,18 11,36l0 20c0,10 -2,18 -6,23 -4,5 -10,9 -19,11 8,1 14,4 18,9 4,5 6,12 6,21l0 46 -35 0 0 -44z"/>
  <polygon id="1" className="visualizefil24" points="2834,7134 2834,6959 2902,6959 2902,6990 2870,6990 2870,7029 2900,7029 2900,7059 2870,7059 2870,7103 2905,7103 2905,7134 "/>
  <path id="2" className="visualizefil24" d="M2922 7134l0 -176 45 0c18,0 30,4 37,11 6,7 10,22 10,44l0 67c0,22 -3,36 -10,44 -6,7 -19,11 -37,11l-45 0zm55 -43l0 -89c0,-5 -1,-8 -2,-10 -1,-2 -4,-2 -8,-2l-10 0 0 113 10 0c4,0 6,-1 8,-2 1,-2 2,-5 2,-10z"/>
  <path id="3" className="visualizefil24" d="M3033 6959l36 0 0 134c0,5 1,8 2,10 1,2 4,3 8,3 4,0 6,-1 8,-3 1,-2 2,-5 2,-10l0 -134 34 0 0 119c0,14 -1,24 -2,30 -1,6 -3,12 -6,16 -3,5 -7,8 -13,10 -5,2 -13,3 -24,3 -11,0 -19,-1 -24,-3 -5,-2 -9,-5 -12,-10 -3,-4 -5,-10 -6,-16 -1,-6 -2,-16 -2,-31l0 -119z"/>
  <path id="4" className="visualizefil24" d="M3196 7018l0 -18c0,-5 -1,-8 -2,-10 -1,-2 -4,-2 -7,-2 -4,0 -6,1 -7,2 -1,2 -2,5 -2,10l0 93c0,5 1,8 2,10 1,2 3,2 7,2 4,0 6,-1 7,-2 1,-2 2,-5 2,-10l0 -24 33 0 0 18c0,12 -1,20 -2,26 -1,5 -3,10 -5,13 -3,4 -6,7 -10,8 -4,2 -12,2 -23,2 -13,0 -22,-1 -27,-2 -5,-2 -9,-4 -12,-8 -3,-4 -5,-8 -6,-13 -1,-5 -2,-14 -2,-26l0 -81c0,-12 1,-20 2,-25 1,-5 3,-10 6,-13 3,-4 7,-7 13,-8 5,-2 14,-2 26,-2 10,0 18,1 22,2 5,2 8,4 11,8 3,4 4,8 6,14 1,5 2,14 2,26l0 12 -33 0z"/>
  <polygon id="5" className="visualizefil24" points="3247,7134 3247,6959 3315,6959 3315,6990 3283,6990 3283,7029 3313,7029 3313,7059 3283,7059 3283,7103 3318,7103 3318,7134 "/>
  <path id="6" className="visualizefil24" d="M3335 7134l0 -176 45 0c18,0 30,4 37,11 6,7 10,22 10,44l0 67c0,22 -3,36 -10,44 -6,7 -19,11 -37,11l-45 0zm55 -43l0 -89c0,-5 -1,-8 -2,-10 -1,-2 -4,-2 -8,-2l-10 0 0 113 10 0c4,0 6,-1 8,-2 1,-2 2,-5 2,-10z"/>
  <polygon id="7" className="visualizefil24" points="2758,7425 2722,7425 2722,7250 2758,7250 "/>
  <polygon id="8" className="visualizefil24" points="2781,7425 2781,7250 2832,7250 2859,7389 2857,7250 2890,7250 2890,7425 2840,7425 2811,7283 2814,7425 "/>
  <polygon id="9" className="visualizefil24" points="2912,7425 2912,7250 2980,7250 2980,7281 2948,7281 2948,7320 2978,7320 2978,7350 2948,7350 2948,7394 2983,7394 2983,7425 "/>
  <path id="10" className="visualizefil24" d="M3055 7359l0 -68c0,-5 -1,-8 -2,-10 -1,-2 -4,-3 -9,-3 -4,0 -7,1 -9,3 -1,2 -2,5 -2,10l0 93c0,5 1,8 2,10 1,2 4,3 9,3 4,0 6,-1 8,-2 1,-1 2,-3 3,-7l-17 -25 10 -14 6 11zm35 19l0 6c0,6 0,11 -1,14 0,4 -1,7 -2,10l8 13 -12 13 -7 -12c-2,2 -6,3 -11,4 -5,1 -13,1 -26,1 -16,0 -27,-3 -33,-10 -6,-7 -8,-20 -8,-40l0 -81c0,-12 1,-20 2,-25 1,-5 3,-10 6,-13 3,-4 7,-7 13,-8 5,-2 14,-2 26,-2 12,0 20,1 26,2 5,2 9,4 12,8 3,4 5,8 6,13 1,5 2,14 2,25l0 81z"/>
  <path id="11" className="visualizefil24" d="M3110 7250l36 0 0 134c0,5 1,8 2,10 1,2 4,3 8,3 4,0 6,-1 8,-3 1,-2 2,-5 2,-10l0 -134 34 0 0 119c0,14 -1,24 -2,30 -1,6 -3,12 -6,16 -3,5 -7,8 -13,10 -5,2 -13,3 -24,3 -11,0 -19,-1 -24,-3 -5,-2 -9,-5 -12,-10 -3,-4 -5,-10 -6,-16 -1,-6 -2,-16 -2,-31l0 -119z"/>
  <path id="12" className="visualizefil24" d="M3256 7353l16 0 -8 -83 -8 83zm-43 73l23 -176 57 0 23 176 -37 0 -4 -43 -23 0 -4 43 -36 0z"/>
  <polygon id="13" className="visualizefil24" points="3331,7425 3331,7250 3367,7250 3367,7394 3400,7394 3400,7425 "/>
  <polygon id="14" className="visualizefil24" points="3448,7425 3413,7425 3413,7250 3448,7250 "/>
  <polygon id="15" className="visualizefil24" points="3486,7425 3486,7281 3462,7281 3462,7250 3546,7250 3546,7281 3522,7281 3522,7425 "/>
  <polygon id="16" className="visualizefil24" points="3579,7425 3579,7368 3547,7250 3583,7250 3598,7329 3612,7250 3645,7250 3614,7368 3614,7425 "/>
  <path className="visualizefil24" d="M1373 6764l6 15c2,4 3,7 5,8 2,1 4,1 7,0 3,-1 5,-3 5,-5 0,-2 0,-5 -2,-10l-4 -11c-1,-3 -2,-6 -3,-7 -1,-1 -2,-3 -3,-4 -3,-2 -8,-3 -15,-2 -3,0 -6,0 -8,0 -9,0 -15,-2 -20,-6 -5,-4 -9,-12 -14,-23l-6 -14c-5,-14 -7,-24 -5,-32 2,-7 8,-13 18,-16l8 -3c6,-2 12,-4 16,-4 5,0 9,1 12,3 3,2 5,4 7,8 2,3 5,9 8,18l5 12 -24 9 -4 -10c-2,-5 -4,-8 -5,-9 -2,-1 -4,-1 -7,0 -3,1 -5,3 -5,5 0,2 0,5 2,9l4 10c3,8 10,11 21,11 3,0 6,0 7,0 8,0 15,2 20,6 5,4 9,11 14,22l8 21c5,13 6,23 4,31 -2,8 -9,13 -19,17l-7 3c-11,4 -20,5 -27,1 -6,-4 -12,-12 -18,-27l-7 -17 25 -10z"/>
  <path id="1" className="visualizefil24" d="M1389 6639l27 -11 46 119c2,4 3,7 5,8 2,1 4,1 7,0 3,-1 4,-3 5,-4 0,-2 0,-5 -2,-9l-46 -119 26 -10 41 105c5,12 8,21 9,27 1,6 2,11 1,16 -1,5 -3,9 -6,12 -3,3 -9,6 -17,10 -8,3 -15,5 -19,5 -5,0 -9,-2 -13,-5 -4,-3 -7,-7 -10,-12 -3,-5 -7,-14 -12,-27l-41 -105z"/>
  <path id="2" className="visualizefil24" d="M1535 6701l6 15c2,4 3,7 5,8 2,1 4,1 7,0 3,-1 5,-3 5,-5 0,-2 0,-5 -2,-10l-4 -11c-1,-3 -2,-6 -3,-7 -1,-1 -2,-3 -3,-4 -3,-2 -8,-3 -15,-2 -3,0 -6,0 -8,0 -9,0 -15,-2 -20,-6 -5,-4 -9,-12 -14,-23l-6 -14c-5,-14 -7,-24 -5,-32 2,-7 8,-13 18,-16l8 -3c6,-2 12,-4 16,-4 5,0 9,1 12,3 3,2 5,4 7,8 2,3 5,9 8,18l5 12 -24 9 -4 -10c-2,-5 -4,-8 -5,-9 -2,-1 -4,-1 -7,0 -3,1 -5,3 -5,5 0,2 0,5 2,9l4 10c3,8 10,11 21,11 3,0 6,0 7,0 8,0 15,2 20,6 5,4 9,11 14,22l8 21c5,13 6,23 4,31 -2,8 -9,13 -19,17l-7 3c-11,4 -20,5 -27,1 -6,-4 -12,-12 -18,-27l-7 -17 25 -10z"/>
  <polygon id="3" className="visualizefil24" points="1623,6727 1573,6599 1555,6606 1544,6578 1607,6553 1618,6581 1600,6588 1650,6716 "/>
  <path id="4" className="visualizefil24" d="M1674 6632l12 -5 -35 -71 22 76zm-7 77l-44 -162 43 -17 79 149 -28 11 -18 -37 -17 7 12 39 -27 11z"/>
  <polygon id="5" className="visualizefil24" points="1783,6664 1756,6674 1695,6519 1722,6508 "/>
  <polygon id="6" className="visualizefil24" points="1801,6657 1740,6501 1778,6487 1847,6601 1797,6479 1821,6469 1882,6625 1845,6640 1774,6522 1825,6647 "/>
  <path id="7" className="visualizefil24" d="M1900 6544l12 -5 -35 -71 22 76zm-7 77l-44 -162 43 -17 79 149 -28 11 -18 -37 -17 7 12 39 -27 11z"/>
  <path id="8" className="visualizefil24" d="M1972 6484l7 -3c3,-1 5,-3 6,-5 0,-2 0,-5 -2,-9l-5 -14c-2,-4 -3,-7 -5,-8 -2,-1 -4,-1 -8,0l-7 3 14 36zm9 24l16 41 8 -3c3,-1 5,-3 6,-5 0,-2 0,-5 -2,-10l-7 -18c-2,-4 -3,-7 -5,-8 -2,-1 -4,-1 -8,0l-8 3zm57 18c5,12 6,22 4,28 -3,6 -10,12 -24,17l-37 15 -61 -156 36 -14c13,-5 23,-6 29,-3 6,3 12,11 17,23l5 14c3,9 4,16 3,21 -1,5 -5,10 -11,14 7,-2 13,-1 18,3 5,4 10,11 14,21l7 18z"/>
  <polygon id="9" className="visualizefil24" points="2067,6553 2006,6397 2033,6387 2083,6514 2108,6504 2119,6532 "/>
  <polygon id="10" className="visualizefil24" points="2128,6529 2067,6373 2118,6353 2129,6381 2105,6391 2118,6425 2141,6416 2151,6443 2129,6452 2144,6490 2170,6480 2181,6508 "/>
  <path id="11" className="visualizefil24" d="M2233 6369l-6 -16c-2,-4 -3,-7 -5,-8 -1,-1 -3,-1 -6,0 -3,1 -4,2 -4,4 0,2 0,5 2,9l32 82c2,4 3,7 5,8 1,1 3,1 6,0 3,-1 4,-2 5,-4 0,-2 0,-5 -2,-9l-8 -21 25 -10 6 16c4,11 7,18 8,23 1,5 1,9 1,13 -1,4 -2,8 -5,10 -3,3 -8,6 -17,9 -10,4 -17,6 -21,6 -4,0 -8,-1 -12,-4 -3,-2 -7,-6 -9,-10 -3,-4 -6,-12 -10,-22l-28 -72c-4,-10 -7,-18 -7,-23 -1,-5 -1,-10 0,-14 1,-4 3,-8 7,-11 3,-3 10,-6 19,-10 8,-3 14,-5 18,-5 4,0 8,1 11,4 3,2 6,6 9,10 3,4 6,12 10,22l4 11 -25 10z"/>
  <polygon id="12" className="visualizefil24" points="2339,6446 2312,6457 2251,6301 2278,6291 "/>
  <polygon id="13" className="visualizefil24" points="2367,6435 2317,6308 2299,6315 2288,6287 2351,6262 2362,6290 2344,6297 2394,6425 "/>
  <polygon id="14" className="visualizefil24" points="2449,6403 2422,6414 2361,6258 2388,6248 "/>
  <polygon id="15" className="visualizefil24" points="2467,6396 2406,6241 2456,6221 2467,6249 2443,6258 2457,6292 2479,6284 2490,6310 2467,6319 2483,6358 2509,6348 2520,6376 "/>
  <path id="16" className="visualizefil24" d="M2535 6310l6 15c2,4 3,7 5,8 2,1 4,1 7,0 3,-1 5,-3 5,-5 0,-2 0,-5 -2,-10l-4 -11c-1,-3 -2,-6 -3,-7 -1,-1 -2,-3 -3,-4 -3,-2 -8,-3 -15,-2 -3,0 -6,0 -8,0 -9,0 -15,-2 -20,-6 -5,-4 -9,-12 -14,-23l-6 -14c-5,-14 -7,-24 -5,-32 2,-7 8,-13 18,-16l8 -3c6,-2 12,-4 16,-4 5,0 9,1 12,3 3,2 5,4 7,8 2,3 5,9 8,18l5 12 -24 9 -4 -10c-2,-5 -4,-8 -5,-9 -2,-1 -4,-1 -7,0 -3,1 -5,3 -5,5 0,2 0,5 2,9l4 10c3,8 10,11 21,11 3,0 6,0 7,0 8,0 15,2 20,6 5,4 9,11 14,22l8 21c5,13 6,23 4,31 -2,8 -9,13 -19,17l-7 3c-11,4 -20,5 -27,1 -6,-4 -12,-12 -18,-27l-7 -17 25 -10z"/>
  <path id="17" className="visualizefil24" d="M1473 7008l12 -5 -35 -71 22 76zm-7 77l-44 -162 43 -17 79 149 -28 11 -18 -37 -17 7 12 39 -27 11z"/>
  <polygon id="18" className="visualizefil24" points="1554,7051 1493,6895 1531,6880 1600,6995 1550,6873 1575,6863 1636,7019 1598,7033 1527,6915 1578,7041 "/>
  <path id="19" className="visualizefil24" d="M1653 7012l-61 -156 34 -13c14,-5 24,-6 32,-1 7,5 15,17 22,36l23 59c7,19 10,33 8,41 -2,8 -10,15 -24,21l-34 13zm26 -54l-31 -79c-2,-4 -3,-7 -5,-8 -1,-1 -4,-1 -7,0l-7 3 39 100 7 -3c3,-1 4,-3 5,-4 0,-2 0,-5 -2,-9z"/>
  <path id="20" className="visualizefil24" d="M1776 6845l-6 -16c-2,-4 -3,-7 -5,-8 -1,-1 -3,-1 -6,0 -3,1 -4,2 -4,4 0,2 0,5 2,9l32 82c2,4 3,7 5,8 1,1 3,1 6,0 3,-1 4,-2 5,-4 0,-2 0,-5 -2,-9l-8 -21 25 -10 6 16c4,11 7,18 8,23 1,5 1,9 1,13 -1,4 -2,8 -5,10 -3,3 -8,6 -17,9 -10,4 -17,6 -21,6 -4,0 -8,-1 -12,-4 -3,-2 -7,-6 -9,-10 -3,-4 -6,-12 -10,-22l-28 -72c-4,-10 -7,-18 -7,-23 -1,-5 -1,-10 0,-14 1,-4 3,-8 7,-11 3,-3 10,-6 19,-10 8,-3 14,-5 18,-5 4,0 8,1 11,4 3,2 6,6 9,10 3,4 6,12 10,22l4 11 -25 10z"/>
  <path id="21" className="visualizefil24" d="M1880 6880l-32 -82c-2,-4 -3,-7 -5,-8 -2,-1 -4,-1 -7,0 -3,1 -5,3 -5,4 0,2 0,5 2,9l32 82c2,4 3,7 5,8 2,1 4,1 7,0 3,-1 4,-3 5,-4 0,-2 0,-5 -2,-9zm26 -16c4,11 7,18 8,23 1,5 1,9 0,13 -1,4 -3,8 -6,11 -3,3 -9,6 -19,10 -10,4 -17,6 -21,6 -4,0 -8,-1 -12,-4 -3,-2 -7,-6 -9,-10 -3,-4 -6,-12 -10,-22l-28 -72c-4,-10 -7,-18 -7,-23 -1,-5 -1,-10 0,-14 1,-4 3,-8 7,-11 3,-3 10,-6 19,-10 9,-4 16,-5 20,-5 4,0 8,1 12,4 3,2 7,6 9,10 3,4 6,12 10,22l28 72z"/>
  <polygon id="22" className="visualizefil24" points="1938,6900 1877,6745 1916,6729 1980,6846 1948,6717 1986,6702 2047,6858 2023,6867 1973,6735 2006,6873 1977,6885 1908,6760 1961,6891 "/>
  <polygon id="23" className="visualizefil24" points="2064,6851 2003,6695 2042,6680 2106,6797 2074,6667 2112,6652 2173,6808 2149,6818 2099,6685 2133,6824 2103,6836 2034,6711 2088,6842 "/>
  <path id="24" className="visualizefil24" d="M2129 6646l27 -11 46 119c2,4 3,7 5,8 2,1 4,1 7,0 3,-1 4,-3 5,-4 0,-2 0,-5 -2,-9l-46 -119 26 -10 41 105c5,12 8,21 9,27 1,6 2,11 1,16 -1,5 -3,9 -6,12 -3,3 -9,6 -17,10 -8,3 -15,5 -19,5 -5,0 -9,-2 -13,-5 -4,-3 -7,-7 -10,-12 -3,-5 -7,-14 -12,-27l-41 -105z"/>
  <polygon id="25" className="visualizefil24" points="2273,6769 2212,6613 2250,6598 2319,6713 2270,6591 2294,6581 2355,6737 2317,6752 2246,6634 2298,6759 "/>
  <polygon id="26" className="visualizefil24" points="2399,6720 2372,6730 2311,6575 2338,6564 "/>
  <polygon id="27" className="visualizefil24" points="2428,6709 2378,6581 2359,6588 2348,6560 2412,6535 2423,6563 2404,6570 2454,6698 "/>
  <polygon id="28" className="visualizefil24" points="2509,6676 2483,6687 2422,6531 2449,6521 "/>
  <polygon id="29" className="visualizefil24" points="2527,6670 2466,6514 2517,6494 2528,6522 2504,6531 2518,6566 2540,6557 2550,6584 2528,6592 2543,6631 2569,6621 2580,6649 "/>
  <path id="30" className="visualizefil24" d="M2596 6583l6 15c2,4 3,7 5,8 2,1 4,1 7,0 3,-1 5,-3 5,-5 0,-2 0,-5 -2,-10l-4 -11c-1,-3 -2,-6 -3,-7 -1,-1 -2,-3 -3,-4 -3,-2 -8,-3 -15,-2 -3,0 -6,0 -8,0 -9,0 -15,-2 -20,-6 -5,-4 -9,-12 -14,-23l-6 -14c-5,-14 -7,-24 -5,-32 2,-7 8,-13 18,-16l8 -3c6,-2 12,-4 16,-4 5,0 9,1 12,3 3,2 5,4 7,8 2,3 5,9 8,18l5 12 -24 9 -4 -10c-2,-5 -4,-8 -5,-9 -2,-1 -4,-1 -7,0 -3,1 -5,3 -5,5 0,2 0,5 2,9l4 10c3,8 10,11 21,11 3,0 6,0 7,0 8,0 15,2 20,6 5,4 9,11 14,22l8 21c5,13 6,23 4,31 -2,8 -9,13 -19,17l-7 3c-11,4 -20,5 -27,1 -6,-4 -12,-12 -18,-27l-7 -17 25 -10z"/>
  <path className="visualizefil24" d="M862 5421l-7 1 7 45 7 -1c4,-1 6,-2 7,-3 1,-2 1,-4 1,-8l-4 -24c-1,-4 -2,-7 -3,-8 -2,-1 -4,-2 -8,-1zm22 81c-1,-5 -2,-8 -4,-10 -2,-2 -5,-2 -10,-1l-5 1 8 50 -29 5 -23 -145 31 -5c18,-3 31,-2 37,2 7,4 11,14 13,28l3 17c1,8 1,15 -2,20 -3,5 -7,9 -14,11 7,0 12,2 16,5 4,4 6,9 8,17l6 38 -29 5 -6 -37z"/>
  <polygon id="1" className="visualizefil24" points="937,5532 914,5387 969,5378 973,5404 947,5408 952,5440 977,5436 981,5461 956,5465 962,5501 991,5496 995,5522 "/>
  <path id="2" className="visualizefil24" d="M1026 5468l2 14c1,4 2,6 3,8 2,1 4,2 7,1 3,-1 6,-2 7,-3 1,-2 1,-5 0,-9l-2 -10c0,-3 -1,-5 -2,-7 -1,-1 -1,-3 -2,-4 -2,-2 -7,-4 -14,-5 -3,0 -6,-1 -8,-1 -9,-1 -15,-4 -19,-9 -4,-4 -7,-12 -8,-22l-2 -13c-2,-13 -1,-22 2,-28 4,-6 11,-10 22,-11l9 -1c7,-1 12,-1 17,-1 5,1 8,2 11,5 2,2 4,5 6,8 1,3 3,9 4,17l2 11 -26 4 -1 -9c-1,-5 -2,-8 -3,-9 -1,-1 -4,-2 -7,-1 -3,0 -5,2 -6,3 -1,2 -1,4 0,8l1 9c1,7 7,11 18,13 3,0 6,1 8,1 9,1 15,4 18,8 4,4 6,11 8,22l3 20c2,12 1,21 -3,27 -4,6 -12,10 -23,12l-8 1c-12,2 -21,1 -27,-3 -5,-4 -9,-13 -11,-26l-3 -16 27 -4z"/>
  <path id="3" className="visualizefil24" d="M1119 5460l7 41 -29 5 -23 -145 30 -5c18,-3 31,-2 37,2 7,4 11,14 13,28l5 29c2,14 1,24 -4,30 -5,6 -15,11 -30,13l-5 1zm9 -39l-5 -31c-1,-4 -2,-7 -3,-8 -1,-1 -4,-2 -7,-1l-7 1 8 52 7 -1c3,-1 6,-2 7,-3 1,-2 1,-4 0,-9z"/>
  <path id="4" className="visualizefil24" d="M1223 5451l-12 -76c-1,-4 -2,-7 -3,-8 -1,-1 -3,-2 -7,-1 -3,1 -5,2 -6,3 -1,2 -1,4 0,8l12 76c1,4 2,7 3,8 1,1 3,1 7,1 3,0 5,-1 6,-3 1,-2 1,-4 0,-8zm29 -10c2,10 2,17 2,22 0,4 -1,8 -3,12 -2,4 -5,6 -9,8 -4,2 -11,4 -22,5 -11,2 -18,2 -22,2 -4,-1 -8,-2 -11,-5 -3,-3 -5,-6 -7,-10 -2,-4 -3,-11 -5,-21l-11 -67c-2,-10 -2,-17 -2,-21 0,-5 1,-8 3,-12 2,-4 5,-6 9,-8 4,-2 11,-4 21,-5 10,-2 17,-2 21,-1 4,1 8,2 11,5 3,3 5,6 7,10 2,4 3,11 5,21l11 67z"/>
  <polygon id="5" className="visualizefil24" points="1275,5478 1252,5333 1294,5326 1335,5437 1315,5323 1341,5319 1364,5464 1323,5470 1281,5356 1302,5474 "/>
  <path id="6" className="visualizefil24" d="M1400 5408l2 14c1,4 2,6 3,8 2,1 4,2 7,1 3,-1 6,-2 7,-3 1,-2 1,-5 0,-9l-2 -10c0,-3 -1,-5 -2,-7 -1,-1 -1,-3 -2,-4 -2,-2 -7,-4 -14,-5 -3,0 -6,-1 -8,-1 -9,-1 -15,-4 -19,-9 -4,-4 -7,-12 -8,-22l-2 -13c-2,-13 -1,-22 2,-28 4,-6 11,-10 22,-11l9 -1c7,-1 12,-1 17,-1 5,1 8,2 11,5 2,2 4,5 6,8 1,3 3,9 4,17l2 11 -26 4 -1 -9c-1,-5 -2,-8 -3,-9 -1,-1 -4,-2 -7,-1 -3,0 -5,2 -6,3 -1,2 -1,4 0,8l1 9c1,7 7,11 18,13 3,0 6,1 8,1 9,1 15,4 18,8 4,4 6,11 8,22l3 20c2,12 1,21 -3,27 -4,6 -12,10 -23,12l-8 1c-12,2 -21,1 -27,-3 -5,-4 -9,-13 -11,-26l-3 -16 27 -4z"/>
  <polygon id="7" className="visualizefil24" points="1500,5442 1470,5447 1447,5302 1477,5297 "/>
  <path id="8" className="visualizefil24" d="M1534 5349l8 -1c4,-1 6,-2 7,-3 1,-2 1,-4 0,-8l-2 -13c-1,-4 -2,-7 -3,-8 -1,-1 -4,-2 -8,-1l-8 1 5 34zm4 22l6 38 9 -1c4,-1 6,-2 7,-3 1,-2 1,-4 1,-9l-3 -17c-1,-4 -2,-7 -3,-8 -1,-1 -4,-2 -8,-1l-9 1zm53 25c2,12 1,20 -3,25 -4,5 -13,9 -28,11l-41 6 -23 -145 39 -6c14,-2 24,-2 30,2 5,4 9,11 11,23l2 13c1,8 1,14 -2,19 -2,5 -7,8 -14,11 7,-1 13,1 17,5 4,4 7,11 9,20l3 16z"/>
  <polygon id="9" className="visualizefil24" points="1612,5424 1589,5280 1619,5275 1637,5394 1665,5389 1669,5415 "/>
  <polygon id="10" className="visualizefil24" points="1679,5414 1656,5269 1712,5260 1716,5286 1690,5290 1695,5322 1719,5318 1723,5343 1699,5347 1704,5383 1733,5379 1737,5405 "/>
  <path id="11" className="visualizefil24" d="M910 5683l-2 -15c-1,-4 -2,-7 -3,-8 -1,-1 -3,-2 -6,-1 -3,0 -5,1 -5,3 -1,1 -1,4 0,8l12 76c1,4 2,7 3,8 1,1 3,2 6,1 3,0 5,-1 6,-3 1,-1 1,-4 0,-8l-3 -20 27 -4 2 15c2,10 2,17 2,21 0,4 -1,8 -3,12 -2,4 -4,6 -7,8 -3,2 -10,3 -19,5 -11,2 -18,2 -22,2 -4,-1 -8,-2 -11,-5 -3,-3 -5,-6 -7,-10 -2,-4 -3,-11 -5,-21l-11 -67c-2,-10 -2,-17 -2,-21 0,-5 1,-8 3,-12 2,-4 5,-6 9,-8 4,-2 11,-4 21,-5 8,-1 15,-2 19,-1 4,1 7,2 10,5 3,3 5,6 6,10 2,4 3,11 5,21l2 10 -27 4z"/>
  <path id="12" className="visualizefil24" d="M1006 5731l-12 -76c-1,-4 -2,-7 -3,-8 -1,-1 -3,-2 -7,-1 -3,1 -5,2 -6,3 -1,2 -1,4 0,8l12 76c1,4 2,7 3,8 1,1 3,1 7,1 3,0 5,-1 6,-3 1,-2 1,-4 0,-8zm29 -10c2,10 2,17 2,22 0,4 -1,8 -3,12 -2,4 -5,6 -9,8 -4,2 -11,4 -22,5 -11,2 -18,2 -22,2 -4,-1 -8,-2 -11,-5 -3,-3 -5,-6 -7,-10 -2,-4 -3,-11 -5,-21l-11 -67c-2,-10 -2,-17 -2,-21 0,-5 1,-8 3,-12 2,-4 5,-6 9,-8 4,-2 11,-4 21,-5 10,-2 17,-2 21,-1 4,1 8,2 11,5 3,3 5,6 7,10 2,4 3,11 5,21l11 67z"/>
  <polygon id="13" className="visualizefil24" points="1058,5758 1035,5613 1077,5606 1118,5717 1098,5603 1125,5599 1148,5744 1106,5750 1064,5636 1085,5754 "/>
  <path id="14" className="visualizefil24" d="M1184 5689l2 14c1,4 2,6 3,8 2,1 4,2 7,1 3,-1 6,-2 7,-3 1,-2 1,-5 0,-9l-2 -10c0,-3 -1,-5 -2,-7 -1,-1 -1,-3 -2,-4 -2,-2 -7,-4 -14,-5 -3,0 -6,-1 -8,-1 -9,-1 -15,-4 -19,-9 -4,-4 -7,-12 -8,-22l-2 -13c-2,-13 -1,-22 2,-28 4,-6 11,-10 22,-11l9 -1c7,-1 12,-1 17,-1 5,1 8,2 11,5 2,2 4,5 6,8 1,3 3,9 4,17l2 11 -26 4 -1 -9c-1,-5 -2,-8 -3,-9 -1,-1 -4,-2 -7,-1 -3,0 -5,2 -6,3 -1,2 -1,4 0,8l1 9c1,7 7,11 18,13 3,0 6,1 8,1 9,1 15,4 18,8 4,4 6,11 8,22l3 20c2,12 1,21 -3,27 -4,6 -12,10 -23,12l-8 1c-12,2 -21,1 -27,-3 -5,-4 -9,-13 -11,-26l-3 -16 27 -4z"/>
  <path id="15" className="visualizefil24" d="M1229 5582l29 -5 17 110c1,4 2,7 3,8 1,1 3,2 7,1 3,0 5,-2 6,-3 1,-2 1,-4 0,-8l-17 -110 28 -4 16 98c2,11 3,20 2,25 0,5 -1,10 -3,14 -2,4 -5,7 -9,10 -4,2 -11,4 -19,5 -9,1 -16,2 -20,1 -5,-1 -8,-3 -12,-6 -3,-3 -5,-7 -7,-12 -2,-5 -4,-13 -5,-25l-16 -98z"/>
  <polygon id="16" className="visualizefil24" points="1344,5713 1321,5568 1364,5561 1399,5673 1398,5556 1440,5549 1463,5694 1437,5698 1419,5575 1419,5701 1386,5706 1348,5587 1369,5709 "/>
  <path id="17" className="visualizefil24" d="M1505 5645l7 41 -29 5 -23 -145 30 -5c18,-3 31,-2 37,2 7,4 11,14 13,28l5 29c2,14 1,24 -4,30 -5,6 -15,11 -30,13l-5 1zm9 -39l-5 -31c-1,-4 -2,-7 -3,-8 -1,-1 -4,-2 -7,-1l-7 1 8 52 7 -1c3,-1 6,-2 7,-3 1,-2 1,-4 0,-9z"/>
  <polygon id="18" className="visualizefil24" points="1582,5675 1563,5556 1543,5559 1539,5533 1608,5522 1612,5548 1592,5551 1611,5670 "/>
  <polygon id="19" className="visualizefil24" points="1672,5661 1642,5665 1619,5521 1649,5516 "/>
  <path id="20" className="visualizefil24" d="M1730 5616l-12 -76c-1,-4 -2,-7 -3,-8 -1,-1 -3,-2 -7,-1 -3,1 -5,2 -6,3 -1,2 -1,4 0,8l12 76c1,4 2,7 3,8 1,1 3,1 7,1 3,0 5,-1 6,-3 1,-2 1,-4 0,-8zm29 -10c2,10 2,17 2,22 0,4 -1,8 -3,12 -2,4 -5,6 -9,8 -4,2 -11,4 -22,5 -11,2 -18,2 -22,2 -4,-1 -8,-2 -11,-5 -3,-3 -5,-6 -7,-10 -2,-4 -3,-11 -5,-21l-11 -67c-2,-10 -2,-17 -2,-21 0,-5 1,-8 3,-12 2,-4 5,-6 9,-8 4,-2 11,-4 21,-5 10,-2 17,-2 21,-1 4,1 8,2 11,5 3,3 5,6 7,10 2,4 3,11 5,21l11 67z"/>
  <polygon id="21" className="visualizefil24" points="1782,5643 1759,5498 1801,5492 1842,5603 1822,5488 1849,5484 1872,5629 1830,5636 1788,5522 1809,5639 "/>
  <path id="22" className="visualizefil24" d="M939 5961l13 -2 -17 -67 4 69zm-26 65l-4 -148 47 -7 42 142 -30 5 -9 -35 -19 3 2 36 -29 5z"/>
  <polygon id="23" className="visualizefil24" points="1010,6011 987,5866 1029,5860 1070,5971 1050,5856 1077,5852 1100,5997 1058,6004 1016,5890 1037,6007 "/>
  <path id="24" className="visualizefil24" d="M1118 5994l-23 -145 37 -6c15,-2 26,-1 32,4 6,5 11,17 14,35l9 55c3,18 2,30 -2,37 -4,7 -14,12 -29,14l-37 6zm39 -43l-12 -73c-1,-4 -2,-7 -3,-8 -1,-1 -3,-1 -7,-1l-8 1 15 93 8 -1c3,0 5,-1 6,-3 1,-1 1,-4 0,-8z"/>
  <path id="25" className="visualizefil24" d="M1277 5927l7 41 -29 5 -23 -145 30 -5c18,-3 31,-2 37,2 7,4 11,14 13,28l5 29c2,14 1,24 -4,30 -5,6 -15,11 -30,13l-5 1zm9 -39l-5 -31c-1,-4 -2,-7 -3,-8 -1,-1 -4,-2 -7,-1l-7 1 8 52 7 -1c3,-1 6,-2 7,-3 1,-2 1,-4 0,-9z"/>
  <path id="26" className="visualizefil24" d="M1360 5834l-7 1 7 45 7 -1c4,-1 6,-2 7,-3 1,-2 1,-4 1,-8l-4 -24c-1,-4 -2,-7 -3,-8 -2,-1 -4,-2 -8,-1zm22 81c-1,-5 -2,-8 -4,-10 -2,-2 -5,-2 -10,-1l-5 1 8 50 -29 5 -23 -145 31 -5c18,-3 31,-2 37,2 7,4 11,14 13,28l3 17c1,8 1,15 -2,20 -3,5 -7,9 -14,11 7,0 12,2 16,5 4,4 6,9 8,17l6 38 -29 5 -6 -37z"/>
  <path id="27" className="visualizefil24" d="M1474 5903l-12 -76c-1,-4 -2,-7 -3,-8 -1,-1 -3,-2 -7,-1 -3,1 -5,2 -6,3 -1,2 -1,4 0,8l12 76c1,4 2,7 3,8 1,1 3,1 7,1 3,0 5,-1 6,-3 1,-2 1,-4 0,-8zm29 -10c2,10 2,17 2,22 0,4 -1,8 -3,12 -2,4 -5,6 -9,8 -4,2 -11,4 -22,5 -11,2 -18,2 -22,2 -4,-1 -8,-2 -11,-5 -3,-3 -5,-6 -7,-10 -2,-4 -3,-11 -5,-21l-11 -67c-2,-10 -2,-17 -2,-21 0,-5 1,-8 3,-12 2,-4 5,-6 9,-8 4,-2 11,-4 21,-5 10,-2 17,-2 21,-1 4,1 8,2 11,5 3,3 5,6 7,10 2,4 3,11 5,21l11 67z"/>
  <path id="28" className="visualizefil24" d="M1526 5929l-23 -145 37 -6c15,-2 26,-1 32,4 6,5 11,17 14,35l9 55c3,18 2,30 -2,37 -4,7 -14,12 -29,14l-37 6zm39 -43l-12 -73c-1,-4 -2,-7 -3,-8 -1,-1 -3,-1 -7,-1l-8 1 15 93 8 -1c3,0 5,-1 6,-3 1,-1 1,-4 0,-8z"/>
  <path id="29" className="visualizefil24" d="M1595 5770l29 -5 17 110c1,4 2,7 3,8 1,1 3,2 7,1 3,0 5,-2 6,-3 1,-2 1,-4 0,-8l-17 -110 28 -4 16 98c2,11 3,20 2,25 0,5 -1,10 -3,14 -2,4 -5,7 -9,10 -4,2 -11,4 -19,5 -9,1 -16,2 -20,1 -5,-1 -8,-3 -12,-6 -3,-3 -5,-7 -7,-12 -2,-5 -4,-13 -5,-25l-16 -98z"/>
  <path id="30" className="visualizefil24" d="M1737 5798l-2 -15c-1,-4 -2,-7 -3,-8 -1,-1 -3,-2 -6,-1 -3,0 -5,1 -5,3 -1,1 -1,4 0,8l12 76c1,4 2,7 3,8 1,1 3,2 6,1 3,0 5,-1 6,-3 1,-1 1,-4 0,-8l-3 -20 27 -4 2 15c2,10 2,17 2,21 0,4 -1,8 -3,12 -2,4 -4,6 -7,8 -3,2 -10,3 -19,5 -11,2 -18,2 -22,2 -4,-1 -8,-2 -11,-5 -3,-3 -5,-6 -7,-10 -2,-4 -3,-11 -5,-21l-11 -67c-2,-10 -2,-17 -2,-21 0,-5 1,-8 3,-12 2,-4 5,-6 9,-8 4,-2 11,-4 21,-5 8,-1 15,-2 19,-1 4,1 7,2 10,5 3,3 5,6 6,10 2,4 3,11 5,21l2 10 -27 4z"/>
  <polygon id="31" className="visualizefil24" points="1806,5885 1787,5766 1767,5769 1763,5743 1832,5732 1837,5758 1817,5762 1836,5880 "/>
  <polygon id="32" className="visualizefil24" points="1896,5871 1866,5876 1843,5731 1873,5726 "/>
  <path id="33" className="visualizefil24" d="M1954 5827l-12 -76c-1,-4 -2,-7 -3,-8 -1,-1 -3,-2 -7,-1 -3,1 -5,2 -6,3 -1,2 -1,4 0,8l12 76c1,4 2,7 3,8 1,1 3,1 7,1 3,0 5,-1 6,-3 1,-2 1,-4 0,-8zm29 -10c2,10 2,17 2,22 0,4 -1,8 -3,12 -2,4 -5,6 -9,8 -4,2 -11,4 -22,5 -11,2 -18,2 -22,2 -4,-1 -8,-2 -11,-5 -3,-3 -5,-6 -7,-10 -2,-4 -3,-11 -5,-21l-11 -67c-2,-10 -2,-17 -2,-21 0,-5 1,-8 3,-12 2,-4 5,-6 9,-8 4,-2 11,-4 21,-5 10,-2 17,-2 21,-1 4,1 8,2 11,5 3,3 5,6 7,10 2,4 3,11 5,21l11 67z"/>
  <polygon id="34" className="visualizefil24" points="2007,5853 1984,5708 2025,5702 2066,5813 2046,5698 2073,5694 2096,5839 2055,5846 2013,5732 2033,5849 "/>
  <path className="visualizefil24" d="M749 4446l0 -19c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -8,-3 -4,0 -6,1 -8,3 -1,2 -2,5 -2,11l0 101c0,5 1,9 2,11 1,2 4,3 8,3 4,0 6,-1 8,-3 1,-2 2,-5 2,-11l0 -26 35 0 0 20c0,13 -1,22 -2,28 -1,6 -3,11 -6,14 -3,4 -7,7 -11,9 -5,2 -13,3 -25,3 -14,0 -24,-1 -29,-3 -5,-2 -9,-5 -13,-9 -3,-4 -5,-9 -7,-15 -1,-6 -2,-15 -2,-28l0 -88c0,-13 1,-22 2,-28 1,-6 4,-11 7,-15 3,-4 8,-7 13,-9 6,-2 15,-3 28,-3 11,0 19,1 24,2 5,2 9,5 12,9 3,4 5,9 6,15 1,6 2,15 2,28l0 13 -35 0z"/>
  <polygon id="1" className="visualizefil24" points="803,4572 803,4381 841,4381 841,4538 878,4538 878,4572 "/>
  <polygon id="2" className="visualizefil24" points="929,4572 891,4572 891,4381 929,4381 "/>
  <polygon id="3" className="visualizefil24" points="955,4572 955,4381 1011,4381 1033,4532 1056,4381 1111,4381 1111,4572 1076,4572 1078,4411 1053,4572 1010,4572 985,4411 988,4572 "/>
  <path id="4" className="visualizefil24" d="M1173 4493l17 0 -8 -90 -9 90zm-46 79l25 -191 61 0 25 191 -39 0 -5 -47 -24 0 -5 47 -38 0z"/>
  <polygon id="5" className="visualizefil24" points="1262,4572 1262,4415 1236,4415 1236,4381 1327,4381 1327,4415 1301,4415 1301,4572 "/>
  <polygon id="6" className="visualizefil24" points="1340,4572 1340,4381 1413,4381 1413,4415 1379,4415 1379,4457 1411,4457 1411,4490 1379,4490 1379,4538 1416,4538 1416,4572 "/>
  <path id="7" className="visualizefil24" d="M730 4809l17 0 -8 -90 -9 90zm-46 79l25 -191 61 0 25 191 -39 0 -5 -47 -24 0 -5 47 -38 0z"/>
  <path id="8" className="visualizefil24" d="M871 4762l0 -19c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -8,-3 -4,0 -6,1 -8,3 -1,2 -2,5 -2,11l0 101c0,5 1,9 2,11 1,2 4,3 8,3 4,0 6,-1 8,-3 1,-2 2,-5 2,-11l0 -26 35 0 0 20c0,13 -1,22 -2,28 -1,6 -3,11 -6,14 -3,4 -7,7 -11,9 -5,2 -13,3 -25,3 -14,0 -24,-1 -29,-3 -5,-2 -9,-5 -13,-9 -3,-4 -5,-9 -7,-15 -1,-6 -2,-15 -2,-28l0 -88c0,-13 1,-22 2,-28 1,-6 4,-11 7,-15 3,-4 8,-7 13,-9 6,-2 15,-3 28,-3 11,0 19,1 24,2 5,2 9,5 12,9 3,4 5,9 6,15 1,6 2,15 2,28l0 13 -35 0z"/>
  <polygon id="9" className="visualizefil24" points="940,4888 940,4731 915,4731 915,4697 1005,4697 1005,4731 979,4731 979,4888 "/>
  <polygon id="10" className="visualizefil24" points="1058,4888 1019,4888 1019,4697 1058,4697 "/>
  <path id="11" className="visualizefil24" d="M1141 4843l0 -101c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -8,-3 -4,0 -7,1 -8,3 -1,2 -2,5 -2,11l0 101c0,5 1,9 2,11 1,2 4,3 8,3 4,0 7,-1 8,-3 1,-2 2,-5 2,-11zm39 -6c0,13 -1,22 -2,28 -1,6 -3,10 -7,14 -3,4 -8,7 -13,9 -5,2 -15,3 -29,3 -14,0 -24,-1 -29,-3 -5,-2 -9,-5 -13,-9 -3,-4 -5,-9 -7,-15 -1,-6 -2,-15 -2,-28l0 -88c0,-13 1,-22 2,-28 1,-6 4,-11 7,-15 3,-4 8,-7 13,-9 6,-2 15,-3 28,-3 13,0 22,1 27,3 6,2 10,5 13,9 3,4 5,9 7,15 1,6 2,15 2,28l0 88z"/>
  <polygon id="12" className="visualizefil24" points="1202,4888 1202,4697 1256,4697 1286,4848 1284,4697 1319,4697 1319,4888 1265,4888 1234,4733 1237,4888 "/>
  <polygon className="visualizefil24" points="737,3591 678,3436 710,3424 758,3551 788,3540 798,3568 "/>
  <polygon id="1" className="visualizefil24" points="840,3552 809,3564 750,3409 782,3397 "/>
  <polygon id="2" className="visualizefil24" points="861,3544 803,3389 862,3367 872,3394 845,3405 859,3443 884,3434 895,3462 870,3471 893,3532 "/>
  <polygon id="3" className="visualizefil24" points="935,3516 877,3361 936,3339 947,3367 919,3377 932,3411 958,3401 968,3428 942,3438 956,3476 987,3465 997,3493 "/>
  <path id="4" className="visualizefil24" d="M830 3744l9 -3c4,-1 6,-3 7,-5 1,-2 0,-5 -1,-9l-5 -14c-2,-4 -3,-7 -5,-8 -2,-1 -5,-1 -9,1l-9 3 14 36zm9 24l15 40 10 -4c4,-1 6,-3 7,-5 1,-2 0,-5 -1,-10l-7 -18c-2,-4 -3,-7 -5,-8 -2,-1 -5,-1 -9,1l-10 4zm64 16c5,12 5,22 2,28 -3,6 -13,13 -28,18l-44 16 -58 -155 42 -16c15,-6 27,-7 34,-5 7,3 13,10 17,23l5 14c3,9 4,16 2,21 -2,6 -6,11 -13,15 8,-2 15,-2 20,2 6,4 10,11 14,21l7 18z"/>
  <polygon id="5" className="visualizefil24" points="933,3810 874,3655 934,3632 944,3660 916,3671 929,3705 955,3695 966,3722 939,3732 954,3770 984,3758 995,3786 "/>
  <polygon id="6" className="visualizefil24" points="1010,3781 952,3626 983,3614 1031,3741 1061,3730 1071,3758 "/>
  <path id="7" className="visualizefil24" d="M1119 3698l-31 -82c-2,-4 -3,-7 -5,-8 -2,-1 -4,-1 -7,0 -3,1 -5,3 -6,5 -1,2 0,5 2,9l31 82c2,4 3,7 5,8 2,1 4,1 8,0 3,-1 5,-3 6,-5 1,-2 0,-5 -2,-9zm30 -17c4,11 6,18 7,23 1,5 0,9 -1,14 -1,4 -4,8 -8,11 -4,3 -11,7 -23,11 -12,4 -20,7 -24,7 -5,0 -9,-1 -13,-3 -4,-2 -7,-6 -10,-10 -3,-4 -6,-12 -10,-22l-27 -72c-4,-10 -6,-18 -7,-23 -1,-5 0,-10 1,-14 1,-5 4,-8 8,-11 4,-3 11,-7 22,-11 11,-4 18,-6 23,-6 5,0 10,1 14,3 4,2 7,5 10,10 3,4 6,12 10,22l27 72z"/>
  <polygon id="8" className="visualizefil24" points="1212,3528 1273,3652 1232,3520 1263,3508 1305,3669 1261,3686 1200,3560 1237,3695 1192,3712 1118,3563 1149,3552 1205,3677 1169,3544 "/>
  <polygon id="9" className="visualizefil24" points="1410,3453 1471,3577 1431,3445 1461,3434 1504,3595 1460,3611 1398,3485 1435,3621 1391,3637 1316,3488 1347,3477 1404,3603 1368,3469 "/>
  <path id="10" className="visualizefil24" d="M1540 3508l14 -5 -34 -70 20 76zm-14 78l-38 -163 50 -19 79 147 -32 12 -18 -37 -20 8 11 39 -32 12z"/>
  <polygon id="11" className="visualizefil24" points="1637,3544 1590,3417 1568,3425 1558,3397 1632,3370 1642,3397 1621,3405 1669,3532 "/>
  <polygon id="12" className="visualizefil24" points="1701,3520 1643,3365 1703,3343 1713,3371 1685,3381 1698,3415 1724,3406 1734,3432 1708,3442 1722,3481 1753,3469 1764,3497 "/>
  <path id="13" className="visualizefil24" d="M1770 3349l-8 3 18 48 8 -3c4,-2 7,-3 7,-5 1,-2 0,-5 -1,-9l-10 -26c-2,-4 -3,-7 -5,-8 -2,-1 -5,-1 -9,1zm43 85c-2,-5 -4,-9 -7,-10 -3,-1 -6,-1 -11,1l-5 2 20 53 -32 12 -58 -155 33 -12c19,-7 33,-9 42,-6 8,3 15,13 21,28l7 18c3,9 4,16 3,22 -2,6 -6,11 -13,16 8,-2 14,-1 19,2 5,3 9,9 12,17l15 41 -31 12 -15 -39z"/>
  <polygon className="visualizefil24" points="1414,2356 1414,2165 1453,2165 1453,2321 1489,2321 1489,2356 "/>
  <polygon id="1" className="visualizefil24" points="1540,2356 1502,2356 1502,2165 1540,2165 "/>
  <polygon id="2" className="visualizefil24" points="1566,2356 1566,2165 1638,2165 1638,2199 1604,2199 1604,2246 1635,2246 1635,2281 1604,2281 1604,2356 "/>
  <polygon id="3" className="visualizefil24" points="1656,2356 1656,2165 1729,2165 1729,2199 1695,2199 1695,2241 1727,2241 1727,2274 1695,2274 1695,2321 1732,2321 1732,2356 "/>
  <path id="4" className="visualizefil24" d="M1472 2627l0 -101c0,-5 -1,-9 -2,-11 -1,-2 -4,-3 -8,-3 -4,0 -7,1 -8,3 -1,2 -2,5 -2,11l0 101c0,5 1,9 2,11 1,2 4,3 8,3 4,0 7,-1 8,-3 1,-2 2,-5 2,-11zm39 -6c0,13 -1,22 -2,28 -1,6 -3,10 -7,14 -3,4 -7,7 -13,9 -5,2 -15,3 -29,3 -14,0 -24,-1 -29,-3 -5,-2 -9,-5 -13,-9 -3,-4 -5,-9 -7,-15 -1,-6 -2,-15 -2,-28l0 -88c0,-13 1,-22 2,-28 1,-6 4,-11 7,-15 3,-4 8,-7 13,-9 6,-2 15,-3 28,-3 13,0 22,1 27,3 6,2 10,5 13,9 3,4 5,9 7,15 1,6 2,15 2,28l0 88z"/>
  <polygon id="5" className="visualizefil24" points="1533,2672 1533,2481 1588,2481 1617,2632 1615,2481 1650,2481 1650,2672 1596,2672 1566,2517 1568,2672 "/>
  <polygon id="6" className="visualizefil24" points="1731,2672 1731,2481 1769,2481 1769,2637 1806,2637 1806,2672 "/>
  <path id="7" className="visualizefil24" d="M1864 2593l17 0 -8 -90 -9 90zm-46 79l25 -191 61 0 25 191 -39 0 -5 -47 -24 0 -5 47 -38 0z"/>
  <polygon id="8" className="visualizefil24" points="1944,2672 1944,2481 1999,2481 2028,2632 2026,2481 2061,2481 2061,2672 2007,2672 1977,2517 1979,2672 "/>
  <path id="9" className="visualizefil24" d="M2085 2672l0 -191 49 0c20,0 33,4 40,12 7,8 10,24 10,47l0 72c0,23 -3,39 -10,47 -7,8 -20,12 -40,12l-49 0zm59 -47l0 -97c0,-5 -1,-9 -2,-10 -1,-2 -4,-3 -8,-3l-10 0 0 123 10 0c4,0 7,-1 8,-3 1,-2 2,-5 2,-10z"/>
  <path className="visualizefil24" d="M2353 1309l-13 30 -21 -10 47 -105 21 10c13,6 21,12 23,17 3,6 1,14 -3,24l-10 21c-5,10 -10,16 -16,18 -6,2 -14,1 -25,-4l-4 -2zm23 -22l10 -22c1,-3 2,-5 1,-7 0,-1 -2,-3 -4,-4l-5 -2 -17 37 5 2c2,1 4,1 6,1 1,-1 3,-2 4,-5z"/>
  <polygon id="1" className="visualizefil24" points="2382,1358 2429,1253 2469,1271 2461,1290 2442,1281 2431,1304 2449,1312 2441,1330 2423,1322 2412,1348 2432,1358 2424,1376 "/>
  <path id="2" className="visualizefil24" d="M2474 1347l10 4 17 -51 -27 47zm-45 32l61 -98 34 15 -33 111 -22 -10 9 -27 -13 -6 -14 25 -21 -10z"/>
  <path id="3" className="visualizefil24" d="M2564 1356l5 -11c1,-3 2,-5 2,-6 0,-1 -1,-2 -4,-3 -2,-1 -4,-1 -5,0 -1,1 -2,2 -4,5l-25 55c-1,3 -2,5 -2,6 0,1 1,2 4,3 2,1 4,1 5,0 1,-1 2,-2 4,-5l6 -14 19 9 -5 11c-3,7 -6,12 -8,15 -2,3 -4,5 -7,6 -3,2 -5,2 -8,2 -3,0 -8,-2 -14,-5 -8,-3 -13,-6 -15,-8 -2,-2 -4,-5 -5,-8 -1,-3 -1,-6 0,-10 1,-4 3,-9 6,-16l22 -48c3,-7 6,-12 8,-15 2,-3 5,-5 7,-6 3,-2 6,-2 10,-2 4,0 9,2 16,5 6,3 10,5 13,7 2,2 4,5 4,8 1,3 0,6 0,10 -1,3 -3,9 -6,16l-3 7 -19 -9z"/>
  <polygon id="4" className="visualizefil24" points="2563,1439 2610,1334 2650,1352 2642,1371 2623,1363 2613,1386 2630,1394 2622,1412 2604,1404 2593,1430 2613,1439 2605,1458 "/>
  <path id="5" className="visualizefil24" d="M2622 1465l-7 -3 10 -23 19 8 -11 25c-3,7 -7,12 -12,14 -5,2 -10,2 -16,-1l5 -12c3,1 5,1 7,0 2,-1 3,-3 5,-6 0,0 0,-1 0,-1 0,-1 0,-1 0,-1z"/>
  <path id="6" className="visualizefil24" d="M2709 1458l-8 17c-1,2 -1,3 -1,3 0,1 1,1 2,2 1,1 2,1 3,0 1,0 1,-1 2,-3l37 -84 21 10 -35 78c-5,11 -10,17 -15,20 -5,2 -12,1 -21,-3 -9,-4 -14,-8 -16,-13 -2,-5 -1,-12 3,-21l7 -16 19 8z"/>
  <path id="7" className="visualizefil24" d="M2779 1410l21 10 -36 80c-1,3 -2,5 -2,6 0,1 2,2 4,4 2,1 4,1 5,1 1,-1 2,-2 4,-5l36 -80 20 9 -32 71c-4,8 -7,14 -9,17 -2,3 -5,6 -8,8 -3,2 -6,3 -10,2 -4,0 -9,-2 -15,-5 -6,-3 -11,-6 -14,-8 -3,-3 -4,-6 -5,-9 -1,-3 0,-7 1,-11 1,-4 3,-10 7,-19l32 -71z"/>
  <path id="8" className="visualizefil24" d="M2832 1518l-5 10c-1,3 -2,5 -1,6 0,2 2,3 4,4 2,1 4,1 6,1 1,-1 3,-3 4,-6l3 -7c1,-2 2,-4 2,-5 0,-1 0,-2 0,-3 -1,-3 -3,-6 -8,-9 -2,-2 -4,-3 -5,-4 -5,-5 -8,-9 -9,-14 -1,-4 1,-10 4,-18l4 -10c4,-9 9,-15 14,-18 5,-2 11,-2 19,2l6 3c5,2 9,4 11,7 3,2 4,5 5,8 1,2 1,5 0,8 -1,3 -2,7 -5,13l-4 8 -19 -8 3 -7c1,-3 2,-6 2,-7 0,-1 -2,-3 -4,-4 -2,-1 -4,-1 -5,-1 -1,1 -2,2 -4,5l-3 7c-2,5 0,10 7,16 2,2 3,3 4,4 5,5 8,9 9,13 1,4 -1,10 -4,18l-6 14c-4,9 -9,14 -14,16 -5,2 -12,1 -20,-2l-6 -3c-9,-4 -14,-9 -16,-14 -2,-5 -1,-12 4,-22l5 -11 20 9z"/>
  <polygon id="9" className="visualizefil24" points="2869,1576 2908,1490 2893,1484 2902,1465 2952,1488 2943,1506 2929,1500 2891,1586 "/>
  <polygon id="10" className="visualizefil24" points="2934,1605 2913,1596 2960,1491 2981,1501 "/>
  <path id="11" className="visualizefil24" d="M3010 1556l5 -11c1,-3 2,-5 2,-6 0,-1 -1,-2 -4,-3 -2,-1 -4,-1 -5,0 -1,1 -2,2 -4,5l-25 55c-1,3 -2,5 -2,6 0,1 1,2 4,3 2,1 4,1 5,0 1,-1 2,-2 4,-5l6 -14 19 9 -5 11c-3,7 -6,12 -8,15 -2,3 -4,5 -7,6 -3,2 -5,2 -8,2 -3,0 -8,-2 -14,-5 -8,-3 -13,-6 -15,-8 -2,-2 -4,-5 -5,-8 -1,-3 -1,-6 0,-10 1,-4 3,-9 6,-16l22 -48c3,-7 6,-12 8,-15 2,-3 5,-5 7,-6 3,-2 6,-2 10,-2 4,0 9,2 16,5 6,3 10,5 13,7 2,2 4,5 4,8 1,3 0,6 0,10 -1,3 -3,9 -6,16l-3 7 -19 -9z"/>
  <polygon id="12" className="visualizefil24" points="3009,1639 3056,1535 3097,1553 3088,1571 3069,1563 3059,1586 3077,1594 3069,1612 3051,1604 3039,1630 3060,1639 3051,1658 "/>
  <path id="13" className="visualizefil24" d="M2281 1468l10 4 17 -51 -27 47zm-45 32l61 -98 34 15 -33 111 -22 -10 9 -27 -13 -6 -14 25 -21 -10z"/>
  <polygon id="14" className="visualizefil24" points="2306,1531 2353,1427 2383,1440 2362,1530 2398,1447 2418,1456 2371,1560 2341,1547 2362,1455 2325,1540 "/>
  <path id="15" className="visualizefil24" d="M2384 1566l47 -105 27 12c11,5 17,10 19,16 2,6 0,16 -6,28l-18 40c-6,13 -12,21 -17,23 -6,3 -14,2 -25,-3l-27 -12zm44 -11l24 -53c1,-3 2,-5 1,-6 0,-1 -2,-2 -4,-3l-6 -3 -30 67 6 3c2,1 4,1 5,1 1,-1 2,-2 4,-5z"/>
  <path id="16" className="visualizefil24" d="M2516 1584l-5 10c-1,3 -2,5 -1,6 0,2 2,3 4,4 2,1 4,1 6,1 1,-1 3,-3 4,-6l3 -7c1,-2 2,-4 2,-5 0,-1 0,-2 0,-3 -1,-3 -3,-6 -8,-9 -2,-2 -4,-3 -5,-4 -5,-5 -8,-9 -9,-14 -1,-4 1,-10 4,-18l4 -10c4,-9 9,-15 14,-18 5,-2 11,-2 19,2l6 3c5,2 9,4 11,7 3,2 4,5 5,8 1,2 1,5 0,8 -1,3 -2,7 -5,13l-4 8 -19 -8 3 -7c1,-3 2,-6 2,-7 0,-1 -2,-3 -4,-4 -2,-1 -4,-1 -5,-1 -1,1 -2,2 -4,5l-3 7c-2,5 0,10 7,16 2,2 3,3 4,4 5,5 8,9 9,13 1,4 -1,10 -4,18l-6 14c-4,9 -9,14 -14,16 -5,2 -12,1 -20,-2l-6 -3c-9,-4 -14,-9 -16,-14 -2,-5 -1,-12 4,-22l5 -11 20 9z"/>
  <polygon id="17" className="visualizefil24" points="2553,1642 2592,1556 2577,1550 2586,1531 2636,1554 2627,1572 2613,1566 2574,1652 "/>
  <path id="18" className="visualizefil24" d="M2661 1587l-5 -2 -14 32 5 2c3,1 5,2 6,1 1,-1 3,-2 4,-5l8 -17c1,-3 2,-5 1,-7 0,-1 -2,-3 -5,-4zm-20 63c2,-4 2,-6 2,-8 -1,-2 -2,-4 -6,-5l-4 -2 -16 36 -21 -10 47 -105 22 10c13,6 21,12 23,17 3,6 1,14 -3,24l-5 12c-3,6 -6,10 -10,12 -4,2 -8,3 -14,1 4,3 7,6 8,10 1,4 0,9 -2,14l-12 27 -21 -9 12 -26z"/>
  <path id="19" className="visualizefil24" d="M2706 1681l25 -55c1,-3 2,-5 1,-6 0,-1 -2,-2 -4,-4 -2,-1 -4,-1 -5,-1 -1,1 -2,2 -4,5l-25 55c-1,3 -2,5 -2,6 0,1 2,2 4,3 2,1 4,1 5,1 1,-1 2,-2 4,-5zm23 6c-3,7 -6,12 -8,15 -2,3 -4,5 -7,6 -3,1 -6,2 -9,2 -3,0 -9,-2 -16,-6 -8,-3 -13,-6 -15,-8 -2,-2 -4,-5 -5,-8 -1,-3 -1,-6 0,-10 1,-4 3,-9 6,-16l22 -48c3,-7 6,-12 8,-15 2,-3 5,-5 7,-6 3,-2 6,-2 10,-2 4,0 9,2 16,5 7,3 12,6 15,8 3,2 4,5 5,8 1,3 1,6 0,10 -1,3 -3,9 -6,16l-22 48z"/>
  <polygon id="20" className="visualizefil24" points="2729,1721 2776,1617 2806,1630 2786,1720 2821,1637 2841,1646 2794,1750 2764,1737 2785,1644 2749,1730 "/>
  <path id="21" className="visualizefil24" d="M2886 1723l-13 29c-3,7 -6,12 -8,15 -2,3 -5,5 -7,6 -3,2 -6,2 -9,2 -3,0 -8,-2 -16,-6 -8,-3 -13,-6 -15,-8 -2,-2 -4,-5 -5,-8 -1,-3 -1,-6 0,-10 1,-3 3,-9 6,-16l22 -48c3,-7 6,-12 8,-15 2,-3 5,-5 7,-6 3,-2 6,-2 10,-2 3,0 9,2 16,5 7,3 11,6 14,8 3,2 4,5 5,8 1,3 1,6 0,9 -1,3 -3,9 -6,16l-2 5 -20 -9 4 -9c1,-3 2,-5 1,-6 0,-1 -2,-3 -4,-4 -3,-1 -5,-1 -6,-1 -1,1 -3,2 -4,5l-25 55c-1,3 -2,5 -1,6 0,1 2,3 5,4 3,1 5,1 6,1 1,-1 3,-2 4,-5l6 -13 -6 -3 8 -19 26 12z"/>
  <polygon id="22" className="visualizefil24" points="2185,1685 2164,1675 2211,1571 2232,1580 "/>
  <polygon id="23" className="visualizefil24" points="2199,1691 2246,1587 2276,1600 2255,1690 2291,1607 2310,1616 2263,1720 2233,1707 2255,1614 2218,1700 "/>
  <path id="24" className="visualizefil24" d="M2310 1699l-5 10c-1,3 -2,5 -1,6 0,2 2,3 4,4 2,1 4,1 6,1 1,-1 3,-3 4,-6l3 -7c1,-2 2,-4 2,-5 0,-1 0,-2 0,-3 -1,-3 -3,-6 -8,-9 -2,-2 -4,-3 -5,-4 -5,-5 -8,-9 -9,-14 -1,-4 1,-10 4,-18l4 -10c4,-9 9,-15 14,-18 5,-2 11,-2 19,2l6 3c5,2 9,4 11,7 3,2 4,5 5,8 1,2 1,5 0,8 -1,3 -2,7 -5,13l-4 8 -19 -8 3 -7c1,-3 2,-6 2,-7 0,-1 -2,-3 -4,-4 -2,-1 -4,-1 -5,-1 -1,1 -2,2 -4,5l-3 7c-2,5 0,10 7,16 2,2 3,3 4,4 5,5 8,9 9,13 1,4 -1,10 -4,18l-6 14c-4,9 -9,14 -14,16 -5,2 -12,1 -20,-2l-6 -3c-9,-4 -14,-9 -16,-14 -2,-5 -1,-12 4,-22l5 -11 20 9z"/>
  <polygon id="25" className="visualizefil24" points="2348,1758 2386,1672 2372,1666 2380,1647 2430,1669 2422,1688 2408,1682 2369,1768 "/>
  <polygon id="26" className="visualizefil24" points="2413,1787 2391,1778 2438,1673 2459,1683 "/>
  <polygon id="27" className="visualizefil24" points="2435,1797 2473,1711 2459,1705 2468,1686 2517,1709 2509,1727 2495,1721 2456,1807 "/>
  <path id="28" className="visualizefil24" d="M2525 1712l21 10 -36 80c-1,3 -2,5 -2,6 0,1 2,2 4,4 2,1 4,1 5,1 1,-1 2,-2 4,-5l36 -80 20 9 -32 71c-4,8 -7,14 -9,17 -2,3 -5,6 -8,8 -3,2 -6,3 -10,2 -4,0 -9,-2 -15,-5 -6,-3 -11,-6 -14,-8 -3,-3 -4,-6 -5,-9 -1,-3 0,-7 1,-11 1,-4 3,-10 7,-19l32 -71z"/>
  <polygon id="29" className="visualizefil24" points="2552,1850 2591,1764 2576,1757 2585,1739 2635,1761 2626,1780 2612,1773 2573,1859 "/>
  <polygon id="30" className="visualizefil24" points="2617,1879 2596,1869 2643,1765 2664,1774 "/>
  <path id="31" className="visualizefil24" d="M2674 1875l25 -55c1,-3 2,-5 1,-6 0,-1 -2,-2 -4,-4 -2,-1 -4,-1 -5,-1 -1,1 -2,2 -4,5l-25 55c-1,3 -2,5 -2,6 0,1 2,2 4,3 2,1 4,1 5,1 1,-1 2,-2 4,-5zm23 6c-3,7 -6,12 -8,15 -2,3 -4,5 -7,6 -3,1 -6,2 -9,2 -3,0 -9,-2 -16,-6 -8,-3 -13,-6 -15,-8 -2,-2 -4,-5 -5,-8 -1,-3 -1,-6 0,-10 1,-4 3,-9 6,-16l22 -48c3,-7 6,-12 8,-15 2,-3 5,-5 7,-6 3,-2 6,-2 10,-2 4,0 9,2 16,5 7,3 12,6 15,8 3,2 4,5 5,8 1,3 1,6 0,10 -1,3 -3,9 -6,16l-22 48z"/>
  <polygon id="32" className="visualizefil24" points="2697,1915 2744,1810 2774,1824 2753,1914 2789,1830 2808,1839 2761,1944 2732,1930 2753,1838 2716,1923 "/>
  <path id="33" className="visualizefil24" d="M2808 1923l-5 10c-1,3 -2,5 -1,6 0,2 2,3 4,4 2,1 4,1 6,1 1,-1 3,-3 4,-6l3 -7c1,-2 2,-4 2,-5 0,-1 0,-2 0,-3 -1,-3 -3,-6 -8,-9 -2,-2 -4,-3 -5,-4 -5,-5 -8,-9 -9,-14 -1,-4 1,-10 4,-18l4 -10c4,-9 9,-15 14,-18 5,-2 11,-2 19,2l6 3c5,2 9,4 11,7 3,2 4,5 5,8 1,2 1,5 0,8 -1,3 -2,7 -5,13l-4 8 -19 -8 3 -7c1,-3 2,-6 2,-7 0,-1 -2,-3 -4,-4 -2,-1 -4,-1 -5,-1 -1,1 -2,2 -4,5l-3 7c-2,5 0,10 7,16 2,2 3,3 4,4 5,5 8,9 9,13 1,4 -1,10 -4,18l-6 14c-4,9 -9,14 -14,16 -5,2 -12,1 -20,-2l-6 -3c-9,-4 -14,-9 -16,-14 -2,-5 -1,-12 4,-22l5 -11 20 9z"/>
  <path className="visualizefil24" d="M3467 806l0 -383c-7,17 -13,34 -21,50 -7,16 -15,32 -23,48l-36 -55c12,-20 22,-40 32,-60 10,-20 19,-39 28,-58l83 0 0 458 -64 0z"/>
  <polygon id="1" className="visualizefil24" points="3618,806 3674,427 3595,427 3595,348 3738,348 3738,427 3682,806 "/>
  <path className="visualizefil24" d="M4840 776l0 -383c-7,17 -13,34 -21,50 -7,16 -15,32 -23,48l-36 -55c12,-20 22,-40 32,-60 10,-20 19,-39 28,-58l83 0 0 458 -64 0z"/>
  <path className="visualizefil24" d="M6195 1300l0 -74c0,-19 0,-35 1,-46 1,-11 2,-22 5,-31 3,-11 6,-22 11,-31 5,-9 12,-19 20,-29 6,-6 14,-13 25,-22 11,-8 19,-15 24,-19 2,-2 4,-6 5,-10 1,-5 1,-10 1,-18l0 -75c0,-13 -1,-22 -3,-26 -2,-4 -5,-6 -10,-6 -5,0 -8,2 -10,6 -2,4 -3,13 -3,26l0 62 -64 0 0 -43c0,-51 5,-85 16,-103 11,-17 31,-26 62,-26 31,0 51,9 62,26 10,17 16,52 16,103l0 57c0,26 -3,46 -9,60 -6,14 -16,27 -31,38 -3,3 -8,6 -15,11 -27,19 -40,42 -40,67l0 19 92 0 0 82 -157 0z"/>
  <path className="visualizefil24" d="M7171 1657c0,-43 5,-73 16,-88 10,-15 31,-23 62,-23 31,0 51,8 62,23 10,15 16,45 16,89l0 36c0,24 -3,42 -8,52 -5,11 -14,18 -28,22 14,3 24,11 30,23 6,12 9,32 9,59l0 56c0,43 -5,73 -16,88 -11,15 -32,23 -64,23 -32,0 -54,-8 -65,-23 -11,-15 -16,-44 -16,-88l0 -49 62 0 0 50c0,13 1,21 4,26 2,5 7,7 14,7 7,0 11,-2 14,-7 2,-4 3,-13 3,-26l0 -61c0,-14 -2,-23 -5,-27 -3,-4 -11,-7 -24,-7l-24 0 0 -75 22 0c11,0 19,-3 23,-8 4,-5 6,-16 6,-34l0 -39c0,-13 -1,-21 -3,-26 -2,-4 -7,-7 -13,-7 -6,0 -11,2 -13,7 -2,4 -3,13 -3,26l0 29 -59 0 0 -28z"/>
  <path className="visualizefil24" d="M7971 3216l54 0 0 -228 -54 228zm54 173l0 -95 -100 0 0 -110 64 -253 98 0 0 286 17 0 0 78 -17 0 0 95 -61 0z"/>
  <path className="visualizefil24" d="M8107 4663c0,44 -5,73 -16,88 -11,15 -32,23 -63,23 -32,0 -53,-8 -64,-23 -11,-15 -16,-44 -16,-88l0 -37 61 0 0 39c0,13 1,22 3,26 2,4 6,6 13,6 6,0 11,-2 13,-7 2,-5 3,-13 3,-25l0 -114c0,-13 -1,-21 -4,-26 -2,-4 -7,-6 -14,-6 -7,0 -12,2 -14,6 -2,4 -4,13 -4,26l0 6 -56 0 0 -247 145 0 0 79 -86 0 0 84c6,-10 12,-18 20,-22 7,-5 15,-7 25,-7 20,0 34,7 42,22 7,15 11,49 11,102l0 95z"/>
  <path className="visualizefil24" d="M7488 6348l0 83c0,13 1,21 3,26 2,4 7,7 13,7 7,0 11,-2 13,-6 2,-4 3,-13 3,-26l0 -83c0,-13 -1,-22 -3,-26 -2,-4 -6,-6 -13,-6 -7,0 -11,2 -13,7 -2,4 -3,13 -3,26zm-66 -171c0,-41 5,-69 16,-84 10,-15 32,-22 63,-22 19,0 34,2 43,5 9,3 17,9 23,17 5,7 8,15 10,25 2,10 3,28 3,54l0 23 -59 0 0 -19c0,-13 -1,-21 -3,-26 -2,-4 -7,-7 -13,-7 -7,0 -11,2 -13,7 -2,4 -3,13 -3,26l0 94c8,-10 15,-17 23,-22 7,-4 15,-7 24,-7 11,0 20,3 27,8 8,5 14,13 18,24 2,6 4,15 5,29 1,13 2,31 2,53l0 57c0,51 -6,85 -17,102 -11,18 -33,26 -66,26 -33,0 -54,-9 -66,-26 -11,-18 -17,-52 -17,-102l0 -235z"/>
  <polygon className="visualizefil24" points="6586,7462 6642,7082 6563,7082 6563,7003 6706,7003 6706,7082 6651,7462 "/>
  <path className="visualizefil24" d="M5563 8045l0 54c0,14 1,24 4,29 3,5 8,7 15,7 8,0 13,-2 15,-7 3,-5 4,-14 4,-29l0 -54c0,-14 -1,-24 -4,-29 -3,-5 -8,-7 -15,-7 -8,0 -13,2 -15,7 -3,5 -4,14 -4,29zm1 -197l0 53c0,14 1,24 4,28 2,5 7,7 15,7 7,0 12,-2 15,-6 3,-4 4,-11 4,-23l0 -6 0 -53c0,-14 -1,-24 -4,-28 -2,-5 -7,-7 -15,-7 -7,0 -12,2 -15,6 -3,4 -4,11 -4,22l0 6zm61 118c15,4 26,13 32,27 6,13 9,37 9,70l0 19c0,51 -6,85 -17,103 -11,17 -34,26 -67,26 -33,0 -56,-9 -67,-26 -11,-18 -17,-52 -17,-102l0 -19c0,-33 3,-56 9,-70 6,-13 17,-22 32,-27 -13,-4 -23,-13 -28,-26 -6,-13 -9,-33 -9,-60l0 -14c0,-49 5,-83 16,-100 11,-17 32,-26 64,-26 31,0 52,9 63,26 11,17 16,51 16,100l0 14c0,27 -3,47 -9,60 -6,13 -15,21 -28,26z"/>
  <path className="visualizefil24" d="M4302 8119l0 -65c0,-13 -1,-22 -3,-26 -2,-4 -6,-6 -13,-6 -7,0 -11,2 -13,6 -2,4 -3,13 -3,26l0 65c0,13 1,22 3,26 2,4 7,6 13,6 7,0 11,-2 13,-6 2,-4 3,-13 3,-26zm66 189c0,42 -5,70 -16,84 -10,14 -32,22 -64,22 -21,0 -36,-2 -46,-5 -10,-3 -18,-9 -23,-17 -5,-7 -8,-15 -10,-25 -2,-10 -3,-28 -3,-54l0 -46 62 0 0 41c0,13 1,22 3,26 2,4 7,6 14,6 7,0 12,-2 14,-6 2,-4 3,-13 3,-26l0 -114c-8,10 -15,18 -22,22 -7,4 -15,6 -24,6 -11,0 -20,-3 -27,-8 -8,-5 -14,-13 -18,-24 -2,-6 -4,-16 -5,-30 -1,-14 -2,-31 -2,-52l0 -37c0,-51 6,-85 17,-103 11,-18 33,-27 66,-27 33,0 55,9 66,27 11,18 17,52 17,103l0 235z"/>
  <path className="visualizefil24" d="M2895 8110l0 -383c-7,17 -13,34 -21,50 -7,16 -15,32 -23,48l-36 -55c12,-20 22,-40 32,-60 10,-20 19,-39 28,-58l83 0 0 458 -64 0z"/>
  <path id="1" className="visualizefil24" d="M3088 7756l0 250c0,13 1,21 3,26 2,4 7,7 13,7 7,0 11,-2 13,-7 2,-4 3,-13 3,-26l0 -250c0,-13 -1,-22 -3,-26 -2,-4 -6,-6 -13,-6 -7,0 -11,2 -13,7 -2,4 -3,13 -3,26zm99 231c0,51 -6,85 -17,103 -11,18 -33,26 -66,26 -33,0 -54,-9 -66,-26 -11,-18 -17,-52 -17,-103l0 -212c0,-51 6,-85 17,-102 11,-18 33,-27 66,-27 33,0 54,9 66,27 11,18 17,52 17,102l0 212z"/>
  <path className="visualizefil24" d="M1801 7576l0 -383c-7,17 -13,34 -21,50 -7,16 -15,32 -23,48l-36 -55c12,-20 22,-40 32,-60 10,-20 19,-39 28,-58l83 0 0 458 -64 0z"/>
  <path id="1" className="visualizefil24" d="M1998 7576l0 -383c-7,17 -13,34 -21,50 -7,16 -15,32 -23,48l-36 -55c12,-20 22,-40 32,-60 10,-20 19,-39 28,-58l83 0 0 458 -64 0z"/>
  <path className="visualizefil24" d="M840 6522l0 -383c-7,17 -13,34 -21,50 -7,16 -15,32 -23,48l-36 -55c12,-20 22,-40 32,-60 10,-20 19,-39 28,-58l83 0 0 458 -64 0z"/>
  <path id="1" className="visualizefil24" d="M969 6522l0 -74c0,-19 0,-35 1,-46 1,-11 2,-22 5,-31 3,-11 6,-22 11,-31 5,-9 12,-19 20,-29 6,-6 14,-13 25,-22 11,-8 19,-15 24,-19 2,-2 4,-6 5,-10 1,-5 1,-10 1,-18l0 -75c0,-13 -1,-22 -3,-26 -2,-4 -5,-6 -10,-6 -5,0 -8,2 -10,6 -2,4 -3,13 -3,26l0 62 -64 0 0 -43c0,-51 5,-85 16,-103 11,-17 31,-26 62,-26 31,0 51,9 62,26 10,17 16,52 16,103l0 57c0,26 -3,46 -9,60 -6,14 -16,27 -31,38 -3,3 -8,6 -15,11 -27,19 -40,42 -40,67l0 19 92 0 0 82 -157 0z"/>
  <path className="visualizefil24" d="M216 4896l0 -383c-7,17 -13,34 -21,50 -7,16 -15,32 -23,48l-36 -55c12,-20 22,-40 32,-60 10,-20 19,-39 28,-58l83 0 0 458 -64 0z"/>
  <path id="1" className="visualizefil24" d="M346 4544c0,-43 5,-73 16,-88 10,-15 31,-23 62,-23 31,0 51,8 62,23 10,15 16,45 16,89l0 36c0,24 -3,42 -8,52 -5,11 -14,18 -28,22 14,3 24,11 30,23 6,12 9,32 9,59l0 56c0,43 -5,73 -16,88 -11,15 -32,23 -64,23 -32,0 -54,-8 -65,-23 -11,-15 -16,-44 -16,-88l0 -49 62 0 0 50c0,13 1,21 4,26 2,5 7,7 14,7 7,0 11,-2 14,-7 2,-4 3,-13 3,-26l0 -61c0,-14 -2,-23 -5,-27 -3,-4 -11,-7 -24,-7l-24 0 0 -75 22 0c11,0 19,-3 23,-8 4,-5 6,-16 6,-34l0 -39c0,-13 -1,-21 -3,-26 -2,-4 -7,-7 -13,-7 -6,0 -11,2 -13,7 -2,4 -3,13 -3,26l0 29 -59 0 0 -28z"/>
  <path className="visualizefil24" d="M414 3338l0 -383c-7,17 -13,34 -21,50 -7,16 -15,32 -23,48l-36 -55c12,-20 22,-40 32,-60 10,-20 19,-39 28,-58l83 0 0 458 -64 0z"/>
  <path id="1" className="visualizefil24" d="M579 3166l54 0 0 -228 -54 228zm54 173l0 -95 -100 0 0 -110 64 -253 98 0 0 286 17 0 0 78 -17 0 0 95 -61 0z"/>
  <path className="visualizefil24" d="M1082 2183l0 -383c-7,17 -13,34 -21,50 -7,16 -15,32 -23,48l-36 -55c12,-20 22,-40 32,-60 10,-20 19,-39 28,-58l83 0 0 458 -64 0z"/>
  <path id="1" className="visualizefil24" d="M1370 2078c0,44 -5,73 -16,88 -11,15 -32,23 -63,23 -32,0 -53,-8 -64,-23 -11,-15 -16,-44 -16,-88l0 -37 61 0 0 39c0,13 1,22 3,26 2,4 6,6 13,6 6,0 11,-2 13,-7 2,-5 3,-13 3,-25l0 -114c0,-13 -1,-21 -4,-26 -2,-4 -7,-6 -14,-6 -7,0 -12,2 -14,6 -2,4 -4,13 -4,26l0 6 -56 0 0 -247 145 0 0 79 -86 0 0 84c6,-10 12,-18 20,-22 7,-5 15,-7 25,-7 20,0 34,7 42,22 7,15 11,49 11,102l0 95z"/>
  <path className="visualizefil24" d="M1935 1397l0 -383c-7,17 -13,34 -21,50 -7,16 -15,32 -23,48l-36 -55c12,-20 22,-40 32,-60 10,-20 19,-39 28,-58l83 0 0 458 -64 0z"/>
  <path id="1" className="visualizefil24" d="M2128 1210l0 83c0,13 1,21 3,26 2,4 7,7 13,7 7,0 11,-2 13,-6 2,-4 3,-13 3,-26l0 -83c0,-13 -1,-22 -3,-26 -2,-4 -6,-6 -13,-6 -7,0 -11,2 -13,7 -2,4 -3,13 -3,26zm-66 -171c0,-41 5,-69 16,-84 10,-15 32,-22 63,-22 19,0 34,2 43,5 9,3 17,9 23,17 5,7 8,15 10,25 2,10 3,28 3,54l0 23 -59 0 0 -19c0,-13 -1,-21 -3,-26 -2,-4 -7,-7 -13,-7 -7,0 -11,2 -13,7 -2,4 -3,13 -3,26l0 94c8,-10 15,-17 23,-22 7,-4 15,-7 24,-7 11,0 20,3 27,8 8,5 14,13 18,24 2,6 4,15 5,29 1,13 2,31 2,53l0 57c0,51 -6,85 -17,102 -11,18 -33,26 -66,26 -33,0 -54,-9 -66,-26 -11,-18 -17,-52 -17,-102l0 -235z"/>
  <path className="visualizefil24" d="M3289 1179l0 41 -29 0 0 -146 29 0c18,0 30,3 36,8 6,5 9,15 9,29l0 30c0,14 -3,24 -9,29 -6,5 -16,8 -31,8l-5 0zm15 -37l0 -31c0,-4 -1,-7 -2,-8 -1,-1 -3,-2 -7,-2l-7 0 0 52 7 0c3,0 6,-1 7,-2 1,-1 2,-4 2,-8z"/>
  <path id="1" className="visualizefil24" d="M3376 1160l13 0 -6 -69 -7 69zm-35 60l19 -146 47 0 19 146 -30 0 -3 -36 -19 0 -3 36 -29 0z"/>
  <path id="2" className="visualizefil24" d="M3473 1100l-7 0 0 45 7 0c4,0 6,-1 8,-2 1,-1 2,-4 2,-8l0 -24c0,-4 -1,-7 -2,-8 -1,-1 -4,-2 -8,-2zm9 83c0,-5 -1,-8 -2,-10 -2,-2 -5,-3 -9,-3l-5 0 0 50 -29 0 0 -146 30 0c18,0 30,3 36,8 6,5 9,15 9,29l0 17c0,8 -2,15 -5,19 -3,4 -8,7 -15,9 7,1 12,4 15,8 3,4 5,10 5,17l0 38 -29 0 0 -37z"/>
  <polygon id="3" className="visualizefil24" points="3541,1220 3541,1101 3521,1101 3521,1075 3590,1075 3590,1101 3570,1101 3570,1220 "/>
  <polygon id="4" className="visualizefil24" points="3600,1220 3600,1075 3641,1075 3664,1190 3662,1075 3689,1075 3689,1220 3648,1220 3625,1102 3627,1220 "/>
  <polygon id="5" className="visualizefil24" points="3707,1220 3707,1075 3763,1075 3763,1101 3737,1101 3737,1133 3761,1133 3761,1158 3737,1158 3737,1194 3765,1194 3765,1220 "/>
  <path id="6" className="visualizefil24" d="M3816 1100l-7 0 0 45 7 0c4,0 6,-1 8,-2 1,-1 2,-4 2,-8l0 -24c0,-4 -1,-7 -2,-8 -1,-1 -4,-2 -8,-2zm9 83c0,-5 -1,-8 -2,-10 -2,-2 -5,-3 -9,-3l-5 0 0 50 -29 0 0 -146 30 0c18,0 30,3 36,8 6,5 9,15 9,29l0 17c0,8 -2,15 -5,19 -3,4 -8,7 -15,9 7,1 12,4 15,8 3,4 5,10 5,17l0 38 -29 0 0 -37z"/>
  <path id="7" className="visualizefil24" d="M3896 1172l0 14c0,4 1,6 2,8 1,2 3,2 7,2 3,0 6,-1 7,-2 1,-2 2,-4 2,-9l0 -10c0,-3 0,-5 -1,-7 0,-2 -1,-3 -2,-4 -2,-3 -6,-5 -13,-7 -3,-1 -6,-1 -7,-2 -8,-3 -14,-6 -17,-11 -3,-5 -5,-12 -5,-23l0 -13c0,-13 2,-22 7,-27 4,-5 12,-8 23,-8l9 0c7,0 12,1 17,2 4,1 8,3 10,6 2,2 3,5 4,9 1,4 1,9 1,17l0 11 -26 0 0 -9c0,-5 -1,-8 -2,-9 -1,-2 -3,-2 -6,-2 -3,0 -5,1 -6,2 -1,1 -2,4 -2,8l0 9c0,7 5,12 16,15 3,1 5,2 7,2 8,3 14,6 17,11 3,5 5,12 5,22l0 20c0,12 -2,21 -7,26 -5,5 -13,8 -24,8l-8 0c-12,0 -21,-2 -26,-7 -5,-5 -7,-14 -7,-27l0 -16 27 0z"/>
  <polygon id="8" className="visualizefil24" points="3958,1220 3958,1075 3987,1075 3987,1131 4002,1131 4002,1075 4032,1075 4032,1220 4002,1220 4002,1157 3987,1157 3987,1220 "/>
  <polygon id="9" className="visualizefil24" points="4080,1220 4051,1220 4051,1075 4080,1075 "/>
  <path id="10" className="visualizefil24" d="M4128 1179l0 41 -29 0 0 -146 29 0c18,0 30,3 36,8 6,5 9,15 9,29l0 30c0,14 -3,24 -9,29 -6,5 -16,8 -31,8l-5 0zm15 -37l0 -31c0,-4 -1,-7 -2,-8 -1,-1 -3,-2 -7,-2l-7 0 0 52 7 0c3,0 6,-1 7,-2 1,-1 2,-4 2,-8z"/>
  <polygon id="11" className="visualizefil24" points="3259,1461 3259,1316 3314,1316 3314,1342 3289,1342 3289,1378 3312,1378 3312,1404 3289,1404 3289,1461 "/>
  <path id="12" className="visualizefil24" d="M3373 1427l0 -77c0,-4 -1,-7 -2,-8 -1,-1 -3,-2 -6,-2 -3,0 -5,1 -6,2 -1,1 -2,4 -2,8l0 77c0,4 1,7 2,8 1,1 3,2 6,2 3,0 5,-1 6,-2 1,-1 2,-4 2,-8zm30 -5c0,10 0,17 -1,21 -1,4 -3,8 -5,11 -3,3 -6,5 -10,7 -4,1 -11,2 -22,2 -11,0 -18,-1 -22,-2 -4,-1 -7,-4 -10,-7 -2,-3 -4,-7 -5,-11 -1,-4 -2,-11 -2,-21l0 -67c0,-10 0,-17 1,-21 1,-4 3,-8 5,-11 3,-3 6,-6 10,-7 4,-1 11,-2 21,-2 10,0 17,1 21,2 4,1 8,4 10,7 2,3 4,7 5,11 1,4 1,11 1,21l0 67z"/>
  <path id="13" className="visualizefil24" d="M3456 1341l-7 0 0 45 7 0c4,0 6,-1 8,-2 1,-1 2,-4 2,-8l0 -24c0,-4 -1,-7 -2,-8 -1,-1 -4,-2 -8,-2zm9 83c0,-5 -1,-8 -2,-10 -2,-2 -5,-3 -9,-3l-5 0 0 50 -29 0 0 -146 30 0c18,0 30,3 36,8 6,5 9,15 9,29l0 17c0,8 -2,15 -5,19 -3,4 -8,7 -15,9 7,1 12,4 15,8 3,4 5,10 5,17l0 38 -29 0 0 -37z"/>
  <polygon id="14" className="visualizefil24" points="3567,1461 3567,1342 3547,1342 3547,1316 3616,1316 3616,1342 3596,1342 3596,1461 "/>
  <polygon id="15" className="visualizefil24" points="3626,1461 3626,1316 3655,1316 3655,1372 3671,1372 3671,1316 3700,1316 3700,1461 3671,1461 3671,1398 3655,1398 3655,1461 "/>
  <polygon id="16" className="visualizefil24" points="3718,1461 3718,1316 3774,1316 3774,1342 3748,1342 3748,1374 3772,1374 3772,1399 3748,1399 3748,1435 3776,1435 3776,1461 "/>
  <path id="17" className="visualizefil24" d="M3907 1382l0 40c0,10 0,17 -1,21 -1,4 -3,8 -5,11 -2,3 -6,5 -9,7 -4,1 -11,2 -21,2 -11,0 -18,-1 -22,-2 -4,-1 -7,-4 -10,-7 -2,-3 -4,-7 -5,-11 -1,-4 -2,-11 -2,-21l0 -67c0,-10 0,-17 1,-21 1,-4 3,-8 5,-11 3,-3 6,-6 10,-7 4,-1 11,-2 21,-2 9,0 16,1 20,2 4,1 8,4 10,7 2,3 4,7 5,11 1,4 1,11 1,21l0 8 -28 0 0 -12c0,-4 -1,-7 -2,-8 -1,-1 -4,-2 -7,-2 -4,0 -6,1 -7,2 -1,1 -2,4 -2,8l0 77c0,4 1,7 2,8 1,1 4,2 7,2 4,0 6,-1 7,-2 1,-1 2,-4 2,-8l0 -19 -8 0 0 -26 36 0z"/>
  <path id="18" className="visualizefil24" d="M3968 1427l0 -77c0,-4 -1,-7 -2,-8 -1,-1 -3,-2 -6,-2 -3,0 -5,1 -6,2 -1,1 -2,4 -2,8l0 77c0,4 1,7 2,8 1,1 3,2 6,2 3,0 5,-1 6,-2 1,-1 2,-4 2,-8zm30 -5c0,10 0,17 -1,21 -1,4 -3,8 -5,11 -3,3 -6,5 -10,7 -4,1 -11,2 -22,2 -11,0 -18,-1 -22,-2 -4,-1 -7,-4 -10,-7 -2,-3 -4,-7 -5,-11 -1,-4 -2,-11 -2,-21l0 -67c0,-10 0,-17 1,-21 1,-4 3,-8 5,-11 3,-3 6,-6 10,-7 4,-1 11,-2 21,-2 10,0 17,1 21,2 4,1 8,4 10,7 2,3 4,7 5,11 1,4 1,11 1,21l0 67z"/>
  <path id="19" className="visualizefil24" d="M4044 1401l13 0 -6 -69 -7 69zm-35 60l19 -146 47 0 19 146 -30 0 -3 -36 -19 0 -3 36 -29 0z"/>
  <polygon id="20" className="visualizefil24" points="4105,1461 4105,1316 4134,1316 4134,1435 4162,1435 4162,1461 "/>
  <path id="21" className="visualizefil24" d="M4196 1413l0 14c0,4 1,6 2,8 1,2 3,2 7,2 3,0 6,-1 7,-2 1,-2 2,-4 2,-9l0 -10c0,-3 0,-5 -1,-7 0,-2 -1,-3 -2,-4 -2,-3 -6,-5 -13,-7 -3,-1 -6,-1 -7,-2 -8,-3 -14,-6 -17,-11 -3,-5 -5,-12 -5,-23l0 -13c0,-13 2,-22 7,-27 4,-5 12,-8 23,-8l9 0c7,0 12,1 17,2 4,1 8,3 10,6 2,2 3,5 4,9 1,4 1,9 1,17l0 11 -26 0 0 -9c0,-5 -1,-8 -2,-9 -1,-2 -3,-2 -6,-2 -3,0 -5,1 -6,2 -1,1 -2,4 -2,8l0 9c0,7 5,12 16,15 3,1 5,2 7,2 8,3 14,6 17,11 3,5 5,12 5,22l0 20c0,12 -2,21 -7,26 -5,5 -13,8 -24,8l-8 0c-12,0 -21,-2 -26,-7 -5,-5 -7,-14 -7,-27l0 -16 27 0z"/>
  <g id="_564806160">
   <g>
    <path className="visualizefil25" d="M3961 4565l1 110c11,1 20,2 32,6l36 -100c-22,-9 -46,-14 -68,-16z"/>
    <path className="visualizefil26" d="M4045 4586l-37 102c10,5 18,11 27,18l68 -78c-17,-17 -38,-31 -58,-42z"/>
    <path className="visualizefil27" d="M4117 4637l-68 81c8,9 13,17 20,27l89 -47c-11,-23 -25,-44 -40,-61z"/>
    <path className="visualizefil28" d="M4167 4715l-92 46c4,11 6,21 8,33l101 -6c-3,-27 -9,-51 -17,-73z"/>
    <path className="visualizefil29" d="M4186 4804l-101 8c0,12 -1,22 -3,34l97 32c6,-22 7,-51 7,-75z"/>
    <path className="visualizefil30" d="M4176 4894l-98 -28c-4,11 -8,21 -13,31l82 65c12,-18 22,-45 30,-68z"/>
    <path className="visualizefil31" d="M4136 4975l-82 -64c-7,9 -14,16 -23,24l55 93c17,-13 36,-34 51,-52z"/>
    <path className="visualizefil32" d="M4070 5037l-53 -93c-10,5 -19,9 -30,13l18 108c21,-4 45,-16 65,-27z"/>
    <path className="visualizefil33" d="M3944 4565l-1 110c-11,1 -20,2 -32,6l-36 -100c22,-9 46,-14 68,-16z"/>
    <path className="visualizefil34" d="M3859 4586l37 102c-10,5 -18,11 -27,18l-68 -78c17,-17 38,-31 58,-42z"/>
    <path className="visualizefil35" d="M3787 4637l68 81c-8,9 -13,17 -20,27l-89 -47c11,-23 25,-44 40,-61z"/>
    <path className="visualizefil36" d="M3737 4715l92 46c-4,11 -6,21 -8,33l-101 -6c3,-27 9,-51 17,-73z"/>
    <path className="visualizefil37" d="M3718 4804l101 8c0,12 1,22 3,34l-97 32c-6,-22 -7,-51 -7,-75z"/>
    <path className="visualizefil38" d="M3729 4894l98 -28c4,11 8,21 13,31l-82 65c-12,-18 -22,-45 -30,-68z"/>
    <path className="visualizefil39" d="M3771 4977l82 -64c7,9 14,16 23,24l-55 93c-17,-13 -36,-34 -51,-52z"/>
    <path className="visualizefil40" d="M3837 5039l53 -93c10,5 19,9 30,13l-18 108c-21,-4 -45,-16 -65,-27z"/>
    <path className="visualizefil41" d="M3988 5067l-17 -106c-11,1 -22,0 -34,-1l-19 108c21,4 48,2 70,0z"/>
   </g>
   <path className="visualizefil42" d="M3348 4149l49 -4c1,11 3,20 6,25 5,9 13,14 23,14 7,0 13,-2 17,-7 4,-5 6,-10 6,-17 0,-6 -2,-12 -6,-16 -4,-5 -12,-9 -26,-14 -22,-7 -38,-17 -48,-28 -10,-12 -14,-27 -14,-45 0,-12 2,-23 7,-34 5,-11 12,-19 22,-25 10,-6 23,-9 41,-9 21,0 37,6 48,17 11,11 18,29 20,53l-48 4c-1,-11 -4,-18 -8,-23 -4,-5 -10,-7 -17,-7 -6,0 -10,2 -13,5 -3,4 -5,8 -5,13 0,4 1,7 4,10 2,3 8,6 17,9 22,7 38,14 48,21 10,7 17,16 21,26 4,10 7,22 7,35 0,15 -3,29 -9,42 -6,13 -14,22 -25,29 -11,7 -24,10 -40,10 -28,0 -48,-8 -59,-23 -11,-15 -17,-35 -18,-58z"/>
   <path id="1" className="visualizefil42" d="M3640 3992l51 0 0 140c0,14 -2,27 -5,39 -3,12 -8,23 -14,32 -7,9 -13,16 -20,19 -10,5 -22,8 -36,8 -8,0 -17,-1 -26,-2 -10,-2 -18,-5 -24,-9 -6,-5 -12,-11 -18,-20 -5,-9 -9,-18 -11,-27 -3,-15 -5,-28 -5,-40l0 -140 51 0 0 143c0,13 3,23 7,30 5,7 12,11 21,11 9,0 16,-4 21,-11 5,-7 7,-17 7,-30l0 -143z"/>
   <path id="2" className="visualizefil42" d="M3724 4149l49 -4c1,11 3,20 6,25 5,9 13,14 23,14 7,0 13,-2 17,-7 4,-5 6,-10 6,-17 0,-6 -2,-12 -6,-16 -4,-5 -12,-9 -26,-14 -22,-7 -38,-17 -48,-28 -10,-12 -14,-27 -14,-45 0,-12 2,-23 7,-34 5,-11 12,-19 22,-25 10,-6 23,-9 41,-9 21,0 37,6 48,17 11,11 18,29 20,53l-48 4c-1,-11 -4,-18 -8,-23 -4,-5 -10,-7 -17,-7 -6,0 -10,2 -13,5 -3,4 -5,8 -5,13 0,4 1,7 4,10 2,3 8,6 17,9 22,7 38,14 48,21 10,7 17,16 21,26 4,10 7,22 7,35 0,15 -3,29 -9,42 -6,13 -14,22 -25,29 -11,7 -24,10 -40,10 -28,0 -48,-8 -59,-23 -11,-15 -17,-35 -18,-58z"/>
   <polygon id="3" className="visualizefil42" points="3897,3992 4053,3992 4053,4050 4000,4050 4000,4227 3949,4227 3949,4050 3897,4050 "/>
   <path id="4" className="visualizefil42" d="M4170 4188l-58 0 -8 39 -52 0 62 -234 56 0 62 234 -54 0 -8 -39zm-11 -51l-18 -84 -18 84 36 0z"/>
   <polygon id="5" className="visualizefil42" points="4258,3992 4310,3992 4310,4227 4258,4227 "/>
   <polygon id="6" className="visualizefil42" points="4355,3992 4403,3992 4465,4122 4465,3992 4513,3992 4513,4227 4465,4227 4403,4098 4403,4227 4355,4227 "/>
   <path id="7" className="visualizefil42" d="M4655 4188l-58 0 -8 39 -52 0 62 -234 56 0 62 234 -54 0 -8 -39zm-11 -51l-18 -84 -18 84 36 0z"/>
   <path id="8" className="visualizefil42" d="M4741 3992l96 0c16,0 28,6 37,17 9,11 13,25 13,42 0,14 -3,26 -9,36 -4,7 -10,12 -18,16 12,4 21,11 26,21 6,10 8,22 8,37 0,12 -2,23 -6,33 -4,10 -9,17 -16,23 -4,3 -11,6 -19,8 -12,2 -19,3 -23,3l-88 0 0 -234zm52 92l22 0c8,0 14,-2 17,-6 3,-4 5,-10 5,-17 0,-7 -2,-12 -5,-16 -3,-4 -9,-6 -16,-6l-23 0 0 45zm0 92l26 0c9,0 15,-2 19,-7 4,-4 5,-10 5,-18 0,-7 -2,-12 -5,-17 -4,-4 -10,-6 -19,-6l-26 0 0 47z"/>
   <polygon id="9" className="visualizefil42" points="4929,3992 4981,3992 4981,4169 5061,4169 5061,4227 4929,4227 "/>
   <polygon id="10" className="visualizefil42" points="5092,3992 5229,3992 5229,4042 5143,4042 5143,4080 5223,4080 5223,4127 5143,4127 5143,4174 5231,4174 5231,4227 5092,4227 "/>
   <path className="visualizefil43" d="M3525 4875l0 -98 160 0 0 200c-31,29 -58,49 -81,60 -24,11 -51,16 -84,16 -40,0 -72,-10 -97,-29 -25,-19 -44,-47 -58,-85 -14,-38 -21,-81 -21,-129 0,-51 8,-96 23,-134 15,-38 37,-67 66,-86 23,-15 53,-23 92,-23 37,0 65,5 83,14 18,9 34,24 46,44 12,20 21,45 27,75l-100 25c-4,-18 -11,-31 -21,-41 -10,-10 -22,-14 -38,-14 -23,0 -41,11 -54,33 -13,22 -20,57 -20,105 0,51 7,87 20,109 14,22 33,33 57,33 12,0 23,-2 33,-7 10,-5 22,-13 36,-24l0 -44 -69 0z"/>
   <path id="1" className="visualizefil43" d="M4428 4968l-117 0 -17 77 -106 0 126 -470 113 0 125 470 -108 0 -17 -77zm-22 -102l-37 -169 -37 169 73 0z"/>
   <polygon id="2" className="visualizefil43" points="4602,4575 4706,4575 4706,4930 4867,4930 4867,5045 4602,5045 "/>
   <path id="3" className="visualizefil43" d="M4913 4890l98 -9c2,22 6,39 13,51 11,19 26,28 46,28 15,0 26,-5 34,-15 8,-10 12,-21 12,-34 0,-12 -4,-23 -11,-33 -8,-10 -25,-19 -53,-27 -45,-14 -78,-33 -97,-57 -19,-24 -29,-54 -29,-91 0,-24 5,-47 15,-68 10,-22 25,-38 45,-51 20,-12 47,-18 82,-18 43,0 75,11 98,34 22,22 36,58 40,107l-97 8c-3,-21 -8,-37 -16,-46 -8,-10 -20,-15 -34,-15 -12,0 -21,4 -27,11 -6,7 -9,16 -9,26 0,7 2,14 7,20 5,6 16,12 35,17 45,14 78,28 97,42 20,14 34,31 43,52 9,21 13,44 13,70 0,30 -6,58 -18,83 -12,25 -28,45 -50,58 -21,13 -48,20 -81,20 -57,0 -96,-15 -118,-46 -22,-31 -34,-70 -37,-117z"/>
   <path className="visualizefil42" d="M3356 4294l71 0c14,0 25,3 34,9 9,6 16,14 21,25 6,11 10,23 12,38 3,14 4,29 4,45 0,25 -2,44 -6,58 -4,14 -9,25 -16,35 -7,9 -14,16 -21,19 -10,4 -20,6 -28,6l-71 0 0 -234zm47 53l0 128 12 0c10,0 17,-2 21,-5 4,-3 7,-9 10,-18 2,-8 4,-22 4,-41 0,-25 -3,-42 -8,-51 -5,-9 -14,-14 -27,-14l-12 0z"/>
   <polygon id="1" className="visualizefil42" points="3530,4294 3657,4294 3657,4344 3578,4344 3578,4382 3651,4382 3651,4429 3578,4429 3578,4476 3659,4476 3659,4529 3530,4529 "/>
   <polygon id="2" className="visualizefil42" points="3678,4294 3727,4294 3762,4463 3796,4294 3844,4294 3787,4529 3736,4529 "/>
   <polygon id="3" className="visualizefil42" points="3867,4294 3994,4294 3994,4344 3915,4344 3915,4382 3988,4382 3988,4429 3915,4429 3915,4476 3997,4476 3997,4529 3867,4529 "/>
   <polygon id="4" className="visualizefil42" points="4030,4294 4077,4294 4077,4471 4151,4471 4151,4529 4030,4529 "/>
   <path id="5" className="visualizefil42" d="M4171 4412c0,-38 7,-68 21,-89 14,-21 33,-32 58,-32 26,0 45,10 59,31 14,21 21,50 21,88 0,27 -3,50 -9,67 -6,18 -15,31 -26,41 -11,10 -26,15 -43,15 -17,0 -32,-4 -43,-13 -11,-8 -21,-22 -28,-40 -7,-18 -11,-41 -11,-68zm47 0c0,24 3,41 9,51 6,10 14,15 24,15 10,0 18,-5 24,-15 6,-10 8,-28 8,-55 0,-22 -3,-38 -9,-48 -6,-10 -14,-15 -24,-15 -10,0 -17,5 -23,15 -6,10 -9,27 -9,51z"/>
   <path id="6" className="visualizefil42" d="M4363 4294l79 0c17,0 30,6 39,19 9,12 13,30 13,53 0,24 -5,42 -14,56 -9,13 -24,20 -43,20l-26 0 0 87 -48 0 0 -234zm48 100l12 0c9,0 16,-2 19,-7 4,-5 6,-11 6,-19 0,-7 -2,-14 -5,-19 -3,-5 -9,-8 -18,-8l-14 0 0 52z"/>
   <polygon id="7" className="visualizefil42" points="4525,4294 4588,4294 4612,4437 4636,4294 4698,4294 4698,4529 4659,4529 4659,4350 4629,4529 4594,4529 4564,4350 4564,4529 4525,4529 "/>
   <polygon id="8" className="visualizefil42" points="4736,4294 4863,4294 4863,4344 4784,4344 4784,4382 4857,4382 4857,4429 4784,4429 4784,4476 4865,4476 4865,4529 4736,4529 "/>
   <polygon id="9" className="visualizefil42" points="4899,4294 4943,4294 5001,4424 5001,4294 5046,4294 5046,4529 5001,4529 4944,4400 4944,4529 4899,4529 "/>
   <polygon id="10" className="visualizefil42" points="5074,4294 5219,4294 5219,4352 5170,4352 5170,4529 5123,4529 5123,4352 5074,4352 "/>
   
   <g className="sdgimage">
    <image id="VBB.png" transform="matrix(1 0 0 1 -366.736 -582.788)" x="4277" y="3662" width="749" height="762"
           xlinkHref="data:image/png;base64,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"/>
           
   </g>
  </g>
  <g id="_565500168">
   <path className="visualizefil44" d="M2285 4309c167,-76 233,100 231,117l-28 -4 -1 27 -19 -2 -9 40c-15,-14 -28,-21 -22,-47l-21 -2 -4 18 -6 13 -10 3c1,-5 1,-10 2,-15 -31,-2 -46,-33 -69,-50l21 44 -5 9c-25,-4 -25,-19 -38,-28 -6,18 -2,38 21,38l1 13 -12 6 -4 35 -31 48 -15 -2c-9,-22 -4,-46 -26,-65l-35 -4 -2 -22 -10 -5 0 -44 16 -5 -1 -13 18 2 1 7 21 4 1 9 34 -5 2 -16 -28 -8 -19 -5 -5 7 -30 -2 0 -7 27 -4 15 -19 43 4c9,-12 56,-21 48,-49l-14 -23 -39 3z"/>
   <polygon className="visualizefil44" points="2305,4604 2305,4587 2324,4592 2327,4574 2370,4574 2366,4596 2395,4597 2393,4612 "/>
   <line className="visualizefil20" x1="2405" y1="4598" x2="2440" y2= "4581" />
   <polygon className="visualizefil44" points="2434,4526 2433,4559 2476,4560 2474,4545 2508,4508 2498,4506 2496,4497 2491,4510 "/>
   <polygon className="visualizefil44" points="2257,4349 2258,4363 2272,4361 2272,4371 2283,4370 2309,4345 2272,4343 2271,4348 "/>
   <line className="visualizefil20" x1="2240" y1="4356" x2="2215" y2= "4378" />
   <polyline className="visualizefil20" points="2248,4327 2248,4338 2236,4337 2235,4346 "/>
  </g>
  <g id="_565503024">
   <path className="visualizefil18" d="M1991 4320c365,-215 658,58 711,268 -150,79 -529,183 -711,-268z"/>
   <g>
    <path className="visualizefil44" d="M2337 4294c192,-10 188,188 180,203l-26 -15 -11 26 -18 -9 -24 35c-9,-20 -19,-32 -4,-54l-19 -10 -10 16 -11 10 -11 -1c3,-5 5,-9 8,-14 -29,-14 -32,-50 -48,-75l3 50 -8 7c-22,-13 -17,-28 -26,-42 -12,15 -16,36 6,45l-4 13 -14 1 -18 33 -49 34 -14 -8c0,-24 14,-46 0,-73l-33 -18 6 -23 -8 -9 17 -43 18 1 4 -13 16 9 -2 8 19 12 -2 9 35 9 8 -15 -24 -19 -17 -12 -7 5 -28 -14 3 -7 27 7 22 -12 40 21c14,-9 62,1 65,-29l-5 -27 -39 -12z"/>
    <polygon className="visualizefil44" points="2242,4589 2250,4572 2266,4584 2275,4567 2317,4584 2305,4604 2333,4616 2325,4630 "/>
    <line className="visualizefil20 str7" x1="2342" y1="4622" x2="2383" y2= "4618" />
    <polygon className="visualizefil44" points="2398,4563 2385,4594 2426,4611 2430,4596 2477,4573 2468,4567 2470,4558 2460,4569 "/>
    <polygon className="visualizefil44" points="2295,4322 2290,4335 2304,4339 2300,4349 2312,4352 2346,4337 2311,4321 2308,4326 "/>
    <line className="visualizefil20 str8" x1="2275" y1="4321" x2="2242" y2= "4334" />
    <polyline className="visualizefil20 str8" points="2294,4296 2290,4307 2278,4302 2274,4310 "/>
    <rect className="visualizefil44 str9" transform="matrix(0.652055 0.284556 -0.284556 0.652055 2493.55 4517.17)" width="24" height="39"/>
   </g>
  </g>
  <g id="_565506120">
   <path className="visualizefil18" d="M2804 3097l2 4c1,-2 5,-2 7,-4 28,26 28,45 27,55l-5 4 4 5c1,-2 3,-3 4,-4 43,6 58,28 50,32l9 6c16,-24 -15,-47 -37,-52l-12 -12c-1,-21 -33,-59 -50,-35z"/>
   <path className="visualizefil18" d="M2850 2986l2 3c1,-1 4,-1 5,-3 22,20 22,34 21,43l-4 3 3 4c1,-1 2,-2 3,-3 33,4 45,22 39,25l7 5c12,-19 -12,-36 -29,-40l-9 -9c-1,-16 -26,-46 -39,-27z"/>
   <path className="visualizefil18" d="M2962 3003l0 3c1,-1 3,0 4,0 10,21 5,31 2,37l-4 1 1 4c1,-1 2,-1 3,-2 22,13 26,29 20,29l4 6c15,-10 2,-29 -9,-37l-4 -9c4,-12 -5,-40 -20,-31z"/>
  </g>
 </g>
</svg>
</div>
   
      <div className="contTextsdg">   
	    <p className="contTextsdg1">by CAFSED</p>
	    <p className="contTextsdg2">
               for a <span> better </span> future.
	    </p>
      </div>
      
      
      <div className="modal fade refine" id="SDG1mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" style={{color:'#ee0b32',textAlign:'center'}}>SDG1: No Poverty</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

			<div className="SdgIConbox">
       <img src={`${BASE_URL}/goal_icons/goal_1.png`} />
			</div>

			<div className="targgText" style={{color:'#ee0b32'}}>Targets</div>
        	    
	    <div id="collapeseSDG1-tg1" className="collapseCont">
		<h1><span className="arrow-r"></span>Target 1.1: By 2030, eradicate extreme poverty for all people everywhere,
		         currently measured a people living on less than $1.25 a day</h1>
			<div style={{paddingLeft:'30px'}}>
		    <h4 className="innDiText" style={{color:'#ee0b32'}}>Indicators</h4>
		     <ul style={{borderLeft: '3px solid #ee0b32'}}>
			<a href="/playground/poverty_indi1">
			    <li>Proportion of population below the international poverty line, by sex, age, employment status and 
				geographical location (urban/rural)| Percent</li>
			    </a>
                        
		     </ul>
		    
		     
		    
		</div>
	    </div>
            
            <div id="collapeseSDG1-tg2" className="collapseCont">
		<h1><span className="arrow-r"></span>
		      Target 1.2: By 2030, reduce at least by half the proportion of men, women
			children of all ages living in poverty in all its dimensions according to
			national definitions.</h1>

		<div style={{paddingLeft:'30px'}}>
		    
		<h4 className="innDiText" style={{color:'#ee0b32'}}>Indicators</h4>
		     <ul style={{borderLeft: '3px solid #ee0b32'}}>
			<a href="/playground/poverty_indi2">
			      <li>Proportion of population living below the national poverty line, by sex and age | Percent</li>
			    </a>
			    <a href="/playground/poverty_indi3">
			      <li>Proportion of men, women and children of all ages 
				living in poverty in all its dimensions according to national 
				definitions | Percent</li>
			    </a>
							
		     </ul>
	       </div>
	    </div>
            
             <div id="collapeseSDG1-tg3" className="collapseCont">
		<h1><span className="arrow-r"></span> Target 1.3: Implement nationally appropriate social protection systems and
			measures for all, including floors, and by 2030 achieve susbstantial coverage
			of the poor and the vulnerable.</h1>
		<div>
		    
		<h4 className="innDiText" style={{color:'#ee0b32'}}>Indicators</h4>
		     <ul style={{borderLeft: '3px solid #ee0b32'}}>
			<a href="/playground/poverty_indi4">
			      <li>Proportion of population covered by social 
				protection floors/systems, by sex, distinguishing children, 
				unemployed persons, older persons, persons with 
				disabilities, pregnant women, newborns, work-injury 
				victims and the poor and the vulnerable | Percent</li> 
			    </a>
                        
		     </ul>
	       </div>
	    </div>
             
            <div id="collapeseSDG1-tg4" className="collapseCont">
		<h1><span className="arrow-r"></span>
		                       Target 1.4: By 2030, ensure that all men and women, in particular 
						the poor and the vulnerable, have equal rights to economic 
						resources, as well as access to basic services, ownership and 
						control over land and other forms of property, inheritance, 
						natural resources, appropriate new technology and financial 
						services, including microfinance.</h1>
		<div>
		    
		<h4 className="innDiText" style={{color:'#ee0b32'}}>Indicators</h4>
		     <ul style={{borderLeft: '3px solid #ee0b32'}}>
			<a href="/playground/poverty_indi5">
			      <li>Proportion of population living in households with access to basic services| Percent</li>
			    </a>
			    <a href="/playground/poverty_indi6">
			       <li>Proportion of total adult population with secure tenure rights to land, (a) with legally recognized
			documentation, and (b) who perceive their rights to land as secure, by sex and type of tenure | Percent</li>
			    </a>
			    
		     </ul>
	       </div>
	    </div>
	    
	    <div id="collapeseSDG1-tg5" className="collapseCont">
		<h1><span className="arrow-r"></span>Target 1.5: By 2030, build the resilience of the poor and those in 
					vulnerable situations and reduce their exposure and vulnerability to climate-related
					extreme events and other economic, social and environmental shocks and disasters.</h1>
		<div>
		    
		<h4 className="innDiText" style={{color:'#ee0b32'}}>Indicators</h4>
		     <ul style={{borderLeft: '3px solid #ee0b32'}}>
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
	       </div>
	    </div>
	    
	    <div id="collapeseSDG1-tg6" className="collapseCont">
		<h1><span className="arrow-r"></span>
		        Target 1.a: Ensure significant mobilization of resources from a 
				variety of sources, by 2030, including through enhanced development 
				cooperation, in order to provide adequate and predictable 
				means for developing countries, in particular least developed 
				countries, to implement programmes and policies to end 
				poverty in all its dimensions.</h1>
		<div>
		    
		<h4 className="innDiText" style={{color:'#ee0b32'}}>Indicators</h4>
		     <ul style={{borderLeft: '3px solid #ee0b32'}}>
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
	       </div>
	    </div>
	    
	    <div id="collapeseSDG1-tg7" className="collapseCont">
		<h1><span className="arrow-r"></span>
		          Target 1.b: Create sound policy frameworks at the national, 
				regional and international levels, based on pro-poor and 
				gender-sensitive development strategies, to support 
				accelerated investment in poverty eradication actions.</h1>
		<div>
		    
		<h4 className="innDiText" style={{color:'#ee0b32'}}>Indicators</h4>
		     <ul style={{borderLeft: '3px solid #ee0b32'}}>
			 <a href="/playground/poverty_indi14">
			      <li>Proportion of government recurrent and capital 
				spending to sectors that disproportionately benefit women, 
				the poor and vulnerable groups | Percent</li>
			    </a>
                        
		     </ul>
	       </div>
	    </div>
      
      
      </div>
      
    </div>
  </div>
 </div> 
  
  
  
  <div className="modal fade refine" id="SDG2mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered" role="document">
     <div className="modal-content">
       <div className="modal-header">
         <h5 className="modal-title dissgTitle" style={{color:'#d6a532',textAlign:'center'}}>SDG2:Zero Hunger</h5>
         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div className="modal-body">

			 <div className="SdgIConbox">
       <img src={`${BASE_URL}/goal_icons/goal_2.png`} />
			</div>

			<div className="targgText" style={{color:'#d6a532'}}>Targets</div>
         
	    <div id="collapeseSDG2-tg1" className="collapseCont">
		<h1><span className="arrow-r"></span>Target 2.1: By 2030, end hunger and ensure access by all people, in particular the poor
                         and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round
			 </h1>
		<div>
		    
			
			<ul>
			    <a href="/playground/hunger_indi1">
			      <li>Prevalence of undernourishment | Percent</li>
			    </a>
			    <a href="/playground/hunger_indi2">
			      <li>Estimated number of population in moderate or severe food insecurity | Number</li>
			    </a>
                            
			</ul>
	       </div>
	    </div>
	    
	    <div id="collapeseSDG2-tg2" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 2.2: By 2030, end all forms of malnutrition, including achieving, by 2025,
                        the internationally agreed targets on stunting and wasting in children under
                        5 years of age, and address the nutritional needs of adolescent girls,
                        pregnant and lactating women and older persons  </h1>
               <div>       
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
	       </div>
	    </div>
	    
	    <div id="collapeseSDG2-tg3" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 2.3: By 2030, double the agricultural productivity and 
				incomes of small-scale food producers, in particular women, 
				indigenous peoples, family farmers, pastoralists and fishers, 
				including through secure and equal access to land, other 
				productive resources and inputs, knowledge, financial 
				services, markets and opportunities for value addition and 
				non-farm employment   </h1>
               <div>       
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
	       </div>
	    </div>
	    
	    <div id="collapeseSDG2-tg4" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 2.4: By 2030, ensure sustainable food production systems 
				and implement resilient agricultural practices that increase 
				productivity and production, that help maintain ecosystems, 
				that strengthen capacity for adaptation to climate change, 
				extreme weather, drought, flooding and other disasters and 
				that progressively improve land and soil quality  </h1>
               <div>       
                        <ul>
			    <a href="/playground/hunger_indi7">
			      <li>Proportion of agricultural area under productive 
				and sustainable agriculture | Percent</li>
			    </a>
			</ul>
	       </div>
	    </div>
	    
	    <div id="collapeseSDG2-tg5" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 2.5: By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and
                        domesticated animals and their related wild species, including through soundly managed and
                        diversified seed and plant banks at the national, regional and international levels, and promote
                        access to and fair and equitable sharing of benefits arising from the utilization of genetic
                        resources and associated traditional knowledge, as internationally agreed.  </h1>
               <div>         
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
	       </div>
	    </div>
	    
	    <div id="collapeseSDG2-tg6" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 2.a: Increase investment, including through enhanced international cooperation,
                        in rural infrastructure, agricultural research and extension services, technology development and plant and
                        livestock gene banks in order to enhance agricultural productive capacity in developing countries,
                        in particular least developed countries.  </h1>
                  <div>                              
                        <ul>
			    <a href="/playground/hunger_indi10">
			      <li>The agriculture orientation index for government expenditures | Index</li>
			    </a>
			    <a href="/playground/hunger_indi11">
			      <li>Total official flows disbursements for agriculture, by recipient | Constant USD</li>
			    </a>
			    
			</ul>
		  </div>
	    </div>
	    
	    
	    <div id="collapeseSDG2-tg7" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 2.b: Correct and prevent trade restrictions and distortions in 
			world agricultural markets, including through the parallel 
			elimination of all forms of agricultural export subsidies and 
			all export measures with equivalent effect, in accordance 
			with the mandate of the Doha Development Round.  </h1>
                  <div>                              
                        <ul>
			    <a href="/playground/hunger_indi12">
			      <li>Agricultural export subsidies | Index</li>
			    </a>
                            
			</ul>
		  </div>
	    </div>
	    
            
	    <div id="collapeseSDG2-tg8" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 2.c: Adopt measures to ensure the proper functioning of food commodity markets and their derivatives
                        and facilitate timely access to market information, including on food reserves, in order
                        to help limit extreme food price volatility. </h1>
                 <div>       
                        <ul>
			    <a href="/playground/hunger_indi13">
			      <li>Indicator of Food Price Anomalies (IFPA)| Index</li>
			    </a>
                            
			</ul>
		 </div>
	    </div>
            
            
       
       </div>
     
    </div>
  </div>
 </div>
 
	   
           
           <div className="modal fade refine" id="SDG3mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle">SDG 3:Good Health</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         
	    <div id="collapeseSDG3-tg1" className="collapseCont">
                <h1><span className="arrow-r"></span>Target 3.1: By 2030, reduce the global maternal mortality ratio to less than 70 per
                                          100,000 live births.
			 </h1>
		<div>		
			 
			<ul>
			    <a href="/playground/health_indi1">
			      <li>Maternal mortality ratio | Per 100,000 live births</li>
			    </a>
			    <a href="/playground/health_indi2">
			      <li>Proportion of births attended by skilled health personnel | Percent</li>
			    </a>
			</ul>
		</div>
            </div>
            
            <div id="collapeseSDG3-tg2" className="collapseCont">
                <h1><span className="arrow-r"></span>
		   Target 3.2: By 2030, end preventable deaths of newborns and children under 5 years of age, 
                        with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births
                        and under-5 mortality to at least as low as 25 per 1,000 live births
			 </h1>
		<div>	
			
                        
                        <ul>
			    
                            <a href="/playground/health_indi3">
			        <li>Under-five Mortality rate | Per 1,000 live births</li>
			    </a>
			    <a href="/playground/health_indi4">
			        <li>Neonatal mortality rate | Per 1,000 live births</li>
			    </a>
                            
			</ul>
	        </div>
            </div>    
		   
            <div id="collapeseSDG3-tg3" className="collapseCont">
                <h1><span className="arrow-r"></span>Target 3.3: By 2030, end the epidemics of AIDS, tuberculosis,
                        malaria and neglected tropical diseases and combat hepatitis,
                        water-borne diseases and other communicable diseases.
			 </h1>
		<div>	
			
                        
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
                </div>
            </div>
            
	    <div id="collapeseSDG3-tg4" className="collapseCont">
                <h1><span className="arrow-r"></span>
			Target 3.4: By 2030, reduce by one third premature mortality
                        from non-communicable diseases through prevention and treatment
                        and promote mental health and well-being.
                         </h1>
		<div>	 
                        
                        <ul>
			    <a href="/playground/health_indi10">
			      <li>Mortality rate attributed to cardiovascular disease, cancer, diabetes or chronic
                                respiratory disease | Probability</li>
			    </a>
			    <a href="/playground/health_indi11">
			      <li>Suicide mortality rate | Per 100,000 population</li>
			    </a>
			    
        		</ul>
		</div>
            </div>
            
            <div id="collapeseSDG3-tg5" className="collapseCont">
                <h1><span className="arrow-r"></span>
			Target 3.5: Strengthen the prevention and treatment of substance abuse,
                        including narcotic drug abuse and harmful use of alcohol.
                         </h1>
		<div>	 
                        
                        <ul>
			    <a href="/playground/health_indi12">
			      <li>Coverage of treatment interventions 
				(pharmacological, psychosocial and rehabilitation and 
				aftercare services) for substance use disorders | Percent</li>
			    </a>
			    <a href="/playground/health_indi13">
			      <li>Alcohol per capita consumption within a calendar year in litres of
			          pure alcohol | Litres pure alcohol</li>
			    </a>
                            
			</ul>
		</div>
            </div>
                    
            <div id="collapeseSDG3-tg6" className="collapseCont">
                <h1><span className="arrow-r"></span> 
			Target 3.6: By 2020, halve the Number of global deaths and injuries from road traffic accidents.
                        </h1>
		<div>	 
                        <ul>
			    <a href="/playground/health_indi14">
			      <li>Death rate due to road traffic injuries | Per 100,000 population</li>
			    </a>
                            
			</ul>
		</div>
            </div>
            
            <div id="collapeseSDG3-tg7" className="collapseCont">
                <h1><span className="arrow-r"></span> 
			Target 3.7: By 2030, ensure universal access to sexual and reproductive health-care services,
                        including for family planning, information and education, and the integration of reproductive
                        health into national strategies and programmes.
                        </h1>
		<div>	
                        
                        <ul>
			    <a href="/playground/health_indi15">
			      <li>Proportion of women married or in a union of reproductive
                                 age who have their need for family planning satisfied with
				    modern methods | Percent</li>
			    </a>
			    <a href="/playground/health_indi16">
			       <li>Adolescent birth rate | Per 1,000 population</li>
			    </a>
                           
			</ul>
                </div>
            </div>    
	    
	    <div id="collapeseSDG3-tg8" className="collapseCont">
                <h1><span className="arrow-r"></span> 
			Target 3.8: By 2030, achieve universal health coverage, including financial 
			risk protection, access to quality essential health-care 
			services and access to safe, effective, quality and affordable 
			essential medicines and vaccines for all.
                        </h1>
		<div>	
                        
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
		</div>
            </div>
	    
	    
            <div id="collapeseSDG3-tg9" className="collapseCont">
                <h1><span className="arrow-r"></span> 
			Target 3.9: By 2030, substantially reduce the Number of deaths and illnesses from
                        hazardous chemicals and air, water and soil pollution and contamination.
                         </h1>
		<div>	
                        
                        <ul>
			    <a href="/playground/health_indi19">
			      <li>Mortality rate attributed to household and ambient air pollution | Per 100,000 population</li>
			    </a>
			    <a href="/playground/health_indi20">
			      <li>Mortality rate attributed to unsafe water, unsafe sanitation and lack of
			           hygiene | Per 100,000 population</li>
			    </a>
			    <a href="/playground/health_indi21">
			      <li>Mortality rate attributed to unintentional poisonings | Per 100,000 population</li>
			    </a>
                            
			</ul>
		</div>
            </div>
            
            <div id="collapeseSDG3-tg10" className="collapseCont">
                <h1><span className="arrow-r"></span> 
			Target 3.a: Strengthen the implementation of the World Health Organization
                        Framework Convention on Tobacco Control in all countries, as appropriate.
                        </h1>
		<div>	
                        
                        <ul>
			    <a href="/playground/health_indi22">
			      <li>Age-standardized prevalence of current tobacco use 
				among persons aged 15 years and older| Percent</li>
			    </a>
                            
			</ul>
		</div>
            </div>
            
            <div id="collapeseSDG3-tg11" className="collapseCont">
                <h1><span className="arrow-r"></span> 
			Target 3.b: Support the research and development of vaccines and medicines for the communicable
                        and non-communicable diseases that primarily affect developing countries, provide access to
                        affordable essential medicines and vaccines, in accordance with the Doha Declaration on the
                        TRIPS Agreement and Public Health, which affirms the right of developing countries to use to
                        the full the provisions in the Agreement on Trade-Related Aspects of
                        Intellectual Property Rights regarding flexibilities to protect public health, and,
                        in particular, provide access to medicines for all.
                        </h1>
		<div>	
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
		</div>
            </div>
            
            <div id="collapeseSDG3-tg12" className="collapseCont">
                <h1><span className="arrow-r"></span> 
			Target 3.c: Substantially increase health financing and the recruitment, development, training
                        and retention of the health workforce in developing countries, especially in least developed
                        countries and small island developing States.
                         </h1>
		<div>	
                        
                        <ul>
			    <a href="/playground/health_indi26">
			       <li>Health worker density and distribution| Per 1,000 population</li>
			    </a>
			</ul>
		</div>
            </div>
	    
	    <div id="collapeseSDG3-tg13" className="collapseCont">
                <h1><span className="arrow-r"></span> 
			Target 3.d: Strengthen the capacity of all countries, in particular 
				developing countries, for early warning, risk reduction and 
				management of national and global health risks.
                         </h1>
		<div>	
                        
                        <ul>
			    <a href="/playground/health_indi27">
			        <li>International Health Regulations (IHR) capacity 
				and health emergency preparedness </li>
			    </a>
			</ul>
		</div>
            </div>
            
		            
        </div>
      
    </div>
  </div>   
 </div>
 
           
           <div className="modal fade refine" id="SDG4mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" id="">SDG 4:Quality Education</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         
         
	    <div id="collapeseSDG4-tg1" className="collapseCont">
		<h1><span className="arrow-r"></span>Target 4.1: By 2030, ensure that all girls and boys complete free,
                        equitable and quality primary and secondary education leading to relevant and effective learning outcomes
                         </h1>
		 <div>
		    			 
			<ul>
			    <a href="/playground/education_indi1">
			      <li>Proportion of children and young people (a) in 
				grades 2/3; (b) at the end of primary; and (c) at the end of 
				lower secondary achieving at least a minimum proficiency 
				level in (i) reading and (ii) mathematics by sex | Percent</li>
			    </a>
                            
			</ul>
		  </div>
            </div>
      
	    <div id="collapeseSDG4-tg2" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 4.2: By 2030, ensure that all girls and boys have access to quality early
                        childhood development, care and pre-primary education so that they are ready for primary education.
                        </h1>
		 <div>
                        
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
		  </div>
            </div>
            
	    <div id="collapeseSDG4-tg3" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 4.3: By 2030, ensure equal access for all women and men to affordable and quality
                        technical, vocational and tertiary education, including university.
                        </h1>
		 <div>
                        
                        <ul>
			    <a href="/playground/education_indi4">
			      <li>Participation rate of youth and adults in formal and non-formal education and
                                  training in the previous 12 months by sex | Percent</li>
			    </a>
                            
			</ul>
		  </div>
            </div>
            
	    <div id="collapeseSDG4-tg4" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 4.4: By 2030, substantially increase the Number of youth and
                        adults who have relevant skills, including technical and vocational skills,
                        for employment, decent jobs and entrepreneurship.
                         </h1>
		 <div>
                        
                        <ul>
			    <a href="/playground/education_indi5">
			      <li>Proportion of youth and adults with information and communications
                                 technology (ICT) skill, by type of skills | Percent</li>
			    </a>
                            
			</ul>
		  </div>
            </div>
            
            <div id="collapeseSDG4-tg5" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 4.5: By 2030, eliminate gender disparities in education and ensure equal access to all levels of
                        education and vocational training for the vulnerable, including persons with disabilities, indigenous
                        peoples and children in vulnerable situations.
                        </h1>
		 <div>
                        
                        <ul>
			    <a href="/playground/education_indi6">
			      <li>Parity indices (female/male, rural/urban, bottom/top 
				wealth quintile and others such as disability status, 
				indigenous peoples and conflict-affected, as data become 
				available) for all education indicators on this list that can 
				be disaggregated | Ratio</li>
			    </a>
			</ul>
		  </div>
            </div>
            
            <div id="collapeseSDG4-tg6" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 4.6: By 2030, ensure that all youth and a substantial proportion of adults,
                        both men and women, achieve literacy and numeracy.
                        </h1>
		 <div>
			 
			<ul>
			    <a href="/playground/education_indi7">
			      <li> Proportion of population in a given age group 
				achieving at least a fixed level of proficiency in functional 
				a literacy and
				b numeracy skills, by sex | Percent</li>
			    </a>
			</ul>
		  </div>
            </div>
	    
	    <div id="collapeseSDG4-tg7" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 4.7: By 2030, ensure that all learners acquire the knowledge 
				and skills needed to promote sustainable development, 
				including, among others, through education for sustainable 
				development and sustainable lifestyles, human rights, gender 
				equality, promotion of a culture of peace and non-violence, 
				global citizenship and appreciation of cultural diversity and 
				of culture�s contribution to sustainable development.
                        </h1>
		 <div>
			 
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
		  </div>
            </div>
	    
            
	    <div id="collapeseSDG4-tg8" className="collapseCont">
		<h1><span className="arrow-r"></span>
                        Target 4.a: Build and upgrade education facilities that are child, disability and gender
                        sensitive and provide safe, non-violent, inclusive and effective learning environments for all.
                        </h1>
		 <div>
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
		  </div>
            </div>
            
            <div id="collapeseSDG4-tg9" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 4.b: By 2020, substantially expand globally the Number of scholarships available to developing countries,
                        in particular least developed countries, small island developing States and African countries, for enrolment
                        in higher education, including vocational training and information and communications technology, technical,
                        engineering and scientific programmes, in developed countries and other developing countries.
                        </h1>
		  <div>
			 
			<ul>
			    <a href="/playground/education_indi10">
			      <li>Volume of official development assistance flows 
				for scholarships by sector and type of study 
				scientific programmes, in developed countries and other 
				developing countries | Constant USD</li>
			    </a>
			</ul>
		  </div>
            </div>
            
	    <div id="collapeseSDG4-tg10" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 4.c: By 2030, substantially increase the supply of qualified teachers, including through international
                        cooperation for teacher training in developing countries, especially least developed countries and small
                        island developing States.
                        </h1>
		  <div>
                        
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
           
           
      </div>
      
    </div>
  </div>
  </div>
  
	   
           
           <div className="modal fade refine" id="SDG5mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" id="">SDG 5:Gender Equality</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         
	    <div id="collapeseSDG5-tg1" className="collapseCont">
		<h1><span className="arrow-r"></span>
		         Target 5.1: End all forms of discrimination against all women and girls everywhere.
                       </h1>
		  <div>
		    			 
			<ul>
			    <a href="/playground/genequality_indi1">
			      <li>Whether or not legal frameworks are in place 
				to promote, enforce and monitor equality and
				non-discrimination on the basis of sex</li>
			    </a>
			</ul>
		  </div>
            </div>
	    
	    <div id="collapeseSDG5-tg2" className="collapseCont">
		<h1><span className="arrow-r"></span>Target 5.2: Eliminate all forms of violence against all women and girls in the public
                         and private spheres, including trafficking and sexual and other types of exploitation.
                       </h1>
		  <div>
		    			 
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
		  </div>
            </div>
            
	    <div id="collapeseSDG5-tg3" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 5.3: Eliminate all harmful practices, such as child, early and forced marriage and Female
                        genital mutilation.
                        </h1>
		  <div>
                        
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
		  </div>
            </div>
            
	    <div id="collapeseSDG5-tg4" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 5.4: Recognize and value unpaid care and domestic work through the provision of public services,
                        infrastructure and social protection policies and the promotion of shared responsibility within the
                        household and the family as nationally appropriate.
                        </h1>
		  <div>
                        
                        <ul>
			    <a href="/playground/genequality_indi6">
			       <li>Proportion of time spent on unpaid domestic and care work
			           by sex, age and location | Percent</li>
			    </a>
                             
			</ul>
		  </div>
            </div>
            
	    <div id="collapeseSDG5-tg5" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 5.5: Ensure women�s full and effective participation and
                        equal opportunities for leadership at all levels of decision-making
                        in political, economic and public life.
                        </h1>
		  <div>
                        
                        <ul>
			    <a href="/playground/genequality_indi7">
			       <li>Proportion of seats held by women in (a) national 
				  parliaments and (b) local governments | Percent</li>
 			    </a>
			    <a href="/playground/genequality_indi8">
			       <li>Proportion of women in managerial positions | Percent</li>
			    </a>
			    
			</ul>
		  </div>
            </div>
            
            <div id="collapeseSDG5-tg6" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 5.6: Ensure universal access to sexual and reproductive health and reproductive rights
                        as agreed in accordance with the Programme of Action of the International Conference on
                        Population and Development and the Beijing Platform for Action and the outcome  documents
                        of their review conferences.
                        </h1>
		  <div>
                        
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
		  </div>
            </div>
	    
	    <div id="collapeseSDG5-tg7" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 5.a: Undertake reforms to give women equal rights to 
				economic resources, as well as access to ownership and 
				control over land and other forms of property, financial 
				services, inheritance and natural resources, in accordance 
				with national laws.
                        </h1>
		  <div>
                        
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
		    
		  </div>
	    </div>
           
            
            <div id="collapeseSDG5-tg8" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 5.b: Enhance the use of enabling technology, in particular information and
                        communications technology, to promote the empowerment of women.
                        </h1>
		  <div>
                        
                        <ul>
			    <a href="/playground/genequality_indi13">
			      <li>Proportion of individuals who own a mobile telephone | Percent</li>
			    </a>
			</ul>
		    
		  </div>
	    </div>
	    
	    <div id="collapeseSDG5-tg9" className="collapseCont">
		<h1><span className="arrow-r"></span>
			Target 5.c: Adopt and strengthen sound policies and enforceable 
				legislation for the promotion of gender equality and the 
				empowerment of all women and girls at all levels.
                        </h1>
		  <div>
                        
                        <ul>
			    <a href="/playground/genequality_indi14">
			      <li>Proportion of countries with systems to track and 
                                 make public allocations for gender equality and women�s 
		                 empowerment| Percent</li>
			    </a>
			</ul>
		    
		  </div>
	    </div>
           
           
       </div>
      
    </div>
  </div>
  </div>
  
	   
           
           <div className="modal fade refine" id="SDG6mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" id="">SDG 6:Clean Water and Sanitation</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         
	    <div id="collapeseSDG6-tg1" className="collapseCont">
		 <h1><span className="arrow-r"></span>
                              Target 6.1: By 2030, achieve universal and equitable access to safe and affordable drinking water for all.
                         </h1>
		<div>
		  			 
			<ul>
			     <a href="/playground/sanitation_indi1">
			      <li> Proportion of population using safely managed drinking water services | Percent</li>
			    </a>
			</ul>
	        </div>
            </div>
            
	    <div id="collapeseSDG6-tg2" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 6.2: By 2030, achieve access to adequate and equitable sanitation and hygiene
                        for all and end open defecation, paying special attention to the needs of women and girls
                        and those in vulnerable situations.
                         </h1>
		<div>
                        
                        <ul>
			    <a href="/playground/sanitation_indi2">
			       <li>Proportion of population using (a) safely managed 
		                 sanitation services and (b) a hand-washing facility with 
		                 soap and water | Percent</li>
			    </a>
			</ul>
	         </div>
            </div>
	    
	    <div id="collapeseSDG6-tg3" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 6.3:By 2030, improve water quality by reducing pollution, 
				eliminating dumping and minimizing release of hazardous 
				chemicals and materials, halving the proportion of untreated 
				wastewater and substantially increasing recycling and safe 
				reuse globally.
                         </h1>
		<div>
                        
                        <ul>
			    <a href="/playground/sanitation_indi3">
			      <li>Proportion of wastewater safely </li>
			    </a>
			    <a href="/playground/sanitation_indi4">
			       <li>  Proportion of bodies of water with good ambient 
		               water quality| Percentt</li> 
			    </a>
			</ul>
	         </div>
            </div>
	    
            
	    <div id="collapeseSDG6-tg4" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 6.4: By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable
                        withdrawals and supply of freshwater to address water scarcity and substantially reduce the Number of people
                        suffering from water scarcity.
                         </h1>
		<div>
                        
                        <ul>
			   <a href="/playground/sanitation_indi5">
			       <li>Change in water-use efficiency over time</li>
			    </a>
			    <a href="/playground/sanitation_indi6">
			      <li>Level of water stress: freshwater withdrawal as a proportion of
			         available freshwater resources | Percentt</li>
			    </a> 
			</ul>
	         </div>
            </div>
            
	    <div id="collapeseSDG6-tg5" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 6.5: By 2030, implement integrated water resources management at all levels,
                        including through transboundary cooperation as appropriate.
                        </h1>
		<div>
                        
                        <ul>
			    <a href="/playground/sanitation_indi7">
			      <li>Degree of integrated water resources management implementation (0�100)</li>
			    </a>
			    <a href="/playground/sanitation_indi8">
			       <li>Proportion of transboundary basin area with an operational arrangement
			          for water cooperation | Percent</li>
			    </a>
                          
			</ul>
	       </div>
            </div>
	    
	    <div id="collapeseSDG6-tg6" className="collapseCont">
		 <h1><span className="arrow-r"></span>        
			Target 6.6: By 2020, protect and restore water-related ecosystems, 
			including mountains, forests, wetlands, rivers, aquifers and 
			lakes.
                        </h1>
		<div>
			 
			<ul>
			    <a href="/playground/sanitation_indi9">
			       <li>Change in the extent of water-related ecosystems over time</li> 
			    </a>
			</ul>
	        </div>
            </div>
	    
                    
            <div id="collapeseSDG6-tg7" className="collapseCont">
		 <h1><span className="arrow-r"></span>        
			Target 6.a By 2030, expand international cooperation and capacity-building support to developing countries
                        in water- and sanitation-related activities and programmes, including water harvesting, desalination, 
                        water efficiency, wastewater treatment, recycling and reuse technologies.
                        </h1>
		<div>
			 
			<ul>
			    <a href="/playground/sanitation_indi10">
			       <li> Amount of water- and sanitation-related official development assistance
			       that is part of a government-coordinated spending plan</li>
			    </a>
			</ul>
	        </div>
            </div>
            
            <div id="collapeseSDG6-tg8" className="collapseCont">
		 <h1><span className="arrow-r"></span> 
			Target 6.b: Support and strengthen the participation of local communities in improving water and sanitation management.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/sanitation_indi11">
			      <li> Proportion of local administrative units with established and operational policies and
			      procedures for participation of local communities in water and sanitation management  | Percent</li>
			    </a>
			</ul>
		  
		</div>
	    </div>
           
           
        </div>
     
    </div>
  </div>
  </div>
  
	   
           <div className="modal fade refine" id="SDG7mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" id="sdg7">SDG 7:Renewable Energy</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         
	    <div id="collapeseSDG7-tg1" className="collapseCont">
		 <h1><span className="arrow-r"></span>
                              Target 7.1: By 2030, ensure universal access to affordable, reliable and modern energy services.
                         </h1>
		<div>
		  			 
			<ul>
			    <a href="/playground/energy_indi1">
			      <li> Proportion of population with access to electricity</li>
			    </a>
			    <a href="/playground/energy_indi2">
			     <li> Proportion of population with primary reliance
			         on clean fuels and technology</li>
			    </a>
			</ul>
	        </div>
            </div>
            
	    <div id="collapeseSDG7-tg2" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 7.2: By 2030, increase substantially the share of renewable energy in the global energy mix.
                         </h1>
		<div>
                        
                        <ul>
			    <a href="/playground/energy_indi3">
			      <li>Renewable energy share in the total final energy consumption | Percent</li>
			    </a>
                            
			</ul>
	         </div>
            </div>
            
	    <div id="collapeseSDG7-tg3" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 7.3: By 2030, double the global rate of improvement in energy efficiency.
                         </h1>
		<div>
                        
                        <ul>
			    <a href="/playground/energy_indi4">
			      <li>Energy intensity measured in terms of primary energy and GDP | Percentt</li>
			    </a> 
			</ul>
	         </div>
            </div>
            
            <div id="collapeseSDG7-tg4" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 7.a: By 2030, enhance international cooperation to facilitate 
                                access to clean energy research and technology, including 
                                renewable energy, energy efficiency and advanced and 
                                cleaner fossil-fuel technology, and promote investment in 
                                energy infrastructure and clean energy technology.
                         </h1>
		<div>
                        
                        <ul>
			    <a href="/playground/energy_indi5">
			       <li>International financial flows to developing 
                                    countries in support of clean energy research and 
                                    development and renewable energy production, including 
                                    in hybrid systems | Percentt</li>
			    </a> 
			</ul>
	         </div>
            </div>
            
            <div id="collapeseSDG7-tg5" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 7.b: By 2030, expand infrastructure and upgrade technology for supplying modern and sustainable
                        energy services for all in developing countries, in particular least developed countries, small island
                        developing States and landlocked developing countries, in accordance with their respective
                        programmes of support.
                         </h1>
		<div>
                        
                        <ul>
			    <a href="/playground/energy_indi6">
			      <li>Investments in energy efficiency as a proportion of GDP and the amount of foreign
                            direct investment in financial transfer for infrastructure and technology to
                            sustainable development services| Percentt</li> 
			    </a> 
			</ul>
	         </div>
            </div>
	             
                               
           
        </div>
     
    </div>
  </div>
  </div>
  
	   
           
           <div className="modal fade refine" id="SDG8mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" id="">SDG 8:Good Jobs and Economic Growth</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         
	    
                   
	                
	    <div id="collapeseSDG8-tg1" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 8.1: Sustain per capita economic growth in accordance with national circumstances and,
                        in particular, at least 7 per cent gross domestic product growth per annum in the least developed countries.
                        </h1>
		<div>
                        <ul>
			   <a href="/playground/employment_indi1">
			       <li>Annual growth rate of real GDP per capita | Percent</li>
			    </a>
			</ul>
	        </div>
            </div>
            
	    <div id="collapeseSDG8-tg2" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 8.2: Achieve higher levels of economic productivity through diversification, technological
                        upgrading and innovation, including through a focus on high-value added and labour-intensive sectors.
                        </h1>
		<div>
                        
                        <ul>
			    
			    <a href="/playground/employment_indi2">
			      <li>Annual growth rate of real GDP per employed person | Percent</li> 
			    </a>
			</ul>
	        </div>
            </div>
            
	    <div id="collapeseSDG8-tg3" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 8.3: Promote development-oriented policies that support productive activities, decent job creation,
                        entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and
                        medium-sized enterprises, including through access to financial services.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/employment_indi3">
			       <li>Proportion of informal employment in
			       non-agriculture employment, by sex| Percent</li>
			    </a>
			</ul>
		</div>
            </div>
            
            <div id="collapeseSDG8-tg4" className="collapseCont">
		 <h1><span className="arrow-r"></span>        
			Target 8.4: Improve progressively, through 2030, global resource efficiency in consumption and production and
                        endeavour to decouple economic growth from environmental degradation, in accordance with the 10-Year Framework 
                        of Programmes on Sustainable Consumption and Production, with developed countries taking the lead.
                        </h1>
		<div>
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
	        </div>
            </div>
            
	    <div id="collapeseSDG8-tg5" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 8.5: By 2030, achieve full and productive employment and decent work for all women and men,
                        including for young people and persons with disabilities, and equal pay for work of equal value.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/employment_indi6">
			      <li>Average hourly earnings of female and male employees, by occupation, age and
			         persons with disabilities | Local currency</li>
			    </a>
			    <a href="/playground/employment_indi7">
			       <li>Unemployment rate, by sex, age and persons with disabilities | Local currency</li>
			    </a>
                           
			</ul>
		  </div>
            </div>
            
            <div id="collapeseSDG8-tg6" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 8.6: By 2020, substantially reduce the proportion of youth not in employment, education or training.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/employment_indi8">
			       <li>Proportion of youth (aged 15�24 years) not in education, employment or training | Percent</li>
			    </a>
			</ul>
	        </div>
            </div>
            
            <div id="collapeseSDG8-tg7" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 8.7: Take immediate and effective measures to eradicate forced labour, end modern slavery
                        and human trafficking and secure the prohibition and elimination of the worst forms of child labour,
                        including recruitment and use of child soldiers, and by 2025 end child labour in all its forms
			</h1>
		<div> 
			<ul>
			    <a href="/playground/employment_indi9">
			      <li>Proportion and number of children aged 5�17 years
			        engaged in child labour, by sex and age| Percent</li>
			    </a>
			</ul>
	        </div>
            </div>
            
            <div id="collapeseSDG8-tg8" className="collapseCont">
		 <h1><span className="arrow-r"></span>
                        Target 8.8: Protect labour rights and promote safe and secure working environments for all workers,
                        including migrant workers, in particular women migrants, and those in precarious employment.
         		</h1>
		<div>  
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
	        </div>
            </div>
	    
	    <div id="collapeseSDG8-tg9" className="collapseCont">
		 <h1><span className="arrow-r"></span>
                        Target 8.9: By 2030, devise and implement policies to promote 
				sustainable tourism that creates jobs and promotes local 
				culture and products.
         		</h1>
		<div>  
			<ul>
			    <a href="/playground/employment_indi12">
			       <li> Tourism direct GDP as a proportion of total GDP and in growth rate</li>
			    </a>
			    <a href="/playground/employment_indi13">
			       <li>Proportion of jobs in sustainable tourism
			       industries out of total tourism jobs | Percent</li>
			    </a>
			</ul>
	        </div>
            </div>
	    
	    <div id="collapeseSDG8-tg10" className="collapseCont">
		 <h1><span className="arrow-r"></span>
                        
			Target 8.10: Strengthen the capacity of domestic financial institutions
                        to encourage and expand access to banking, insurance and financial services for all.
                        </h1>
		<div>
			 
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
	        </div>
            </div>
	    
            
             <div id="collapeseSDG8-tg11" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 8.a: Increase Aid for Trade support for developing countries, in particular least developed
                        countries, including through the Enhanced Integrated Framework for Trade-related Technical Assistance
                        to Least Developed Countries.
                        </h1>
		<div>
			 
			<ul>
			    <a href="/playground/employment_indi16">
			    <li>Aid for Trade commitments and disbursements | Constant USD</li>
			    </a>
			</ul>
		    
		</div>
	    </div>
	    
	    <div id="collapeseSDG8-tg12" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 8.b: By 2020, develop and operationalize a global strategy for youth
			employment and implement the Global Jobs Pact of the International Labour Organization.
                        </h1>
		<div>
			 
			<ul>
			    <a href="/playground/employment_indi17">
			      <li>Existence of a developed and operationalized national
			    strategy for youth employment, as a distinct strategy or as
			    part of a national employment strategy</li>
			    </a>
			</ul>
		    
		</div>
	    </div>
           
           
           </div>
      
    </div>
  </div>
  </div>
	   
           
           <div className="modal fade refine" id="SDG9mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" id="">SDG 9:Industry, Innovation and Infrastructure</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         
	                          
	    <div id="collapeseSDG9-tg1" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 9.1: Develop quality, reliable, sustainable and resilient infrastructure, including
                        regional and transborder infrastructure, to support economic development and human well-being,
                        with a focus on affordable and equitable access for all.
                        </h1>
		<div>
			 
			<ul>
			    <a href="/playground/industry_indi1">
			      <li> Proportion of the rural population who live within 2 km of an all-season road| Percent</li>
			    </a>
			    <a href="/playground/industry_indi2">
			      <li>Passenger and freight volumes, by mode of transport | Number</li>
			    </a>
                           
			</ul>
	        </div>
            </div>
            
	    <div id="collapeseSDG9-tg2" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 9.2: Promote inclusive and sustainable industrialization and, by 2030, significantly raise
                        industry�s share of employment and gross domestic product, in line with national circumstances, and
                        double its share in least developed countries.
                        </h1>
		<div>
                        
                        <a href="/playground/industry_indi3">
			      <li>Manufacturing value addedas a proportion of GDP and per capita | Constant USD</li>
			    </a>
			    <a href="/playground/industry_indi4">
			      <li>Manufacturing employment as a proportion of total employment | Percent</li>
			    </a>
	        </div>
            </div>
            
	     <div id="collapeseSDG9-tg3" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 9.3: Increase the access of small-scale industrial and other 
			enterprises, in particular in developing countries, to financial 
			services, including affordable credit, and their integration 
			into value chains and markets.
                        </h1>
		<div>
                        
                        <ul>
			    <a href="/playground/industry_indi5">
			      <li> Proportion of small-scale industries in total industry value added | Percent</li>
			    </a>
			    <a href="/playground/industry_indi6">
			      <li>Proportion of small-scale industries with a loan or line of credit | Percent</li>
			    </a>
			</ul>
	        </div>
            </div>
	    
	    
	    <div id="collapeseSDG9-tg4" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 9.4: By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with
                        increased resource-use efficiency and greater adoption of clean and environmentally sound technologies
                        and industrial processes, with all countries taking action in accordance with their respective capabilities.
                        </h1>
		<div>
                        <ul>
			    
			    <a href="/playground/industry_indi7">
			      <li>Emissions of carbon dioxide per unit value added </li>
			    </a>
                            
			</ul>
	        </div>
            </div>
            
	    <div id="collapeseSDG9-tg5" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 9.5: Enhance scientific research, upgrade the technological capabilities of industrial
                        sectors in all countries, in particular developing countries, including, by 2030, encouraging
                        innovation and substantially increasing the Number of research and development workers per 1 million
                        people and public and private research and development spending.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/industry_indi8">
			       <li>Research and development (R&D) expenditure as a proportion of GDP | Percent</li>
			    </a>
			    <a href="/playground/industry_indi9">
			      <li>Researchers (in full-time equivalent) per million inhabitants | Per million population</li>
			    </a>
			</ul>
	        </div>
            </div>
            
            <div id="collapeseSDG9-tg6" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 9.a: Facilitate sustainable and resilient infrastructure development in developing countries
                        through enhanced financial, technological and technical support to African countries, least developed
                        countries, landlocked developing countries and small island developing States.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/industry_indi10">
			       <li>Total official international support (official development assistance
				plus other official flows) to infrastructure</li>
			    </a>
			</ul>
	        </div>
            </div>
            
            <div id="collapeseSDG9-tg7" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 9.b: Support domestic technology development, research and innovation in developing countries,
                        including by ensuring a conducive policy environment for, inter alia, industrial diversification and
                        value addition to commodities.
			</h1>
		<div>  
			<ul>
			    <a href="/playground/industry_indi11">
			      <li>Proportion of medium and high-tech industry value added in total value added | Percent</li>
			    </a>
			</ul>
	        </div>
            </div>
            
            <div id="collapeseSDG9-tg8" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 9.c: Significantly increase access to information and communications technology and strive
                        to provide universal and affordable access to the Internet in least developed countries by 2020.
			</h1>
		<div>   
			<ul>
			    <a href="/playground/industry_indi12">
			      <li>Proportion of population covered by a
			       mobile network, by technology | Percent</li>
			    </a>
			</ul>
		   
		</div>
	    </div>
           
           
           </div>
      
    </div>
  </div>
  </div>
	   
           
           <div className="modal fade refine" id="SDG10mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" id="">SDG 10:Reduced Inequalities</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         
	                          
	    <div id="collapeseSDG10-tg1" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 10.1: By 2030, progressively achieve and sustain income growth of the bottom 
                        40 per cent of the population at a rate higher than the national average.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/inequalities_indi1">
			      <li>Growth rates of household expenditure or income per capita among the bottom 40 per cent
                                      of the total population | Percent</li>
			    </a>
                             
			</ul>
	        </div>
            </div>
	    
	   	    
	    <div id="collapeseSDG10-tg2" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 10.2: By 2030, empower and promote the social, economic and political inclusion
			of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/inequalities_indi2">
			      <li> Proportion of people living below 50 per cent of median income, by sex,
			      age and persons with disabilities| Percent</li>
			    </a>
                             
			</ul>
	        </div>
            </div>
	    
	    <div id="collapeseSDG10-tg3" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 10.3: Ensure equal opportunity and reduce inequalities of outcome, including by eliminating
			discriminatory laws,policies and practices and promoting appropriate legislation, policies
			and action in this regard.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/inequalities_indi3">
			      <li>Proportion of population reporting having personally felt 
				discriminated against or harassed in the previous 12 months on the basis 
				of a ground of discrimination prohibited under international human 
				rights law | Percent</li>
			    </a>
                             
			</ul>
	        </div>
            </div>
	    
            
	    <div id="collapeseSDG10-tg4" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 10.4: Adopt policies, especially fiscal, wage and social protection policies, and progressively
                        achieve greater equality.
                        </h1>
		<div> 
                        <ul>
			    <a href="/playground/inequalities_indi4">
			      <li>Labour share of GDP, comprising wages and social protection transfers | Percent</li>
			    </a>
			</ul>
	        </div>
            </div>
	    
	    <div id="collapeseSDG10-tg5" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 10.5: Improve the regulation and monitoring of global financial markets and
			 institutions and strengthen the implementation of such regulations
.
                        </h1>
		<div> 
                        <ul>
			    <a href="/playground/inequalities_indi5">
			      <li>Financial Soundness Indicators | Percent</li>
			    </a>
			</ul>
	        </div>
            </div>
            
	    <div id="collapeseSDG10-tg6" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 10.6: Ensure enhanced representation and voice for developing countries in decision-making
                        in global international economic and financial institutions in order to deliver more effective, credible,
                        accountable and legitimate institutions.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/inequalities_indi6">
			      <li> Proportion of members and voting rights of developing countries in
			         international organizations | Percent</li>
			    </a>
			</ul>
		   </div>
            </div>
	    
	     <div id="collapeseSDG10-tg7" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 10.7:  Facilitate orderly, safe, regular and responsible migration and mobility of people,
			including through the implementation of planned and well-managed migration policies.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/inequalities_indi7">
			      <li> Recruitment cost borne by employee as a proportion of monthly income earned
			       in country of destination | Number</li>
			    </a>
			    <a href="/playground/inequalities_indi8">
			      <li> Number of countries with migration policies that facilitate orderly, safe,
			       regular and responsible migration and mobility of people | Number</li> 
			    </a>>   
			</ul>
		   </div>
            </div>
	    
            
	    <div id="collapeseSDG10-tg8" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 10.a: Implement the principle of special and differential treatment for developing countries,
                        in particular least developed countries, in accordance with World Trade Organization agreements.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/inequalities_indi9">
			      <li>Proportion of tariff lines applied to imports from least developed countries and developing
                                   countries with zero-tariff | Constant USD</li>
			    </a>
			</ul>
	        </div>
            </div>
            
            <div id="collapeseSDG10-tg9" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 10.b: Encourage official development assistance and financial flows, including foreign direct investment,
                        to States where the need is greatest, in particular least developed countries, African countries, small island
                        developing States and landlocked developing countries, in accordance with their national plans and programmes.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/inequalities_indi10">
			      <li>Total resource flows for development, by recipient and donor countries and type of flow
			       (e.g. official development assistance, foreign direct investment and other flows)</li>
			    </a>
			</ul>
	        </div>
            </div>
            
            <div id="collapeseSDG10-tg10" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 10.c: By 2030, reduce to less than 3 per cent the transaction costs of migrant remittances and
                        eliminate remittance corridors with costs higher than 5 per cent.
			</h1>
		<div>  
			<ul>
			    <a href="/playground/inequalities_indi11">
			      <li>Remittance costs as a proportion of the amount remitted | Percent</li>
			    </a>
			</ul>
		    
		</div>
	    </div>
  
  
  </div>
      
    </div>
  </div>
  </div>
  
	   
           
           <div className="modal fade refine" id="SDG11mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" id="">SDG 11:Sustainable Cities and Communities</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         
	                          
	    <div id="collapeseSDG11-tg1" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 11.1: By 2030, ensure access for all to adequate, safe and affordable housing and basic services and upgrade slums.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/settlements_indi1">
			      <li>Proportion of urban population living in slums, informal
			      settlements or inadequate housing | Percent</li>
			    </a>
			</ul>
	        </div>
            </div>
	    
	    <div id="collapeseSDG11-tg2" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 11.2: By 2030, provide access to safe, affordable, accessible and sustainable transport systems
			for all, improving road safety, notably by expanding public transport, with special attention to the 
			needs of those in vulnerable situations, women, children, persons with disabilities and older persons.
			</h1>
		<div> 
			<ul>
			    
                             <a href="/playground/settlements_indi2">
			      <li>Proportion of population that has convenient access to public transport, by sex,
			         age and persons with disabilities | Percent</li>
			    </a>
			   
			</ul>
	        </div>
            </div>
	    
	    <div id="collapeseSDG11-tg3" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 11.3: By 2030, enhance inclusive and sustainable urbanization and capacity for participatory,
			integrated and sustainable human settlement planning and management in all countries.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/settlements_indi3">
			      <li> Ratio of land consumption rate to population growth rate | Ratio </li> 
			    </a>
			    <a href="/playground/settlements_indi4">
				<li>Proportion of cities with a direct participation structure of civil society
				 in urban planning and management that operate regularly and democratically | Percent</li>
			    </a>
			</ul>
	        </div>
            </div>
	    
	    <div id="collapeseSDG11-tg4" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 11.4:  Strengthen efforts to protect and safeguard the world�s cultural and natural heritage.
			</h1>
		<div> 
			<ul>
                          <a href="/playground/settlements_indi5">
			      <li>Total expenditure (public and private) per capita spent on the preservation, protection and
			     conservation of all cultural and natural heritage, by type of heritage (cultural, natural, mixed
			     and World Heritage Centre designation), level of government (national, regional and local/municipal),
			     type of expenditure (operating expenditure/investment) and type of private funding (donations in kind,
			     private non-profit sector and sponsorship) | Percent</li>
			  </a>
			</ul>
	        </div>
            </div>
	    
            
	    <div id="collapeseSDG11-tg5" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 11.5: By 2030, significantly reduce the Number of deaths and the Number of people affected and 
                        substantially decrease the direct economic losses relative to global gross domestic product by disasters,
                        including water-related disasters, with a focus on protecting the poor and people in vulnerable situations.
                        </h1>
		<div>                         
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
	        </div>
            </div>
            
	    <div id="collapeseSDG11-tg6" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 11.6: By 2030, reduce the adverse per capita environmental impact of cities, including by
                        paying special attention to air quality and municipal and other waste management.
                         </h1>
		<div>      
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
	         </div>
            </div>
	    
	    <div id="collapeseSDG11-tg7" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 11.7: By 2030, provide universal access to safe, inclusive 
			and accessible, green and public spaces, in particular for 
			women and children, older persons and persons with 
			disabilities.
                         </h1>
		<div>      
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
	         </div>
            </div>
	    
	    <div id="collapeseSDG11-tg8" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 11.a: Support positive economic, social and environmental links between
			urban, peri-urban and rural areas by strengthening national and regional development planning.
                         </h1>
		<div>      
                        <ul>
			    <a href="/playground/settlements_indi12">
			      <li>Proportion of population living in cities that implement urban and regional
			    development plans integrating population projections and resource needs, by size of city</li>
			    </a> 
			</ul>
	         </div>
            </div>
            
	    <div id="collapeseSDG11-tg9" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 11.b: By 2020, substantially increase the Number of cities and human settlements adopting and 
                        implementing integrated policies and plans towards inclusion, resource efficiency, mitigation and
                        adaptation to climate change, resilience to disasters, and develop and implement, in line with the Sendai
                        Framework for Disaster Risk Reduction 2015-2030, holistic disaster risk management at all levels.
                        </h1>
		<div>      
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
		    
		</div>
	    </div>
	    
	    <div id="collapeseSDG11-tg10" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 11.c: Support least developed countries, including through financial and technical assistance,
			in building sustainable and resilient buildings utilizing local materials.
                        </h1>
		<div>      
                        <ul>
			    <a href="/playground/settlements_indi15">
			       <li>Proportion of financial support to the least developed countries that is allocated to the
			    construction and retrofitting of sustainable, resilient and resource-efficient buildings utilizing
			    local materials| Percent</li>
			    </a>
			</ul>
		    
		</div>
	    </div>
  
  
  </div>
      
    </div>
  </div>
  </div>
	   
           
           <div className="modal fade refine" id="SDG12mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" id=""> SDG 12:Responsible Consumption</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         
	    
	     <div id="collapeseSDG12-tg1" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 12.1: Implement the 10-Year Framework of Programmes on 
			Sustainable Consumption and Production Patterns, all 
			countries taking action, with developed countries taking the 
			lead, taking into account the development and capabilities of 
			developing countries.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/consumption_indi1">
			      <li>Number of countries with sustainable consumption 
				      and production (SCP) national action plans or SCP 
				      mainstreamed as a priority or a target into national policies
				      </li>
			    </a>
                           
			</ul>
	        </div>
	    </div>
	    
	    
	    <div id="collapeseSDG12-tg2" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 12.2: By 2030, achieve the sustainable management and efficient use of natural resources.
			</h1>
		<div> 
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
	        </div>
	    </div>
	    
	    <div id="collapeseSDG12-tg3" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 12.3: By 2030, halve per capita global food waste at the 
			retail and consumer levels and reduce food losses along 
			production and supply chains, including post-harvest losses.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/consumption_indi4">
			      <li>(a) Food loss index and (b) food waste index | Index</li>
			    </a>
                           
			</ul>
	        </div>
	    </div>
	    
            
	     <div id="collapeseSDG12-tg4" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 12.4: By 2020, achieve the environmentally sound management of chemicals and all wastes
                        throughout their life cycle, in accordance with agreed international frameworks, and significantly
                        reduce their release to air, water and soil in order to minimize their adverse impacts on human health
                        and the environment.
                        </h1>
		<div> 
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
		  
		</div>
	    </div>
	    
	    <div id="collapeseSDG12-tg5" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 12.5: By 2030, substantially reduce waste generation through 
                              prevention, reduction, recycling and reuse.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/consumption_indi7">
			      <li>National recycling rate, tons of material recycled</li>
			    </a>
                           
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG12-tg6" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 12.6: Encourage companies, especially large and 
			transnational companies, to adopt sustainable practices and 
			to integrate sustainability information into their reporting 
			cycle.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/consumption_indi8">
			      <li>Number of companies publishing sustainability reports</li>
			    </a>
                           
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG12-tg7" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 12.7: Promote public procurement practices that are sustainable, in accordance
			with national policies and priorities.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/consumption_indi9">
			      <li>Number of countries implementing sustainable public procurement policies and action plans</li>
			    </a>
                           
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG12-tg8" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 12.8: By 2030, ensure that people everywhere have the relevant information and awareness
			for sustainable development and lifestyles in harmony with nature.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/consumption_indi10">
			      <li>Extent to which (i) global citizenship education and (ii) education for sustainable development
			    (including climate change education) are mainstreamed in (a) national education policies;
			    (b) curricula; (c) teacher education; and (d) student assessment</li>
			    </a>
                           
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG12-tg9" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 12.a: Support developing countries to strengthen their scientific and technological
			capacity to move towards more sustainable patterns of consumption and production.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/consumption_indi11">
			       <li> Amount of support to developing countries on research and development for
			    sustainable consumption and production and environmentally sound technologies</li> 
			    </a>
                           
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG12-tg10" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 12.b: Develop and implement tools to monitor sustainable development
			impacts for sustainable tourism that creates jobs and promotes local culture and products.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/consumption_indi12">
			      <li>Number of sustainable tourism strategies or policies and implemented action plans with
			    agreed monitoring and evaluation tools</li>
			    </a>
                           
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG12-tg11" className="collapseCont">
		 <h1><span className="arrow-r"></span>
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
			</h1>
		<div> 
			<ul>
			    <a href="/playground/consumption_indi13">
			      <li>Amount of fossil-fuel subsidies per unit of GDP (production and consumption)
			    and as a proportion of total national expenditure on fossil fuels </li>
			    </a>
                           
			</ul>
	        </div>
	    </div>
  
  
  </div>
      
    </div>
  </div>
  </div>
	   
           
           <div className="modal fade refine" id="SDG13mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" id="">SDG 13:Climate Action</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         
	    
	    <div id="collapeseSDG13-tg1" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 13.1: Strengthen resilience and adaptive capacity to climate-related
			 hazards and natural disasters in all countries.
			</h1>
		<div>  
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
		  		    
		</div>
	    </div>
	    
	    <div id="collapeseSDG13-tg2" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 13.2: Integrate climate change measures into national policies, strategies and planning.
			</h1>
		<div>  
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
		  		    
		</div>
	    </div>
	    
	    <div id="collapeseSDG13-tg3" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 13.3: Improve education, awareness-raising and human and 
				institutional capacity on climate change mitigation, 
				adaptation, impact reduction and early warning.
			</h1>
		<div>  
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
		  		    
		</div>
	    </div>
	    
	    <div id="collapeseSDG13-tg4" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 13.a: Implement the commitment undertaken by developed-country parties 
				to the United Nations Framework 
				Convention on Climate Change to a goal of mobilizing 
				jointly $100 billion annually by 2020 from all sources to 
				address the needs of developing countries in the context of 
				meaningful mitigation actions and transparency on 
				implementation and fully operationalize the Green Climate 
				Fund through its capitalization as soon as possible.
			</h1>
		<div>  
			<ul>
			    <a href="/playground/climate_indi7">
			      <li>Mobilized amount of United States dollars per yearbetween 2020 and 2025 accountable
			    towards the $100 billion commitment</li>
			    </a>
			    
			</ul>
		  		    
		</div>
	    </div>
	    
	    <div id="collapeseSDG13-tg5" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 13.b: Promote mechanisms for raising capacity for effective 
				climate change-related planning and management in least 
				developed countries and small island developing States, 
				including focusing on women, youth and local and 
				marginalized communities.
			</h1>
		<div>  
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
  
  
  </div>
      
    </div>
  </div>
  </div>
           
	   
           
           <div className="modal fade refine" id="SDG14mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" id="">SDG 14:Life Below Water</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
            
	    <div id="collapeseSDG14-tg1" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 14.1: By 2025, prevent and significantly reduce marine 
				pollution of all kinds, in particular from land-based 
				activities, including marine debris and nutrient pollution.
                        </h1>
		<div> 
                        <ul>
			    <a href="/playground/water_indi1">
			      <li>Index of coastal eutrophication and floating plastic debris density | Index</li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG14-tg2" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 14.2: By 2020, sustainably manage and protect marine and 
				coastal ecosystems to avoid significant adverse impacts, 
				including by strengthening their resilience, and take action 
				for their restoration in order to achieve healthy and 
				productive oceans.
                        </h1>
		<div> 
                        <ul>
			    <a href="/playground/water_indi2">
			       <li>Proportion of national exclusive economic zones managed
			      using ecosystem-based approaches | Percent</li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG14-tg3" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 14.3: Minimize and address the impacts of ocean 
			acidification, including through enhanced scientific 
			cooperation at all levels.
                        </h1>
		<div> 
                        <ul>
			    <a href="/playground/water_indi3">
			      <li>Average marine acidity (pH) measured at agreed
			      suite of representative sampling stations</li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
	    
	    <div id="collapeseSDG14-tg4" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 14.4: By 2020, effectively regulate harvesting and end overfishing, illegal, unreported and
                        unregulated fishing and destructive fishing practices and implement science-based management plans,
                        in order to restore fish stocks in the shortest time feasible, at least to levels that can produce maximum
                        sustainable yield as determined by their biological characteristics.
			</h1>
		<div>  
			<ul>
			    
			    <a href="/playground/water_indi4">
			      <li>Proportion of fish stocks within biologically sustainable levels | Percent</li>
			    </a>
                            
			</ul>
	        </div>
	    </div>
            
	    
            
	    <div id="collapeseSDG14-tg5" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 14.5: By 2020, conserve at least 10 per cent of coastal and marine areas, consistent
                        with national and international law and based on the best available scientific information.
                         </h1>
		<div> 
                        <ul>
			    <a href="/playground/water_indi5">
			       <li>Coverage of protected areas in relation to marine areas | </li>
			    </a>
                            
			</ul>
		  
		</div>
	    </div>
	    
	    <div id="collapeseSDG14-tg6" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 14.6: By 2020, prohibit certain forms of fisheries subsidies 
			which contribute to overcapacity and overfishing, eliminate 
			subsidies that contribute to illegal, unreported and 
			unregulated fishing and refrain from introducing new such 
			subsidies, recognizing that appropriate and effective special 
			and differential treatment for developing and least developed 
			countries should be an integral part of the World Trade 
			Organization fisheries subsidies negotiation.
                        </h1>
		<div> 
                        <ul>
			    <a href="/playground/water_indi6">
			      <li>Degree of implementation of international instruments aiming to combat illegal,
			    unreported and unregulated fishing</li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG14-tg7" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 14.7:By 2030, increase the economic benefits to small island 
				developing States and least developed countries from the 
				sustainable use of marine resources, including through 
				sustainable management of fisheries, aquaculture and 
				tourism.
                        </h1>
		<div> 
                        <ul>
			    <a href="/playground/water_indi7">
			      <li>Sustainable fisheries as a proportion of GDP in small island developing States,
			    least developed countries and all countries</li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG14-tg8" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 14.a: Increase scientific knowledge, develop research 
			capacity and transfer marine technology, taking into account 
			the Intergovernmental Oceanographic Commission Criteria 
			and Guidelines on the Transfer of Marine Technology, in 
			order to improve ocean health and to enhance the 
			contribution of marine biodiversity to the development of 
			developing countries, in particular small island developing 
			States and least developed countries.
                        </h1>
		<div> 
                        <ul>
			    <a href="/playground/water_indi8">
			      <li>Proportion of total research budget allocated to research
			        in the field of marine technology | Percent</li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG14-tg9" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 14.b: Provide access for small-scale artisanal fishers to marine resources and markets.
                        </h1>
		<div> 
                        <ul>
			    <a href="/playground/water_indi9">
			      <li>Degree of application of a legal/regulatory/policy/institutional
			    framework which recognizes and protects access rights for small-scale fisheries</li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG14-tg10" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 14.c: Enhance the conservation and sustainable use of 
				oceans and their resources by implementing international 
				law as reflected in the United Nations Convention on the 
				Law of the Sea, which provides the legal framework for the 
				conservation and sustainable use of oceans and their 
				resources, as recalled in paragraph 158 of �The future we 
				want�.
                        </h1>
		<div> 
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
    
    
    </div>
     
    </div>
  </div>
  </div>
           
	   
           
           <div className="modal fade refine" id="SDG15mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" id="">SDG 15:Life on Land</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         
	    
	    <div id="collapeseSDG15-tg1" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 15.1: By 2020, ensure the conservation, restoration and sustainable use of terrestrial and
                        inland freshwater ecosystems and their services, in particular forests, wetlands, mountains and drylands,
                        in line with obligations under international agreements.
			</h1>
		<div>  
			<ul>
			    
                            <a href="/playground/land_indi1">
			       <li>Forest area as a proportion of total land area | Percent</li>
			    </a>
			    <a href="/playground/land_indi2">
			      <li>Proportion of important sites for terrestrial and freshwater biodiversity
			      that are covered by protected areas, by ecosystem type| Percent</li>
			    </a>
			</ul>
	        </div>
	    </div>
            
	    <div id="collapeseSDG15-tg2" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			 Target 15.2: By 2020, promote the implementation of sustainable management of all types of forests,
                         halt deforestation, restore degraded forests and substantially increase afforestation and reforestation globally.
                         </h1>
		<div>
                        
                        <ul>
			    <a href="/playground/land_indi3">
			      <li>Progress towards sustainable forest management| Percent</li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG15-tg3" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			 Target 15.3: By 2030, combat desertification, restore degraded 
			land and soil, including land affected by desertification, 
			drought and floods, and strive to achieve a land degradation-neutral world.
                         </h1>
		<div>
                        
                        <ul>
			    <a href="/playground/land_indi4">
			      <li>Proportion of land that is degraded over total land area</li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
            
	    <div id="collapeseSDG15-tg4" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 15.4: By 2030, ensure the conservation of mountain ecosystems, including their biodiversity, 
                        in order to enhance their capacity to provide benefits that are essential for sustainable development.
                        </h1>
		<div>
                        <ul>
			     <a href="/playground/land_indi5">
			      <li>Coverage by protected areas of important sites for mountain biodiversity | Percent</li>
			    </a>
			    <a href="/playground/land_indi6">
			      <li>Mountain Green Cover Index | Square kilometers</li> 
			    </a>
			</ul>
	        </div>
	    </div>
            
	    <div id="collapeseSDG15-tg5" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 15.5: Take urgent and significant action to reduce the degradation of natural habitats,
                        halt the loss of biodiversity and, by 2020, protect and prevent the extinction of threatened species.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/land_indi7">
			      <li>Red List Index | Index</li>
			    </a>
			</ul>
	        </div>
	    </div>
            
            <div id="collapeseSDG15-tg6" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 15.6: Promote fair and equitable sharing of the benefits arising from the utilization of genetic
                        resources and promote appropriate access to such resources, as internationally agreed.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/land_indi8">
			      <li>Number of countries that have adopted legislative, administrative and policy
			    frameworks to ensure fair and equitable sharing of benefits | Number</li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG15-tg7" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 15.7: Take urgent action to end poaching and trafficking of 
			protected species of flora and fauna and address both 
			demand and supply of illegal wildlife products.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/land_indi9">
			      <li>Proportion of traded wildlife that was poached or illicitly trafficked</li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG15-tg8" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 15.8: By 2020, introduce measures to prevent the 
			introduction and significantly reduce the impact of invasive 
			alien species on land and water ecosystems and control or 
			eradicate the priority species.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/land_indi10">
			      <li>Proportion of countries adopting relevant national
			    legislation and adequately resourcing the prevention or
			    control of invasive alien species </li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
            
            <div id="collapeseSDG15-tg9" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 15.9: By 2020, integrate ecosystem and biodiversity values into national
			and local planning, development processes, poverty reduction strategies and accounts.
			</h1>
		<div>  
			<ul>
			    <a href="/playground/land_indi11">
			       <li>Progress towards national targets established in accordance with 
                              Aichi Biodiversity Target of the Strategic Plan for (2011-2020) Biodiversity  </li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG15-tg10" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 15.a: Mobilize and significantly increase financial resources from all
                        sources to conserve and sustainably use biodiversity and ecosystems.
			</h1>
		<div>  
			<ul>
			    <a href="/playground/land_indi12">
			      <li>Official development assistance and public expenditure on 
                               conservation and sustainable use of biodiversity and ecosystems</li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
            
            <div id="collapeseSDG15-tg11" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 15.b: Mobilize significant resources from all sources and at all levels to finance sustainable
                        forest management and provide adequate incentives to developing countries to advance such management,
                        including for conservation and reforestation.
                        </h1>
		<div>
			 
			<ul>
			    <a href="/playground/land_indi13">
			      <li>Official development assistance and public expenditure on conservation and
			      sustainable use of biodiversity and ecosystems</li>
			    </a>
			</ul>
		   
		</div>
	    </div>
	    
	    <div id="collapeseSDG15-tg12" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 15.c: Enhance global support for efforts to combat poaching and trafficking of protected species,
			including by increasing the capacity of local communities to pursue sustainable livelihood opportunities.
			</h1>
		<div>  
			<ul>
			    <a href="/playground/land_indi14">
			      <li>Proportion of traded wildlife that was poached or illicitly trafficked</li>
			    </a>
			</ul>
	        </div>
	    </div>
    
    </div>
      
    </div>
  </div>
  </div>
  
	   
           
           <div className="modal fade refine" id="SDG16mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" id="">SDG 16:Peace and Justice</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         
	    
	   
            
	    <div id="collapeseSDG16-tg1" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 16.1: Significantly reduce all forms of violence and related death rates everywhere.
                        </h1>
		<div> 
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
	        </div>
	    </div>
            
	    <div id="collapeseSDG16-tg2" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 16.2: End abuse, exploitation, trafficking and all forms of violence against and torture of children.
                        </h1>
		<div> 
                        <ul>
			    <a href="/playground/peace_indi5">
			      <li>Proportion of children aged 1�17 who experienced any physical punishment
			      and/or psychological aggression by caregivers in the past month | Percent</li>      
			    </a>
			    
			    <a href="/playground/peace_indi6">
			      <li>Number of victims of human trafficking per 100,000 population | Number</li>
			    </a>
			    
			    <a href="/playground/peace_indi7">
			      <li>Proportion of young women and men aged 18-29 years who experienced
			       sexual violence by age 18 | Percent</li> 
			    </a>
			</ul>
	        </div>
	    </div>
            
	    <div id="collapeseSDG16-tg3" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 16.3: Promote the rule of law at the national and international levels and ensure equal access
                        to justice for all.
                        </h1>
		<div> 
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
	        </div>
	    </div>
	    
	     <div id="collapeseSDG16-tg4" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 16.4: By 2030, significantly reduce illicit financial and arms flows, strengthen
			the recovery and return of stolen assets and combat all forms of organized crime.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/peace_indi10">
			       <li>Total value of inward and outward illicit financial flows (in current United States dollars) </li>
			    </a>
			    <a href="/playground/peace_indi11">
			      <li>Proportion of seized, found or surrendered arms whose illicit origin or context has been
			    traced or established by a competent authority in line with international instruments</li>
			    </a>
			</ul>
	        </div>
	    </div>
            
            <div id="collapeseSDG16-tg5" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 16.5: Substantially reduce corruption and bribery in all their forms.
			</h1>
		<div>  
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
	        </div>
	    </div>
	    
	     <div id="collapeseSDG16-tg6" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 16.6: Develop effective, accountable and transparent institutions at all levels.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/peace_indi14">
			       <li>Primary government expenditures as a proportion of original approved budget,
			          by sector (or by budget codes or similar)</li>
			    </a>
			    <a href="/playground/peace_indi15">
			      <li>Proportion of population satisfied with their last experience of public services</li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
	     <div id="collapeseSDG16-tg7" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 16.7: Ensure responsive, inclusive, participatory and representative decision-making at all levels.
			</h1>
		<div> 
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
	        </div>
	    </div>
	    
            
            <div id="collapeseSDG16-tg8" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 16.8: Broaden and strengthen the participation of developing countries in the
                        institutions of global governance.
			</h1>
		<div>  
			<ul>
			    <a href="/playground/peace_indi18">
			       <li>Proportion of members and voting rights of developing
			          countries in international organizations</li>
			    </a>
                           
			</ul>
	        </div>
	    </div>
            
            <div id="collapeseSDG16-tg9" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 16.9: By 2030, provide legal identity for all, including birth registration.
			</h1>
		<div>   
			<ul>
			    <a href="/playground/peace_indi19">
			      <li>Proportion of children under 5 years of age whose births have been
			        registered with a civil authority, by age</li>
			    </a>
			</ul>
	        </div>
	    </div>
	    
	    
	     <div id="collapeseSDG16-tg10" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 16.10: Ensure public access to information and protect fundamental freedoms, in accordance
                        with national legislation and international agreements.
			</h1>
		<div> 
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
	        </div>
	    </div>
	    
            
            <div id="collapeseSDG16-tg11" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 16.a: Strengthen relevant national institutions, including through international cooperation,
                        for building capacity at all levels, in particular in developing countries, to prevent violence and combat
                        terrorism and crime.
			</h1>
		<div>   
			<ul>
			    <a href="/playground/peace_indi22">
			       <li> Existence of independent national human rights
			     institutions in compliance with the Paris Principles</li>
			    </a>
                            
			</ul>
		    
		</div>
	    </div>
	    
	     <div id="collapeseSDG16-tg12" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 16.b: Promote and enforce non-discriminatory laws and policies for sustainable development.
			</h1>
		<div> 
			<ul>
			    <a href="/playground/peace_indi23">
			       <li>Proportion of population reporting having personally felt discriminated against or harassed
			    in the previous 12 months on the basis of a ground of discrimination prohibited under
			    international human rights law</li>
			    </a>
			</ul>
	        </div>
	    </div>
      
      </div>
      
    </div>
  </div>
   </div>        
	   
           
           <div className="modal fade refine" id="SDG17mod" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title dissgTitle" id="">SDG 17:Partnerships for the Goals</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         
	    
	    <div id="collapeseSDG17-tg1" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.1: Strengthen domestic resource mobilization, including through 
			international support to developing countries, to improve domestic 
			capacity for tax and other revenue collection.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/partnership_indi1">
			    <li>Total government revenue as a proportion of GDP, by source</li>
			    </a>
			    <a href="/playground/partnership_indi2">
			    <li>Proportion of domestic budget funded by domestic taxes</li>
			    </a>
			</ul>
		   
		</div>
	    </div>
	    
	    
	    <div id="collapeseSDG17-tg2" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.2: Developed countries to implement fully their official development assistance commitments,
                        including the commitment by many developed countries to achieve the target of 0.7 per cent of gross
                        national income for official development assistance (ODA/GNI) to developing countries and 0.15 to 0.20
                        per cent of ODA/GNI to least developed countries; ODA providers are encouraged to consider setting a
                        target to provide at least 0.20 per cent of ODA/GNI to least developed countries.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/partnership_indi3">
			    <li>Net official development assistance, total and to least developed countries, as a
			    proportion of the Organization for Economic Cooperation and Development (OECD)
			    Development Assistance Committee donors� gross national income (GNI)</li>
			    </a>
			</ul>
		   
		</div>
	    </div>
               
            <div id="collapeseSDG17-tg3" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.3: Mobilize additional financial resources for developing countries from multiple sources.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/partnership_indi4">
			    <li>Foreign direct investment (FDI), official development assistance and South-South cooperation
			    as a proportion of total domestic budget</li>
			    </a>
			    <a href="/playground/partnership_indi5">
			    <li> Volume of remittances (in United States dollars) as a proportion of total GDP | Percent</li>
			    </a>
			</ul>
		   
		</div>
	    </div>
                
            <div id="collapeseSDG17-tg4" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.4: Assist developing countries in attaining long-term debt sustainability through
                        coordinated policies aimed at fostering debt financing, debt relief and debt restructuring, as
                        appropriate, and address the external debt of highly indebted poor countries to reduce debt distress.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/partnership_indi6">
			    <li>Debt service as a proportion of exports of goods and services | Percent</li>
			    </a>
			</ul>
		   
		</div>
	    </div>
	    
	    <div id="collapeseSDG17-tg5" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.5: Adopt and implement investment promotion regimes for least developed countries.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/partnership_indi7">
			    <li>Number of countries that adopt and implement investment 
                               promotion regimes for least developed countries Technology</li>
			    </a>
			</ul>
		   
		</div>
	    </div>
	    
                 
            <div id="collapeseSDG17-tg6" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.6: Enhance North-South, South-South and triangular regional and international cooperation
                        on and access to science, technology and innovation and enhance knowledge-sharing on mutually agreed
                        terms, including through improved coordination among existing mechanisms, in particular at the
                        United Nations level, and through a global technology facilitation mechanism.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/partnership_indi8">
			    <li>Number of science and/or technology cooperation agreements and programmes
			        between countries, by type of cooperation</li>
			    </a>
			    <a href="/playground/partnership_indi9">
			    <li>Fixed Internet broadband Subscriptions per 100 inhabitants, by speed</li>
			    </a>
			</ul>
		   
		</div>
	    </div>
	    
	    <div id="collapeseSDG17-tg7" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.7: Promote the development, transfer, dissemination and diffusion of environmentally sound
			technologies to developing countries on favourable terms, including on concessional and preferential
			terms, as mutually agreed.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/partnership_indi10">
			    <li>Total amount of approved funding for developing countries to promote the
			    development, transfer, dissemination and diffusion of environmentally sound technologies</li>
			    </a>
			</ul>
		   
		</div>
	    </div>
	    
                  
            <div id="collapeseSDG17-tg8" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.8: Fully operationalize the technology bank and science, technology and innovation
                        capacity-building mechanism for least developed countries by 2017 and enhance the use of enabling
                        technology, in particular information and communications technology.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/partnership_indi11">
			    <li>Proportion of individuals using the Internet Capacity-building</li>
			    </a>
			</ul>
		   
		</div>
	    </div>
             
             <div id="collapeseSDG17-tg9" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.9: Enhance international support for implementing effective and targeted
                        capacity-building in developing countries to support national plans to implement all
                        the Sustainable Development Goals, including through North-South, South-South and triangular cooperation.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/partnership_indi12">
			      <li>Dollar value of financial and technical assistance (including through North-South,
                                   South-South and triangular cooperation) committed to developing countries | Constant USD</li>
			    </a>
			</ul>
		   
		</div>
	    </div>
	    
	    
	    <div id="collapeseSDG17-tg10" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.10: Promote a universal, rules-based, open, non-discriminatory and equitable
                        multilateral trading system under the World Trade Organization, including through the conclusion
                        of negotiations under its Doha Development Agenda.
			</h1>
		<div>  
			<ul>
			    <a href="/playground/partnership_indi13">
			       <li>Worldwide weighted tariff-average </li>
			    </a>
			</ul>
	        </div>
	    </div>
            
	    <div id="collapeseSDG17-tg11" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.11: Significantly increase the exports of developing countries, in particular
                        with a view to doubling the least developed countries� share of global exports by 2020.
                        </h1>
		<div> 
                        <ul>
			    <a href="/playground/partnership_indi14">
			       <li>Developing countries� and least developed countries� share of global exports | Percent</li>
			    </a>
			</ul>
	        </div>
	    </div>
             
	    <div id="collapeseSDG17-tg12" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.12: Realize timely implementation of duty-free and quota-free market access on a
                        lasting basis for all least developed countries, consistent with World Trade Organization decisions,
                        including by ensuring that preferential rules of origin applicable to imports from least developed
                        countries are transparent and simple, and contribute to facilitating market access.
                        </h1>
		<div> 
                        <ul>
			    <a href="/playground/partnership_indi15">
			      <li>Average tariffs faced by developing countries, least developed countries and small island
                                 developing States Systemic issues Policy and institutional coherence | Percent</li>
			    </a> 
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG17-tg13" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.13: Enhance global macroeconomic stability, including through policy coordination and policy coherence.
			</h1>
		<div>  
			<ul>
			    <a href="/playground/partnership_indi16">
			       <li>Macroeconomic Dashboard</li>
			    </a>
                           
			</ul>
	        </div>
	    </div>
	    
	    <div id="collapeseSDG17-tg14" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.14: Enhance policy coherence for sustainable development.
			</h1>
		<div>  
			<ul>
			    <a href="/playground/partnership_indi17">
			      <li>Number of countries with mechanisms in place to enhance
			         policy coherence of sustainable development</li>
			    </a>
                           
			</ul>
	        </div>
	    </div>
	    
            
	    <div id="collapeseSDG17-tg15" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.15: Respect each country�s policy space and leadership to establish and 
                        implement policies for poverty eradication and sustainable development.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/partnership_indi18">
			      <li>Extent of use of country-owned results frameworks and
			    planning tools by providers of development cooperation Multi-stakeholder partnerships</li>
			    </a>
			    
			</ul>
		   
		</div>
	    </div>
	   
            <div id="collapeseSDG17-tg16" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.16: Enhance the Global Partnership for Sustainable Development, complemented by
                        multi-stakeholder partnerships that mobilize and share knowledge, expertise, technology and
                        financial resources, to support the achievement of the Sustainable Development Goals in all countries,
                        in particular developing countries.
                        </h1>
		<div>
                        <ul>
			    <a href="/playground/partnership_indi19">
			      <li> Number of countries reporting progress in multi-stakeholder development
			       effectiveness monitoring frameworks that support the achievement of
			      the Sustainable Development Goals</li>
			    </a>
			</ul>
		   
		</div>
	    </div>
	    
	    <div id="collapeseSDG17-tg17" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.17: Encourage and promote effective public, public-private and civil
			society partnerships, building on the experience and resourcing strategies of partnerships.
			</h1>
		<div>  
			<ul>
			    <a href="/playground/partnership_indi20">
			    <li>Amount of United States dollars committed to (a) public-private 
				partnerships and (b) civil society partnerships Data, monitoring and 
				accountability</li>
			    </a>
                           
			</ul>
	        </div>
	    </div>
	    
            
            <div id="collapeseSDG17-tg18" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.18: By 2020, enhance capacity-building support to developing countries, including for least
                        developed countries and small island developing States, to increase significantly the availability of
                        high-quality, timely and reliable data disaggregated by income, gender, age, race, ethnicity, migratory
                        status, disability, geographic location and other characteristics relevant in national contexts.
                        </h1>
		<div>
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
		   
		</div>
	    </div>
             
            <div id="collapeseSDG17-tg19" className="collapseCont">
		 <h1><span className="arrow-r"></span>
			Target 17.19: By 2030, build on existing initiatives to develop measurements of progress on
                        sustainable development that complement gross domestic product, and support statistical
                        capacity-building in developing countriest.
                        </h1>
		<div>
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
      
    </div>
  </div>
       
   </div>
   
   </div>
   

	     
        
    
    );
    }
}

   
module.exports = Visualize;