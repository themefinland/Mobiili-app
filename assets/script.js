
$(document).ready(function(){

document.getElementById("winRar").style.display = "none";
document.getElementById("sormi").style.opacity = "0";
$("#closeLink, #resetLink").click( function () { popup('popUpDiv')});
$("#resetLink").click( function () { clearLS()});

//------------kääntymis funktio
/*var angle = 0;				
setInterval(function(){
      angle+=0.02;
     $("#pilvet1").rotate(angle);
},1000);

setInterval(function(){
      angle+=0.03;
     $("#pilvet2").rotate(angle);
},1000);
*/
//----------------käntymis funktio

//--------------- Sormen ja munan liikkumis funktiot
	function animatethis(targetElement, speed) {
    $(targetElement).animate({ left: "+=15%"},
    {
        duration: speed,
        complete: function ()
        {
            targetElement.animate({ left: "-=15%" },
            {
                duration: speed,
                complete: function ()
                {
						animatethis(targetElement, speed);
						}
            });
        }
    });
};


	function animatethisUp(targetElement, speed) {
    $(targetElement).animate({ bottom: "+=5%"},
    {
        duration: speed,
        complete: function ()
        {
            targetElement.animate({ bottom: "-=5%" },
            {
                duration: speed,
                complete: function ()
                {
                    animatethisUp(targetElement, speed);
                }
            });
        }
    });
};
//-- sormen ja munan liikkumis funktiot




					// kutsutään tämä funktio sivua ladatessa jotta munan status tarkastetaan kun käyttäjä tulee takaisin sivulle
					// nämä funktiot määräävät enimmäkseen mitä tapahtuu kun käyttäjä on klikannut tarpeeksi
													setInterval(function(){
													$('#stars').fadeIn(1000).delay(3000).fadeOut(3000);
													$('#stars2').fadeIn(6000).delay(0000).fadeOut(1000);

													}, 7000);
													animatethisUp($('#aurinko'), 3000);	
													animatethisUp($('#kuu'), 4000);	
													animatethisUp($('#pilvet1'), 1000);	
													animatethisUp($('#pilvet2'), 2000);
													animatethisUp($('#planet'), 5000);
													animatethis($('#sormi'), 1000);	
														setInterval(function () {
																	  if(localStorage.clickcount >=20 && localStorage.clickcount <= 40 ){
																		document.getElementById("muna").setAttribute("src", "assets/images/Muna2.png");
																				 document.getElementById("result").innerHTML = localStorage.clickcount + " Clicks, keep going!";
																			   localStorage.clickcount = Number(localStorage.clickcount)+1;
																			   document.getElementById("sormi").style.opacity = "1";
																			   document.getElementById("sormi").setAttribute("src", "assets/images/fingerOfDoom.png");
																				}
																				}, 2000);
														setInterval(function () {
																	  if(localStorage.clickcount >=40 && localStorage.clickcount <= 80  ){
																		document.getElementById("muna").setAttribute("src", "assets/images/Muna3.png");
																				 document.getElementById("result").innerHTML = localStorage.clickcount + " Clicks, keep going!";
																				 localStorage.clickcount = Number(localStorage.clickcount)+2;
																			   document.getElementById("sormi").setAttribute("src", "assets/images/fistOfDeath.png");
																				document.getElementById("sormi").style.opacity = "1";																			   
																				}
																				}, 2000);	

														setInterval(function () {
																				  	if(localStorage.clickcount >=80 && localStorage.clickcount <= 150  ){
																					 localStorage.clickcount = Number(localStorage.clickcount)+3;	
																					$('#laserBeam').fadeIn(3000).delay(20).fadeOut(480);
																				}
																				}, 4500);

														setInterval(function () {
																						if(localStorage.clickcount >=80 && localStorage.clickcount <= 150  ){
																							document.getElementById("muna").setAttribute("src", "assets/images/Muna4.png");
																							 document.getElementById("result").innerHTML = localStorage.clickcount + " Clicks, keep going!";
																							 localStorage.clickcount = Number(localStorage.clickcount)+2;
																							 document.getElementById("laser").style.display = "inline";
																							 document.getElementById("laserBeam").style.display = "inline";
																							  document.getElementById("sormi").setAttribute("src", "assets/images/fistOfDeath.png");
																							document.getElementById("sormi").style.opacity = "1";			
																							 }
																							}, 2000);
																							
														if( localStorage.clickcount >= 150  ){
																							document.getElementById("muna").setAttribute("src", "assets/images/Muna999.png");
																							 document.getElementById("result").innerHTML = localStorage.clickcount + " You are winrar!!";
																							 document.getElementById("laser").style.display = "inline";
																							 document.getElementById("laserBeam").style.display = "none";
																							document.getElementById("sormi").style.opacity = "0";
																							$('#winRar').fadeIn(3000);							
																							

																								
																							//katsotaan mitä käyttäjä saa
																				
																							 }
																				

});


