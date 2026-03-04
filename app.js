
const baseUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector(" form button");
const msg = document.querySelector(".msg");




for (let select of dropdowns) {
    for (code in countryList) {
        let option = document.createElement("option");
        option.value = code;
        // option.innerText = `${countryList[code]} (${code.toUpperCase()})`;
        option.innerText = code;

        if (code === "USD" && select.name === "from") {
            option.selected = true;
        }
        if (code === "INR" && select.name === "to") {
            option.selected = true;
        }
        select.appendChild(option);
    }
    select.addEventListener("change", (e) => {
        updateFlag(e.target);
        updateExchangeRate();
    });
};



const updateFlag = (selectElement) => {
    // console.log(selectElement);
    let currencyCode = selectElement.value;
    let countryCode = countryList[currencyCode];
    // console.log(currencyCode);
    // console.log(countryCode);

    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let imgTag = selectElement.parentElement.querySelector("img");
    imgTag.src = newSrc;
};
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let  amountValue = amount.value;
    if (amountValue === "" || amountValue <= 0) {
        amount.value = "1";
        amountValue = 1;
    }
    let fromCurrency = dropdowns[0].value.toLowerCase();
    let toCurrency = dropdowns[1].value.toLowerCase();

    console.log(amountValue, fromCurrency, toCurrency);
    
    const url = `${baseUrl}/${fromCurrency}.json`;
    // console.log(url);

    let response = await fetch(url);
    let data = await response.json();
    // console.log(response);
    // console.log(data[fromCurrency][toCurrency]);

    let rate = data[fromCurrency][toCurrency];

    let finalAmount = (amountValue * rate).toFixed(2);

    msg.innerText = `${amountValue} ${fromCurrency.toUpperCase()} = ${finalAmount} ${toCurrency.toUpperCase()}`;
};

window.addEventListener("load",  () => {
    updateExchangeRate();
});

button.addEventListener("click", (event) => {
    event.preventDefault();
    updateExchangeRate();
});



