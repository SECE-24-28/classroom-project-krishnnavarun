const firstName = "Stefan";
const lastName = "Salvatore";


// Concatenate firstName and lastName with a space in between
const fullName  = firstName + " " + lastName;
console.log("Full Name:", fullName);

//template literals
const FullName = `${firstName} ${lastName}`;
console.log("Using Template Literals Full Name is:", FullName);


//toUpperCase and toLowerCase and lengths

console.log("Length of Full Name:", fullName.length);
console.log("Length of First Name:", firstName.length);
console.log("Length of Last Name:", lastName.length);
console.log("Original Full Name:", fullName);
console.log("Uppercase Full Name:", fullName.toUpperCase());
console.log("Lowercase Full Name:", fullName.toLowerCase());

//replace
const replaced = fullName.replace("Stefan","Damon")
console.log("After Replacing First Name:", replaced);

//split
const splitted = fullName.split(" ");
console.log("After Splitted:",splitted);

//substring
const substring = fullName.substring(0,6);
console.log("Substring (0 to 6):", substring);


//count words in sentence
const sentence = "The quick brown fox";
const splitSentence = sentence.split(" ");
console.log("Total Words: ",splitSentence.length);


//count word using function

const countWords = (sentence) => {
    return sentence.split(" ").length;
}

console.log("Total Words Using Function:", countWords("The quick brown fox"));