$(document).ready(function(){
//------------kääntymis funktio
var angle = 0;				
setInterval(function(){
      angle+=0.05;
     $("#tausta").rotate(angle);
},50);

//----------------käntymis funktio

//--------------- Sormen ja munan liikkumis funktiot
	function animatethis(targetElement, speed) {
    $(targetElement).animate({ marginLeft: "+=250px"},
    {
        duration: speed,
        complete: function ()
        {
            targetElement.animate({ marginLeft: "-=250px" },
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


animatethis($('#sormi'), 5000);	

animatethisUp($('#muna'), 1000);	


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
            document.getElementById("result").innerHTML = localStorage.clickcount + " kopautusta, kohta hajoo!.";
   		}else{
        	document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage... Witch is unbelieveble";
    	  }
		//tästä eteenpäin määritellään klikkirajoja, joiden jälkeen määriteltyjä asioita tapahtuu
		//Jos localstorageen kerääntynyt klikkimäärä on suurempi kuin 20
		if(localStorage.clickcount>20){
		      //muuta elementin, jonka id="tonni", scr - attribuutti halutuksi
			document.getElementById("tonni").setAttribute("src", "http://media.giphy.com/media/Zg7clvqHE3CdW/giphy.gif");
		}
		if(localStorage.clickcount>30){
				}
		if(localStorage.clickcount>50){
		 
		}
		if(localStorage.clickcount>60){

		}
}
//Seuraava funktio tyhjentää local storagen, eli "tapit", poistaa kaikki "palkinnot" eli kuvat ja
//vaihtaa "aloita uusi peli" tekstin.
//Seuraavan funktion sisään voi määritellä kaikki ne asiat, jotka haluaa tapahtuvan, kun peli aloitetaan alusta.
function clearLS(){
	 localStorage.clear();
	 document.getElementById("result").innerHTML = "Aloita peli n&aumlp&aumlytt&aumlm&aumlll&auml munaa!";	
	 
}



