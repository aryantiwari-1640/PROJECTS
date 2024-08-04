var text="ABC";
const RECEIPE=[];
var counter=1;
setInterval(function(){
  document.getElementById('radio'+counter).checked=true;
  counter++;
  if(counter>4){
    counter=1;
  }
},5000);
var length=document.getElementsByClassName("P1").length;
for(let i=0;i<length;i++){
 var myText=document.getElementsByClassName("P1")[i].innerHTML;
 RECEIPE[i]=myText;
 document.getElementsByClassName("P1")[i].innerHTML=myText.substr(0,125)+"...";
}
let items=document.querySelectorAll('.container .card');
let next=document.getElementById('next1');
let prev=document.getElementById('prev1');
let active=3;
function loadshow(){
  let stt=0;
  items[active].style.transform=`none`;
  items[active].style.zIndex=1;
  items[active].style.filter=`none`;
  items[active].style.opacity=1;
  for(var i=active+1;i<items.length;i++){
    stt++;
    items[i].style.transform=`translateX(${220*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex= -stt;
    items[i].style.filter='blur(5px)';
    items[i].style.opacity=stt > 2? 0: 0.6;
  }

  stt=0;
  for(var i=active-1;i>=0;i--){
    stt++;
    items[i].style.transform=`translateX(${-220*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex= -stt;
    items[i].style.filter='blur(5px)';
    items[i].style.opacity=stt > 2? 0: 0.6;
  }
}
loadshow();

next.onclick = function(){
  active= (active + 1 < items.length) ? active+1 : active;
  loadshow();
};
prev.onclick = function(){
  active=(active-1>=0) ? active-1 : active;
  loadshow();
};

var data=window.location.search;
var params=new URLSearchParams(data);
var name=params.get("name");
var text=params.get("text");
var container=document.querySelector(".container")
const card=document.createElement("div");
card.classList="card";
RECEIPE[items.length]=text;
const movieCard=`<div class="card-image card-1"></div>
                <div class="content1">
                 <h2 class="card-head">${name}</h2>
                 <p class="P1">${RECEIPE[items.length].substr(0,25)+"..."}</p>
                </div>`
const button1=document.createElement("button");
button1.classList=`button ${items.length+1}`;
button1.innerHTML="READ MORE";
card.innerHTML+=movieCard;
card.appendChild(button1);
container.appendChild(card);

items=document.querySelectorAll('.container .card')
loadshow();


next.onclick = function(){
  active= (active + 1 < items.length) ? active+1 : active;
  loadshow();
};
prev.onclick = function(){
  active=(active-1>=0) ? active-1 : active;
  loadshow();
};

let buttonpress=document.getElementsByClassName("button");
let display=document.getElementById("display");
let buttonbig=document.getElementById("button5");
for(let i=0;i<items.length;i++){
 buttonpress[i].onclick=function(){
 const Heading=document.getElementsByClassName("card-head")[i].innerHTML;
 const input1=document.createElement("input");
 input1.value=`${Heading}`;
 input1.classList="label1";
 display.appendChild(input1);
 const text1=document.createElement("textarea");
 text1.value=`${RECEIPE[i]}`
 text1.classList="label2";
 display.appendChild(text1);
 const button2=document.createElement("button");
 const button3=document.createElement("button");
 button2.classList="button";
 button2.innerHTML="Save";
 button3.innerHTML="Delete";
 button3.classList="button";
 display.appendChild(button2);
 display.appendChild(button3);
 card1=document.getElementsByClassName("card");
 buttonpress[items.length].onclick=function(){
    var content=text1.value;
    RECEIPE[i]=content;
    if(content.length>=125){
      content=content.substr(0,125)+"..";
    }
    document.getElementsByClassName("P1")[i].innerHTML=content;
    display.removeChild(input1);
    display.removeChild(text1);
    display.removeChild(button2);
    display.removeChild(button3);
 }
 buttonpress[items.length+1].onclick=function(){
    container.removeChild(card1[i]);
    display.removeChild(input1);
    display.removeChild(text1);
    display.removeChild(button2);
    display.removeChild(button3);
 }
}
}
