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
    window.location.href="product.html";
}

function openEnquiry(){
    window.location.href="about.html";
}

function closeReg(){
    document.getElementById("regModal").style.display="none";
}
function openRegister(){
     document.getElementById("regModal").style.display="flex";
}
function openHome1(){
    document.getElementById("signAlert").style.display="flex";
    setTimeout(()=>{
     window.location.href="home1.html";
    },1000);
    
}
function openHome(){
    document.getElementById("regAlert").style.display="flex";
    setTimeout(()=>{
     window.location.href="home1.html";
    },1000);
    
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

function openWhish(icon){
        if(icon.classList.contains("fa-regular")){
            icon.classList.add("fa-solid");
            icon.classList.remove("fa-regular");
            window.location.href="whishlist.html";
        } else {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
        }
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
    window.location.href="producta.html";

}
