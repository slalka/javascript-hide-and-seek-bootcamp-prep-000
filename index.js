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
  var b = document.querySelectorAll(search)
  var c
  for(var i in b){
    c = c + b[i];
  }
  if(b.length){

    document.getElementById("nested").innerHTML = b.length
}


//  return b[0]
}
deepestChild()
