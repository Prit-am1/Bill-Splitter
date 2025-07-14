// Attaching event listener to Bill input container
catchCls(".input-container").addEventListener("input", (e) => {
    flag = false;
    currentState();
    e.stopPropagation();
});

// Attaching event listener to Tip container
catchCls(".tip-container").addEventListener("click", (e) => {
    catchCls(".custom-tip").disabled = true;
    catchCls(".custom-tip").value = null;
    tipValue = Number(e.target.value);
    e.stopPropagation();
});

// Attaching event listener to Bill generator button
catchCls(".generate-bill-btn").addEventListener("click", (e) => {
    const billAmount = Number(Number(catchCls("#bill-amount").value).toFixed(2));
    const customTip = Number(catchCls(".custom-tip").value);
    const people = parseInt(catchCls(".number-of-people").value);
    const tip = (tipValue !== 0) ? tipValue : customTip;
    catchCls(".tip-amount span").innerText = ((billAmount * tip)/100).toFixed(2);
    catchCls(".total span").innerText = (billAmount + (billAmount * tip)/100).toFixed(2);
    catchCls(".each-person-bill span").innerText = (billAmount + (billAmount * tip)/100)/people.toFixed(2);
    e.stopPropagation();
});

// Attaching event listener to Reset button
catchCls(".reset-btn").addEventListener("click", (e) => {
    flag = true;
    currentState();
    e.stopPropagation();
});


// Function to catch element by class
function catchCls(cls) {
    return document.querySelector(cls);
}

// Global variable to maintain flag value
let flag = true;

// Variable to store tip value
let tipValue = 0;

// Function to disable/enable buttons and input fields
function currentState() {
    if(!flag) {
        catchCls(".tip-container").classList.remove("disabled");
        catchCls(".custom-tip").disabled = false;
        catchCls(".number-of-people").disabled = false;
        catchCls(".generate-bill-btn").disabled = false;
        catchCls(".reset-btn").disabled = false;
    }
    else {
        catchCls("#bill-amount").value = null;
        tipValue = null;
        catchCls(".custom-tip").value = null;
        catchCls(".number-of-people").value = null;
        catchCls(".tip-container").classList.add("disabled");
        catchCls(".custom-tip").disabled = true;
        catchCls(".number-of-people").disabled = true;
        catchCls(".generate-bill-btn").disabled = true;
        catchCls(".reset-btn").disabled = true;
        catchCls(".tip-amount span").innerText = null;
        catchCls(".total span").innerText = null;
        catchCls(".each-person-bill span").innerText = null;
    }
}