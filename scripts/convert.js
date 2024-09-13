// Get the main elements
let button = document.getElementById("btn")
let main_content = document.querySelector('.main-section')
let littleSpan = document.createElement('span')
let mainSpan = document.createElement('span')
let divResult = document.createElement('div')
let userValue = document.getElementById("main_value")
let coinValue = document.getElementById("options")


// Regex just enabling numbers on input
userValue.value = userValue.value.replace(/[^0-9.,]/g, ''); // Permite números, vírgulas e pontos


// Function to enable button
function checkConditions() {
    if (userValue.value != "" && coinValue.value != ""){
        button.classList.add('hover-effect')
        button.style.background = '#2F34AB'
        button.removeAttribute("disabled")
        
    } else {
        button.style.background = '#2f33ab36';
        button.setAttribute("disabled", true)
        button.classList.remove('hover-effect')
    }
}

// Add event listeners for both input fields
userValue.addEventListener("input", checkConditions);
coinValue.addEventListener("input", checkConditions);


// Function to optimize coin conditions

function coinReturn(coinName, coinSimbol, coinValue){
    button.innerText = `${coinName} ${coinSimbol} ->  Real R$`
    littleSpan.textContent = `${coinSimbol}1 = R$ ${coinValue.toFixed(2)}`
    mainSpan.textContent = `R$${(userValue.value * coinValue).toFixed(2)}`

}

// Variable Names
let dollarName = 'Dólar Americano'
let euroName = 'Euro'
let libraName = 'Libra Esterlina'
let ieneName = 'Iene'
let suiceName = 'Franco Suíço'
let australianName = 'Dólar Australiano'


// Variable Simbols
let dollarSimbol = 'US$'
let euroSimbol = 'E€'
let libraSimbol = 'L£'
let ieneSimbol = '¥'
let suiceSimbol = 'SFr'
let australianSimbol = 'AU$'


// Main function
button.addEventListener("click", (event) => {
    event.preventDefault()
    divResult.classList.add('result')
    littleSpan.classList.add('littleSpan')
    mainSpan.classList.add('spanClass')
    
    main_content.appendChild(divResult)
    divResult.appendChild(littleSpan)
    divResult.appendChild(mainSpan)

    
    if (coinValue.value === "dol"){
        coinReturn(dollarName, dollarSimbol, brlToUsd)
        // button.innerText = `Dólar Americano US$ ->  Real R$`
        // littleSpan.textContent = `US$1 = R$ ${brlToUsd.toFixed(2)}`
        // mainSpan.textContent = `R$${(userValue.value * brlToUsd).toFixed(2)}`
       
    }

    else if (coinValue.value === "euro"){
        coinReturn(euroName, euroSimbol, brlToEur)
        // button.innerText = `Euro E€ ->  Real R$`
        // littleSpan.textContent = `E€1 = R$ ${brlToEur.toFixed(2)}`
        // mainSpan.textContent = `R$${(userValue.value * brlToEur).toFixed(2)}`
    }

    else if(coinValue.value === "libra"){
        coinReturn(libraName, libraSimbol, brlToGbp)
        // button.innerText = `Libra Esterlina L£ -> Real R$`
        // littleSpan.textContent = `L£1 = R$ ${brlToGbp.toFixed(2)}`
        // mainSpan.textContent = `R$${(userValue.value * brlToGbp).toFixed(2)}`
    }

    else if(coinValue.value === "iene"){
        coinReturn(ieneName, ieneSimbol, brlToJpy)
        // button.innerText = `Iene ¥ -> Real R$`
        // littleSpan.textContent = `¥1 = R$ ${brlToGbp.toFixed(2)}`
        // mainSpan.textContent = `R$${(userValue.value * brlToJpy).toFixed(2)}`
    }

    else if(coinValue.value === "suico"){
        coinReturn(suiceName, suiceSimbol, brlToChf)
        // button.innerText = `Franco Suíço SFr -> Real R$`
        // littleSpan.textContent = `SFr1 = R$ ${brlToGbp.toFixed(2)}`
        // mainSpan.textContent = `R$${(userValue.value * brlToChf).toFixed(2)}`
    }

    else if(coinValue.value === "australian"){
        coinReturn(australianName, australianSimbol, brlToAud)
        // button.innerText = `Dólar Australiano AU$ -> Real R$`
        // littleSpan.textContent = `AU$1 = R$ ${brlToGbp.toFixed(2)}`
        // mainSpan.textContent = `R$${(userValue.value * brlToAud).toFixed(2)}`
    }
    
})


// Disable button initially
button.setAttribute("disabled", true)
// button.classList.remove('hover-effect')



// ---------------------------------------------------------------------
// Getting the coin values
// API CURRENCY
const apiKey = 'cur_live_B9xl9a8lkpVVDH8LKsjH91fJLhtCiCu6fm1B79UC';
const url = `https://api.currencyapi.com/v3/latest?base_currency=BRL&currencies=USD,EUR,GBP,JPY,CHF,AUD`;

let brlToUsd, brlToEur, brlToGbp, brlToJpy, brlToChf, brlToAud;

fetch(url, {
    headers: {
      'apikey': apiKey
    }
  })
  .then(response => response.json())
  .then(data => {
    brlToUsd = 1 / data.data.USD.value;
    brlToEur = 1 / data.data.EUR.value;
    brlToGbp = 1 / data.data.GBP.value;
    brlToJpy = 1 / data.data.JPY.value;
    brlToChf = 1 / data.data.CHF.value;
    brlToAud = 1 / data.data.AUD.value;

    console.log(`1 USD equivale a: R$ ${brlToUsd.toFixed(2)}`);
    console.log(`1 EUR equivale a: R$ ${brlToEur.toFixed(2)}`);
    console.log(`1 GBP equivale a: R$ ${brlToGbp.toFixed(2)}`);
    console.log(`1 JPY equivale a: R$ ${brlToJpy.toFixed(4)}`);
    console.log(`1 CHF equivale a: R$ ${brlToChf.toFixed(2)}`);
    console.log(`1 AUD equivale a: R$ ${brlToAud.toFixed(2)}`);
  })
  .catch(error => console.error('Erro ao obter os dados:', error));


// ---------------------------------------------------------------------