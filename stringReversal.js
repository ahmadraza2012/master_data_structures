function reverseString(str) {
  const arr = str.split("");
  let reverseArray = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray = reverseArray + arr[i];
  }
  return reverseArray;
}
const result = reverseString("ahmad is a nice boy");
console.log(result);

let str ='ahmad is a nice boy'
console.log(str);
str.split('').reverse().join('');
console.log(str);
