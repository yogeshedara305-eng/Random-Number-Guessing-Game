var check=document.querySelector(".btn button").addEventListener('click',clicked)
 
function clicked(){
    var emoji=Math.floor(Math.random()*10);
var picture = [
  "😀",
  "😂",
  "❤️",
  "👍",
  "😢",
  "😡",
  "😍",
  "🤔",
  "😎",
  "🙏"
];
var unlucky = [
  "😞",
  "😔",
  "😟",
  "😕",
  "🙁",
  "☹️",
  "😣",
  "😖",
  "😫",
  "😩"
];
var danger = [
    "⚠️",
    "🚨",
    "☠️",
    "💀",
    "🔥",
    "⛔",
    "🚫",
    "❌",
    "‼️",
    "🔴"
];
    var input=document.querySelector("input").value
    console.log(input)
    var random=Math.floor(Math.random()*10)+1;
    console.log(random)
    if(input===""){
        var result=document.querySelector(".result").textContent=`Enter Value ${danger[emoji]}` 
    }
   else if(+(input)===random){
    var result=document.querySelector(".result").textContent=`You Win's ${picture[emoji]}`
  }
  else{
    var result=document.querySelector(".result").textContent=`You lose's ${unlucky[emoji]}`
  }

 
}

