//EX 1


let array = let array = []
arrayLength = +prompt("Please print ArrayLength")
for(let i=0; i<arrayLength; i++) {
    let arrayItems = prompt("Please enter ArrayItem")
    array[i] = arrayItems
}
let number = +prompt("Please enter a number")

function comparison (arr, num){
    let result = arr.filter(arrayItem => arrayItem  > num );
    let i = 0;
    if( result.indexOf(result[i]) === -1 ){
        return 'No values.'
    }
    return result
}
comparison (array,number)

//Ex 4

let array = []
arrayLength = +prompt("Please print ArrayLength")
for(let i=0; i<arrayLength; i++) {
    let arrayItems = prompt("Please enter ArrayItem")
    array[i] = arrayItems
}
function minPosNumber (array, minEl) {
	if (array.length > 0){
		if ( array[0] < 0) {
	       return minPosNumber (array.slice(1), minEl)

		} else {
			if(array[0] < minEl){
				minEl = array[0]
			
		    } 
	      
	        return minPosNumber (array.slice(1), minEl)

		}
    }
    else{ 
    	if (minEl !== Number.MAX_VALUE){
    		
    			return minEl
    	}else{
    	        return -1
         }   
    }

}


minPosNumber (array, Number.MAX_VALUE)





// Ex 2


let a =+prompt("Enter a number")
let b =+prompt("Enter a number")

function evenNumbers (a,b){
    let arr = [];
    let result = [];
    for(let i = a; i <= b; i++){
        arr.push(i);
    }  
    arr = arr.filter(m => m % 2 === 0) 
    for(let i = 0; i < arr.length; i++){
        arr[i] = '' + arr[i];
        arr[i] = arr[i].split('');
        if(arr[i].every(e => e % 2 === 0)){
            result.push(arr[i].join(''));
        } 
    }
    if(result.length === 0){
       return 'There are no such numbers'
    }else{
      return result.join(',')
    }
}
evenNumbers(a,b)



// Ex 5


let array = []
arrayLength = +prompt("Please print ArrayLength")
for(let i=0; i<arrayLength; i++) {
    let arrayItems = prompt("Please enter ArrayItem")
    array[i] = arrayItems
}

function findIndex (arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            return i+1;
        }
    }
    return -1;
}
findIndex (arr)