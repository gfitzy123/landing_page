import { Template } from 'meteor/templating';

Template.home.onRendered(function () {
  $('.timer3').countTo({
     from: 1,
     to: 1000,
     speed: 5000,
     refreshInterval: 50,
     onComplete: function(value) {
        //  console.debug(this);
     }
   });

   $('.timer2').countTo({
       from: 1,
       to: 32,
       speed: 5000,
       refreshInterval: 50,
       onComplete: function(value) {
          //  console.debug(this);
       }

   });
   $('.timer1').countTo({
       from: 1,
       to: 67,
       speed: 5000,
       refreshInterval: 50,
       onComplete: function(value) {
          //  console.debug(this);
       }

   });
});
