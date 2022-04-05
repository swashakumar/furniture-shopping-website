let carts=document.querySelectorAll('.add-cart');
let products=[
  {
  name:'bed1',
  tag:'bed1',
  price:15,
  inCart:0
},
{
name:'bed2',
tag:'bed2',
price:20,
inCart:0
},
{
name:'bed3',
tag:'bed3',
price:25,
inCart:0
},
{
name:'bed1',
tag:'bed1',
price:15,
inCart:0
},
]

for(let i=0;i<carts.length;i++){
  carts[i].addEventListener('click',() =>{
    cartNumbers(products[i]);
    totalCost(products[i]);
  })

}
function onLoadCartNumbers(){
  let productNumbers=localStorage.getItem('cartNumbers');

  if(productNumbers){
      document.querySelector('.cart span').textContent= productNumbers;

  }
}



function cartNumbers(products){
  console.log("the product is",products);
  let productNumbers=localStorage.getItem('cartNumbers');
  productNumbers=parseInt(productNumbers);
  if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers+1);
    document.querySelector('.cart span').textContent= productNumbers+1;


  }else{
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.cart span').textContent=1;

  }
  setItems(products);


}

function setItems(products){
  let cartItems=localStorage.getItem('productsInCart');
  cartItems=JSON.parse(cartItems);


  if(cartItems != null){

    if(cartItems[products.tag] == undefined){
      cartItems={
        ...cartItems,
        [products.tag]:products
      }
    }
    cartItems[products.tag].inCart+=1;

  }else{
    products.inCart=1;
    cartItems={
      [products.tag]:products
    }

  }

  localStorage.setItem("productsInCart",JSON.stringify
  (cartItems));

}
function totalCost(products){

  let cartCost=localStorage.getItem('totalCost');

  if(cartCost !=null){
    cartCost=parseInt(cartCost);
    localStorage.setItem("totalCost",
    cartCost+products.price);

  }else{
    localStorage.setItem("totalCost",products.price);

  }


}
onLoadCartNumbers();
