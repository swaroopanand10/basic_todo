import { createRemoveButton } from "./createRemoveButton.js"

function createItem() {
  const new_item = document.createElement('div')
  const itemcontent = createItemContent()
  if (itemcontent) {
    new_item.appendChild(itemcontent)
    new_item.appendChild(createRemoveButton())
    new_item.classList.add('item')
    return new_item
  }
}

function createItemContent() {
  const item_content = document.createElement('div')
  item_content.classList.add('item-content');
  item_content.textContent = retrieveValue()
  if (checkIfEmpty(item_content.textContent)) {
    return item_content
  }
}

function retrieveValue() {
  const input_box = document.querySelector(".input")
  const input_box_value = input_box.value;
  return input_box_value
}

function checkIfEmpty(value) {
  if (value == '') {
    alert("Empty values are not allowed")
    return false
  } else {
    return true
  }
}
export { createItem }
