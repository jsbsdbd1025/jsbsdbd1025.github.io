function readThread(type){
  if (type==1) {
    var win = window.open('thread.html','_self')
  }else {
    var win = window.open('thread.html','_blank')
  }
}

function display(){
  var element = document.getElementById('btn1');
  element.style.color="red";
  element.style.display = "none";
  element.innerHTML = "变大";
}
