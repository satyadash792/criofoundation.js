const isValidPayload = (files = []) => {
  const restrictedFileExt = ["exe", "zip"];

  const isPayloadSizeValid = (files = [], limit = 10000) =>
    files.every((obj) => obj.size <= limit);

  //filename.extension => ["filename", "extension"] => "extension"
  const getFileExtension = (filename = "") =>
    filename.substr(filename.lastIndexOf(".") + 1);
  // const getFileExtension = (filename = "") => filename.split(".")[1]

  const hasInvalidFiles = (files = [], blockedExt = restrictedFileExt) => {
    //Return false if some of the filenames have the extension present in the blocked extension array
    return files.some((file) =>
      blockedExt.includes(getFileExtension(file.filename))
    );
  };

  const getCheckResult = () =>
    isPayloadSizeValid(files) && !hasInvalidFiles(files);

  return getCheckResult;
};

const runner = isValidPayload(Files);
console.log(runner())