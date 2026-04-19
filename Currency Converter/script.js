const base_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select")

const button = document.querySelector("form button");

const msg = document.querySelector(".msg");

const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");

for (let select of dropdowns)
{
    for (let currCode in countryList)
    {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name==="from" && currCode=="USD")
        {
            newOption.selected= "selected";
        }
        else  if(select.name==="to" && currCode=="PKR")
        {
            newOption.selected= "selected";
        }

        select.append(newOption);

        select.addEventListener("change",(evt)=>
        {
            updateFlag(evt.target);
        })
    }
}

const updateFlag= (element)=>
{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

button.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;

    if (amountValue === "" || amountValue < 1) {
        amountValue = 1;
        amount.value = "1";
    }

    const from = fromCurrency.value.toLowerCase();
    const to = toCurrency.value.toLowerCase();

    const URL = `${base_URL}/${from}.json`;

    try {
        let response = await fetch(URL);
        let data = await response.json();

        let rate = data[from][to];

        let finalResult = (rate * amountValue).toFixed(2);

        msg.innerText = `${amountValue} ${fromCurrency.value} = ${finalResult} ${toCurrency.value}`;
    } catch (error) {
        msg.innerText = "Failed to fetch conversion rate.";
        console.error(error);
    }
});
