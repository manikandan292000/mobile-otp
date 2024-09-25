let fullbox=document.querySelector(".mobile_box")
let input_mobile =document.querySelector("#input_phone")
let button=document.getElementById("btn_two")
let para = document.getElementById("para")

let randomNumber
// var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')

var toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

function myfunction(){

     
    if (input_mobile.value == "") {
        let errorMessage = "Enter your Mobile Number";  
        let messElement = document.getElementById("mess");
        messElement.innerText = errorMessage;
        messElement.style.color = "red";
        messElement.style.display = "block";

       
    }else{
        let check = /^\d{10}$/;
        let verify = check.test(input_mobile.value)
        if(verify){
         randomNumber = Math.floor(1000 + Math.random() * 9000);
            document.getElementById("para").innerText= randomNumber;
            localStorage.setItem('otp',randomNumber)
                toastBootstrap.show()
                // setTimeout(()=>{
                //     window.location.href="login.html"
                // },5000)
         document.getElementById("mess").innerText="OTP successfully"
          document.getElementById("mess").style.color="green"
          document.getElementById("mess").style.display = "block"; 
        }
        else{
            document.getElementById("mess").innerText="plz Enter valid Mobile Number"
            localStorage.removeItem('otp',randomNumber)
            document.getElementById("mess").style.display = "block";
            document.getElementById("mess").style.color="red"
        }
        
    }
}


let full_box=document.querySelector("#full_box")
let inputs=document.querySelectorAll(".input")
let otp=""
function mybutton(){


    inputs.forEach((elm)=>{
        otp+=elm.value
        elm.value=""
    })
    
    console.log(otp)
    if(otp == localStorage.getItem('otp')){
        console.log(document.getElementById("para"),inputs.value)
        document.getElementById("para_two").innerText=" Login successfuly "
        document.getElementById("para_two").style.color="green"
        localStorage.removeItem('otp')
        setTimeout(()=>{
           window.location.href="index.html"
        },3000)

    }else{
      document.getElementById("para_two").innerText="login Not successfuly "
       document.getElementById("para_two").style.color="red"
    
    }
    
}

function moveToNext(current, nextFieldId) {
    if (current.value.length == 1 ) {
      document.getElementById(nextFieldId).focus();
    }
  }

  function moveToPrev(event, prevFieldId) {
  if (event.key === 'Backspace' && event.target.value === '') {
    document.getElementById(prevFieldId)?.focus();
  }
}

input_mobile.addEventListener('input', function() {
    let messElement = document.getElementById("mess");
    if (messElement.style.display === "block") {
        messElement.style.display = "none";
    }
});


