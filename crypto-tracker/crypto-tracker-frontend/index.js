const search = document.querySelector("#search-btn")
const addNew = document.querySelector("#new-btn")
const modalCreateNew = document.querySelector("#modal-create-new")

search.addEventListener('click', e => {
  // on click, toggle to something else

})

addNew.addEventListener('click', e => {
  if (modalCreateNew.style.display == 'none') {
    modalCreateNew.style.display = 'block'
  } else {
    modalCreateNew.style.display = 'none'
  }
})
