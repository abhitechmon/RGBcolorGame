var numSquares=6;
var colors=[];
var squares=document.querySelectorAll(".square");
var pickedColor;
var colorDisp=document.getElementById("colorDisp");
var messageDisp=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
var info=document.querySelector("#info");

init();   //function responsible for whole execution of game

function init(){
	setupModeButtons();
	setupSquare();
	reset();
	information();
}

function setupModeButtons(){
for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy")
			numSquares=3;
		else{
			numSquares=6;
		}
		reset();
	});
}
}

function reset(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisp.textContent=pickedColor;
	resetButton.textContent = "New Colors";
	messageDisp.textContent = "";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
}

function information(){
	info.addEventListener("click",function(){
		alert("The RGB color model is an additive color model in which red, green and blue are added together in various ways to reproduce a broad array of colors. The name of the model comes from the initials of the three additive primary colors, red, green, and blue.");
	});
}

//--->we can also use easybtn and hardbtn by addind id at html but we are using modeButton to make the code short<---

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares=3;
// 	colors=generateRandomColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisp.textContent=pickedColor;
// 	messageDisp.textContent="";
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor=colors[i];
// 		}
// 		else{
// 			squares[i].style.display="none";
// 		}
// 	}
// });
// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares=6;
// 	colors=generateRandomColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisp.textContent=pickedColor;
// 	messageDisp.textContent="";
// 	for(var i=0;i<squares.length;i++){
// 		squares[i].style.backgroundColor=colors[i];
// 		squares[i].style.display="block";
// 	}
// });

resetButton.addEventListener("click", function(){
	reset();
});

function setupSquare(){

for(var i=0;i<squares.length;i++){
	
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			messageDisp.textContent="Correct!";
			resetButton.textContent="Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor=pickedColor;
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisp.textContent="TryAgain";
		}
	})
}
}

function changeColors(color){
	for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];

	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";

}