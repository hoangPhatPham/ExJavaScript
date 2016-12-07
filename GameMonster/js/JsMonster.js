//create the canvas
var canvas = document.createElement("canvas");
var magic = canvas.getContext("2d");
canvas.width= 598;
canvas.height=550;
canvas.id="myCanvas";
document.getElementById("body_game").appendChild(canvas);

  // Display score and time 
  magic.fillStyle = "red";
  magic.font = "24px Helvetica";
  magic.textAlign = "left";
  magic.textBaseline = "top";



/* create monter 1 */
var monter1_ready=false;
var monter1_img = new Image();
monter1_img.id="monter1_id";
monter1_img.onload = function() {
	monter1_ready=true;
}
monter1_img.src="img/Monster.png";


/* create monter 2 */
var monter2_ready=false;
var monter2_img = new Image();
monter2_img.onload = function() {
	monter2_ready=true;
}
monter2_img.src="img/Monster.png";

/* create monter 3 */
var monter3_ready=false;
var monter3_img = new Image();
monter3_img.onload = function() {
	monter3_ready=true;
}
monter3_img.src="img/Monster.png";

/* create monter 4 */
var monter4_ready=false;
var monter4_img = new Image();
monter4_img.onload = function() {
	monter4_ready=true;
}
monter4_img.src="img/Monster.png";

/* create monter 5 */
var monter5_ready=false;
var monter5_img = new Image();
monter5_img.onload = function() {
	monter5_ready=true;
}
monter5_img.src="img/Monster.png";

/* create monter 6 */
var monter6_ready=false;
var monter6_img = new Image();
monter6_img.onload = function() {
	monter6_ready=true;
}
monter6_img.src="img/Monster.png";

/* create monter 7 */
var monter7_ready=false;
var monter7_img = new Image();
monter7_img.onload = function() {
	monter7_ready=true;
}
monter7_img.src="img/Monster.png";

/* create monter 8 */
var monter8_ready=false;
var monter8_img = new Image();
monter8_img.onload = function() {
	monter8_ready=true;
}
monter8_img.src="img/Monster.png";

/* create monter 9 */
var monter9_ready=false;
var monter9_img = new Image();
monter9_img.onload = function() {
	monter9_ready=true;
}
monter9_img.src="img/Monster.png";

/*Create monters object*/
var monter1 ={speed:256};
var monter2 ={speed:356};
var monter3 ={speed:456};
var monter4 ={speed:556};
var monter5 ={speed:256};
var monter6 ={speed:256};
var monter7 ={speed:256};
var monter8 ={speed:256};
var monter9 ={speed:256}; 

/* reset monters */
var hei = 500;
var wid =500;

/*set random x y for monter1*/
function monter1_random () {
	monter1.x=Math.floor(Math.random()*(wid));
	monter1.y=Math.floor(Math.random()*(hei));
}

/*set random x y for monter2*/
function monter2_random () {
	monter2.x=Math.floor(Math.random()*(wid));
	monter2.y=Math.floor(Math.random()*(hei));

}

/*set random x y for monter3*/
function monter3_random () {
	monter3.x=Math.floor(Math.random()*(wid));
	monter3.y=Math.floor(Math.random()*(hei));
}

/*set random x y for monter4*/
function monter4_random () {
	monter4.x=Math.floor(Math.random()*(wid));
	monter4.y=Math.floor(Math.random()*(hei));
}

var reset = function(index) {

	monter1_random();	
	monter2_random();	
	monter3_random ();
	monter4_random ();
}

/*check position monter*/
function check() {
	if(monter1.x>600 || monter1.y>550) {
		monter1_random();
	}
	if(monter2.x>600 || monter2.y>550) {
		monter2_random();
	}
	if(monter3.x>600 || monter3.y>550) {
		monter3_random();
	}
	if(monter4.x>600 || monter4.y>550) {
		monter4_random();
	}
} 

/*update index */
var boom=1;
function updateIndex() {

	document.getElementById("score_index").innerHTML=score;
	var sour="";
	for(i=0;i<heart;i++) {
		sour += "<img src='img/Heart.png' alt='heart' class='float'/>";
	}
	document.getElementById("heart_index").innerHTML=sour;
	document.getElementById("random_monter_index").innerHTML=index;
	document.getElementById("boom").innerHTML=boom;
	document.getElementById("stop").innerHTML=stop;
	document.getElementById("height_score").innerHTML=height_score;
}

