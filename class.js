class User {

constructor(_firstName,_lastName,_age,_location) {

    this.firstName=_firstName
     this.lastName=_lastName
      this.age=_age
       this.location=_location
}
}


compareAge = function () { if (x.age > y.age ) {
return `Michael é piú vecchio di Jason`
} else { return `Jason é piú vecchio di Michael`}
   
}

const x = new User(
  'Michael',
  'Myers',
  67,
  'Haddonfield',
)


const y = new User(
  'Jason',
  'Voorhees',
  79,
  'New Jersey',
)




/*
const cane1 = new Pet (
'Bob',
'Kevin',
'Canide',
'Dalmata',
)

const cane2 = new Pet (
'Lili',
'Kevin',
'Canide',
'Pitbull',
)

const gatto1 = new Pet (
'John',
'Laura',
'Felino',
'British short air',
)

const gatto2 = new Pet (
'pablo',
'Jessica',
'Felino',
'Sphinx',
)
*/



console.log(compareAge())