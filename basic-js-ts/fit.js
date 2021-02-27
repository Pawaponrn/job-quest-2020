function fit(index) {
   let arr = []
   for(var i = 0 ; i <= index ; i++) {
      if(i<2){
         arr.push(1)
      }else arr.push(arr[i-2]+arr[i-1])
   }
   return arr[arr.length-2]
}

console.log(fit(1)); 
console.log(fit(3)); 
console.log(fit(12)); 
