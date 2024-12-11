
// generate prefix of name
function genPrefix(firstName) {
    if (firstName.length > 4) {
        return 'The Great'
    } else {
        return "Master"
    }
}

//generate first name of name
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a') {
        return 'Jeff'
    } else if (firstLetter === 'b') {
        return 'Joe'
    } else if (firstLetter === 'c') {
        return 'Chris'
    } else if (firstLetter === 'd') {
        return 'Dana'
    } else {
        return 'Alex'
    }
}

// generate middle name
function getMiddleName(roadType, favColor) {
    if (roadType === 'road') {
        return `${favColor}ridge`
    } else if (roadType === 'street') {
        return `${favColor}land`
    } else if (roadType === 'avenue') {
        return `${favColor}place`
    } else if (roadType === 'court') {
        return `${favColor}field`
    } else {
        return `${favColor}stone`
    }
}

// generate last name
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase()
    if (lastLetter === 'a') {
        return 'Shadow'
    } else if (lastLetter === 'e') {
        return 'Frost'
    } else if (lastLetter === 'i') {
        return 'Thorn'
    } else if (lastLetter === 'o') {
        return 'Thing'
    } else if (lastLetter === 'u') {
        return 'Simp'
    } else {
        return 'Storm'
    }
}
// generate suffix
function genSuffix(favAnimal) {
    return `${favAnimal}`
}

//master function to assemble full name
function genFullName() {
//define variables from inputs
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const favColor = document.getElementById('favColor').value.trim()
    const favAnimal = document.getElementById('favAnimal').value.trim()
    
    // generate each part of name using helper function
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = getMiddleName(roadType, favColor)
    const newlastName = genLastName(lastName)
    const suffix = genSuffix(favAnimal)
}