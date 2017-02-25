function whileLoop(num){
  while(num>0){
    console.log(num--);
  }
  return 'done';
}

function doWhileLoop(arr){
  do{
    array.pop();
  } while (maybeTrue() && array.length>0);
}

function maybeTrue(){
  return Math.random()>=0.5;
}
