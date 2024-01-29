const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const localStorageKey = 'feedback-form-state';
const dataLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));

messageInput.value = dataLocalStorage?.message ?? '';
emailInput.value = dataLocalStorage?.email ?? '';

form.addEventListener('input', () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    alert('All form fields must be filled in');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  localStorage.removeItem(localStorageKey);
  form.reset();
});
