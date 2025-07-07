class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName
  }
}


const petNameInput = document.getElementById('petname')
const ownerNameInput = document.getElementById('ownername')
const speciesInput = document.getElementById('species')
const breedInput = document.getElementById('Breed')
const formElement = document.getElementById('rubrica-form')
const petListContainer = document.getElementById('pet-list')


formElement.addEventListener('submit', function (e) {
  e.preventDefault()

    const nuovoPet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  )


  console.log('Ho creato un nuovo animale:', nuovoPet)

  
  const petCard = document.createElement('div')
  petCard.classList.add('card', 'mt-3', 'p-3')
  petCard.innerHTML = `
    <h5>${nuovoPet.petName}</h5>
    <p>Padrone:</strong> ${nuovoPet.ownerName}</p>
    <p>Specie:</strong> ${nuovoPet.species}</p>
    <p>Razza:</strong> ${nuovoPet.breed}</p>
  `


  petListContainer.appendChild(petCard)


  formElement.reset()
})