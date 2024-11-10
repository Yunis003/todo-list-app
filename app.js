let input = document.querySelector(".add");
let btn = document.querySelector(".add-btn");
let lists = document.querySelector(".lists-container");
lists.style.display = "none";

function addTask() {
  //failed
  
  //main
 
    input.classList.toggle("adder");
    if (input.value === "") {
      return;
    }
    else{ 
      lists.style.display = "flex";
      lists.style.flexDirection = "column";
      lists.style.gap = "10px"; 
    let li = document.createElement("li");
    li.textContent = input.value;
    input.value = "";
    lists.appendChild(li);
    let img = document.createElement("img");
    img.src = "./assets/img/non_hover.svg";
    li.append(img);

    img.addEventListener("mouseenter", () => {
      img.src = "./assets/img/hover.svg";
    });
    img.addEventListener("mouseleave", () => {
      img.src = "./assets/img/non_hover.svg";
    });
  }
  }

lists.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
});

let filter = document.querySelector(".filter");
let filter2 = document.querySelector(".filter2");
filter2.style.display = "none";

//? A-Z Filter
filter.addEventListener("click", () => {
  let items = Array.from(lists.children);

  for (let i = 0; i < items.length; i++) {
    if (items[i].textContent.localeCompare(items[i + 1].textContent) > 0) {
      items.sort((a, b) => a.textContent.localeCompare(b.textContent));
      items.forEach((item) => lists.appendChild(item));
      filter.style.display = "none";
      filter2.style.display = "block";
    }
    //! bele bir sey eleki basanda img deyissin o birine bu biri sekil itsin ama sora o sekile klik eliyende tersine olaraq o sekilde filtrizasiya elesin.
  }
});

//? Z-A Filter
filter2.addEventListener("click", () => {
  let items = Array.from(lists.children);
  for (let i = 0; i < items.length; i++) {
    if (items[i].textContent.localeCompare(items[i + 1].textContent) < 0) {
      items.sort((a, b) => b.textContent.localeCompare(a.textContent));
      items.forEach((item) => lists.appendChild(item));
      filter2.style.display = "none";
      filter.style.display = "block";
    }
  }
});
