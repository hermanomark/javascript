import { http } from './http';
import { page } from './page';
import { ui } from './ui';

document.addEventListener('DOMContentLoaded', homePage);
document.getElementById('home').addEventListener('click', homePage);
document.getElementById('add-patients-page').addEventListener('click', addPage);
document.querySelector('.add-patient-submit').addEventListener('click', submitPatient);

function homePage(e) {
    getPatients();
    
    e.preventDefault();
}

function getPatients() {
    http.get('http://localhost:3000/patients')
    .then(data => page.homeState(data))
    .catch(err => console.log(err));
}

function addPage(e) {
    page.submitState();

    e.preventDefault();
}

function submitPatient() {
    const admissionNo = document.querySelector('#admission-no').value;
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const admissionDate = document.querySelector('#admission-date').value;
    const hospitalNo = document.querySelector('#hospital-no').value;

    const data = {
        admissionNo,
        firstName,
        lastName,
        admissionDate,
        hospitalNo
    }
    
    http.post('http://localhost:3000/patients', data)
    .then(data => {
        ui.showAlert('Added patient', 'alert alert-success');
        ui.clearFields();
        getPatients();
    })
    .catch(err => console.log(err));
}