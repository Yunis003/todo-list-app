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
        li.style.marginBottom = "10px";
        lists.appendChild(li);
        let img=document.createElement('img')
        img.src= "./assets/img/non_hover.svg"
        li.append(img);

        img.addEventListener('mouseenter', ()=>{
            img.src = "./assets/img/hover.svg"
        })
        img.addEventListener('mouseleave', ()=>{
            img.src = "./assets/img/non_hover.svg"
        })
        
    }
}

lists.addEventListener("click", (e)=>{
    if (e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
    }
})


let filter = document.querySelector(".filter");

filter.addEventListener("click", ()=>{
    let items = Array.from(lists.children);

    for (let i = 0; i < items.length; i++){
        if(items[i].textContent.localeCompare(items[i+1].textContent) > 0){
            items.sort((a, b) => a.textContent.localeCompare(b.textContent));
         items.forEach(item => lists.appendChild(item));
        }
        if (items[i].textContent.localeCompare(items[i+1].textContent) < 0 ){
            temp = items[i+1];
            items[i+1] = items[i];
            items[i] = temp;
        }
    }
})