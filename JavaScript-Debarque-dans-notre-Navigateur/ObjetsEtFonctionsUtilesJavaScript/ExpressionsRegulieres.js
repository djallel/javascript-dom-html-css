const nomTemplate = /ab/;
const myString = "abc";
const myString2 = "ac";
const myString3 = "Bonjour ab moi c djallel abc";

console.log(nomTemplate)
console.log(nomTemplate.constructor)
console.log(nomTemplate.exec(myString))
console.log(nomTemplate.test(myString))
console.log(myString2.match(myString))
console.log(myString.search(nomTemplate))
console.log(myString.replace(nomTemplate,'ooo'))
console.log(myString3.split(nomTemplate))