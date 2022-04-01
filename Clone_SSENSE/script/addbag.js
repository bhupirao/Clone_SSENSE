var cartData=JSON.parse(localStorage.getItem("cart"))|| [];
var total=cartData.reduce(function (sum, elem, index,arr){
    return sum + Number(elem.price);
},0);
var length=cartData.length;
document.querySelector(".p1").innerText=`Total Items ${length} items `;
document.querySelector(".p").innerText=`Total Price $ ${total}`
cartData.map(function (elem, index){
 var box=document.createElement("div");
 var img=document.createElement("img");
 img.src=elem.imageUrl;
 var name=document.createElement("p");
 name.innerText=elem.name;
    var brand=document.createElement("p")
    brand.innerText=elem.brand;
    var price=document.createElement("p")
    price.innerText=elem.price;
    var btn=document.createElement("button");
    btn.innerText="REMOVE";
    btn.addEventListener("click",function(){
        removeItem(elem, index);
    });
    box.append(img,name,brand,price,btn);
    document.querySelector("#add").append(box);
});
function removeItem(elem, index){
    cartData.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cartData));
    window.location.reload();
}