export const validateName = (nameInput, nameError) => {
  const nameValue = nameInput.value?.trim();
  if (nameValue === '') {
    nameError.textContent = 'Champ obligatoire';
  } else {
    nameError.textContent = '';
  }
};
