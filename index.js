let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 1

function double() {
    count *= 2
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 1
    count = 1
}
