import {performingBubbleSort} from "./bubble.js";
let arr = [];
const generateArray = () => {
 arr=[];
  for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 101) + 1);
  }
  const barContainer = document.getElementById("barContainer");
  barContainer.innerHTML = "";
  arr.forEach((currVal) => {
    const bar = document.createElement("div");

    bar.className = "bar";
    bar.style.height = currVal * 5 + "px";

    barContainer.appendChild(bar);
  });
  
};

const arrayButton = document.getElementById("newArrayBtn");
arrayButton.addEventListener("click", generateArray);
const bubbleSortButton=document.getElementById("bubbleSort");
bubbleSortButton.addEventListener("click",async()=>{await performingBubbleSort(arr)})

