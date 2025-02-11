function zipList(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
    }
    return newArr;
}
var strArray = ['a', 'b', 'c'];
var numArr = [1, 2, 3];
var result = zipList(strArray, numArr);
// This will print the array in a string format
console.log(JSON.stringify(result)); // Output: ["a",1,"b",2,"c",3]
