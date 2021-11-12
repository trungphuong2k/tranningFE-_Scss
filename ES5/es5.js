const objects = [
  { number: 45 },
  { number: 4 },
  { number: 9 },
  { number: 16 },
  { number: 25 },
  { number: 16 },
  { number: 24 },
];
//map
let mapArr = objects.map((object) => object.number);
//filter
let filterArr = mapArr.filter((filterNumber) => filterNumber < 20);

console.log(filterArr);
//reduce
let sum = mapArr.reduce((acc, curr) => acc + curr);
console.log(sum);
//join
function reverseWords(string) {
  return string
    .split(" ")
    .reverse()
    .filter((s) => s !== "")
    .join(" ");
}
console.log(reverseWords("a  hello   world!  "));
//find

// const array1 = [2, 55, 60, 97, 86];
// function sevenBoom( arr){
//     const found = arr.find(element => element ===7);
//     if (found===7){
//         console.log('Boom!');
//     }
//     else {
//         console.log('there is no 7 in the array');
//     }
// }
// sevenBoom(array1);
