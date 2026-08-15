const calContainer=document.getElementById("cal-container")
const buttonGrid=document.getElementById("button-grid")
const displayScreen=document.getElementById("display-screen")

let output=""
const charArr=['1','2','3','+','4','5','6','-','7','8','9','*','0','=','Clear','/','Backspace']




function renderInput(char){
    
try{

if(char==='='){
    if(output===""){
        return
    }
    else{
        let result=eval(output)
        displayScreen.innerHTML=result
        output=String(result)
    }
    } 

else if(char==="Clear"){
    displayScreen.innerText=""
    output=""
}
else if(char==="Backspace"){
output=output.slice(0,-1)
displayScreen.innerText=output
}
    else{
    output=output+char
    displayScreen.innerText=output
    }
}

catch(e){
    
    displayScreen.innerHTML="Invalid Expression"
    output=""
}
    
}


const buttons=charArr.map((char)=>{
    return(`<button onclick="renderInput('${char}')">${char}</button>`)
}).join('')
 buttonGrid.innerHTML=buttons

document.addEventListener('keydown',(event)=>{
    let key=event.key
   if(key==="Enter"){
key="="
   }
else if(key==="Escape"){
    key="Clear"
   }
else if(key==="Shift"){
    key=""
}
if(charArr.includes(key)){
 renderInput(key)
}
else{
    return
}
  
    
})