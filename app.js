// Write your JS in here
pics = [
    "cat1.jpeg", //0
    "cat2.jpeg", //1
    "cat3.jpeg", //2
    "cat4.jpeg", //3
    "cat5.jpeg", //4
    "cat6.jpeg",  //5
    "cat7.jpg",  //6
    "cat8.jpg",  //7
    "cat9.jpg", //9
    "cat10.png" //10
];
var btn = document.querySelector("button")
var img = document.querySelector("img")
var counter = 1

btn.addEventListener("click", function(){
	if(counter === 11){
		counter = 0
	}
	img.src = pics[counter]
	counter = counter + 1
});


var btn = document.querySelector("button")
var img = document.querySelector("img")
var counter = 1

btn.addEventListener("click", function(){
	if(counter === 11){
		counter = 0
	}
	img.src = pics[counter]
	counter = counter + 1
});

