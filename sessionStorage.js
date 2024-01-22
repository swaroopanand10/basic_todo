const field = document.querySelector('.input')

if (sessionStorage.getItem("inputbox")) {
  if (field.value != '') {
    sessionStorage.removeItem('inputbox')
  }
  field.value = sessionStorage.getItem("inputbox")
}

// Listen for changes in the text field
field.addEventListener("change", () => {
  // And save the results into the session storage object
  sessionStorage.setItem("inputbox", field.value)
})

function divSessionStorage() {
  const alldivs = Array.from(document.querySelectorAll('.item'))
  console.log(alldivs)
  sessionStorage.setItem("items", JSON.stringify(alldivs))
}

function divSessionStoragelistener() {
  const item_container = document.querySelector('.item-container')
  item_container.addEventListener('DOMSubtreeModified', divSessionStorage)
}

function divSessionStoragerestore() {
  const alldivs = (sessionStorage.getItem("items"))
  const item_container = document.querySelector('.item-container')
  console.log(alldivs)
  for (let index = 0; index < alldivs.length; index++) {
    item_container.appendChild(alldivs[index])
  }
}
export { divSessionStoragelistener, divSessionStoragerestore }
