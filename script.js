let textArea = document.querySelector("#input")
let totalCount = document.querySelector("#count")
let remaining = document.querySelector("#remaining")
let count = 0;

textArea.addEventListener("input", ()=>{
    count = textArea.value.length
    totalCount.innerHTML = count;
    remaining.innerHTML = 100 - count;
})



