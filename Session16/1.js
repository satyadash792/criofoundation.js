const Files = [
  {
    location: "x5E2A4F",
    filename: "Foundations.js",
    size: 8000,
  },
  {
    location: "x5E2A8E",
    filename: ".Procfile",
    size: 1800,
  },
  {
    location: "x3E238E",
    filename: ".env",
    size: 500,
  },
  {
    location: "x5B2A8F",
    filename: "Readme.md",
    size: 2800,
  },
  {
    location: "x5D894F",
    filename: "package.json",
    size: 2000,
  },
];
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

if(getFileExtension() &&  !hasInvalid){
  return true;
  runchecks();
} else{
  return false;
}
const runChecks = (files = [], ...checks) => {

    let checksArray = [...checks];

    checksArray.every(function(checkvalue) {
        return checkvalue == true;
    });


};


const runChecks  = (files =[],...checks) 
 return checks.every(item => item(files))}
