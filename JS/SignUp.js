
let mobForm = document.querySelector("#mobForm");
mobForm.addEventListener("submit", function(e){
    e.preventDefault();
    let setmob =mobForm.mobile.value;
    localStorage.setItem("mobile",setmob)
    document.getElementById("register").style.display = "none";
    document.getElementById("otp").style.display = "flex";
});

let otpform = document.querySelector("#otpform");
otpform.addEventListener("submit", function(e){
    e.preventDefault();
    let setmob =otpform.onetp.value;
    //localStorage.setItem("mobile",setmob);
    document.getElementById("register").style.display = "none";
    document.getElementById("otp").style.display = "none";
    document.getElementById("details").style.display = "flex";
    
});

let detailsform = document.querySelector("#detailsform");
detailsform.addEventListener("submit", function(e){
    e.preventDefault();
    let Data = {
        name: detailsform.fnm.value,
        address: detailsform.a.value,
        city: detailsform.city.value,
        pin: detailsform.pin.value,
        email: detailsform.email.value
    }
    console.log(Data)
    localStorage.setItem("customer", JSON.stringify(Data))
    window.location.href="index.html";

})
// document.getElementById("conbtn").onclick = function(e) {
//     e.preventDefault()
// document.getElementById("register").style.display = "none";
// document.getElementById("otp").style.display = "flex";

// }
// document.getElementById("verify").onclick = function(e) {
//     e.preventDefault()
// document.getElementById("register").style.display = "none";
// document.getElementById("otp").style.display = "none";

// document.getElementById("details").style.display = "flex";

// }
