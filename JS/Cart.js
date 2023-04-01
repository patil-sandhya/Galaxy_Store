let container = document.querySelector("#showCartItems");
let count = document.getElementById("countItem")
let totalBill1 = document.querySelector("#total1")
let totalBill2 = document.querySelector("#total2")
let continew = document.getElementById("continue");

let cartItemsData = JSON.parse(localStorage.getItem("cartItems"));

function DisplayCartData(){
    container.innerHTML=""
    cartItemsData.forEach(element => {
        let card = document.createElement("div");
        let imgDiv = document.createElement("div");
        let pimage = document.createElement("img");
        let detailDiv = document.createElement("div");
        let iname = document.createElement("h4");
        let qty = document.createElement("p");
        let price = document.createElement("h5");
        let inbutton = document.createElement("button")
        let decbutton = document.createElement("button");
        let removeDiv = document.createElement("div");
        let rembutton = document.createElement("button");

        card.id ="middleDetails";
        inbutton.id="inc";
        decbutton.id="dec";
        rembutton.id= "remove";

        pimage.src = element.image[0];
        iname.innerText=element.Name;
        qty.innerText= `Qty: ${element.qty}`;
        price.innerText= `₹ ${element.price}`
        inbutton.innerText= "+";
        decbutton.innerText='-';
        rembutton.innerText= "x Remove";

        inbutton.addEventListener("click", function(){
            element.qty++;
            localStorage.setItem("cartItems", JSON.stringify(cartItemsData));
            DisplayCartData();
        })

        decbutton.addEventListener("click", function(){
            if(element.qty > 1){
            element.qty--;
            localStorage.setItem("cartItems", JSON.stringify(cartItemsData));
            DisplayCartData();
            }
        })

        rembutton.addEventListener("click", function(){
            cartItemsData = cartItemsData.filter(function(pr){
                return pr.id != element.id
            })
            console.log(cartItemsData)
            localStorage.setItem("cartItems", JSON.stringify(cartItemsData));
            DisplayCartData();

        })


        imgDiv.append(pimage);
        detailDiv.append(iname,qty,price,inbutton,decbutton)
        removeDiv.append(rembutton);
        card.append(imgDiv,detailDiv,removeDiv);
        container.append(card)
 

    });

    let items =cartItemsData.length;
    count.innerText=`${items} Item`;

    let sum=0;
    for(let i=0; i<cartItemsData.length; i++){
        sum+= cartItemsData[i].price * cartItemsData[i].qty
    }
    console.log(sum)
    totalBill1.innerText=`₹${sum}`
    totalBill2.innerText=`₹${sum}`

}
DisplayCartData();

document.getElementById("continue").onclick = function(e) {
        e.preventDefault()
        let buyersData = JSON.parse(localStorage.getItem("customer"))
    document.getElementById("displayItem").style.display = "none";
    document.getElementById("address").style.display = "flex";
    let totalBill3 = document.querySelector("#total3")
    let totalBill4 = document.querySelector("#total4")
    let buynm = document.getElementById("buyersName");
    let add = document.getElementById("ars")
    let city =document.getElementById("city")
    let pin =document.getElementById("city")
    let email =document.getElementById("email")


    buynm.innerText = buyersData.name
    add.innerText = buyersData.address;
    city.innerText = buyersData.city;
    pin.innerText = buyersData.pin;
    email.innerText= buyersData.email
    let sum=0;
    for(let i=0; i<cartItemsData.length; i++){
        sum+= cartItemsData[i].price * cartItemsData[i].qty
    }
    console.log(sum)
    totalBill3.innerText=`₹${sum}`
    totalBill4.innerText=`₹${sum}`

    document.getElementById("payment").addEventListener("click", function(){
        alert("Your order is confirm Thank You !");
    window.location.href="index.html";
    })
    
}