import emojipedia from "./components/emoji_data";

//goal: create new array with only the definitions (map)
// Truncate text so it has max 100 chars. 
//Use method called substring

//find the first index greater than 100? 

console.log(emojipedia)

const definitions_array = emojipedia.map((object) =>{
    return object.meaning
})

console.log(definitions_array);

console.log(`length of the first def is ${definitions_array[0].length}`)

const truncatedTexts = definitions_array.map(def => {
    return def.substring(0, 100)
});

console.log(truncatedTexts)

console.log(`post trim first def length: ${truncatedTexts[0].length}`)

//Let's check it worked

const charLengthCheck = truncatedTexts.filter(def=>{
    return def.length === 100;
})

console.log(charLengthCheck)
