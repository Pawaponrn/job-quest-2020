function fizzBuzz(num) {
    let result
    num%3===0 && num%5!==0 ? result='Fizz':''
    num%3!==0 && num%5===0  ? result='Buzz':''
    num%3===0 && num%5===0  ? result='FizzBuzz':''
    console.log(result);
}

fizzBuzz(21)
//Fizz

fizzBuzz(25)
//Buzz

fizzBuzz(45)
//FizzBuzz