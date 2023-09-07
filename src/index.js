// index.js
import { validateAge } from './ageValidator';
import { validateEmail } from './emailValidator';
import './main.css';
import { validateName } from './nameValidator';
import { validatePrenom } from './prenomValidator';

const nameInput = document.getElementById('nom');
const prenomInput = document.getElementById('prenom');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nom-error');
const prenomError = document.getElementById('prenom-error');
const ageError = document.getElementById('age-error');
const emailError = document.getElementById('email-error');

nameInput.addEventListener('input', () => {
  validateName(nameInput, nameError);
});

prenomInput.addEventListener('input', () => {
  validatePrenom(prenomInput, prenomError); 
});

ageInput.addEventListener('input', () => {
  validateAge(ageInput, ageError);
});

emailInput.addEventListener('input', () => {
  validateEmail(emailInput, emailError);
});

document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (nameError.textContent === '' && prenomError.textContent === '' && ageError.textContent === '' && emailError.textContent === '') {
    alert('Formulaire soumis avec succès !');
  } else {
    alert('Veuillez corriger les erreurs dans le formulaire.');
  }
});
