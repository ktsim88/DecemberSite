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
  } else if (birthMonth === "March" && favColor === "white") {
    return `Milk`;
  } else if (birthMonth === "March" && favColor === "black") {
    return `Stock`;
  } else if (birthMonth === "March" && favColor === "red") {
    return `Angus`;
  } else if (birthMonth === "March" && favColor === 'blue') {
    return `Longhorn`;
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
  } else if (birthMonth === "May" && favColor === 'brown') {
    return `Poop`;
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
  } else if (birthMonth === "June" && favColor === 'orange') {
    return `Septa`;
  } else if (birthMonth === "June") {
    return `${favColor}ism`;
    // july (fyi zerose is a fandom name of a group. it's not a typo)
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
  } else if (birthMonth === "Aug" && favColor === 'purple') {
    return `Julieta`;
  } else if (birthMonth === "Aug" && favColor === 'orange') {
    return `Jest`;
  } else if (birthMonth === "Aug") {
    return `${favColor}lake`;
    //september
  } else if (birthMonth === "Sept" && favColor === 'blue') {
    return `Starry`;
  } else if (birthMonth === "Sept" && favColor === 'black') {
    return `Darken`;
  } else if (birthMonth === "Sept" && favColor === 'orange') {
    return `Toxin`;
  } else if (birthMonth === "Sept" && favColor === 'purple') {
    return `Twinkle`;
  } else if (birthMonth === "Sept" && favColor === 'pink') {
    return `Twilight`;
  } else if (birthMonth === "Sept") {
    return `${favColor}light`;
    //october
  } else if (birthMonth === "Oct" && favColor === 'red') {
    return `Candy`;
  } else if (birthMonth === "Oct" && favColor === 'orange') {
    return `Pumpkin`;
  } else if (birthMonth === "Oct" && favColor === 'yellow') {
    return `Sunset`;
  } else if (birthMonth === "Oct" && favColor === 'purple') {
    return `Witch`;
  } else if (birthMonth === "Oct" && favColor === 'grey') {
    return `Ghost`;
  } else if (birthMonth === "Oct" && favColor === 'black') {
    return `Baddie`;
  } else if (birthMonth === "Oct" && favColor === 'blue') {
    return `Nightly`;
  } else if (birthMonth === "Oct") {
    return `${favColor}ly`;
    //november
  } else if (birthMonth === "Nov" && favColor === 'red') {
    return `Turkey`;
  } else if (birthMonth === "Nov" && favColor === 'brown') {
    return `Stuffing`;
  } else if (birthMonth === "Nov" && favColor === 'orange') {
    return `Cranberry`;
  } else if (birthMonth === "Nov" && favColor === 'green') {
    return `Leaf`;
  } else if (birthMonth === "Nov" && favColor === 'white') {
    return `Powder`;
  } else if (birthMonth === "Nov") {
    return `${favColor}feast`;
    //december
  } else if (birthMonth === "Dec" && favColor === "white") {
    return `Snowfall`;
  } else if (birthMonth === "Dec" && favColor === 'red') {
    return `Festive`;
  } else if (birthMonth === "Dec" && favColor === 'yellow') {
    return `Melted`;
  } else if (birthMonth === "Dec" && favColor === 'green') {
    return `Wreath`;
  } else {
    return `${favColor}line`;
  }
}

// generate last name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === "a") {
    return "Arrow";
  } else if (lastLetter === "b") {
    return "Shark";
  } else if (lastLetter === "c") {
    return "Cavar";
  } else if (lastLetter === "d") {
    return "Gold";
  } else if (lastLetter === "e") {
    return "Cheese";
  } else if (lastLetter === "f") {
    return "Frost";
  } else if (lastLetter === "g") {
    return "Glassberry";
  } else if (lastLetter === "h") {
    return "Haetae";
  } else if (lastLetter === "i") {
    return "Icicle";
  } else if (lastLetter === "j") {
    return "Jacket";
  } else if (lastLetter === "k") {
    return "Mode";
  } else if (lastLetter === "l") {
    return "Blossom";
  } else if (lastLetter === "m") {
    return "Nutmeg";
  } else if (lastLetter === "n") {
    return "Flour";
  } else if (lastLetter === "o") {
    return "Coral";
  } else if (lastLetter === "p") {
    return "Pearl";
  } else if (lastLetter === "r") {
    return "Storm";
  } else if (lastLetter === "t") {
    return "Custard";
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
      return `${favAnimal}fish`
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

