const buyClay = () => {
    const clay = {}
    return clay
}

const makePottery = (clay) => {
    clay.shape = 'bowl'
    return clay
}

const bisqueFire = (shapedClay) => {
    shapedClay.readyForGlazing = true;
    return shapedClay
}

const glazePottery = (objReadyForGlazing) => {
    if (objReadyForGlazing.readyForGlazing) {
        objReadyForGlazing.glazing = 'Midnight Blue'
    } else {
        console.log('Make sure you bisque fire the pottery before you glaze it.')
    }
    return objReadyForGlazing
}

const finalFiring = (glazedObj, temperature) => {
    if (temperature > 1200) {
        glazedObj.cracked = true
    } else {
        glazedObj.cracked = false
    }
    return glazedObj
}

const makeBowl = () => {
    const newClay = buyClay()
    const newShape = makePottery(newClay)
    const newReadyForGlazing = bisqueFire(newShape)
    const newGlazed = glazePottery(newReadyForGlazing)
    // const firedPottery1400 = finalFiring(newGlazed, 1400)
    // console.log(firedPottery1400)

    const firedPottery1200 = finalFiring(newGlazed, 1200)
    console.log(firedPottery1200)
}

// check output
makeBowl()
