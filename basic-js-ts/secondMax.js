function secondMax(array) {
    if(!array.length) {
        console.log('Error!');
        return
    }
    let maxValue = Math.max(...array)
    let minValue = Math.min(...array)
    if(maxValue!==minValue){
        let no1stMax = array.filter(item => item !== maxValue)
        console.log(Math.max(...no1stMax));
    } else console.log(array[0]);
}

secondMax([2, 3, 4, 5])
//4

secondMax([9, 2, 21, 21])
//9

secondMax([4, 4, 4, 4])
//4

secondMax([4123])
//4123

secondMax([])
//Error!