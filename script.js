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
    return "Follower";
  } else if (firstLetter === "g") {
    return "Goddess";
  } else if (firstLetter === "h") {
    return "Hyper";
  } else if (firstLetter === "i") {
    return "Ice";
  } else if (firstLetter === "j") {
    return "Jacks";
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
  if (birthMonth === 'Jan' && favColor === 'red') {
    return `Hellman`;
  } else if (birthMonth === "Jan" && favColor === "green") {
    return `Evergreen`;
  } else if (birthMonth === "Jan" && favColor === 'blue') {
    return `Snowflake`;
  }  else if (birthMonth === "Jan" && favColor === "yellow") {
    return `Bellyman`;
  } else if (birthMonth === "Jan" && favColor === "white") {
    return `Snowman`;
  } else if (birthMonth === "Jan") {
    return `${favColor}man`;
    // feb
  } else if (birthMonth === "Feb" && favColor === "red") {
    return `Lovelike`;
  } else if (birthMonth === "Feb" && favColor === "green") {
    return `Grendline`;
  } else if (birthMonth === "Feb" && favColor === "white") {
    return `Fakelike`;
  } else if (birthMonth === "Feb" && favColor === "pink") {
    return `Cupidlike`;
  } else if (birthMonth === "Feb" && favColor === "black") {
    return `Emolike`;
  } else if (birthMonth === 'Feb') { 
    return `${favColor}like`
    // march
  } else if (birthMonth === "March" && favColor === "yellow") {
    return `Cattle`;
  } else if (birthMonth === "March" && favColor === "brown") {
    return `Beef`;
  } else if (birthMonth === "March" && favColor === "grey") {
    return `Spots`;
  } else if (birthMonth === "March" && favColor === "black") {
    return `Stock`;
  } else if (birthMonth === "March" && favColor === "red") {
    return `Taboo`;
  } else if (birthMonth === "March") {
    return `${favColor}moo`;
    // april
  } else if (birthMonth === "April" && favColor === 'blue') {
    return `Rainyside`;
  } else if (birthMonth === "April" && favColor === 'purple') {
    return `Boiled`;
  } else if (birthMonth === "April" && favColor === 'orange') {
    return `Yolkside`;
  } else if (birthMonth === "April" && favColor === 'yellow') {
    return `Sunnyside`;
  } else if (birthMonth === "April") {
    return `${favColor}side`;
    // may
  } else if (birthMonth === "May" && favColor === 'orange') {
    return `Tangerine`;
  } else if (birthMonth === "May" && favColor === 'pink') {
    return `Cherrypop`;
  } else if (birthMonth === "May" && favColor === 'red') {
    return `Bloodpop`;
  } else if (birthMonth === "May" && favColor === 'blue') {
    return `Berrypop`;
  } else if (birthMonth === "May" && favColor === 'yellow') {
    return `Toxicpop`;
  } else if (birthMonth === "May") {
    return `${favColor}pop`;
    // june
  } else if (birthMonth === "June" && favColor === 'purple') {
    return `Hexa`;
  } else if (birthMonth === "June" && favColor === 'white') {
    return `Triangular`;
  } else if (birthMonth === "June" && favColor === 'pink') {
    return `Penta`;
  } else if (birthMonth === "June" && favColor === 'black') {
    return `Deca`;
  } else if (birthMonth === "June") {
    return `${favColor}ism`;
    // july
  } else if (birthMonth === "July" && favColor === 'red') {
    return `Rose`;
  } else if (birthMonth === "July" && favColor === 'white') {
    return `Zerose`;
  } else if (birthMonth === "July" && favColor === 'yellow') {
    return `Tulip`;
  } else if (birthMonth === "July" && favColor === 'purple') {
    return `Lilac`;
  } else if (birthMonth === "July") {
    return `${favColor}bloom`;
    //august
  } else if (birthMonth === "Aug" && favColor === 'red') {
    return `Romeo`;
  } else if (birthMonth === "Aug" && favColor === 'grey') {
    return `Sword`;
  } else if (birthMonth === "Aug" && favColor === 'black') {
    return `Romantic`;
  } else if (birthMonth === "Aug" && favColor === 'pink') {
    return `Juliet`;
  } else if (birthMonth === "Aug" && favColor === 'white') {
    return `Jest`;
  } else if (birthMonth === "Aug") {
    return `${favColor}meo`;
    //september
  } else if (birthMonth === "Sept") {
    return `${favColor}p`;
    //october
  } else if (birthMonth === "Oct") {
    return `${favColor}like`;
    //november
  } else if (birthMonth === "Nov") {
    return `${favColor}q`;
    //december
  } else if (birthMonth === "Dec" && favColor === "white") {
    return `snow`;
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
// generate suffix (will use switch case here)
function genSuffix(favAnimal) {
  const endAnimal = favAnimal.charAt(favAnimal.length - 1).toLowerCase();
  switch (endAnimal) {
    case 'a':
      return `${favAnimal}ian`;
    case 'e':
      return `${favAnimal}yz`
    case 'h':
      return `${favAnimal}tailz`
    case 'i':
      return `${favAnimal}wan`
    case 'o':
      return `${favAnimal}'ed`
    case 'u':
      return `${favAnimal}uuu~`
    default:
      return `${favAnimal}ish`
  } 
}

//master function to assemble full name
function getFullName() {
  //define variables from inputs
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const birthMonth = document.getElementById("birthMonth").value;
  const favColor = document.getElementById("favColor").value;
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

