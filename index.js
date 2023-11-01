const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(() => {

//   return tutorials
// });

// Your job is to write the following function:

// titleCased(): returns an array with title case tutorial names. Note that this function takes no arguments and should use the global 
//tutorials variable as data.
// NOTE: This lab is challenging! You will need to iterate through the tutorials array, modifying the name of each tutorial.
// To do this, you will also need to access and modify each individual word.

//STEPS
// use a for each loop to grab each string inside tutorials
// split strings into sub-strings by dividing where there is a space
// grab the first letter of each word and capitalize it
// recombine substrings


// function titleCased() {

//   // In this line, a new constant titleCasedTutorials is defined to store the result of the map() 
//   //function applied to the tutorials array. The map() function takes a callback function that will
//   // be applied to each element in the tutorials array.
//   const titleCasedTutorials = tutorials.map(function (tutorial) {
//     const words = tutorial.split(' '); // Split the string into words
//     for (let i = 0; i < words.length; i++) {

//       //this code capitalizes the first letter of each word. It takes the i-th word, extracts the first 
//       //character using charAt(0), capitalizes it using toUpperCase(), and then appends the rest of the word 
//       //using slice(1).
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); // Capitalize the first letter
//     }
//     return words.join(' '); // Join the words back together and update the array
//   });
//   return titleCasedTutorials
// }

function titleCased() {
  const titleCasedTutorials = tutorials.map(function(tutorial) {
    const words = tutorial.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  });
  return titleCasedTutorials
};


console.log(titleCased(tutorials));
