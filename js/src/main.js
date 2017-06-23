function readThread(type){
  if (type==1) {
    var win = window.open('thread.html','_self')
  }else {
    var win = window.open('thread.html','_blank')
  }
}


function openByIndex(index){
  if (index==1) {
    var win = window.open('article/thread.html','_self')
  }else if(index==2){
    var win = window.open('article/context.html','_self')
  }
}
