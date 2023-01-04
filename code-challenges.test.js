// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// In the Fibonacci sequence of numbers, each number in the sequence is the sum of the two numbers before it, with 0 and 1 as the first two numbers.  
// 1 = 1
// 0 + 1 = 1
// 1 + 1 = 2
// 2 + 3 = 5
// 3 + 5 = 8
// 5 + 8 = 13

// Pseudocode
// Input: a number greater than 2
// Output: an array of fibonacci numbers. The array should be the same length as the number that was input (n)
// Process: 
//declare a function called fibonacci that takes a number argument (n). 
//create an array that starts with the two first numbers of the fibonnacci sequence (1 and 1)
//create a for loop that will iterate over the indexes of the array starting at index number 2
// and push the sum of the two previous numbers onto the end of the array using .push
// stop iterating when the index is less than the number (n)
// The result should be an array of (n) numbers of the fibonnaci sequence


// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// 1------------JEST TEST

// describe("fibonacci", () => {
//   it("returns an array of n fibonnaci numbers",() => {
//       expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
//       expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
//   })
// })

// 1--------------JEST Good FAIL
// learnacademy@LEARNs-MacBook-Air jest-aileen % yarn jest
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/JEST/jest-aileen/node_modules/.bin/jest
//  FAIL  ./jest.test.js
//   fibonacci
//     ✕ returns an array of n fibonnaci numbers (1 ms)

//   ● fibonacci › returns an array of n fibonnaci numbers

//     ReferenceError: fibonacci is not defined

//       213 | describe("fibonacci", () => {
//       214 |   it("returns an array of n fibonnaci numbers",() => {
//     > 215 |       expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
//           |       ^
//       216 |       expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
//       217 |   });
//       218 | });

//       at Object.expect (jest.test.js:215:7)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.171 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// learnacademy@LEARNs-MacBook-Air jest-aileen % 

// b) Create the function that makes the test pass.


const fibonacci = (n) => {
  if (n === 0 || n ===1) return 1;

  let arr = [1, 1];
  for (let i = 2; i < n; i++) {
      arr.push(arr [i-1] + arr [i-2]);
  };
  return arr;
};

// 1-------JEST ------- PASS

// learnacademy@LEARNs-MacBook-Air jest-aileen % yarn jest
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/JEST/jest-aileen/node_modules/.bin/jest
//  PASS  ./jest.test.js
//   fibonacci
//     ✓ returns an array of n fibonnaci numbers (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.161 s
// Ran all test suites.
// ✨  Done in 0.65s.
// learnacademy@LEARNs-MacBook-Air jest-aileen % 




// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// Pseudocode: 
// Input: an object with number values (study minutes) to be sorted
// Output: an array of the number values sorted
// Process: create a function called sortedMinutes with (obj) as an argument. 
// Access the values using dot notation (Object.values)
// Use .sort ((a,b) => a-b) to sort the values in ascending order

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

test("returns an array of the values sorted from least to greatest",() => {
  expect(sortedMinutes(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
  expect(sortedMinutes(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100]);
})

// -----JEST TEST----FAIL 
// $ /Users/learnacademy/Desktop/JEST/jest-aileen/node_modules/.bin/jest
//  FAIL  ./jest.test.js
//   ✕ returns an array of the values sorted from least to greatest

//   ● returns an array of the values sorted from least to greatest

//     ReferenceError: sortedMinutes is not defined

//       421 |
//       422 | test("returns an array of the values sorted from least to greatest",() => {
//     > 423 |   expect(sortedMinutes(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
//           |   ^
//       424 |   expect(sortedMinutes(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100]);
//       425 |  
//       426 | })

//       at Object.expect (jest.test.js:423:3)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.178 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// learnacademy@LEARNs-MacBook-Air jest-aileen % 

// b) Create the function that makes the test pass.

const sortedMinutes = (obj) => {
  return Object.values (obj).sort ((a,b) => a-b);
}

// ---YARN TEST - PASS

// $ /Users/learnacademy/Desktop/JEST/jest-aileen/node_modules/.bin/jest
//  PASS  ./jest.test.js
//   ✓ returns an array of the values sorted from least to greatest (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.14 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.53s.
// learnacademy@LEARNs-MacBook-Air jest-aileen % 


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// Pseudocode: 

  // Input: array 
  // Output: array of the accumulating sum.
  // Process: 
  // -Declare a function called accumulatingSum. 
  // -Use a for loop to iterate through the input array. 
  //--If the input array is empty, return empty array -- so must check if array is empty
  // --Write an else statement
  // -Create an empty array to store the accumulating sum, call it result
  // -Create a variable called sum to keep track of the current sum. Assign it 0.
  
  // -Start at zero index of the array, and go through the whole array one index number at a time until the end is reached.
  // -as the iteration moves through the array, add the current element to  sum  +=  

  // -add the sum to the empty array using Push with result
  // - return the result array
  
  // a) Create a test with expect statements for each of the variables provided.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

  // it("returns an array of the accumulating sum",() => {
  //     expect(accumulatingSum(accountTransactions1)).toEqual([100, 83, 60, 51]);
  //     expect(accumulatingSum(accountTransactions2)).toEqual([250, 161, 261, 165]);
  //     expect(accumulatingSum(accountTransactions3)).toEqual([]);
  // })

  // -----------JEST TEST ------- good fail
//   $ /Users/learnacademy/Desktop/JEST/jest-aileen/node_modules/.bin/jest
//   FAIL  ./jest.test.js
//    ✕ returns an array of the accumulating sum (1 ms)
 
//    ● returns an array of the accumulating sum
 
//      ReferenceError: accumulatingSum is not defined
 
//        303 |
//        304 |   it("returns an array of the accumulating sum",() => {
//      > 305 |       expect(accumulatingSum(accountTransactions1)).toEqual([100, 83, 60, 51]);
//            |       ^
//        306 |       expect(accumulatingSum(accountTransactions2)).toEqual([250, 161, 261, 165]);
//        307 |       expect(accumulatingSum(accountTransactions3)).toEqual([]);
//        308 |   })
 
//        at Object.expect (jest.test.js:305:7)
 
//  Test Suites: 1 failed, 1 total
//  Tests:       1 failed, 1 total
//  Snapshots:   0 total
//  Time:        0.17 s, estimated 1 s
//  Ran all test suites.
//  error Command failed with exit code 1.
//  info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
//  learnacademy@LEARNs-MacBook-Air jest-aileen % 
 
  
  // b) Create the function that makes the test pass.

  function accumulatingSum(arr) {
    if (arr.length === 0)  {
      return []
    } else { 
      const result = []
      let sum = 0
      for (const x of arr) {
        sum += x
        result.push(sum)
      }
      return result
    }
  }

//----------JEST TEST ---- PASS
//   $ /Users/learnacademy/Desktop/JEST/jest-aileen/node_modules/.bin/jest
//  PASS  ./jest.test.js
//   ✓ returns an array of the accumulating sum (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.164 s
// Ran all test suites.
// ✨  Done in 0.81s.
// learnacademy@LEARNs-MacBook-Air jest-aileen % 
