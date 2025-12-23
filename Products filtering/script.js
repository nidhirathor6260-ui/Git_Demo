let products = [
   "iPhone" ,
   "Smartwatch",
   "Bottle",
   "Ballpen",
   "Gelen",
   "Pencil",
   "Lamp",
   "Mouse",
   "Keyboard",
   "Monitor",
   "Printer",
];
function filterProducts(event){
  let userValue = event.target.value.toLowerCase();
 
  
  let matching = [];
  
  for(let i = 0 ; i<products.length; i++){
    let product = products[i];
   if(product.toLowerCase().includes(userValue)){
      matching.push(product);
    }    
}
showProducts(matching);
}

function showProducts(items){
  let div = document.getElementById("products");

 let productsList = "";
  if(items.length == 0){
    div.innerHTML = `<p>Esa koi product nahi mila.</p>`;
    return;
  }

  for(let i = 0 ; i<items.length; i++){
   productsList += `<p>${items[i]}</p>`;
  }

  div.innerHTML = productsList ;
}

showProducts(products);










     