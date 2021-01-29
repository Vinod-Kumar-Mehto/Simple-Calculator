const selectBtn = document.querySelectorAll("[data-num]");
const screen = document.querySelector(".screen")
let screenValue = " ";
function addNum(e){
        if(this.dataset.num == "*"){
            screen.innerHTML += this.dataset.num;
            screenValue = screen.innerHTML
        }else if(this.dataset.num == "AC"){
            screen.innerHTML = " "; 
            screenValue = " ";
        }else if(this.dataset.num == "="){
            if(screenValue != " "){
                screenValue = eval(screenValue)
                screen.innerHTML = screenValue;

            }
            
        
        }else{
            screen.innerHTML += this.dataset.num

            screenValue = screen.innerHTML;

        }

}


selectBtn.forEach( btn => btn.addEventListener("click", addNum))