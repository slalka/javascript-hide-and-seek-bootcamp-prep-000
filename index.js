function getFirstSelector(s){
  return document.querySelector(s);
}
function nestedTarget(){
return document.querySelector('#nested .target')
}
function increaseRankBy(n){
var a = document.querySelectorAll('ul.ranked-list li')
var i = a.length
while(i--){
  a[i].innerHTML = parseInt(a[i].innerHTML) + n;
}
}
//increaseRankBy(1);
function deepestChild(search){
  search = search || "div#grand-node"
  var b = document.querySelectorAll('#grand-node div')


  //if(b.length){

    return b[b.length-1]

//}


//  return b[0]
}
deepestChild()
