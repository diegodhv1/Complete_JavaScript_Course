
function sum(...args){
  var suma=0;
  args.map(curr => {suma += curr});
  console.log(suma);
  
}

function glober5(name2, position="Web IU") {
  this.name2 = name2;
  this.position=position;
}

let ages = [15,60,12,11,19,21];
let numbers = [15,60,12];
sum(ages);

let diego = new glober5("Diego","PM");

let name = "andres";


class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
  presentation(){
    return `Hi, my name is ${this.name} ${this.lastname}`;
  }
}

class Glober6 extends Person {

  constructor(name, lastname, position="Web UI"){
    super(name,lastname);
    this.position=position;
  }

  getPosition(){
    return `My position in Globant is ${this.position}`;
  }
}

let glober6 =  new Glober6("Diego","Perez","PM");
console.log(glober6.presentation() + " and " + glober6.getPosition());


