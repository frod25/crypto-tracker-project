const search = document.querySelector("#search-btn")
const searchInput = document.querySelector("#search-input")
const searchInputContainer = document.querySelector("#search-input-container")
const addNew = document.querySelector("#new-btn")
const modalCreateNew = document.querySelector("#modal-create-new")
const main = document.querySelector('main')
const cardsContainer = document.querySelector('#modal-card-container')

search.addEventListener('click', e => {
  if (searchInputContainer.style.width == "350px") {
    searchInput.style.width = "0px"
    searchInputContainer.style.width = "0px"
    searchInputContainer.style.display = "none"
    searchInputContainer.classList = ""
  } else {
    searchInputContainer.classList = "search-input-pseudo"
    searchInputContainer.style.width = "350px"
    searchInput.style.width = "350px"
    searchInputContainer.style.display = "block"
  }
})

searchInput.addEventListener('input', e => {
  // our filter function goes here so it narrows down
  // this doesn't need to submit anything
})

addNew.addEventListener('click', e => {

  if (modalCreateNew.style.display == 'block') {
    cardsContainer.style.display = 'block'
    modalCreateNew.style.display = 'none'
    // also toggle the show all here
  } else {
    cardsContainer.style.display = 'none'
    modalCreateNew.style.display = 'block'
  }
})
