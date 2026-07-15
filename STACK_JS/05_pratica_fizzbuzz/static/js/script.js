function contarHasta100(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            alert("FizzBuzz")
        }else if( i % 5 === 0){
            alert("buzz")
        }else if(i % 3 === 0){
            alert("fizz")
        }else{
            alert(i)
        }
    }
}