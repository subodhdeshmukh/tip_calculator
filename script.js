// theme change
let black = document.getElementById("black");
let white = document.getElementById("white");
let container = document.getElementsByClassName("container")[0];
let input = document.querySelectorAll(".input")

// event on buttons
black.addEventListener('click', () => {

    document.body.setAttribute("style", "color:white; background:black");
    container.style.backgroundColor = "black";
    container.style.transition = "0.5s";
    // input.style.color  = "red";
});

white.addEventListener('click', () => {

    document.body.setAttribute("style", "color:black; background:rgb(253, 253, 253)");
    container.style.backgroundColor = "white";
    container.style.transition = "0.5s";
    // input.style.color  = "red";
});

// Tip calculator
let bill_amt = document.getElementById("bill_amt");
let tip_per = document.getElementById("tip_per");
let tip_amt = document.getElementById("tip_amt");
let tot_bill = document.getElementById("tot_bill");

// alert msges
let bill_msg = document.getElementById("bill_msg");
let tip_msg = document.getElementById("tip_msg");


function btn() {
    bill = bill_amt.value;
    tip = tip_per.value;


    // bill amount validation
    if (bill === "") {
        bill_msg.style.display = "block";
        bill_msg.innerHTML = " *Plz enter bill amount";
        return false;
    }
    if (!(bill >= 0) && !(bill <= 9)) {
        bill_msg.style.animation = "span 2s"
        bill_msg.innerHTML = "*Plz enter bill amount in numbers only"; 
        return false;
    }
    // console.log(bill);



    // Tip validation
    if (tip === "") {
        bill_msg.style.display = "none";
        bill_msg.innerHTML = ""

        tip_msg.style.display = "block";
        tip_msg.innerHTML = "*Plz enter tip in percentage";
        return false;
    }
    if (!(tip >= 0) && !(tip <= 9)) {
        tip_msg.style.animation = "span 2s"
        tip_msg.innerHTML = "*Plz enter tip in numbers only"
        return false;
    }
    // console.log(tip);
    
    tip_msg.style.display = "none";
    tip_msg.innerHTML = ""

    // calculate tip value
    tip_amt.value = (Number(bill_amt.value) / 100) * Number(tip_per.value);

    //calculate total bill amount
    tot_bill.value = Number(bill_amt.value) + Number(tip_amt.value)
}
