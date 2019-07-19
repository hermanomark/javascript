import { http } from './http';
import { page } from './page';
import { ui } from './ui';

document.addEventListener('DOMContentLoaded', homePage);
document.getElementById('home').addEventListener('click', homePage);
document.getElementById('submit-patient-page').addEventListener('click', addPage);
document.querySelector('.add-patient-submit').addEventListener('click', submitPatient);
document.querySelector('.patients-list').addEventListener('click', deletePatient);
document.querySelector('.patients-list').addEventListener('click', enableEdit);
document.querySelector('.add-form').addEventListener('click', cancelEdit);

function homePage(e) {
    getPatients();
    ui.changeFormState('home');
    
    e.preventDefault();
}

function getPatients() {
    http.get('http://localhost:3000/patients')
    .then(data => page.homeState(data))
    .catch(err => console.log(err));
}

function addPage(e) {
    page.submitState();
    ui.changeFormState('add');

    e.preventDefault();
}

function submitPatient() {
    const admissionNo = document.querySelector('#admission-no').value;
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const admissionDate = document.querySelector('#admission-date').value;
    const hospitalNo = document.querySelector('#hospital-no').value;
    const id = document.querySelector('#id').value;

    const data = {
        admissionNo,
        firstName,
        lastName,
        admissionDate,
        hospitalNo
    }
    
    if (id === '') {
        http.post('http://localhost:3000/patients', data)
            .then(data => {
                ui.clearFields();
                getPatients();
                ui.showAlert('Added patient', 'alert alert-success');
            })
            .catch(err => console.log(err));
    } else {
        http.put(`http://localhost:3000/patients/${id}`, data)
            .then(data => {
                ui.showAlert('Patient Updated', 'alert alert-success');
                ui.changeFormState('add');
                getPatients();
            })
            .catch(err => console.log(err));
    }
}

function deletePatient(e) {
    if (e.target.parentElement.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id;
        if (confirm('Are you sure?')) {
            http.delete(`http://localhost:3000/patients/${id}`)
                .then(data => {
                    getPatients();
                    ui.showAlert('Patient Removed', 'alert alert-success');
                })
                .catch(err => console.log(err));
        }
    }

    e.preventDefault();
}

function enableEdit(e) {
    if (e.target.parentElement.classList.contains('edit')) {
        const id = e.target.parentElement.dataset.id;
        const admissionNo = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        const firstName = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent
        const lastName = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        const admissionDate = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent;
        const hospitalNo = e.target.parentElement.parentElement.previousElementSibling.textContent;

        const data = {
            id,
            admissionNo,
            firstName, 
            lastName, 
            admissionDate, 
            hospitalNo
        }

        page.submitState();
        ui.fillForm(data);   
    }

    e.preventDefault(e);
}

function cancelEdit(e) {
    if (e.target.classList.contains('patient-cancel')) {
        ui.changeFormState('add');
        getPatients();
    }

    e.preventDefault();
}