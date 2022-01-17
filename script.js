 let words = new Map();

function preload() {
	loadStrings('beale.wordlist.asc.txt', createMap );
}
/**
 * This function goes through the word list line-by-line.
 * It then splits the line on any tab characters that appear, 
 *   recording only the first two as 'key' and 'value'
 * If the key is exactly five characters long, we assume the 
 *   line we are on is a line that contains a key/value pair
 *   then we store the word in the map with the key. 
 * 
 * This allows us to use the words Map later by simply using 
 *   a call to get, like so:
 * 
 * lookupKey = 12340
 * word = words.get(lookupKey)
 */

 let lookupKey = "11111"
 let aKey = "11121"
 let searchKey = "11114"
 let oneKey = "53122"
 let anotKey = "51442"
 let somKey = "45652"
 
function generateLookupKey() {
  var length = 6;
  key = "";
  const dieFaces = [1,2,3,4,5,6] 
  for( let i = 0; i < 5; i++ ) {
       key = `${key}${random(dieFaces)}`; 
  }
  return key;
}


function createMap(strings) {
	for( let line of strings ) {
		let [key, word] = line.split('\t');
		if( key.length === 5 ) {
			words.set( key, word );
		}
	}
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white"); 
}

function draw() {
  background("red");
 text(words.get(lookupKey), width/15, height/3);
 text(words.get(searchKey), width/6, height/3);
text(words.get(aKey), width/3, height/3);
text(words.get(oneKey), width/4, height/2);
text(words.get(anotKey), width/7, height/2);
text(words.get(somKey), width/15, height/2);


}

function keyPressed() {
   while ( key === "1" ) {
     lookupKey = generateLookupKey();
     searchKey = generateLookupKey();
     aKey = generateLookupKey();
     oneKey = generateLookupKey();
     anotKey = generateLookupKey();
     somKey = generateLookupKey();
   }

}



