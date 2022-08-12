let countEl = document.getElementById("count-el")
let saveEl = document.getElementById('save-el')
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.innerText = count
}

let countStr = 0
function save() {
    countStr += count
    saveEl.innerText += countStr
    
    count = 0
    countEl.innerText = count

}
