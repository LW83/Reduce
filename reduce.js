  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => { //Console log Acc, Curr etc to see steps of how reduce works
  console.log(
    "Accumulator:", acc, 
    "Current Value:", curr, 
    "Total:", acc + curr
  );
  return acc + curr;
}, 0); //0 here is specfiically saying what the accumulator should start with and the callback function will then execute 5 times(number of items in the array). Can be any number e.g. 10.

//Simplified version of above
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too
