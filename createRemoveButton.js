function createRemoveButton() {
  const delete_button = document.createElement('button');
  delete_button.textContent = "";
  delete_button.classList.add('remove-button');
  delete_button.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });
  return delete_button;
}

export { createRemoveButton }
