
let clrs = [
'#E4GDCD', //top 0
'#FFFFFF', //middle top 1
'#444444', //middle strip 2
'#010101', //middle bottom 3
'#122121' //bottom 4
]


function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke('black'); // add black stroke
}

function draw() {
 background(255); // change the background color to white
 canvasRect(clrs[4], height/2, height/2, false);
 canvasRect(clrs[0], height/2, 0, false);
 fill(clrs[2]); 
 rect(width * 1/3, height * 1/6, width * 1/3, height * 2/3); 
 canvasRect(clrs[1], height/6, height/3, true);
 canvasRect(clrs[3], height/6, height/2, true);


}

function canvasRect(clr, hgt, y_offset, clickable) {
	fill(clr);
	if((clickable == true) && (mouseIsPressed == false)){
		rect(0, y_offset, width, hgt);
	} 
	if(clickable == false){
		rect(0, y_offset, width, hgt);
	}
}