/*Draw monters */
var render=function(index) {
	check();
	if(index==1) {
		if(monter1_ready) {
			magic.drawImage(monter1_img,monter1.x,monter1.y);
		}
		magic.fillText("Level 1", 10, 10)
	}
	if(index==2) {
		if(monter1_ready) {
			magic.drawImage(monter1_img,monter1.x,monter1.y);
		} 
		if(monter2_ready) {
			magic.drawImage(monter2_img,monter2.x,monter2.y);
		}		
		magic.fillText("Level 2", 10, 10);
	}
	if(index==3) {
		if(monter1_ready) {
			magic.drawImage(monter1_img,monter1.x,monter1.y);
		}
		if(monter2_ready) {
			magic.drawImage(monter2_img,monter2.x,monter2.y);
		}
		if(monter3_ready) {
			magic.drawImage(monter3_img,monter3.x,monter3.y);
		}		
		magic.fillText("Level 3", 10, 10);
	}
	if(index==4) {
		if(monter1_ready) {
			magic.drawImage(monter1_img,monter1.x,monter1.y);
		}
		if(monter2_ready) {
			magic.drawImage(monter2_img,monter2.x,monter2.y);
		}
		if(monter3_ready) {
			magic.drawImage(monter3_img,monter3.x,monter3.y);
		}
		if(monter4_ready) {
			magic.drawImage(monter4_img,monter4.x,monter4.y);
		}		
		magic.fillText("Level 4", 20, 20);
	}
}

/*reset image monter*/
function reset_image() {
	monter1_img.src="img/Monster.png";
	monter2_img.src="img/Monster.png";
	monter3_img.src="img/Monster.png";
	monter4_img.src="img/Monster.png";
}

/*reset status off monter*/
function reset_status_ima() {
	monter1_ready=true;
	monter2_ready=true;
	monter3_ready=true;
	monter4_ready=true;
}

/*status when start new level*/
function reset_level() {
	reset_image();
	reset(index);
	reset_status_ima();
	count=index;
}


/*Update game objects*/
var update = function(move,index) {

	monter1.x+=monter1.speed*move;
	monter1.y+=monter1.speed*move;
	monter2.x-=monter2.speed*move;
	monter2.y+=2;
	monter3.x+=3;
	monter3.y+=monter3.speed*move;
	monter4.x+=3;
	monter4.y-=monter4.speed*move;
}

 /*click out monter1*/
function monter1_clickout(mp) {	
	if((mp.x<monter1.x || mp.x>(monter1.x+100))&&(mp.y<monter1.y || mp.y>(monter1.y+100))) {
		return true;
	} 
	return false;
}

 /*click out monter2*/
function monter2_clickout(mp) {	
	if((mp.x<monter2.x || mp.x>(monter2.x+100))&&(mp.y<monter2.y || mp.y>(monter2.y+100))) {
		return true;
	} 
	return false;
}

 /*click out monter3*/
function monter3_clickout(mp) {	
	if((mp.x<monter3.x || mp.x>(monter3.x+100))&&(mp.y<monter3.y || mp.y>(monter3.y+100))) {
		return true;
	} 
	return false;
}

 /*click out monter4*/
function monter4_clickout(mp) {	
	if((mp.x<monter4.x || mp.x>(monter4.x+100))&&(mp.y<monter4.y || mp.y>(monter4.y+100))) {
		return true;
	} 
	return false;
}

 /*click out monter*/
function monter_clickout(mp) {	
	if(monter1_clickout(mp)&&monter2_clickout(mp)&&monter3_clickout(mp)&&monter4_clickout(mp)) {
		heart--;
		score-=50;
	} 
}

/*click on monter1*/
function monter1_clickon(mp) {
	if((mp.x>=monter1.x && mp.x<=(monter1.x+100))&&(mp.y>=monter1.y&&mp.y<=(monter1.y+100))) {
		render(index);
		count--;
		score+=xLevel*50;
		monter1_ready=false;
		monter1.x=1000;
		monter1.y=1000;
	} 
}

/*click on monter2*/
function monter2_clickon(mp) {
	if((mp.x>=monter2.x && mp.x<=(monter2.x+100))&&(mp.y>=monter2.y&&mp.y<=(monter2.y+100))) {
		render(index);
		count--;
		score+=xLevel*50;
		monter2_ready=false;
		monter2.x=1000;
		monter2.y=1000;
	} 
}

