//What does the following code return?
//new Set([1,1,2,2,3,4])
//This code return [1, 2, 3, 4]

//What does the following code return?
[...new Set("referee")].join("")
// this code return ["r","e","f"]

//What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//this code return [1,2,3] => false;

//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
function hasDuplicate(arr){
  const set = new Set(arr);
  return set.size!== arr.length;
}

//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str){
  str = str.toLowerCase();
  const vowels = ["a","e","i","o","u"];
  const countMap = new Map();
  for(let char of str){
    if(vowels.includes(char)){
      // Increment the count for the vowel in the map
      if(countMap.has(char)){
        countMap.set(char, countMap.get(char) + 1);
      }else{
        countMap.set(char, 1);
      }
    }
  }
  return countMap;
}