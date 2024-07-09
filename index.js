let resetEl = document.getElementById("reset-el")

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0;
let initialSaveElText = document.getElementById("save-el").textContent;

function increment ()
{ 
 countEl.textContent = count += 1
}


function decrement()
{
  countEl.textContent = count += -1
}

function save ()
{
let countStr = count + " -"
saveEl.textContent += countStr;
countEl.textContent = 0;
count = 0
}

function reset ()
{
countEl.textContent = 0;
saveEl.textContent = initialSaveElText;
}
