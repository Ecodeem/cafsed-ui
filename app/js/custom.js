$(document).ready(function(){

      // This is to animate the hamburger button
      
      // hamburger button animination ends here
      

      // for the bootstrap tooltip.js
      $('[data-toggle="tooltip"]').tooltip();

       // *counter*
      // var counters = $(".countis");
      // var countersQuantity = counters.length;
      // var counter = [];

      // for (i = 0; i < countersQuantity; i++) {
      //   counter[i] = parseInt(counters[i].innerHTML);
      // }

      // var count = function(start, value, id) {
      //   var localStart = start;
      //   setInterval(function() {
      //     if (localStart < value) {
      //       localStart++;
      //       counters[id].innerHTML = localStart;
      //     }
      //   }, 1);
      // }

      // for (j = 0; j < countersQuantity; j++) {
      //   count(0, counter[j], j);
      // }
     // end of counter

      
        // end first slick


   

   

    

    // slick for our partners 
    


    

    // ==-this is for the navigation 

   


      // *counter*
      var counters = $(".countis");
      var countersQuantity = counters.length;
      var counter = [];

      for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
      }

      var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
          if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
          }
        }, 1);
      }

      for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
      }
     // end of counter




 });
// main ending
