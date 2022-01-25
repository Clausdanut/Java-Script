function ascii (a) 
{ return a.charCodeAt(0);}
 var lineBreak = ascii("\n");
 $(window).keypress(function(event) {
    if (event.ctrlKey && event.which == ascii("s")) {
      savecontent();
      }
    // ...
    });
    var ints = 'ergtrer'.split('').map(ascii);
    [...'Foobar']
  .map(char => char.charCodeAt(0))
  .reduce((current, previous) => previous + current)
  'a'.charCodeAt(0) & 255 === 97; // because 'a' = 97 0 
'b'.charCodeAt(0) & 255 === 98; // because 'b' = 98 0 
'✓'.charCodeAt(0) & 255 === 19; // because '✓' = 19 39
'𐩕'.codePointAt(0); // 68181
String.fromCodePoint(68181); // '𐩕'

'𐩕'.charCodeAt(0);  // 55298
String.fromCharCode(55298);  // '�'
const stringToSum = str => [...str||"A"].reduce((a, x) => a += x.codePointAt(0), 0);

console.log(stringToSum("A"));              // 65
console.log(stringToSum("Roko"));           // 411
console.log(stringToSum("Stack Overflow")); // 1386
const stringToSum = str => [...str||"A"].reduce((a, x) => a += x.codePointAt(0), 0);

const UI_userIcon = user => {
  const hue = (stringToSum(user.name) - 65) % 360; // "A" = hue: 0
  console.log(`Hue: ${hue}`);
  return `<div class="UserIcon" style="background:hsl(${hue}, 80%, 60%)" title="${user.name}">
    <span class="UserIcon-letter">${user.name[0].toUpperCase()}</span>
  </div>`;
};

[
  {name:"A"},
  {name:"Amanda"},
  {name:"amanda"},
  {name:"Anna"},
].forEach(user => {
  document.body.insertAdjacentHTML("beforeend", UI_userIcon(user));
});
const str_to_arr_of_UTF8 = new TextEncoder().encode("Adfgdfs");
// [65, 100, 102, 103, 100, 102, 115]
function myFunction(){
    var str=document.getElementById("id1");
    if (str.value=="") {
       str.focus();
       return;
    }
    var a="ASCII Code is == >  ";
document.getElementById("demo").innerHTML =a+str.value.charCodeAt(0);
}
str.charCodeAt(index)
iconv = require('iconv-lite');
buf = iconv.encode("€", 'win1252');
buf.forEach(console.log);   
const ASCIIAverage = (str) =>Math.floor(str.split('').map(item => item.charCodeAt(0)).reduce((prev,next) => prev+next)/str.length)

console.log(ASCIIAverage('Hello World!'))
