import inquirer from 'inquirer';
const jsonfile = require("jsonfile")

const file = "./data.json"

let obj = {} 

async function start() 
  inquirer.prompt([
    {
      type: "list",
      name: "prize",
      message: "Select a prize",
      choices: ["cake", "fries"]
    }
  ])
  .then((answers) => { 
    console.log(JSON.stringify(answers, null, "  "));
  });
    
}
start()




function create() {
  var vorname = prompt("Vorname:")
  var nachname = prompt("Nachname:")
  var alter = prompt("Alter:")
  var alterNum = parseInt(alter)
  var newOBJ = jsonfile.readFileSync(file)
  if(newOBJ[vorname.toLowerCase()] ){
    console.log(`${vorname} gibt es bereits in der Datenbank`)
    return 1
  }
  newOBJ[vorname.toLowerCase()] = {
    "vorname": vorname.toLowerCase(),
    "nachname": nachname.toLowerCase(),
    "alter": alterNum
  }
  jsonfile.writeFileSync(file, newOBJ)
  return 1
} 
function get(){
  var search = prompt("Gebe den Vornamen ein")
  const data = jsonfile.readFileSync(file)
  
  const newName = data[search.toLowerCase()]
  var vorname = newName.vorname.charAt(0).toUpperCase() + newName.vorname.slice(1)
  var nachname = newName.nachname.charAt(0).toUpperCase() + newName.nachname.slice(1)
  console.log(`${vorname} ${nachname} ist ${newName.alter} Jahre alt.`)
  return 1
  
}
