const Yes = document.querySelector(".buttonYes")
const No = document.querySelector(".buttonNo")

const text = document.querySelector(".text")

const sub = document.querySelector(".sub")



const musicc = document.querySelector(".musicplay")


const GIF = document.querySelector(".GIF")
const hearts = document.querySelector(".bubbling-heart");


Yes.addEventListener("click",()=>{
  GIF.src = "yes.gif"
  text.textContent = " See you tommorow at Jollibee Kauswagan my Palangling "
  musicc.play()
  No.style.display="none"
  hearts.style.visibility = "visible";
  sub.textContent = ""
  clearTimeout(timeoutId);
})

No.addEventListener("click",()=>{
  GIF.src = "sad.gif"
  sub.textContent = " Click the Yes huhuhuhu :(  "

  bounce()

})

function bounce() {

  
  No.style.position = "absolute";
 
  var height = window.innerHeight - No.offsetHeight;
  var width = window.innerWidth - No.offsetWidth;
  var newHeight = Math.floor(Math.random() * height);
  var newWidth = Math.floor(Math.random() * width);
  No.style.top = newHeight + 'px';
  No.style.left = newWidth + 'px';

  timeoutId = setTimeout(bounce, 1000);
}




