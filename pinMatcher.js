//Random four digit generator
let fourDigit = 0;
const pinGenerate = document
  .getElementById("generate")
  .addEventListener("click", function () {
    fourDigit = Math.floor(Math.random() * 9000 + 999);
    document.getElementById("random-digit").value = fourDigit;
  });

//Button number store and showing to user
let storeInputNumber = "";

const btnClick7 = document
  .getElementById("btn-7")
  .addEventListener("click", function () {
    storeInputNumber += document.getElementById("btn-7").innerText;
    document.getElementById("user-input").value = storeInputNumber;
    document.getElementById("matched").style.display = "none";
    document.getElementById("not-matched").style.display = "none";
  });
const btnClick8 = document
  .getElementById("btn-8")
  .addEventListener("click", function () {
    storeInputNumber += document.getElementById("btn-8").innerText;
    document.getElementById("user-input").value = storeInputNumber;
    document.getElementById("matched").style.display = "none";
    document.getElementById("not-matched").style.display = "none";
  });
const btnClick9 = document
  .getElementById("btn-9")
  .addEventListener("click", function () {
    storeInputNumber += document.getElementById("btn-9").innerText;
    document.getElementById("user-input").value = storeInputNumber;
    document.getElementById("matched").style.display = "none";
    document.getElementById("not-matched").style.display = "none";
  });
const btnClick4 = document
  .getElementById("btn-4")
  .addEventListener("click", function () {
    storeInputNumber += document.getElementById("btn-4").innerText;
    document.getElementById("user-input").value = storeInputNumber;
    document.getElementById("matched").style.display = "none";
    document.getElementById("not-matched").style.display = "none";
  });
const btnClick5 = document
  .getElementById("btn-5")
  .addEventListener("click", function () {
    storeInputNumber += document.getElementById("btn-5").innerText;
    document.getElementById("user-input").value = storeInputNumber;
    document.getElementById("matched").style.display = "none";
    document.getElementById("not-matched").style.display = "none";
  });
const btnClick6 = document
  .getElementById("btn-6")
  .addEventListener("click", function () {
    storeInputNumber += document.getElementById("btn-6").innerText;
    document.getElementById("user-input").value = storeInputNumber;
    document.getElementById("matched").style.display = "none";
    document.getElementById("not-matched").style.display = "none";
  });
const btnClick1 = document
  .getElementById("btn-1")
  .addEventListener("click", function () {
    storeInputNumber += document.getElementById("btn-1").innerText;
    document.getElementById("user-input").value = storeInputNumber;
    document.getElementById("matched").style.display = "none";
    document.getElementById("not-matched").style.display = "none";
  });
const btnClick2 = document
  .getElementById("btn-2")
  .addEventListener("click", function () {
    storeInputNumber += document.getElementById("btn-2").innerText;
    document.getElementById("user-input").value = storeInputNumber;
    document.getElementById("matched").style.display = "none";
    document.getElementById("not-matched").style.display = "none";
  });
const btnClick3 = document
  .getElementById("btn-3")
  .addEventListener("click", function () {
    storeInputNumber += document.getElementById("btn-3").innerText;
    document.getElementById("user-input").value = storeInputNumber;
    document.getElementById("matched").style.display = "none";
    document.getElementById("not-matched").style.display = "none";
  });
const btnClick0 = document
  .getElementById("btn-0")
  .addEventListener("click", function () {
    storeInputNumber += document.getElementById("btn-0").innerText;
    document.getElementById("user-input").value = storeInputNumber;
  });

//Removing numbers
const remove1 = document
  .getElementById("btn-<")
  .addEventListener("click", function () {
    if (storeInputNumber !== "") {
      storeInputNumber = storeInputNumber.slice(0, storeInputNumber.length - 1);
    }
    document.getElementById("user-input").value = storeInputNumber;
    document.getElementById("matched").style.display = "none";
    document.getElementById("not-matched").style.display = "none";
  });

const remove2 = document
  .getElementById("btn-C")
  .addEventListener("click", function () {
    if (storeInputNumber !== "") {
      document.getElementById("user-input").value = "";
      storeInputNumber = "";
    }
    document.getElementById("matched").style.display = "none";
    document.getElementById("not-matched").style.display = "none";
  });

//Submit button code
let num = 3;
const submit = document
  .getElementById("submit-btn")
  .addEventListener("click", function () {
    if (fourDigit == storeInputNumber) {
      document.getElementById("matched").style.display = "block";
    } else if (storeInputNumber === "") {
      document.getElementById("matched").style.display = "block";
      num -= 1;
      document.getElementById("try").innerText = `${num} try left`;
      if (num === 0) {
        alert("Try limit exceeded! Try again?");
        document.getElementById("try").innerText = `${3} try left`;
        num = 3;
      }
    } else {
      document.getElementById("not-matched").style.display = "block";
      num -= 1;
      document.getElementById("try").innerText = `${num} try left`;
      if (num === 0) {
        alert("Try limit exceeded! Try again?");
        document.getElementById("try").innerText = `${3} try left`;
        num = 3;
      }
    }
  });
