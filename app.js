const selectBtn = document.querySelector(".select-btn");
const items1 = document.getElementsByClassName("items");

let totalPlayer = 0
let myPlayers = [];


selectBtn.addEventListener("click", ()=> {
    selectBtn.classList.toggle("open");
});

Array.from(items1).forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-text");

            if(checked && checked.length > 0 && checked.length <= 7) {
                btnText.innerText = `${checked.length} selected`;
            }
            else if(checked.length > 7) {
                item.classList.toggle("checked");
            }
            else {
                btnText.innerText = `Team 1 - Select Players`
            }
            if(checked) {
                
            }
        console.log(checked.length)
    })
})

const items11 = document.getElementsByClassName("items1");
const selectBtn1 = document.querySelector(".select-btn1");

selectBtn1.addEventListener("click", ()=> {
    selectBtn1.classList.toggle("open");
});

Array.from(items11).forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked1");

        let checked1 = document.querySelectorAll(".checked1"),
            btnText1 = document.querySelector(".btn-text1");

            if(checked1 && checked1.length > 0) {
                btnText1.innerText = `${checked1.length} selected`;
            }
            else {
                btnText1.innerText = `Team 2 - Select Players`
            }
        console.log(checked.length)
    })
})
