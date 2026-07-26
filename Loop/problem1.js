// write a function that searches the indexes for an element in an array and returns the index if element not present then return -1

const arr = [12,3,455,67,87,334,]
const element = 1
function findIndex(arr,element){
  for(let i=0;i<arr.length;i++){
      if(arr[i]==element){
        return i
      }
  }
  return -1
}

const index=findIndex(arr,element)
console.log(index)
