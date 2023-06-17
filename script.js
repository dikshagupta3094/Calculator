
let btn = document.querySelectorAll('.button');
let input = document.getElementById("input")
let string ="";

//Making array using rest operator rest operator 
let arr = [...btn]

arr.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
    

    if(e.target.innerHTML == "="){
        string = eval(string)
        input.value = string;
    }

    else if(e.target.innerHTML == "AC"){
        string = ""
        input.value = string;
    }

    else if(e.target.innerHTML == "+/-"){
        if(string<0){
            string = Math.abs(string)
            input.value = string;
        }
        else{
            string = -Math.abs(string)
            input.value = string;
        }
    }
    else if(e.target.innerHTML=="Del"){
        string = string.substring(0,string.length-1);
        input.value = string;
    }

    else{
            string+= e.target.innerHTML
            input.value = string;
    } 
    })
})