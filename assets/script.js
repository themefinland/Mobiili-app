$(document).ready(function(){

var angle = 0;
setInterval(function(){
      angle+=0.05;
     $("#tausta").rotate(angle);
},50);



});
