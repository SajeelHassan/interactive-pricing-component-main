const slider = document.getElementById('what-range')
const price = document.getElementById('price-mnly')

const viewsOnPrice = document.getElementById('t-count')
slider.addEventListener('click', mUpRange)
slider.addEventListener('onTouch', mUpRange)
const toggler = document.getElementById('toggler-chkbox')

toggler.addEventListener('click', mUpRange)

function mUpRange(e) {
    setPricing(slider.value)

}
function setPricing(val) {
    // These slidervalues are dummy according to step value [index.html] in slider
    let sliderValues = ['0', '25', '50', '75', '100']
    let prices = ['8.00', '12.00', '16.00', '24.00', '36.00']
    let views = ['10K', '50K', '100K', '500K', '1M']
    for (let i = 0; i < prices.length; i++) {

        if (sliderValues[i] === val) {
            if (isYearly() == true) {
                price.innerHTML = `$${yearlyPrice(prices[i])}`
            }
            else {
                price.innerHTML = `$${prices[i]}`
            }

            viewsOnPrice.innerHTML = `${views[i]} PAGEVIEWS`
            slider.style.background = `linear-gradient(90deg,hsl(174, 77%, 80%) ${sliderValues[i]}%,hsl(224, 65%, 95%) ${sliderValues[i]}%)`

            break;
        }
    }
}
function isYearly() {
    if (toggler.checked != true) {
        return false
    }
    return true

}
function yearlyPrice(price) {
    let yPrice = Number(price)
    yPrice = yPrice - ((yPrice * 25) / 100)
    return yPrice.toFixed(2)
}
