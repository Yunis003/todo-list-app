//? Calling DOM Elements
let input = document.querySelector(".add");
let inputSide = document.querySelector(".input-side");
let btn = document.querySelector(".add-btn");
let lists = document.querySelector(".lists-container");
let removeBtn = document.querySelector(".remove-btn");
let filter = document.querySelector(".filter");
let filter2 = document.querySelector(".filter2");
lists.style.display = "none"; 


//? Main Function And Event Listeners
function addTask() {
  
  // input.classList.toggle("adder");
  inputSide.classList.toggle("adder");

  if (input.value.trim() === "") {
    input.value = "";
    return;
  }
    lists.style.display = "flex";
    lists.style.flexDirection = "column";
    lists.style.gap = "10px";
    let ulContainer = document.createElement("div");
ulContainer.className = 'ulContainer';

    let li = document.createElement("li");
    li.textContent = input.value;
    input.value = "";
    ulContainer.appendChild(li);
    let img = document.createElement("img");
    img.src = "./assets/img/non_hover.svg";
    ulContainer.append(img);
    lists.appendChild(ulContainer);

    img.addEventListener("mouseenter", () => {
      img.src = "./assets/img/hover.svg";
    });
    img.addEventListener("mouseleave", () => {
      img.src = "./assets/img/non_hover.svg";
    });
    filter.disabled = false;
    filter2.disabled = false;
  }

removeBtn.addEventListener("click", () => {
  inputSide.classList.toggle("adder");
  input.value = "";
})
removeBtn.addEventListener("mouseenter", () => {
  removeBtn.src = "./assets/img/hover.svg";
})
removeBtn.addEventListener("mouseleave", () => {
  removeBtn.src = "./assets/img/non_hover.svg";
})

lists.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
  if (lists.children.length === 0) {
    lists.style.display = "none";
  }
});


filter2.style.display = "none";
//? Hover Effect For Filter Buttons
filter.addEventListener("mouseenter", () => {
  filter.src = "./assets/img/down_hover.svg";
})
filter.addEventListener("mouseleave", () => {
  filter.src = "./assets/img/down.svg";
})
filter2.addEventListener("mouseenter", () => {
  filter2.src = "./assets/img/up_hover.svg";
})
filter2.addEventListener("mouseleave", () => {
  filter2.src = "./assets/img/up.svg";})

//? A-Z Filter
filter.addEventListener("click", () => {
  if (lists.children.length === 0 || lists.children.length === 1) {
    return;
  }
  let items = Array.from(lists.children);
  items.sort((a, b) => {
    if (a.textContent && b.textContent) {
      return a.textContent.localeCompare(b.textContent);
    }
    return 0;
  });
  items.forEach(item => lists.appendChild(item));
  filter.style.display = "none";
  filter2.style.display = "block";
});

//? Z-A Filter
filter2.addEventListener("click", () => {
  if (lists.children.length === 0 || lists.children.length === 1) {
    return;
  }
  let items = Array.from(lists.children);
  items.sort((a, b) => {
    if (a.textContent && b.textContent) {
      return b.textContent.localeCompare(a.textContent);
    }
    return 0;
  });
  items.forEach(item => lists.appendChild(item));
  filter2.style.display = "none";
  filter.style.display = "block";
});



