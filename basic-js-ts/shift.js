function shift(array, side, amt) {
    let arr = array
    if(side==='left'){
        for(let i=0;i<amt;i++) {
            arr.unshift(arr[arr.length-1])
            arr.pop()
        }
    }
    if(side==='right'){
        for(let i=0;i<amt;i++) {
            arr.push(arr[0])
            arr.shift(2, arr.length-1);
        }
    }
    return console.log(arr);
}

shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
//['sarah', 'alex', 'john', 'jane']

shift([1, 2, 3, 4 ,5], 'right', 3)
//[3, 4, 5, 1, 2]