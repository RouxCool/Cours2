export const validateEmail = (emailInput, emailError) => {
  const emailValue = emailInput.value?.trim();
  if (emailValue === '') {
    emailError.textContent = 'Champ obligatoire';
  } else if (!isValidEmail(emailValue)) {
    emailError.textContent = 'Adresse e-mail invalide';
  } else {
    emailError.textContent = '';
  }
};

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}
