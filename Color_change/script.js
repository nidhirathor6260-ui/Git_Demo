function setColor(color) {
  let heading = document.getElementById('xyz');
  // if(heading.style.color == color){
  //   return;
  // }
  heading.style.color = color;
  
  let span = document.getElementById('counter');
  let count = +span.innerHTML;
  span.innerHTML = count + 1;

  const allbuttons = document.getElementsByTagName("button")
  for(let i = 0 ; i<allbuttons.length; i++){
   const b = allbuttons[i];
   b.disabled = false;
 }
  
  const button = document.getElementById(color)
  button.disabled = true;
}

 function hide() {
  let heading = document.getElementById('xyz');

  heading.style.visibility = 'hidden';
}

function show() {
  let heading = document.getElementById('xyz');

  heading.style.visibility = 'visible';
} 