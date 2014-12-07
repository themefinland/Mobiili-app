$(document).ready(function(){


$("#closeLink, #resetLink").click( function () { popup('popUpDiv')});
$("#resetLink").click( function () { clearLS()});

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


		if(localStorage.clickcount < 20 ){
		      //muuta elementin, jonka id="tonni", scr - attribuutti halutuksi
			document.getElementById("muna").setAttribute("src", "assets/images/muna.png");
		}

		if(localStorage.clickcount >=20 && localStorage.clickcount < 30 ){
		      //muuta elementin, jonka id="tonni", scr - attribuutti halutuksi
			document.getElementById("muna").setAttribute("src", "http://media.giphy.com/media/Zg7clvqHE3CdW/giphy.gif");
		}
		if(localStorage.clickcount >= 30 && localStorage.clickcount < 50 ){
				}
		if(localStorage.clickcount > 50 && localStorage.clickcount < 60 ){
		 
		}
		if(localStorage.clickcount==60){

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
            document.getElementById("result").innerHTML = localStorage.clickcount + " kopautusta, kohta hajoo!.";
   		}else{
        	document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage... Witch is unbelieveble";
    	  }
		//tästä eteenpäin määritellään klikkirajoja, joiden jälkeen määriteltyjä asioita tapahtuu
		//Jos localstorageen kerääntynyt klikkimäärä on suurempi kuin 20
		if(localStorage.clickcount==20){
		      //muuta elementin, jonka id="tonni", scr - attribuutti halutuksi
			document.getElementById("muna").setAttribute("src", "http://media.giphy.com/media/Zg7clvqHE3CdW/giphy.gif");
		}
		if(localStorage.clickcount==30){
				}
		if(localStorage.clickcount==50){
		 
		}
		if(localStorage.clickcount==60){

		}
}
//Seuraava funktio tyhjentää local storagen, eli "tapit", poistaa kaikki "palkinnot" eli kuvat ja
//vaihtaa "aloita uusi peli" tekstin.
//Seuraavan funktion sisään voi määritellä kaikki ne asiat, jotka haluaa tapahtuvan, kun peli aloitetaan alusta.
function clearLS(){
	 localStorage.clear();
	 document.getElementById("result").innerHTML = ("Aloita peli n&aumlp&aumlytt&aumlm&aumlll&auml munaa!");
	 document.getElementById("muna").setAttribute("src", "assets/images/muna.png");
	 
}

















//--------------- Pop-up funktio

function toggle(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanket_size(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var blanket = document.getElementById('blanket');
	blanket.style.height = blanket_height + 'px';
	var popUpDiv = document.getElementById(popUpDivVar);
	popUpDiv_height=blanket_height/2-200;//200 is half popup's height
	popUpDiv.style.top = popUpDiv_height + 'px';
}
function window_pos(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popUpDiv = document.getElementById(popUpDivVar);
	window_width=window_width/2-200;//200 is half popup's width
	popUpDiv.style.left = window_width + 'px';
}
function popup(windowname) {
	blanket_size(windowname);
	window_pos(windowname);
	toggle('blanket');
	toggle(windowname);		
}


//---------------Pop-up funktio päättyy















