const washBtn = document.getElementById("washBtn")
const mowBtn = document.getElementById("mowBtn")
const pullBtn = document.getElementById("pullBtn")
const invoiceEl = document.getElementById("invoice")
let pullTest = document.getElementById('pullTest')
// Totals
let allServices = []
let allCosts = []

const totalCash = document.getElementById("totalCash")
let serviceTest = document.getElementsByClassName(".service")

// Strings
let servicesEl = document.getElementById("servicesContainer")
let service = document.getElementById('service')
let costsEl = document.getElementById("costsContainer")
let allElements = document.getElementsByClassName(".allElements")
let removeService = document.getElementById('removeService')

washBtn.addEventListener("click", function() {
     {
         allServices.push('Car wash')
         allCosts.push(10)
         renderCosts()
   servicesEl.innerHTML +=
        `<div class="allElements" id="washTest">
            <p class="service" id="removeWash">Car wash</p>
            <p class="remove-Btn" id="removeBtnWash" onclick="removeWash()">Remove</p>
            <p class="price" id='removePriceWash'>$10</p>
    </div>`
    washBtn.disabled = true
}})

function removeWash() {
    let washTest = document.getElementById("washTest")
washTest.remove()
allCosts.push(-10)
renderCosts()
washBtn.disabled = false
}

mowBtn.addEventListener("click", function() {
     
         allServices.push('Mow lawn')
         allCosts.push(20)
         renderCosts()
   servicesEl.innerHTML +=
        `<div class="allElements" id="mowTest">
            <p class="service" id="removeMow">Mow lawn</p>
            <p class="remove-Btn" id="removeMow" onclick="removeMow()">Remove</p>
            <p class="price">$20</p>
    </div>`
    mowBtn.disabled = true
})

function removeMow() {
    let mowTest = document.getElementById("mowTest")
mowTest.remove()
allCosts.push(-20)
renderCosts()
mowBtn.disabled = false

 }
pullBtn.addEventListener("click", function() {
         allServices.push('Pull weeds')
         allCosts.push(30)
         renderCosts()
   servicesEl.innerHTML +=
        `<div class="allElements" id="pullTest">
            <p class="service" id="servicePull">Pull weeds</p>
            <p class="remove-Btn" id="removePull" onclick="removePull()">Remove</p>
            <p class="price" id="pricePull">$30</p>
    </div>`
    pullBtn.disabled = true
})

function removePull() {
    let pullTest = document.getElementById("pullTest")
pullTest.remove()
allCosts.push(-30)
renderCosts()
pullBtn.disabled = false

 }

 function sendInvoice() {
     servicesEl.innerHTML = ''
    costsEl.innerHTML = ''
    totalCash.innerHTML = ''
    allServices = []
    allCosts = []
    washBtn.disabled = false
    mowBtn.disabled = false
    pullBtn.disabled = false
    }

function renderCosts() {
    let sum = 0
    for (let i=0; i < allCosts.length ; i++){
     sum += allCosts[i]
     totalCash.innerHTML = '$' +sum }}


 