/*click on monter3*/
function monter3_clickon(mp) {
	if((mp.x>=monter3.x && mp.x<=(monter3.x+100))&&(mp.y>=monter3.y&&mp.y<=(monter3.y+100))) {
		render(index);
		count--;
		score+=xLevel*50;
		monter3_ready=false;
	} 
}

/*click on monter4*/
function monter4_clickon(mp) {
	if((mp.x>=monter4.x && mp.x<=(monter4.x+100))&&(mp.y>=monter4.y&&mp.y<=(monter4.y+100))) {
		render(index);
		count--;
		score+=xLevel*50;
		monter4_ready=false;
	} 
}

/* get mouse position in canvas*/
function getPointMouse (can, evt) {
	var r=can.getBoundingClientRect();
	return {
		x:evt.clientX - r.left,
		y: evt.clientY - r.top
	};
}
var can = document.getElementById("myCanvas");
can.addEventListener('click',function(evt){
	var mp=getPointMouse(can,evt);
	if(pau_status) {
	} else {
		monter_clickout(mp);
		monter1_clickon(mp);
		monter2_clickon(mp);
		monter3_clickon(mp);
		monter4_clickon(mp);
	}
},false);

/*check finish*/
function checkFinishLevel() {
	if(count==0) {
		finished=true;
		stop_status=false;
		index++;
		count=index;
	}
}

/*messenga level complete*/
var long =0;
function mess() {
	long=0;
	var messCom = setInterval(function() {
		long+=1000;
		if(long==3000) {
			clearInterval(messCom);
			magic.clearRect(0, 0, 600, 550);
			finished=false;	
			reset_level();
			monter1_random();	
			monter2_random();	
			monter3_random ();
			monter4_random ();
			main();
		}
		magic.fillText("Level complete", 250, 230);	
	},1000);

}

/*Read cookie*/
function readCookie() {
	var allCookie=document.cookie;
	if(document.cookie.length==0) {
		return 0;		
	} else {
		cookieArray=allCookie.split(';');
		for(var i=0;i<cookieArray.length;i++) {
			name=cookieArray[i].split('=')[0];
			value=cookieArray[i].split('=')[1];
			if(name=="game_monter_height_score") {
				return value;
			}	
		}
	}
	return 0;
}

/*update height score*/
function update_heightscore() {
	height_score=readCookie();
	if(height_score<score) {	
		document.cookie="game_monter_height_score="+score;
	}
}


var index=1;
var heart=5;
var count=1;
var finished=false;
var score=0;
var height_score=readCookie();
var myVar;
 var speed=0.002;
var stop = 2;
var xLevel=1;

/*The main game loop*/
var main=function() {
	checkFinishLevel();
	updateIndex();
	if(index==5) {
		update_heightscore();
		magic.clearRect(0, 0, 600, 550);
		magic.fillText("Game finish - conratulation", 150, 230);
	} else {
		if( heart==0) {
			update_heightscore();
			magic.clearRect(0, 0, 600, 550);
			updateIndex();			
			magic.fillText("Game over", 250, 230);
		} else {
			if(finished==false) {
				if(stop_status==true || pau_status==true) {
				} else {
					magic.clearRect(0, 0, 600, 550);
					update(speed,index);
					render(index);	
				}
				requestAnimationFrame(main);
			} else {
				mess();
				magic.clearRect(0, 0, 600, 550);
			}
		}
	}
	
}

/*Cross-browser support for requestAnimationFrame*/
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
/* Let's play this game! */
reset(index);
main();

/*select speed index*/
function speed_index() {
	if(document.getElementById("speed_index" ).value=="Slow") {
		speed=0.004;
		xLevel=1;
	}
	if(document.getElementById("speed_index" ).value=="Normal") {
		speed=0.008;
		xLevel=2;
	}
	if(document.getElementById("speed_index" ).value=="Fast") {
		speed=0.016;
		xLevel=3;
	}
}

/*when click boom*/
function boom_click() {
	if(boom>0) {
		count=0;
		boom--;
		mess();
	}
}

/*when click stop*/
var stop_status=false;
function stop_click() {
	if(stop>0) {
		stop--;
		stop_status=true;
	}
}

/*when click pause*/
var pau_status=false;
function pau_click() {
	pau_status=true;
}

/*when click un pause*/
function un_pau() {
	pau_status=false;
}