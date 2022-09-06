// Code your solution here
//1)findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
//2)fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, 
//and returns all drivers whose names begin with the provided letters.
//3)matchName - This function takes an array of driver objects and a string as arguments. 
//Each driver object has two properties: name and hometown.The function should return each element whose name property matches the provided string argument.

function findMatching(source, sought) {
    return source.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
  }
  
  function fuzzyMatch(source, testString) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
  }