function add(){
  let x = document.getElementById("first")
  let y = document.getElementById("second")
  let a = +x.value
  let b = +y.value
  let result = a + b;
  let resultTag = document.getElementById('result')
  resultTag.innerHTML = ` ${result} `;
  
}

function sub(){
  let x = document.getElementById("first")
  let y = document.getElementById("second")
   let a = +x.value
  let b = +y.value
  let result = a - b;
  let resultTag = document.getElementById('result')
  resultTag.innerHTML = ` ${result} `;
  
}
function mul(){
  let x = document.getElementById("first")
  let y = document.getElementById("second")
   let a = +x.value
  let b = +y.value
  let result = a * b;
  let resultTag = document.getElementById('result')
  resultTag.innerHTML = ` ${result} `;
  
}
function div(){
  let x = document.getElementById("first")
  let y = document.getElementById("second")
   let a = +x.value
  let b = +y.value
  let result = a / b;
  let resultTag = document.getElementById('result')
  resultTag.innerHTML = ` ${result} `;
  
}