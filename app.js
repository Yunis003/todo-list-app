let input = document.querySelector(".add")
let btn = document.querySelector(".add-btn");
let lists = document.querySelector(".lists-container");

function addTask(){
    //input bosdursa
    if(input.value == ''){
        input.style.backgroundColor = "crimson";
    }
    //esas hisse
    else{
        let li = document.createElement('li');
        li.textContent = input.value;
        lists.appendChild(li);
        let span=document.createElement('span')
        span.innerHTML='&#x2717'
        li.append(span);
    }
}

lists.addEventListener("click", (e)=>{
    if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
})
