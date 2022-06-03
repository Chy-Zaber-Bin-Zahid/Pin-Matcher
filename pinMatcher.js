//Random four digit generator
let fourDigit = 0;
const pinGenerate = document
  .getElementById("generate")
  .addEventListener("click", function () {
    fourDigit = Math.floor(Math.random() * 9000 + 999);
    document.getElementById("random-digit").value = fourDigit;
    hide();
    document.getElementById("try").innerText = `${3} try left`;
    num = 3;
  });

//Button number store and showing to user
let storeInputNumber = "";

function store(classStr) {
  storeInputNumber += document.getElementById(classStr).innerText;
  document.getElementById("user-input").value = storeInputNumber;
  hide();
}

const btnClick7 = document
  .getElementById("btn-7")
  .addEventListener("click", function () {
    store("btn-7");
  });
const btnClick8 = document
  .getElementById("btn-8")
  .addEventListener("click", function () {
    store("btn-8");
  });
const btnClick9 = document
  .getElementById("btn-9")
  .addEventListener("click", function () {
    store("btn-9");
  });
const btnClick4 = document
  .getElementById("btn-4")
  .addEventListener("click", function () {
    store("btn-4");
  });
const btnClick5 = document
  .getElementById("btn-5")
  .addEventListener("click", function () {
    store("btn-5");
  });
const btnClick6 = document
  .getElementById("btn-6")
  .addEventListener("click", function () {
    store("btn-6");
  });
const btnClick1 = document
  .getElementById("btn-1")
  .addEventListener("click", function () {
    store("btn-1");
  });
const btnClick2 = document
  .getElementById("btn-2")
  .addEventListener("click", function () {
    store("btn-2");
  });
const btnClick3 = document
  .getElementById("btn-3")
  .addEventListener("click", function () {
    store("btn-3");
  });
const btnClick0 = document
  .getElementById("btn-0")
  .addEventListener("click", function () {
    store("btn-0");
  });

//Removing numbers
const remove1 = document
  .getElementById("btn-<")
  .addEventListener("click", function () {
    if (storeInputNumber !== "") {
      storeInputNumber = storeInputNumber.slice(0, storeInputNumber.length - 1);
    }
    document.getElementById("user-input").value = storeInputNumber;
    hide();
  });

const remove2 = document
  .getElementById("btn-C")
  .addEventListener("click", function () {
    if (storeInputNumber !== "") {
      document.getElementById("user-input").value = "";
      storeInputNumber = "";
    }
    hide();
  });

//Submit button code
let num = 3;
const submit = document
  .getElementById("submit-btn")
  .addEventListener("click", function () {
    if (fourDigit == storeInputNumber && fourDigit !== 0) {
      document.getElementById("matched").style.display = "block";
    } else if (storeInputNumber === "") {
      wrongAns();
    } else {
      wrongAns();
    }
  });

//hide
function hide() {
  document.getElementById("matched").style.display = "none";
  document.getElementById("not-matched").style.display = "none";
}

//wrong
function wrongAns() {
  document.getElementById("not-matched").style.display = "block";
  num -= 1;
  document.getElementById("try").innerText = `${num} try left`;
  if (num === 0) {
    document.getElementById("try").innerText = `${num} try left`;
    alert("Try limit exceeded! Try again?");
    document.getElementById("try").innerText = `${3} try left`;
    num = 3;
  }
}
