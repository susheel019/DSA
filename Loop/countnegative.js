// writes a function that returns the number of negative numbers in an array


let arr = [1,-2,-4,-6,-8,5,88,97,-44,5,-5]

function countnegatives(arr){
    let count =0
     for(let i=0;i<arr.length;i++){
        if(arr[i]<0)
            count++
     }
     return count
}

const countnegative = countnegatives(arr)
console.log(countnegative)