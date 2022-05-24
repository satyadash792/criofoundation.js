const isPayloadSizeValid = (files = [], limit = 10000) => {
  return files.every((file) => file.size <= limit);
};

const getFileExtension = (filename = "") => {
  return filename.split(".")[1];
};

const hasInvalidFiles = (files = [], blockedExt = []) => {
  return files.some((file) =>
    blockedExt.includes(getFileExtension(file.filename))
  );
};

//Level 3
//1. ...checks would be an array where you shall pass function as arguments
//2. You may use .every() method.
//Pure function
const runChecks = (files = [], ...checks) => {
  //Return true if all the checks return true, else return false
  return checks.every((check) => check(files) === true)
};

const result = runChecks(files, isPayloadSizeValid)
console.log(result) //either true or false