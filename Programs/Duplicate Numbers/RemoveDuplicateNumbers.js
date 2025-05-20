/* Write a function to remove Duplicate Elements from an array. 
    Input: [1, 2, 3, 4, 5, 1, 2, 3]
    Output: [1, 2, 3, 4, 5]

    Input: [1, 2, 3, 6, 7]
    Output: [1, 2, 3, 6, 7]
*/

console.log(removeDuplicate([1, 2, 3, 4, 5, 1, 2, 3,]));
console.log(removeDuplicate([1, 2, 3, 6, 7]));

//Method 1
function removeDuplicate(arr){
    const uniquearr = [];
    for (let i = 0; i< arr.length; i++){
        if(uniquearr.indexOf(arr[i]) == -1){
            uniquearr.push(arr[i]);
        }
    }
    return uniquearr;
}

//Method 2
// Using Set
function removeDuplicate(arr){
    return [...new Set(arr)];   }

//Method 3
function removeDuplicate(arr){
    const uniquearr = [];
    for (let i = 0; i<arr.length ; i++){
        if(!uniquearr.includes(arr[i])){
            uniquearr.push(arr[i]);
        }       
    }
    return uniquearr;
}   