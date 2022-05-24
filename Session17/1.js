// Every => E3y
const createNumeronym = (str = "") => {
  if (str.length < 4) return str;
  else return `${str[0]}${str.length - 2}${str[str.length - 1]}`; //E3y
};

// console.log(createNumeronym("mix")); //mix
// console.log(createNumeronym("gold")); //mix
// console.log(createNumeronym("Every")); //E3y
// console.log(createNumeronym("Kubernetes")); //K8s

const maskSentence = (sentence = "") => {
  const words = sentence.split(" "); //string[]
  const maskedWords = words.map(createNumeronym);
  //const maskedWords = words.map((word) => createNumeronym(word));
  const maskedSentence = maskedWords.join(" ");
  return maskedSentence;
};

// const maskSentence = (sentence = "") =>
//   sentence.split(" ").map(createNumeronym).join(" ");

console.log(
  maskSentence("Every developer likes to mix kubernetes and javascript")
);
Saurabh Ghatnekar
To
Everyone
11:46:59 AM

Yes