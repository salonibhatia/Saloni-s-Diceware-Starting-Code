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
 let bKey = "11141"
 let cKey = "11245"
 let dKey = "12252"
 let eKey = "12612"
let fKey = "14213" 
let gKey = "13123"
let hKey = "12441"
let iKey = "53654"
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
  background("peachpuff");
 text(words.get(lookupKey), width/15, height/3);
 text(words.get(searchKey), width/6, height/3);
text(words.get(aKey), width/3, height/3);
text(words.get(oneKey), width/4, height/2);
text(words.get(anotKey), width/7, height/2);
text(words.get(somKey), width/15, height/2);
text(words.get(bKey), width/7, height/5);
text(words.get(cKey), width/7, height/9)
text(words.get(dKey), width/9, height/3)
text(words.get(eKey), width/3, height/11)
text(words.get(fKey), width/5, height/4)
text(words.get(gKey), width/4, height/9)
text(words.get(hKey), width/11, height/7)
text(words.get(iKey), width/16, height/9)

}

function keyPressed() {
   while ( key === "1" ) {
     lookupKey = generateLookupKey();
     searchKey = generateLookupKey();
     aKey = generateLookupKey();
     
     
   }
   while(key=="2"){
     bKey = generateLookupKey();
     anotKey = generateLookupKey();
     somKey = generateLookupKey();
    
     
   }
   while(key == "3"){
     dKey = generateLookupKey();
     oneKey = generateLookupKey();
    cKey = generateLookupKey();
   }
   while(key == "4"){
dKey = generateLookupKey();
eKey = generateLookupKey();
fKey = generateLookupKey();
  }
  while(key=="5"){
    gKey= generateLookupKey();
    hKey = generateLookupKey();
    iKey = generateLookupKey();
  }
  while(key== "0"){
 lookupKey = generateLookupKey();
     searchKey = generateLookupKey();
     aKey = generateLookupKey();
      bKey = generateLookupKey();
     anotKey = generateLookupKey();
     somKey = generateLookupKey();
     dKey = generateLookupKey();
     oneKey = generateLookupKey();
    cKey = generateLookupKey();
    dKey = generateLookupKey();
  eKey = generateLookupKey();
  fKey = generateLookupKey();
    gKey= generateLookupKey();
     hKey = generateLookupKey();
    iKey = generateLookupKey();
  }

}




