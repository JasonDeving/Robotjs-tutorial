// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");
 
// robot.mouseToggle("down");

// setTimeout(function(){
// 	robot.moveMouse(0, 0);
// 	robot.mouseToggle("down");
// 	robot.dragMouse(100, 100);
// 	robot.mouseToggle("up");
// }, 2000);

// setTimeout(function(){
// 	var mouse = robot.getMousePos();
// 	console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
	
// }, 2000);

var blah = robot.getScreenSize();
var width = blah.width;
var height = blah.height;
console.log(
``
height: ${height}
widght: ${width}
`
	);
