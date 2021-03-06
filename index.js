function getFirstSelector(selector) {
 return  document.querySelector(selector);
}

//want to check their solution against this
function nestedTarget() {
  return document.querySelector('#nested .target'); //order inside querySelector matters

}

//will try without getElement and parseInt first
function increaseRankBy(n) {
const rankedList = document.querySelectorAll('ul.ranked-list li'); 
 
  for(let i=0; i< rankedList.length; i++){  
rankedList[i].innerHTML = ( parseInt(rankedList[i].innerHTML) + n).toString();
} //note: toString() not necessary in this case, just folloying example code for this lesson
}

//idea: use querySelectorAll to generate what will be maximum length
function deepestChild(){
const depthList = document.getElementById('grand-node').querySelectorAll('div')
//after length, could save lenth as a variable and then maybe do depthList.getElementsByTagName('div')[length variable]
const d= depthList.length;
return depthList[d-1];
}


