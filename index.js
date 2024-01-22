import { createItem } from "./createItem.js"
const add_button = document.querySelector(".add")
add_button.addEventListener("click", addItem)

function addItem() {
  const item_container = document.querySelector('.item-container')
  const item = createItem()
  if (item) {
    item_container.appendChild(item)
  }else{
    console.log("no value provided in input box")
  }
}

