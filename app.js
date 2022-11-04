const selectBtn = document.querySelector(".select-btn");
const items1 = document.getElementsByClassName("items");
const items2 = document.getElementsByClassName("items2");

selectBtn.addEventListener("click", ()=> {
    selectBtn.classList.toggle("open");
});

Array.from(items1).forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-text");

            if(checked && checked.length > 0) {
                btnText.innerText = `${checked.length} selected`;
            }
            else {
                btnText.innerText = `Team 1 - Select Players`
            }
        console.log(checked.length)
    })
})

Array.from(items2).forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-text");

            if(checked && checked.length > 0) {
                btnText.innerText = `${checked.length} selected`;
            }
            else {
                btnText.innerText = `Team 1 - Select Players`
            }
        console.log(checked.length)
    })
})