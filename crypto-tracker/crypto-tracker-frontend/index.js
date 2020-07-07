const search = document.querySelector("#search-btn")
const searchInput = document.querySelector("#search-input")
const searchInputInner = document.querySelector("#search-input-inner")
const searchContainer = document.querySelector("#search-input-outer")

const addNew = document.querySelector("#new-btn")
const modalCreateNew = document.querySelector("#modal-create-new")
const main = document.querySelector('main')
const cardsContainer = document.querySelector('#modal-card-container')

search.addEventListener('click', e => {
  if (searchContainer.style.width == "350px") {
    searchContainer.style.width = "0px"
  } else {
    searchContainer.style.width = "350px"
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
