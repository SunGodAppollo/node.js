
function printA(){
  var p=new Promise(function(resolve,reject){
        console.log('a');
        resolve(1);
  });
  return p;
}


printA().then(function(value){
  console.log('b');
}).then(function(value){
  console.log('c');
});
