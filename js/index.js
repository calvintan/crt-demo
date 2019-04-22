var myFullpage = new fullpage('#fullpage', {
    autoScrolling: true,
    afterLoad: function(origin, destination, direction){
     // the below targets 2nd section
     if(destination.index == 1){
       document.querySelector('#section2 .content').classList.add('slideInLeft');
     }

     // the below targets 3rd section
     if(destination.index == 2){
       document.querySelector('#section3 .content').classList.add('slideInLeft');
     }
   }
});
