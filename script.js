function generate(){
    var quotes = {
        "-Joe Klass" :  '“The truth will set you free, but first it will piss you off.”',
        "-Charlotte Bronte": '“I am no bird; and no net ensnares me: I am a free human being with an independent will.”',
        "-Virginia Woolfe": '“Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.”',
        "-Coco Chanel": '“The most courageous act is still to think for yourself. Aloud.”',
        "-Mahatma Gandhi" : '“Freedom is not worth having if it does not include the freedom to make mistakes.”',
        "-Nelson Mandela" : '“When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw.”'
        }
      var authors = Object.keys(quotes);  
    //   console.log(authors);  
    var author = authors[Math.floor(Math.random()* authors.length)];

    
  
     
var quote = quotes[author]; 
document.getElementById("quote").innerHTML = quote;
document.getElementById("authors-name").innerHTML = author;


// function changeColor(){
  var hex_numbers = ["0","1","2","3","4","5","6",
"7","8","9","A","B","C","D","E","F"];

var hexcode = "";

for(var i = 0; i < 6; i++){
  // Generate a random number from hex_numbers
  var random_index = Math.floor(Math.random()
  *hex_numbers.length);
  hexcode += hex_numbers[random_index]

}
//  document.getElementById("hex-code").innerHTML = hexcode;
  document.getElementsByTagName("body")[0].style.background = "#"+ hexcode;
}