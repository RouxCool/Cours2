export const validateAge = (ageInput, ageError) => {
  const ageValue = ageInput.value?.trim();
  if (ageValue === '') {
    ageError.textContent = 'Champ obligatoire';
  } else if (isNaN(ageValue) || parseInt(ageValue) < 0) {
    ageError.textContent = 'Âge invalide';
  } else {
    ageError.textContent = '';
  }
};
