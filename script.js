const hi = document.querySelector(".hidden")
const main = document.querySelector(".main")

const musicc = document.querySelector(".musicplay")


const btn = document.querySelector(".ui-btn")






var words = ["..............","Dear Sarah,", "I hope this message finds you well.", "I’m writing to you because I feel it’s important ", "to express my deepest apologies",


"for any misunderstanding or hurt that I may have caused",
" I understand that my actions or words may have upset you",
"and for that, I am truly sorry.",

".....",

"I understand if you need time to process this",

"Please know that I am patiently waiting for your response, ",
"and I am ready to listen to your feelings and thoughts about this matter",
" Once again, "," want to express my sincere apologies.",

"-  Meri Jaan",".....","exit"]
var index = 0; // Initialize the index

const link = document.querySelector('.link')


function typeWriter() {
  var text = ""; // Initialize the text variable
  var currentWord = words[index]; // Get the current word from the list

  if(currentWord == "exit"){
    link.click()
  }
  
  // Loop through each character of the current word
  for (var i = 0; i < currentWord.length; i++) {
    // Use a closure to capture the value of i at each iteration of the loop
    
    
    (function(i) {
      // Set a timeout to add each character to the text variable with a delay
      setTimeout(function() {
        text += currentWord.charAt(i);
        // Set the text of the HTML element to the current text variable
        document.getElementById("text").innerHTML = text;
        document.title = text;
      }, i * 100); // Delay each character by 100 milliseconds
    })(i);
  }
  
  // Increment the index or reset it if it reaches the end of the list
  index = (index === words.length - 1) ? 0 : index + 1;
  
  // Set a timeout to call the function again after a delay
  setTimeout(typeWriter, currentWord.length * 100 + 1000); // Delay for the length of the word plus 1 second
}

// Call the function to start the typing effect


btn.addEventListener('click',()=>{
  console.log("shit")
  hi.style.display = "flex"
  main.style.display="none"
  musicc.play()
  typeWriter()
})





