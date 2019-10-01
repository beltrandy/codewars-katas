/*
Instructions:

Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.

Sample Tests:

Test.describe("Example tests",_=>{
Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
});
*/

function findShort(s){
    let wordArray = s.split(' ');
    let shortest = wordArray[0].length;

    if (wordArray.length > 1) {
    
        for (let i=1; i < wordArray.length; i++) {
            if (wordArray[i].length < shortest) {
                shortest = wordArray[i].length;
            }
        }

        return shortest;
        
    } else {
        return shortest;
    }

}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));