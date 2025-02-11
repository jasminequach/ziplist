function zipList(arr1: string[], arr2: number[]) {
  let newArr: (string | number)[] = [];
  for(let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }
  return newArr;
}

let strArray: string[] = ['a', 'b', 'c'];
let numArr: number[] = [1, 2, 3];

let result = zipList(strArray, numArr);

// This will print the array in a string format
console.log(JSON.stringify(result)); // Output: ["a",1,"b",2,"c",3]
