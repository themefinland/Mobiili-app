
$(document).ready(function(){

if(localStorage.clickcount > 20   ){
  document.getElementById("sormi").setAttribute("style", "display:inline;");
}
$("#closeLink, #resetLink").click( function () { popup('popUpDiv')});
$("#resetLink").click( function () { clearLS()});

//------------kääntymis funktio
var angle = 0;				
setInterval(function(){
      angle+=0.2;
     $("#pilvet1").rotate(angle);
},50);

setInterval(function(){
      angle+=0.3;
     $("#pilvet2").rotate(angle);
},50);

//----------------käntymis funktio

//--------------- Sormen ja munan liikkumis funktiot
	function animatethis(targetElement, speed) {
    $(targetElement).animate({ marginLeft: "+=70%"},
    {
        duration: speed,
        complete: function ()
        {
            targetElement.animate({ marginLeft: "-=70%" },
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
    $(targetElement).animate({ marginBottom: "+=10px"},
    {
        duration: speed,
        complete: function ()
        {
            targetElement.animate({ marginBottom: "-=10px" },
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
													
													
													if (localStorage.clickcount >= 20){
														animatethis($('#sormi'), 1000);	
														setInterval(function () {
																	  if(localStorage.clickcount >=20 && localStorage.clickcount <= 40 ){
																		document.getElementById("muna").setAttribute("src", "assets/images/muna2.png");
																				 document.getElementById("result").innerHTML = localStorage.clickcount + " Clicks, keep going!";
																			   localStorage.clickcount = Number(localStorage.clickcount)+1;
																			   document.getElementById("sormi").setAttribute("src", "assets/images/fingerOfDoom.png");
																			   
																				}
																				}, 2000);
														setInterval(function () {
																	  if(localStorage.clickcount >=40 && localStorage.clickcount <= 80  ){
																		document.getElementById("muna").setAttribute("src", "assets/images/muna2.png");
																				 document.getElementById("result").innerHTML = localStorage.clickcount + " Clicks, keep going!";
																			   localStorage.clickcount = Number(localStorage.clickcount)+2;
																			   document.getElementById("sormi").setAttribute("src", "assets/images/fistOfDeath.png");
																				}
																				}, 2000);		

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
		
		
		if(localStorage.clickcount==20){
		      //muuta elementin, jonka id="tonni", scr - attribuutti halutuksi
			document.getElementById("muna").setAttribute("src", "assets/images/muna2.png");
			document.getElementById("sormi").setAttribute("src", "assets/images/fingerOfDeath.png");
			toggle('sormi');
		}
		if(localStorage.clickcount==40){
		document.getElementById("sormi").setAttribute("src", "assets/images/fistOfDeath.png");
				}
		if(localStorage.clickcount==80){
		 
		}
		if(localStorage.clickcount==120){

		}
}

//Seuraava funktio tyhjentää local storagen, eli "tapit", poistaa kaikki "palkinnot" eli kuvat ja
//vaihtaa "aloita uusi peli" tekstin.
//Seuraavan funktion sisään voi määritellä kaikki ne asiat, jotka haluaa tapahtuvan, kun peli aloitetaan alusta.
function clearLS(){
	 localStorage.clear();
	 document.getElementById("result").innerHTML = ("Aloita peli n&aumlp&aumlytt&aumlm&aumlll&auml munaa!");
	 document.getElementById("muna").setAttribute("src", "assets/images/muna.png");
	 document.getElementById("sormi").setAttribute("style", "display:none;");
	 
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
