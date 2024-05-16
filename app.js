let inpt = document.querySelector("input")
let btns = document.querySelectorAll("button") 

for(let button of btns){
  button.addEventListener('click', function(e){
    let btnText = e.target.innerText;
    if(btnText === "AC"){
      inpt.value = "";
    }
    else if (btnText === "="){
      try{
        inpt.value = eval(inpt.value)
      }
      catch(err){
        inpt.value = "Invalid";
      }
    }
    else{
      inpt.value = inpt.value + btnText;
    }
  })
}














































