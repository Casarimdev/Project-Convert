// ---------------------------------------------------------------------
// Getting the coin values
// API CURRENCY
// const url = 'https://api.exchangerate.host/latest?base=BRL&symbols=USD,EUR,GBP,JPY,CHF,AUD';

// let brlToUsd, brlToEur, brlToGbp, brlToJpy, brlToChf, brlToAud;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     brlToUsd = data.rates.USD;
//     brlToEur = data.rates.EUR;
//     brlToGbp = data.rates.GBP;
//     brlToJpy = data.rates.JPY;
//     brlToChf = data.rates.CHF;
//     brlToAud = data.rates.AUD;

//     console.log(`1 USD equivale a: R$ ${brlToUsd.toFixed(2)}`);
//     console.log(`1 EUR equivale a: R$ ${brlToEur.toFixed(2)}`);
//     console.log(`1 GBP equivale a: R$ ${brlToGbp.toFixed(2)}`);
//     console.log(`1 JPY equivale a: R$ ${brlToJpy.toFixed(4)}`);
//     console.log(`1 CHF equivale a: R$ ${brlToChf.toFixed(2)}`);
//     console.log(`1 AUD equivale a: R$ ${brlToAud.toFixed(2)}`);
//   })
//   .catch(error => console.error('Erro ao obter os dados:', error));


// ---------------------------------------------------------------------

let brlToUsd = 5.50;  // Exemplo: 1 BRL = 0.20 USD
let brlToEur = 6.12;  // Exemplo: 1 BRL = 0.18 EUR
let brlToGbp = 7.17;  // Exemplo: 1 BRL = 0.16 GBP
let brlToJpy = 0.039; // Exemplo: 1 BRL = 29.72 JPY
let brlToChf = 6.52;  // Exemplo: 1 BRL = 0.19 CHF
let brlToAud = 3.72;  // Exemplo: 1 BRL = 0.31 AUD

// Get the main elements
let button = document.getElementById("btn")
let main_content = document.querySelector('.main-section')
let userValue = document.getElementById("main_value")
let coinValue = document.getElementById("options")
let littleSpan = document.createElement('span')
let mainSpan = document.createElement('span')
let divResult = document.createElement('div')





// Disable button initially
button.setAttribute("disabled", true)


// Function to enable button
function checkConditions() {
    // Regex just enabling numbers on input
    userValue.value = userValue.value.replace(/[^0-9.,]/g, ''); // Permite números, vírgulas e pontos
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
    littleSpan.textContent = `${coinSimbol}1 = R$${coinValue.toFixed(2)}`
    mainSpan.textContent = `${(userValue.value * coinValue).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    })}`

}


// Main function
button.addEventListener("click", (event) => {
    try {
        event.preventDefault()
        divResult.classList.add('result')
        littleSpan.classList.add('littleSpan')
        mainSpan.classList.add('spanClass')
        
        main_content.appendChild(divResult)
        divResult.appendChild(littleSpan)
        divResult.appendChild(mainSpan)
    
        
        switch (coinValue.value) {
            case "dol":
                coinReturn('Dólar Americano', 'US$', brlToUsd);
                break;
            
            case "euro":
                coinReturn('Euro', 'E€', brlToEur);
                break;
        
            case "libra":
                coinReturn('Libra Esterlina', 'L£', brlToGbp);
                break;
        
            case "iene":
                coinReturn('Iene', '¥', brlToJpy);
                break;
        
            case "suico":
                coinReturn('Franco Suíço', 'SFr', brlToChf);
                break;
        
            case "australian":
                coinReturn('Dólar Australiano', 'AU$', brlToAud);
                break;
        
            default:
                console.log("Moeda não reconhecida.");
                break;
        }
    } 
    catch(error){
        console.log(error)
        alert('Não foi possível converter! Verifique os valores ou tente novamente mais tarde...')
    }
   
    
})




