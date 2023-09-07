export const validatePrenom = (prenomInput, prenomError) => {
  const prenomValue = prenomInput.value?.trim();
  if (prenomValue === '') {
    prenomError.textContent = 'Champ obligatoire';
  } else {
    prenomError.textContent = '';
  }
};