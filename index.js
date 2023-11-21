let arr1=[1, 2, 3, 5, 9, 10];
let arr2=[0, -1, 2, -9, -12, -20, 10, 13];

function findMin(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] < arr[0]){
            min = arr[i]
        }
    }
    return min;
}
let min = findMin(arr1);
console.log(min);
let min2 = findMin(arr2);
console.log(min2);