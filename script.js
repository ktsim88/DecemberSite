// generate prefix of name
function genPrefix(firstName) {
  if (firstName.length > 4) {
    return "Legendary";
  } else {
    return "Infamous";
  }
}

//generate first name of name
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  if (firstLetter === "a") {
    return "Applejack";
  } else if (firstLetter === "c" || firstLetter === 'b') {
    return "Child";
  } else if (firstLetter === "d") {
    return "Donut";
  } else if (firstLetter === "e") {
    return "Elsa";
  } else if (firstLetter === "f") {
    return "Fish";
  } else if (firstLetter === "g") {
    return "Goddess";
  } else if (firstLetter === "h") {
    return "Hyper";
  } else if (firstLetter === "i") {
    return "Ice";
  } else if (firstLetter === "j") {
    return "Justin";
  } else if (firstLetter === "k") {
    return "Knight";
  } else if (firstLetter === "l") {
    return "Loser";
  } else if (firstLetter === "m") {
    return "Macaron";
  } else if (firstLetter === "n") {
    return "Noodle";
  } else if (firstLetter === "o") {
    return "Old";
  } else if (firstLetter === "p") {
    return "Poison";
  } else if (firstLetter === "q") {
    return "Cotton";
  } else if (firstLetter === "r") {
    return "Raddish";
  } else if (firstLetter === "s") {
    return "Strawberry";
  } else if (firstLetter === "t") {
    return "Twizzler";
  } else {
    return "Vampire";
  }
}

// generate middle name
function getMiddleName(birthMonth, favColor) {
  // month with color
  if (birthMonth === 'Jan') {
    return `Bluey`;
  } else if (birthMonth === "February" && favColor === "green") {
    return `Grendline`;
  } else if (birthMonth === 'March') { 
    return `${favColor}line`
  } else if (birthMonth === "April") {
    return `${favColor}land`;
  } else if (birthMonth === "May") {
    return `${favColor}place`;
  } else if (birthMonth === "June") {
    return `${favColor}field`;
  } else if (birthMonth === "July") {
    return `${favColor}field`;
  } else if (birthMonth === "Aug") {
    return `${favColor}field`;
  } else {
    return `${favColor}stone`;
  }
}

// generate last name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === "a") {
    return "Shadow";
  } else if (lastLetter === "e") {
    return "Frost";
  } else if (lastLetter === "i") {
    return "Thorn";
  } else if (lastLetter === "o") {
    return "Thing";
  } else if (lastLetter === "u") {
    return "Storm";
  } else { 
    return "Simp";
  }
}
// generate suffix
function genSuffix(favAnimal) {
  if (favAnimal === 'dog' || favAnimal === 'cat') {
    return 'Swamp'
  } else if (favAnimal === 'bat'){
    return 'Pumpkin'
  } else {
    return `${favAnimal}`
  }
}

//master function to assemble full name
function getFullName() {
  //define variables from inputs
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const birthMonth = document.getElementById("birthMonth").value;
  const favColor = document.getElementById("favColor").value.trim();
  const favAnimal = document.getElementById("favAnimal").value.trim();

  // generate each part of name using helper function
  const prefix = genPrefix(firstName);
  const newFirstName = genFirstName(firstName);
  const middleName = getMiddleName(birthMonth, favColor);
  const newlastName = genLastName(lastName);
  const suffix = genSuffix(favAnimal);

  // capitalize words
  const capitalizePrefix = capitalize(prefix);
  const capitalizeFirstName = capitalize(newFirstName);
  const capitalizeMiddleName = capitalize(middleName);
    const capitalizeLastName = capitalize(newlastName);
    const capitalizeSuffix = capitalize(suffix)
    
    
// combine into final name
const fullName = `${capitalizePrefix} ${capitalizeFirstName} ${capitalizeMiddleName} ${capitalizeLastName} ${capitalizeSuffix} Cookie`;

document.getElementById("result").textContent = fullName;
}


// capitalzer function
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