//Clickien määrän laskeminen
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        //alussa lasketaan klikit ja talletetaan ne localstorageen
		if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
            document.getElementById("result").innerHTML = localStorage.clickcount + " Clicks, keep going!";
   		}else{
        	document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage... Witch is unbelieveble";
    	  }
		//tästä eteenpäin määritellään klikkirajoja, joiden jälkeen määriteltyjä asioita tapahtuu
		//Jos localstorageen kerääntynyt klikkimäärä on suurempi kuin 20
		
		
		if(localStorage.clickcount == 20){
		      //muuta elementin, jonka id="tonni", scr - attribuutti halutuksi
			document.getElementById("muna").setAttribute("src", "assets/images/Muna2.png");
			document.getElementById("sormi").setAttribute("src", "assets/images/fingerOfDoom.png");
			document.getElementById("sormi").style.opacity = "1";
		}
		if(localStorage.clickcount == 40){
		document.getElementById("muna").setAttribute("src", "assets/images/Muna3.png");
		document.getElementById("sormi").setAttribute("src", "assets/images/fistOfDeath.png");
		document.getElementById("sormi").style.opacity = "1";	
				}
		if(localStorage.clickcount == 80){
		 document.getElementById("sormi").style.opacity = "1";	
		 document.getElementById("muna").setAttribute("src", "assets/images/Muna4.png");
		}
		if(localStorage.clickcount > 150){
		
																							document.getElementById("muna").setAttribute("src", "assets/images/Muna999.png");
																							 document.getElementById("result").innerHTML = localStorage.clickcount + " You are winrar!!";
																							 document.getElementById("laser").style.display = "inline";
																							 document.getElementById("laserBeam").style.display = "none";
																							document.getElementById("sormi").style.opacity = "0";
																							$('#winRar').fadeIn(3000);
																							
																							
																								var  randomi = Math.floor ((Math.random() * 10) +1);
																									document.getElementById("prize").style.display = "inline";
																									$("#prize").animate({minHeight:"30%", minWidth:"30%",paddingBottom:"40%"});
																									if (randomi < 3){
																								   document.getElementById("prize").setAttribute("src", "assets/images/fingerOfDoom.png");
																								   
																								   }
																								  else if (randomi < 6 && randomi >= 3){
																								   document.getElementById("prize").setAttribute("src", "assets/images/fistOfDeath.png");
																								   }
																								   else{
																								   document.getElementById("prize").setAttribute("src", "assets/images/muna.png");
																								   }
																				   
																								console.log(randomi);
		}
}

//Seuraava funktio tyhjentää local storagen, eli "tapit", poistaa kaikki "palkinnot" eli kuvat ja
//vaihtaa "aloita uusi peli" tekstin.
//Seuraavan funktion sisään voi määritellä kaikki ne asiat, jotka haluaa tapahtuvan, kun peli aloitetaan alusta.
function clearLS(){
	 localStorage.clear();
	 document.getElementById("result").innerHTML = ("Aloita peli n&aumlp&aumlytt&aumlm&aumlll&auml munaa!");
	 document.getElementById("muna").setAttribute("src", "assets/images/muna.png");
	 document.getElementById("sormi").style.opacity = "0";
	 document.getElementById("laser").style.display = "none";
	 document.getElementById("laserBeam").style.display = "none";
	 document.getElementById("winRar").style.display = "none";
	 document.getElementById("prize").style.display = "none";
	 $("#prize").animate({minHeight:"1%", minWidth:"1%"});
	 
}

function toggle(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function popup(windowname) {
	toggle('blanket');
	toggle(windowname);
}
