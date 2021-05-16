// Write your JS in here
pics = [
    "cat1.jpeg", //0
    "cat2.jpeg", //1
    "cat3.jpeg", //2
    "cat4.jpeg", //3
    "cat5.jpeg", //4
    "cat6.jpeg"  //5
    "cat7.jpg"  //6
    "cat8.jpg"  //7
    "cat9.jpg" //9
    "cat10.png" //10
];
var bnt = document.querySelector("button");
var imge = document.querySelector("img")
var count = 0;

bnt = addEventListener("click", function() {
    if (count === 10) {
        count = 0;
    }
    imge.scr = pics[count];
    count = count + 1;
})
