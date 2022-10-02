import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const formValue = {};

const LOCAL_STORAGE_KEY = "feedback-form-state";

form.addEventListener("input", throttle(onStorageSet, 500));
form.addEventListener('submit', onFormSubmit);


function onStorageSet() {
    formValue.email = form.email.value;
    formValue.message = form.message.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formValue));
};

function onStorageGet() {
    const savedSettings = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedSettings) {
    const parce = JSON.parse(savedSettings);
    form.email.value = parce.email;
    form.message.value = parce.message;
    }
};
onStorageGet();

function onFormSubmit(e) {
    e.preventDefault();
    if (e.currentTarget.email.value === '' || e.currentTarget.message.value === '') {
        alert('Заповни всі поля!');
    } else {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
    form.reset();
};
