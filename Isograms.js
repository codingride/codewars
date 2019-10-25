function isIsogram(str){
  // Catch any error is found during the process
  let errors = [];
  // Pushing charachter to check againest the next one
  let letters = [];
  
  // Make sure the param is type of string
  if(str && typeof str === 'string') {
    for(let i = 0; i < str.length; i++) {
      
      // Push charachter in lower case for exact match 
      letters.push(str.charAt(i).toLowerCase());
      
      // Check if the charachter is being used twice
      if(letters.includes(str.charAt(i + 1).toLowerCase())) {
        errors.push(true);
      }
    
    }
  }
  
  // Return true or false based on matched results
  if(errors.includes(true)) {
    return false;
  } else {
    return true;
  }
}
