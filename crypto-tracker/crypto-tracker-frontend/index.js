const search = document.querySelector("#search-btn")
const searchInput = document.querySelector("#search-input")
const addNew = document.querySelector("#new-btn")
const modalCreateNew = document.querySelector("#modal-create-new")

search.addEventListener('click', e => {
  // on click, toggle to something else
  if (searchInput.style.width == "0px") {
    searchInput.style.width = "200px"
    searchInput.style.padding = "0 10px"
    search.style.borderRadius = "0 5px 5px 0"
    // also give the searchbtn a border-radius of something
  } else {
    searchInput.style.padding = "0px"
    searchInput.style.width = "0px"
    search.style.borderRadius = "5px"
  }

})

addNew.addEventListener('click', e => {
  if (modalCreateNew.style.display == 'none') {
    modalCreateNew.style.display = 'block'
  } else {
    modalCreateNew.style.display = 'none'
  }
})
