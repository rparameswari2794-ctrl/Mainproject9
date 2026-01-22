function openFafooter(header) {
    const footer = header.nextElementSibling; // faq-footer
    const arrow = header.querySelector(".arrow");

    const isOpen = footer.style.display === "flex";

    // Close all other FAQs (optional)
    document.querySelectorAll(".faq-footer").forEach(f => f.style.display = "none");
    document.querySelectorAll(".arrow").forEach(a => a.style.transform = "rotate(0deg)");

    if (!isOpen) {
        footer.style.display = "flex";
        arrow.style.transform = "rotate(180deg)";
    }
}

function changeHeart(icon) {
  if(icon.classList.contains("fa-regular")){
    icon.classList.add("fa-solid");
    icon.classList.remove("fa-regular");
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  }
}

function openProduct(){
    window.location.href="product1.html";
}

function openEnquiry(){
    window.location.href="about1.html";
}

function closeReg(){
    document.getElementById("regModal").style.display="none";
}
function openRegister(){
     document.getElementById("regModal").style.display="flex";
}
function openHome1(){
    window.location.href="home1.html";
}
function openSign(){
    document.getElementById("signModal").style.display="flex";
}
function closeSign(){
    document.getElementById("signModal").style.display="none";
}
function openRegister1(){
     document.getElementById("regModal").style.display="flex";
      document.getElementById("signModal").style.display="none";
}
function closeProfile(){
    document.getElementById("profilePop").style.display="none";
}
function openProfile(){
    document.getElementById("profilePop").style.display="flex";
}

function openWhish(icon) {
    // Mark wishlist as active
    localStorage.setItem("wishlistActive", "true");

    // Redirect
    window.location.href = "whishlist.html";
}

window.onload = function () {
    const heart = document.getElementById("heartLike");

    // If clicked on this page, make solid
    if (localStorage.getItem("wishlistActive") === "true") {
        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid", "heart-active");

        // Clear the flag so next page starts regular
        localStorage.removeItem("wishlistActive");
    }
};

function openCart1(){
 window.location.href="proceed.html";
}

function openCart2(){
    window.location.href="payment.html";
}
function openDivpay(){
    const pay=document.getElementById("divContent");
    const divarr=document.getElementById("payArr");
    const dpay=document.getElementById("divPay");
    if(pay.style.display==="none" || pay.style.display===""){
        pay.style.display="flex";
        divarr.style.transform="rotate(180deg)";
        dpay.style.backgroundColor="#2979FF";
    } else {
        pay.style.display="none";
        divarr.style.transform="rotate(0deg)";
        dpay.style.backgroundColor="white";
    }
    
}
function showPayImage(radio){
    const img=document.getElementById("payImage");
    if(radio.value==="Gpay"){
        img.src="image/gpay.svg";
    }
    else if (radio.value === "Phonepay") {
    img.src = "image/phonepay.jpg";
  } 
  else if (radio.value === "Paytm") {
    img.src = "image/paytm.png";
  }

  img.style.display = "block";
}

function openPay(){
    document.getElementById("divDone").style.display="flex";
    
}
function openPayment(){
    document.getElementById("paySucce").style.display="flex";
    setTimeout(()=>{
        window.location.href="order.html";
    },5000)
}
        
function openBell(){
    document.getElementById("bellPop").style.display="flex";
}

function closeBell(){
    document.getElementById("bellPop").style.display="none"; 
}
function openFilter(){
     const filter=document.getElementById("filterPop");
     if(filter.style.display==="none" || filter.style.display===""){
     (filter.style.display="flex");
     } else {
        (filter.style.display="none");
     }
}
function openProductid(){
    window.location.href="product1a.html";
}
function openCart(){
    window.location.href="cart.html";
}
function openTrack(){
    window.location.href="track.html";
}

function openBill(){
    window.location.href="bill.html";
}
function selectPayment(radio) {
  const method = radio.value;

  // Save for next page
  localStorage.setItem("paymentMethod", method);
}
window.addEventListener("load", function () {
  const method = localStorage.getItem("paymentMethod");

  if (method) {
    document.querySelector(".nowpay").textContent = method;
  }
});
function openAccount(){
    window.location.href="personal.html";
}

function openOrder(){
    window.location.href="order.html";
}

function openPassword(){
    window.location.href="password.html";
}
function openLog(){
    window.location.href="logout.html";
}

function openAccalert(){
    document.getElementById("accAlert").style.display="flex";
    setTimeout(()=>{
        window.location.href="home1.html";
    },2000);
}
function openAccalert1(){
    document.getElementById("accAlert1").style.display="flex";
    setTimeout(()=>{
        window.location.href="home1.html";
    },2000);
}
function openAccalert2(){
    window.location.href="home.html";
}